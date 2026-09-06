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

test('publishes non-visible authorship, custody and analytics metadata', async ({ page }) => {
  await expect(page.locator('meta[name="author"]')).toHaveAttribute('content', 'Vadim Anokhin');
  await expect(page.locator('meta[name="publisher"]')).toHaveAttribute('content', 'IOGP');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://vdm-ghb.github.io/incidents/');
  await expect(page.locator('script[data-domain="vdm-ghb.github.io"]')).toHaveAttribute('src', 'https://plausible.io/js/script.js');

  const structuredData = await page.locator('script[type="application/ld+json"]').textContent();
  const metadata = JSON.parse(structuredData ?? '{}');
  expect(metadata.author.name).toBe('Vadim Anokhin');
  expect(metadata.publisher.name).toBe('IOGP');
  expect(metadata.maintainer.name).toBe('');
});

test('header brand and subtitle are visible', async ({ page }) => {
  await expect(page.locator('#header-title')).toContainText('Offshore Weather Incidents');
  await expect(page.locator('#header-sub')).toContainText('Lessons Learned Database');
});

test('database information popover appears on hover and contains attribution', async ({ page }) => {
  const popover = page.locator('#header-brand');
  await expect(popover).toBeVisible();
  await popover.hover();
  await expect(page.locator('#database-popover-content')).toBeVisible();
  await expect(page.locator('#database-popover-content')).toContainText('AI assistance');
  await expect(page.locator('#database-popover-content')).toContainText('Vadim Anokhin');
  await expect(page.locator('#database-popover-content')).not.toContainText('IOGP Metocean Committee');
  await expect(page.locator('#database-popover-content')).toContainText('metocean hazard');
  await page.locator('#database-legal-notice summary').click();
  await expect(page.locator('#database-legal-notice')).toHaveAttribute('open', '');
  await expect(page.locator('#database-legal-notice')).toContainText('not engineering, operational, safety, legal or regulatory advice');
  await expect(page.locator('#database-legal-notice')).toContainText('Public accessibility does not necessarily grant permission');
});

test('map container is rendered', async ({ page }) => {
  await expect(page.locator('#map')).toBeVisible();
  // Leaflet adds leaflet-container class to the #map element itself (not a child)
  await expect(page.locator('#map.leaflet-container')).toBeVisible({ timeout: 10000 });
});

test('Storm Britta record uses the selected maximum wind figure', async ({ page }) => {
  const incident = await page.evaluate(() =>
    (window as any).INCIDENTS_DATA.incidents.find(
      (item: any) => item.id === 'storm-britta-north-sea-damage-2006',
    ),
  );

  expect(incident.image.src).toBe('images/storm-britta-maximum-gust-wind-speed-2006.png');
  await page.locator('#filter-search').fill('Storm Britta');
  await page.locator('.search-result', { hasText: 'Storm Britta - North Sea Offshore and Coastal Damage' }).click();

  const image = page.locator('#modal-content .incident-image-figure img');
  await expect(image).toBeVisible();
  await expect(image).toHaveJSProperty('naturalWidth', 5844);
  await expect(image).toHaveJSProperty('naturalHeight', 4530);
});

test('Seacrest record presents the full evidence-based loss sequence', async ({ page }) => {
  const incidents = await page.evaluate(() =>
    (window as any).INCIDENTS_DATA.incidents.filter(
      (item: any) => item.id === 'seacrest-1989',
    ),
  );

  expect(incidents).toHaveLength(1);
  expect(incidents[0].what_happened).toContain('last documented call');
  expect(incidents[0].what_happened).toContain('met ABS dynamic-stability requirements');
  expect(incidents[0].what_happened).toContain('62 and 69 miles northwest');
  expect(incidents[0].data_quality).toContain('commissioned by Unocal Thailand');

  await page.locator('#filter-search').fill('Drillship Seacrest');
  await page.locator('.search-result', { hasText: 'Drillship Seacrest' }).click();
  await expect(page.locator('#modal-content')).toContainText('Seven of eight anchor cables');

  const image = page.locator('#modal-content .incident-image-figure img');
  await expect(image).toBeVisible();
  await expect(image).toHaveJSProperty('complete', true);
  expect(await image.evaluate((element: HTMLImageElement) => element.naturalWidth)).toBeGreaterThan(0);
});

test('Bohai No. 2 record presents the corrected tow and flooding sequence', async ({ page }) => {
  const incident = await page.evaluate(() =>
    (window as any).INCIDENTS_DATA.incidents.find(
      (item: any) => item.id === 'bohai-no2-1979',
    ),
  );

  expect(incident.persons_on_board).toBe(74);
  expect(incident.survivors).toBe(2);
  expect(incident.fatalities).toBe(72);
  expect(incident.what_happened).toContain('third ventilation trunk broke at its base');
  expect(incident.what_happened).toContain('single tug could not complete the turn');
  expect(incident.executive_summary).toContain('major responsibility accident');
  expect(incident.image.src).toBe('images/bohai-no2-1979-platform.jpg');

  await page.locator('#filter-search').fill('Bohai No. 2');
  await page.locator('.search-result', { hasText: 'Bohai No. 2 Drilling Platform' }).click();
  await expect(page.locator('#modal-content')).toContainText('Only two people survived; 72 died.');
  await expect(page.locator('#modal-content')).toContainText('No verified numerical significant-wave-height value');

  const image = page.locator('#modal-content .incident-image-figure img');
  await expect(image).toBeVisible();
  await expect(image).toHaveJSProperty('naturalWidth', 300);
  await expect(image).toHaveJSProperty('naturalHeight', 241);
});

test('Usumacinta record separates the collision, evacuation, and well-control evidence', async ({ page }) => {
  const incident = await page.evaluate(() =>
    (window as any).INCIDENTS_DATA.incidents.find(
      (item: any) => item.id === 'usumacinta-2007',
    ),
  );

  expect(incident.persons_on_board).toBe(73);
  expect(incident.survivors).toBe(53);
  expect(incident.fatalities).toBe(22);
  expect(incident.what_happened).toContain('20 fatalities and 53 survivors');
  expect(incident.what_happened).toContain('two Morrison Tide rescuers killed');
  expect(incident.what_happened).toContain('well Kab-121');
  expect(incident.environmental_impact).toContain('422 barrels');
  expect(incident.data_quality).toContain('20 Usumacinta evacuees plus two Morrison Tide rescuers');

  await page.locator('#filter-search').fill('Usumacinta');
  await page.locator('.search-result', { hasText: 'Usumacinta / Kab-101 and Well Kab-121' }).click();
  await expect(page.locator('#modal-content')).toContainText('Battelle identified adverse weather');
  await expect(page.locator('#modal-content')).toContainText('CNDH Recommendation 14/2009');
  await expect(page.locator('#modal-content')).toContainText('near-lightship');

  const image = page.locator('#modal-content .incident-image-figure img');
  await expect(image).toBeVisible();
  await expect(image).toHaveJSProperty('naturalWidth', 680);
  await expect(image).toHaveJSProperty('naturalHeight', 510);
});

test('Glomar Java Sea record preserves the Chinese warning decision sequence', async ({ page }) => {
  const incident = await page.evaluate(() =>
    (window as any).INCIDENTS_DATA.incidents.find(
      (item: any) => item.id === 'glomar-java-sea-1983',
    ),
  );

  expect(incident).toBeDefined();
  expect(incident.what_happened).toContain('Chinese meteorologist at Nanhai West');
  expect(incident.what_happened).toContain('suggested moving it');
  expect(incident.what_happened).toContain('neither move off location nor evacuate personnel');
  expect(incident.what_went_wrong).toContain(
    'The NTSB recorded that a Chinese meteorologist warned the storm would pass near the drillship and suggested moving it, but ARCO declined based on the alternative METEO forecast and the perceived lack of shelter; local shipping officials were subsequently told that neither relocation nor personnel evacuation was planned.',
  );
  expect(incident.references.some(
    (reference: { publisher: string }) => reference.publisher.includes('百度百家号')
  )).toBe(true);
});

// ── Incident counter ────────────────────────────────────────────────────────

test('incident counter shows a positive integer', async ({ page }) => {
  const countText = await page.locator('#stat-incidents').textContent();
  const count = parseInt(countText ?? '0', 10);
  expect(count).toBeGreaterThan(0);
});

// ── Filters ─────────────────────────────────────────────────────────────────

test('filters and unified search are visible without a dataset split control', async ({ page }) => {
  await expect(page.locator('#filter-search')).toBeVisible();
  await expect(page.locator('#filter-type')).toBeVisible();
  await expect(page.locator('#filter-region')).toBeVisible();
  await expect(page.locator('#filter-classification')).toBeVisible();
  await expect(page.locator('#filter-consequence')).toBeVisible();
  await expect(page.locator('#dataset-toggle-btn')).toHaveCount(0);
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
  await page.selectOption('#filter-classification', 'design');
  await page.selectOption('#filter-consequence', 'infrastructure');
  await page.click('#filter-reset');

  await expect(page.locator('#filter-type')).toHaveValue('all');
  await expect(page.locator('#filter-region')).toHaveValue('all');
  await expect(page.locator('#filter-classification')).toHaveValue('all');
  await expect(page.locator('#filter-consequence')).toHaveValue('all');
  await expect(page.locator('#filter-search')).toHaveValue('');
});

test('search shows capped matching incidents and reduces results', async ({ page }) => {
  const total = parseInt((await page.locator('#stat-incidents').textContent()) ?? '0', 10);

  await page.locator('#filter-search').fill('Jascon');
  await expect(page.locator('#stat-incidents')).toHaveText('1');
  await expect(page.locator('#search-results')).not.toHaveClass(/hidden/);
  await expect(page.locator('.search-result')).toHaveCount(1);
  await expect(page.locator('.search-result strong')).toHaveText('Jascon-4 Tugboat Capsizes due to Squall');
  expect(total).toBeGreaterThan(1);
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

test('opening a new incident resets the modal scroll position', async ({ page }) => {
  await page.click('#stat-incidents-btn');
  const rows = page.locator('#incidents-tbody tr');
  await rows.nth(0).click();

  await page.locator('#modal-content').evaluate((element) => {
    element.scrollTop = element.scrollHeight;
  });
  expect(await page.locator('#modal-content').evaluate((element) => element.scrollTop)).toBeGreaterThan(0);

  await page.keyboard.press('Escape');
  await page.click('#stat-incidents-btn');
  await rows.nth(1).click();
  expect(await page.locator('#modal-content').evaluate((element) => element.scrollTop)).toBe(0);
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

test('El Faro record preserves the NTSB casualty and Joaquin intensity timing', async ({ page }) => {
  const incident = await page.evaluate(() => {
    return window.INCIDENTS_DATA.incidents.find(
      (item: { id: string }) => item.id === 'el-faro-hurricane-joaquin-2015'
    );
  });

  expect(incident).toBeDefined();
  expect(incident.weather_event_type).toBe('cyclone');
  expect(incident.classification).toBe('maritime');
  expect(incident.fatalities).toBe(33);
  expect(incident.persons_on_board).toBe(33);
  expect(incident.survivors).toBe(0);
  expect(incident.storm_sid).toBe('2015270N27291');
  expect(incident.image.src).toBe('images/el-faro-2012-ntsb-figure-3.jpeg');
  expect(incident.metocean.wind_speed).toContain('110 knots at the time of sinking');
  expect(incident.metocean.notes).toContain('approximately 20 minutes later');
  expect(incident.references[0].url).toContain('MAR1701.pdf');

  const track = await page.evaluate(() => {
    return window.STORM_TRACKS_DATA.features.find(
      (feature: { properties: { sid: string } }) => feature.properties.sid === '2015270N27291'
    );
  });
  expect(track).toBeDefined();
  expect(track.properties.track_points.length).toBeGreaterThan(2);

  await page.click('#stat-incidents-btn');
  const row = page.locator('#incidents-tbody tr', { hasText: 'SS El Faro Sinking During Hurricane Joaquin' });
  await expect(row).toHaveCount(1);
  await row.click();
  await expect(page.locator('#modal-content')).toContainText('All 33 people aboard perished');
  await expect(page.locator('#modal-content')).toContainText('National Transportation Safety Board');
  const image = page.locator('#modal-content .incident-image-figure img');
  await expect(image).toBeVisible();
  await expect(image).toHaveJSProperty('naturalWidth', 800);
  await expect(image).toHaveJSProperty('naturalHeight', 542);
});

test('Jascon-4 record includes the diver rescue video link', async ({ page }) => {
  const incident = await page.evaluate(() => {
    return window.INCIDENTS_DATA.incidents.find(
      (item: { id: string }) => item.id === 'jascon-4-2013'
    );
  });

  expect(incident).toBeDefined();
  const videoReference = incident.references.find(
    (reference: { type: string; url?: string }) => reference.type === 'Video footage'
  );
  expect(videoReference).toBeDefined();
  expect(videoReference.url).toBe('https://www.youtube.com/watch?v=_o82_2YFKlM');
});

test('Mars Katrina record preserves the toppled-rig recovery boundary', async ({ page }) => {
  const incident = await page.evaluate(() => {
    return window.INCIDENTS_DATA.incidents.find(
      (item: { id: string }) => item.id === 'mars-tlp-drilling-rig-topple-katrina-2005'
    );
  });

  expect(incident).toBeDefined();
  expect(incident.weather_event_type).toBe('cyclone');
  expect(incident.classification).toBe('design');
  expect(incident.fatalities).toBe(0);
  expect(incident.storm_sid).toBe('2005236N23285');
  expect(incident.summary).toContain('rig structure failed and toppled onto the deck');
  expect(incident.what_happened).toContain('approximately 1,000-ton rig');
  expect(incident.data_quality).toContain('full independent failure investigation');
  expect(incident.image.src).toBe('images/hurricane-katrina-2005-mars-platform-damage.jpg');

  await page.click('#stat-incidents-btn');
  const row = page.locator('#incidents-tbody tr', { hasText: 'Mars TLP Drilling Rig Topple During Hurricane Katrina' });
  await expect(row).toHaveCount(1);
  await row.click();
  await expect(page.locator('#modal-content')).toContainText('approximately 1,000-ton rig');
  await expect(page.locator('#modal-content .incident-image-figure img')).toHaveJSProperty('naturalWidth', 365);
});

test('Gustav and Ike records preserve combined Keiser damage boundaries', async ({ page }) => {
  const storms = await page.evaluate(() => {
    return window.INCIDENTS_DATA.incidents.filter(
      (item: { id: string }) => item.id === 'hurricane_gustav_2008' || item.id === 'hurricane_ike_2008'
    );
  });

  expect(storms).toHaveLength(2);
  const gustav = storms.find((item: { id: string }) => item.id === 'hurricane_gustav_2008');
  const ike = storms.find((item: { id: string }) => item.id === 'hurricane_ike_2008');
  expect(gustav.infrastructure_impact).toContain('does not support a reliable per-storm split');
  expect(gustav.what_happened).toContain('100% oil-production shut-in peak');
  expect(gustav.what_happened).toContain('27.4 days');
  expect(ike.infrastructure_impact).toContain('60 structures destroyed');
  expect(ike.what_happened).toContain('approximately 1,450 structures');
  expect(ike.what_happened).toContain('does not assign every loss to Ike alone');
  expect(gustav.references.some((reference: { title: string }) => reference.title.includes('The impact of Hurricanes Gustav and Ike'))).toBeTruthy();
  expect(ike.references.some((reference: { title: string }) => reference.title.includes('The impact of Hurricanes Gustav and Ike'))).toBeTruthy();
});

test('EI 322-A record preserves Lili track and foundation-failure evidence', async ({ page }) => {
  const incident = await page.evaluate(() => {
    return window.INCIDENTS_DATA.incidents.find(
      (item: { id: string }) => item.id === 'eugene-island-322a-hurricane-lili-2002'
    );
  });

  expect(incident).toBeDefined();
  expect(incident.weather_event_type).toBe('cyclone');
  expect(incident.classification).toBe('design');
  expect(incident.storm_sid).toBe('2002265N10315');
  expect(incident.what_happened).toContain('84-85 feet');
  expect(incident.what_happened).toContain('pile had been severed');
  expect(incident.what_happened).toContain('opposite jacket leg');
  expect(incident.references[0].doi).toBe('10.4043/16801-MS');
  expect(incident.image.src).toContain('researchgate.net');

  const track = await page.evaluate(() => {
    return window.STORM_TRACKS_DATA.features.find(
      (feature: { properties: { sid: string } }) => feature.properties.sid === '2002265N10315'
    );
  });
  expect(track).toBeDefined();
  expect(track.properties.track_points.length).toBeGreaterThan(10);
});

test('GSP Saturn record uses the supplied platform context image', async ({ page }) => {
  const incident = await page.evaluate(() => {
    return window.INCIDENTS_DATA.incidents.find(
      (item: { id: string }) => item.id === 'gsp-saturn-2014'
    );
  });

  expect(incident).toBeDefined();
  expect(incident.image.src).toContain('GSP-Saturn1.jpg');
  expect(incident.image.credit).toContain('GSP Offshore');
  expect(incident.image.caption).toContain('before the November 2014 tow incident');
});

test('Papaa-305 record uses the Mumbai High field presentation point', async ({ page }) => {
  const incident = await page.evaluate(() => {
    return window.INCIDENTS_DATA.incidents.find(
      (item: { id: string }) => item.id === 'ongc-papaa-305-varapradha-cyclone-tauktae-2021'
    );
  });

  expect(incident).toBeDefined();
  expect(incident.location).toContain('60-70 km west-northwest of Mumbai');
  expect(incident.lat).toBeCloseTo(19.41667, 4);
  expect(incident.lng).toBeCloseTo(71.33333, 4);
});

test('Papaa-305 and Varapradha record preserves the official chronology and casualty scope', async ({ page }) => {
  const incidents = await page.evaluate(() => {
    return window.INCIDENTS_DATA.incidents.filter(
      (item: { id: string }) => item.id === 'ongc-papaa-305-varapradha-cyclone-tauktae-2021'
    );
  });

  expect(incidents).toHaveLength(1);
  const incident = incidents[0];
  expect([incident.persons_on_board, incident.survivors, incident.fatalities]).toEqual([274, 188, 86]);
  expect(incident.what_happened).toContain('186 of 261 survived and 75 died');
  expect(incident.what_happened).toContain('13-person anchor-handling tug');
  expect(incident.what_happened).toContain('INS Kolkata rescued two people; 11 died');
  expect(incident.what_happened).toContain('07:14');
  expect(incident.what_happened).toContain('INS Kochi');
  expect(incident.what_happened).toContain('15:30');
  expect(incident.what_happened).toContain('19:05');
  expect(incident.what_happened).toContain('none of the 36');
  expect(incident.what_happened).toContain('112 were genuine and 80 were not authentic');
  expect(incident.what_happened).toContain('April 2022 Parliamentary Standing Committee report');
  expect(incident.metocean.notes).toContain('cyclone-centre intensity');
  expect(incident.references.some(
    (reference: { publisher: string }) => reference.publisher.includes('India Meteorological Department')
  )).toBe(true);
  expect(incident.image.src).toContain('wpghpjkjnj-1627832120.jpg');
  expect(incident.image.caption).toContain('Rescue operations');

  await page.goto('/?pilot=image#ongc-papaa-305-varapradha-cyclone-tauktae-2021');
  const image = page.locator('#modal-content .incident-image-figure img');
  await expect(image).toBeVisible();
  await expect(image).toHaveAttribute('src', /wpghpjkjnj-1627832120\.jpg$/);
  expect(await image.evaluate((element: HTMLImageElement) => element.naturalWidth)).toBeGreaterThan(0);
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
  await page.goto('/?test=ln-ont#ln-ont-maersk-invincible-2020');

  await expect(page.locator('#modal-overlay')).not.toHaveClass(/hidden/);
  await expect(page.locator('#modal-incident-name')).toHaveText('Sikorsky S-92A LN-ONT Loss of Control');
  await expect(page.locator('#modal-content')).toContainText('42 kt gusting 47 kt');
  await expect(page.locator('#modal-content')).toContainText('5 m');

  const figure = page.locator('.incident-image-figure');
  const image = figure.locator('img');
  await expect(image).toHaveAttribute('src', 'images/ln-ont-maersk-invincible-2020-figure-6.jpg');
  await expect(image).toHaveJSProperty('naturalWidth', 994);
  await expect(image).toHaveJSProperty('naturalHeight', 698);
  await expect(figure.locator('figcaption')).toContainText('illustrated rig is not identical to Maersk Invincible');
  await expect(figure.locator('figcaption')).toContainText('L3 Harris Technologies UK');
});

test('G-TIGH incident shows AAIB findings, references and aircraft photograph', async ({ page }) => {
  await page.goto('/?test=g-tigh#g-tigh-cormorant-a-1992');

  await expect(page.locator('#modal-overlay')).not.toHaveClass(/hidden/);
  await expect(page.locator('#modal-incident-name')).toHaveText('Super Puma G-TIGH Water Impact near Cormorant A');
  await expect(page.locator('#modal-content')).toContainText('11 fatalities');
  await expect(page.locator('#modal-content')).toContainText('54-64 kt');
  await expect(page.locator('#modal-content')).toContainText('icing and salt accretion were excluded');
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
