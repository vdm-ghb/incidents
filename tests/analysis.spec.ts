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

  expect(procedures).toMatchObject({ count: 49, width: 100 });
  expect(evacuation).toMatchObject({ count: 40, width: expect.closeTo(81.6, 1) });
  expect(procedures?.count).toBeGreaterThan(evacuation?.count ?? 0);
  expect(procedures?.width).toBeGreaterThan(evacuation?.width ?? 0);
});

test('discipline matrix includes the Sinbad decommissioning lift candidate', async ({ page }) => {
  await page.goto('/working%20documentation/causal_analysis.html');

  await expect(page.locator('#grid')).toContainText('Lifting, cargo and deck operations');
  await page.locator('[data-cell="marine_lifting_deck_ops|decommissioning"]').click();
  await expect(page.locator('#box')).toContainText('Sinbad Platform Decommissioning Near Miss');
});

test('every incident popup image decodes in both analysis-page summary sleeves', async ({ page }) => {
  await page.goto('/');
  const incidents = await page.evaluate(() => (window as any).INCIDENTS_DATA.incidents
    .map((incident: any) => ({
      id: incident.id,
      src: incident.image?.src ?? 'images/incident-visual-unavailable.svg',
    })));

  expect(incidents).toHaveLength(81);
  expect(incidents.every((incident: { src: string }) => !/^https?:\/\//.test(incident.src))).toBe(true);
  for (const explorer of ['bowtie_view.html', 'causal_analysis.html']) {
    for (const incident of incidents) {
      await page.goto(`/working%20documentation/${explorer}#${encodeURIComponent(incident.id)}`);
      const image = page.locator('#sleeve img');
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