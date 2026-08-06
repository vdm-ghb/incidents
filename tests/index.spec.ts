import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  // Wait for the JS to populate the incident counter
  await expect(page.locator('#stat-incidents')).not.toHaveText('–', { timeout: 10000 });
});

// ── Page structure ──────────────────────────────────────────────────────────

test('has correct page title', async ({ page }) => {
  await expect(page).toHaveTitle(/Offshore Weather Incidents/);
});

test('header brand and subtitle are visible', async ({ page }) => {
  await expect(page.locator('#header-title')).toContainText('Offshore Weather Incidents');
  await expect(page.locator('#header-sub')).toContainText('Lessons Learned Database');
});

test('map container is rendered', async ({ page }) => {
  await expect(page.locator('#map')).toBeVisible();
  // Leaflet adds leaflet-container class to the #map element itself (not a child)
  await expect(page.locator('#map.leaflet-container')).toBeVisible({ timeout: 10000 });
});

// ── Incident counter ────────────────────────────────────────────────────────

test('incident counter shows a positive integer', async ({ page }) => {
  const countText = await page.locator('#stat-incidents').textContent();
  const count = parseInt(countText ?? '0', 10);
  expect(count).toBeGreaterThan(0);
});

// ── Filters ─────────────────────────────────────────────────────────────────

test('all three filter dropdowns are visible', async ({ page }) => {
  await expect(page.locator('#filter-type')).toBeVisible();
  await expect(page.locator('#filter-region')).toBeVisible();
  await expect(page.locator('#filter-classification')).toBeVisible();
});

test('type filter reduces incident count', async ({ page }) => {
  const totalText = await page.locator('#stat-incidents').textContent();
  const total = parseInt(totalText ?? '0', 10);

  await page.selectOption('#filter-type', 'cyclone');
  await page.waitForTimeout(300);

  const filteredText = await page.locator('#stat-incidents').textContent();
  const filtered = parseInt(filteredText ?? '0', 10);

  expect(filtered).toBeGreaterThan(0);
  expect(filtered).toBeLessThanOrEqual(total);
});

test('reset button restores full count', async ({ page }) => {
  const totalText = await page.locator('#stat-incidents').textContent();
  const total = parseInt(totalText ?? '0', 10);

  await page.selectOption('#filter-type', 'tsunami');
  await page.waitForTimeout(200);
  await page.click('#filter-reset');
  await page.waitForTimeout(200);

  const restoredText = await page.locator('#stat-incidents').textContent();
  expect(parseInt(restoredText ?? '0', 10)).toBe(total);
});

test('reset button sets all selects back to "all"', async ({ page }) => {
  await page.selectOption('#filter-type', 'storm');
  await page.selectOption('#filter-region', 'Europe');
  await page.selectOption('#filter-classification', 'drilling');
  await page.click('#filter-reset');

  await expect(page.locator('#filter-type')).toHaveValue('all');
  await expect(page.locator('#filter-region')).toHaveValue('all');
  await expect(page.locator('#filter-classification')).toHaveValue('all');
});

// ── Legend ───────────────────────────────────────────────────────────────────

test('legend is visible on load', async ({ page }) => {
  await expect(page.locator('#legend')).toBeVisible();
  await expect(page.locator('#legend-body')).toBeVisible();
});

test('legend collapses and expands on header click', async ({ page }) => {
  await page.click('#legend-header');
  await expect(page.locator('#legend-body')).toBeHidden();

  await page.click('#legend-header');
  await expect(page.locator('#legend-body')).toBeVisible();
});

// ── All-incidents table overlay ──────────────────────────────────────────────

test('clicking stat button opens the table overlay', async ({ page }) => {
  await expect(page.locator('#table-overlay')).toHaveClass(/hidden/);
  await page.click('#stat-incidents-btn');
  await expect(page.locator('#table-overlay')).not.toHaveClass(/hidden/);
});

test('table overlay has all required columns', async ({ page }) => {
  await page.click('#stat-incidents-btn');
  const headers = page.locator('#incidents-table thead th');
  await expect(headers).toHaveCount(8);
  await expect(headers.nth(1)).toContainText('Incident');
  await expect(headers.nth(2)).toContainText('Year');
  await expect(headers.nth(6)).toContainText('Weather');
});

test('table rows match the incident counter', async ({ page }) => {
  const countText = await page.locator('#stat-incidents').textContent();
  const count = parseInt(countText ?? '0', 10);

  await page.click('#stat-incidents-btn');
  const rows = page.locator('#incidents-tbody tr');
  await expect(rows).toHaveCount(count);
});

test('table close button hides the overlay', async ({ page }) => {
  await page.click('#stat-incidents-btn');
  await expect(page.locator('#table-overlay')).not.toHaveClass(/hidden/);

  await page.click('#table-close');
  await expect(page.locator('#table-overlay')).toHaveClass(/hidden/);
});

// ── Incident modal ───────────────────────────────────────────────────────────

test('clicking a table row opens the incident modal', async ({ page }) => {
  await page.click('#stat-incidents-btn');
  await page.locator('#incidents-tbody tr').first().click();

  await expect(page.locator('#modal-overlay')).not.toHaveClass(/hidden/);
  await expect(page.locator('#modal-content')).not.toBeEmpty();
});

test('modal close button hides the modal', async ({ page }) => {
  await page.click('#stat-incidents-btn');
  await page.locator('#incidents-tbody tr').first().click();
  await page.click('#modal-close');

  await expect(page.locator('#modal-overlay')).toHaveClass(/hidden/);
});

test('Thunder Horse record preserves the investigated causal sequence', async ({ page }) => {
  const incident = await page.evaluate(() => {
    return window.INCIDENTS_DATA.incidents.find(
      (item: { id: string }) => item.id === 'thunder-horse-listing-2005'
    );
  });

  expect(incident).toBeDefined();
  expect(incident.weather_event_type).toBe('cyclone');
  expect(incident.classification).toBe('design');
  expect(incident.source_classification).toBe('external');
  expect(incident.executive_summary).toContain('Thunder Horse was evacuated during commissioning ahead of Hurricane Dennis');
  expect(incident.metocean.wind_speed).toContain('No platform-specific observed wind speed');
  expect(incident.image.src).toContain('semi-submersible-platform-thunder-horse');

  await page.click('#stat-incidents-btn');
  const row = page.locator('#incidents-tbody tr', { hasText: 'Thunder Horse Listing' });
  await expect(row).toHaveCount(1);
  await row.click();
  await expect(page.locator('#modal-content')).toContainText('more than 80 valves');
  await expect(page.locator('#modal-content')).toContainText('Accident Investigation Report');
  const image = page.locator('#modal-content .incident-image-figure img');
  await expect(image).toBeVisible();
  await expect(image).toHaveJSProperty('complete', true);
  expect(await image.evaluate((element: HTMLImageElement) => element.naturalWidth)).toBe(1080);
});

test('Mad Dog derrick-topple record is distinct from generic Ike platform damage wording', async ({ page }) => {
  const incident = await page.evaluate(() => {
    return window.INCIDENTS_DATA.incidents.find(
      (item: { id: string }) => item.id === 'mad-dog-derrick-toppled-ike-2008'
    );
  });

  expect(incident).toBeDefined();
  expect(incident.weather_event_type).toBe('cyclone');
  expect(incident.classification).toBe('design');
  expect(incident.fatalities).toBe(0);
  expect(incident.summary).toContain('drilling derrick');
  expect(incident.summary).toContain('toppled');
  expect(incident.executive_summary).toContain('Mad Dog\'s drilling derrick had been toppled');
  expect(incident.image.src).toBe('images/mad-dog-spar-2012-cndn-bacon-cc-by-sa.jpg');

  await page.click('#stat-incidents-btn');
  const row = page.locator('#incidents-tbody tr', { hasText: 'Mad Dog Drilling Derrick Toppled During Hurricane Ike' });
  await expect(row).toHaveCount(1);
  await row.click();
  await expect(page.locator('#modal-content')).toContainText('resting on the seabed');
  await expect(page.locator('#modal-content')).toContainText('MMS released a damage update');
  const image = page.locator('#modal-content .incident-image-figure img');
  await expect(image).toBeVisible();
  await expect(image).toHaveAttribute('src', 'images/mad-dog-spar-2012-cndn-bacon-cc-by-sa.jpg');
  await expect(image).toHaveJSProperty('naturalWidth', 1280);
});

test('Skandi Pacific ATSB fatality record preserves key causal sequence', async ({ page }) => {
  const incident = await page.evaluate(() => {
    return window.INCIDENTS_DATA.incidents.find(
      (item: { id: string }) => item.id === 'skandi-pacific-fatality-pilbara-2015'
    );
  });

  expect(incident).toBeDefined();
  expect(incident.weather_event_type).toBe('storm');
  expect(incident.classification).toBe('maritime');
  expect(incident.fatalities).toBe(1);
  expect(incident.persons_on_board).toBe(12);
  expect(incident.summary).toContain('open stern');
  expect(incident.summary).toContain('fatally crushed one crewmember');

  await page.click('#stat-incidents-btn');
  const row = page.locator('#incidents-tbody tr', { hasText: 'Skandi Pacific Fatality During Cargo Securing in Rough Seas' });
  await expect(row).toHaveCount(1);
  await row.click();
  await expect(page.locator('#modal-content')).toContainText('Atwood Osprey');
  await expect(page.locator('#modal-content')).toContainText('0523');
  await expect(page.locator('#modal-content')).toContainText('ATSB');
});

test('Escape key closes the modal', async ({ page }) => {
  await page.click('#stat-incidents-btn');
  await page.locator('#incidents-tbody tr').first().click();
  await expect(page.locator('#modal-overlay')).not.toHaveClass(/hidden/);

  await page.keyboard.press('Escape');
  await expect(page.locator('#modal-overlay')).toHaveClass(/hidden/);
});

test('Gunashli pilot image appears in the summary and opens full-size', async ({ page }) => {
  await page.goto('/?pilot=image#gunashli-2015');

  const figure = page.locator('.incident-image-figure');
  await expect(figure).toBeVisible();
  await expect(figure.locator('img')).toHaveAttribute('src', 'images/gunashli-2015-platform-azernews.jpg');
  await expect(figure.locator('figcaption')).toContainText('Trend News Agency via AzerNews');

  await figure.locator('button').click();
  await expect(page.locator('#image-lightbox')).not.toHaveClass(/hidden/);
  await expect(page.locator('#image-lightbox-image')).toHaveJSProperty('naturalWidth', 1200);
  await expect(page.locator('#image-lightbox-image')).toHaveJSProperty('naturalHeight', 673);

  await page.keyboard.press('Escape');
  await expect(page.locator('#image-lightbox')).toHaveClass(/hidden/);
  await expect(page.locator('#modal-overlay')).not.toHaveClass(/hidden/);
});

test('Gunashli pilot image is included in the print report', async ({ page }) => {
  await page.goto('/?pilot=image#gunashli-2015');
  await page.evaluate(() => { window.print = () => {}; });
  await page.click('#modal-print');

  const printImage = page.locator('#print-report .incident-summary-image');
  await expect(printImage).toHaveCount(1);
  await expect(printImage).toHaveAttribute('src', 'images/gunashli-2015-platform-azernews.jpg');
});

test('Gunashli map tooltip shows the selected image below the blurb', async ({ page }) => {
  const marker = page.locator('.leaflet-marker-icon[title="Gunashli Platform No. 10"]').first();
  await marker.hover();

  const tooltip = page.locator('.leaflet-tooltip');
  await expect(tooltip.locator('.tooltip-summary')).toBeVisible();
  await expect(tooltip.locator('.tooltip-image')).toHaveAttribute('src', 'images/gunashli-2015-platform-azernews.jpg');
});

test('LN-ONT incident shows verified weather data and NSIA Figure 6', async ({ page }) => {
  await page.goto('/#ln-ont-maersk-invincible-2020');
  // beforeEach already loaded '/'; a hash-only goto is a same-document
  // navigation and won't re-run the page's load-time hash check, so force
  // a real reload (mirrors a user opening a shared deep link in a fresh tab).
  await page.reload();
  await expect(page.locator('#stat-incidents')).not.toHaveText('–', { timeout: 10000 });

  await expect(page.locator('#modal-incident-name')).toHaveText('Sikorsky S-92A LN-ONT Loss of Control');
  await expect(page.locator('#modal-content')).toContainText('42 kt gusting 47 kt');
  await expect(page.locator('#modal-content')).toContainText('5 m “Sea State”');

  const figure = page.locator('.incident-image-figure');
  const image = figure.locator('img');
  await expect(image).toHaveAttribute('src', 'images/ln-ont-maersk-invincible-2020-figure-6.jpg');
  await expect(image).toHaveJSProperty('naturalWidth', 994);
  await expect(image).toHaveJSProperty('naturalHeight', 698);
  await expect(figure.locator('figcaption')).toContainText('illustrated rig is not identical to Maersk Invincible');
  await expect(figure.locator('figcaption')).toContainText('L3 Harris Technologies UK');
});

test('G-TIGH incident shows AAIB findings, references and aircraft photograph', async ({ page }) => {
  await page.goto('/#g-tigh-cormorant-a-1992');
  // See comment in the LN-ONT test above: force a real reload so the
  // page's load-time hash check actually runs.
  await page.reload();
  await expect(page.locator('#stat-incidents')).not.toHaveText('–', { timeout: 10000 });

  await expect(page.locator('#modal-incident-name')).toHaveText('Super Puma G-TIGH Water Impact near Cormorant A');
  await expect(page.locator('#modal-content')).toContainText('11 fatalities');
  await expect(page.locator('#modal-content')).toContainText('54-64 kt');
  await expect(page.locator('#modal-content')).toContainText('icing and salt accretion were excluded as contributors');
  await expect(page.locator('#modal-content')).toContainText('AAIB Aircraft Accident Report 2/93');

  const figure = page.locator('.incident-image-figure');
  const image = figure.locator('img');
  await expect(image).toHaveAttribute('src', 'images/g-tigh-cormorant-a-1992-airhistory-lewis-grant.png');
  await expect(image).toHaveJSProperty('naturalWidth', 1500);
  await expect(image).toHaveJSProperty('naturalHeight', 1026);
  await expect(figure.locator('figcaption')).toContainText('This is a generic aircraft photograph, not an image of the accident sequence.');
  await expect(figure.locator('figcaption')).toContainText('Lewis Grant / AirHistory.net');
  await expect(figure.locator('figcaption')).toContainText('permission required');
});
