#!/usr/bin/env python3
"""Inject executive_summary fields into incidents.js before each what_happened field."""

import re

SUMMARIES = {
    'kielland-1980':
        'A fatigue crack in a hydrophone brace weld caused a support column to fail on the '
        'semi-submersible flotel Alexander L. Kielland during a North Sea storm (seas ~8 m, '
        'winds ~40 knots) on 27 March 1980. The platform capsized in approximately 20 minutes; '
        'only one of seven lifeboats was successfully launched. 123 of 212 persons on board perished.',

    'seacrest-1989':
        'Typhoon Gay — an unusually intense storm rare in the Gulf of Thailand — struck the '
        'drillship Seacrest at anchor at the Platong gas field on 3 November 1989. Evacuation '
        'criteria required winds above 75 knots before action was triggered; by that threshold, '
        'safe evacuation was no longer possible, anchors parted, and the vessel capsized. '
        'Of 97 on board, 91 perished; only 6 survived after drifting for days.',

    'ocean-ranger-1982':
        'During a violent North Atlantic winter storm (hurricane-force winds, seas up to 20 m) '
        'on 15 February 1982, storm waves shattered a portlight in the ballast control room of '
        'the semi-submersible Ocean Ranger, flooding the controls and creating an uncontrolled list. '
        'The rig capsized and sank; lifeboats launched in the extreme seas were swamped or destroyed '
        'in near-zero-degree water. All 84 persons on board perished.',

    'glomar-java-sea-1983':
        'The drillship Glomar Java Sea was riding out Typhoon Lex at anchor in the South China Sea '
        'on 25 October 1983 when it capsized in winds of approximately 75 knots and heavy seas. '
        'The vessel had not been evacuated or relocated before the typhoon struck; it reported a '
        '15° list and approximately 75-knot winds by radio before contact was lost. '
        'All 81 persons on board perished; there were no survivors.',

    'bohai-no2-1979':
        'In November 1979, the jack-up rig Bohai No. 2 was being wet-towed between well locations '
        'in Bohai Bay when a sudden severe autumn storm overwhelmed the operation. Storm waves '
        'breached a hull opening, causing progressive flooding and capsize. 72 of 76 persons on '
        'board were killed; inadequate weather planning for the tow and the late-autumn storm season '
        'in Bohai Bay contributed directly to the loss.',

    'kolskaya-2011':
        'The jack-up Kolskaya capsized and sank in the Sea of Okhotsk on 18 December 2011 during '
        'a severe Arctic winter storm (winds 30–35 m/s, waves 4–5 m) while under tow '
        'from Kamchatka to Sakhalin. Storm waves flooded the rig\'s air and tank compartments, '
        'causing severe listing and capsize in approximately 20 minutes. Of 67 on board, 53 died; '
        'the tow was conducted in poor weather with inadequate weather forecasting, insufficient '
        'tow route planning, and no effective evacuation procedure in place.',

    'usumacinta-2007':
        'Cold Front No. 4 (a "Norte") struck the Bay of Campeche on 23 October 2007 with winds '
        'of approximately 70 knots and seas of 6–8 m, causing the jack-up rig Usumacinta to '
        'oscillate and strike the adjacent Kab-101 wellhead platform. The collision ruptured a '
        'wellhead valve, triggering an uncontrolled gas blowout and emergency evacuation. '
        'Two enclosed lifeboats capsized in the heavy seas; 22 of approximately 80 personnel died.',

    'mumbai-high-north-2005':
        'On 27 July 2005, during typical Arabian Sea monsoon conditions (winds ~35 knots, seas '
        '4–5 m), the support vessel MSV Samudra Suraksha lost position and struck the gas '
        'export riser of the Mumbai High North (MHN) platform. The resulting gas release ignited, '
        'causing a catastrophic fire that destroyed the platform. 22 personnel died or remain missing.',

    'sea-gem-1965':
        'On 27 December 1965, the UK\'s first offshore oil discovery rig Sea Gem collapsed in '
        'rough winter North Sea conditions (wave heights estimated 3–5 m) while being jacked '
        'down for relocation. Dynamic wave loading during the jacking-down operation caused two of '
        'ten legs to fail structurally, capsizing the rig. 13 of 32 crew died.',

    'gunashli-2015':
        'On 4 December 2015, a severe Caspian Sea winter storm (winds exceeding 90 km/h, estimated '
        'seas 4–6 m) caused a gas pipeline to rupture at Gunashli Platform No. 10, igniting a '
        'major fire. Part of the platform structure collapsed, and a lifeboat fell during evacuation. '
        '12 workers were killed and an additional number went missing; 33 were rescued.',

    'hurricane-juan-1985':
        'Hurricane Juan — an unusual slow-moving, looping late-season Category 1 hurricane '
        '— struck the central Gulf of Mexico in October 1985, generating prolonged confused '
        'seas estimated at 6–8 m. Multiple small offshore crew boats, supply vessels, and '
        'rescue capsules capsized in the heavy conditions; 9 offshore workers died.',

    'bourbon-dolphin-2007':
        'On 12 April 2007, the anchor-handling vessel Bourbon Dolphin capsized west of Shetland '
        'during anchor-handling operations for a semi-submersible rig in gale conditions. A heavy '
        'anchor chain shifted under tension and imposed a severe off-centre lateral load; the vessel '
        'heeled sharply and capsized within minutes. Eight of 15 crew died.',

    'amber-sea-worker-1978':
        'In December 1978, the standby support vessel SEA WORKER capsized and sank in a severe '
        'North Sea winter storm while maintaining station near the jack-up rig AMBER II approximately '
        '130 km off northeast England. Large breaking waves overcame the small vessel\'s stability; '
        '5 crew members perished. The jack-up rig, elevated above the wave action, survived the '
        'storm undamaged.',

    'bunga-alpinia-2012':
        'On 26 July 2012, a lightning strike hit the chemical tanker MT Bunga Alpinia while the '
        'vessel was loading methanol at the Labuan terminal in Malaysia during a tropical '
        'thunderstorm. The strike ignited flammable methanol vapours in the cargo area, triggering '
        'a series of explosions and a devastating fire. Five crew members were killed and the ship '
        'was declared a constructive total loss.',

    'key-biscayne-1983':
        'On 1 September 1983, the jack-up rig Key Biscayne was lost during a tow off Western '
        'Australia in a severe winter storm. The rig capsized or sank; no fatalities were recorded. '
        'The tow weather window had not been adequately assessed against the Southern Ocean swell '
        'hazard present at that time of year.',

    'lightning-me-2013':
        'In 2013, lightning struck the radio antenna of a vehicle carrying two contractors at a '
        'remote onshore Middle East oilfield during a thunderstorm. One contractor was killed; '
        'the other was injured. A vehicle with an external metal antenna is not a safe '
        'lightning shelter.',

    'gumusut-gangway-2014':
        'On 5 October 2014, the telescopic gangway connecting the accommodation flotel to the '
        'Gumusut-Kakap FPS detached and fell into the sea during vessel disconnection as weather '
        'worsened. No personnel were on the gangway at the moment of detachment; no fatalities '
        'occurred. The incident was classified as a high-potential near-miss.',

    'gumusut-barge-2013':
        'In 2013, adverse weather caused a cargo barge moored at the Gumusut-Kakap deepwater '
        'field to part its mooring lines and drift free. A single tug attempting to intercept the '
        'barge collided with it in the difficult sea conditions; no personnel were injured. '
        'The incident carried high potential for the drifting barge to strike the FPS.',

    'qarn-alam-1996':
        'On 16 June 1996, a sudden violent squall line or downburst struck the Qarn Alam oilfield '
        'camp in interior Oman without meaningful advance warning, lifting and overturning portacabin '
        'accommodation and office units. Approximately 20 units were destroyed and 40 more damaged; '
        '12 personnel were injured. No fatalities occurred.',

    'kulluk-2012':
        'In late December 2012, the drilling barge Kulluk broke free from tow during a severe '
        'Gulf of Alaska winter storm (winds exceeding 70 knots, seas over 10 m) after the tow '
        'vessel MV Aiviq suffered multiple engine failures. The towline parted repeatedly despite '
        'assistance from emergency tugs; on 31 December the unmanned Kulluk grounded on Sitkalidak '
        'Island near Kodiak. No personnel were on board; no fatalities occurred.',

    'nova-scotia-riser-2016':
        'In March 2016, a severe North Atlantic winter storm forced a deepwater drilling rig off '
        'its well location on the Scotian Slope offshore Nova Scotia. Under the storm-induced '
        'motion loads on the disconnected riser string, approximately 2 km of drilling riser '
        'parted and sank to ~2000 m depth. No fatalities occurred and no pollution resulted, as '
        'the riser had been purged of drilling fluids prior to the storm.',

    'skandi-hawk-2011':
        'In 2011, the offshore supply vessel Skandi Hawk collided with the flotel Safe Astoria '
        'at the Malampaya gas platform, Philippines, while operating near the weather limit of '
        'safe vessel operations. No personnel were injured and damage was minor, but the potential '
        'for a major collision with the platform was high.',

    'helicopter-rollover-2009':
        'On 24 December 2009, a Sikorsky S-76 helicopter suffered a dynamic rollover on a '
        'deepwater Gulf of Mexico platform helideck after a gust of 30–50 knots struck the '
        'aircraft broadside during a ground-taxi repositioning manoeuvre. The helicopter flipped '
        'onto its side with rotors turning, destroying the aircraft. All 7 occupants survived '
        'with minor injuries.',

    'cyclone_orson_1989':
        'Tropical Cyclone Orson struck the North Rankin A gas platform on 22–23 April 1989 '
        'with sustained winds of 200 km/h and gusts to 250 km/h — one of the most intense '
        'cyclones ever recorded on the Australian North West Shelf. The fixed platform survived '
        'intact; a nearby drilling rig was displaced approximately 2 km from its location by '
        'the extreme forces.',

    'west_gamma_1990':
        'The jack-up drilling rig West Gamma capsized and sank in the North Sea on 21 August 1990 '
        'while under tow after weather deteriorated beyond the rig\'s tow-mode stability envelope. '
        'Water ingress caused progressive listing and capsize; 4 of 26 persons on board died.',

    'hurricane_andrew_1992':
        'Hurricane Andrew crossed the Gulf of Mexico in August 1992 as a Category 4 storm; '
        'pre-storm evacuations prevented offshore fatalities, but approximately 30 platforms were '
        'destroyed or severely damaged and multiple pipelines ruptured. The storm revealed that '
        'existing GoM platform design criteria were inadequate in parts of the Gulf.',

    'hurricane_ivan_2004':
        'Hurricane Ivan crossed the Gulf of Mexico in September 2004 generating the largest waves '
        'ever recorded in the Gulf — a significant wave height of 27.7 m. Seven platforms '
        'were destroyed and 24 more damaged; all personnel had been evacuated. Ivan\'s wave loading '
        'triggered a submarine landslide that destroyed the Taylor Energy MC20 platform, creating '
        'an oil seep that persisted for over 15 years.',

    'hurricane_katrina_2005':
        'Hurricane Katrina made landfall on the Louisiana coast on 29 August 2005 (Category 5 '
        'peak over the Gulf); mass evacuation of ~90,000 workers limited casualties, but 47 '
        'platforms were destroyed, over 20 sustained major damage, and 457 pipeline damage reports '
        'were filed. The liftboat Pelican, which had not completed evacuation, sank near Grand '
        'Isle killing approximately 8 workers.',

    'hurricane_rita_2005':
        'Hurricane Rita struck the western Gulf of Mexico just 25 days after Katrina, destroying '
        '69 more platforms and seriously damaging 32 — bringing the combined 2005 total to '
        'approximately 115 platforms lost. The offshore workforce was re-evacuated; no offshore '
        'fatalities occurred.',

    'hurricane_gustav_2008':
        'First major test of post-Katrina offshore safety procedures; mass evacuation removed '
        '90,000+ workers from 632 manned platforms (of 717 total). Revealed effectiveness of new '
        'evacuation protocols but exposed continued vulnerabilities in structural design standards '
        'for extreme hurricane loads.',

    'hurricane_ike_2008':
        'Hurricane Ike struck the Texas coast near Galveston on 13 September 2008; despite being '
        'Category 2 at landfall, its exceptional size generated damaging waves, currents, and '
        'storm surge across a far wider area than its intensity rating implied. Approximately 50 '
        'platforms were destroyed and 31 more severely damaged; no offshore fatalities occurred.',

    'south_china_sea_solitons':
        'Tidal forcing at the Luzon Strait generates powerful internal wave packets (solitons) '
        'that propagate westward across the South China Sea — invisible at the surface but '
        'producing sudden subsurface current pulses of 2–3 m/s with no visual warning. '
        'Multiple drillships and FPSOs have been displaced 50–300+ m off location, causing '
        'riser over-tension, emergency disconnections, and mooring damage.',

    'super_puma_g_redl_2009':
        'On 1 April 2009, Super Puma helicopter G-REDL suffered catastrophic failure of its main '
        'gearbox support structure 11 km from the Miller platform in the North Sea. A pre-existing '
        'fatigue crack — undetectable by existing maintenance procedures — caused the '
        'structure to fracture suddenly during routine cruise flight (sea state 3–4 m, winds '
        '~20–25 knots), severing the main rotor drive. The helicopter ditched; all 16 persons '
        'on board perished.',

    'cosl-innovator-2015':
        'On 30 December 2015, a steep breaking wave struck the semi-submersible COSL Innovator '
        'on the Troll field during a severe North Sea storm (winds 25–30 m/s, Hs ~14 m), '
        'shattering 17 windows in the accommodation module. One person was killed and four others '
        'injured. The investigation found the rig had a negative air gap — the deck too close '
        'to the wave crest — allowing the wave to act directly on the accommodation structure.',

    'metocean-buoy-explosion-2013':
        'During maintenance of a recovered metocean buoy off Sabah, Malaysia, a technician used '
        'an angle grinder to free a seized bolt on the sealed instrument compartment. Corroded '
        'batteries had allowed hydrogen gas to accumulate inside after ~2 years at sea; sparks '
        'ignited the mixture and the explosion killed one crewman. The mandatory purging procedure '
        'had not been followed.',

    'eni-aceh-soliton':
        'During ENI\'s deepwater drilling campaign in the Andaman Sea off Aceh, Indonesia, '
        'internal solitary waves (solitons) repeatedly displaced the drilling rig up to 189 m '
        'off location, ripping the drill pipe from the blowout preventer (BOP). Three of five '
        'planned wells were affected; no fatalities occurred but equipment loss was severe.',

    'jascon-4-2013':
        'On 26 May 2013, a tugboat operating approximately 30 km off the Niger Delta coast in '
        'the Gulf of Guinea capsized after a sudden squall with heavy ocean swells struck without '
        'warning. Eleven of 12 crew perished; one survivor was found alive by saturation divers '
        'inside the sunken wreck after several days.',

    'dampier-spirit-2006':
        'During Tropical Cyclone Hubert in April 2006, the FSO Dampier Spirit\'s primary hawser '
        'to its CALM buoy mooring on the Australian North West Shelf parted under cyclonic loading. '
        'Left unmoored in active cyclone conditions, the vessel narrowly avoided grounding; the '
        'import hose breakaway coupling also parted, releasing oil. No fatalities occurred.',

    'malampaya-turbidity-2006':
        'During the 2006 Philippine typhoon season, extreme rainfall loaded the Baco and Malaylay '
        'rivers with sediment that drained into the Baco-Malaylay Submarine Canyon, triggering a '
        'turbidity current. The fast-moving sediment flow displaced the 504-km Malampaya subsea '
        'gas export pipeline from its seabed position and damaged its protective rock berms. '
        'No fatalities occurred; pipeline integrity was maintained.',

    'ec175-elgin-2023':
        'On 17 February 2023, an EC175 helicopter was shut down on the Elgin North Sea platform '
        'after a tail rotor gearbox chip warning, but the rotor brake failed, leaving the main '
        'rotors free to sail in strong gusts. Four main rotor blades detached; one narrowly missed '
        'personnel on the helideck. No fatalities occurred.',
}

def js_escape(s):
    """Escape a Python string for use in a JS single-quoted string."""
    return s.replace('\\', '\\\\').replace("'", "\\'")

def inject(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # For each incident id, find the block and insert executive_summary
    # Pattern: find `id: 'INCIDENT_ID',` then find the next `what_happened:` and insert before it
    injected = 0
    for inc_id, summary in SUMMARIES.items():
        escaped = js_escape(summary)

        # Check if executive_summary already exists for this id
        # Find the incident block by locating id: 'inc_id'
        id_pattern = f"id: '{inc_id}'"
        id_pos = content.find(id_pattern)
        if id_pos == -1:
            print(f"WARNING: could not find id '{inc_id}'")
            continue

        # From that position, find the next 'what_happened:'
        wh_pos = content.find('      what_happened:', id_pos)
        if wh_pos == -1:
            print(f"WARNING: could not find what_happened for '{inc_id}'")
            continue

        # Check if executive_summary already inserted (don't double-insert)
        es_check = content.find('executive_summary:', id_pos)
        next_id_pos = content.find("id: '", id_pos + len(id_pattern))
        if es_check != -1 and (next_id_pos == -1 or es_check < next_id_pos):
            print(f"SKIP (already present): {inc_id}")
            continue

        # Insert executive_summary line before what_happened
        insertion = f"      executive_summary: '{escaped}',\n"
        content = content[:wh_pos] + insertion + content[wh_pos:]
        injected += 1
        print(f"OK: {inc_id}")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"\nDone. {injected} executive_summary fields injected.")

if __name__ == '__main__':
    import sys
    path = sys.argv[1] if len(sys.argv) > 1 else 'data/incidents.js'
    inject(path)
