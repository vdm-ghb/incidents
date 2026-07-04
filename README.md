# IOGP Metocean Incidents

An interactive map and database of offshore oil & gas incidents driven by weather, sea state, and other metocean factors.

## Purpose

Collects lessons-learned case studies — platform losses, tow failures, hurricane damage, rogue waves, internal-wave/soliton events, and related climate risks — into a single browsable, filterable database, for use as a reference and training resource on metocean-related offshore risk.

## Status

In progress. 42 incidents currently documented; content and fact-checking are ongoing (see `FACT_CHECK_AUDIT.md`).

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
- Filter incidents by event type or region using the header controls.
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

- Incident numbering in `data/incidents.js` comments has gaps (e.g. #33, formerly Super Puma G-REDL, was removed as not weather-related) — the comments were never renumbered, so gaps are expected and not a data error.
- A fact-check audit (2026-07-04) found the database's AI-written reference URLs are frequently dead or wrong, and flagged 15 incidents with fabricated or materially incorrect details — see `FACT_CHECK_AUDIT.md` before treating any single record as authoritative.

## Last updated

2026-07-04
