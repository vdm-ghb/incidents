# IOGP Metocean Incidents

An interactive map and database of offshore oil & gas incidents driven by weather, sea state, and other metocean factors.

## Purpose

Collects lessons-learned case studies — platform losses, tow failures, hurricane damage, rogue waves, internal-wave/soliton events, and related climate risks — into a single browsable, filterable database, for use as a reference and training resource on metocean-related offshore risk.

## Status

In progress. 70 incidents documented across a two-axis taxonomy (metocean **event type** + operational **classification**). A full fact-check remediation pass is complete (see `FACT_CHECK_AUDIT.md`); content is still being extended and refined.

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

Node.js LTS is required. The Playwright configuration starts the local static server automatically for test runs.

The incident-image rollout also has Python verification paths for environments without Node/npm (`audit_image_coverage.py` runs anywhere with Python 3; `verify_gunashli_image.py` and `verify_lfe_10_turbulence.py` currently hardcode `channel="msedge"` in their Playwright browser launch, so they only run as shipped on Windows with Edge installed):

```powershell
.\.venv\Scripts\python.exe .\tests\audit_image_coverage.py
.\.venv\Scripts\python.exe .\tests\verify_gunashli_image.py
```

## Usage

- Open `index.html` (locally or via GitHub Pages) to browse the map.
- Filter incidents by **event type** (metocean hazard), **region**, or **classification** (discipline) using the header controls.
- Switch datasets with the toggle button: **Full** (all incidents), **Shell** (internal-sourced only), or **External** (public-source only).
- Markers are coloured by classification and lettered by event type (see the on-map legend).
- Hover over a marker for the incident blurb and, where selected, a scaled image thumbnail.
- Click a marker for the full lessons-learned writeup. Selected images appear after the Summary text and open at their natural size when clicked.
- Hover a cyclone/hurricane marker with a matched IBTrACS track to preview its storm path; click an incident with a track to lock it on the map.
- See `working documentation/PUBLISHING.md` for how to publish updates to GitHub Pages, and the field reference for adding new incidents.

## Project structure

- `index.html` — page shell and map/filter controls
- `js/app.js` — map rendering, filtering, and UI logic (Leaflet)
- `css/style.css` — styling
- `data/incidents.js` — the incident dataset (source of truth; see `working documentation/PUBLISHING.md` for the field schema)
- `data/storm_tracks.js`, `data/storm_tracks.geojson` — curated subset of IBTrACS cyclone tracks (matched to incidents via `storm_sid`) that the site actually loads
- `data/ibtracs/` — raw IBTrACS source data (331MB+) used to derive `storm_tracks.*`; git-ignored, far too large for GitHub
- `images/` — native-resolution incident images and technical diagrams, with selected assets displayed from each incident's `image` field
- `tests/` — Playwright end-to-end tests (`index.spec.ts`) plus Python image-coverage/regression checks against the static site
- `background files/` — source material (reports, papers, internal presentations) used to research and write up incidents (git-ignored)
- `working documentation/` — fact-check audit, executive summaries, image provenance catalogue, and other internal working notes (git-ignored)
- `scripts/` — helper scripts used for bulk data edits, PDF/DOCX extraction, and OCR (git-ignored)

## Tech stack

Static HTML/CSS/JS, [Leaflet](https://leafletjs.com/) for the map, no framework or bundler. [Playwright](https://playwright.dev/) for end-to-end tests. Hosted on GitHub Pages.

## Notes / decisions

- **Two-axis taxonomy.** Each incident carries `weather_event_type` (the metocean hazard: cyclone, storm, squall, lightning, rogue/internal wave, current, tsunami, climate, equipment) and `classification` (the operational discipline: drilling, maritime/tow, aviation, onshore, coastal, design, pipeline, survey). Markers use classification for colour and event type for the letter. This replaced the earlier single "severity" axis.
- **Dataset toggle** (Full / Shell / External) is driven by `source_classification` and `shell_internal_only` fields on each record.
- **Regions** are a `region` string per record, filtered in the UI and used for map zoom bounds (`REGION_BOUNDS` in `js/app.js`). Current regions: Africa, Asia, Australia, Europe, Middle East, North America, Russia and Central Asia, South America. (Australia was split out from the former "Asia / Australasia" — 5 NW-Shelf / WA incidents.)
- **Neutral operator naming.** In incident body text, refer to the duty holder generically ("the operator", "the project team"); name a specific company only in the `operator` field and in source/reference citations. Applied to Big Foot and Gorgon; keep this convention for new entries.
- **Fact-check remediation complete.** The 2026-07-04 audit (`FACT_CHECK_AUDIT.md`) flagged dead/fabricated reference URLs and ~15 records with incorrect details; all four tiers have since been remediated (casualty figures, locations, dates, and sources corrected or hedged; unverifiable claims flagged with `data_quality` notes).
- **Incident numbering** in `data/incidents.js` comments has gaps (removed/merged records were never renumbered) — gaps are expected, not a data error. The comment header may cite a higher count than the actual array length; trust `INCIDENTS_DATA.incidents.length` (currently 70).
- **Verification workflow.** Changes to `data/incidents.js` are validated by reloading the page under Playwright and asserting on `window.INCIDENTS_DATA` (total count, no duplicate IDs, taxonomy fields, marker rendering) rather than eyeballing.
- **Image provenance.** `working documentation/INCIDENT_IMAGES.md` is the source/credit/rights catalogue for local assets. Public availability is not treated as permission to reuse; internal LFE material remains restricted, and files are retained at native resolution without upscaling or recompression.
- **One selected image per incident.** An optional singular `image` object on an incident (`src`, `alt`, `caption`, `credit`) drives the map-tooltip thumbnail, Summary figure, full-size lightbox and capped print figure from one source of truth. There are 50 selected incident images. Dupal has two catalogued local candidates but was explicitly left unselected. Copyrighted and restricted assets are clearly labelled as reference-only or permission-required.
- **Storm-track overlay.** An incident with a `storm_sid` field (matching an IBTrACS storm ID) draws its cyclone track on the map — as a hover preview, or locked in place while its modal is open. `data/storm_tracks.js`/`.geojson` hold only the pre-matched subset (16 storms as of this writing) that `js/app.js` fetches at runtime; the 331MB raw IBTrACS archive that subset was derived from lives in `data/ibtracs/` and is git-ignored, never published. Markers are drawn three times each, at ±360° longitude offsets (`createWrappedMarkers` in `js/app.js`), so they stay visible when the map is panned across the antimeridian — this is intentional, not a rendering bug, and is expected in DOM/accessibility snapshots.
- **Consequence filter.** The `#filter-consequence` dropdown matches on `consequence_tags` (an explicit array field, e.g. `['infrastructure','financial','asset_loss']`) when a record has one, and otherwise falls back to a keyword-regex classifier over the record's narrative text (`CONSEQUENCE_RULES` in `js/app.js`) — most records rely on the fallback rather than an explicit tag.

### Session handoff (next steps)

**Completed (August 2026):**
- Merged a second dumped update folder (`2026.06.03 IOGP Metocean Incidents Database/`) into the project via `rsync` (source moved to a scratch location outside the project first this time, avoiding the self-referential `--delete` issue from the prior merge) and deleted it as requested. This dump added 7 new incidents (63 → 70), the storm-track overlay feature (`data/storm_tracks.js`/`.geojson`, `filter-consequence` dropdown, world-wrap markers — see Notes above), and a 331MB raw IBTrACS working dataset in `data/ibtracs/`, which was git-ignored rather than published (see Project structure above).
- Restored `working documentation/`-prefixed paths in Usage/Project structure (the incoming README had reverted to the pre-reorganization top-level paths from an earlier snapshot).
- Ran the full Playwright suite (`npm install && npx playwright install chromium && npm test`) against the merged site — the `playwright.config.ts` shipped with this dump used a Windows-only `py -m http.server` webServer command (everything else in its simplified config is fine and now confirmed working); changed that one line back to `python3 -m http.server 8080` so `npm test` works out of the box on macOS/Linux again, and confirmed with a clean run (no server pre-started). Found and fixed 5 pre-existing test failures, none of which were real site defects: three tests in `tests/index.spec.ts` referenced `#filter-severity`, an element ID renamed to `#filter-classification` in an earlier taxonomy change, with stale option values (`hurricane`, `critical`) from the old taxonomy — updated to current IDs/values. Two new deep-link tests (LN-ONT, G-TIGH) navigated via `page.goto('/#id')` immediately after `beforeEach`'s `page.goto('/')`; since only the URL fragment changes, Playwright (like real browsers) treats this as a same-document navigation and never re-runs the page's load-time hash-check, so the incident modal never opened in the test even though it works correctly for a real user opening a shared link in a fresh tab — fixed by adding an explicit `page.reload()` in both tests. Those same two tests then surfaced a genuine, more serious defect: `data/incidents.js` had been corrupted by a UTF-8-decoded-as-Windows-1252-then-resaved-as-UTF-8 round-trip somewhere in this dump's toolchain, garbling every degree sign, curly quote, dash, © and a block of Cyrillic source-title text across the *entire* file (64 lines affected, not just the new records — e.g. Kielland 1980's "7 Â°C" should read "7 °C"). Repaired mechanically (each corrupted run is provably reversible: `run.encode(windows-1252, with the 5 codepoints cp1252 leaves undefined mapped directly to their raw byte value).decode(utf-8)`), verified the fix introduces no incident-count/duplicate-ID/syntax regressions, and confirmed byte-for-byte correct output (e.g. the Belkrov.by Russian-language source title now reads correctly). Two of the two remaining test failures after that were pre-existing test/data mismatches, not corruption or app bugs — a plain hyphen in an AAIB-quoted wind figure where the test expected an en dash (test corrected to match the sourced quote verbatim, data left as-is) and a sentence the test expected in the rendered Summary that only exists in the record's unused `executive_summary` fallback field (test corrected to check the equivalent sentence that's actually rendered, from `metocean.notes`). All 25 tests pass after these fixes. Separately, `tests/audit_image_coverage.py` caught an `ongc-papaa-305-varapradha-cyclone-tauktae-2021` `image.src` pointing at an unverified external CDN URL rather than a local file — contradicting this dump's own README claim that no image was selected for that incident — so the incomplete `image` field was removed (50 selected images, down from the 51 briefly present in the raw dump).

**Completed (July–August 2026):**
- Skandi Pacific fatality during cargo securing in rough seas (14 July 2015) — added directly from ATSB investigation 322-MO-2015-005 as a separate maritime incident with official coordinates, occurrence time, injury/damage outcome, and formal contributing factors. The record is explicitly grounded in ATSB wording: open-stern shipped seas, suspended backloading, unsecured cargo state during re-securing, and fatal crush injury at about 0523. A detailed evidence note is retained in `background files/Skandi_Pacific_2015_Detailed_Incident_Report.md`; a focused browser regression preserves key causal sequence fields.
- Mad Dog drilling derrick topple during Hurricane Ike (September 2008) — added as a distinct record from the generic Gulf-wide Ike incident summary to avoid conflating subsystem damage with full-platform collapse claims. The evidence trail is constrained to Reuters' contemporaneous BP quote (derrick toppled and on seabed), the MMS drilling-rig destruction update cycle and BSEE's Ike portal links. The record is conservative on mechanism and metocean specifics: no site-specific observed wind/wave values are inferred, and no detailed public root-cause engineering report was identified in this pass. A Wikimedia Commons Mad Dog spar context image (CC BY-SA) is selected with explicit "not the failure moment" caveat. Research notes are retained in `background files/Mad_Dog_2008_Derrick_Topple_Detailed_Incident_Report.md`; a focused browser regression preserves the derrick-topple wording boundary.
- Thunder Horse listing during Hurricane Dennis evacuation (8–11 July 2005) — added from the final MMS/BSEE accident investigation, MMS Safety Alert 235, NOAA response records, the NHC storm report, BP's SEC filing and later technical retrospectives. The entry corrects the common claim that Dennis initiated the list: ineffective HPU isolation moved more than 80 ballast/bilge valves and produced an approximately 16° list before hurricane passage. Defective check valves and failed watertight penetrations escalated flooding; hurricane waves may only have worsened later downflooding. No platform-specific observed wind or wave value was found, so none is inferred. The user-supplied incident photograph is selected and catalogued as permission-required because its original photographer and licence remain unresolved. A detailed source audit is retained in `background files/Thunder_Horse_2005_Detailed_Incident_Report.md`; a focused browser regression preserves the causal distinction and verifies image decoding.
- G-TIGH / Cormorant A (14 March 1992) — converted the 79-page image-only AAIB Aircraft Accident Report 2/93 to page-marked OCR, expanded the detailed source analysis with verified public references, and added the incident to the database. Strong gusting wind and degraded night/snow cues contributed directly to the downwind-turn accident sequence; wave crests and extreme sea state impaired recovery, survival and rescue; icing was expressly excluded. A verified pre-accident photograph of G-TIGH by Lewis Grant / AirHistory.net is selected and clearly labelled permission-required; AAIB Appendix Figure F3 remains catalogued as a secondary OGL v3.0 explanatory asset.
- Sikorsky S-92A LN-ONT loss of control (February 2020) — added from NSIA Aviation Report 2024/03 with the report's exact coordinates, flight-recorder sequence, weather observations and recommendations. The entry distinguishes formal VMC classification from the operational loss of visual cues in darkness, heavy rain and mist, strong wind and low cloud. NSIA Figure 6 is selected as the incident image; it is an investigation animation, and the caption preserves the report's warning that the illustrated installation is not identical to Maersk Invincible.
- AW139 helideck turbulence (December 2016) — record revised directly against internal Shell LFE UP-AW-201733. Removed the unsupported Gumusut-Kakap/Sabah attribution and generic gust explanation; added the report's GTG exhaust-plume mechanism, inaccurate platform wind data, unrepresentative sensor positioning, missing metocean involvement, explicit absence of numerical wind/sea-state/plume values, and all source recommendations. Corrected the record to internal-only and added a focused browser regression test. Its illustrative marker is positioned near, but slightly offset from, the mapped East Malaysian offshore cluster for presentation; this does not identify the incident facility.
- ENI Krueng Mane soliton — added the OFEG-hosted Fugro GEOS / ENI presentation as a retained local source and selected a lossless crop of its Slide 4 rig/soliton diagram. The caption and provenance catalogue state explicitly that this is a generic risk illustration, not an event photograph.
- Bourbon Dolphin — added the user-supplied DN Group CDN image of the capsized vessel and nearby response vessel. The original photographer, originating article and reuse permission could not be resolved, so the asset is labelled permission-required and reference-only.
- West Gamma — added the user-supplied Mynewsdesk image of the rig listing heavily in rough seas. ESVAGT and Mynewsdesk provenance, CDN dimensions and the source filename were verified; the original photographer and asset-specific licence remain unresolved, so reuse is labelled permission-required.
- Sea Gem — added Lisa Burke's 2013 engineering case study and selected its exact embedded Figure 2 image. Corrected the record from an acute rough-sea/dynamic-wave explanation to the inquiry-supported tie-bar material-failure sequence; Burke's reversed 19-deaths claim is explicitly rejected in favour of 13 fatalities and 19 survivors.
- Seacrest (1989) — record substantially revised against the local October 1990 Failure Analysis Associates investigation commissioned by Unocal Thailand. Corrected capsize coordinates, vessel build/ownership and eight-point mooring; added the preparation and anchor-failure sequence, modeled wind/wave conditions, coupled gust-wave capsize mechanism, survivor drift, storm-procedure findings, and source caveats. Removed unsupported claims that standing drill pipe independently caused the capsize or that specific industry changes were enacted.
- Glomar Java Sea (1983) — record substantially revised against the local primary investigation report, NTSB MAR-87/02. Corrected coordinates and metocean values; added the final communications, casualty disposition, wreck location, formal probable cause, findings, recommendations, and a data-quality note distinguishing reported winds from the NTSB hindcast. Removed unsupported claims about forecast quality and enacted regulatory changes.
- GSP Saturn (November 7–10, 2014) — Arctic platform tow incident in Pechora Sea. Jack-up rig encountered severe storm (70–80 knots, 8–12 m seas), lifeboat destroyed, helicopter deck damaged. All 70 crew evacuated successfully to escort vessels (0 fatalities). Platform jacked-down at Cape Kanin Nos; final outcome not documented. Record inserted with full field documentation and source citations (Belkrov.by, Wikipedia, Kolskaya precedent comparison). Comprehensive background documentation in `background files/GSP_Saturn_2014_Detailed_Incident_Report.md` (1000+ lines, fully fact-grounded, undocumented assumptions flagged). Emphasizes Arctic operational decision-making and evacuation thresholds informed by Kolskaya (2011) worst-practice precedent (53 fatalities vs. Saturn 0 fatalities).
- West Navion / AS332L G-BKZE (November 2001) — incident now inserted into `data/incidents.js` as `west-navion-as332l-2001` using conservative data-quality flags. Supporting research retained in `background files/West_Navion_2001_AS332L_Detailed_Incident_Report.md`.
- Sinbad platform decommissioning near miss (July 2021, near Varanus Island) — incident now inserted into `data/incidents.js` as `sinbad-platform-nearmiss-2021`. WorkSafe WA / LGIRS Significant Incident Summary No. 6 provides the formal technical findings; WA Today provides the public identification of Sinbad / Campbell / Santos / Fugro. Exact incident day remains unconfirmed in the public regulator material, so the record uses conservative data-quality and approximate-location flags.
- COSL Innovator (2015) — record revised against the downloaded official PSA/Havtil investigation. The entry now separates significant wave height from the uncertain individual crest, preserves the report's freak-wave uncertainty, and reflects the formal design and emergency-response findings. Complete Figure 3, including its damage labels and outlines, was rendered as a 1,371 x 962 px lossless PNG and catalogued with Havtil's reuse terms.
- Key Biscayne (1983) — record revised against the local Australian Department of Transport preliminary inquiry. Corrected the operator/charterer, wreck coordinates, 52/52 survival, two-vessel tow and event sequence; replaced speculative metocean values and unsupported post-incident changes with the inquiry's documented force 8 gale, 5–6 m swell, towline, flooding, stability, configuration, marine-manning and evacuation findings. Its `what_happened` narrative now foregrounds the winter tow, staged weather deterioration, support logistics and successful charter/defence-force helicopter rescue. It states the evidence boundary explicitly: bad weather was predicted on 31 August, while the inquiry criticized inadequate account of expected August/September weather and refuge scarcity rather than forecast accuracy. Added the official-report and WreckSploration links, plus the requested RAAF heavy-seas photograph; retained the previous underwater wreck image under an accurate filename and caption.
- Malampaya pipeline turbidity current (2006) — added the 1,635 x 2,102 px lossless Figure 1 map from Sequeiros et al. (2019), showing the as-built and displaced pipeline routes through the Malaylay/Baco canyon system. The image is catalogued under the article's CC BY 4.0 license; the generic platform photograph remains as secondary context.
- SEACOR POWER capsize (2021) — incident inserted from the U.S. Coast Guard Marine Board of Investigation report with casualty totals (13 fatalities, 6 survivors), severe-weather causal framing and recommendation themes captured conservatively from official wording. Figure 17 was extracted from the downloaded report and set as the selected image with full provenance and rights notes in the image catalogue.
- Ocean GreatWhite LMRP/riser separation (2024) — incident inserted from Diamond Offshore's SEC 8-K primary disclosure with conservative evidence boundaries: date, location context (~200 km west of Shetland), no-injury/no-known-pollution status and well-security statements are treated as high confidence; detailed metocean values and full technical root cause remain pending public technical reporting. User-preferred Google-hosted thumbnail is selected as the incident image, with a higher-resolution DN Group file retained as a secondary candidate in the catalogue.
- ONGC Papaa-305 / Varapradha Cyclone Tauktae disaster (17 May 2021) — incident inserted using the downloaded Seventeenth Parliamentary Standing Committee report as primary source (OCR-derived extraction), including confirmed casualty table values (274 onboard, 188 survivors, 86 fatalities) and committee recommendation themes (accountability, weather governance, regulatory gaps, third-party certification failures, compensation oversight). No image selected in this pass; focus was official-source insertion with explicit OCR confidence bounds.
- Incident image library — 73 provenance-catalogued files cover 51 of the 70 canonical dataset records, including one G-REDL asset for a catalogue-only incident. All 73 files are present in `images/`. Fifty canonical incidents display the user-selected primary asset as a map thumbnail, Summary figure, natural-size lightbox and restrained print figure. The Hurricane Katrina Mars, G-TIGH and Thunder Horse photographs are copyrighted or have unresolved reuse permission; the Hurricane Ike selection also has unresolved facility, date and photographer details. These limitations are stated in their catalogue entries. Dupal's two candidates remain catalogue-only by explicit selection. `tests/audit_image_coverage.py` cross-checks the dataset, catalogue and local directory; `tests/verify_gunashli_image.py` browser-decodes all local files and exercises the selected-image UI.

**Pending / Deferred:**
- West Navion / AS332L G-BKZE — post-insertion validation task: resolve source discrepancies (`10 Nov` vs `12 Nov` occurrence date in AAIB index pages; `80 nm` vs `100 nm` west of Shetland wording) by extracting exact wording from AAIB `3-2004_G-BKZE.pdf` and `S4/2001` bulletin PDF, then tighten record fields if needed.
- Amur River incident (December 31, 2018) — research and database integration deferred; will require similar comprehensive documentation and source validation.
- Incident images — continue research for the remaining canonical records without local files. Dupal remains deliberately unselected despite having two local candidates. Do not publish restricted internal or third-party assets as generally reusable.
- Consider stripping now-unused `severity_override` fields from the data and the unused `.cls-maintenance` CSS rule (harmless but dead).
- Ocean GreatWhite LMRP/riser separation (2024, west of Shetland) is now the chronologically most recent incident in the canonical dataset.
- When adding incidents: geolocate (set `location_precision` if approximate), fill both taxonomy axes, cite external sources with working URLs, include `data_quality` field noting undocumented vs. verified facts, and verify the load in-browser before considering done.

## Last updated

2026-08-06

 **Check**

<!-- Pages rebuild nudge: 2026-08-07 -->
