# Fact-Check Audit — data/incidents.js

Audit date: 2026-07-04. All 42 incident records were checked against independent sources — official investigation reports (NTSB, PSA/Havtil, AAIB, ATSB, DMAIB), Wikipedia, industry safety bodies (IMCA, OFEG), and news archives — to separate documented fact from AI-introduced error. Full interactive version: see the shared artifact link in chat history (2026-07-04 session).

**Summary:** 6 incidents have no independent trace found at all · 9 are real events with a fabricated/inverted core fact · 6 have meaningful discrepancies · 12 have only minor variance · 9 are well-supported.

**Systemic issue:** most `references[].url` entries in the database are dead or wrong (wrong Wikipedia disambiguators, non-existent articles, a wrong DOI) — they read as pattern-generated rather than actually looked up. Treat every reference URL as unverified until re-checked.

---

## Tier 1 — No independent trace found (6)

Extensive searches turned up nothing corroborating these incidents' existence, or found evidence directly contradicting a core premise.

### #22 — Skandi Hawk / Safe Astoria Near-Miss (2011)
- The vessel Skandi Hawk (IMO 9480734) was built in **2012** — it did not exist at the time of the claimed 2011 collision.
- DOF's Malampaya support work is documented as starting ~2015, not 2011.
- No source of any kind describes this collision; the sole reference is an uncheckable "internal Shell Philippines case study."

### #23 — Helicopter Rollover on Offshore Helideck (2009)
- No NTSB record, news report, or bulletin matches this event as described.
- Appears to blend two different real GoM accidents (a fatal Jan 2009 PHI S-76 bird-strike crash, and an unrelated fatal Bell 407 helideck rollover) — aircraft type, mechanism, date, and survivor count match neither.

### #16 — Lightning Strike — Middle East Oilfield (2013)
- No trace anywhere; sourced only to a non-public internal Shell bulletin.
- States as flat fact that vehicles aren't safe lightning shelters — NOAA guidance is more conditional (safe if occupants aren't touching conductive/exterior-connected parts).

### #17 — Gumusut-Kakap: Gangway Collapse (2014)
- Platform/project context is real, but no source describes this specific event.
- Suspiciously precise timestamp ("5 Oct 2014, 21:50 local") with zero corroboration.

### #18 — Gumusut-Kakap: Drifting Barge Collision (2013)
- Installation campaign timeline is real, but no source describes this event. Neither vessel is named, removing the one thing that might make it searchable.

### #32 — South China Sea — Internal Wave Incidents (2004)
- The underlying phenomenon (internal solitons) is real and well documented, but no specific named incident is verifiable.
- The one concrete example cited (Liwan gas field riser exceedance) was actually caused by **Typhoon Koppu (2009)**, not a soliton — a causal misattribution.

---

## Tier 2 — Real event, fabricated or inverted core fact (9)

### #25 — West Gamma (1990)
- DB claims 4 fatalities of 26 aboard. Real event: **49–51 aboard, zero fatalities** — a celebrated mass rescue (ESVAGT won a 1991 safety award for it). DB also mislabels it as a drilling rig; it was an accommodation flotel.

### #28 — Hurricane Katrina — GoM Offshore (2005)
- DB claims the liftboat "Pelican" sank near Grand Isle, killing ~8. No such vessel/sinking exists; sources agree **no lives were lost offshore during Katrina**. Likely a garbled transposition of the unrelated 2021 SEACOR Power disaster (6 of 19 died, different name/date/location/storm).
- "457 pipeline damage reports" is the combined Katrina+Rita total, attributed to Katrina alone.
- "Gulf of Mexico Operators Coalition (GOMOC)" cannot be found anywhere.

### #2 — Drillship Seacrest (1989)
- Omits the documented primary cause (drill pipe left standing in the derrick — top-heavy condition).
- "Evacuation trigger >75 knots" and "anchor brake found unlocked" appear in no source.
- Implies an authoritative "critical failures" finding; in fact there was no formal flag-state investigation — only a private one commissioned by Unocal itself, which found the vessel met design standards.

### #15 — Key Biscayne (Tow Failure) (1983)
- Calls the operator "undisclosed"; the 1983 inquiry names it publicly: **Esso Australia Ltd**.
- Credits NOPSA with a regulatory response — NOPSA didn't exist until 2005, 22 years later.
- Omits the documented failure chain (tow-line parting → loss of control → down-flooding via shale-shaker line) and that the rig's legs were never shortened per its own tow manual.

### #19 — Qarn Alam Oilfield Camp Storm (1996)
- Date is 4–5 days off the only documented 1996 Oman storm (11–12 June vs. DB's 16 June).
- Wind claimed at 60–80 knots vs. ~39–45 knots documented.
- Casualty/damage figures (12 injured, ~20 units destroyed) appear nowhere.

### #39 — Malampaya Pipeline — Turbidity Current (2006)
- Claims the triggering typhoon is "not publicly identified" — the paper the DB itself cites names it explicitly: **Typhoon Durian, Nov 2006**.
- Reference DOI points to an unrelated paper on hydrogels.
- Omits a second, documented 2016 damage event (Typhoon Nock-ten) to the same pipeline.

### #34 — COSL Innovator — Rogue Wave Strike (2015)
- Title/narrative calls it "a breaking rogue wave"; the PSA report explicitly states there's **no indication the wave was breaking** and declines to classify it as rogue/freak at all.
- DB's Hs (~14 m) conflates significant wave height with a different figure (estimated wave-crest height); actual measured Hs was 9.5 m.
- States flatly the rig "had a negative air gap"; the final as-built analysis actually concluded a positive air gap (earlier conflicting analyses were the problem).
- Presents Statoil's contract termination with no aftermath; an Oslo court later ruled it unlawful.

### #27 — Hurricane Ivan — GoM / Taylor Energy MC20 (2004)
- Claims NOAA buoy 42001 recorded a 27.7 m Hs "world record." Real figure is from NRL's own gauges, is a maximum individual wave height (not Hs), and actual measured Hs peaked at 17.9 m — two different quantities from two different instruments merged into one wrong claim.
- Frames the Taylor Energy leak as a settled "15+ year seep," omitting the well-documented estimate controversy (Taylor's ~3-5 gal/day vs. NOAA's 2019 finding of up to ~4,500 gal/day) and that it remains unresolved.

### #6 — Kolskaya (2011)
- DB's own `summary` and `executive_summary` fields contradict each other on tow direction (Sakhalin→Magadan vs. Kamchatka→Sakhalin); sources confirm the latter.
- "Yaguar," given as an alternate icebreaker name, appears in no source — only "Magadan" is documented.
- Wind speed overstated (30–35 m/s claimed vs. 25 m/s sourced).

---

## Tier 3 — Real event, meaningful discrepancy (6)

- **#8 Mumbai High North (2005):** persons-on-board overstated by 5; entire "actions" list unsupported — a source states no official investigation report was ever released.
- **#10 Gunashli Platform No. 10 (2015):** fatalities undercounted (DB: 12; sources: 12 confirmed + 18 missing, ~30 total).
- **#11 Hurricane Juan (1985):** wave height understated ~3x (DB: 6-8 m; sources: ~21 m); "rescue capsule" and "30+ platforms" uncorroborated.
- **#14 MT Bunga Alpinia (2012):** tonnage overstated (40,000 vs ~38,000 DWT); cited Wikipedia article doesn't exist.
- **#20 Shell Kulluk (2012):** wind overstated ~25-30% (70+ kt vs NTSB's 55-60 kt); "no injuries" contradicts NTSB's four documented minor injuries; wrong departure port.
- **#21 Scotian Slope Riser Break (2016):** wrong vessel type (called semi-submersible; was drillship Stena IceMAX); generic cause given instead of the documented tensioner/anti-recoil failure.

## Tier 4 — Minor variance only (12)

Dead reference links, and numbers modestly off (typically 10-40% from sourced values): **#1 Kielland** (wave height, sea temp mislabeled, invented "OIM hesitation" detail), **#3 Ocean Ranger** (wind/temp understated), **#5 Bohai No. 2** (wind classification, vague date), **#7 Usumacinta** (personnel count within a disputed range), **#24 Cyclone Orson** (wave height understated), **#26 Hurricane Andrew** (category overstated), **#30 Hurricane Gustav** and **#31 Hurricane Ike** (both reuse the same combined Gustav+Ike damage figure independently), **#35 Metocean Buoy Explosion** (fabricated precise location on an otherwise-accurate IMCA-sourced account), **#38 Dampier Spirit** (cyclone category at landfall overstated), **#41 La Pampilla** (fines "all paid" overstates finality), **#43 Caspian Sea Level Decline** (internal inconsistency in its own 2100 projections; conflates a 2025 vessel launch with a 2026 JV).

## Tier 5 — Well-supported (9)

Closely match primary sources: **#4 Glomar Java Sea**, **#9 Sea Gem**, **#12 Bourbon Dolphin**, **#13 AMBER II / SEA WORKER** (checked verbatim against the DMAIB report — most rigorous entry in the database), **#29 Hurricane Rita**, **#36 ENI Krueng Mane**, **#37 Jascon-4 (Harrison Okene)**, **#40 EC175 G-MCSH**, **#42 FPSO P-70**.

---

*Methodology: six parallel research passes read data/incidents.js directly and verified every checkable claim against independent sources, fetching and reading primary investigation reports in full where available. Every existing reference URL was tested directly. Incident #33 does not exist in the current file (removed in an earlier edit; the comment numbering was never adjusted).*
