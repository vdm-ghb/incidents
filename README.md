# IOGP Metocean Related Incidents

An interactive map and database of offshore oil & gas incidents driven by weather, sea state, and other metocean factors.

## Purpose

Collects lessons-learned case studies — platform losses, tow failures, hurricane damage, rogue waves, internal-wave/soliton events, and related climate risks — into a single browsable, filterable database, for use as a reference and training resource on metocean-related offshore risk.

## Status

In progress. 96 incidents documented across a two-axis taxonomy (metocean **event type** + operational **classification**). A full fact-check remediation pass is complete (see `FACT_CHECK_AUDIT.md`); content is still being extended and refined.

## Getting started

No build step or dependencies are required to view the site itself — it's static HTML/CSS/JS.

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

To run the Playwright test suite:

```bash
npm install
npx playwright install chromium
npm test           # headless
npm run test:ui    # interactive UI mode
npm run test:headed
```

To validate the internal analysis explorer wording and evidence boundary:

```bash
npm run test:analysis
```

To regenerate the source-provenance and regional coverage audit:

```bash
node scripts/audit_reference_sources.js
```

To rebuild the management presentations and curated learning-theme word cloud after updating verified content or screenshots:

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements-dev.txt
.\.venv\Scripts\python.exe scripts\build_incident_wordcloud.py
.\.venv\Scripts\python.exe scripts\build_management_presentation.py
.\.venv\Scripts\python.exe scripts\build_management_presentation_detailed.py
```

The concise and detailed editable PowerPoints and PDFs are retained under `working documentation/`. Presentation screenshots, the dark and transparent word-cloud images, and the ranked concept-frequency CSV are retained under `working documentation/presentation assets/`.

## Updating internal analysis after incident changes

The Bow-Tie Explorer and Causal Theme Map are generated artifacts. Do not edit their HTML or JSON output directly. Whenever an incident is added, removed, materially rewritten, reclassified, or has its `what_went_wrong`, `lessons_learned`, or `actions` fields changed, rerun the complete analysis workflow before publishing.

1. Update `data/incidents.js` from cited source material. Set both taxonomy axes correctly: `weather_event_type` identifies the metocean phenomenon and `classification` identifies the operational discipline. Do not conflate distinct hazards such as squall/thunderstorm and internal wave/soliton.
2. Keep causal statements, learning points and prospective actions in their correct fields. `what_went_wrong` must contain evidence-bounded historical statements; `lessons_learned` and `actions` must not be written as evidence that a past control existed or failed.
3. Provide a local `image` object where a suitable visual is retained. Use a truthful caption and credit; if no incident-specific visual is available, the summary omits the image area. Do not use a remote image URL as a selected image.
4. For a named cyclone, add `storm_sid` and `storm_name`, then rebuild `data/storm_tracks.js` using the named-cyclone workflow below.
5. Regenerate both analysis datasets and their viewers from the repository root:

```bash
node scripts/derive_bowtie.js --out "working documentation/bowtie_full.json"
node scripts/derive_causal_tags.js --out "working documentation/causal_tags_full.json"
node scripts/build_bowtie_view.js
node scripts/build_causal_view.js
```

6. Review the changed candidate output in [Causal Theme Map](working%20documentation/causal_analysis.html) and [Bow-Tie Explorer](working%20documentation/bowtie_view.html). Check that the incident is present where evidence supports it, that unrelated hazard families are not matched, and that the causal-theme bar count and full bar length agree.
7. Run `npm run test:analysis`, then `npm test` before considering the update complete. The analysis suite checks all 96 incident summaries in both internal views, including selected-image rendering and image-less records, theme-map scale/length logic, and known classification boundaries.

Generated tags are retrieval candidates, not accepted HSSE findings. Follow [ANALYSIS_CODING_PROTOCOL.md](working%20documentation/ANALYSIS_CODING_PROTOCOL.md) for source-locator, causal-stage, and analyst-acceptance requirements.

Node.js LTS is required. The Playwright configuration starts the local static server automatically for test runs.

The incident-image rollout also has Python verification paths for environments without Node/npm:

```powershell
.\.venv\Scripts\python.exe .\tests\audit_image_coverage.py
.\.venv\Scripts\python.exe .\tests\verify_gunashli_image.py
```

## Usage

- Open `index.html` (locally or via GitHub Pages) to browse the map.
- Filter incidents by **event type** (metocean hazard), **region**, **classification** (discipline), or **consequence** using the header controls.
- Search incident names, vessel/platform names, taxonomy, categories, regions and consequences. As you type, a short list of matching incidents appears beside the search field; free text also searches the incident narratives, lessons and actions.
- Anonymous page-visit analytics are provided by Umami Cloud for the published GitHub Pages site; no analytics dashboard or visitor identifiers are exposed in the webpage.
- Markers are coloured by classification and lettered by event type (see the on-map legend).
- Hover over a marker for the incident blurb and, where selected, a scaled image thumbnail.
- Click a marker for the full lessons-learned writeup. Selected images appear after the Summary text and open at their natural size when clicked.
- Use the timeline strip along the bottom of the map: one dot per incident by date (coloured by operation), hover for the incident card (its marker pulses; an off-screen marker is panned into view after a short dwell), click to open it. Drag the two handles to filter by year range (map, count and table follow; Reset clears it), press ▶ to play through the years, or collapse it to a pill (remembered; phones start collapsed). Dots excluded by the other filters stay visible but dimmed.
- See `PUBLISHING.md` for how to publish updates to GitHub Pages, and the field reference for adding new incidents.

## Project structure

- `index.html` — page shell and map/filter controls
- `js/app.js` — map rendering, filtering, and UI logic (Leaflet)
- `js/timeline.js` — the incident timeline strip (dots by date, year-range filter, play-through); data-agnostic, wired up through `app.js` callbacks
- `css/style.css` — styling
- `data/incidents.js` — the incident dataset (source of truth; see `PUBLISHING.md` for the field schema)
- `pack.html`, `css/pack.css`, `js/pack.js` — the **Safety Moment** sharing pack: a print-ready 16:9 slide deck generated in-browser from `incidents.js` for one incident (`pack.html?id=<incident-id>`), opened from the incident modal's Safety Moment button (same tab) and printable to a PowerPoint-sized PDF. Optional per-record `pack_images` array adds an "Evidence and aftermath" gallery slide; optional `pack_text` object supplies presenter-length wording that overrides the full sleeve fields in the pack only.
- `js/incident-sleeve.js` — shared incident-panel renderer used by both internal explorers (Bow-Tie Explorer, Causal Theme Map); reads the live `window.INCIDENTS_DATA`
- `images/` — native-resolution incident images and technical diagrams, with selected assets displayed from each incident's `image` field
- `tests/` — Playwright end-to-end tests against the static site
- `background files/` — source material (reports, papers, internal presentations) used to research and write up incidents
- `FACT_CHECK_AUDIT.md` — independent fact-check pass over every incident record, flagging discrepancies and unverifiable claims
- `EXECUTIVE_SUMMARIES.md`, `INCIDENT_IMAGES.md` — supporting content notes
- `inject_summaries.py` — helper script used when bulk-adding executive summaries to incident records
- `scripts/derive_bowtie.js`, `derive_causal_tags.js`, `build_bowtie_view.js`, `build_causal_view.js` — generate the internal Bow-Tie Explorer and Causal Theme Map from `data/incidents.js` (see "Updating internal analysis after incident changes" above)
- `working documentation/bowtie_view.html`, `causal_analysis.html`, `bowtie_full.json`, `causal_tags_full.json`, `ANALYSIS_CODING_PROTOCOL.md` — the generated analysis views and their protocol doc; these five files are published even though the rest of `working documentation/` is gitignored (internal-only)

## Tech stack

Static HTML/CSS/JS, [Leaflet](https://leafletjs.com/) for the map, no framework or bundler. [Playwright](https://playwright.dev/) for end-to-end tests. Hosted on GitHub Pages.

## Notes / decisions

- **Two-axis taxonomy.** Each incident carries `weather_event_type` (the metocean hazard: cyclone, storm, squall, lightning, rogue/internal wave, current, tsunami, climate, equipment) and `classification` (the operational discipline: drilling, maritime/tow, aviation, onshore, coastal, design, pipeline, survey). Markers use classification for colour and event type for the letter. This replaced the earlier single "severity" axis.
- **Source metadata remains on each record.** `source_classification` and `shell_internal_only` are retained for provenance and filtering/analysis outside the public browsing workflow; the webpage presents one unified incident dataset.
- **Authorship metadata.** The HTML and JSON-LD identify Vadim Anokhin as developer without adding visible attribution to the map interface. Custodian attribution is intentionally left open for later confirmation. The database popover includes the IOGP disclaimer and a compact use-and-limitations notice covering source uncertainty, non-advice status and third-party rights.
- **Regions** are a `region` string per record, filtered in the UI and used for map zoom bounds (`REGION_BOUNDS` in `js/app.js`). Current regions: Africa, Asia, Australia, Europe, Middle East, North America, Russia and Central Asia, South America. (Australia was split out from the former "Asia / Australasia" — 5 NW-Shelf / WA incidents.)
- **Neutral operator naming.** In incident body text, refer to the duty holder generically ("the operator", "the project team"); name a specific company only in the `operator` field and in source/reference citations. Applied to Big Foot and Gorgon; keep this convention for new entries.
- **Fact-check remediation complete.** The 2026-07-04 audit (`FACT_CHECK_AUDIT.md`) flagged dead/fabricated reference URLs and ~15 records with incorrect details; all four tiers have since been remediated (casualty figures, locations, dates, and sources corrected or hedged; unverifiable claims flagged with `data_quality` notes).
- **Incident numbering** in `data/incidents.js` comments has gaps (removed/merged records were never renumbered) — gaps are expected, not a data error. The comment header may cite a different count from the actual array length; trust `INCIDENTS_DATA.incidents.length` (currently 96).
- **Verification workflow.** Changes to `data/incidents.js` are validated by reloading the page under Playwright and asserting on `window.INCIDENTS_DATA` (total count, no duplicate IDs, taxonomy fields, marker rendering) rather than eyeballing.
- **Analysis evidence boundary.** The internal Bow-Tie Explorer and Causal Theme Map (`working documentation/bowtie_view.html`, `causal_analysis.html`, linked from the header) are keyword-derived candidate-retrieval tools, not accepted causal analyses. Generated relationships are source-unlinked and review-required; use `working documentation/ANALYSIS_CODING_PROTOCOL.md` to accept, reject or mark evidence insufficient before treating a result as an HSSE finding. These generated views and their JSON data (plus `ANALYSIS_CODING_PROTOCOL.md`) are published alongside the public site — a deliberate, narrow exception to the `working documentation/` gitignore rule (see the negation entries in `.gitignore`); every other file under that directory stays internal-only.
- **Mobile navigation.** At phone widths, the header expands into title/count, full-width search, and a horizontally scrollable filter row so the filtered incident count and existing controls remain reachable without changing the map, table or incident modal workflow.
- **Named cyclone track workflow.** Whenever an incident names a hurricane, tropical cyclone, typhoon or other tracked storm, look up its IBTrACS SID in `data/ibtracs/ibtracs_ALL_list_v04r01.csv`, add `storm_sid` and `storm_name` to the incident, and rebuild `data/storm_tracks.js` with `python scripts/build_ibtracs_track_subset.py --incidents-file data/incidents.js`. Confirm that the SID appears in the generated `selected_sids` list and that the incident marker can display the track.
- **Image provenance.** `working documentation/INCIDENT_IMAGES.md` is the source/credit/rights catalogue for local assets. Public availability is not treated as permission to reuse; internal LFE material remains restricted, and files are retained at native resolution without upscaling or recompression.
- **One selected image per incident.** An optional singular `image` object on an incident (`src`, `alt`, `caption`, `credit`) drives the map-tooltip thumbnail, Summary figure, full-size lightbox and capped print figure from one source of truth. An optional `images` array (same fields) overrides it in the Summary, lightbox and print views with a side-by-side gallery; the map-tooltip thumbnail still uses `image`. Currently only `typhoon-tlp-capsize-rita-2005` uses `images` (before/after pair). Separately, `pack_images` (same fields) feeds only the Safety Moment pack gallery (7 records). 75 incidents display a selected `image`; all 91 image references across `image`/`images`/`pack_images` resolve to local files, zero remote URLs (verified by loading `window.INCIDENTS_DATA`, 2026-10-02); the Mars Katrina record deliberately reuses the incident-specific photograph already selected for the broader Katrina record. Dupal has two catalogued local candidates but was explicitly left unselected. Copyrighted and restricted assets are clearly labelled as reference-only or permission-required.
- **Sleeve keeps the full account; the pack gets `pack_text`.** Safety Moment trimming must go into a record's `pack_text` (same keys as the sleeve fields: `summary`, `what_happened`, `what_went_wrong`, `lessons_learned`, `actions`), never by shortening the sleeve fields. `pack_text` is in the analysis scripts' skip-lists so trimmed wording isn't counted twice as evidence (guarded by a test in `tests/analysis.spec.ts`).
- **Timeline filter gotcha.** `incidentMatchesFilters(incident, ignoreYears)` takes a second argument, so never pass it straight to `Array.filter` (the index would be read as `ignoreYears`); use `getFilteredIncidents()`. The timeline's slider row must keep `pointer-events:none` or it blocks the bottom row of dots. `js/timeline.js` is cache-busted by the pre-commit hook along with the other four assets.
- **No remote image URLs, and no placeholder for image-less records.** A selected `image.src` must be a local file under `images/`, never a remote URL — remote hosts can go offline, get rate-limited, or change content without notice. If no suitable local visual is retained for an incident, leave `image` unset; the map/Bow-Tie Explorer/Causal Theme Map summary then omits the image area entirely rather than showing a placeholder graphic (the map-tooltip thumbnail is unaffected either way — it simply shows nothing when no image is set).

### Session handoff (next steps)

**Completed (2026-10-16 — timeline strip, sleeve narratives restored, `pack_text`, Mumbai High North rebuilt):**
- Merged `IOGP-Metocean-Incidents-Upload-No-PDFs-2026-10-16.zip` (334 files) with the stage-outside-the-project diff method (extracted with Python `zipfile`; macOS `unzip` fails on the Cyrillic Amur River `.docx` filename). ID-set diffing: **96 → 96**, no additions/removals/duplicates; 63 records changed, all matching the dump author's notes:
  - **Sleeve narratives restored** for 59 records: the 1 Oct Safety Moment trims had shortened the shared fields; the long text is back and the trimmed wording moved verbatim into a new per-record `pack_text` object that `js/pack.js` (`withPackText`) uses in place of the sleeve fields. 62 records now carry `pack_text`.
  - **Mumbai High North (2005) rebuilt** from OISD/HSE/IChemE/LMA sources (2 → 7 references; new extracts in `background files/MHN_2005_*`); Trinity II, G-TIGK and VH-BHK sleeves expanded from their primary reports; EC175 G-MCSH gains the AAIB recommendations and an Energy Voice video reference (pack close slide now lists video references).
  - **Timeline strip** (`js/timeline.js`, `app.js` wiring, `style.css`) and a new IOGP **Disclaimer** section in the database popover (`index.html`).
- **Mojibake, sixth time:** 129 lines double-encoded plus CRLF. Repaired with the same run-wise cp1252→UTF-8 round-trip, normalised to LF; zero `â`/`Ã`/`Â` left, and the only new characters are genuine (±, ×, ⁶, ² in restored G-TIGK/Big Foot text).
- **Kept live over dump (same regressions again):** Ocean Warwick `storm_sid` (restored `2005236N23285`), `playwright.config.ts` `python3`, `package-lock.json` Playwright 1.62.1, cache-bust params + same-tab analysis links in `index.html`, the `images`/`pack_images` skip-list entries in both derive scripts, `tests/verify_gunashli_image.py`, `analysis.spec.ts` (dump dropped the image-path test), `images/kolskaya-2011-capsized.jpg` (dump's copy is again a same-size recompression). `pack.css`, `incident-sleeve.js`, both build scripts and `storm_tracks.js` differed only by CRLF.
- **Tests merged:** took the dump's `index.spec.ts` (12 new/updated tests: timeline x7, MHN, EC175 x2, pack/sleeve split) and re-appended the 6 live tests it had dropped (laptop header, same-tab links, images gallery, storm date labels, Trinity II pack, all-incident pack render); kept the live GSP Saturn assertion (Wikipedia reference still present in data).
- **Fixes made during merge:** (1) added `pack_text` to both analysis skip-lists — otherwise every trimmed lesson/cause would be counted a second time as "context" evidence; new test guards it. (2) Database popover overflowed the viewport bottom by ~19px at 720px height on macOS when the long Disclaimer opened (the open-section budget `100vh - 400px` assumed Windows font metrics; actual non-section height is 411px) — raised to `100vh - 440px`. (3) `js/timeline.js` added to `scripts/bump_cache_version.py` and the local pre-commit hook (`.git/hooks/pre-commit`, not versioned).
- Not copied: `working documentation/presentation assets/` (still read-only on disk), and the dump's unreferenced `working documentation/bowtie_analysis.json`/`causal_analysis.json`.
- Verified: `npx playwright test` 80/80, `npm run test:analysis` 13/13, Node data load (96 records, 0 dup IDs, required fields present, 91 image refs local and present, all 29 `storm_sid`s present in `storm_tracks.js`), full-page screenshot of the timeline with no page errors. All four analysis outputs regenerated (96/96 tagged, 0 untagged).

**Open:**
- `tests/audit_image_coverage.py`: 27 uncatalogued local images (Trinity II x4, G-TIGK, VH-BHK, Kulluk x2, Jascon-4 x2, COSL, …) still need rights-catalogue entries in `working documentation/INCIDENT_IMAGES.md`, written from the actual source/licence.
- `pack.html` assets still load without cache-bust params (hook only versions `index.html`).
- From the dump author's notes: continue Safety Moment trimming **into `pack_text` only**; Key Biscayne LfE deck still to mine; Katrina records could get USCG/MMS public-domain galleries.
- Still open from 2026-09-30: storm-track date labels overlap at world zoom; `typhoon-tlp-capsize-rita-2005` has no `data_quality`; DB29 reference links unverified.

**Completed (2026-10-02 — 3 new incidents, Safety Moment pack, safety-moment trims):**
- Merged `IOGP-Metocean-Incidents-Upload-No-PDFs-2026-10-02.zip` (330 files, full site + background docs) with the stage-outside-the-project diff method. ID-set diffing: **3 incidents added (93 → 96)**, no removals, no duplicate IDs — `trinity-ii-liftboat-capsize-2011` (NTSB MAR-13/01; Hurricane Nate track `2011250N20266`), `g-tigk-brae-lightning-ditching-1995` (AAIB 2/97) and `vh-bhk-barrow-island-weather-2013` (ATSB AO-2013-034). 78 existing records changed — all genuine "safety-moment" trims/rewrites described in the dump's own notes (shorter summaries, 4-beat `what_happened`, grounded `lessons_learned[0]` takeaway), plus new `pack_images` galleries (Kielland, Kolskaya, Kulluk, COSL, Jascon-4, G-TIGH, Trinity II). The dump also resolved the Mars rig-weight thread: `what_happened` now says "about 670 tons" (Offshore Magazine/Shell account) instead of "1,000-ton".
- **Mojibake, fifth time:** 128 lines of the dump's `incidents.js` were double-encoded again (plus CRLF). Repaired line-wise (cp1252→UTF-8 round-trip on mojibake runs only), normalised to LF, then re-diffed every record against the pre-merge file: the 78 changes are content-only, file has zero `â`/`Ã`.
- **Regressions in the dump, kept live instead:** Ocean Warwick had lost its `storm_sid` (restored `2005236N23285`); `index.html` cache-bust params + same-tab analysis links; `playwright.config.ts` `python3`; `package-lock.json` Playwright 1.62.1; `derive_bowtie.js`/`derive_causal_tags.js` (dump reverted the `images` skip-list fix); `tests/verify_gunashli_image.py` (dump reverted `data-incident-id` selectors); `tests/index.spec.ts`/`analysis.spec.ts` (stale snapshots missing 4 index tests and the image-path test); `images/kolskaya-2011-capsized.jpg` (dump's copy is a recompression of the same 1326x749 image — policy is no recompression).
- **Adopted:** Safety Moment pack (`pack.html`, `js/pack.js`, `css/pack.css`, modal button + `app.js` href wiring + `style.css` button style), shared explorer sleeve `js/incident-sleeve.js` with the refactored `build_bowtie_view.js`/`build_causal_view.js`, popover attribution "Vadim Anokhin, Shell Australia", 14 new images, internal docs (new background extracts/decks, `INCIDENT_IMAGES.md` additions, GSP Saturn report with fabricated Belkrov.by source removed). Rebuilt `data/storm_tracks.js` locally: 23 → 24 tracks, existing tracks unchanged, output identical to the dump's.
- **Bug fixed:** the new `pack_images` field was not in the analysis scripts' skip-lists, so image filenames leaked into bow-tie evidence (caught by the image-path test the dump would have deleted). Added `pack_images` to both; regenerated all four analysis outputs.
- Tests: ported the dump's updated wording assertions for 7 trimmed records (Seacrest, Bohai, Usumacinta, Glomar, Mars, Papaa-305, Kolskaya), count 93 → 96, `.first()` for sleeve galleries; relaxed the asset-matrix "Support is first" check to "Support in top 3" (Trinity II liftboat → Jack-up now leads 15 vs 14). **New:** Safety Moment button → pack test (Trinity II gallery images decode) and an all-96-incidents pack render test (≥6 slides, no script errors).
- Verified: `npx playwright test` 67/67, `npm run test:analysis` 12/12, Node data load (96 records, 0 dup IDs, required fields present, 91 image refs all local and present). `verify_gunashli_image.py` not re-run (hard-codes `channel="msedge"`); its image-decode coverage overlaps the analysis suite.

**Completed (2026-09-30 — 10 new incidents, image gallery, storm-track date labels):**
- Merged `incidents-update-2026-09-30.zip` (a 41-file changes-only bundle) using the same stage-outside-the-project diff method. ID-set diffing: **10 incidents added (83 → 93)**, no removals, no duplicate IDs — `deep-sea-driller-1976`, `ocean-express-tow-capsize-1976`, `rowan-gorilla-i-1988`, `interocean-ii-1989`, `db29-typhoon-fred-1991`, `dlb-269-hurricane-roxanne-1995`, `ocean-prince-1968`, `ocean-warwick-katrina-2005`, `gom-modu-mooring-adrift-2004-2005` (thematic fleet-wide record, `NOT_DISCRETE` in the bow-tie) and `typhoon-tlp-capsize-rita-2005`. Other genuine record changes adopted: West Gamma renamed to `West Gamma Jack-up Capsize During Tow`; EI 322-A gains a local Offshore Magazine image (permission-required); Kolskaya gains a YouTube video reference (verified to exist via oEmbed).
- **Mojibake, fourth time:** the same six records (`west_gamma_1990`, `fpso-p70-2020`, `gsp-saturn-2014`, `sinbad-platform-nearmiss-2021`, `ln-ont-maersk-invincible-2020`, `g-tigh-cormorant-a-1992`) arrived double-encoded again. This time the dump file was taken as the base and repaired by a cp1252→UTF-8 round-trip over the whole file, then every pre-existing record was diffed against the pre-merge backup to confirm only intended changes. The pass also fixed mojibake that was already live in 5 records (Amber Sea Worker `≤`, Malampaya `→`, Caspian `³`/`±`, Corrib `€`, G-TIGH `©`) and 130 garbled comment-banner lines. File now has zero `â`/`Ã` sequences.
- Added `storm_sid: '2005236N23285'` to Ocean Warwick (it named Katrina without a SID, contrary to the named-cyclone workflow). Rebuilt `data/storm_tracks.js` locally from IBTrACS: 21 → 23 tracks (Fred `1991220N10133`, Roxanne `1995281N14278`), existing tracks byte-identical, output identical to the dump's.
- Adopted `js/app.js`/`css/style.css` features: optional `images[]` gallery (Summary/lightbox/print), daily local-date labels along storm tracks, a `stormTrackTop` pane (z 680) that draws tracks above the hover tooltip, tooltip clamping so it isn't clipped above the map, and markers now carry `data-incident-id` instead of a `title` attribute. Adopted `scripts/derive_bowtie.js` overrides (GoM MODU record not-discrete; Deep Sea Driller → loss of position; Arafura → wave impact).
- **Bug fixed in the analysis scripts:** `derive_bowtie.js`/`derive_causal_tags.js` skipped `image` but not the new `images` array, so the Typhoon TLP capsize "evidence" was an image filename. Added `images` to both skip-lists; new analysis test asserts no image paths appear in either JSON.
- **Kept live over dump (regressions again):** `index.html` cache-bust params (all four assets bumped; note the repo pre-commit hook re-bumps them automatically on every commit) and same-tab analysis links; `tests/index.spec.ts` (dump was a CRLF stale snapshot missing the two 2026-09-10 header tests and weakening the GSP Saturn assertion) — applied only the EI 322-A image and Gunashli `data-incident-id` selector changes. Did not take the dump's `bowtie_analysis.json`/`causal_analysis.json` side-files or its generated views; regenerated locally (dump's copies predated its own Arafura override).
- Tests: rewrote two brittle `analysis.spec.ts` checks that hard-coded counts (bar length now checked as proportional to count; asset columns checked as count-sorted with Support tied for first — Semi-sub/Jack-up/Support are 14/14/14); added gallery and storm-date-label tests. `tests/verify_gunashli_image.py`: marker selectors moved to `data-incident-id` (dump's copy still used the removed `title`), and the decode check now awaits `image.decode()` instead of racing lazy loading.
- Verified: `npx playwright test` 65/65, `npm run test:analysis` 12/12, `verify_gunashli_image.py` PASS (72 selected images render, 107 local files decode — run with bundled Chromium on macOS because the script hard-codes `channel="msedge"`), screenshots of the Typhoon TLP gallery and Fred track checked by eye. `tests/audit_image_coverage.py` still fails on the same pre-existing 16 uncatalogued files; all 9 new images are catalogued.

**Pending / Deferred:**
- **Consequence-tag review sheet awaiting a decision.** `working documentation/CONSEQUENCE_REVIEW.md` (gitignored, added 2026-09-22) proposes explicit `consequence_tags` overrides for ~19 records (mostly removing an auto-inferred tag that doesn't fit, e.g. drop "Infrastructure Impact" from a fatality-only near-miss). Not yet applied to `data/incidents.js` — ask the user whether to implement it before treating any record's consequence filter/legend tagging as final.
- Bow-tie and causal-theme acceptance review — work through high-consequence records with retained primary evidence (Seacrest, Bohai No. 2, Usumacinta, Glomar Java Sea, Thunder Horse, SEACOR POWER, Skandi Pacific, ONGC Tauktae) using `working documentation/ANALYSIS_CODING_PROTOCOL.md`; do not bulk-accept candidate relationships or use their frequency as comparative risk evidence.
- Mars TLP drilling-rig topple during Hurricane Katrina (2005) — added as a distinct record from the broader Katrina regional-impact entry. The record uses the existing Mars post-storm photograph, Shell/industry recovery accounts and the OSTI-indexed Mars recovery presentation; the exact component-level failure mechanism remains unresolved publicly.
- SS El Faro (2015) — added and expanded from NTSB MAR-17/01 and the NHC Joaquin report. The entry deliberately distinguishes Category 3 conditions at the sinking from the Category 4 upgrade approximately 20 minutes later; IBTrACS track SID `2015270N27291` is now wired; no image is selected without verified reuse rights.
- West Navion / AS332L G-BKZE — post-insertion validation task: resolve source discrepancies (`10 Nov` vs `12 Nov` occurrence date in AAIB index pages; `80 nm` vs `100 nm` west of Shetland wording) by extracting exact wording from AAIB `3-2004_G-BKZE.pdf` and `S4/2001` bulletin PDF, then tighten record fields if needed.
- Amur River incident (December 31, 2018) — research and database integration deferred; will require similar comprehensive documentation and source validation.
- Incident images — continue research for the remaining canonical records without local files. Dupal remains deliberately unselected despite having two local candidates. Do not publish restricted internal or third-party assets as generally reusable.
- Consider stripping now-unused `severity_override` fields from the data and the unused `.cls-maintenance` CSS rule (harmless but dead).
- Ocean Valiant tow grounding (2025, off Tunisia) is the chronologically most recent incident in the canonical dataset; Ocean GreatWhite (2024, west of Shetland) is second-most-recent. (The 2026-09-13 merge added Cyclone Olivia 1996 and VLCC Arafura 2021, both older than either.)
- When adding incidents: geolocate (set `location_precision` if approximate), fill both taxonomy axes, cite external sources with working URLs, include `data_quality` field noting undocumented vs. verified facts, and verify the load in-browser before considering done.

## Last updated

2026-10-16
