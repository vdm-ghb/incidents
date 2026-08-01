# IOGP Metocean Incidents

An interactive map and database of offshore oil & gas incidents driven by weather, sea state, and other metocean factors.

## Purpose

Collects lessons-learned case studies — platform losses, tow failures, hurricane damage, rogue waves, internal-wave/soliton events, and related climate risks — into a single browsable, filterable database, for use as a reference and training resource on metocean-related offshore risk.

## Status

In progress. 61 incidents documented across a two-axis taxonomy (metocean **event type** + operational **classification**). A full fact-check remediation pass is complete (see `FACT_CHECK_AUDIT.md`); content is still being extended and refined. GSP Saturn (2014) added July 2026 as a precedent study for Arctic platform evacuation response.

## Getting started

No build step or dependencies are required to view the site itself — it's static HTML/CSS/JS.

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

To run the Playwright test suite:

```bash
npm install
npm test           # headless
npm run test:ui    # interactive UI mode
npm run test:headed
```

The incident-image rollout also has Python verification paths for environments without Node/npm:

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
- See `PUBLISHING.md` for how to publish updates to GitHub Pages, and the field reference for adding new incidents.

## Project structure

- `index.html` — page shell and map/filter controls
- `js/app.js` — map rendering, filtering, and UI logic (Leaflet)
- `css/style.css` — styling
- `data/incidents.js` — the incident dataset (source of truth; see `PUBLISHING.md` for the field schema)
- `images/` — native-resolution incident images and technical diagrams, with selected assets displayed from each incident's `image` field
- `tests/` — Playwright end-to-end tests against the static site
- `background files/` — source material (reports, papers, internal presentations) used to research and write up incidents
- `FACT_CHECK_AUDIT.md` — independent fact-check pass over every incident record, flagging discrepancies and unverifiable claims
- `EXECUTIVE_SUMMARIES.md`, `INCIDENT_IMAGES.md` — supporting content notes
- `inject_summaries.py` — helper script used when bulk-adding executive summaries to incident records

## Tech stack

Static HTML/CSS/JS, [Leaflet](https://leafletjs.com/) for the map, no framework or bundler. [Playwright](https://playwright.dev/) for end-to-end tests. Hosted on GitHub Pages.

## Notes / decisions

- **Two-axis taxonomy.** Each incident carries `weather_event_type` (the metocean hazard: cyclone, storm, squall, lightning, rogue/internal wave, current, tsunami, climate, equipment) and `classification` (the operational discipline: drilling, maritime/tow, aviation, onshore, coastal, design, pipeline, survey). Markers use classification for colour and event type for the letter. This replaced the earlier single "severity" axis.
- **Dataset toggle** (Full / Shell / External) is driven by `source_classification` and `shell_internal_only` fields on each record.
- **Regions** are a `region` string per record, filtered in the UI and used for map zoom bounds (`REGION_BOUNDS` in `js/app.js`). Current regions: Africa, Asia, Australia, Europe, Middle East, North America, Russia and Central Asia, South America. (Australia was split out from the former "Asia / Australasia" — 5 NW-Shelf / WA incidents.)
- **Neutral operator naming.** In incident body text, refer to the duty holder generically ("the operator", "the project team"); name a specific company only in the `operator` field and in source/reference citations. Applied to Big Foot and Gorgon; keep this convention for new entries.
- **Fact-check remediation complete.** The 2026-07-04 audit (`FACT_CHECK_AUDIT.md`) flagged dead/fabricated reference URLs and ~15 records with incorrect details; all four tiers have since been remediated (casualty figures, locations, dates, and sources corrected or hedged; unverifiable claims flagged with `data_quality` notes).
- **Incident numbering** in `data/incidents.js` comments has gaps (removed/merged records were never renumbered) — gaps are expected, not a data error. The comment header may cite a higher count than the actual array length; trust `INCIDENTS_DATA.incidents.length` (currently 61).
- **Verification workflow.** Changes to `data/incidents.js` are validated by reloading the page under Playwright and asserting on `window.INCIDENTS_DATA` (total count, no duplicate IDs, taxonomy fields, marker rendering) rather than eyeballing.
- **Image provenance.** `working documentation/INCIDENT_IMAGES.md` is the source/credit/rights catalogue for local assets. Public availability is not treated as permission to reuse; internal LFE material remains restricted, and files are retained at native resolution without upscaling or recompression.
- **One selected image per incident.** An optional singular `image` object on an incident (`src`, `alt`, `caption`, `credit`) drives the map-tooltip thumbnail, Summary figure, full-size lightbox and capped print figure from one source of truth. There are 42 selected incident images. Dupal has two catalogued local candidates but was explicitly left unselected. Copyrighted and restricted assets are clearly labelled as reference-only or permission-required.

### Session handoff (next steps)

**Completed (July–August 2026):**
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
- Incident image library — 59 provenance-catalogued files cover 43 of the 61 canonical dataset records, including one G-REDL asset for a catalogue-only incident. All 59 files are present in `images/`. Forty-two canonical incidents display the user-selected primary asset as a map thumbnail, Summary figure, natural-size lightbox and restrained print figure. The Hurricane Katrina Mars image is copyrighted and unlicensed; the Hurricane Ike selection has unresolved facility, date and photographer details. Both are labelled reference-only. Dupal's two candidates remain catalogue-only by explicit selection. `tests/audit_image_coverage.py` cross-checks the dataset, catalogue and local directory; `tests/verify_gunashli_image.py` browser-decodes all local files and exercises the selected-image UI.

**Pending / Deferred:**
- West Navion / AS332L G-BKZE — post-insertion validation task: resolve source discrepancies (`10 Nov` vs `12 Nov` occurrence date in AAIB index pages; `80 nm` vs `100 nm` west of Shetland wording) by extracting exact wording from AAIB `3-2004_G-BKZE.pdf` and `S4/2001` bulletin PDF, then tighten record fields if needed.
- Amur River incident (December 31, 2018) — research and database integration deferred; will require similar comprehensive documentation and source validation.
- Incident images — continue research for the 18 canonical records currently without local files. Dupal remains deliberately unselected despite having two local candidates. Do not publish restricted internal or third-party assets as generally reusable.
- Consider stripping now-unused `severity_override` fields from the data and the unused `.cls-maintenance` CSS rule (harmless but dead).
- Big Foot TLP (2015) is currently the geographically most recent addition; Saturn (2014, Arctic Russia) is the chronologically most recent.
- When adding incidents: geolocate (set `location_precision` if approximate), fill both taxonomy axes, cite external sources with working URLs, include `data_quality` field noting undocumented vs. verified facts, and verify the load in-browser before considering done.

## Last updated

2026-08-01
