# IOGP Metocean Incidents

An interactive map and database of offshore oil & gas incidents driven by weather, sea state, and other metocean factors.

## Purpose

Collects lessons-learned case studies — platform losses, tow failures, hurricane damage, rogue waves, internal-wave/soliton events, and related climate risks — into a single browsable, filterable database, for use as a reference and training resource on metocean-related offshore risk.

## Status

In progress. 59 incidents documented across a two-axis taxonomy (metocean **event type** + operational **classification**). A full fact-check remediation pass is complete (see `FACT_CHECK_AUDIT.md`); content is still being extended and refined. GSP Saturn (2014) added July 2026 as a precedent study for Arctic platform evacuation response.

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

## Usage

- Open `index.html` (locally or via GitHub Pages) to browse the map.
- Filter incidents by **event type** (metocean hazard), **region**, or **classification** (discipline) using the header controls.
- Switch datasets with the toggle button: **Full** (all incidents), **Shell** (internal-sourced only), or **External** (public-source only).
- Markers are coloured by classification and lettered by event type (see the on-map legend).
- Click a marker for the full lessons-learned writeup (what happened, what went wrong, lessons learned, follow-up actions).
- See `PUBLISHING.md` for how to publish updates to GitHub Pages, and the field reference for adding new incidents.

## Project structure

- `index.html` — page shell and map/filter controls
- `js/app.js` — map rendering, filtering, and UI logic (Leaflet)
- `css/style.css` — styling
- `data/incidents.js` — the incident dataset (source of truth; see `PUBLISHING.md` for the field schema)
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
- **Incident numbering** in `data/incidents.js` comments has gaps (removed/merged records were never renumbered) — gaps are expected, not a data error. The comment header may cite a higher count than the actual array length; trust `INCIDENTS_DATA.incidents.length` (currently 58).
- **Verification workflow.** Changes to `data/incidents.js` are validated by reloading the page under Playwright and asserting on `window.INCIDENTS_DATA` (total count, no duplicate IDs, taxonomy fields, marker rendering) rather than eyeballing.

### Session handoff (next steps)

**Completed (July 2026):**
- GSP Saturn (November 7–10, 2014) — Arctic platform tow incident in Pechora Sea. Jack-up rig encountered severe storm (70–80 knots, 8–12 m seas), lifeboat destroyed, helicopter deck damaged. All 70 crew evacuated successfully to escort vessels (0 fatalities). Platform jacked-down at Cape Kanin Nos; final outcome not documented. Record inserted with full field documentation and source citations (Belkrov.by, Wikipedia, Kolskaya precedent comparison). Comprehensive background documentation in `background files/GSP_Saturn_2014_Detailed_Incident_Report.md` (1000+ lines, fully fact-grounded, undocumented assumptions flagged). Emphasizes Arctic operational decision-making and evacuation thresholds informed by Kolskaya (2011) worst-practice precedent (53 fatalities vs. Saturn 0 fatalities).

**Pending / Deferred:**
- Amur River incident (December 31, 2018) — research and database integration deferred; will require similar comprehensive documentation and source validation.
- Consider stripping now-unused `severity_override` fields from the data and the unused `.cls-maintenance` CSS rule (harmless but dead).
- Big Foot TLP (2015) is currently the geographically most recent addition; Saturn (2014, Arctic Russia) is the chronologically most recent.
- When adding incidents: geolocate (set `location_precision` if approximate), fill both taxonomy axes, cite external sources with working URLs, include `data_quality` field noting undocumented vs. verified facts, and verify the load in-browser before considering done.

## Last updated

2026-07-29
