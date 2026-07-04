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
  await expect(page.locator('#filter-severity')).toBeVisible();
});

test('type filter reduces incident count', async ({ page }) => {
  const totalText = await page.locator('#stat-incidents').textContent();
  const total = parseInt(totalText ?? '0', 10);

  await page.selectOption('#filter-type', 'hurricane');
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
  await page.selectOption('#filter-severity', 'critical');
  await page.click('#filter-reset');

  await expect(page.locator('#filter-type')).toHaveValue('all');
  await expect(page.locator('#filter-region')).toHaveValue('all');
  await expect(page.locator('#filter-severity')).toHaveValue('all');
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

test('Escape key closes the modal', async ({ page }) => {
  await page.click('#stat-incidents-btn');
  await page.locator('#incidents-tbody tr').first().click();
  await expect(page.locator('#modal-overlay')).not.toHaveClass(/hidden/);

  await page.keyboard.press('Escape');
  await expect(page.locator('#modal-overlay')).toHaveClass(/hidden/);
});
