import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

const causalTags = JSON.parse(readFileSync('working documentation/causal_tags_full.json', 'utf8'));
const causalRecord = (id: string) => causalTags.incidents.find((incident: any) => incident.id === id);
const hasCandidateCause = (id: string, concept: string) =>
  causalRecord(id).tags.some((tag: any) => tag.concept === concept && tag.roles.cause > 0);

test('bow-tie explorer labels relationships as candidate review items', async ({ page }) => {
  await page.goto('/working%20documentation/bowtie_view.html');

  await expect(page.locator('.defs')).toContainText('Candidate structure');
  await expect(page.locator('.defs')).toContainText('source-unlinked');
  await expect(page.locator('body')).not.toContainText('in place');
  const states = await page.locator('.st').allTextContents();
  expect(states.every((state) => state === 'candidate failed or absent')).toBe(true);
  await expect(page.locator('body')).toContainText('candidate failed or absent');
});

test('causal theme explorer separates candidate causal wording from learning themes', async ({ page }) => {
  await page.goto('/working%20documentation/causal_analysis.html');

  await expect(page.locator('.candidate-box')).toContainText('not treated as a cause');
  await expect(page.locator('.legend')).toContainText('Candidate recorded causal statement');
  await expect(page.locator('.legend')).toContainText('Learning theme only');
  await expect(page.locator('body')).toContainText('must be reviewed');
  await expect(page.locator('body')).not.toContainText('high confidence');
});

test('causal theme heatmap uses one colour scale across the whole matrix', async ({ page }) => {
  await page.goto('/working%20documentation/causal_analysis.html');

  await expect(page.locator('.hint').nth(1)).toContainText('one scale across the full matrix');
  const cells = await page.locator('#grid td.hot').evaluateAll((elements) => elements.map((cell) => ({
    count: cell.textContent?.trim(),
    color: (cell as HTMLElement).style.background,
  })));
  const colorsByCount = new Map<string, Set<string>>();
  for (const cell of cells) {
    const colors = colorsByCount.get(cell.count ?? '') ?? new Set<string>();
    colors.add(cell.color);
    colorsByCount.set(cell.count ?? '', colors);
  }
  expect([...colorsByCount.values()].every((colors) => colors.size === 1)).toBe(true);
});

test('causal-theme bar length is scaled by total occurrence count', async ({ page }) => {
  await page.goto('/working%20documentation/causal_analysis.html');

  const bars = await page.locator('#themes .row').evaluateAll((rows) => rows.map((row) => {
    const label = row.querySelector('.nm')?.textContent?.trim();
    const count = Number(row.querySelector('.ct')?.textContent?.trim());
    const segments = [...row.querySelectorAll('.bar i')] as HTMLElement[];
    const width = segments.reduce((sum, segment) => sum + Number.parseFloat(segment.style.width), 0);
    return { label, count, width };
  }));
  const procedures = bars.find((bar) => bar.label === 'Procedures, training and competence');
  const evacuation = bars.find((bar) => bar.label === 'Evacuation, abandonment and survival craft');

  expect(procedures).toMatchObject({ count: 48, width: 100 });
  expect(evacuation).toMatchObject({ count: 40, width: expect.closeTo(83.4, 1) });
  expect(procedures?.count).toBeGreaterThan(evacuation?.count ?? 0);
  expect(procedures?.width).toBeGreaterThan(evacuation?.width ?? 0);
});

test('discipline matrix includes the Sinbad decommissioning lift candidate', async ({ page }) => {
  await page.goto('/working%20documentation/causal_analysis.html');

  await expect(page.locator('#grid')).toContainText('Lifting, cargo and deck operations');
  await page.locator('[data-cell="marine_lifting_deck_ops|decommissioning"]').click();
  await expect(page.locator('#box')).toContainText('Sinbad Platform Decommissioning Near Miss');
});

test('analysis summaries show real images and omit placeholders for records without images', async ({ page }) => {
  await page.goto('/');
  const incidents = await page.evaluate(() => (window as any).INCIDENTS_DATA.incidents
    .map((incident: any) => ({
      id: incident.id,
      src: incident.image?.src ?? null,
    })));

  expect(incidents).toHaveLength(83);
  expect(incidents.some((incident: { src: string | null }) => incident.src === null)).toBe(true);
  expect(incidents.every((incident: { src: string | null }) => !incident.src || !/^https?:\/\//.test(incident.src))).toBe(true);
  for (const explorer of ['bowtie_view.html', 'causal_analysis.html']) {
    for (const incident of incidents) {
      await page.goto(`/working%20documentation/${explorer}#${encodeURIComponent(incident.id)}`);
      const image = page.locator('#sleeve img');
      if (!incident.src) {
        await expect(image).toHaveCount(0);
        await expect(page.locator('#sleeve')).not.toContainText('Placeholder visual');
        continue;
      }
      await expect(image).toHaveAttribute('src', `../${incident.src}`);
      await expect(image).toHaveJSProperty('complete', true);
      expect(await image.evaluate((element: HTMLImageElement) => element.naturalWidth), `${explorer}: ${incident.id}`).toBeGreaterThan(0);
      expect(await image.evaluate((element: HTMLImageElement) => element.naturalHeight), `${explorer}: ${incident.id}`).toBeGreaterThan(0);
    }
  }
});

test('squall-onset threat does not classify an internal-wave incident', async ({ page }) => {
  await page.goto('/working%20documentation/bowtie_view.html');

  await page.selectOption('#hz', 'internal_wave');
  await page.selectOption('#te', 'loss_of_position');
  await expect(page.locator('#c-th')).not.toContainText('Squall arrives with no time for response');

  await page.selectOption('#hz', 'squall');
  await page.selectOption('#te', 'loss_of_stability');
  await expect(page.locator('#c-th')).toContainText('Squall arrives with no time for response');
});

test('causal themes do not recode mooring, rescue or consequences as structural, aviation or flooding mechanisms', () => {
  expect(hasCandidateCause('seacrest-1989', 'structural_failure')).toBe(false);
  expect(hasCandidateCause('kolskaya-2011', 'structural_failure')).toBe(false);
  expect(hasCandidateCause('amber-sea-worker-2016', 'structural_failure')).toBe(false);
  expect(hasCandidateCause('jascon-4-2013', 'stability_flooding')).toBe(false);

  const aviationCandidates = causalTags.incidents.filter((incident: any) =>
    incident.tags.some((tag: any) => tag.concept === 'aviation_helideck' && tag.roles.cause > 0));
  expect(aviationCandidates).not.toHaveLength(0);
  expect(aviationCandidates.every((incident: any) => incident.classification === 'aviation')).toBe(true);

  expect(hasCandidateCause('kielland-1980', 'structural_failure')).toBe(true);
  expect(hasCandidateCause('sea-gem-1965', 'structural_failure')).toBe(true);
});

test('asset/vessel matrix ranks asset types and counts mixed incidents in two columns', async ({ page }) => {
  await page.goto('/working%20documentation/causal_analysis.html');

  await expect(page.locator('h2', { hasText: 'Theme map by asset / vessel type' })).toBeVisible();
  await expect(page.locator('h2', { hasText: '4 · Themes that occur together' })).toBeVisible();

  const headers = await page.locator('#grid-asset tr').first().locator('th').allTextContents();
  const columns = headers.slice(1).map((header) => header.replace(/\s+/g, ' ').trim().toUpperCase());
  // Support vessels are the most common asset type; the regional bucket is retained.
  expect(columns[0]).toContain('SUPPORT');
  expect(columns.some((column) => column.includes('MULTIPLE / REGIONAL'))).toBe(true);
  expect(columns.some((column) => column.includes('HELICOPTER'))).toBe(true);

  // Every asset column carries a header glyph.
  const icons = await page.locator('#grid-asset tr').first().locator('th svg').count();
  expect(icons).toBe(columns.length);

  // A dual-asset incident (support vessel working a semi-submersible) appears in both columns.
  const inColumn = async (asset: string) => {
    await page.locator(`[data-acell="station_keeping_mooring|${asset}"]`).click();
    const names = await page.locator('#box .item b').allTextContents();
    await page.locator('#box .close').click();
    return names.map((name) => name.trim());
  };
  expect(await inColumn('Semi-submersible')).toContain('Skandi Hawk / Safe Astoria Near-Miss');
  expect(await inColumn('Support / supply / tug / barge / survey')).toContain('Skandi Hawk / Safe Astoria Near-Miss');
});

test('asset column record count opens a selectable incident summary table', async ({ page }) => {
  await page.goto('/working%20documentation/causal_analysis.html');

  await page.locator('#grid-asset th .rec[data-asummary="Support / supply / tug / barge / survey"]').click();
  await expect(page.locator('#box h3')).toHaveText('Support / supply / tug / barge / survey');
  await expect(page.locator('#box .sub')).toContainText('13 incidents');
  await expect(page.locator('#box table.summ tbody tr')).toHaveCount(13);
  await expect(page.locator('#box table.summ thead th').nth(5)).toHaveText('Consequence');
  // Rows are ordered by fatalities: the 86-fatality ONGC record is first.
  await expect(page.locator('#box table.summ tbody tr').first()).toContainText('ONGC Offshore');

  // A name in the summary opens the full record.
  await page.locator('#box table.summ tbody tr td a.ilink').first().click();
  await expect(page.locator('#sleeve')).toHaveClass(/on/);
  await expect(page.locator('#sleeve h3')).toContainText('ONGC Offshore');
});

test('discipline column record count opens the same selectable summary table', async ({ page }) => {
  await page.goto('/working%20documentation/causal_analysis.html');

  await page.locator('#grid th .rec[data-dsummary="maritime"]').click();
  await expect(page.locator('#box h3')).toHaveText('maritime');
  await expect(page.locator('#box .sub')).toContainText('incidents in this discipline');
  await expect(page.locator('#box table.summ thead th').nth(1)).toHaveText('Incident');
  // Ordered by fatalities: Alexander L. Kielland (123) leads the maritime discipline.
  await expect(page.locator('#box table.summ tbody tr').first()).toContainText('Alexander L. Kielland');
});