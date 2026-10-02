window.INCIDENTS_DATA = {
  incidents: [

    /* ──────────────────────────────────────────────────
       1. Alexander L. Kielland - 1980
    ─────────────────────────────────────────────────── */
    {
      id: 'kielland-1980',
      name: 'Alexander L. Kielland Flotel Capsize in North Sea Storm',
      year: 1980,
      date: '27 March 1980',
      location: 'Ekofisk field, North Sea, Norway',
      lat: 56.533,
      lng: 3.210,
      region: 'Europe',
      platform_type: 'Semi-submersible flotel (accommodation rig)',
      operator: 'Phillips Petroleum (Ekofisk field operator)',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'Severe North Sea gale - winds gusting to approximately 40 knots, waves to approximately 12 m, rain and dense fog (not an extreme storm)',
      fatalities: 123,
      persons_on_board: 212,
      survivors: 89,
      image: {
        src: 'images/kielland-1980-flotel-with-edda-platform.jpg',
        alt: 'Aerial view of the Alexander L. Kielland flotel alongside the Edda 2/7C platform before the casualty.',
        caption: 'Alexander L. Kielland alongside Edda 2/7C before the casualty.',
        credit: 'Norsk Oljemuseum / Norwegian Petroleum Museum, CC BY 3.0'
      },
      // Extra shareable images used only by the Safety Moment pack; the main incident page keeps the single image above.
      pack_images: [
        {
          src: 'images/kielland-1980-fracture-diagram.png',
          alt: 'Investigation diagram of the Kielland legs and braces showing where the members fractured.',
          caption: 'Commission diagram: the fatigue crack began at the hydrophone mount on brace D-6; the red marks show where the braces broke and freed leg D.',
          credit: 'After the Norwegian commission of inquiry report (NOU 1981:11); diagram by Wiki-Chris, public domain, via Wikimedia Commons'
        },
        {
          src: 'images/kielland-1980-column-d-drifting.jpg',
          alt: 'The detached column D of Alexander L. Kielland floating in the water.',
          caption: 'Leg D (column D) afloat after it broke away from the platform.',
          credit: 'Norsk Oljemuseum / Norwegian Petroleum Museum, CC BY 3.0, via Wikimedia Commons'
        },
        {
          src: 'images/kielland-1980-edda-and-capsized-rig.jpg',
          alt: 'Aerial view of the Edda 2/7C platform with the capsized Alexander L. Kielland and rescue craft in the water.',
          caption: 'The Edda 2/7C platform with the inverted Kielland and rescue craft shortly after the capsize.',
          credit: 'Norsk Oljemuseum / Norwegian Petroleum Museum, CC BY 3.0, via Wikimedia Commons'
        }
      ],

      infrastructure_impact: 'Total loss of the flotel. Five of six anchor cables parted before capsize; the rig floated inverted and was righted only at the third attempt in 1983, then scuttled in Nedstrand fjord after searches for the missing were completed.',
      environmental_impact: 'The reviewed sources do not report a significant pollution event; the consequence was dominated by the human toll.',
      summary: 'The semi-submersible flotel Alexander L. Kielland lost one of its five legs and capsized in about 20 minutes during a North Sea storm on 27 March 1980. A fatigue crack that had existed since construction propagated through a poorly made 6 mm weld at a hydrophone mount on bracing D-6, then broke the five remaining braces holding leg D and it tore away. The conditions were a severe gale, not an extreme storm. Of 212 people aboard, 123 died and 89 survived - Norway\'s worst offshore disaster.',
      executive_summary: 'On the evening of 27 March 1980 the semi-submersible flotel Alexander L. Kielland, moored beside the Edda 2/7C platform in the Ekofisk field, lost one of its five legs and capsized in about 20 minutes. The Norwegian commission of inquiry traced the collapse to a fatigue crack that began at a badly profiled 6 mm fillet weld around a hydrophone (sonar) mount on bracing D-6 - a defect present since the rig was built in 1976. The crack grew undetected around roughly two-thirds of the brace before D-6 failed; the five other braces holding leg D then failed by overload and the leg broke off. Five of six anchor cables parted, the rig heeled and stabilised, and when the last cable snapped at 18:53 it turned upside down. The metocean conditions - winds gusting to about 40 knots and waves to about 12 m - were a severe gale within the platform\'s design environment, not an exceptional storm; the structure simply had no redundancy to survive loss of a single member. Evacuation largely failed: of the lifeboats launched, only one released from its falls. Of 212 people aboard, 123 died and 89 survived, making it the worst disaster in Norwegian offshore history since the Second World War.',
      what_happened: 'Alexander L. Kielland was a pentagon-shaped, five-column semi-submersible built by CFEM (Compagnie Francaise d\'Entreprises Metalliques) in France and delivered in 1976. Originally an oil-drilling unit, it was converted to a floating accommodation platform, or flotel, with its berth capacity increased in 1978. It was owned by Stavanger Drilling and on hire to Phillips Petroleum, operator of the Ekofisk field, where it provided accommodation for the nearby Edda 2/7C production platform. Annual inspections had focused on the columns and pontoons; the September 1979 inspection had passed, but the bracing that later failed was not within its scope.\n\nEarly in the evening of 27 March 1980 more than 200 men were off duty in the accommodation, about 130 of them in the mess hall and cinema. The weather was a severe gale with driving rain and dense fog, winds gusting to about 40 knots and waves reported up to about 12 m. The flotel had just been winched away from the Edda platform.\n\nMinutes before 18:30 those on board felt a sharp crack followed by trembling. A fatigue fracture completed across bracing D-6 - the diagonal brace connecting leg D to the rest of the structure - and the five remaining braces holding leg D then failed by plastic overload. Leg D broke away, the rig heeled about 30 to 35 degrees and then stabilised, held by the one anchor cable that had not yet parted; five of the six cables had already broken under the uneven load.\n\nThe list continued to increase and at 18:53 the last anchor cable snapped. The platform turned completely upside down, floating with only the bottoms of its columns showing - about 20 minutes after the first failure, with roughly a 14-minute window between the loss of the leg and the final capsize.\n\nEscape and rescue were largely unsuccessful. The rig carried seven 50-man lifeboats and twenty 20-man rafts. Four lifeboats were launched but only one released from its lowering cables, because the on-load release hooks could not be freed while the falls were under load at the extreme list; one lifeboat was unusable because of the list and others were smashed against the hull in the high seas. A fifth lifeboat came adrift and surfaced upside down; survivors righted it and pulled 19 men from the water. Further survivors reached rafts, were picked up by supply boats, or swam to Edda. The designated standby vessel took about an hour to reach the scene and rescued no one. Eighty-nine people survived; 123 died, largely from drowning and hypothermia in the cold North Sea.',
      what_went_wrong: [
        'The collapse began at a gross fabrication defect: poorly profiled 6 mm fillet welds with inadequate penetration, lamellar tearing and cold cracks where a hydrophone (sonar) instrument tube was set through brace D-6. Paint on the fracture surfaces showed the cracking dated from the rig\'s 1976 construction.',
        'No fatigue design check had been made for the welded instrument connection, and the critical bracing was outside the scope of the September 1979 annual inspection, so the growing crack went undetected until it had spread around roughly two-thirds of the brace.',
        'The structure had no redundancy. Codes of the day did not require damage tolerance, so failure of one brace led directly to progressive collapse of leg D rather than a survivable local failure.',
        'Damage-stability rules did not consider the loss of a whole column, so the platform had no reserve buoyancy or stability margin for that failure mode.',
        'Doors and ventilators were not closed, allowing rapid progressive flooding once the rig heeled, which accelerated the capsize.',
        'No clear command authority existed to order abandonment. In the roughly 14-minute window before capsize most people on board could have escaped, but no one took charge on the night.',
        'Life-saving arrangements failed in the actual conditions: on-load lifeboat release hooks could not be released under load at severe list, and survival (immersion) suits were not carried, as they were not then required.',
        'Rescue mobilisation was slow; the standby vessel took about an hour to arrive and recovered no survivors, so cold-water exposure drove the death toll.'
      ],
      lessons_learned: [
        'A severe but not exceptional metocean loading exposed the real failure - a construction defect and a total lack of redundancy. Primary offshore structure must tolerate loss of any single member without progressive collapse.',
        'Weld quality, non-destructive examination and fatigue-life assessment apply to every connection, including minor, non-load-bearing attachments such as instrument mounts, which can seed a fatigue crack into a primary member.',
        'Inspection programmes must be driven by criticality: the members whose failure can bring down the structure must be inspected, not only the columns and pontoons that are easy to reach.',
        'Damage-stability and reserve-buoyancy criteria must credibly include the loss of a major column, not just minor compartment flooding.',
        'Watertight-integrity discipline - closing doors and ventilators in heavy weather - is a decisive barrier against the rapid flooding that turns a heel into a capsize.',
        'Emergency command and the authority to order abandonment must be pre-assigned, understood and exercised. A short escape window only saves lives if someone is empowered to act.',
        'Lifeboats and their release gear must work at severe list angles and under load, and cold-water survival protection with rapid, adequately crewed rescue capability are essential final barriers.'
      ],
      actions: [
        'The Norwegian commission of inquiry (1981) established the fatigue-weld origin and the absence of redundancy; Norwegian and, subsequently, international rules were tightened for structural robustness, fatigue design and damage stability of mobile offshore units, feeding into the IMO MODU Code.',
        'Command organisation on North Sea installations was formalised, identifying a clear authority to order abandonment in an emergency.',
        'The failure to launch lifeboats led to new requirements for lifeboat release hooks that can be released even under load; the IMO extended equivalent lifeboat-hook requirements to merchant ships.',
        'Survival (immersion) suits were made a requirement after the disaster, and the rig owner issued individually bagged suits to its workforce.',
        'The wreck was righted at the third attempt and scuttled in Nedstrand fjord in 1983 after searches for the missing were completed; a memorial, "Broken Chain" (Brutt lenke), was unveiled near Stavanger in 1986.',
        'A 2021 review by the Office of the Auditor General of Norway (Riksrevisjonen) found the causes had been thoroughly investigated but that some weaknesses undermined trust, the question of liability was never fully examined, and follow-up of survivors and bereaved families was inadequate; in June 2025 the Storting voted to award compensation to survivors and families.'
      ],
      metocean: {
        wave_height_hs: 'Waves reported up to approximately 12 m; a significant wave height (Hs) is not separately stated in the reviewed sources',
        wind_speed: 'Gusting to approximately 40 knots (about 74 km/h) - a severe gale',
        visibility: 'Poor - driving rain and dense fog',
        sea_temp: 'Cold North Sea water (typically about 6-7 °C in late March; not separately reported in the reviewed sources)',
        alert: 'The conditions were a severe gale within the platform\'s design environment, not an exceptional storm. The flotel was lost to a construction and fatigue defect and a total lack of structural redundancy - the weather only applied the load a sound structure should have withstood.',
        notes: 'Contemporary accounts consistently describe winds gusting to about 40 knots and waves to about 12 m with rain and dense fog. The Officer of the Watch summary, citing the European Commission offshore-accident review, characterises the weather as a severe gale rather than an extreme storm.'
      },
      data_quality: 'High for the failure sequence, weld metallurgy and evacuation account, which derive from the 1981 Norwegian commission of inquiry as summarised in the European Commission offshore-accident review and contemporaneous records. Casualty figures - 212 aboard, 123 lost, 89 survivors - are consistent across sources. Significant wave height and sea temperature are not separately quantified in the reviewed sources and are given as reported or typical values.',
      references: [
        { title: 'Norwegian Government Commission of Inquiry Report on the Alexander L. Kielland Disaster (1981)', type: 'Official inquiry', publisher: 'Norwegian Ministry of Justice', year: 1981 },
        { title: 'Investigation of the authorities\' work on the Alexander L. Kielland accident (Document 3:6, 2020-2021)', type: 'Government audit review', publisher: 'Office of the Auditor General of Norway (Riksrevisjonen)', year: 2021, url: 'https://www.riksrevisjonen.no/en/reports2/en-2019-20202/investigation-of-the-authorities-work-on-the-alexander-l.-kielland-accident/' },
        { title: 'Alexander L. Kielland Platform Capsize Accident - Investigation Report', type: 'Investigation summary and image source', publisher: 'Officer of the Watch', year: 2013, url: 'https://officerofthewatch.com/2013/04/29/alexander-l-kielland-platform-capsize-accident/' },
        { title: 'Alexander L. Kielland accident', type: 'Museum documentation project', publisher: 'Norwegian Petroleum Museum (industriminne.no)', url: 'https://kielland.industriminne.no/en/home/' },
        { title: 'Alexander L. Kielland: Norway\'s worst offshore disaster', type: 'Industry review', publisher: 'Safety4Sea', year: 2019, url: 'https://safety4sea.com/cm-alexander-l-kielland-norways-worst-offshore-disaster/' },
        { title: 'Alexander L. Kielland (platform)', type: 'Encyclopedia', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Alexander_L._Kielland_(platform)' },
        { title: 'Families welcome Norway rig deaths compensation (2025)', type: 'News report', publisher: 'BBC News', year: 2025, url: 'https://www.bbc.com/news/articles/c5y67zed1n2o' }
      ]
    },

    /* CORRUPTED_INSERTION_QUARANTINE_BEGIN
    {
       id: 'quarantined-corrupt-record',
      name: 'Alexander L. Kielland',
      year: 1980,
      date: '27 March 1980',
      location: 'Ekofisk field, North Sea, Norway',
      lat: 56.533,
      lng: 3.210,
      region: 'Europe',
      platform_type: 'Semi-submersible flotel (accommodation rig)',
      weather_event_type: 'cyclone',
      classification: 'drilling',
      storm_sid: '1989305N07105',
      storm_name: 'GAY',
      weather_event: 'Typhoon Gay — rapid local intensification, ~90-knot peak gusts and 5.39 m significant waves',
      fatalities: 91,
      persons_on_board: 97,
      survivors: 6,
      image: {
        src: 'images/seacrest-1989-vessel-at-anchor.jpg',
        alt: 'Black-and-white aerial photograph of the drillship Seacrest at anchor before its loss.',
        caption: 'Drillship Seacrest at anchor before the loss.',
        credit: 'Photographer not stated; source via Thai Wreck Diver. Rights unconfirmed.'
      },
      summary: 'Typhoon Gay intensified rapidly and passed directly over the moored drillship Seacrest in the Platong gas field. After seven anchor cables broke or were released, the vessel dragged on one bow anchor and oscillated broadside to the wind. A critical combination of gusty typhoon-force wind and large beam waves capsized the vessel to port. Six of the 97 people aboard survived; 91 died.',
      executive_summary: 'On 3 November 1989, Typhoon Gay intensified unexpectedly in the Gulf of Thailand and passed directly over the drillship Seacrest at the Platong gas field. The vessel survived the first eyewall and the calm eye, but seven anchor cables broke or were released, leaving it to drag on one bow anchor. As the storm returned, Seacrest oscillated broadside to the wind and capsized to port when a critical gust acted with a large wave. The investigation found that the vessel was within accepted stability limits; standing drill pipe, shifted casing and water ingress affected its condition but did not independently explain the loss. Six of 97 people aboard survived after drifting far beyond the initial search area.',
      what_happened: 'Seacrest was a 362-foot, Panamanian-registered drillship owned by Seacrest Drilling Company, operated by Great Eastern Drilling and Engineering, and contracted to Unocal Thailand. It was moored over a Platong gas-field well by eight anchors. Forecasts placed the tropical disturbance south of the vessel and did not predict its rapid intensification or northward change of track; the report states that Typhoon Gay was the first typhoon in 40 years to form within the Gulf of Thailand.\n\nAs conditions worsened on 3 November, the crew hung off the well and disconnected the riser. Some drill pipe remained in the derrick setback, casing later shifted, and seawater entered the mud room and emergency-generator room; the report inferred that specified ventilation openings had not been closed. Anchor cables progressively failed or were released. During the eye, Seacrest was holding on anchor No. 7 with both thrusters at full power, carrying a compensated port list associated with shifted casing and reporting water in the mud room. When the wind returned from starboard, equipment and drill pipe were reported moving.\n\nPhysical evidence showed that anchor cable No. 1 ran completely off its winch with the brake off; cables Nos. 2, 3, 4, 5, 6 and 8 failed in overload; and cable No. 7 remained attached while its anchor dragged. The vessel moved about 2.1 nautical miles from the well and oscillated broadside to the predominant wind. Most personnel had gathered near the aft abandon-ship stations when several larger waves approached. The investigation modeled capsize at about 1350 from a critical combination of gusty beam wind and a large wave, not from inadequate static stability alone.\n\nThe inverted wreck was located floating about four nautical miles from the well the following morning. Initial searches covered roughly a 30-mile radius, but high wave-drift forces carried survivors beyond that area. Six survivors were recovered in two groups about 62 and 69 nautical miles northwest of Seacrest on 5 and 6 November. The other 91 people aboard died.',
      what_went_wrong: [
        'Available forecasts did not predict the storm\'s rapid intensification or northward track change, leaving insufficient warning for evacuation or escape from its path.',
        'The documented emergency threshold was wind above 75 knots. The investigation judged this too high because anchor handling and evacuation were already unsafe by the time winds reached that level.',
        'Seven of eight anchor cables broke or were released. With only the dragging No. 7 bow anchor attached, the vessel oscillated into broadside exposure; thrusters alone could not prevent that heading.',
        'Drill pipe remained in the derrick setback, casing shifted, and other equipment moved. Although these conditions affected loading and list, the stability analysis found they did not independently explain the capsize.',
        'Seawater entered the mud room and emergency-generator room. The investigation inferred that ventilation openings specified for closure in the operating manual had not been secured.',
        'The operator\'s emergency manual did not address heavy-weather handling of a moored vessel, leaving no specific company procedure for this scenario.',
        'The initial search radius did not account for extreme wave-driven drift; survivors moved beyond the area predicted by standard search-and-rescue guidance.'
      ],
      lessons_learned: [
        'Emergency and evacuation triggers must be set below the operating limits for anchor handlers, helicopters and other evacuation resources; a 75-knot trigger leaves no workable response window.',
        'Forecast uncertainty and rapidly worsening field observations must trigger conservative action even when forecast tracks place the storm elsewhere.',
        'Heavy-weather procedures must explicitly cover moored drillships, including anchor-failure sequences, heading control, thruster use and criteria for abandoning the location.',
        'All prescribed watertight, weathertight and ventilation closures must be verified, while drill pipe, casing and movable equipment are secured to control flooding, list and shifting loads.',
        'Compliance with static classification-society stability criteria does not ensure survival: dynamic assessment must consider coupled gusty wind, waves, heading and mooring condition.',
        'Search planning after a cyclone capsize must model rapidly changing wave drift as well as current and wind; standard constant-condition guidance can materially underestimate survivor displacement.'
      ],
      actions: [
        'The investigation identified the operator\'s 75-knot emergency threshold as too high and concluded that emergency action must begin while evacuation and anchor handling remain feasible.',
        'The investigation identified a need for heavy-weather procedures specific to ships operating at anchor, a scenario not addressed in the operator\'s emergency manual or cited industry references.',
        'The investigation corrected wind-overturning calculations used in the shipbuilder\'s stability assessment and noted that erroneous operating-manual guidance could permit excessive vertical centre of gravity, although Seacrest was within limits during the accident.',
        'The capsize analysis demonstrated that classification checks based on steady wind should be supplemented by dynamic assessment of gusts, waves, heading and mooring restraint.',
        'The survivor-trajectory analysis showed that severe wave drift should be incorporated into search planning where cyclone conditions change rapidly.'
      ],
      metocean: {
        wave_height_hs: '5.39 m hindcast maximum at Seacrest; individual waves possibly up to ~11 m',
        wind_speed: '~60 kn 30-minute mean; ~75 kn 1-minute wind; peak gusts ~90 kn',
        sea_temp: '~29 °C (Gulf of Thailand)',
        notes: 'The hindcast placed the eye directly over Seacrest. Before capsize it estimated roughly 53–55-knot mean winds and 15–16-foot significant waves, with wind and wave directions producing broadside exposure. The report states that no instrumental wave measurements were available, so modeled wave values could not be directly validated.'
      },
      data_quality: 'High for the documented vessel condition, communications, recovered mooring evidence and investigation results. The primary source is a comprehensive October 1990 Failure Analysis Associates report commissioned by Unocal Thailand\'s legal department, not an independent flag-state investigation. Wind, wave, capsize and survivor-drift values are reconstructed or modeled; the report explicitly notes that wave hindcasts lacked instrumental validation.',
      references: [
        { title: 'Investigation of Events Surrounding the Capsize of the Drillship Seacrest', type: 'Commissioned investigation report', publisher: 'Failure Analysis Associates, Inc.', year: 1990, url: 'https://thaiwreckdiver.com/documents/seacrest_drillship_sinking_investigation_1989.pdf', notes: 'Prepared for the Unocal Thailand legal department; October 1990.' },
        { title: 'ThaiWreckDiver — Seacrest incident account', type: 'Historical record', publisher: 'ThaiWreckDiver.com' },
        { title: 'Wikipedia — MV Seacrest', type: 'Encyclopedia', url: 'https://en.wikipedia.org/wiki/MV_Seacrest' }
      ]
    },

    CORRUPTED_INSERTION_QUARANTINE_END */
    {
      id: 'seacrest-1989',
      name: 'Drillship Seacrest Capsize During Typhoon Gay',
      year: 1989,
      date: '3 November 1989',
      location: 'Platong gas field, Gulf of Thailand - capsize position 9°46′N, 101°18′E',
      lat: 9.7667,
      lng: 101.3000,
      location_precision: 'Capsize position reconstructed from side-scan sonar, recovered mooring components and the No. 7 anchor drag furrow in the 1990 investigation.',
      region: 'Asia',
      platform_type: '362 ft drillship (1977-built; eight-point mooring)',
      operator: 'Seacrest Drilling / Great Eastern; contracted to Unocal Thailand',
      weather_event_type: 'cyclone',
      classification: 'drilling',
      storm_sid: '1989305N07105',
      storm_name: 'GAY',
      weather_event: 'Typhoon Gay - rapid local intensification, approximately 90-knot peak gusts and 5.39 m significant waves',
      fatalities: 91,
      persons_on_board: 97,
      survivors: 6,
      infrastructure_impact: 'Total loss of the drillship. The inverted wreck was later moved to an approved military dumping ground, stripped of petroleum products and scuttled.',
      environmental_impact: 'Petroleum products were removed before the wreck was scuttled; the reviewed investigation does not quantify any release during the capsize or recovery.',
      image: {
        src: 'images/seacrest-1989-vessel-at-anchor.jpg',
        alt: 'Black-and-white aerial photograph of the drillship Seacrest at anchor before its loss.',
        caption: 'Drillship Seacrest at anchor before the loss.',
        credit: 'Photographer not stated; source via Thai Wreck Diver. Rights unconfirmed.'
      },
      summary: 'Typhoon Gay intensified rapidly inside the Gulf of Thailand and passed directly over the moored drillship Seacrest. The vessel survived the first eyewall and the deceptive calm of the eye, but seven anchor cables had run out, parted or ceased to restrain it. Held only by the dragging No. 7 bow anchor, Seacrest yawed toward broadside exposure as the storm returned and capsized under the combined action of gusty wind and large beam waves. Six of the 97 people aboard survived; 91 died.',
      executive_summary: 'On 3 November 1989, Typhoon Gay developed and intensified close to the Platong gas field more rapidly than the available forecasts anticipated. Seacrest stopped drilling, hung off the well and disconnected the riser, but by the passage of the eye its eight-point mooring had effectively reduced to one dragging port-bow anchor. The last radio call at 1326 reported a compensated 5-degree port list and winds rising again. The commissioned investigation estimated capsize within the next half hour, when slow yaw oscillations brought the vessel broadside to a critical combination of gusty wind and large waves. Recovered cables, the anchor furrow and seabed debris supported that reconstruction. The same investigation found Seacrest within accepted static stability limits: standing drill pipe, shifted casing and water ingress affected its condition but did not alone explain the loss. Six survivors drifted beyond the initial 30-nautical-mile search area and were found 62 and 69 miles northwest of the vessel. The disaster therefore joins forecasting uncertainty, late emergency thresholds, progressive mooring loss, dynamic wind-wave loading and search-drift error in one connected sequence.',
      what_happened: 'The drillship Seacrest was working over a gas well in the Gulf of Thailand, moored on station by an eight-point anchor spread. Typhoon Gay was an exceptional storm: the first typhoon to strike Thailand since 1891 and the first to form in the Gulf of Thailand in 35 years, and strong enough that conditions near the vessel approached a 100-year event. It intensified so rapidly that the forecasts gave no usable window to evacuate before it arrived.\n\nDrilling stopped, the drill pipe was hung off and the riser disconnected, but not every precaution could later be confirmed: some pipe stayed in the derrick, casing shifted, and seawater entered the mud room and emergency-generator room. Power and radio failures cut communications for a time. As the storm bore down, the field\'s standby rescue vessels were drawn away - one diverted to a nearby rig that had lost all its anchors - on the assumption that the self-propelled Seacrest could look after itself.\n\nAs the eye passed, the anchor cables ran out or parted one after another until only the No. 7 bow anchor still held - and it was dragging. In the last call at 1326 the rig reported a 5-degree list and winds rising again.\n\nAs the storm returned, slow yaw swung Seacrest broadside to gusty wind and large beam waves and it capsized within about half an hour. Six of the 97 aboard survived; they were found 62 and 69 miles northwest, well beyond the initial 30-mile search.',
      what_went_wrong: [
        'Forecasts did not predict Gay\'s rapid intensification and track change in time to preserve an evacuation or move-off window.',
        'The documented emergency threshold was wind above 75 knots - too high, because anchor handling and evacuation become impossible well before that.',
        'Seven of the eight anchor cables ran out or parted; the one remaining anchor dragged and let the vessel yaw broadside to the wind and waves.',
        'Heavy-weather preparation was incomplete or could not be verified: drill pipe left in the derrick, casing shifted, and seawater into the mud room and emergency-generator room.',
        'Through the storm the field\'s standby rescue vessels were drawn away to other stricken rigs and to port - on the view that the self-propelled Seacrest could look after itself - so no capable vessel was alongside when it capsized and the crew went into the sea.',
        'Meeting intact static-stability criteria gave false reassurance - those criteria treated wind and waves separately and missed the dynamic gust, wave and yaw loading that capsized the rig.',
      ],
      lessons_learned: [
        'The investigation found Seacrest sound, within design limits and regularly drilled - so this was not simply a weak ship beaten by weather. It was lost because its emergency threshold was set too high, the forecast gave no warning in time, seven of eight anchors failed and its rescue vessels had been drawn away; 91 of 97 aboard died. Set evacuation triggers below the limits of your helicopters and anchor handlers, and never read stability-rule compliance or a good safety record as proof a moored vessel will survive a cyclone.',
        'Treat rapid local deterioration, and any divergence between what you observe and what was forecast, as a decision trigger in its own right.',
        'Define a degraded-mooring plan for anchored vessels: the consequence of each cable failure, the headings to hold, and the point at which keeping people aboard is no longer acceptable.',
        'A storm can strip away the very marine and aviation resources a site depends on - a self-propelled unit is not self-rescuing. Protect standby and search-and-rescue cover and plan logistics for the worst case, when several assets may be hit at once.',
        'Plan searches with event-specific wind, current and wave-drift models and keep moving the search box as the storm evolves - survivors drifted far beyond the standard radius.',
      ],
      actions: [
        'Lower severe-weather triggers so well suspension, evacuation and anchor handling can finish while aircraft and vessels can still operate.',
        'Build and drill a moored-vessel cyclone procedure covering forecast uncertainty, loss of power or communications, sequential anchor failure, heading control and abandonment.',
        'Record and independently verify completion of heavy-weather securing and closure checklists, including tubulars, tank status and ventilation closures.',
        'Supplement classification stability checks with coupled wind-wave simulations for degraded-mooring conditions, and update search trajectories early using observed survivor and debris positions.',
      ],
      metocean: {
        wave_height_hs: 'Approximately 5.4-5.8 m hindcast near Seacrest; the report describes about 19 ft as comparable with a 100-year local storm, with individual waves potentially much larger',
        wind_speed: 'Approximately 60 kn 30-minute mean, 75 kn 1-minute wind and peak gusts near 90 kn in the reconstruction',
        sea_temp: 'Approximately 29 °C in the Gulf of Thailand',
        notes: 'The hindcast placed the eye directly over Seacrest and showed risk falling during the calm eye before reaching a maximum around 1330 as wind and waves returned. No instrumental wave measurements were available at the vessel, so modeled values and the exact capsize load combination could not be directly validated.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for vessel particulars, the recorded communications, casualty count, recovered mooring evidence, wreck discovery and survivor recovery because these are documented in the October 1990 investigation. Moderate for the final capsize mechanism, environmental values and survivor trajectories because they were reconstructed from hindcasts, physical evidence, communications and testimony; the report states that no instrumental wave measurements were available at Seacrest. The report was commissioned by Unocal Thailand\'s legal department rather than produced by an independent flag-state casualty authority, and no final-minute eyewitness account resolves the exact load sequence.',
      sources: [
        'Failure Analysis Associates (1990), Investigation of Events Surrounding the Capsize of the Drillship Seacrest, Volumes 1 and 2 (EXTERNAL, commissioned primary investigation): https://thaiwreckdiver.com/documents/seacrest_drillship_sinking_investigation_1989.pdf',
        'Thai Wreck Diver, Seacrest historical record and retained investigation copy (EXTERNAL): https://thaiwreckdiver.com/'
      ],
      references: [
        { title: 'Investigation of Events Surrounding the Capsize of the Drillship Seacrest', type: 'Commissioned investigation report', publisher: 'Failure Analysis Associates, Inc.', year: 1990, url: 'https://thaiwreckdiver.com/documents/seacrest_drillship_sinking_investigation_1989.pdf', file: 'background files/seacrest_drillship_sinking_investigation_1989.pdf', notes: 'Primary retained source. Prepared for Unocal Thailand\'s legal department in October 1990. Executive summary and Sections 2-3, 6-10 and 11-14 support the vessel history, chronology, forecast review, hindcast, stability and capsize analysis, search reconstruction and procedure findings.' },
        { title: 'Thai Wreck Diver - Seacrest incident account', type: 'Historical record and document host', publisher: 'ThaiWreckDiver.com', url: 'https://thaiwreckdiver.com/' },
        { title: 'Drillship Seacrest (1989) - Detailed Evidence Note', type: 'Project source audit', file: 'background files/Seacrest_1989_Detailed_Incident_Report.md', internal: true, notes: 'Page-cited chronology, causal synthesis and evidence boundaries derived from the retained 128-page investigation.' },
        { title: 'Lessons Learnt from the Seacrest Drillship Disaster', type: 'Internal lessons-learnt presentation', publisher: 'Vadim Anokhin, Senior Metocean Engineer, Sarawak Shell Berhad', file: 'background files/Lessons Learnt from Seacrest Incident - Vadim Anokhin .pptx', internal: true, notes: 'Human-prepared lessons-learnt deck citing the Failure Analysis Associates (1990) investigation, JTWC and contemporaneous press. Source of the detailed anchor-failure sequence, the diverted standby vessels, and the lessons-learned framing that a sound, well-drilled ship was still lost to organisational and forecast gaps.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       3. Ocean Ranger — 1982
    ─────────────────────────────────────────────────── */
    {
      id: 'ocean-ranger-1982',
      name: 'Ocean Ranger Semi-Submersible Capsize in North Atlantic Storm',
      year: 1982,
      date: '15 February 1982',
      location: 'Grand Banks, ~166 nm east of Newfoundland, Canada',
      lat: 46.87,
      lng: -47.54,
      region: 'North America',
      platform_type: 'Semi-submersible drilling rig (MODU)',
      operator: 'ODECO / Mobil Oil Canada',
      weather_event_type: 'storm',
      classification: 'drilling',
      weather_event: 'Severe North Atlantic winter storm - hurricane-force winds, freezing spray, blizzard and waves up to about 20 m',
      fatalities: 84,
      persons_on_board: 84,
      survivors: 0,
      image: {
        src: 'images/ocean-ranger-1980-world-oil.jpg',
        alt: 'Ocean Ranger semi-submersible drilling rig at sea.',
        caption: 'Ocean Ranger context photograph from World Oil; not a photograph of the February 1982 casualty.',
        credit: 'World Oil image: https://worldoil.com/media/2zyh24zq/ocean-ranger-1980.jpg. Permission status requires confirmation.'
      },
      summary: 'Ocean Ranger, a semi-submersible drilling rig on the Grand Banks off Newfoundland, capsized and sank during a severe North Atlantic winter storm on 15 February 1982. A storm wave broke a portlight in the ballast control room; seawater disabled the ballast controls, and manual operation by a crew with limited training worsened the list until progressive flooding overwhelmed the rig. No lifeboat launch succeeded in the freezing seas, and all 84 people aboard died.',
      executive_summary: 'Ocean Ranger was drilling on the Grand Banks when storm seas broke a portlight in the ballast control room. Flooding disabled electrical ballast controls; manual ballast operations were ineffective and contributed to the developing list. The rig capsized and sank in near-freezing water. Lifeboats were lost or unusable in the storm, and all 84 people aboard died.',
      what_happened: 'Ocean Ranger was a large semi-submersible drilling rig on the Grand Banks, about 166 nautical miles east of Newfoundland. On the night of 14-15 February 1982 it rode out a severe winter storm of hurricane-force winds, freezing spray and very high seas.\n\nA wave broke a portlight in the ballast control room. Seawater reached the electrical panel and the crew lost normal remote control of the ballast system. Working it by hand - with little training and awkward controls - they moved water the wrong way, and the rig took on a growing list.\n\nThe list kept worsening. The crew sent a distress call and were ordered to lifeboat stations in the early hours of 15 February; soon afterwards radio contact was lost and Ocean Ranger capsized and sank.\n\nA standby supply vessel reached the scene and came alongside a lifeboat carrying survivors, but in the extreme seas and near-freezing water it could not take them aboard, and the lifeboat was lost. No one was recovered alive; all 84 people aboard died.',
      what_went_wrong: [
        'A single storm-broken portlight flooded the ballast control room and knocked out normal remote ballast control.',
        'The crew had little training in manual ballasting and the controls were awkward, so attempts to correct the list made it worse.',
        'The rig had no effective defence against progressive flooding and list once that one opening failed.',
        'The lifeboats could not be launched at the list angle and sea state reached; craft were damaged, jammed or lost.',
        'Immersion protection and cold-water rescue were inadequate, so no one survived the sea.'
      ],
      lessons_learned: [
        'Ocean Ranger met the intact-stability rules of its day, yet one storm-broken portlight flooded the ballast control room and untrained manual ballasting drove it to capsize with the loss of all 84 aboard. Ballast control must be fail-safe and operable by hand under stress, and cold-water survival depends on immersion protection and rescue designed for the actual sea temperature.',
        'Crews must be trained and regularly drilled in manual ballast control, not just the automated system.',
        'Critical openings such as portlights and vents must be designed and protected for storm wave impact.',
        'Life-saving appliances and rescue must match the real environment - enclosed lifeboats, immersion suits and cold-water rescue capability.'
      ],
      actions: [
        'The Canadian Royal Commission issued 136 recommendations that reshaped Canadian offshore safety law and regulation.',
        'Immersion suits for all offshore personnel became a global standard after the disaster.',
        'MODU ballast-control design and crew-training requirements were strengthened to require redundancy and competence.',
        'Enclosed survival craft (TEMPSC) and improved cold-water search-and-rescue were mandated for North Atlantic operations.'
      ],
      metocean: {
        wave_height_hs: '~15 m (maximum ~20 m)',
        wind_speed: '70–90 knots sustained, gusts to ~100 knots (hurricane force)',
        sea_temp: '~0–1 °C',
        visibility: 'Near zero (blizzard)',
        notes: 'Extreme winter North Atlantic conditions. The zero-degree sea temperature meant survival time in the water without immersion suits was under 5 minutes.'
      },
      references: [
        { title: 'Royal Commission on the Ocean Ranger Marine Disaster - Report One: The Loss of the Semisubmersible Drill Rig Ocean Ranger and Its Crew', type: 'Official inquiry report', publisher: 'Royal Commission on the Ocean Ranger Marine Disaster / Government of Canada', year: 1984, url: 'https://archive.org/details/39290303060091', file: 'background files/Royal Commission Ocean Ranger Report One 1984.pdf', notes: 'Full 1984 scan, 400-page report metadata; local PDF contains 440 pages including scan front matter.' },
        { title: 'Royal Commission on the Ocean Ranger Marine Disaster - Report Two: Safety Offshore Eastern Canada', type: 'Official inquiry report', publisher: 'Royal Commission on the Ocean Ranger Marine Disaster / Government of Canada', year: 1985, url: 'https://archive.org/details/micro_IA40243515_0002', file: 'background files/Royal Commission Ocean Ranger Report Two 1985.pdf', notes: 'Full 1985 scan, 308-page report metadata; local PDF contains 334 pages including scan front matter.' },
        { title: 'NTSB Marine Accident Report MAR-83-2', type: 'Investigation report', publisher: 'US National Transportation Safety Board', year: 1983 },
        { title: 'Ocean Ranger 1980', type: 'Context image source', publisher: 'World Oil', url: 'https://worldoil.com/media/2zyh24zq/ocean-ranger-1980.jpg', file: 'background files/Ocean Ranger World Oil 1980.jpg', notes: 'Context photograph selected for the incident record; not evidence of the 1982 casualty damage. Permission status requires confirmation.' },
        { title: 'Wikipedia — Ocean Ranger', type: 'Encyclopedia', url: 'https://en.wikipedia.org/wiki/Ocean_Ranger' }
      ]
    },

    /* ──────────────────────────────────────────────────
       4. Glomar Java Sea — 1983
    ─────────────────────────────────────────────────── */
    {
      id: 'glomar-java-sea-1983',
      name: 'Glomar Java Sea Drillship Sinking During Typhoon Lex',
      year: 1983,
      date: '25 October 1983',
      location: 'South China Sea, 65 nm SSW of Sanya, Hainan Island',
      lat: 17.2833,
      lng: 108.8833,
      region: 'Asia',
      platform_type: 'Drillship (9-point mooring)',
      operator: 'Global Marine / ARCO China',
      weather_event_type: 'cyclone',
      classification: 'drilling',
      storm_sid: '1983287N09164',
      storm_name: 'LEX',
      weather_event: 'Typhoon Lex — 60-knot hindcast winds and 38-foot waves; final call reported 70–75-knot winds',
      fatalities: 81,
      persons_on_board: 81,
      survivors: 0,
      image: {
        src: 'images/glomar-java-sea-1983-drillship.jpg',
        alt: 'Glomar Java Sea drillship afloat before its loss in Typhoon Lex.',
        caption: 'Glomar Java Sea afloat before the 1983 casualty.',
        credit: 'M L Gillick via Oil Rig Photos and Ships and Oil. Permission required.'
      },
      summary: 'The Glomar Java Sea capsized and sank during Typhoon Lex with all 81 people aboard. The NTSB determined that maintaining the drillship at the well site with all nine anchors exposed it to the full force of the storm; severe rolling combined with an unexplained 15° starboard list caused the vessel to capsize to starboard. Failure to evacuate nonessential personnel before conditions became dangerous contributed to the loss of life.',
      executive_summary: 'On 25 October 1983, the 400-foot drillship Glomar Java Sea capsized and sank in about 315 feet of water, 65 nautical miles south-southwest of Sanya, during Typhoon Lex. Shortly before contact was lost, the crew reported a 15° starboard list of undetermined cause and approximately 70–75-knot winds over the bow; the NTSB hindcast estimated 60-knot winds and 38-foot waves. The vessel remained secured by all nine anchors and capsized under severe rolling while carrying the unexplained list. All 81 people aboard died: 35 bodies were located and 46 remained missing and presumed dead.',
      what_happened: 'Glomar Java Sea was moored with nine anchors in about 315 ft of water, drilling for ARCO China, when a tropical storm that became Typhoon Lex moved toward the area. The crew recovered the riser on 23 October but did not move the ship off location or evacuate the nonessential crew.\n\nOn 25 October a Chinese meteorologist warned that the storm would pass near the drillship and suggested moving it. The ARCO superintendent declined, relying on a forecast that Lex would turn away and judging there was no practical refuge.\n\nThrough the evening the seas built to about 38 ft. In the last call at 2341 the crew reported a 15-degree starboard list of unknown cause, 70-75-knot winds over the bow, and starboard mud being dumped to correct it. The transmission ended minutes later; two recovered clocks stopped at 2355.\n\nThe wreck was found inverted about 1,650 ft southwest of the well. The NTSB concluded the vessel capsized to starboard under severe rolling while already carrying the unexplained list; it met stability standards and would have survived the storm but for that added list. Of 81 aboard, 35 bodies were recovered and 46 were never found. There were no survivors.',
      what_went_wrong: [
        'The ship was kept on location with all nine anchors, exposing it to the full force of Typhoon Lex.',
        'Nonessential personnel were not evacuated even while conditions on 23 October still allowed it.',
        'Decision-makers relied on the forecast track passing north of the ship and did not adequately allow for uncertainty in track and strength - a specific warning to move was declined.',
        'Emergency authority was split among the master, drilling superintendent and operator representative instead of resting with one person.',
        'The 15-degree list could not be explained, and the absence of remote tank-level gauges made flooding hard to confirm as seas washed over the deck.',
      ],
      lessons_learned: [
        'Glomar Java Sea met its stability standards and could have ridden out Typhoon Lex - but it was kept on location with all nine anchors, an unexplained 15-degree list developed, and it rolled over with the loss of all 81 aboard. Cyclone plans need hard distance-and-time triggers to evacuate and move off before the window closes, and they must respect forecast uncertainty even when the track points away.',
        'One clearly identified authority - the master when the vessel or crew may be endangered - must own the emergency decision.',
        'Remote tank-level indication is essential for spotting flooding when it is unsafe to sound tanks by hand.',
        'Remote operations need a preplanned rescue process, suitable standby vessels and continuous distress-frequency monitoring - here the wreck was not identified for about 42 hours.',
      ],
      actions: [
        'Define nonessential positions and adopt realistic mandatory triggers for evacuation, anchor disconnection and departure from location (NTSB recommendation).',
        'Require drillships to survive flooding of two adjacent compartments and to state survivability limits in operating manuals (NTSB recommendation).',
        'Provide sufficient licensed personnel for storm relocation and fit remote tank-level gauging (NTSB recommendation).',
        'Establish shoreside emergency contingency plans, a continuous 24-hour radio watch and rescue-capable standby vessels for offshore operations (NTSB recommendation).',
      ],
      metocean: {
        wave_height_hs: '37 ft reported at 2100 (39 ft maximum); 38 ft NTSB hindcast at 2341',
        wind_speed: '70–75 kn reported in final call; 60 kn NTSB hindcast at 2341',
        notes: 'LEX passed about 15 nmi north of the drillship. At 2100 the crew reported waves from 330° and a 30-ft swell from 050°, producing severe rolling; the NTSB hindcast indicated the swell had decreased to about 10 ft by 2341. The 70–75-kn wind value was reported from the vessel, while the NTSB hindcast estimated 60 kn.'
      },
      data_quality: 'High. NTSB MAR-87/02 is the primary investigation report. Because there were no survivors, the final onboard sequence was reconstructed from radio communications, wreck evidence and analysis. The cause of the 15° list remains undetermined, and the report distinguishes the vessel\'s 70–75-kn wind report from the NTSB 60-kn hindcast.',
      references: [
        { title: 'NTSB Marine Accident Report MAR-87/02 — Glomar Java Sea', type: 'Investigation report', publisher: 'US National Transportation Safety Board', year: 1987, url: 'https://www.dco.uscg.mil/Portals/9/OCSNCOE/Casualty-Information/NTSB/MAR-87-02-Glomar-Java-Sea.pdf?ver=8_PF1tX30a7BSr8TfDbJXA%3D%3D' },
        { title: 'USCG / DTIC Casualty Analysis Report', type: 'Government report', publisher: 'US Coast Guard' },
        { title: '美国钻井船“爪哇海”号在南海沉没真相：不相信中国气象台', english_title: 'The truth behind the Glomar Java Sea sinking in the South China Sea: distrust of Chinese meteorology', type: 'Chinese-language retrospective article', publisher: '百度百家号 / 历史文社', year: 2020, url: 'https://baijiahao.baidu.com/s?id=1677698912552534959&wfr=spider&for=pc', notes: 'Used for Chinese-language search context only. Its narrative contains unsupported or conflicting storm and wreck details; the decision sequence is used only where independently confirmed by NTSB MAR-87/02.' },
        { title: 'Ships and Oil — The Glomar Java Sea Accident', type: 'Accident history and image source', publisher: 'Ships and Oil', url: 'https://www.shipsandoil.co.uk/accident-reports-introduction/the-glomar-java-sea-accident' },
        { title: 'Wikipedia — Glomar Java Sea', type: 'Encyclopedia', url: 'https://en.wikipedia.org/wiki/Glomar_Java_Sea' }
      ]
    },

    /* ──────────────────────────────────────────────────
       Deep Sea Driller — 1976
    ─────────────────────────────────────────────────── */
    {
      id: 'deep-sea-driller-1976',
      name: 'Deep Sea Driller Semi-Submersible Grounding at Fedje',
      year: 1976,
      date: '1 March 1976',
      location: 'Off Fedje, north of Bergen, western Norway',
      lat: 60.77,
      lng: 4.70,
      location_precision: 'Approximate presentation point off western Fedje. Norwegian sources place the grounding on the exposed seaward side of Fedje, north of Bergen, and record that the capsized lifeboat washed ashore on a rock 3-4 km north of the accident site; an exact grounding coordinate was not retrieved.',
      region: 'Europe',
      platform_type: 'Semi-submersible drilling rig (developed Aker H-3 design, built at Aker Verdal, delivered 1974; renamed Byford Dolphin in 1978)',
      operator: 'Mobile drilling unit registered in Panama; the drilling contractor/operator at the time of the loss was not definitively established in the reviewed sources',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'Winter storm with hurricane-force gusts (described as "orkan" in Norwegian accounts) and heavy seas during the transit and evacuation',
      fatalities: 6,
      image: {
        src: 'images/deep-sea-driller-1976-fedje-vg.jpg',
        alt: 'Archive news photograph of the Deep Sea Driller semi-submersible drilling rig associated with the 1 March 1976 grounding at Fedje.',
        caption: 'The Deep Sea Driller rig, associated with the 1 March 1976 grounding at Fedje, north of Bergen. Archive news image; not independently dated or geolocated within this project.',
        credit: 'VG (Verdens Gang); photographer unresolved. Copyrighted news image - permission required, reference use only.'
      },
      summary: 'The semi-submersible drilling rig Deep Sea Driller grounded off Fedje, north of Bergen, on 1 March 1976 while moving under its own power across the Norwegian North Sea to Bergen in a winter storm. Norwegian accounts report that two propulsion motors failed and the rig was driven onto the coast. During the evacuation a lifeboat capsized in the heavy seas and six people drowned - then the most serious accident in Norwegian offshore activity, often called "the forgotten accident."',
      executive_summary: 'On 1 March 1976 the semi-submersible Deep Sea Driller ran aground on the exposed seaward side of Fedje, north of Bergen, while transiting under its own power to Bergen in a winter storm. Regional Norwegian sources report that two of the propulsion motors failed and the rig drifted onto the coast; the deck took an approximately 20-degree list. The crew abandoned to a lifeboat that capsized in the heavy seas, killing six. Store norske leksikon records that the 1976 investigation has long been criticised as inadequate — the bereaved sought a reopening for years, and a 2007 Ministry of Justice assessment recommending against a new inquiry was itself criticised by safety researchers.',
      what_happened: 'Deep Sea Driller was a semi-submersible drilling rig of a developed Aker H-3 design, built at Aker Verdal and delivered in 1974, registered in Panama and named Deep Sea Driller from 1974 to 1978. On 1 March 1976 it was moving under its own propulsion from a block in the southern Norwegian North Sea toward Bergen when it grounded on the seaward side of Fedje, north of Bergen, in storm conditions.\n\nRegional Norwegian reporting states that the platform came too close to land after two of its propulsion motors failed; contemporary accounts describe hurricane-force wind through the derrick and the deck taking on a heavy list (about 20 degrees) as it grounded. The crew were evacuated from the platform into a lifeboat, which capsized in the heavy seas. Six people who were on the lifeboat drowned during the capsize; the lifeboat was later washed ashore on a rock 3-4 km north of the grounding site. It was, at the time, the most serious accident in Norwegian offshore oil activity and is often described as the first major accident on the Norwegian shelf.\n\nThe hull was salvaged, repaired and returned to service in 1978 under the new name Byford Dolphin. In a separate, unrelated event on 5 November 1983, the same hull (as Byford Dolphin) suffered a diving decompression accident that killed four divers and one tender — that incident is out of scope for this weather-focused record.',
      what_went_wrong: [
        'A mobile drilling unit was under way close to an exposed, rocky lee shore in winter-storm conditions, where a loss of propulsion left little margin before grounding.',
        'Regional Norwegian accounts report that two of the propulsion motors failed during the transit, after which the rig was driven onto the coast at Fedje.',
        'Evacuation into a lifeboat in heavy seas ended in the lifeboat capsizing, causing all six fatalities during the abandonment rather than in the grounding itself.',
        'Store norske leksikon records that the 1976 investigation has long been regarded as inadequate ("the forgotten accident"); a 2007 assessment that recommended against reopening the inquiry was itself criticised by safety researchers as insufficient.'
      ],
      lessons_learned: [
        'Deep Sea Driller was lost not in the grounding itself but when its lifeboat capsized during abandonment in a winter storm - all six deaths came that way, after a reported propulsion failure drove it onto the Fedje coast. A self-propelled move near an exposed lee shore needs propulsion redundancy, a hard weather stop, and an evacuation system that works in the actual sea state.',
        'Weather timing and routing of a self-propelled move must treat a deteriorating winter forecast near a coast as a stop criterion.',
        'The survivability of the evacuation system in the actual sea state is decisive - lifeboats must be launchable and stable in the conditions they will really face.',
        'A credible, preserved investigation matters: the enduring criticism of the Deep Sea Driller inquiry shows how an inadequate one can leave causes contested for decades.',
      ],
      actions: [
        'The loss was investigated in 1976, but Store norske leksikon records that the inquiry has long been considered inadequate and that bereaved families campaigned for years for a reopening.',
        'In 2007 the Norwegian Ministry of Justice commissioned former police chief Rolf B. Wegner to assess whether a new investigation should be undertaken; he concluded it should not, and the Ministry used this to decline reopening. Safety researchers, including Prof. Jan Erik Vinnem, criticised that assessment as deficient.',
        'The hull was salvaged and repaired and re-entered service in 1978 as the Byford Dolphin.'
      ],
      metocean: {
        wave_height_hs: 'No measured significant wave height at the rig was retrieved; Norwegian accounts describe heavy seas sufficient to capsize the lifeboat.',
        wind_speed: 'Norwegian accounts describe hurricane-force gusts ("orkan"); no instrument wind value at the rig was retrieved.',
        sea_temp: 'Not measured in the reviewed sources; early-March western-Norway coastal water is cold and would sharply limit survival time for those in the water.',
        notes: 'The weather driver is a winter storm on the exposed western Norwegian coast. The immediate loss combined storm exposure and a reported propulsion failure (grounding) with a lifeboat capsize during evacuation. No platform-point wind or wave instrument record was retrieved; values are qualitative from Norwegian encyclopedic and regional-press accounts.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the date (1 March 1976), location (grounding off Fedje, north of Bergen), 6 fatalities, the lifeboat capsize as the cause of death, the rig type and its later renaming to Byford Dolphin, and the long-running criticism of the investigation, because these are stated by Store norske leksikon (authored by petroleum-history and offshore-safety academics) and corroborated by Norwegian public broadcaster and regional press. Moderate for the reported failure of two propulsion motors and the approximately 20-degree deck list, which come from regional Norwegian press accounts. Not established / unverified for the number of persons on board, the drilling contractor/operator, exact grounding coordinates, and any measured wind, wave or sea-temperature values.',
      references: [
        { title: 'Deep Sea Driller-ulykken', english_title: 'The Deep Sea Driller accident', type: 'Encyclopedia (authored by subject academics)', publisher: 'Store norske leksikon (Smith-Solbakken, M. & Vinnem, J. E.)', url: 'https://snl.no/Deep_Sea_Driller-ulykken', notes: 'Authoritative Norwegian encyclopedia entry: grounding at Fedje 1 March 1976, transit under own power to Bergen, lifeboat capsize with six dead, and the contested/"forgotten" investigation history.' },
        { title: '40 år siden Deep Sea Driller-ulykken', english_title: '40 years since the Deep Sea Driller accident', type: 'Public-broadcaster news feature', publisher: 'NRK Vestland', year: 2016, url: 'https://www.nrk.no/vestland/40-ar-siden-deep-sea-driller-ulykken-1.12829918', notes: 'Notes it was the first major accident on the Norwegian shelf and is often omitted from oil-accident overviews.' },
        { title: '50 år sidan Deep Sea Driller forliste', english_title: '50 years since the Deep Sea Driller was wrecked', type: 'Regional press retrospective', publisher: 'Strilen', year: 2026, url: 'https://www.strilen.no/nyheiter/n/RjGzwa/50-aar-sidan-deep-sea-driller-forliste', notes: 'Reports the platform came too close to land when two propulsion motors failed; six died; then the most serious accident in Norwegian oil activity.' },
        { title: 'Deep Sea Driller, 2. mars 1976 - forliste i transitt utenfor Fedje nord for Bergen', english_title: 'Deep Sea Driller, wrecked in transit off Fedje north of Bergen', type: 'Museum archive record', publisher: 'DigitaltMuseum / Norsk Oljemuseum', url: 'https://digitaltmuseum.no/011015064722/deep-sea-driller-2-mars-1976-forliste-i-transitt-utenfor-fedje-nord-for', notes: 'Museum documentation record; six persons died in transit off Fedje.' },
        { title: 'Byford Dolphin', type: 'Encyclopedia (hull history)', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Byford_Dolphin', notes: 'Confirms the hull was built at Aker Verdal (1974), named Deep Sea Driller 1974-1978, and renamed Byford Dolphin after repair.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       Ocean Express — 1976
    ─────────────────────────────────────────────────── */
    {
      id: 'ocean-express-tow-capsize-1976',
      name: 'Ocean Express Jack-up Capsize Under Tow in Gulf Storm',
      year: 1976,
      date: '15 April 1976',
      location: 'Gulf of Mexico near Port O\'Connor, Texas, during a 33-nautical-mile field move between drilling sites; the unit drifted, grounded and capsized',
      lat: 28.3,
      lng: -96.2,
      location_precision: 'Approximate presentation point offshore of Port O\'Connor, Texas. NTSB report NTSB-MAR-79-5 titles the casualty "near Port O\'Connor, Texas"; the move was about 33 nautical miles from a drilling site near the Texas coast, and technical accounts add that the unit sank in about 167 ft of water. An exact surveyed casualty coordinate was not retrieved.',
      region: 'North America',
      platform_type: 'Mat-supported self-elevating drilling unit (jack-up), owned by Odeco; afloat and under tow at the time of loss',
      operator: 'Odeco (rig owner and rig-move manager); Marathon Oil (operator representative)',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'An intensifying, worse-than-forecast Gulf storm - by late afternoon reported waves up to about 25 ft (7.6 m) and winds up to about 50 knots, with higher gusts',
      fatalities: 13,
      persons_on_board: 35,
      survivors: 22,
      infrastructure_impact: 'Total loss of the mat-supported jack-up Ocean Express, which capsized and sank in about 167 ft of water during a short field move.',
      summary: 'The mat-supported jack-up Ocean Express capsized and sank under tow in the Gulf of Mexico off Texas on 15 April 1976, during a short field move caught by a storm far worse than forecast. After one tug lost an engine and another\'s towline parted, the unit drifted broadside to 25 ft seas and shifting deck loads rolled it over. Of the crew who abandoned into two survival capsules, one reached safety but the second capsized alongside a tug and 13 men drowned.',
      executive_summary: 'The mat-supported jack-up Ocean Express (Odeco) capsized under tow near Port O\'Connor, Texas on 15 April 1976, killing 13 of the 35 people aboard. A 33-nautical-mile field move ran into a storm far worse than forecast; the Gulf Knight lost an engine and could no longer hold the rig head-to-weather, and the Gulf Viking\'s towline then parted, leaving the unit to drift broadside to ~25 ft seas and ~50 kn winds. Shifting deck pipe and a displaced derrick drove an increasing list until the rig drifted, grounded, capsized and sank about 2115. Of two Whittaker capsules used to abandon, one (14 aboard) transferred all occupants to a survey vessel; the other capsized with 20 aboard - 7 escaped and 13 drowned. A USCG HH-52A helicopter plucked the bargemover off the helideck seconds before the rig rolled. The US Coast Guard Marine Board of Investigation and NTSB (NTSB-MAR-79-5) examined the loss and NTSB issued nine safety recommendations.',
      what_happened: 'Ocean Express was a mat-supported jack-up being moved afloat about 33 nautical miles to its next location near Port O\'Connor, Texas, under tow by three tugs. Near the new site the weather deteriorated before the mat could be set, so the tugs held the unit head-to-weather.\n\nBy 15 April the seas built to 25 ft and winds to about 50 knots - far beyond what was safe to set the mat. A port list and forward ballasting had already cut the tow freeboard to as little as 5.5 ft, so water increasingly entered through deck openings.\n\nOne tug then lost an engine and could no longer hold head to weather, and soon after the second tug\'s towline parted and could not be recovered across the tiny, sea-swept tow deck. The unit drifted broadside to the seas; deck pipe and then the derrick shifted, driving a growing list.\n\nThe crew abandoned into Whittaker survival capsules. One capsule motored clear and transferred everyone safely to a survey vessel; the second was taken in tow by a tug, but its line was lost, several occupants had unbuckled, and it flipped over - 13 of about 20 drowned. The bargemaster, left aboard without a capsule, was hoisted from the tilting helideck by a Coast Guard helicopter seconds before the rig rolled over.',
      what_went_wrong: [
        'A short field move was continued into a storm far worse than forecast, with the unit afloat and its low tow freeboard already reduced by list and ballasting.',
        'Loss of one tug\'s engine removed the ability to hold the rig head to weather, and it fell back into the tow.',
        'The second tug\'s towline then parted and could not be re-established across the small, swamped tow deck, so the rig drifted broadside to the seas.',
        'Unsecured deck pipe and the derrick shifted as the rig rolled, turning a controllable list into capsize; a request to drop the anchor was not carried out.',
        'The operating manual gave inadequate stability, towing and severe-weather guidance, and the survival capsules were approved to open-lifeboat standards that never addressed capsize and escape - the second capsize drowned 13.'
      ],
      lessons_learned: [
        'A "short" or "field" move is still a marine tow: tow-freeboard, stability and abort criteria must be verified against realistic (not benign) weather, and a worsening forecast must be a stop criterion before the mat is raised and the unit floated.',
        'Tow capability must survive a single tug casualty - one lost engine or parted towline should not leave the unit drifting broadside to the sea.',
        'Deck loads and the derrick must be secured for the motions of a floating, rolling unit; shifting weight can turn a list into a capsize.',
        'Survival-capsule survival depends on handling in the water - keep occupants belted and control any tow; the deaths here came when the second capsule capsized alongside a tug after its line was lost.'
      ],
      actions: [
        'A US Coast Guard Marine Board found the primary cause was loss of directional control after the tug-engine failure and towline break as the weather worsened (Marine Casualty Report, 1978).',
        'The NTSB issued nine recommendations: MODU manuals must cover stability, tug and towing arrangements, afloat-emergency plans and operating limits; units must carry wind and motion sensing; and survival capsules need real performance standards for capsize, righting and safe towing.',
        'The helicopter rescue of the bargemaster from the tilting helideck became a widely cited example of extreme-weather offshore rescue.'
      ],
      metocean: {
        wave_height_hs: 'Reported waves up to about 25 ft (7.6 m) by late afternoon; sources describe wave height, not a measured significant wave height (Hs).',
        wind_speed: 'Winds up to about 50 knots in the technical account, with higher gusts described in rescue narratives; the storm was worse than forecast.',
        sea_temp: 'Not established in the reviewed sources.',
        notes: 'The weather driver was an intensifying Gulf storm during a short field move. The reviewed sources give Beaufort-scale wind and wave-height descriptions rather than instrument records at the unit; the USCG identified the worsening weather as the context in which the tug-engine failure and towline break caused loss of directional control.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the sequence (departed ~1100 on 14 April; arrived ~2330; a tug reduction-gear failure ~1530 on 15 April; towline break 1930; drifted, grounded, capsized and sank ~2115), the Odeco mat-supported jack-up type, the persons aboard (14 in one capsule all rescued; the other capsized with 20 aboard, 7 escaped and 13 drowned; plus the bargemover = 35 aboard, 22 survived), the 13 fatalities and the causal/analysis findings, because these are stated in NTSB Marine Accident Report NTSB-MAR-79-5 (recommendation letter downloaded to background files) and the US Coast Guard Marine Board of Investigation report (full 108-page scan archived in background files; only partial OCR text). Moderate for the exact wind/wave values (reported up to ~50 kn and ~25 ft, not measured Hs) and the ~148 ft mat depth and freeboard figures, which come from a technical narrative. An exact surveyed casualty coordinate was not retrieved; the plotted point is offshore Port O\'Connor per the report title.',
      references: [
        { title: 'Marine Casualty Report - Ocean Express (Drilling Unit); Capsizing and Sinking in the Gulf of Mexico on 15 April 1976 with Loss of Life', type: 'Official marine casualty investigation', publisher: 'U.S. Coast Guard Marine Board of Investigation / Commandant (Report No. USCG 16732/61865)', year: 1978, url: 'https://www.dco.uscg.mil/Portals/9/DCO%20Documents/5p/CG-5PC/INV/docs/boards/oceanex.pdf', file: 'background files/USCG_Ocean_Express_Marine_Board_Report_1978_DTIC_ADA076419.pdf', notes: 'Primary investigation (1 June 1978, 108-page scan). Full report downloaded to background files via the DTIC ADA076419 mirror; the scan has only a partial OCR text layer. Commandant found the primary cause was loss of directional control from the Gulf Knight engine loss and the Gulf Viking towline break as weather worsened.' },
        { title: 'NTSB Marine Accident Report NTSB-MAR-79-5 and safety recommendations M-79-39 through -47', type: 'Federal safety board report', publisher: 'National Transportation Safety Board', year: 1979, url: 'https://www.ntsb.gov/safety/safety-recs/recletters/M79_39_47.pdf', file: 'background files/NTSB_Ocean_Express_M79-039-047_recommendation.pdf', notes: 'NTSB-MAR-79-5, "Capsizing and Sinking of the Self-Elevating MODU OCEAN EXPRESS near Port O\'Connor, Texas, 15 April 1976". The downloaded recommendation letter gives the authoritative sequence, analysis and the nine recommendations.' },
        { title: 'The Loss of the Ocean Express (extract from "Supply Ship Operations")', type: 'Technical account', publisher: 'Victor Gibson, Ships and Oil', year: 2008, url: 'https://www.shipsandoil.com/Features/Ocean%20Express.htm', notes: 'Detailed technical narrative of the tow, tug arrangement, towline failure, capsule abandonment and board-of-enquiry findings; sank in ~167 ft of water; 13 lost.' },
        { title: 'Ocean Express (USCG rescue narrative)', type: 'Rescue account', publisher: 'Tom Beard (Lt Cdr, USCG, Ret.)', notes: 'First-hand account of the HH-52A helicopter rescue of the bargemaster from the tilting helideck seconds before capsize.' }
      ]
    },

    /* Trinity II liftboat — Hurricane Nate, Bay of Campeche — 2011 */
    {
      id: 'trinity-ii-liftboat-capsize-2011',
      name: 'Trinity II Liftboat Personnel Abandonment During Hurricane Nate',
      year: 2011,
      date: '8 September 2011',
      location: 'Bay of Campeche, Gulf of Mexico - about 15 miles offshore north of Frontera, Tabasco, Mexico, in about 84 ft of water',
      lat: 18.78,
      lng: -92.65,
      location_precision: 'Approximate presentation point about 15 miles north of Frontera, Tabasco, in about 84 ft of water; NTSB/MAR-13/01 gives the offshore distance and depth but no surveyed casualty coordinate.',
      region: 'North America',
      platform_type: '78.5 ft three-leg self-elevating liftboat (US-flagged offshore supply vessel with movable legs)',
      operator: 'Trinity Liftboat Services (owner/operator); chartered by Geokinetics for seismic work; working for Pemex',
      weather_event_type: 'cyclone',
      classification: 'maritime',
      storm_name: 'NATE',
      storm_sid: '2011250N20266',
      weather_event: 'Hurricane Nate - developed locally in the Bay of Campeche; NHC estimated waves possibly up to about 36 ft at the vessel',
      fatalities: 4,
      persons_on_board: 10,
      survivors: 6,
      infrastructure_impact: 'Stern jacking leg failed and fractured about 10 ft below the hull; several feet of seawater flooded the machinery spaces; estimated vessel damage about $1.5 million. The abandoned vessel later drifted and was recovered by the Mexican Navy.',
      image: {
        src: 'images/trinity-ii-2011-dockside.jpg',
        alt: 'The liftboat Trinity II alongside a dock, showing its hull and three jacking legs.',
        caption: 'The liftboat Trinity II. The 78.5 ft self-elevating vessel was working a seismic job about 15 miles off Frontera, Mexico, when Hurricane Nate developed on top of it.',
        credit: 'National Transportation Safety Board (NTSB/MAR-13/01); US Government work, public domain.'
      },
      pack_images: [
        {
          src: 'images/trinity-ii-2011-elevated.jpg',
          alt: 'The Trinity II elevated on its three legs offshore beside a platform.',
          caption: 'The Trinity II jacked up on its legs at an offshore worksite. The liftboat could only jack down and move in swells up to about 5 ft, so once the sea built it could not run for refuge.',
          credit: 'National Transportation Safety Board (NTSB/MAR-13/01); US Government work, public domain.'
        },
        {
          src: 'images/trinity-ii-2011-airgap-diagram.png',
          alt: 'NTSB schematic of a liftboat jacked up over the seabed showing wave loading, air gap and leg penetration.',
          caption: 'NTSB schematic of a jacked-up liftboat: wave loading on the legs, the air gap between the sea and the hull, and leg penetration into the seabed - the factors behind the stern-leg failure.',
          credit: 'National Transportation Safety Board (NTSB/MAR-13/01); US Government work, public domain.'
        },
        {
          src: 'images/trinity-ii-2011-failed-leg.jpg',
          alt: 'A large tubular steel jacking leg section with internal stiffeners.',
          caption: 'A liftboat jacking leg. On Trinity II the wave-loaded stern leg fractured about 10 ft below the hull, initiating the loss.',
          credit: 'National Transportation Safety Board (NTSB/MAR-13/01); US Government work, public domain.'
        }
      ],
      summary: 'In early September 2011 a surface low developed locally in the Bay of Campeche and became Hurricane Nate while the US liftboat Trinity II was jacked up at a seismic worksite about 15 miles off Frontera, Mexico. The sea quickly exceeded the vessel\'s 5-ft limit for jacking down and moving, so it could not run for refuge; on 8 September the wave-loaded stern jacking leg failed and all 10 aboard abandoned to a single lifefloat. After three days adrift, four died and six survived.',
      what_happened: 'The Trinity II was a 78.5 ft US liftboat - a self-elevating vessel - chartered by Geokinetics to collect seismic data in the Bay of Campeche, about 15 miles off Frontera, Mexico, in roughly 84 ft of water. Ten people were aboard: four US crew and six contractors.\n\nIn early September 2011 a surface low-pressure system developed locally and strengthened into Tropical Storm, then Hurricane, Nate. By 6 September the sea state exceeded the 5-ft swell limit the US Coast Guard set for jacking down and moving, so the crew could no longer run for shelter - they could only jack the hull higher or evacuate, and the company hurricane plans (written for storms arriving from the east) were never activated.\n\nOver 7-8 September the stern leg penetrated further into the seabed under wave loading. At about 12:25 on 8 September the wave-loaded stern jacking leg failed, the hull listed, and the master broadcast a Mayday and ordered abandon ship. In the hurricane-force wind both liferafts were lost over the side, so all 10 abandoned, in lifejackets, to a single 12-person lifefloat - the EPIRB was left aboard.\n\nSearch and rescue found nine of the group after three days; two were already dead and a third died in hospital, and the tenth body was recovered four days later. Four died and six survived with serious injuries. The NTSB found the probable cause was Trinity Liftboats and Geokinetics failing to plan for a rapidly developing local low, which exposed the elevated liftboat to hurricane-force conditions.',
      what_went_wrong: [
        'A small liftboat limited to 5-ft swells for moving was working in the Bay of Campeche at the start of hurricane season, where a surface low developed locally and became Hurricane Nate - leaving no window to jack down and run for refuge once the sea built.',
        'The hurricane plans of both Trinity Liftboats and Geokinetics assumed a named storm arriving from the east with days of warning; neither addressed a locally forming system or the vessel\'s operating limits, so the plans were never activated.',
        'Evacuation was not arranged in time; the designated standby vessel was unsuitable and, storm-damaged and unable to turn in the sea, returned to port.',
        'The stern jacking leg failed when lateral wave forces and the weight of water on deck exceeded its strength, initiating the loss, and no further air gap could be gained.',
        'During abandonment both liferafts were lost (one inflated on deck instead of thrown over, one inflated by a wave while still aboard) and the EPIRB was left behind, so the exhausted crew ended on a lifefloat with no food, water or locating beacon - prolonging their exposure.',
      ],
      lessons_learned: [
        'A surface low developed on top of the Trinity II in the Bay of Campeche and became Hurricane Nate; the liftboat, limited to 5-ft swells for moving, could not jack down and run, its wave-loaded stern leg failed, and the ten aboard abandoned to a single lifefloat - four died over three days adrift. Build weather plans around storms that develop on location, not only hurricanes arriving from afar, and match the vessel to the weather it can actually escape.',
        'Trigger evacuation on forecast, not when the hull is already failing; define the last safe time to leave against the vessel\'s real transit limits and pre-commit capable standby and air rescue.',
        'Take and activate the EPIRB on abandonment, and launch throw-over liferafts correctly - inflated on deck they blow away in storm winds. Had the EPIRB been used, rescue would have come far sooner.',
        'Assess a liftboat\'s leg-footing and leg strength for the full storm wave and water-on-deck loading; once a footing starts to penetrate there may be no way to jack down or regain air gap.',
      ],
      actions: [
        'The NTSB published Marine Accident Report NTSB/MAR-13/01 (9 April 2013), determining the probable cause and recommending improvements to US-Mexico search-and-rescue cooperation, throw-over liferaft deployment guidance, and weather planning for locally developing low-pressure systems.',
        'The NTSB issued recommendations to the US Coast Guard, the US Department of State, the Offshore Marine Service Association, Trinity Liftboats and Geokinetics, and a safety alert to mariners.',
        'The accident echoed the 1989 loss of the liftboat Avco V in Hurricane Chantal, after which the US Coast Guard (1996) required heavy-weather guidance in liftboat operations manuals - guidance that for Trinity II only covered approaching hurricanes.',
        'Geokinetics subsequently replaced liftboats with four-point-anchored monohull vessels for this type of work.',
      ],
      metocean: {
        wave_height_hs: 'NHC estimated the wave height at the Trinity II\'s location may have been as high as about 36 ft at the time of abandonment; no instrument wave record at the vessel.',
        wind_speed: 'Hurricane-force conditions from the developing Hurricane Nate; the crew noted winds increasing past 50 mph, and forecasts underpredicted the actual winds.',
        notes: 'Nate developed locally from a strengthening surface low in the Bay of Campeche in early September 2011 and later reached hurricane strength. The NTSB found forecasts consistently underpredicted the winds experienced at the vessel.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High - based directly on the primary NTSB Marine Accident Report NTSB/MAR-13/01 (9 April 2013): 78.5 ft liftboat about 15 miles offshore in the Bay of Campeche in about 84 ft of water, 10 aboard (four US crew, six contractors), stern jacking-leg failure about 1225 on 8 September 2011, abandonment of all 10 to a 12-person lifefloat, four fatalities and six survivors, about $1.5M damage, probable cause and safety issues. Coordinates are approximate (the report gives offshore distance and depth, not a surveyed casualty position); the Hurricane Nate track (IBTrACS SID 2011250N20266) is wired to the map. All presentation images are NTSB figures from MAR-13/01 (US Government work, public domain).',
      references: [
        { title: 'Personnel Abandonment of Weather-Damaged US Liftboat Trinity II, with Loss of Life (NTSB/MAR-13/01)', type: 'Official marine accident report', publisher: 'National Transportation Safety Board', year: 2013, url: 'https://www.ntsb.gov/investigations/AccidentReports/Reports/MAR1301.pdf', file: 'background files/MAR1301 Trinity II.pdf', notes: 'Primary source. Accident 8 September 2011 in the Bay of Campeche during Hurricane Nate; stern jacking-leg failure, abandonment of all 10 to a lifefloat, four fatalities and six survivors; probable cause attributed to Trinity Liftboats and Geokinetics failing to plan for a rapidly developing local surface low, with ineffective use of lifesaving equipment contributing.' },
        { title: 'The Trinity II Accident', type: 'Secondary technical narrative', publisher: 'Victor Gibson, Ships and Oil (shipsandoil.com)', year: 2014, url: 'https://www.shipsandoil.com/Features/TRINITY%20II.htm', notes: 'Detailed narrative built from NTSB/MAR-13/01 plus Australian press coverage of the standby vessel Mermaid Vigilance; author states it has no legal standing. Source of the selected Marine Traffic image.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       Rowan Gorilla I — 1988
    ─────────────────────────────────────────────────── */
    {
      id: 'rowan-gorilla-i-1988',
      name: 'Rowan Gorilla I Jack-up Capsize During Transatlantic Tow',
      year: 1988,
      date: '15 December 1988',
      location: 'North Atlantic Ocean, about 500 nautical miles southeast of Halifax, Nova Scotia, during a transatlantic tow from Halifax to Great Yarmouth, UK',
      lat: 38.7,
      lng: -55.7,
      location_precision: 'Approximate position derived from the NTSB statement that the rig capsized about 500 nautical miles southeast of Halifax, Nova Scotia; a surveyed casualty coordinate was not retrieved, so the plotted point is a geometric estimate.',
      region: 'North America',
      platform_type: 'Gorilla-class self-elevating drilling unit (jack-up), about 297 ft; owned by Rowan Companies (Houston); afloat under tow',
      operator: 'Rowan Companies / Rowan Drilling Co. (Houston, Texas); towed by the Bahamian tug Smit London',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'Severe North Atlantic winter storm during a transatlantic tow - about 50 ft seas and sustained winds of about 60 knots at abandonment/capsize (seas subsiding to about 15 ft only by the rescue the following day)',
      fatalities: 0,
      persons_on_board: 27,
      survivors: 27,
      infrastructure_impact: 'Total loss of the jack-up Rowan Gorilla I, which capsized and sank in the North Atlantic while under tow.',
      image: {
        src: 'images/rowan-gorilla-i-1988-reflekt-survivor.png',
        alt: 'Photograph of the jack-up Rowan Gorilla I low in heavy storm seas with its three legs raised, shortly before it capsized on 15 December 1988.',
        caption: 'The Rowan Gorilla I in heavy North Atlantic seas on 15 December 1988, hours before it capsized under tow. Photograph reportedly taken by one of the survivors.',
        credit: 'Reflekt AS (reflekt.as), attributed to one of the survivors. Copyrighted - permission required, reference use only.'
      },
      summary: 'On 15 December 1988 the US jack-up Rowan Gorilla I capsized and sank in a severe North Atlantic storm about 500 nm southeast of Halifax, under delivery tow to Great Yarmouth behind the tug Smit London. The towline parted, the 27 aboard abandoned into a single enclosed survival capsule in 50-ft seas and ~60-kn winds, and all were rescued the next day with no fatalities. NTSB found the ~60-kn wind was far below the rig\'s 100-kn intact design wind and attributed the capsize to lost stability, most likely flooding.',
      executive_summary: 'The 297-ft jack-up Rowan Gorilla I capsized and sank at 1605 on 15 December 1988 about 500 nm southeast of Halifax during a Halifax-to-Great-Yarmouth delivery tow behind the tug Smit London. The towline broke at ~0220 in a severe storm; the 27 aboard abandoned at 1340 into a totally-enclosed survival capsule in 50-ft seas and ~60-kn winds, and all were rescued around midday on 16 December once seas eased to ~15 ft, with no fatalities. NTSB (MAR-89/06) noted the ~60-kn wind was far below the 100-kn intact design wind and concluded the rig lost intact stability - most plausibly through flooding (main-deck ventilation openings, hull failure, or loose-cargo damage) - then sank within minutes of capsizing through main-deck ventilation openings. NTSB issued recommendations to ABS and others.',
      what_happened: 'Rowan Gorilla I was a 297-ft self-elevating drilling unit (jack-up) owned by Rowan Companies of Houston. In December 1988 it was making a transatlantic delivery voyage - towed by the 245-ft Bahamian tug Smit London from Halifax, Nova Scotia to Great Yarmouth in the United Kingdom - with its three legs raised. It ran into a severe North Atlantic winter storm.\n\nAt about 0220 on 15 December 1988 the towline parted, leaving the rig adrift in the storm about 500 nautical miles southeast of Halifax. Conditions were extreme: by the time the rig was abandoned there were seas of about 50 ft and sustained winds of about 60 knots. At 1340 on 15 December the 27 people aboard abandoned into one of the rig\'s totally-enclosed, motor-propelled survival capsules. The Rowan Gorilla I capsized at 1605 and, once inverted, sank within minutes as its internal compartments flooded through ventilation openings on the main deck.\n\nThe 27 survivors rode out the storm in the capsule through the night; the Smit London recovered them at about 1200 on 16 December, when the seas had subsided to around 15 ft. All were in good condition, none needed medical treatment, and about half had been seasick. There were no fatalities.\n\nA later Reflekt AS learning review adds that the loss was not without warning: days before, flooding had been found in two pre-load tanks as leg-working fractures opened and closed, and repairs failed; as the weather built, loose deck cargo broke adrift and damaged structure. The same loose-cargo and downflooding pattern had appeared on earlier jack-up tows, including this rig\'s own 1983 maiden voyage.',
      what_went_wrong: [
        'The towline parted at about 0220 in a severe storm, leaving the jack-up adrift and unable to be held head-to-weather.',
        'The rig capsized in an estimated ~60-knot wind - well below its 100-knot intact design wind - so its actual stability was below what the intact design assumed.',
        'NTSB attributed the lost stability to flooding, with candidate sources of hull structural failure, downflooding through main-deck ventilation openings, and damage from loose cargo working in the storm.',
        'Once capsized, the rig sank within minutes as inverting opened the compartments to rapid downflooding through the main-deck ventilation openings.',
        'Per a later Reflekt AS learning-review, pre-existing and uncorrected damage went untreated: leg-working fractures and pre-load-tank flooding were found days before capsize and deck cargo broke loose and damaged structure, and the owner had not acted on similar earlier tows (including the rig\'s own 1983 maiden-tow bulkhead cracking).'
      ],
      lessons_learned: [
        'Rowan Gorilla I capsized under tow in a roughly 60-knot storm - far below its 100-knot intact design wind - so the loss was lost stability from flooding, not wind overload; all 27 survived only because they rode out the night in a single enclosed survival capsule. A jack-up afloat on a long delivery tow is far more vulnerable than on station: protect downflooding paths, secure deck cargo, and plan against realistic winter-storm criteria.',
        'Capsize below the intact design wind is a stability and flooding warning, not wind overload - watertight integrity and main-deck ventilation-opening protection are decisive.',
        'Secure all deck cargo for the worst tow motions; loose cargo can cause the hull and opening damage that admits the flooding.',
        'Act on precursor incidents: the same loose-cargo, leg-working-crack and downflooding pattern had appeared on earlier jack-up tows, including this rig\'s 1983 maiden voyage, without corrective learning.',
      ],
      actions: [
        'NTSB investigated and published Marine Accident Report NTSB/MAR-89/06 on the capsizing and sinking.',
        'NTSB had the designer/builder, Marathon LeTourneau, perform stability calculations for the vessel and conditions at capsize.',
        'NTSB issued recommendations M-89-105 (to the American Bureau of Shipping) and M-89-107 through -110 on mobile-unit stability, watertight/downflooding integrity, tow preparation and survival provisions.',
        'The escape of all 27 became a benchmark case for totally-enclosed survival craft in severe weather.'
      ],
      metocean: {
        wave_height_hs: 'About 50 ft seas at the time the rig was abandoned (1340, 15 December), subsiding to about 15 ft by the rescue about 1200 on 16 December. These are reported wave heights, not a measured significant wave height (Hs).',
        wind_speed: 'NTSB estimated the maximum sustained wind at capsize to be about 60 knots (from rig, tug, other vessels, the National Weather Service and other sources) - well below the rig\'s 100-knot intact design wind for the severe-storm leg position.',
        sea_temp: 'Cold North Atlantic mid-December water; not quantified in the reviewed sources.',
        notes: 'The weather driver was a severe North Atlantic winter storm during a Halifax-to-Great-Yarmouth tow. Critically, the estimated ~60-knot sustained wind was far below the 100-knot intact design wind, so NTSB attributed the capsize to reduced stability (most plausibly flooding via hull failure, main-deck ventilation openings or loose-cargo damage) rather than the wind exceeding design.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the date and time (capsized 1605, 15 December 1988), the position (about 500 nm SE of Halifax), the Halifax-to-Great-Yarmouth tow behind the tug Smit London, the parted towline (~0220), the abandonment (1340) in ~50 ft seas and ~60-knot winds, the 27 persons aboard, the survival-capsule escape and rescue (~1200, 16 December) with zero fatalities, and the stability/flooding cause analysis, because these are stated in NTSB Marine Accident Report NTSB/MAR-89/06 and its recommendation letters and corroborated by wire-service reporting. The precise capsize coordinate is a geometric estimate from "500 nm SE of Halifax". The exact flooding source was not conclusively established by NTSB (candidate sources: hull structural failure, main-deck ventilation downflooding, loose-cargo damage), pending the requested Marathon LeTourneau stability calculations. Operational details of the tow preparation, the pre-existing pre-load-tank flooding and leg-working fractures, the loose-cargo damage, the progressive trim, and the precursor-incident learning point come from a secondary learning-review by Reflekt AS (which draws on the investigation) and are attributed as such; they corroborate but go beyond what was verified directly in the NTSB report text held here.',
      references: [
        { title: 'Marine Accident Report NTSB/MAR-89/06 - Capsizing and Sinking of the U.S. Mobile Offshore Drilling Unit ROWAN GORILLA I in the North Atlantic Ocean, December 15, 1988', type: 'Federal marine accident investigation', publisher: 'National Transportation Safety Board (hosted by U.S. Coast Guard OCSNCOE)', year: 1989, url: 'https://www.dco.uscg.mil/Portals/9/OCSNCOE/OCS%20Investigation%20Reports/NTSB%20Marine%20Accident%20Reports/Rowan%20Gorilla%20I.pdf', notes: 'Primary NTSB investigation (report NTSB/MAR-89/06): capsize ~500 nm SE of Halifax during a Halifax-to-Great-Yarmouth tow by the tug Smit London; towline parted ~0220, abandoned 1340 in ~50 ft seas and ~60 kn wind, capsized/sank 1605; 27 rescued next day. Estimated ~60 kn wind was well below the 100 kn intact design wind, so capsize attributed to reduced stability/flooding.' },
        { title: 'NTSB Safety Recommendation M-89-105 (to the American Bureau of Shipping) and M-89-107 through -110', type: 'Federal safety recommendations', publisher: 'National Transportation Safety Board', year: 1989, url: 'https://www.ntsb.gov/safety/safety-recs/recletters/M89_105.pdf', file: 'background files/NTSB_Rowan_Gorilla_I_M89-105_recommendation.pdf', notes: 'Recommendation letter (7 November 1989, downloaded) summarising the accident, the position (~500 nm SE of Halifax), the intact-stability/flooding analysis (capsize at ~60 kn vs 100 kn design), and the safety actions; rig value estimated at US$90 million.' },
        { title: 'Rescuers reach 27 crew members of capsized rig in Atlantic', type: 'News report (wire service)', publisher: 'United Press International (UPI)', year: 1988, url: 'https://www.upi.com/Archives/1988/12/16/Rescuers-reach-27-crew-members-of-capsized-rig-in-Atlantic/8707598251600/', notes: 'Reports the Rowan Gorilla I (Rowan Drilling Co., Houston) capsized under tow; 27 crew rescued.' },
        { title: 'Crew Safe in \'Pod\' as Oil Rig Capsizes', type: 'News report', publisher: 'Los Angeles Times', year: 1988, url: 'https://www.latimes.com/archives/la-xpm-1988-12-16-mn-171-story.html', notes: 'Reports 26 crew safe in a survival pod after the rig capsized under tow in high winds.' },
        { title: 'Rowan Gorilla I Oil Rig Lifeboat Rescue - A Survivor\'s Story', type: 'Survivor / survival-craft account', publisher: 'Survival Systems International', url: 'https://www.survivalsystemsinternational.com/rowan-gorilla-oil-rig-lifeboat-rescue-story/', notes: 'Account of survivor Tim Matherson and the totally-enclosed survival capsule; capsule rated for 54, crew rescued by Smit London on 16 December when seas subsided to ~15 ft.' },
        { title: 'The loss of the Rowan Gorilla I - a learning review (Weekly Reflektion)', type: 'Secondary learning review', publisher: 'Reflekt AS', url: 'https://reflekt.as/wp-content/uploads/2020/12/img_0664-2.png', notes: 'Reflekt AS learning-review (Weekly Reflektion) recounting the tow preparation, pre-existing leg-working fractures and pre-load-tank flooding, loose-cargo damage, progressive trim by the stern, and precursor incidents (the rig\'s 1983 maiden-tow bulkhead cracking and an earlier comparable jack-up tow loss); source of the survivor photograph used for this record. Secondary account drawing on the investigation.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       Interocean II — 1989
    ─────────────────────────────────────────────────── */
    {
      id: 'interocean-ii-1989',
      name: 'Interocean II Jack-up Capsize During Tow in North Sea Gale',
      year: 1989,
      date: '8 November 1989',
      location: 'Southern North Sea, Indefatigable gas field off the East Anglian coast, England - under tow to a new drilling position',
      lat: 53.4,
      lng: 2.5,
      location_precision: 'Approximate presentation point for the Indefatigable gas field in the southern North Sea; an exact casualty coordinate was not retrieved.',
      region: 'Europe',
      platform_type: 'Self-elevating drilling unit (jack-up), operated by Interocean (Houston); afloat under tow',
      operator: 'Interocean (Houston, Texas); on contract to Texaco North Sea',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'Storm-force 10 gale in the North Sea, with rough seas',
      fatalities: 0,
      survivors: 51,
      infrastructure_impact: 'Total loss of the jack-up Interocean II, which toppled over and sank shortly after the crew were taken off.',
      summary: 'On the night of 8 November 1989 the jack-up Interocean II broke loose from its tow in a storm-force 10 gale while being moved to a new position in the Indefatigable gas field, southern North Sea. One of its two anchor chains parted; all 51 crew were taken off - the last eight airlifted as conditions worsened - and minutes later the rig toppled over and sank, with no fatalities.',
      executive_summary: 'The jack-up Interocean II was lost under tow in a force-10 North Sea gale on 8 November 1989 in the Indefatigable gas field. An anchor chain parted as two vessels towed it to a new position; all 51 crew were evacuated (the last eight airlifted by helicopter) before the rig capsized and sank minutes later, with no fatalities. It is a successful severe-weather evacuation case; the primary contemporaneous source is UK press reporting.',
      what_happened: 'On the night of 8 November 1989 the jack-up drilling rig Interocean II was under tow by two vessels to a new drilling position in the Indefatigable gas field, in the southern North Sea off the East Anglian coast of England. It was caught in a storm-force 10 gale with rough seas.\n\nOne of the rig\'s two anchor chains broke. Most of the 51 crew were taken off, but eight workers stayed aboard to keep the rig under control on tow. As conditions deteriorated, the last eight were airlifted by helicopter; minutes later the Interocean II toppled over and sank. All 51 people survived. The unit was operated by Interocean of Houston, on contract to Texaco North Sea. (The same rig had earlier, in 1984, been blown off its tow line in strong winds near Poole, Dorset, and had to be recovered.)',
      what_went_wrong: [
        'The jack-up, afloat and under tow in a storm-force 10 gale, lost its station-keeping when one of its two anchor chains parted.',
        'Once the chain failed in the severe weather, the rig could not be held and drifted/heeled until it capsized and sank.',
        'A jack-up under tow is far more vulnerable than when elevated on station; the marine-move exposure in the deteriorating North Sea weather proved decisive.'
      ],
      lessons_learned: [
        'Interocean II broke loose under tow in a force-10 North Sea gale when an anchor chain parted, and capsized minutes after the last crew were lifted off - yet all 51 survived through a timely, well-drilled evacuation. A jack-up under tow is far more exposed than on station; plan marine moves against realistic severe-weather criteria with clear abort and shelter decisions.',
        'Anchor and tow arrangements for a rig move must tolerate the loss of a single component without leading to loss of the unit.',
        'A well-executed, timely evacuation - including helicopter lift of the last personnel as the rig failed - can achieve zero casualties even when the asset is lost.',
        'Heed recurrence: the same rig had earlier (1984) been blown off its tow near Poole, underlining the recurring hazard of jack-up marine moves in bad weather.',
      ],
      actions: [
        'The rig\'s 51 crew were evacuated without loss of life, the final eight by helicopter as the rig became unstable.',
        'Contemporary reporting recorded the loss as a near-repeat of an earlier (1984) Interocean II tow incident off Poole, underlining the recurring hazard of jack-up marine moves in bad weather.'
      ],
      metocean: {
        wave_height_hs: 'Rough North Sea seas in a storm-force 10 gale; no measured significant wave height was retrieved.',
        wind_speed: 'Storm force 10 (about 48-55 knots) per coastguard/press accounts.',
        sea_temp: 'Cold early-November North Sea water; not quantified in the reviewed sources.',
        notes: 'The weather driver was a storm-force 10 North Sea gale during a rig move. The reviewed source is contemporaneous UK press reporting (The Herald), which gives Beaufort-scale wind and qualitative sea descriptions rather than instrument records; a formal investigation report was not retrieved.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the date (8 November 1989), the loss under tow in the Indefatigable field, the parted anchor chain, the force-10 gale, the evacuation of all 51 crew (last eight airlifted) and zero fatalities, because these are reported in contemporaneous UK press (The Herald) and corroborated by aviation-rescue accounts. Not established here: an exact casualty coordinate, measured wind/wave values, and a formal marine-investigation report (none was retrieved; the MAIB had only just been established).',
      references: [
        { title: 'Crew rescued as rig sinks', type: 'Contemporaneous news report', publisher: 'The Herald (Glasgow)', year: 1989, url: 'https://www.heraldscotland.com/news/11968236.crew-rescued-as-rig-sinks/', notes: 'Reports the Interocean II broke loose under tow in a force-10 gale in the Indefatigable field; an anchor chain parted; 51 crew rescued (last eight airlifted); rig toppled and sank; operated by Interocean (Houston) on contract to Texaco North Sea.' },
        { title: 'Interocean II North Sea rescue (Skyweaver award citation)', type: 'Aviation rescue account', publisher: 'Helitavia', url: 'https://helitavia.com/Skyweaver/awards3.htm', notes: 'Records that on 8 November 1989 the Interocean II broke loose from its tow in darkness in the North Sea and that the crew were rescued by helicopter as the rig capsized.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       DB29 — 1991
    ─────────────────────────────────────────────────── */
    {
      id: 'db29-typhoon-fred-1991',
      name: 'DB29 Pipe-Laying Derrick Barge Capsize During Typhoon Fred',
      year: 1991,
      date: '15-16 August 1991',
      location: 'South China Sea, about 65 nm southeast of Hong Kong near the mouth of the Zhujiang (Pearl) River',
      lat: 21.6,
      lng: 115.0,
      location_precision: 'Approximate point derived from contemporaneous reports that the barge sank about 65 miles (105 km) southeast of Hong Kong near the mouth of the Zhujiang (Pearl) River, in about 210 ft (64 m) of water; a surveyed casualty coordinate was not retrieved.',
      region: 'Asia',
      platform_type: 'Non-self-propelled pipe-laying derrick barge (DB29), built 1973 by Shinhama Dockyard (Anan, Japan), about 10,400 tons and 128 x 39 x 8.5 m, Panamanian-flagged; operated by a McDermott International unit (McDermott Southeast Asia, Singapore)',
      operator: 'McDermott International (McDermott Southeast Asia, Singapore); parent based in New Orleans',
      weather_event_type: 'cyclone',
      classification: 'maritime',
      storm_sid: '1991220N10133',
      storm_name: 'FRED',
      weather_event: 'Typhoon Fred - reported ~25 ft (7.6 m) seas and winds up to about 75 mph (65 kn) in the South China Sea',
      fatalities: 22,
      persons_on_board: 195,
      survivors: 173,
      infrastructure_impact: 'Total loss of the pipe-laying derrick barge DB29, which capsized and sank in about 210 ft of water during Typhoon Fred while laying offshore pipeline.',
      image: {
        src: 'images/db29-1991-derrick-barge-victorian-collections.jpg',
        alt: 'The McDermott derrick barge DB29 in calm seas with its lattice crane raised, some years before its 1991 loss.',
        caption: 'The McDermott pipe-laying derrick barge DB29 in calm waters, reportedly a few years before it was lost in Typhoon Fred in August 1991.',
        credit: 'Victorian Collections (Offshore & Specialist Ships Australia), via Wrecksite. Copyrighted - permission required, reference use only.'
      },
      summary: 'The pipe-laying derrick barge DB29 capsized and sank during Typhoon Fred on 15-16 August 1991, about 65 nautical miles southeast of Hong Kong, with 195 people aboard. High seas loosened deck equipment and breached a hatch, flooding the hull until it listed and sank; about 173 people were rescued by a multinational fleet, but roughly 22 died - including four saturation divers trapped in their diving bell.',
      executive_summary: 'The McDermott derrick/pipe-lay barge DB29 (Panamanian flag, ~195 aboard) capsized and sank in Typhoon Fred on 15-16 August 1991 about 65 nm southeast of Hong Kong, near the Pearl River mouth, in ~210 ft of water. Ships and aircraft from China, Taiwan, the Soviet Union and Hong Kong rescued about 168-173 people from ~25-ft seas and ~75-mph winds; roughly 22 were killed (reported figures range from at least 16 early to as many as 26). Four saturation divers were lost in the barge\'s diving bell: the saturation system had been partly decompressed and, once the barge took a list, the bell could not be mated for transfer under pressure, so the divers could not be evacuated. The downflooding was attributed (in a Wrecksite wreck-report summary citing casualty report 93-3073.0) to deck equipment destroying the desalination-plant hatch; survivors also described unsecured anchors and heavy deck loads breaching hatches, and questioned the decision to ride out the storm. This record is built on contemporaneous international news, an industry account, UK inquest coverage and the Wrecksite wreck-report summary rather than the primary casualty report itself.',
      what_happened: 'DB29 was a large McDermott pipe-laying derrick barge, Panama-registered, laying pipeline in the South China Sea about 65 nautical miles southeast of Hong Kong with about 195 people aboard - a highly multinational crew.\n\nTyphoon Fred crossed the area on 15 August with seas around 25 ft and winds up to about 75 mph. High seas loosened deck equipment and destroyed the desalination-plant hatch; water flooded in, and the barge took a list and began to sink in the early hours. Survivors described waking to find it already half under water and jumping into the sea.\n\nA large multinational rescue - ships and aircraft from China, Taiwan, the Soviet Union and Hong Kong - pulled about 173 people from mountainous seas over the following day. Roughly 22 died.\n\nFour of the dead were saturation divers trapped in the barge\'s diving bell. The system had been partly decompressed but the divers were still under pressure; once the barge listed, the bell could not be mated to transfer them to safety, and it went down with the barge.',
      what_went_wrong: [
        'A large, heavily-crewed work barge was caught on location by Typhoon Fred (~25 ft seas, ~75 mph winds) rather than demobilised in good time.',
        'High seas loosened deck equipment and breached a hatch (reported as the desalination-plant hatch), so the hull downflooded - a watertight-integrity and cargo-securing failure under storm loading.',
        'Survivors and later accounts questioned the decision to ride out the typhoon instead of moving the barge and crew clear.',
        'The saturation divers could not be evacuated: with the system partly decompressed and the barge listing, the bell could not be mated for transfer under pressure, trapping four divers.',
        'A self-propelled hyperbaric lifeboat that could have carried the divers away under pressure existed but was not legally required and had not been provided.'
      ],
      lessons_learned: [
        'Marine construction and pipe-lay barges need enforced weather-demobilisation criteria for approaching typhoons, not an attempt to ride the storm out on location.',
        'Watertight integrity and the securing of cargo and anchors govern survival: openings must stay weathertight and heavy items secured for the worst storm motions, or downflooding can capsize the unit.',
        'Saturation diving needs a viable hyperbaric escape route; if the host vessel can list or flood, divers under pressure can be trapped once the bell can no longer be mated. Self-propelled hyperbaric lifeboats existed but were not required here - a gap this loss helped expose.',
        'A very large crew on an exposed work barge raises the stakes of any stability failure and must weigh in storm planning.'
      ],
      actions: [
        'A large multinational sea-and-air rescue (China, Taiwan, the Soviet Union and Hong Kong) recovered about 173 people from the storm.',
        'The four divers\' bodies were recovered from the bell; their deaths led to UK inquest proceedings and criticism of the diving contractor.',
        'The loss is used in the diving and marine-construction community as a case study in hyperbaric evacuation and severe-weather demobilisation.'
      ],
      metocean: {
        wave_height_hs: 'About 25 ft (7.6 m) seas reported during Typhoon Fred; a contemporaneous news figure, not an instrument record at the barge.',
        wind_speed: 'Winds up to about 75 mph (65 kn) reported in Typhoon Fred (contemporaneous news reporting).',
        sea_temp: '~28-30 °C South China Sea surface (seasonal); not specifically reported.',
        notes: 'The weather driver was Typhoon Fred (August 1991). The immediate loss mechanism was reportedly a list and downflooding leading to capsize and sinking; no barge-point wind or wave instrument record was retrieved, and the metocean values are contemporaneous news figures.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the date (15-16 August 1991), the location (about 65 nm SE of Hong Kong near the Pearl River mouth, ~210 ft water), the asset (Panamanian-flagged McDermott pipe-laying derrick barge DB29), Typhoon Fred as the driver, the very large multinational crew (~195) and the mass rescue (~168-173 survivors), and the loss of four saturation divers trapped in the diving bell - all supported by multiple contemporaneous international news reports (AP/Los Angeles Times, New York Times, Washington Post), the Oil & Gas Journal industry account and UK inquest coverage. Moderate/variable for the death toll: reported figures range from at least 16 (early recovery) to about 22 (195 aboard minus 173 rescued, per OGJ) to as many as 26 in some inquest-era tallies; this record uses 22 and flags the range. The downflooding mechanism (deck equipment loosened and the desalination-plant hatch destroyed) and the divers\' entrapment (with a hyperbaric lifeboat not legally required and not provided) come from a Wrecksite wreck-report summary that cites casualty report 93-3073.0; the underlying report document was not accessible in this review, so these are treated as a secondary account. Vessel and wreck particulars (built 1973 by Shinhama Dockyard, ~10,400 t, 128 x 39 x 8.5 m, owner McDermott South East Asia Pte Ltd of Singapore, captain Billy Young lost, wreck inverted at ~63 m) are from Wrecksite. Not established here directly: the full contents of report 93-3073.0, a surveyed casualty coordinate, and any instrument metocean record at the barge.',
      references: [
        { title: 'At Least 16 Die as Typhoon Sinks Barge Off Hong Kong', type: 'News report (wire service)', publisher: 'Los Angeles Times / Times wire services', year: 1991, url: 'https://www.latimes.com/archives/la-xpm-1991-08-16-mn-609-story.html', notes: 'Contemporaneous wire report: Panamanian-registered McDermott barge DB29 overwhelmed by 25-ft waves and 75-mph winds ~65 mi SE of Hong Kong; at least 16 dead, 11 missing (incl. four divers in a diving bell), 168+ rescued; crew of 195 listed by nationality.' },
        { title: '16 Lost and 168 Saved as Barge Sinks Off Hong Kong', type: 'News report', publisher: 'The New York Times', year: 1991, url: 'https://www.nytimes.com/1991/08/16/world/16-lost-and-168-saved-as-barge-sinks-off-hong-kong.html', notes: 'Reports 16 lost and 168 saved; divers flown from Singapore in an attempt to reach the trapped men.' },
        { title: 'Typhoon Sinks Derrick Barge in S. China Sea', type: 'Industry news report', publisher: 'Oil & Gas Journal', year: 1991, url: 'https://www.ogj.com/general-interest/companies/article/17238316/typhoon-sinks-derrick-barge-in-s-china-sea', notes: 'Industry account (26 Aug 1991): DB29 (McDermott International unit) capsized/sank 15 Aug near the mouth of the Zhujiang River in ~210 ft of water; a week later 173 of 195 rescued, 16 bodies recovered, six missing and presumed dead.' },
        { title: 'Divers\' Bodies Recovered', type: 'News report', publisher: 'The Washington Post', year: 1991, url: 'https://www.washingtonpost.com/archive/national/1991/08/19/divers-bodies-recovered/3bab892e-edbe-46a0-9640-48bec9e00b9f/', notes: 'Reports recovery of the divers who were trapped in the barge\'s diving bell during the accident.' },
        { title: 'Anger at divers\' tragedy company / Boat was \'already sinking\'', type: 'Inquest news coverage', publisher: 'Bradford Telegraph & Argus', url: 'https://www.thetelegraphandargus.co.uk/news/8073292.anger-at-divers-tragedy-company/', notes: 'UK inquest coverage into a British saturation diver (reported ~35 ft below the surface) trapped in the DB29 diving bell when the barge foundered on 15 August 1991; includes criticism of the diving contractor.' },
        { title: 'The Loss of the DB29', type: 'Professional-mariner forum (eyewitness/secondary)', publisher: 'gCaptain Forum', url: 'https://forum.gcaptain.com/t/the-loss-of-the-db29/46764', notes: 'Professional-mariner discussion recalling POB 195 and ~22 fatalities, and describing the diving-bell/transfer-under-pressure situation (system decompressed to ~60 ft before the barge capsized). Recollections, not an authoritative report; used only for context.' },
        { title: 'McDermott Derrick Barge No.29 (part A) [+1991] - wreck record', type: 'Wreck database record (cites casualty report 93-3073.0)', publisher: 'Wrecksite.eu', url: 'https://www.wrecksite.eu/wreck.aspx?109878', notes: 'Wreck record for DB29: built 1973 (Shinhama Dockyard, Japan), ~10,400 t, 128 x 39 x 8.5 m, owner McDermott South East Asia Pte Ltd (Singapore), captain Billy Young (lost), 195 crew, wreck inverted at ~63 m. Summarises casualty report ref. 93-3073.0: high seas loosened deck equipment and destroyed the desalination-plant hatch, the barge downflooded, capsized and sank; four divers were trapped in the saturation chamber because decompression (hyperbaric) lifeboats were not legally required and had not been provided. Source of the DB29 photograph (Victorian Collections). The underlying report document was not accessed directly in this review.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       DLB-269 — Hurricane Roxanne — 1995
    ─────────────────────────────────────────────────── */
    {
      id: 'dlb-269-hurricane-roxanne-1995',
      name: 'DLB-269 Pipe-Laying Derrick Barge Sinking During Hurricane Roxanne',
      year: 1995,
      date: '15 October 1995',
      location: 'Bay of Campeche, Gulf of Mexico, about 60 miles off the Yucatán Peninsula (Pemex offshore pipeline works)',
      lat: 20.5,
      lng: -92.0,
      location_precision: 'Approximate point in the Bay of Campeche where Hurricane Roxanne looped near the barge on 15 October 1995 (contemporaneous accounts place DLB-269 about 60 miles off the Yucatán coast); a surveyed casualty coordinate was not retrieved.',
      region: 'North America',
      platform_type: 'Pipe-laying derrick barge (DLB-269) with a stern Clyde crane; afloat under tow',
      operator: 'CCC Fabricaciones y Construcciones (owner/operator), working for Pemex; affiliated with McDermott International / J. Ray McDermott (New Orleans)',
      weather_event_type: 'cyclone',
      classification: 'maritime',
      storm_sid: '1995281N14278',
      storm_name: 'ROXANNE',
      weather_event: 'Hurricane Roxanne - an erratic Category 1-3 storm that looped and stalled in the Bay of Campeche; ~30-40 ft seas at the barge',
      fatalities: 6,
      persons_on_board: 245,
      survivors: 239,
      infrastructure_impact: 'Total loss of the pipe-laying derrick barge DLB-269, which foundered and sank under tow in the Bay of Campeche during Hurricane Roxanne.',
      summary: 'On 15 October 1995 the McDermott-affiliated pipe-laying derrick barge DLB-269, laying Pemex pipeline in the Bay of Campeche, foundered and sank during Hurricane Roxanne after the erratic storm looped back over it. Of about 245 aboard, roughly 230 ended up in 30-40 ft seas - some with defective life jackets and many unable to swim. Two supply vessels and the tug Captain John ran an all-night rescue that saved the large majority; about six people died.',
      executive_summary: 'The aging pipe-lay derrick barge DLB-269 (~245 aboard) sank in the Bay of Campeche on 15 October 1995 during Hurricane Roxanne. Roxanne had peaked as a Category 3 near Cozumel, then looped erratically in the Bay of Campeche and re-intensified over the barge. Rather than demobilising, the barge tried to ride out the storm under tow (tug Captain John and supply vessel North Carolina); the battering caused serious internal flooding and it foundered. Around 230 people went into 30-40 ft seas, some with defective life jackets and many non-swimmers; two supply boats and a tug carried out a heroic all-night rescue that saved roughly 239, with about six lost. The event is documented in Michael Krieger\'s book "All the Men in the Sea" and in the COTO v. J. Ray McDermott litigation; no formal marine-casualty investigation report was retrieved.',
      what_happened: 'DLB-269 was an aging McDermott-type pipe-laying derrick barge, with a large Clyde crane on its stern, working for Pemex on offshore pipeline in the Bay of Campeche about 60 miles off the Yucatán Peninsula. It was owned and operated by the Mexican McDermott affiliate CCC Fabricaciones y Construcciones, and carried a large, mostly Mexican construction crew together with United States citizens and a dive crew - about 245-250 people in all.\n\nHurricane Roxanne was a rare and erratic storm. It reached Category 3 (peak ~115 mph) near Cozumel around 11 October, crossed the Yucatán, then looped and stalled in the Bay of Campeche for several days, weakening and re-intensifying. Rather than demobilising the barge and crew to port, the operation attempted to ride out the storm at sea, under tow by the tug Captain John and the supply vessel North Carolina. The barge initially dodged the worst, but the prolonged battering created serious internal damage and flooding, and when Roxanne looped back over the area on 15 October the barge began to founder.\n\nRoughly 230 people ended up in 30-40 ft seas as the barge went down. According to Michael Krieger\'s account, some had defective life jackets and many could not swim. Only two oil-supply vessels and the tug Captain John were available to rescue them; their crews - helped by rescued divers - worked through the night at extreme personal risk, repeatedly nearly being swept off their own decks, to pull survivors from the water and from overloaded life rafts. The large majority were saved (about 239), but roughly six people died, including a young radio operator who drowned unnoticed inside a flooded raft. The barge was a total loss.\n\nThe disaster became the subject of Krieger\'s 2003 book "All the Men in the Sea" and of United States litigation (COTO v. J. Ray McDermott); the Louisiana appellate court dismissed the Mexican crew\'s US claims under the Jones Act amendment (46 U.S.C. §688(b)), directing their remedy to Mexico - a jurisdiction/choice-of-law ruling rather than a finding on cause.',
      what_went_wrong: [
        'The operation chose to ride out an approaching, erratically-tracking hurricane at sea rather than demobilising the barge and crew to port in good time.',
        'Prolonged battering under tow caused serious internal damage and flooding, and the aging barge foundered when Roxanne looped back over it.',
        'About 230 people entered 30-40 ft hurricane seas; some life jackets were defective and many of the crew could not swim, turning a foundering into a mass-survival emergency.',
        'Only two supply vessels and one tug were on hand to rescue roughly 245 people in hurricane conditions - a large mismatch between people aboard and available rescue capacity.'
      ],
      lessons_learned: [
        'DLB-269 chose to ride out an erratic, looping hurricane at sea rather than demobilise; the aging pipe-lay barge flooded and foundered, putting about 230 people into 30-40 ft seas - some in defective life jackets, many unable to swim - with only a tug and two supply boats to save them. About six died; a heroic all-night rescue saved the rest. Demobilise large marine-construction spreads from an approaching hurricane\'s path - riding it out at sea is a last resort, and rescue capacity must match the hundreds aboard.',
        'Forecast uncertainty for erratic storms must widen safety margins and trigger earlier evacuation for large persons-on-board construction barges.',
        'Life-saving appliances and swimmer or immersion competence are decisive for very large multinational crews: defective life jackets and non-swimmers greatly increase the death toll once people are in the water.',
        'Rescue-asset availability should be matched to the number of people aboard when working through hurricane season; here a handful of vessels had to save hundreds.',
      ],
      actions: [
        'Two supply vessels and the tug Captain John carried out an all-night rescue in 30-40 ft seas, saving the large majority of those aboard at extreme risk to the rescue crews.',
        'The event was documented in detail in Michael Krieger\'s book "All the Men in the Sea" (Simon & Schuster, 2003).',
        'In COTO v. J. Ray McDermott (1998), a Louisiana appellate court dismissed the Mexican crew members\' US claims under Jones Act §688(b), directing their remedy to Mexico - a jurisdiction/choice-of-law outcome rather than a fault finding.'
      ],
      metocean: {
        wave_height_hs: 'About 30-40 ft seas at the barge during the sinking and rescue (contemporaneous accounts); ~15-20 ft waves along the Mexican coast.',
        wind_speed: 'Hurricane Roxanne peaked at Category 3 (~115 mph / 185 km/h, 956 mb) near Cozumel; when it re-intensified over the Bay of Campeche on 14-15 October it was about 75 kn (Category 1) near the barge.',
        sea_temp: '~29 °C Gulf of Mexico surface (seasonal).',
        notes: 'The weather driver was the erratic, looping Hurricane Roxanne stalling in the Bay of Campeche. The immediate loss mechanism was reportedly internal flooding and foundering under tow; no barge-point instrument record was retrieved, and the wave/wind values are storm-scale figures.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the date (15 October 1995), the Bay of Campeche location, Hurricane Roxanne as the driver, DLB-269 (a McDermott-affiliated pipe-lay barge under tow by the tug Captain John and the supply vessel North Carolina), the very large crew (~245) and the mass rescue, because these are supported by the NHC-sourced Wikipedia article, Michael Krieger\'s researched book "All the Men in the Sea" (excerpted in Maritime Reporter) and the COTO v. J. Ray McDermott appellate opinion. Moderate/variable for the fatality count (about six per Wikipedia/Krieger; some accounts cite ~5) and the exact number aboard (~245-250). Note: the COTO opinion mis-dates the sinking as "October 15, 1993"; the correct year is 1995 (Hurricane Roxanne). Not established here: a surveyed casualty coordinate, instrument metocean at the barge, and a formal marine-casualty investigation report (the casualty was in Mexican waters; the cause narrative - riding out the storm, internal flooding and foundering under tow - comes from Krieger\'s secondary account).',
      references: [
        { title: 'Hurricane Roxanne', type: 'Encyclopedia article (NHC-sourced)', publisher: 'Wikipedia (citing NHC report AL191995 and Krieger 2003)', year: 2020, url: 'https://en.wikipedia.org/wiki/Hurricane_Roxanne', notes: 'States Roxanne caused 29 deaths, six of them from the sinking of the pipelay derrick barge DLB 269 with 245 people on board; gives the storm\'s erratic Bay of Campeche track and Category 3 peak.' },
        { title: 'All the Men in the Sea: The Untold Story of One of the Greatest Rescues in History', type: 'Non-fiction book', publisher: 'Michael Krieger, Simon & Schuster', year: 2003, url: 'https://books.google.com/books/about/All_the_Men_in_the_Sea.html?id=f5NJ8ZOxyTQC', notes: 'Book-length account of the DLB-269 loss and rescue in Hurricane Roxanne (1995): ~230 into 30-40 ft seas, defective life jackets, non-swimmers, rescue by two supply boats and the tug Captain John.' },
        { title: 'All the Men in the Sea (excerpt)', type: 'Magazine excerpt', publisher: 'Maritime Reporter & Engineering News (April 2003)', year: 2003, url: 'https://magazines.marinelink.com/Magazines/MaritimeReporter/200304/content/all-the-men-208201', notes: 'Published excerpt from Krieger\'s book describing the all-night rescue; names the tug Captain John and supply vessel Carolina/North Carolina and the deaths in the life rafts.' },
        { title: 'COTO v. J. Ray McDermott, 96-2701 (La.App. 4 Cir. 3/18/98)', type: 'Appellate court opinion', publisher: 'Court of Appeal of Louisiana, Fourth Circuit', year: 1998, url: 'https://www.casemine.com/judgement/us/5914bbbeadd7b049347986b6', notes: 'States ~250 aboard DLB-269 when it sank in the Bay of Campeche during Hurricane Roxanne, under tow by the M/V Captain John and M/V North Carolina; owner/operator CCC Fabricaciones y Construcciones; claims dismissed under Jones Act §688(b). (Opinion mis-dates the year as 1993; correct year is 1995.)' },
        { title: 'Tropical Cyclone Report: Hurricane Roxanne (AL191995)', type: 'Official hurricane report', publisher: 'National Hurricane Center', year: 1995, url: 'https://www.nhc.noaa.gov/data/tcr/AL191995_Roxanne.pdf', notes: 'Primary NHC meteorological report for Hurricane Roxanne (track, intensity, Bay of Campeche loop).' },
        { title: 'Tugboat rescue of oil barge DLB 269 crew from Hurricane Roxanne in the Gulf of Mexico', type: 'Video footage', publisher: 'YouTube', url: 'https://www.youtube.com/watch?v=C1IMMdGkoW8', notes: 'Footage of the tugboat rescue of DLB-269 crew during Hurricane Roxanne (15 October 1995). Third-party video; used as visual context, not an authoritative record.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       Ocean Prince — 1968
    ─────────────────────────────────────────────────── */
    {
      id: 'ocean-prince-1968',
      name: 'Ocean Prince Semi-Submersible Break-Up in a North Sea Storm',
      year: 1968,
      date: '6 March 1968',
      location: 'North Sea, off the Dogger Bank, United Kingdom sector - on location in about 75 ft (23 m) of water',
      lat: 54.7,
      lng: 2.0,
      location_precision: 'Approximate presentation point on the Dogger Bank; the primary record places the rig standing on the seabed in about 75 ft of water, but a surveyed casualty coordinate was not retrieved.',
      region: 'Europe',
      platform_type: 'Semi-submersible drilling rig (Ocean Queen design), built 1966 by Smith\'s Dock Co. (Teesside); operating bottom-supported, resting on the seabed',
      operator: 'Drilling for the Burmah group (UK licensee); a semi-submersible of the "Ocean" drilling fleet - exact ownership not definitively established in the reviewed sources',
      weather_event_type: 'storm',
      classification: 'design',
      weather_event: 'Severe North Sea winter storm during the night of 5-6 March 1968; secondary accounts report gale conditions with ~50 ft seas and winds in excess of 80 knots',
      fatalities: 0,
      persons_on_board: 45,
      survivors: 45,
      infrastructure_impact: 'Total loss of the semi-submersible Ocean Prince, which suffered damage, had its derrick collapse into the sea, and then broke up and sank off the Dogger Bank.',
      image: {
        src: 'images/ocean-prince-1968-boe.png',
        alt: 'Black-and-white archival photograph of the Ocean Prince semi-submersible drilling rig damaged and listing in heavy seas, its derrick collapsed, during the March 1968 storm.',
        caption: 'The Ocean Prince in heavy North Sea seas with its derrick collapsed, during the storm that broke it up off the Dogger Bank in March 1968. Archival photograph; not independently dated within this project.',
        credit: 'Via Bud\'s Offshore Energy (budsoffshoreenergy.com), sourced from the Norwegian oil-pioneers archive (oljepionerene.no); originating 1968 photographer unresolved. Copyrighted/archival - permission required, reference use only.'
      },
      summary: 'During a severe storm on the night of 5-6 March 1968, the semi-submersible Ocean Prince - standing on the seabed in about 75 ft of water off the Dogger Bank - was damaged, its derrick collapsed into the sea, and it later broke up and sank. All aboard (reported as 45) were withdrawn to safety by helicopter; there were no fatalities. It was the second major UK North Sea rig loss after the Sea Gem in 1965.',
      executive_summary: 'The Ocean Prince, an early UK-built semi-submersible operating bottom-supported (resting on the seabed) in about 75 ft of water off the Dogger Bank, was overwhelmed in a severe North Sea storm on 5-6 March 1968. Per the UK Minister of Power\'s statement to Parliament, the rig suffered damage, the derrick collapsed into the sea, all persons aboard were withdrawn to safety by helicopter, the standby vessel was driven off by the continuing storm, and aerial reconnaissance confirmed the rig had broken up. Offshore-history accounts note that its floating sister rig, the Ocean Viking, withstood the same winds and waves, pointing to the seated-on-a-sandbank configuration - where storm waves approached the water depth and scoured around the pontoons - as the vulnerability. All ~45 aboard survived (a celebrated helicopter rescue); there were no fatalities.',
      what_happened: 'Ocean Prince was one of the earliest North Sea semi-submersible drilling rigs - built in 1966 by Smith\'s Dock Company on Teesside to the Ocean Queen design, and noted as the first rig to find oil in UK waters. In March 1968 it was drilling for the Burmah group on the Dogger Bank, operating in a bottom-supported mode, seated on the seabed in about 75 ft of water rather than floating on moorings.\n\nDuring the night of 5-6 March 1968 a severe storm crossed the area. According to the UK Minister of Power\'s statement to the House of Commons on 7 March 1968, the rig - standing on the seabed in 75 ft of water - suffered damage and the derrick collapsed into the sea; all persons on board at the time were withdrawn to safety by helicopter. The licensee\'s standby vessel was driven off station by the continuing storm, and an aerial reconnaissance confirmed that the rig had broken up. Offshore-history accounts add that the superstructure was torn off at about 02:00 and that by about 07:10 roughly a third of the platform had disappeared under some 60 ft of water; contemporary reports describe gale conditions with about 50 ft seas and winds in excess of 80 knots, and credit a helicopter pilot (named in accounts as Captain Robert Balls) with the safe evacuation of the crew.\n\nA telling comparison is that the Ocean Prince\'s sister rig, the Ocean Viking, rode out the same storm while drilling afloat. Offshore veterans attribute the loss to the bottom-supported configuration: seated on a sandbank with storm waves as deep as the water, the rig accelerated scour around its pontoons and imposed distorted loads on a hull that lacked the compliance a floating, moored rig has. All aboard (reported as 45 lives saved in Parliament) survived; there were no fatalities. It was the second serious loss of a UK North Sea rig after the Sea Gem in 1965.',
      what_went_wrong: [
        'The rig was operating bottom-supported on a sandbank in about 75 ft of water when a severe storm produced waves comparable to the water depth, exposing the seated hull to severe wave loading and accelerating seabed scour around the pontoons - conditions a floating, moored rig is better able to absorb.',
        'In the storm the rig suffered damage and the derrick collapsed into the sea; the unit then broke up and sank.',
        'The standby (rescue) vessel was driven off station by the continuing storm, leaving helicopter evacuation as the decisive means of getting the crew off.',
        'It was the second major UK North Sea rig loss in little over two years (after Sea Gem, 1965), yet legislation to implement the Sea Gem inquiry\'s safety recommendations had not yet been enacted, and offshore safety still relied on voluntary co-operation under the licensing regime.'
      ],
      lessons_learned: [
        'Ocean Prince broke up in a 1968 North Sea storm while operating bottom-supported on a Dogger Bank sandbank - yet its floating, moored sister rig rode out the same storm. The configuration, not the weather, decided it: a hull seated rigidly on the seabed, where storm waves approach the water depth, lacks the compliance a floating, moored unit relies on.',
        'A bottom-supported unit on a mobile sandbank also drives seabed scour around its supports when storm waves reach the water depth - loading a floating, moored rig never sees.',
        'Reliable helicopter evacuation is critical in severe weather, especially when the standby vessel can be driven off station.',
        'Recurring early North Sea rig losses showed voluntary co-operation was not enough and drove enforceable statutory offshore safety regulation.',
      ],
      actions: [
        'The loss was raised in the UK House of Commons the next day (Hansard, 7 March 1968); the Minister of Power confirmed the damage, derrick collapse, helicopter evacuation and break-up, and stated that the Sea Gem inquiry\'s recommended procedures - including regular servicing and evacuation by helicopter - had been put into practice pending legislation.',
        'The helicopter evacuation practice recommended after the Sea Gem loss was credited with the safe deliverance of the crew.',
        'The recurring losses contributed to the subsequent development of UK offshore safety legislation.'
      ],
      metocean: {
        wave_height_hs: 'Reported about 50 ft seas during the storm (secondary/contemporary accounts), comparable to the ~75 ft water depth - a key factor for the seabed-supported configuration. Not an instrument record at the rig.',
        wind_speed: 'Gale-force winds reported in excess of 80 knots (secondary accounts); the primary record describes only a "severe storm".',
        notes: 'The weather driver was a severe North Sea winter storm. The distinctive factor is that the rig was operating bottom-supported on a sandbank, so storm waves approaching the water depth drove scour and hull loading; a floating sister rig survived the same conditions. Wind/wave values are secondary reports, not measurements at the rig.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the date (night of 5-6 March 1968), the location (off the Dogger Bank, standing on the seabed in about 75 ft of water), the severe storm, the damage and derrick collapse, the break-up of the rig, and the successful helicopter evacuation of all aboard with zero fatalities - because these are stated in the primary UK Parliamentary record (Hansard, 7 March 1968, statement by the Parliamentary Secretary to the Ministry of Power). The persons-aboard figure (45) is the "45 lives saved" stated in the House. Moderate/secondary for the vessel particulars (built 1966 by Smith\'s Dock, Ocean Queen design, drilling for the Burmah group), the ~50 ft seas and >80 kn winds, the ~02:00 derrick collapse and ~07:10 one-third-submerged timings, and the bottom-supported/scour cause narrative, which come from a vessel database and offshore-history accounts rather than a formal casualty report. Not established here: the exact rig ownership/operator, a surveyed casualty coordinate, and a formal inquiry report (none was retrieved; the Minister referenced the earlier Sea Gem inquiry).',
      references: [
        { title: 'Drilling Rig "Ocean Prince" (Loss)', type: 'Primary government record (Hansard)', publisher: 'UK Parliament, House of Commons (HC Deb 7 March 1968, vol 760 cc659-60)', year: 1968, url: 'https://api.parliament.uk/historic-hansard/commons/1968/mar/07/drilling-rig-ocean-prince-loss', notes: 'Statement by the Parliamentary Secretary to the Ministry of Power: during the night of 5-6 March, in a severe storm, the Ocean Prince (standing on the seabed in 75 ft of water) suffered damage and the derrick collapsed into the sea; all aboard were withdrawn to safety by helicopter; the standby vessel was driven off by the storm; aerial reconnaissance confirmed the rig had broken up. Mr Lubbock noted "45 lives were saved" and asked about an inquiry as for the Sea Gem.' },
        { title: 'OCEAN PRINCE - Tees Built Ships', type: 'Vessel database record', publisher: 'teesbuiltships.co.uk', url: 'https://www.teesbuiltships.co.uk/view.php?ref=170636', notes: 'Ocean Prince built by Smith\'s Dock Company Ltd. in 1966; drilling rig; 06/03/1968 broke up and sank off the Dogger Bank.' },
        { title: 'The sinking of the Ocean Prince (1968) and the heroic North Sea rescue', type: 'Offshore-history account (secondary)', publisher: 'Bud\'s Offshore Energy', year: 2023, url: 'https://budsoffshoreenergy.com/2023/08/21/the-sinking-of-the-ocean-prince-1968-and-the-heroic-north-sea-rescue/', notes: 'Recounts the ~02:00 superstructure loss and ~07:10 partial sinking, the bottom-supported-on-a-sandbank vulnerability and scour concern, the survival of the floating sister rig Ocean Viking, and the helicopter rescue by Capt. Robert Balls; cites the Norwegian oil-pioneers site (oljepionerene.no) and offshore veteran JL Daeschler.' },
        { title: 'Ocean Prince havari (loss) - photographs and account', type: 'Offshore-history archive (secondary)', publisher: 'Oljepionerene.no (Norwegian oil pioneers)', url: 'http://oljepionerene.no/bilder/ocean_prince/havari_op_eng.php', notes: 'Norwegian oil-history archive page on the Ocean Prince loss, with photographs and narrative.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       5. Bohai No. 2 — 1979
    ─────────────────────────────────────────────────── */
    {
      id: 'bohai-no2-1979',
      name: 'Bohai No. 2 Jack-up Capsize During Storm Tow',
      year: 1979,
      date: '24-25 November 1979',
      location: 'Bohai Bay, China - under tow from well 7B33-1 toward well 10B13-1',
      lat: 38.80,
      lng: 121.00,
      location_precision: 'Approximate regional presentation point; an authoritative casualty coordinate was not found in the reviewed public sources.',
      region: 'Asia',
      platform_type: 'Mat-supported self-elevating offshore drilling platform, imported from Japan and under tow',
      operator: 'Ministry of Petroleum Industry, Offshore Petroleum Exploration Bureau',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'Forecast force 6-7 winds, worsening to reported force 8-9 conditions during an unsafe late-November tow',
      fatalities: 72,
      persons_on_board: 74,
      survivors: 2,
      infrastructure_impact: 'Total loss of the platform during tow; Chinese accounts report direct economic losses of approximately RMB 37-37.35 million. The wreck was later cut into ten sections and recovered for technical examination.',
      environmental_impact: 'No quantified pollution outcome was identified in the reviewed sources.',
      image: {
        src: 'images/bohai-no2-1979-platform.jpg',
        alt: 'Black-and-white photograph of the mat-supported Bohai No. 2 self-elevating drilling platform afloat.',
        caption: 'Bohai No. 2 drilling platform before the November 1979 loss.',
        credit: 'Chinese archival image retained with the project; original photographer, publication and reuse licence unresolved. Reference use only.'
      },
      summary: 'Bohai No. 2 sank during an overnight tow across Bohai Bay on 24-25 November 1979. The move proceeded despite force 6-7 forecasts and a rule barring lowering and tow above force 5, while the platform retained ballast and excess variable load and was assigned one tug rather than the requested three. In force 8-9 conditions, unsecured deck loads shifted, water shorted a pump switchboard, and a damaged low ventilation trunk opened the machinery and pump spaces to uncontrollable flooding. The platform disappeared at about 03:35. Of 74 people aboard, only two survived; 72 died.',
      executive_summary: 'Bohai No. 2 was ordered to move about 217 km from well 7B33-1 to 10B13-1 late in the 1979 season. Chinese accounts describe schedule pressure, incomplete deballasting, a 351-tonne variable-load excess, one-tug towing, and departure despite forecasts above the platform\'s stated force-5 tow limit. As wind rose to force 8-9 overnight, waves swept equipment across the deck and water disabled pumping. At about 02:10, the third ventilation trunk broke at its base, leaving an approximately 0.8 m opening into the pump space. Flooding could not be controlled; the tug could not turn the platform head-to-sea, and Bohai No. 2 sank by about 03:35. Rescue mobilization and position reporting were ineffective, contributing to only two survivors among 74 people. The State Council later classified the loss as a major responsibility accident caused principally by serious violations in command and unsafe lowering and towing. Later salvage and engineering work also identified vulnerable ventilation, compartmentation, emergency drainage, and power arrangements.',
      what_happened: 'Bohai No. 2 was a mat-supported jack-up ordered late in the 1979 season to move about 217 km to a new well and drill before year-end, under pressure to meet an annual target despite objections that it was too late in the year.\n\nThe tow preparation broke the rules. Ballast was left in four mat compartments, the platform was about 351 tonnes over its variable-load limit, loose and heavy deck equipment was not removed, and only one tug was assigned instead of the three requested. The mat was left about a metre low to avoid trapping a lost pump.\n\nForecasts on 24 November were force 6-7, above the force-5 limit for lowering and towing, but the decision was passed back to the offshore crew and the move went ahead. After about 20:00 the wind rose to force 8-9 and seas began sweeping drill pipe, gas cylinders and a pile hammer across the deck.\n\nWater shorted the mud-pump switchboard, then a ventilation trunk broke at its base and opened the pump space to the sea. Flooding could not be controlled, the single tug could not turn the platform head-to-sea, and Bohai No. 2 sank at about 03:35. Only 2 of the 74 aboard survived. The State Council later ruled it a major responsibility accident caused by unsafe command, lowering and towing - not simply bad weather.',
      what_went_wrong: [
        'Schedule and production pressure drove a late-season move despite objections and a force 6-7 forecast above the stated force-5 limit.',
        'Tow preparation violated the rules: ballast retained in the mat, about 351 tonnes of excess variable load, and loose heavy deck equipment left unsecured.',
        'Only one tug was assigned after three were requested, too little to turn the platform head-to-sea once flooding became critical.',
        'Water through deck cable penetrations shorted a switchboard and disabled pumping, then a ventilation trunk broke at its low base and opened the pump space directly to boarding seas.',
        'The distress alert, casualty position and rescue were delayed and ineffective, and cold-water survival equipment and training were inadequate.',
      ],
      lessons_learned: [
        'Bohai No. 2 was lost not to an unbeatable storm but to an unsafe decision to tow it in late-season weather above its own force-5 limit, overweight and underprepared, with one tug instead of three - and 72 of 74 aboard died. A weather limit only works as a binding stop; passing an above-limit forecast back to the crew as a judgement call does not control schedule pressure.',
        'Every tow needs an independently verified displacement, draft, ballast, variable-load and securing certificate before departure.',
        'Tow-vessel number and power must be proven against heading control and casualty response, not just forward tow speed.',
        'Ventilation openings and cable penetrations exposed to boarding seas need adequate height, weathertight closure and internal isolation, and machinery spaces need subdivision and emergency drainage that survive one electrical failure.',
      ],
      actions: [
        'The State Council formally classified the loss as a major responsibility accident caused by serious violations in command and unsafe lowering and towing (25 August 1980).',
        'It removed the Petroleum Minister, disciplined senior officials, and required truthful, timely reporting of major accidents.',
        'A 1980 Beijing implementation notice required inspection and correction of unsafe equipment and prohibited schedule-driven work that disregarded worker safety.',
        'The 1982 wreck recovery and engineering program tested the flooding mechanism and exposed design weaknesses in ventilation closure, compartmentation, drainage and emergency power.',
      ],
      metocean: {
        wave_height_hs: 'No verified numerical significant-wave-height value found in the reviewed sources',
        wind_speed: 'Forecast force 6-7 on 24 November; Chinese narrative sources report force 8-9 after about 20:00. These are Beaufort descriptions, not instrument records at the platform.',
        sea_temp: 'Not verified; sources describe cold late-November Bohai Bay water but provide no measured value',
        notes: 'The State Council decision rejects an unavoidable-weather explanation and identifies unsafe command, lowering and towing as the principal cause. Later Chinese technical narratives describe boarding seas as the immediate flooding load, but no platform-point wind or wave instrument record was retrieved.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the date, 72 fatalities, official responsibility classification and principal management cause because these are stated in the State Council decision and corroborated by an official Beijing government implementation notice. Moderate for 74 persons aboard, two survivors, the detailed timeline, load/ballast figures, tug arrangement, rescue delay, 1982 salvage and design findings because these come from a detailed Chinese retrospective citing named 1980-2006 journal, newspaper and legal-history sources; the underlying full texts were not all publicly accessible in this research pass. Low or unverified for exact casualty coordinates, measured wave height, measured wind at the platform and sea temperature.',
      sources: [
        'State Council Decision on Handling the Bohai No. 2 Accident, 25 August 1980 (Chinese legal text mirror; official decision)',
        'Beijing Municipal Government Office implementation notice, Jing Zheng Ban Fa [1980] No. 75, 11 November 1980 (official government archive)',
        'Huxiu / Mantou Shuo, “渤海2号”沉没：一场重大事故背后的争论与反思, 25 November 2019 (Chinese retrospective citing eight named historical sources)'
      ],
      references: [
        { title: '国务院关于处理“渤海2号”事故的决定', english_title: 'State Council Decision on Handling the Bohai No. 2 Accident', type: 'Government decision', publisher: 'State Council of the People\'s Republic of China', year: 1980, url: 'https://www.66law.cn/tiaoli/150929.aspx', notes: 'Promulgated 25 August 1980. The accessible page reproduces the decision text; official provenance is corroborated by the Beijing government archive.' },
        { title: '北京市人民政府办公厅转发市劳动局《劳动工作简报》的通知', english_title: 'Beijing Municipal Government Office Notice Forwarding the Labor Bureau Work Briefing', type: 'Official implementation notice', publisher: 'Beijing Municipal Government', year: 1980, url: 'https://www.beijing.gov.cn/zhengce/zfwj/zfwj/bgtwj/201905/t20190523_72962.html', notes: 'Jing Zheng Ban Fa [1980] No. 75; published 11 November 1980. Confirms implementation of the State Council decision and its wider safety-accountability consequences.' },
        { title: '“渤海2号”沉没：一场重大事故背后的争论与反思', english_title: 'The Sinking of Bohai No. 2: Debate and Reflection Behind a Major Accident', type: 'Chinese historical retrospective', publisher: 'Huxiu / Mantou Shuo', year: 2019, url: 'https://www.huxiu.com/article/327904.html', notes: 'Detailed accessible chronology and technical narrative. Its bibliography cites contemporaneous Labor Protection, Tianjin Navigation, People\'s Daily and Workers\' Daily reporting, later petroleum-history research, and the State Council decision.' },
        { title: '本来不该发生的悲剧——“渤海二号”翻没记', english_title: 'A Tragedy That Should Not Have Happened - The Capsize of Bohai No. 2', type: 'Contemporaneous safety-journal article', publisher: '劳动保护 (Labour Protection)', year: 1980, issue: '09', notes: 'Identified through the bibliography of the reviewed Chinese retrospective; full text was not retrieved.' },
        { title: '渤海二号是怎样翻沉的', english_title: 'How Bohai No. 2 Capsized', type: 'Maritime technical article', publisher: '天津航海 (Tianjin Navigation)', year: 1981, issue: '01', notes: 'Identified through the bibliography of the reviewed Chinese retrospective; full text was not retrieved.' },
        { title: '漫漫求索路——渤海2号钻井船翻沉事故原因的追踪', english_title: 'A Long Search - Tracing the Cause of the Bohai No. 2 Drilling Vessel Capsize', type: 'Petroleum technical-history article', publisher: '石油科技论坛 (Oil Forum)', year: 2006, issue: '06', notes: 'Identified through the bibliography of the reviewed Chinese retrospective; full text was not retrieved.' },
        { title: 'Bohai No. 2 (1979) - Detailed Evidence Note', type: 'Project source audit', file: 'background files/Bohai_No2_1979_Detailed_Incident_Report.md', internal: true, notes: 'Chinese-source hierarchy, corrected facts, chronology, causal synthesis and evidence boundaries.' }
      ]
    },

    /* ──────────────────────────────────────────────────
      6. Kolskaya Jack-up — 2011
    ─────────────────────────────────────────────────── */
    {
      id: 'kolskaya-2011',
      name: 'Kolskaya Jack-up Capsize During Tow in Winter Storm',
      year: 2011,
      date: '18 December 2011',
      location: 'Sea of Okhotsk, en route Kamchatka → Sakhalin, Russian Far East',
      lat: 49.5167,
      lng: 148.2333,
      location_precision: 'Provisionally corroborated casualty position (49°31′N, 148°14′E). The exact coordinates are widely published and are consistent with reporting that the rig sank about 200 km northeast of Cape Terpeniya, but they were not verified in a retrieved primary document.',
      region: 'Russia and Central Asia',
      platform_type: 'Triangular jack-up drilling rig (built 1985, under tow)',
      operator: 'ArktikmorNefteGazRazvedka (AMNGR), Murmansk — subcontracted to Gazprom; tow by icebreaker Magadan and tug Neftegaz-55',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'Winter storm — squally winds up to 25 m/s, waves up to 4–5 m, sub-zero temperatures',
      fatalities: 53,
      persons_on_board: 67,
      survivors: 14,
      image: {
        src: 'images/kolskaya-2011-ria-archival.webp',
        alt: 'Kolskaya jack-up afloat in rough seas during its final voyage.',
        caption: 'Kolskaya during its final voyage. RIA identifies this as an archival photograph and does not provide an exact date or time.',
        credit: 'RIA Novosti; personal archive of Natalia Dmitrieva. Permission required.'
      },
      pack_images: [
        {
          src: 'images/kolskaya-2011-final-hour.jpg',
          alt: 'Kolskaya low in the water with its legs raised during the storm, about two hours before capsize.',
          caption: 'Kolskaya low in the water with its legs still raised about two hours before it capsized (18 December 2011, 11:14) - very little buoyancy left.',
          credit: 'Photographer recorded aboard a towing vessel; via kolskaya.com. Rights unconfirmed, used for learning.'
        },
        {
          src: 'images/kolskaya-2011-capsized.jpg',
          alt: 'The capsized hull of Kolskaya in heavy seas shortly after it rolled over.',
          caption: 'The capsized Kolskaya in the storm shortly after it rolled over (18 December 2011, 13:17).',
          credit: 'Photographer recorded aboard a towing vessel; via kolskaya.com. Rights unconfirmed, used for learning.'
        }
      ],
      summary: 'The jack-up rig Kolskaya capsized and sank under tow in a Sea of Okhotsk winter storm on 18 December 2011, killing 53 of the 67 people aboard - Russia\'s worst offshore disaster. A survivable storm became a catastrophe because a hazardous late-season tow went ahead without the required approval, the rig was left unprepared and overcrowded, and the distress call came too late.',
      executive_summary: 'On 18 December 2011 the jack-up Kolskaya capsized and sank in the Sea of Okhotsk while under tow from offshore Kamchatka to Sakhalin, killing 53 of 67 aboard. Investigators reported squally winds up to 25 m/s and waves up to 4–5 m. The court found that 28 people not required for the tow remained aboard, the platform was not prepared for storm conditions, its legs were not lowered, and SOS was sent too late. The planned subsequent Vietsovpetro work in Vietnam is documented, but the reviewed evidence does not establish that schedule as a cause of the unsafe decisions.',
      what_happened: 'Kolskaya was a 1985-built jack-up drilling rig operated by AMNGR. After finishing a well off the West Kamchatka shelf, it was taken under tow toward Sakhalin on 11 December 2011 - a long winter passage across the Sea of Okhotsk behind the icebreaker Magadan and the tug Neftegaz-55.\n\nThe winter tow went ahead without the approval Russian rules require, and all 67 people stayed aboard although only a fraction were needed for the passage. As a storm closed in on 17-18 December, with squally winds to 25 m/s and 4-5 m seas, the rig was driven hard and its legs were left raised instead of being lowered to improve stability.\n\nWater flooded in around the forward leg and filled ballast and machinery spaces faster than the pumps could cope. The bow went down until the legs could no longer be lowered, and the distress call came too late.\n\nAs the rig lost stability, people gathered on deck expecting a helicopter rescue that never came. Kolskaya capsized and sank on 18 December in water over 1,000 m deep; those who went into the near-freezing water could not be reached by the tugs in the conditions, and only 14 of the 67 survived.',
      what_went_wrong: [
        'A winter tow across the Sea of Okhotsk went ahead without the approval Russian marine-safety rules require.',
        'All 67 people were carried by sea though only a fraction were needed for the tow; investigators found 28 were not required at all.',
        'The rig was not prepared for the forecast storm: its legs were left raised instead of lowered to improve stability.',
        'Excessive towing speed and storm exposure let water flood the forward leg and machinery spaces faster than the pumps could cope.',
        'The distress call was sent too late, and the tugs could not recover people from the near-freezing water.'
      ],
      lessons_learned: [
        'The storm was survivable; the disaster was made by decisions, not weather. A winter tow went ahead without the required approval, the rig was not readied for heavy weather with its legs left raised, far more people than needed stayed aboard, and the distress call came too late. When schedule pressure removes every safety margin, blaming the metocean conditions is the easy way out.',
        'Seasonal and winter tow restrictions and mandatory approvals exist for good reason and must not be bypassed under schedule pressure.',
        'Keep people who are not needed off a high-risk marine move; minimise the number exposed.',
        'Prepare the unit for the forecast weather, keep watertight integrity, confirm the rescue plan and raise the alarm early - in near-freezing water, survival is measured in minutes.'
      ],
      actions: [
        'RosTransNadzor investigated the sinking and published its report in May 2012.',
        'In 2017 two former shore-side AMNGR officials were convicted over the tow and barred from transport work; the conviction remained publicly contested by the defendants and victims\' families.'
      ],
      metocean: {
        wave_height_hs: 'Waves up to 4–5 m; the reviewed Russian sources do not identify this value as significant wave height (Hs)',
        wind_speed: 'Squally wind up to 25 m/s in Investigative Committee reporting',
        sea_temp: '~1 °C (near-freezing) — survivors entered the water at ~1 °C',
        notes: 'The Sea of Okhotsk is prone to polar lows in winter — small, short-lived but intense maritime storms that spin up rapidly over cold water and are hard to forecast. The Kolskaya was caught by a rapidly-developing winter storm of this kind; Investigative Committee reporting describes squally winds up to 25 m/s and waves up to 4–5 m, without identifying the wave parameter as Hs. Near-freezing water (~1 °C) sharply constrained survival. Separately (a seasonal process, not the storm), the sea freezes over each winter; the retained internal presentation identifies the advancing ice season as operational context for the move, but the reviewed evidence does not establish the later Vietnam schedule as a cause of unsafe decisions.'
      },
      source_classification: 'mixed',
      shell_internal_only: false,
      data_quality: 'High for the 67 aboard, 14 survivors, 53 fatalities, tow date and vessels, reported wind and wave values, 28 people not required for the tow, raised legs, delayed SOS, progressive flooding and 2017 convictions because these are supported by Russian investigative and court reporting. The casualty coordinates 49°31′N, 148°14′E are provisionally corroborated but were not found in a retrieved primary document. Distress accounts conflict between approximately 09:10 and 09:45 local; investigators alleged that a manager orally prohibited a distress signal and that the captain transmitted SOS despite that prohibition. The captain\'s reported "suicide" warning and resignation are retained only as an unofficial account from the internal presentation. Planned Vietsovpetro work is confirmed, but schedule causation is not.',
      references: [
        { title: 'RosTransNadzor — Kolskaya sinking investigation report (May 2012)', type: 'Official investigation report', publisher: 'Russian Federal Service for Supervision of Transport (RosTransNadzor)', year: 2012 },
        { title: 'Investigators reconstructed the Kolskaya casualty', type: 'Investigative Committee reporting', publisher: 'RIA Novosti', year: 2013, url: 'https://ria.ru/20131106/974963163.html' },
        { title: 'Investigators: Kolskaya management prohibited an SOS signal', type: 'Investigative Committee reporting', publisher: 'RIA Novosti', year: 2013, url: 'https://ria.ru/20131105/974753436.html' },
        { title: 'Court found defendants guilty in the Kolskaya casualty', type: 'Court reporting', publisher: 'Interfax', year: 2017, url: 'https://www.interfax.ru/russia/560985' },
        { title: 'Relatives of Kolskaya victims applied to the ECHR', type: 'Appeal and legal follow-up reporting', publisher: 'Interfax', year: 2018, url: 'https://www.interfax.ru/russia/600595' },
        { title: 'Court rejected Kolskaya owner\'s claim against the Russian Maritime Register', type: 'Arbitration and RosTransNadzor findings reporting', publisher: 'Sakh.online', year: 2012, url: 'https://sakh.online/news/24/2012-06-06/sud-otkazal-vladeltsu-kolskoy-v-iske-k-morskomu-registru-rossii-301952' },
        { title: 'Lessons Learnt from the Kolskaya Incident — Vadim Anokhin (Senior Metocean Engineer, Sarawak Shell Berhad)', type: 'Shell internal case study', file: 'background files/Lessons Learnt from Kolskaya Incident - Vadim Anokhin - Final VA.pdf', internal: true },
        { title: 'Wikipedia — Kolskaya (jack-up rig)', type: 'Encyclopedia', url: 'https://en.wikipedia.org/wiki/Kolskaya_(jack-up_rig)' },
        { title: 'Кольская буровая', type: 'Video', publisher: 'YouTube', url: 'https://www.youtube.com/watch?v=v0xBDfiP4Q4', notes: 'Video from Kolskaya Jack-Up before and during the incident.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       7. Usumacinta / Kab-101 — 2007
    ─────────────────────────────────────────────────── */
    {
      id: 'usumacinta-2007',
      name: 'Usumacinta Jack-up Collision with Kab-101 and Well Blowout',
      year: 2007,
      date: '23 October 2007',
      location: 'Sonda de Campeche, southern Gulf of Mexico, offshore Tabasco, Mexico',
      lat: 20.27,
      lng: -92.10,
      location_precision: 'Approximate regional presentation point. Public sources place the complex off the Tabasco coast but give inconsistent distance descriptions; no authoritative casualty coordinate was retrieved.',
      region: 'North America',
      platform_type: '1982-built mat-supported self-elevating drilling unit beside the light Sea Pony production platform Kab-101',
      operator: 'Pemex Exploración y Producción; Usumacinta owned by Perforadora Central de México',
      weather_event_type: 'storm',
      classification: 'drilling',
      weather_event: 'Cold Front No. 4 ("Norte") - UNAM Annex 5.1, summarizing the Pemex/Battelle investigation, reports gusts up to 130 km/h and waves of 6-8 m',
      fatalities: 22,
      persons_on_board: 73,
      survivors: 53,
      injuries: 68,
      infrastructure_impact: 'Damage to the production trees of wells Kab-101 and Kab-121; uncontrolled oil and gas release from Kab-121; intermittent fires; major damage to Usumacinta, its cantilever and drilling structure; prolonged well-control and dismantling work.',
      environmental_impact: 'Pemex reported a Kab-121 release of about 422 barrels of light crude per day and approximately 12,000 barrels released by 30 November, of which 3,484 barrels had been recovered. The well was finally controlled and cemented on 16 December. A reliable final spill total was not established in the reviewed sources.',
      image: {
        src: 'images/usumacinta-2007-figure-1-15-first-fire-kab-121.jpg',
        alt: 'First fire at the Kab-121 well after the Usumacinta incident.',
        caption: 'Figure 1.15: First fire in Kab-121 well.',
        credit: 'Extracted from Usumacinta Accident Report, Figure 1.15; report source and image reuse rights not independently verified.'
      },
      summary: 'On 23 October 2007, Cold Front No. 4 and mat-foundation settlement caused Usumacinta to incline into Pemex\'s Kab-101 platform, damaging the Kab-101 and Kab-121 well trees. The failed Kab-121 safety valve released oil, gas and hydrogen sulfide; the evacuation of 73 people in two overwhelmed craft resulted in 22 deaths, including two rescuers. CNDH identified unsafe conditions and inadequate training, while Battelle highlighted weather monitoring, seabed data, safety culture and emergency-management failures.',
      executive_summary: 'Usumacinta was positioned beside Kab-101 on 21 October to complete well Kab-103. Two days later, Cold Front No. 4, mat settlement on poorly characterized seabed and the jack-up\'s lightly loaded condition allowed it to incline. The cantilever damaged the Kab-101 and Kab-121 trees; Kab-121\'s subsurface safety valve failed to seal. An evacuation requested at 11:41 was reportedly authorized nearly three hours later. Both enclosed survival craft were overwhelmed in severe seas. Final accounting is 20 fatalities and 53 survivors from Usumacinta, plus two fatalities and two survivors from Morrison Tide\'s rescue crew: 22 deaths overall. A later 2012 assessment additionally describes the rig as near-lightship, notes a similar 2003 weather event, and criticizes the absence of a dedicated rescue-and-recovery capability. Kab-121 leaked and burned intermittently until the well was cemented on 16 December.',
      what_happened: 'Usumacinta was a mat-supported jack-up positioned on 21 October 2007 right beside the fixed Kab-101 platform to work a well, with the Kab-101 and Kab-121 production trees close under its cantilever.\n\nTwo days later Cold Front No. 4 - a "norte" - brought gusts to about 130 km/h and 6-8 m waves. The lightly loaded rig, sitting on poorly characterised seabed, settled and inclined. Supervisors reportedly knew it was badly positioned, but personnel were not moved to safety first.\n\nAs the rig moved, its cantilever struck the Kab-101 tree - a leak quickly stopped by closing the valves - and then the Kab-121 tree, severing a side valve. Kab-121\'s subsurface safety valve did not seal, releasing oil, gas and hydrogen sulphide that caught fire intermittently.\n\nAn evacuation requested at 11:41 was reportedly not authorised for nearly three hours, and the abandon order came around 15:30. Both enclosed survival craft were overwhelmed in the severe seas with no dedicated rescue vessel on hand; of 73 aboard, 20 died, and two rescuers from the Morrison Tide also died - 22 in all. Kab-121 was finally cemented on 16 December.',
      what_went_wrong: [
        'Weather tracking of Cold Front No. 4 did not drive a conservative enough response to suspend work and protect people.',
        'The site plan lacked adequate seabed data; mat settlement combined with the lightly loaded, near-lightship rig let Usumacinta incline into the adjacent wellheads.',
        'Supervisors reportedly knew the jack-up was poorly positioned in worsening weather and high hydrogen-sulfide risk, yet personnel were not first moved to a safe location.',
        'The cantilever struck two trees; Kab-121\'s subsurface safety valve failed to seal after a side valve was severed, so the hydrocarbon and hydrogen-sulfide release could not be isolated.',
        'The evacuation was delayed, drills had not exercised boarding and launching the enclosed craft, and no dedicated rescue vessel was available - so both craft were overwhelmed and improvised rescue added casualties.',
      ],
      lessons_learned: [
        'A norte - not a hurricane - inclined a lightly loaded jack-up into the live wellheads beside it, released sour gas, and then overwhelmed an unpractised, under-resourced evacuation; 22 died. Positioning a jack-up next to live production wells demands site-specific seabed data, a realistic survival loading and ballast condition, and weather triggers that move people off before conditions close the window.',
        'Weather plans must cover nortes and other non-hurricane events, with continuous tracking and clear stop-and-protect triggers.',
        'Emergency drills must exercise the whole abandonment sequence - alarm, breathing protection, muster, boarding, launch and craft handling - in realistic conditions.',
        'Rescue vessels must be purpose-capable and positioned to recover enclosed-craft occupants without creating a second man-overboard event, and operators remain responsible for rented units, contractors and their training.',
      ],
      actions: [
        'Battelle recommended extending storm planning to non-hurricane weather, continuous weather tracking, and stronger safety-culture and environmental systems.',
        'Battelle called for seabed-change controls, a storm-valve investigation, protected refuges and better access to safety systems.',
        'CNDH Recommendation 14/2009 sought compensation and medical support, permanent safety-equipment training, safer contractor qualification and formal accountability.',
        'Rescue vessels should be positioned for rapid deployment, with survival-at-sea training for Pemex and contractor personnel.',
      ],
      metocean: {
        wave_height_hs: 'UNAM Annex 5.1, summarizing the Pemex/Battelle investigation, reports waves of 6-8 m during the emergency; it does not state the wave parameter or measurement location',
        wind_speed: 'UNAM Annex 5.1, summarizing the Pemex/Battelle investigation, reports gusts up to 130 km/h (approximately 70 kn); it does not identify a calibrated platform measurement or averaging basis',
        notes: 'Cold Front No. 4 was the environmental driver. Battelle identified poor evaluation and tracking of the weather event as a root issue, but also identified mat settlement, the lightly loaded jack-up condition, deficient seabed data and management-of-change failures. A survivor-linked chronology contains internally inconsistent wind/wave entries and is not used here as an instrument record.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the facility/well arrangement, 73-person Usumacinta evacuation, final 22 deaths, CNDH findings, Battelle factors and recommendations, and 16 December well control because these are documented in the CNDH recommendation, UNAM annex and contemporaneous Pemex-attributed reporting. The structured fields use 73 persons aboard and 53 platform survivors; the fatality field is 22 because the incident total includes 20 Usumacinta evacuees plus two Morrison Tide rescuers. CNDH records 68 injured people across the casualty and response. Moderate for exact evacuation times and craft-failure sequence because they combine Control Marino records with survivor testimony. Low for exact casualty coordinates and platform-point wind/wave measurements.',
      sources: [
        'CNDH Recommendation 14/2009, Case of the Pemex Usumacinta Platform in the Sonda de Campeche (EXTERNAL, official)',
        'UNAM Annex 5.1, The Work Accident on Pemex\'s Usumacinta Marine Platform (EXTERNAL, academic teaching summary of Battelle)',
        'Mexican Chamber of Deputies commission records and parliamentary gazette (EXTERNAL, official legislative oversight)',
        'SMK 4122 Offshore and Ocean Engineering, Offshore Accident Studied Report: Explosion in Usumacinta Jack-up, Gulf of Mexico, October 2007 (EXTERNAL, secondary post-assessment study; April 2012)',
        'La Jornada contemporaneous reporting based on Pemex, Profepa, PGR and survivor statements (EXTERNAL)',
        'Ana Lilia Pérez / Contralínea survivor investigation and Control Marino chronology (EXTERNAL, investigative reporting)'
      ],
      references: [
        { title: 'Recomendación No. 14/2009 - Caso de la Plataforma Usumacinta de Pemex en la Sonda de Campeche', english_title: 'Recommendation 14/2009 - Case of the Pemex Usumacinta Platform in the Sonda de Campeche', type: 'Official human-rights investigation and recommendation', publisher: 'Comisión Nacional de los Derechos Humanos', year: 2009, url: 'https://www.cndh.org.mx/sites/default/files/doc/Recomendaciones/2009/REC_2009_014.pdf', file: 'background files/CNDH_Recommendation_14_2009_Usumacinta.pdf', notes: 'Primary source for CNDH evidence, findings and recommendations; retained 21-page PDF.' },
        { title: 'Anexo 5.1. El accidente de trabajo en la plataforma marina Usumacinta de Petróleos Mexicanos', english_title: 'Annex 5.1 - The Work Accident on Pemex\'s Usumacinta Marine Platform', type: 'Academic teaching annex summarizing the Battelle report', publisher: 'Universidad Nacional Autónoma de México', url: 'http://fcaenlinea1.unam.mx/anexos/1427/1427_u5_act3.pdf', file: 'background files/UNAM_Annex_5_1_Usumacinta.pdf', notes: 'Retained four-page summary used for platform particulars, event sequence, personnel accounting and Battelle findings. Its stated 16.5-million-barrel spill is inconsistent with contemporaneous Pemex reporting and is not propagated.' },
        { title: 'Acta de la VIII Reunión de Trabajo - Comisión de Investigación del Daño Ecológico y Social Generado por Pemex', type: 'Official legislative commission record', publisher: 'Cámara de Diputados', year: 2008, url: 'https://www.diputados.gob.mx/actas/Investigacion_Ecologico_y_Social_Generado_por_Pemex/260208.pdf', notes: 'Records legislative oversight of the Usumacinta/Kab-121 accident and the 22-worker death toll.' },
        { title: 'En 3 meses, resultados de investigaciones sobre el accidente en Usumacinta', type: 'Contemporaneous news report citing Pemex', publisher: 'La Jornada', year: 2007, url: 'https://www.jornada.com.mx/2007/11/30/index.php?section=economia&article=026n2eco', notes: 'Reports 22 deaths, 422 barrels/day, approximately 12,000 barrels released and 3,484 recovered by 30 November, and the announced investigation structure.' },
        { title: 'Pemex logra control definitivo del derrame en el pozo Kab-121', type: 'Contemporaneous news report citing Pemex', publisher: 'La Jornada', year: 2007, url: 'https://www.jornada.com.mx/2007/12/17/index.php?section=economia&article=021n2eco', notes: 'Documents removal work, replacement valve installation and final control/cementing on 16 December.' },
        { title: 'La tragedia de la plataforma Usumacinta', type: 'Investigative report with survivor testimony and Control Marino chronology', publisher: 'Contralínea / Red Voltaire', year: 2009, url: 'https://www.voltairenet.org/article162749.html', notes: 'Use for attributed testimony and detailed rescue chronology, not as the sole source for engineering causation.' },
        { title: 'Offshore Accident Studied Report: Explosion in Usumacinta Jack-up, Gulf of Mexico, October 2007', type: 'Secondary post-assessment study', publisher: 'SMK 4122 Offshore and Ocean Engineering, Group 8', year: 2012, file: 'background files/Usumacinta_Accident_Report.pdf', notes: 'Student assessment used only for secondary context: near-lightship/no-drill-pipe loading, reported 2003 recurrence, rescue-and-recovery capability gaps, and Figure 3.6 post-incident image. It is not treated as the main engineering or casualty source.' },
        { title: 'Pozo Kab 121', type: 'Incident image', publisher: 'Wikimedia Commons', year: 2007, url: 'https://commons.wikimedia.org/wiki/File:PozoKab121.jpg', notes: 'Photographed 24 October 2007 by Anubis-mx; public-domain dedication and CC BY-SA alternatives stated on the file page.' },
        { title: 'Usumacinta / Kab-101 / Kab-121 (2007) - Detailed Evidence Note', type: 'Project source audit', file: 'background files/Usumacinta_Kab101_2007_Detailed_Incident_Report.md', internal: true, notes: 'Page-cited Spanish-source chronology, personnel accounting, competing findings, environmental aftermath and evidence boundaries.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       8. Mumbai High North — 2005
    ─────────────────────────────────────────────────── */
    {
      id: 'mumbai-high-north-2005',
      name: 'Mumbai High North Platform Fire After Vessel Collision',
      year: 2005,
      date: '27 July 2005',
      location: 'Mumbai High North (MHN) field, Arabian Sea, ~160 km west of Mumbai, India',
      lat: 19.07,
      lng: 71.25,
      region: 'Asia',
      platform_type: 'Fixed production platform (ONGC Mumbai High North complex)',
      operator: 'Oil and Natural Gas Corporation (ONGC)',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'Monsoon storm - sustained winds ~35 knots, waves 4-5 m, strong currents',
      fatalities: 22,
      persons_on_board: 384,
      survivors: 362,
      infrastructure_impact: 'Mumbai High North platform completely destroyed by fire; major disruption to India\'s offshore oil production',
      image: {
        src: 'images/mumbai-high-north-2005-fire.jpg',
        alt: 'Jet fires and a large conflagration engulfing the Mumbai High North production complex.',
        caption: 'Flowline jet fires escalating across the Mumbai High North production complex.',
        credit: 'Steve Walker, UK HSE Offshore Division, via Oil & Gas UK and Wikipedia. Non-free; reference use only.'
      },
      summary: 'During monsoon conditions, the support vessel MSV Samudra Suraksha came alongside the MHN platform to transfer an injured crewman - the vessel\'s galley cook, who had severed a finger and needed a helicopter medical evacuation. In the heavy seas the vessel lost control and struck the platform\'s gas export riser, triggering a catastrophic gas release and fire. The platform was completely destroyed. 22 personnel died or went missing; the incident halted a major portion of India\'s offshore oil output.',
      executive_summary: 'On 27 July 2005, during typical Arabian Sea monsoon conditions (winds ~35 knots, seas 4-5 m), the support vessel MSV Samudra Suraksha approached the Mumbai High North (MHN) platform to transfer an injured cook (severed finger) for a helicopter medevac. The vessel lost position and struck the gas export riser; the resulting gas release ignited, causing a catastrophic fire that destroyed the platform. 22 personnel died or remain missing.',
      what_happened: 'On 27 July 2005, the Mumbai High area was experiencing typical monsoon conditions - ~35-knot winds, 4-5 m seas, and strong currents. Helicopter access had already been curtailed by the weather. The trigger for the operation was a medical emergency: the galley cook aboard the multi-support vessel MSV Samudra Suraksha had accidentally severed a finger and needed to be transferred to the platform so he could be flown ashore by helicopter for treatment. The vessel therefore approached the MHN platform for a personnel basket transfer.\n\nIn the heavy seas the vessel\'s positioning became unstable; it drifted and struck the high-pressure gas export riser on the windward (upwind) side of the platform, rupturing it. Gas ignited instantly, producing a fire that rapidly engulfed the platform. The nearby jack-up rig Noble Charlie Yester was evacuated safely. Platform crew evacuated by lifeboat, rescue boat, and by jumping into the sea.\n\nIn total 22 personnel died or remain missing. The MHN platform - one of India\'s most productive offshore facilities - burned for days and was completely destroyed.',
      what_went_wrong: [
        'A vessel approach to the high-pressure gas riser side of the platform was attempted in monsoon sea states - an inherently high-collision-risk operation.',
        'The approach was made from the upwind side: any drift or propulsion failure would push the vessel directly into the platform.',
        'Pressure to complete a medical evacuation overrode weather-based operational limits that should have prohibited the vessel proximity operation.',
        'The gas export riser had no physical collision protection and was positioned on the weather-exposed (windward) side of the platform.',
        'No subsea or surface isolation valve was rapidly actuated to cut off gas supply when the riser ruptured.'
      ],
      lessons_learned: [
        'A medevac for a severed finger put a support vessel alongside the gas-riser side of the platform in monsoon seas; it lost position, struck the riser, and the fire destroyed the platform and killed 22. Vessel-proximity work must stop when the sea state prevents safe station-keeping - and a single medical need must never override that limit.',
        'Critical risers must be physically protected against vessel impact, or placed on the sheltered side of the structure.',
        'Emergency isolation of a gas export riser must be immediate on any integrity event - fast-acting automatic or manual.',
        'Offshore medical emergencies need pre-planned, weather-independent options so marginal, ad-hoc approaches are not attempted.',
      ],
      actions: [
        'Note: ONGC did not release a public investigation report for this incident; the items below reflect commonly cited industry practice, not documented official outcomes.',
        'ONGC reportedly barred vessel approaches to platforms during monsoon conditions and revised marine procedures for Indian offshore fields.',
        'Industry interface guidance (API RP 2MET, NORSOK) addresses weather limits for proximity operations, and riser protection or leeward positioning is recognised good practice.',
        'Automatic emergency isolation on critical production risers is emphasised.',
      ],
      metocean: {
        wave_height_hs: '4-5 m significant',
        wind_speed: '~35 knots (monsoon sustained)',
        sea_temp: '~29 °C',
        notes: 'Arabian Sea monsoon season (June-September) generates sustained high-wind and sea-state conditions for extended periods. The monsoon was at peak intensity on the day of the incident. Helicopter operations were already grounded at the time.'
      },
      references: [
        { title: 'ONGC / IChemE - Mumbai High North Incident Analysis', type: 'Incident summary', publisher: 'ONGC / Institution of Chemical Engineers' },
        { title: 'Wikipedia - Mumbai High North platform disaster', type: 'Encyclopedia', url: 'https://en.wikipedia.org/wiki/Mumbai_High_North_platform_disaster' }
      ]
    },

    /* ──────────────────────────────────────────────────
      9. Sea Gem Jack-up - 1965
    ─────────────────────────────────────────────────── */
    {
      id: 'sea-gem-1965',
      name: 'Sea Gem Jack-up Collapse During Jack-Down',
      year: 1965,
      date: '27 December 1965',
      location: 'North Sea, ~42 miles off Lincolnshire coast, UK',
      lat: 53.55,
      lng: 1.50,
      region: 'Europe',
      platform_type: 'Jack-up drilling rig (barge-type with extendable legs) - first UK offshore oil rig',
      operator: 'BP (operator)',
      weather_event_type: 'storm',
      classification: 'design',
      weather_event: 'Tie-bar/suspension-system failure during jack-down; cold conditions and accumulated cyclic environmental loading were contributing factors',
      fatalities: 13,
      persons_on_board: 32,
      survivors: 19,
      image: {
        src: 'images/sea-gem-1965-platform-figure-2.png',
        alt: 'Black-and-white side view of the Sea Gem ten-leg drilling platform elevated above the North Sea.',
        caption: 'Sea Gem drilling platform before the collapse; Figure 2 in Burke (2013).',
        credit: 'Dukes Wood Oil Museum via Lisa Burke (2013), Figure 2. Permission required.'
      },
      summary: 'Sea Gem, the UK\'s first offshore drilling rig, collapsed and sank on 27 December 1965 while being jacked down to move to a new location. Fatigue-cracked, brittle tie-bars in the leg-suspension system failed and the structure broke up within minutes, before a distress call could be sent. Thirteen of the 32 people aboard died.',
      executive_summary: 'On 27 December 1965, the UK\'s first offshore oil discovery rig Sea Gem collapsed while being jacked down for relocation. Failure of suspension-system tie-bars initiated rapidly escalating structural disintegration; brittle fracture and pre-existing defects or fatigue cracking were central findings. Nineteen of the 32 people aboard were rescued and 13 died.',
      what_happened: 'On 27 December 1965 Sea Gem - a converted barge-type jack-up and the first rig to find gas in UK waters - was being jacked down 3.05 m to prepare for a two-mile move to a new drilling location. Winds were north-northwesterly, seas below 3 m and the air near freezing.\n\nThe forward jacks moved as expected, the intermediate jacks less, and the aftermost jacks did not respond. An attempt to recover the position by releasing air from the forward cylinders was followed by the port jacks slipping; the forward starboard legs then collapsed below the waterline, the hull fell out of level and tore open.\n\nSea Gem broke up and sank within minutes, and the radio room was lost before any distress call could be sent. Nineteen people were picked up by nearby vessels and helicopters; 13 died. The inquiry traced the collapse to failure of tie-bars in the leg-suspension system, whose recovered fractures began at severe notches, weld defects and fatigue cracks in conditions that favoured brittle fracture.',
      what_went_wrong: [
        'Tie-bars in the hull-to-leg suspension system failed and triggered the collapse; the recovered fractures began at severe notches, weld defects and fatigue cracks.',
        'Cold conditions favoured brittle fracture, with the air near 3 degrees C and the steel prone to fracture at the prevailing temperature.',
        'Two tie-bars had already broken in strong wind gusts five weeks earlier; they were replaced, but the remaining tie-bars were only visually checked and passed.',
        'There were essentially no formal offshore structural or operational safety standards for these novel structures in 1965, and accumulated cyclic loading was not understood.',
        'No emergency communication survived the initial failure - the radio room was lost in the collapse, preventing any distress call.'
      ],
      lessons_learned: [
        'Sea Gem was lost to fatigue-cracked, brittle tie-bars at a time with no offshore design code; primary structure must be designed and inspected for material toughness, fatigue and weld quality across every phase, including jacking and towing.',
        'Inspection and certification of offshore structures must be mandatory and independent - a visual check missed the cracks that brought Sea Gem down.',
        'Jacking operations need verified load sharing, sound suspension components and defined environmental operating limits.',
        'Emergency communications must survive the first structural damage, and a single person with clear safety authority (the later Offshore Installation Manager) must own the response.'
      ],
      actions: [
        'The UK government held its first formal offshore safety inquiry, producing the Sea Gem Report (1967) with new structural design guidance.',
        'The Ministry of Power established the first formal offshore oil safety regulations, the precursor to modern UKCS safety law.',
        'The Offshore Installation Manager role, a single person with defined safety authority, was formalised after the loss.'
      ],
      metocean: {
        wave_height_hs: 'Less than 3 m at the start of jack-down (Burke 2013, summarising the 1967 inquiry)',
        wind_speed: 'North-northwesterly; no collapse-time speed stated by Burke (2013)',
        sea_temp: 'Not stated in Burke (2013); air temperature was 3 °C',
        notes: 'The available paper does not describe an acute storm at collapse. It treats accumulated cyclic environmental loading as a possible fatigue mechanism and cold conditions as conducive to brittle fracture; the inquiry\'s immediate initiating failure was in the tie-bars.'
      },
      data_quality: 'Burke (2013) repeatedly says 19 of the 32 crew died, but authoritative accounts establish that 19 were rescued and 13 died. Its abstract also calls the September discovery oil, whereas the discovery was natural gas. Those errors are not propagated here. Burke\'s environmental-load discussion includes author interpretation; it is not presented as a formal inquiry finding.',
      references: [
        { title: 'Report of the Inquiry into the Collapse of the Sea Gem (1967)', type: 'Official inquiry', publisher: 'UK Ministry of Power', year: 1967 },
        { title: 'The Sea Gem: A Story of Material Failure', type: 'Engineering case study', publisher: 'Memorial University, PT-13 Coastal and Ocean Engineering Undergraduate Student Forum', year: 2013, url: 'https://werf-gusto.com/wp-content/uploads/2015/08/524-2055-1-PB.pdf' },
        { title: 'UK Hansard - Parliamentary record of Sea Gem debates', type: 'Parliamentary record', publisher: 'UK Parliament' },
        { title: 'Wikipedia - Sea Gem', type: 'Encyclopedia', url: 'https://en.wikipedia.org/wiki/Sea_Gem' }
      ]
    },

    /* ──────────────────────────────────────────────────
       10. Gunashli Platform No. 10 - 2015
    ─────────────────────────────────────────────────── */
    {
      id: 'gunashli-2015',
      name: 'Gunashli Platform No. 10 Storm Damage and Fire, Caspian Sea',
      year: 2015,
      date: '4 December 2015',
      location: 'Gunashli oil field, Caspian Sea, Azerbaijan',
      lat: 40.47,
      lng: 50.45,
      region: 'Russia and Central Asia',
      platform_type: 'Fixed jacket production platform (SOCAR)',
      operator: 'SOCAR (State Oil Company of the Azerbaijan Republic)',
      weather_event_type: 'storm',
      classification: 'pipeline',
      weather_event: 'Severe Caspian storm - winds 90+ km/h (~50 knots), high seas',
      fatalities: 30,
      persons_on_board: 63,
      survivors: 33,
      infrastructure_impact: 'Partial platform structural collapse; prolonged fire; production platform destroyed',
      image: {
        src: 'images/gunashli-2015-platform-azernews.jpg',
        alt: 'Aerial view of Gunashli Platform No. 10 burning as response vessels operate nearby.',
        caption: 'Gunashli Platform No. 10 burning during response operations.',
        credit: 'Trend News Agency via AzerNews'
      },
      summary: 'A severe Caspian Sea storm on 4 December 2015 caused a gas pipeline / riser to rupture at Gunashli Platform 10, igniting a major fire. The platform partially collapsed. Of about 63 aboard, 33 were rescued; around 30 workers died - 12 bodies recovered and roughly 18 more missing and presumed dead. The event exposed storm-readiness gaps in ageing Caspian offshore infrastructure.',
      executive_summary: 'On 4 December 2015, a severe Caspian Sea winter storm (winds exceeding 90 km/h, estimated seas 4-6 m) caused a gas pipeline to rupture at Gunashli Platform No. 10, igniting a major fire. Part of the platform structure collapsed and a lifeboat fell during evacuation. Of ~63 aboard, 33 were rescued and about 30 died (12 confirmed, ~18 missing/presumed dead) - the deadliest Caspian offshore accident.',
      what_happened: 'On 4 December 2015 a severe Caspian winter storm with winds over 90 km/h and heavy seas struck the ageing Gunashli field, and SOCAR\'s Platform No. 10 came under heavy structural loading.\n\nA gas pipeline or riser connected to the platform ruptured and the escaping gas ignited, starting a large fire. Power was lost, hampering communications and the response, and part of the platform structure collapsed.\n\nEvacuation in the storm was hazardous and a lifeboat fell during lowering; rescue was impeded by the weather. Of about 63 aboard, 33 were rescued and about 30 died - 12 bodies recovered and the rest lost at sea, and the fire burned for days. No official public investigation report has been identified, so the exact failure sequence is not firmly established.',
      what_went_wrong: [
        'An ageing gas pipeline/riser failed under severe storm loading - reporting points to degraded infrastructure, though no official root-cause report has been published.',
        'Crew were still on the platform when the storm struck; storm-readiness procedures did not clearly require timely crew reduction ahead of the forecast extreme weather.',
        'Loss of power alongside the structural emergency hampered communications and the response.',
        'Evacuation in the storm was unsafe and a lifeboat was lost during lowering.',
        'Safety-management and stop-work arrangements at the ageing state-operated facility were reported as inadequate for the conditions.',
      ],
      lessons_learned: [
        'About 30 workers died when an ageing Caspian gas riser failed in a severe storm, igniting a fire on a crewed platform that partly collapsed - the deadliest Caspian offshore accident. Ageing, storm-exposed infrastructure needs disciplined integrity management and conservative pre-storm crew reduction so people are not aboard when a weather-driven failure occurs.',
        'When severe weather is forecast, evacuate non-essential personnel before conditions deteriorate.',
        'Emergency power, isolation and shutdown systems must work independently of main power in a storm.',
        'Lifeboats and other evacuation systems must be maintained and proven for the worst expected local sea state.',
      ],
      actions: [
        'Reporting indicates more conservative crew-evacuation triggers for Caspian platforms were adopted following the disaster.',
        'SOCAR was reported to have begun a structural-integrity review of ageing Caspian infrastructure.',
        'The loss drew international attention to Caspian offshore safety standards and emergency-response (search-and-rescue) capability.',
      ],
      metocean: {
        wave_height_hs: 'Estimated 4-6 m (severe Caspian winter storm)',
        wind_speed: '90+ km/h (~50 knots)',
        notes: 'The Caspian Sea is a closed basin subject to intense winter storms driven by continental Arctic air masses. Storm waves are short-period and steep, imposing large dynamic loads on structures. The Caspian has no sea swell but can develop 5-7 m waves in extreme storms.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'Moderate to low. No official public investigation report has been identified for this casualty. The date, severe-storm context, riser rupture and fire, partial structural collapse, approximate persons aboard (~63), 33 rescued and about 30 fatalities (12 recovered) are consistent across news and NGO reporting. The detailed failure mechanism, maintenance state, systems response and specific post-event regulatory actions are reported or inferred rather than established by a primary investigation, and are flagged accordingly.',
      references: [
        { title: 'Business & Human Rights Resource Centre - Gunashli Platform incident reports', type: 'NGO report', publisher: 'Business & Human Rights Resource Centre', year: 2015 },
        { title: 'Maritime Executive - Gunashli Platform fire coverage', type: 'Industry news', publisher: 'The Maritime Executive' },
        { title: 'Wikipedia - 2015 Caspian Sea oil platform disaster', type: 'Encyclopedia', url: 'https://en.wikipedia.org/wiki/2015_Caspian_Sea_oil_platform_disaster' }
      ]
    },

    /* ──────────────────────────────────────────────────
       11. Hurricane Juan - 1985 (Gulf of Mexico)
    ─────────────────────────────────────────────────── */
    {
      id: 'hurricane-juan-1985',
      name: 'Hurricane Juan - Offshore Vessels',
      year: 1985,
      date: '27-29 October 1985',
      location: 'Central Gulf of Mexico, offshore Louisiana, USA',
      lat: 28.90,
      lng: -89.60,
      region: 'North America',
      platform_type: 'Various - crew boats, supply vessels, rescue capsules, small workboats',
      operator: 'Multiple Gulf of Mexico operators',
      weather_event_type: 'cyclone',
      classification: 'maritime',
      storm_sid: '1985299N25270',
      storm_name: 'JUAN',
      weather_event: 'Hurricane Juan - Category 1, slow-moving and looping - sustained 75-85 knot winds',
      fatalities: 9,
      summary: 'Hurricane Juan was an unusual slow-moving and looping late-season hurricane that struck the central Gulf of Mexico in October 1985. Multiple small offshore vessels and rescue capsules capsized in the heavy seas; 9 offshore workers died. The unusual track caught many operators off guard and exposed the vulnerability of small support craft to even Category 1 hurricanes.',
      executive_summary: 'Hurricane Juan - an unusual slow-moving, looping late-season Category 1 hurricane - struck the central Gulf of Mexico in October 1985, generating prolonged confused seas estimated at 6-8 m. Multiple small offshore crew boats, supply vessels, and rescue capsules capsized in the heavy conditions; 9 offshore workers died.',
      what_happened: 'Hurricane Juan developed rapidly in the Gulf of Mexico in late October 1985 and pursued an erratic, looping path toward coastal Louisiana. Its slow movement generated long-duration high seas and confused swell, particularly dangerous for small craft.\n\nSeveral operators had insufficient time to evacuate support vessels and workboats. On the nights of 27-28 October, multiple vessels foundered: the supply boat Miss Agnes sank and a crew boat capsized; a rig lifeboat/rescue capsule reportedly also overturned in the heavy seas. Some fatalities occurred during attempted rescue operations in the storm itself. Numerous production platforms and moorings were damaged. In total, 9 offshore/maritime workers died.',
      what_went_wrong: [
        'Juan\'s rapid intensification and unusual looping track left insufficient evacuation time - operators underestimated the storm\'s threat to small vessels that could not evade a looping hurricane.',
        'Some crew boats and workboats did not evacuate to port in time; they were caught offshore in conditions beyond their seakeeping limits.',
        'Rescue capsules deployed during the storm encountered wave conditions that exceeded their capsize resistance.',
        'Late-season storm with unusual track received insufficient attention until it was too close to allow safe evacuation of all support assets.',
        'Decision thresholds for vessel evacuation were set too late - waiting for severe conditions rather than acting on storm advisory.'
      ],
      lessons_learned: [
        'A slow, looping Category 1 hurricane generated days of confused seas that capsized small crew boats, workboats and even rescue capsules offshore Louisiana, killing 9. Even a Category 1 storm is lethal to small support craft - evacuate them at the advisory stage, not at a hurricane watch or warning.',
        'Looping and slow-moving storms create extended periods of damaging seas; standard evacuation-time assumptions do not apply.',
        'Rescue capsules and small standby craft are not safe platforms in an active hurricane - move people ashore before conditions require their use.',
        'Pre-season planning must list every vessel that needs an evacuation trigger and set criteria for each, with shore refuges preferred over at-sea rescue.',
      ],
      actions: [
        'Gulf of Mexico operators improved storm tracking and decision-making criteria - adopting earlier evacuation triggers for all vessel types.',
        'BOEMRE (then MMS) updated offshore evacuation planning regulations for hurricane contingency in the Gulf of Mexico.',
        'Probabilistic track forecasting and worst-case scenario planning became part of operator storm plans post-Juan.',
        'Small-vessel storm-readiness assessments introduced as part of annual GoM hurricane preparedness reviews.'
      ],
      metocean: {
        wave_height_hs: 'Estimated 6-8 m significant; some sources report substantially higher peak/individual waves (up to ~21 m) - the higher figure is not independently confirmed here',
        wind_speed: '75-85 knots sustained (Category 1)',
        notes: 'Juan stalled and looped near the Louisiana coastline for an extended period, generating unusually sustained high-sea conditions for a Category 1 storm. The confused sea state from the looping track and near-coastal shoaling made wave conditions particularly dangerous for small craft. Reported wave heights vary widely between sources.'
      },
      references: [
        { title: 'NOAA Historical Hurricane Tracks - Hurricane Juan 1985', type: 'Meteorological archive', publisher: 'NOAA National Hurricane Center' },
        { title: 'UPI news reports - Hurricane Juan offshore casualties, Oct 1985', type: 'News archive', publisher: 'United Press International' }
      ]
    },

    /* ──────────────────────────────────────────────────
       12. Bourbon Dolphin - 2007
    ─────────────────────────────────────────────────── */
    {
      id: 'bourbon-dolphin-2007',
      name: 'Bourbon Dolphin AHTS Capsize During Anchor Handling',
      year: 2007,
      date: '12 April 2007',
      location: 'West of Shetland, UK - Rosebank / Cambo area, Atlantic Margin',
      lat: 60.65,
      lng: -4.50,
      region: 'Europe',
      platform_type: 'Anchor Handling Tug Supply (AHTS) vessel - assisting semi-submersible rig anchor deployment',
      operator: 'Bourbon Offshore (vessel) / Chevron (drilling)',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'Gale conditions - significant waves, strong currents, North Atlantic weather',
      fatalities: 8,
      persons_on_board: 15,
      survivors: 7,
      image: {
        src: 'images/bourbon-dolphin-2007-capsized-response.jpg',
        alt: 'Capsized hull of Bourbon Dolphin partly submerged near a response vessel west of Shetland.',
        caption: 'Capsized Bourbon Dolphin with a response vessel nearby.',
        credit: 'Original photographer and publisher unresolved; supplied from image.dngroup.com. Permission required.'
      },
      summary: 'The AHTS Bourbon Dolphin capsized during anchor-handling operations west of Shetland on 12 April 2007. A heavy anchor chain shifted and imposed an off-centre load that capsized the vessel within minutes. 8 crew died; 7 were rescued. The Norwegian inquiry (NOU 2008:8) found inadequate stability management and safety oversight of an unusually complex anchor-handling task.',
      executive_summary: 'On 12 April 2007, the anchor-handling vessel Bourbon Dolphin capsized west of Shetland during anchor-handling operations for a semi-submersible rig in gale conditions. A heavy anchor chain shifted under tension and imposed a severe off-centre lateral load; the vessel heeled sharply and capsized within minutes. Eight of 15 crew died.',
      what_happened: 'On 12 April 2007, the Bourbon Dolphin was assisting in the deployment of a large anchor for a semi-submersible drilling rig in deep water west of Shetland. Conditions included gale winds and significant Atlantic waves.\n\nDuring a manoeuvre to reposition one of the rig\'s anchors, the anchor chain ran across the stern and shifted position unexpectedly, applying a large off-centre lateral load to the vessel. The AHTS heeled sharply; attempts to restore stability led to a temporary power loss. The vessel capsized within minutes.\n\nNearby vessels recovered 7 survivors. 8 crew died, including the master and his teenage son who was on board as a trainee. The official Norwegian inquiry (NOU 2008:8) documented serious deficiencies in risk assessment, crew competency for the specific task, and the company\'s safety management system.',
      what_went_wrong: [
        'An anchor-handling operation exceeding the vessel\'s designed operational envelope was attempted - the chain load and geometry imposed lateral forces beyond what the vessel\'s stability could safely manage.',
        'The specific risks of this anchor-handling configuration were not risk-assessed - task-specific risk assessment was absent or inadequate.',
        'Crew competency for the particular complexity of the deep-water anchor deployment was insufficient for the conditions encountered.',
        'The company\'s ISM Safety Management System did not include vessel-specific operational limits for anchor-handling tasks.',
        'No real-time stability monitoring or alarms were in place to warn the crew when the vessel\'s stability margin was critically eroded.'
      ],
      lessons_learned: [
        'A shifting anchor chain put a severe off-centre load on an anchor handler already working at the edge of its envelope in a gale, and it capsized within minutes, killing 8 of 15 - including the master\'s teenage son aboard as a trainee. Anchor-handling needs vessel- and task-specific stability limits and real-time awareness of them, not general experience and engine feel.',
        'Crews must have demonstrated competency for the specific deep-water anchor-handling task - general AHTS experience is not enough.',
        'Real-time stability monitoring and load-limit alarms must be fitted to anchor handlers and built into procedures.',
        'The ISM safety management system must carry explicit per-vessel anchor-handling limits, with weather-based go/no-go criteria for each operation.',
      ],
      actions: [
        'Norwegian PSA (Petroleum Safety Authority) issued stricter anchor-handling operational guidelines following NOU 2008:8.',
        'NORSOK and international AHTS design standards updated with stability assessment requirements for anchor-handling load cases.',
        'Maritime authorities required improved onboard stability guidance systems for AHTS vessels - including dynamic loading calculators.',
        'ISM Code requirements clarified to demand vessel-specific anchor-handling limits in Safety Management Systems.'
      ],
      metocean: {
        wave_height_hs: '3-5 m significant (North Atlantic gale)',
        wind_speed: 'Gale force 8-9 (~40-47 knots)',
        notes: 'The west of Shetland area has some of the most demanding metocean conditions in European offshore operations. Strong Atlantic currents and ocean swell combine with local storm winds to create complex sea states with high variability in loading during anchor-handling operations.'
      },
      references: [
        { title: 'NOU 2008:8 - Official Norwegian investigation report on Bourbon Dolphin', type: 'Official inquiry', publisher: 'Norwegian Ministry of Justice', year: 2008 },
        { title: 'Safety4Sea - Bourbon Dolphin case analysis', type: 'Industry review', publisher: 'Safety4Sea' },
        { title: 'Wikipedia - MV Bourbon Dolphin', type: 'Encyclopedia', url: 'https://en.wikipedia.org/wiki/MV_Bourbon_Dolphin' }
      ]
    },

    /* ──────────────────────────────────────────────────
       13. AMBER II / SEA WORKER - 2016
    ─────────────────────────────────────────────────── */
    {
      id: 'amber-sea-worker-2016',
      name: 'AMBER II / SEA WORKER Capsize and Grounding During Tow',
      year: 2016,
      date: '27 January 2016',
      location: 'West Jutland coast, Denmark - 6 nm off Nymindegab',
      lat: 55.85,
      lng: 7.95,
      region: 'Europe',
      platform_type: 'Self-elevating installation platform (SEA WORKER) under tow by AHTS AMBER II',
      operator: 'A2SEA (SEA WORKER); Polskie Ratownictwo (AMBER II)',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'North Sea winter gale - SW winds 16 m/s, Hs 3.5 m, max waves 5-6 m',
      fatalities: 0,
      persons_on_board: 15,
      survivors: 15,
      severity_override: 'notable',
      infrastructure_impact: 'SEA WORKER grounded and declared a total loss',
      image: {
        src: 'images/amber-sea-worker-2016-capsized.jpg',
        alt: 'SEA WORKER capsized at sea after the loss of tow, photographed on 3 February 2016.',
        caption: 'SEA WORKER capsized after the loss of tow, 3 February 2016.',
        credit: 'A2SEA via the DMAIB investigation report. Permission required.'
      },
      summary: 'On 27 January 2016 the towing pennant between AHTS AMBER II and the unmotored jack-up platform SEA WORKER parted in a North Sea winter gale 6 nm off the west coast of Jutland, Denmark. SEA WORKER drifted ashore near Nymindegab and was declared a total loss; all 15 crew were rescued unhurt. The DMAIB found organisational causes: an "out of project" tow with undersized gear, no warranty surveyor, no shock-absorber or tension meter, and a port-of-refuge plan that was never confirmed.',
      executive_summary: 'On 27 January 2016, the towing pennant between AHTS AMBER II and the unmotored jack-up platform SEA WORKER parted in gale conditions (Hs 3.5 m, winds 16 m/s SW) 6 nm off the west Jutland coast while the towage was making for shelter at Horns Rev. SEA WORKER drifted ashore, anchors and emergency towing gear failed to hold, and all 15 crew were evacuated by rescue boat before the platform grounded near Nymindegab and was declared a total loss. No fatalities occurred.',
      what_happened: 'AHTS AMBER II (Maltese flag, 65 t bollard pull, operated by Polskie Ratownictwo) departed Frederikshavn on 24 January 2016 with the unmotored jack-up platform SEA WORKER (A2SEA, Denmark) under tow, bound for Esbjerg - a routine coastal repositioning move planned at 48 hours\' notice as an "out of project" operation, without a charterer or independent warranty surveyor. The towing arrangement lacked a shock-absorbing stretcher and the tug carried no tension meter; the towing pennant had a safe working load of 25 t, though crew believed the bridle limit was 50 t.\n\nAfter rounding the Skaw on the afternoon of 24 January the towage entered open North Sea conditions and immediately lost speed, achieving only 2.5-3.5 knots against head winds and current. By 25 January it was clear the weather window would close before Esbjerg could be reached. The barge master diverted toward Hvide Sande as a port of refuge; a tug was verbally confirmed to assist entry but the agreement was never formalised. When the towage arrived on 26 January the tug had been reassigned, and both pilots consulted independently refused to lead the towage into the port under forecast conditions of 22 m/s winds and 3 m waves. The towage aborted the approach and turned south for Horns Rev, leaving the platform only 6 nm from the shoreline.\n\nDuring the evening of 26 January weather continued to worsen. Waves broke over the bow, tearing life-saving equipment from the deck. At 0030 on 27 January the towing pennant parted due to overload - tug and platform were being pulled in opposite directions across steep near-shore waves, tightening the wire beyond its breaking point at the aluminium clamp. The emergency towing buoy fouled alongside SEA WORKER and could not be recovered by AMBER II. The stern anchor slowed but could not stop the 3-knot drift toward shore. All 15 crew donned immersion suits and were evacuated by the rescue boat EMILIE ROBIN before SEA WORKER grounded near Nymindegab. The platform was subsequently declared a total loss.',
      what_went_wrong: [
        'Undersized towing arrangement for the route - a 65 t bollard-pull tug with a 25 t-SWL pennant and no shock-absorbing stretcher could not hold speed against the head wind and sea, and the pennant fractured by dynamic overload at its weakest point (the aluminium clamp).',
        'No tension meter on AMBER II, so wire load was guessed by limiting engine power to 75% as conditions worsened.',
        'SEA WORKER\'s 2.0 m Hs permit limit was unknown to the crew - it was filed as certification paperwork and never consulted during voyage planning.',
        '"Out of project" operation bypassed normal safeguards - no charterer set operational criteria, there was no independent warranty surveyor, and the barge master inspected the tug himself.',
        'The port-of-refuge plan collapsed and the emergency gear failed: the oral tug-assist agreement at Hvide Sande was never confirmed, both pilots declined to take the tow in, and the emergency towing buoy - stowed rather than streamed - fouled alongside and could not be reconnected.',
      ],
      lessons_learned: [
        'The towing pennant between AMBER II and the unmotored jack-up SEA WORKER parted in a North Sea winter gale 6 nm off Jutland; the platform drifted ashore and was lost, though all 15 aboard were rescued. It was an "out of project" move with undersized gear, no warranty surveyor, no shock-absorber or tension meter, and a port-of-refuge plan that was never confirmed. Size the tow for the actual winter route, and hold routine repositioning moves to the same standard as project tows.',
        'Build the tow for dynamic loads - adequate bollard pull plus a shock-absorbing stretcher and a tension meter - because tug and barge relative motion in short near-shore waves regularly exceeds the static bollard pull.',
        'Operational weather limits must sit in usable on-board documentation and be confirmed before the point of no return, including a fully arranged port of refuge (tug, pilotage and draught).',
        'Stream emergency towing gear at departure rather than stowing it - once the tow parts in heavy weather it cannot reliably be deployed.',
      ],
      actions: [
        'A2SEA removed the in-project / out-of-project distinction - all marine operations are now planned and monitored to one standard, with an external Marine Warranty Surveyor or in-house Marine Superintendent assessing weather-restricted operations before departure (DMAIB preventive measures).',
        'Tug assessment was changed so an independent assessor, not the master, inspects tugs; non-propelled barges towed outside port now require a second safety tug of at least 75% of the lead tug\'s bollard pull.',
        'Emergency towing arrangements on all vessels were re-sized for ease of deployment, with emergency towing drills every three months.',
        'Passage planning now requires documented weather restrictions and contingency plans reviewed jointly by the Marine Superintendent and Master; DMAIB also recommended clearer national guidance on authority between tug and barge masters.',
      ],
      metocean: {
        wave_height_hs: '3.5 m (max waves 5-6 m)',
        wind_speed: '16 m/s (~31 knots) from SW',
        notes: 'SEA WORKER\'s trading permit limited the manned tow to a significant wave height of 2.0 m or less; the crew had independently adopted 2.5 m as their operational limit. Near-shore steep short-period waves imposed higher dynamic loads on the towing pennant than open-sea conditions at the same Hs.'
      },
      references: [
        { title: 'Marine Accident Report: AMBER II and SEA WORKER - Loss of Tow on 27 January 2016', url: 'https://dmaib.com/media/8572/amber-ii-and-sea-worker-loss-of-tow-on-27-january-2016.pdf', type: 'Official accident report', publisher: 'Danish Maritime Accident Investigation Board (DMAIB)', year: 2016 }
      ]
    },

    /* ──────────────────────────────────────────────────
       14. MT Bunga Alpinia Lightning - 2012
    ─────────────────────────────────────────────────── */
    {
      id: 'bunga-alpinia-2012',
      name: 'MT Bunga Alpinia Lightning Explosion',
      year: 2012,
      date: '26 July 2012',
      location: 'Petronas methanol terminal, Labuan Island, offshore Sabah, Malaysia',
      lat: 5.27,
      lng: 115.22,
      region: 'Asia',
      platform_type: 'Oil/chemical tanker (~38,000 DWT) berthed at coastal terminal',
      operator: 'MISC Berhad / Petronas',
      weather_event_type: 'lightning',
      classification: 'coastal',
      weather_event: 'Tropical thunderstorm - direct lightning strike on vessel during loading operations',
      fatalities: 5,
      infrastructure_impact: 'MT Bunga Alpinia declared constructive total loss; terminal infrastructure damaged',
      image: {
        src: 'images/bunga-alpinia-2012-fire.jpg',
        alt: 'MT Bunga Alpinia burning alongside the Petronas methanol terminal at Labuan.',
        caption: 'MT Bunga Alpinia burning at the Labuan methanol terminal, 26 July 2012.',
        credit: 'gCaptain incident coverage; photographer not identified. Permission required.'
      },
      summary: 'On 26 July 2012, a lightning strike hit the MT Bunga Alpinia while the tanker was loading methanol at Labuan terminal, Malaysia. The strike ignited flammable vapours, causing a series of explosions and a massive fire. Five crew members were killed; the ship was destroyed. The incident highlighted critical gaps in lightning risk management during tanker loading operations.',
      executive_summary: 'On 26 July 2012, a lightning strike hit the chemical tanker MT Bunga Alpinia while the vessel was loading methanol at the Labuan terminal in Malaysia during a tropical thunderstorm. The strike ignited flammable methanol vapours in the cargo area, triggering a series of explosions and a devastating fire. Five crew members were killed and the ship was declared a constructive total loss.',
      what_happened: 'On 26 July 2012, a thunderstorm moved across the Labuan area. The MT Bunga Alpinia, a chemical tanker of about 38,000 DWT, was berthed at the Petronas methanol terminal on Labuan Island. During or immediately after loading operations, a lightning bolt struck the ship - apparently the mast or radio antenna area.\n\nThe electrical discharge ignited methanol or hydrocarbon vapours around the cargo area, causing a powerful explosion and fire. The fire spread rapidly across the ship\'s deck and cargo tanks. Emergency response teams attended but the fire was severe and took more than a day to extinguish. Five crew members died in the explosion and ensuing fire; others evacuated. The ship was so severely damaged it was declared a constructive total loss.',
      what_went_wrong: [
        'Loading operations were not suspended during the approach of an active thunderstorm - ignitable vapour was present while the electrical storm risk was active.',
        'Lightning protection measures (bonding, vapour-vent system safeguards) did not prevent ignition.',
        'The ship\'s mast/antenna provided a direct conduction path for the lightning discharge to the cargo vapour environment.',
        'Terminal weather monitoring and alert protocols did not trigger timely suspension of operations before the storm arrived.'
      ],
      lessons_learned: [
        'A lightning strike during methanol loading at Labuan ignited cargo vapour, and the explosion and fire killed five and destroyed the tanker. In a high-lightning tropical region, cargo transfer must stop when an electrical storm is within a defined radius and not resume until it has fully passed - weather limits are a safety barrier, not a delay.',
        'Cargo vapour management (inert gas, vapour return) must be verified operational before and during any loading in thunderstorm-prone regions.',
        'Lightning earthing on tankers must include surge protection for all antenna systems to prevent conduction paths to the cargo deck.',
        'Terminal weather monitoring must include lightning detection with automated alerts to vessel and shore supervisors.',
      ],
      actions: [
        'The Institution of Engineers Malaysia (IEM) published a case study on the incident that is used in Malaysian industry training on weather-operational limits.',
        'Contemporaneous public sources do not document the operator/terminal\'s specific corrective actions as implemented, so none are asserted here.'
      ],
      metocean: {
        wind_speed: 'Thunderstorm squall - localised intense winds',
        notes: 'Labuan, off the northeast coast of Borneo, experiences frequent tropical thunderstorms, particularly during the southwest monsoon transition periods. Thunderstorm frequency in the region is among the highest in the world.'
      },
      data_quality: 'The occurrence (26 July 2012 lightning strike during methanol loading at Labuan, five fatalities, tanker declared a constructive total loss) is corroborated by contemporaneous media and an IEM case study. The ignition source is reported as a lightning strike; the exact ignition path and the operator/terminal\'s specific corrective actions are not established in the cited public sources, so they are not asserted here.',
      references: [
        { title: 'IEM (Institution of Engineers Malaysia) - Bunga Alpinia case study', type: 'Technical paper', publisher: 'IEM Malaysia' },
        { title: 'The Australian / Rigzone - Bunga Alpinia explosion news reports', type: 'News archive', publisher: 'Various media', year: 2012 }
      ]
    },

    /* ──────────────────────────────────────────────────
       15. Key Biscayne - 1983 (no fatalities)
    ─────────────────────────────────────────────────── */
    {
      id: 'key-biscayne-1983',
      name: 'Key Biscayne Jack-up Capsize During Tow',
      year: 1983,
      date: '1 September 1983',
      location: 'Indian Ocean, ~10 nm (19 km) off Ledge Point, Western Australia',
      lat: -31.1667,
      lng: 115.195,
      region: 'Australia',
      platform_type: 'Jack-up drilling rig (under tow)',
      operator: 'Keydril Australia Inc. (operator) / Esso Australia Ltd (charterer)',
      weather_event_type: 'storm',
      classification: 'maritime',
      consequence_tags: ['infrastructure', 'financial', 'asset_loss'],
      weather_event: 'North-westerly gale, force 8, with rough seas and 5-6 m westerly swell off the Western Australian coast',
      fatalities: 0,
      persons_on_board: 52,
      survivors: 52,
      infrastructure_impact: 'Jack-up rig lost during tow - major asset loss despite zero fatalities',
      severity_override: 'major',
      image: {
        src: 'images/key-biscayne-1983-heavy-seas-raaf.jpeg',
        alt: 'Key Biscayne jack-up rig awash in heavy seas during the incident off Western Australia.',
        caption: 'Key Biscayne in heavy seas during the incident off Western Australia.',
        credit: 'Royal Australian Air Force via WreckSploration. Permission required.'
      },
      summary: 'Key Biscayne was under ocean tow from off Darwin to Cockburn Sound for stacking when it met a run of Western Australian winter gales. Towlines parted repeatedly; on 1 September 1983, with one tug left and the rig flooding and rolling heavily, all 52 aboard - 47 of them non-essential drilling crew - were lifted off by RAAF and charter helicopters without injury. The rig capsized overnight and sank inverted in 41 m of water. The inquiry found the real failure was a winter tow planned with too little regard for the weather and the jack-up\'s limited stability.',
      executive_summary: 'On 1 September 1983, the jack-up Key Biscayne foundered about 10 nautical miles off Ledge Point while under ocean tow to Cockburn Sound. A north-westerly force 8 gale, rough seas and 5-6 m westerly swell contributed to a towline failure and loss of directional control. Flooding of the after section then reduced freeboard and the rig\'s already limited positive stability. Timely helicopter evacuation saved all 52 people without injury.',
      what_happened: 'Key Biscayne was a Liberian-flagged jack-up owned by Keydril Australia and chartered by Esso Australia, which had just drilled the dry Torres No 1 well about 180 nautical miles northeast of Darwin. On 17 August 1983 the unpowered rig began an ocean tow down the Western Australian coast to Cockburn Sound for stacking, pulled by the supply vessels Lady Sonia and Atlas Van Diemen with Argus Guard standing by; a marine surveyor had inspected the arrangements and the move was approved. Of the 52 people aboard for the passage, 47 were Keydril drilling crew - drillers, mechanics, cooks and others not needed for the tow - and the inquiry found no reason advanced for carrying a full crew. This was an August/September passage with few refuges south of Shark Bay, and the inquiry concluded that voyage programming took insufficient account of the likely weather and the jack-up\'s limited reserve of positive stability.\n\nThe metocean conditions worsened in stages. On 24 August, both towlines parted in southerly force 4-5 winds, 1.5 m seas and about 3 m south-south-westerly swell. South of Steep Point on 28 August, south-westerly force 6-7 winds, rough seas and 6-7 m south-westerly swell made the rig roll and pitch heavily; both tow connections failed again and the deck was repeatedly awash. Conditions eased temporarily in the shelter between the Abrolhos Islands and the mainland. The report says heavy south-westerly swells common to the Western Australian coast in winter reappeared after the tow cleared that shelter. Bad weather was predicted during the afternoon of 31 August; by midnight the tow was experiencing north-westerly gale-force winds, rough seas and 5-6 m westerly swell. The inquiry does not assess forecast quality or state when a detailed forecast was received, so the evidence supports inadequate seasonal voyage planning rather than a firm conclusion that the meteorological forecast itself was poor.\n\nAt 06:44 on 1 September, Lady Sonia\'s nylon stretcher parted about 30 nautical miles off Lancelin. Atlas Van Diemen retained its connection for roughly 12 more hours, but one tug could not control the rig\'s heading or stop its easterly drift. Key Biscayne pitched and rolled heavily with green water continuously crossing the main deck. Sea water entered the after pump room through the shale-shaker return line and possibly other openings. As the rig settled by the stern, its freeboard and range of positive stability reduced.\n\nThe emergency logistics and helicopter rescue prevented casualties. A PAN was transmitted at 09:17 and upgraded to MAYDAY at 09:28. A charter helicopter was already on scene but initially could not land because of helideck motion. Two defence-force helicopters arrived by 10:50 and began winching personnel off at 11:10; during a lull, the charter helicopter landed and lifted another 10 people. Non-essential personnel were evacuated by 12:30. With darkness approaching and reconnection attempts unsuccessful, the final 10 people left by charter helicopter at 16:20. All 52 people were taken to Lancelin without loss or injury. The inquiry attributed this outcome to the timely decision to evacuate and the skill and courage of the helicopter crews. After the anchor wire and final tow connection parted, the rig foundered about 10 nautical miles off Ledge Point and was later found inverted in 41 m of water.',
      what_went_wrong: [
        'The voyage was programmed for the August/September winter period down a coast with few refuges south of Shark Bay, taking insufficient account of the weather likely to be met and the jack-up\'s limited reserve of positive stability.',
        'Of the 52 aboard, 47 were non-essential Keydril drilling crew carried with no reason advanced beyond "normal operating procedures in transit", and apart from the marine surveyor there was limited marine expertise on the rig - tug crews reported difficulty getting their concerns and reconnection proposals heard.',
        'The towlines parted on three occasions - five failures at the tug-end soft eye of the nylon stretcher, every time in moderate-to-heavy swell - and after the final parting one tug could not control the rig or arrest its drift toward the coast.',
        'Sea water entered the after section via the shale-shaker return line and possibly other openings; the main deck became continuously awash and the range of positive stability fell until the rig could not resist capsize, with watertight-door closure instructions apparently not followed until water was already seen.',
        'The rig was not in its approved ocean-tow configuration - the legs were left at their full 357 ft length rather than reduced to the 324 ft configuration in the operating instructions - and the limits for operating the rig while afloat do not appear to have been met; leg stresses far exceeding the manual\'s caution may also have fractured the hull.',
        'There was no readily available emergency towing arrangement on the rig; short forerunner pennants, low freeboard, restricted bow workspace and remote winches made recovery and reconnection extremely hazardous in rough weather.',
        'No approval for the voyage was sought or obtained from the rig\'s Liberian flag authority - only the Australian approvals to abandon the well and move the rig were held; excessive towing speed early in the passage may have contributed to the first towline partings, though the inquiry found it was not a prime cause of the final parting on 1 September.',
      ],
      lessons_learned: [
        'The real failure was the plan, not the weather: a jack-up with a limited stability margin was towed down the Western Australian coast in the winter gale season, carrying 47 of 52 people who had no need to be aboard. Towlines parted repeatedly, the rig flooded and capsized - yet all 52 were lifted off by helicopter without injury. Plan ocean tows around the season and the route\'s refuges, carry only the people the passage needs, and match the schedule to the unit\'s real stability margin.',
        'Put the rig in its approved ocean-tow configuration and verify it independently before departure - leg length, watertight closures and the afloat operating limits are stability-critical, and small freeboard losses erode a jack-up\'s narrow stability range quickly.',
        'Tow systems need redundancy that can actually be recovered in the forecast sea state: readily available emergency towing gear, workable forerunner and deck-handling arrangements, and enough power for one tug to hold the rig if the other line parts.',
        'Long ocean tows need clear marine command and real marine expertise aboard, with agreed communications between rig and tug masters - and evacuation decided early, before weather or darkness closes the window, as the helicopter crews\' success here showed.',
        'Control and monitor every flood path - process returns such as the shale-shaker line, hatches, doors and any damaged structure - because on a jack-up with a narrow stability range small, unnoticed freeboard losses can quickly remove what margin remains.',
      ],
      actions: [
        'The Australian Department of Transport conducted a preliminary investigation under section 377A(1) of the Navigation Act 1912, supported by a Ship Safety Branch stability analysis.',
        'A bathymetric survey on 8-9 September 1983 confirmed the wreck position; fishermen and divers were warned about wires, metal obstructions and other hazards near the site.',
        'The inquiry addressed construction, watertight integrity, stability, towing arrangements and marine manning. It states that recommendations were made for ocean towing, but their text is not included in the available 19-page report copy.'
      ],
      metocean: {
        wave_height_hs: '5-6 m westerly long-period swell',
        wind_speed: '20-30 knots',
        notes: 'The requested display values are 5-6 m westerly long-period swell and 20-30 knot winds. The official inquiry reports rough seas, 5-6 m westerly swell and a north-westerly force 8 gale, but gives no wave period.'
      },
      data_quality: 'The official preliminary inquiry (Australian Department of Transport, 1983) establishes the sequence, the wreck position (31°10\'S 115°11.7\'E, inverted on top of its legs in 41 m of water), the 47-of-52 non-essential manning and the contributing conditions; the wreck prevented confirmation of all flooding routes, and the available 19-page copy ends at the conclusions without reproducing the recommendation text. A Sarawak Shell lessons-learnt deck (V. Anokhin, 2015) built on the same inquiry was used to cross-check the over-manning finding and the evacuation account; its "about 30 m, on its side" wreck description is superseded by the inquiry\'s 41 m / inverted.',
      references: [
        { title: 'Preliminary Investigation into the Loss of Key Biscayne', type: 'Official government investigation report', publisher: 'Australian Department of Transport, Marine Incident Investigation Unit', url: 'https://wrecksploration.au/wp-content/uploads/2025/05/key-biscayne-inquiry.pdf', file: 'background files/key-biscayne-inquiry.pdf' },
        { title: 'The Key Biscayne', type: 'Wreck history and expedition page', publisher: 'WreckSploration', year: 2025, url: 'https://wrecksploration.au/expeditions/keybiscayne/' },
        { title: 'Lessons Learnt: Key Biscayne Jack-up incident (why is it always easier to blame Metocean, part II)', type: 'Internal lessons-learnt presentation', publisher: 'V. Anokhin, Sarawak Shell Berhad', year: 2015, file: 'background files/Lessons Learnt from Key Biscayne tow-Vadim Anokhin - Final VA.pptx', internal: true }
      ]
    },

    /* ──────────────────────────────────────────────────
       16. Lightning Strike - Middle East Oilfield - 2013
    ─────────────────────────────────────────────────── */
    {
      id: 'lightning-me-2013',
      name: 'Lightning Strike - Middle East Oilfield',
      year: 2013,
      data_quality: 'Unverified - sourced only to an internal Shell LFI bulletin; no independent public corroboration found (2026-07-04 fact-check audit).',
      date: '2013',
      location: 'Onshore oilfield, Middle East (exact country not disclosed)',
      lat: 25.00,
      lng: 50.50,
      region: 'Middle East',
      platform_type: 'Onshore oilfield - contractor personnel at remote worksite',
      operator: 'Undisclosed Middle East operator (Shell learning case)',
      weather_event_type: 'lightning',
      classification: 'onshore',
      weather_event: 'Thunderstorm with direct lightning strike on vehicle radio antenna',
      fatalities: 1,
      persons_on_board: 2,
      survivors: 1,
      summary: 'In 2013, two contractors at an onshore Middle East oilfield were struck by lightning when it hit their vehicle\'s radio antenna as they attempted to evacuate during a thunderstorm. One died instantly; the other was injured. The incident highlighted that vehicles with external metal structures are not safe lightning shelters and that lightning safety protocols must be clear and consistently followed.',
      executive_summary: 'In 2013, lightning struck the radio antenna of a vehicle carrying two contractors at a remote onshore Middle East oilfield during a thunderstorm. One contractor was killed; the other was injured. A vehicle with an external metal antenna is not a safe lightning shelter.',
      what_happened: 'During a thunderstorm at a remote onshore oilfield, two contractors decided to leave their worksite. They got into their mini-van (field vehicle) to drive away from the area. As the storm arrived, lightning struck the vehicle\'s radio antenna.\n\nThe electrical discharge conducted through the vehicle structure and passed through the two occupants. One contractor was killed instantly. The other suffered shock and minor injuries and survived. The incident was documented as a Shell Learning from Incidents (LFI) case and distributed across the industry.',
      what_went_wrong: [
        'The workers did not reach an adequate shelter before the storm - shelter-in-place procedures in a proper lightning-safe building were not followed or available.',
        'A vehicle with a radio antenna is not an adequate lightning shelter - the antenna created a direct conduction path into the cabin.',
        'Lightning safety training and awareness may have been insufficient - personnel did not understand the specific risk of metal antennas on vehicles.',
        'Weather monitoring at the remote site may not have provided adequate advance warning to allow timely evacuation to safe shelter.'
      ],
      lessons_learned: [
        'Personnel must stop work and move to an approved lightning-safe shelter (a fully-enclosed grounded building) when lightning is within a defined radius.',
        'A hard-topped, fully-enclosed metal vehicle offers some lightning protection if occupants avoid contact with conductive or exterior-connected parts (per NOAA guidance) - but it is not a substitute for a proper grounded shelter, and an external antenna provides a direct conduction path that raises the risk.',
        'Remote site lightning safety protocols must be explicit: specify the type of shelter, the detection distance trigger, and the all-clear criteria.',
        'Real-time lightning detection monitoring should be deployed at all remote sites where personnel work in open terrain in thunderstorm-prone regions.'
      ],
      actions: [
        'The source (internal Shell LFI bulletin) records the lessons above as learning points; it does not document the (undisclosed) operator\'s specific corrective actions as implemented, so none are asserted here.'
      ],
      references: [
        { title: 'Shell LFI Report - Lightning Strike at Middle East Oilfield (2013)', type: 'Internal Learning from Incidents bulletin', publisher: 'Shell' }
      ]
    },

     /* ──────────────────────────────────────────────────
       17. ASV Gangway Collapse during disconnection - 2014
     ─────────────────────────────────────────────────── */
    {
      id: 'gumusut-gangway-2014',
      name: 'ASV Gangway Collapse during disconnection',
      year: 2014,
      data_quality: 'Unverified - field/project context is real but the specific event is sourced only to an internal Shell LFI bulletin with no independent public corroboration (2026-07-04 fact-check audit).',
      date: '5 October 2014',
      location: 'Gumusut-Kakap deepwater field, ~120 km offshore Sabah, East Malaysia (1,200 m water depth)',
      lat: 5.8001,
      lng: 114.4116,
      region: 'Asia',
      platform_type: 'Deepwater semi-submersible FPS connected to accommodation flotel by telescopic gangway',
      operator: 'Shell Malaysia / Petronas Carigali',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'Deteriorating weather causing excessive relative motions between connected vessels',
      fatalities: 0,
      infrastructure_impact: 'Gangway structure lost overboard; high potential incident with no personnel on gangway at the time',
      severity_override: 'notable',
      image: {
        src: 'images/gumusut-gangway-2014-safe-astoria.jpeg',
        alt: 'Safe Astoria accommodation unit involved in the Gumusut-Kakap gangway operation.',
        caption: 'Safe Astoria, the accommodation unit involved in the gangway operation.',
        credit: 'Prosafe via Offshore Energy. Permission required.'
      },
      summary: 'On 5 October 2014, the accommodation vessel (flotel) at Gumusut-Kakap was disconnecting from the FPS due to worsening weather. The telescopic gangway linking the two vessels detached and fell into the sea. No one was on the gangway at the critical moment. The incident, classified as a high-potential near-miss, led to a review of gangway disconnect procedures and weather triggers.',
      executive_summary: 'On 5 October 2014, the telescopic gangway connecting the accommodation flotel to the Gumusut-Kakap FPS detached and fell into the sea during vessel disconnection as weather worsened. No personnel were on the gangway at the moment of detachment; no fatalities occurred. The incident was classified as a high-potential near-miss.',
      what_happened: 'On the evening of 5 October 2014, the flotel (accommodation semi-submersible) moored alongside the Gumusut-Kakap FPS was being moved off-location due to deteriorating metocean conditions. At 21:50 local time, as the flotel began to separate from the FPS, the telescopic gangway (connecting bridge) detached at the FPS attachment point and fell into the sea.\n\nThe relative motions between the two vessels in the increasing sea state had exceeded the structural design limits of the gangway or its latching mechanism. No personnel were on the gangway when it fell. The incident was classified as a high-potential event - had anyone been crossing at that moment, or had the gangway swung and struck the FPS structure, serious injuries or fatalities could have occurred.',
      what_went_wrong: [
        'The gangway disconnect was attempted in conditions where relative vessel motions had already become significant - the timing was too late.',
        'The gangway design and operational limits may not have been adequate for the motions encountered during the disconnection manoeuvre in the prevailing sea state.',
        'Weather triggers for early gangway retraction / flotel disconnection were set too conservatively - action came too late in the deteriorating conditions.',
        'Operational procedures did not clearly specify when to cease all gangway use and begin disconnection before the sea state reached design limits.'
      ],
      lessons_learned: [
        'Clear and conservative weather criteria must trigger early gangway retraction and flotel disconnection - well before the sea state reaches the operational limit of the gangway system.',
        'Real-time vessel motion monitoring should be used to predict when gangway limits will be reached and trigger early disconnection.',
        'Gangway systems on floating structures must be designed for the full range of relative motions expected during staged disconnection, not just in calm conditions.',
        'Operating procedures must include explicit go/no-go criteria for gangway use based on measured sea state and relative motion thresholds.'
      ],
      actions: [
        'The source (internal Shell LFI bulletin) records the lessons above as learning points; it does not document specific corrective actions as implemented, so none are asserted here.'
      ],
      references: [
        { title: 'Shell LFI - Gumusut-Kakap Gangway Collapse (2014)', type: 'Internal Learning from Incidents bulletin', publisher: 'Shell Malaysia' }
      ]
    },

    /* ──────────────────────────────────────────────────
       18. Gumusut-Kakap Barge Mooring Failure - 2013
    ─────────────────────────────────────────────────── */
    {
      id: 'gumusut-barge-2013',
      name: 'Drifting Cargo Barge / Tug collision',
      year: 2013,
      data_quality: 'Unverified - field/project context is real but the specific event is sourced only to an internal Shell LFI bulletin with no independent public corroboration (2026-07-04 fact-check audit).',
      date: '2013',
      location: 'Gumusut-Kakap deepwater field, ~120 km offshore Sabah, East Malaysia (1,200 m water depth)',
      lat: 5.8051,
      lng: 114.4166,
      region: 'Asia',
      platform_type: 'Cargo barge (moored offshore) and tugboat in adverse weather',
      operator: 'Shell Malaysia / Petronas Carigali - installation campaign support',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'Adverse weather with heavy seas and strong winds causing barge mooring failure',
      fatalities: 0,
      infrastructure_impact: 'Damage to tug and/or barge during emergency intervention; project delays',
      severity_override: 'informational',
      image: {
        src: 'images/gumusut-barge-2013-collision-damage.jpg',
        alt: 'Damage to the tug and cargo barge after contact in adverse weather at Gumusut-Kakap.',
        caption: 'Damage to the tug and cargo barge after contact in adverse weather.',
        credit: 'Shell internal LFE. Internal/restricted.'
      },
      summary: 'In 2013, during installation support operations at Gumusut-Kakap, adverse weather caused a moored cargo barge\'s lines to part. The barge drifted; a single tug attempted to intervene and collided with the drifting barge in the chaotic conditions. No injuries occurred but the incident had high potential for a major collision with the FPS. It underscored the need for pre-planned storm contingency for moored offshore equipment.',
      executive_summary: 'In 2013, adverse weather caused a cargo barge moored at the Gumusut-Kakap deepwater field to part its mooring lines and drift free. A single tug attempting to intercept the barge collided with it in the difficult sea conditions; no personnel were injured. The incident carried high potential for the drifting barge to strike the FPS.',
      what_happened: 'During an installation campaign at the deepwater Gumusut-Kakap field, a large cargo barge was moored at the site. Heavy seas and strong winds from deteriorating weather put extreme loads on the barge\'s mooring lines, which eventually parted, setting the barge adrift.\n\nA tug in the field moved to intercept the drifting barge and prevent a collision with the FPS or other structures. In the difficult sea conditions, the tug lost control of the situation and came into contact with the barge - the two vessels collided. Minor structural damage resulted but no personnel were injured. The scenario had high potential for the barge to have struck the FPS or for the tug to have capsized.',
      what_went_wrong: [
        'The mooring system for the offshore barge was not designed or set up with adequate safety factors for the storm sea state encountered.',
        'A single tug was insufficient to safely manage a large drifting barge in the prevailing conditions - the intervention itself created a collision scenario.',
        'Pre-storm contingency planning for moored offshore equipment (barges, buoys) was inadequate - no clear procedure for pre-emptive barge repositioning when weather deteriorated.',
        'The threshold for triggering protective action (repositioning the barge before lines parted) was not defined or was too high.'
      ],
      lessons_learned: [
        'Mooring systems for offshore-moored barges and equipment must use conservative design factors accounting for actual storm sea-state return periods at the site.',
        'Emergency response planning must include contingencies for drifting large vessels - pre-position multiple tugs before weather deteriorates to critical levels.',
        'Weather-triggered protocols must mandate securing or towing away moored equipment before mooring failures occur - not as a reactive response.',
        'Emergency responses to drifting vessels in rough seas are inherently dangerous - prevention (early action) is far safer than cure (emergency tug intervention in a storm).'
      ],
      actions: [
        'The source (internal Shell LFI bulletin) records the lessons above as learning points; it does not document specific corrective actions as implemented, so none are asserted here.'
      ],
      references: [
        { title: 'Shell LFI - Gumusut-Kakap Barge Collision (2013)', type: 'Internal Learning from Incidents bulletin', publisher: 'Shell Malaysia' }
      ]
    },

    /* ──────────────────────────────────────────────────
       19. Qarn Alam Onshore Storm - 1996
    ─────────────────────────────────────────────────── */
    {
      id: 'qarn-alam-1996',
      name: 'Qarn Alam Oilfield Camp Storm',
      year: 1996,
      date: '11-12 June 1996 (earlier records gave 16 June)',
      location: 'Qarn Alam oilfield camp, interior Oman',
      lat: 22.03,
      lng: 56.95,
      region: 'Middle East',
      platform_type: 'Onshore oilfield accommodation camp (portacabin/modular units)',
      operator: 'Petroleum Development Oman (PDO)',
      weather_event_type: 'squall',
      classification: 'onshore',
      weather_event: 'Severe summer squall / thunderstorm outflow - documented winds ~39-45 knots (earlier records overstated as 60-80 kt)',
      fatalities: 0,
      persons_on_board: null,
      infrastructure_impact: 'Accommodation/office units damaged or destroyed and personnel injured (figures reported internally as ~20 units destroyed, ~12 injured are not independently corroborated in public sources)',
      severity_override: 'notable',
      summary: 'In June 1996 a sudden summer squall/thunderstorm outflow struck the Qarn Alam oilfield camp in Oman\'s interior, damaging and overturning lightweight portacabin accommodation and office units. Personnel were injured; no fatalities occurred. The documented storm winds were around 39-45 knots; earlier internal accounts overstated both the wind (60-80 kt) and the exact date (16 June vs the documented 11-12 June), and the specific casualty/damage counts are not independently corroborated. The incident nonetheless illustrates that remote desert oilfield camps of lightweight prefabricated structures are vulnerable to convective downburst/squall winds that strike with little warning.',
      executive_summary: 'In June 1996 a summer squall / thunderstorm outflow (documented winds ~39-45 knots) struck the Qarn Alam oilfield camp in interior Oman with little advance warning, damaging and overturning lightweight portacabin units and injuring personnel. No fatalities occurred. Earlier entries overstated the wind (60-80 kt) and date (16 June); the exact casualty and damage counts are not independently corroborated.',
      what_happened: 'In June 1996 a sudden summer squall or thunderstorm outflow struck the Qarn Alam oilfield camp in Oman\'s interior desert with little advance warning. The documented winds were around 39-45 knots - enough to damage and overturn the camp\'s lightweight portacabin accommodation and office units.\n\nPersonnel inside or near the units were injured, some as cabins overturned or by flying debris, but no one was killed. Internal accounts report roughly 20 units destroyed and about 12 people injured, though these figures are not independently corroborated.\n\nThe event showed that remote desert oilfield camps built from lightweight prefabricated structures are vulnerable to convective downburst and squall winds that strike with little warning and little radar coverage to react to.',
      what_went_wrong: [
        'Portacabin structures were not adequately anchored to foundations - they were not designed or secured to resist the extreme wind loads of a downburst.',
        'Weather monitoring at the remote desert camp was insufficient - no radar coverage or lightning/squall detection system was available to provide warning.',
        'There was no formal storm shelter designation or "all personnel to storm shelter" procedure for the camp.',
        'The design of temporary camp structures did not account for extreme-wind loading from convective storm events, which are known in Arabian Peninsula summers.'
      ],
      lessons_learned: [
        'A summer squall of about 39-45 knots overturned lightweight portacabins at a remote Omani desert camp with almost no warning, injuring people but killing none. Temporary camp structures in convection-prone deserts must be anchored for extreme gusts, with a designated storm shelter and local storm detection, because these downbursts arrive in minutes.',
        'All oilfield camps must have designated storm shelters capable of protecting personnel from extreme wind events.',
        'Weather monitoring at remote sites must include storm and lightning detection - radar, satellite alerts or local detection - to give advance warning of convective events.',
        'Emergency procedures for onshore camps must include explicit weather-shelter protocols specifying triggers and actions for squall and storm events.',
      ],
      actions: [
        'PDO updated design specifications for all temporary and permanent onshore camp structures - minimum wind loading criteria established for all structures in Omani desert environments.',
        'Emergency shelter structures (purpose-built storm refuges) constructed at all remote PDO camp locations.',
        'Weather monitoring systems upgraded at remote Omani oilfields, including meteorological radar coverage and automated alert systems.',
        'Industry-wide adoption of improved camp structure anchoring standards - cited in subsequent Shell and PDO internal engineering standards.'
      ],
      metocean: {
        wind_speed: '~39-45 knots documented (earlier entries overstated as 60-80 kt)',
        notes: 'Summer convective squalls/downbursts in the interior of the Arabian Peninsula can generate brief but locally damaging wind gusts. These events are difficult to forecast precisely more than 20-30 minutes ahead. Note: the exact date (documented ~11-12 June 1996), wind speed and casualty/damage figures for this camp event are only partially corroborated in available sources.'
      },
      references: [
        { title: 'PDO (Petroleum Development Oman) - Qarn Alam Storm incident report (1996)', type: 'Incident report', publisher: 'PDO Oman', year: 1996 },
        { title: 'Shell / PDO internal LFI - Qarn Alam Storm 1996', type: 'Internal Learning from Incidents', publisher: 'Shell / PDO' }
      ]
    },

    /* ──────────────────────────────────────────────────
       20. Shell Kulluk Arctic Tow - 2012
    ─────────────────────────────────────────────────── */
    {
      id: 'kulluk-2012',
      name: 'Kulluk Arctic Drilling Barge Tow Grounding',
      year: 2012,
      date: '31 December 2012',
      location: 'Near Sitkalidak Island, Gulf of Alaska, USA',
      lat: 57.20,
      lng: -153.40,
      region: 'North America',
      platform_type: 'Conical Arctic drilling barge (Shell Kulluk) - unmanned during tow',
      operator: 'Shell Offshore Inc. (towed by MV Aiviq)',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'Severe Gulf of Alaska winter storm - sustained winds ~55-60 knots (gusting higher), 10+ m seas, multiple engine failures on tow vessel',
      fatalities: 0,
      infrastructure_impact: 'Kulluk grounded on Sitkalidak Island shoreline; subsequently scrapped. High-profile environmental near-miss; 143,000 gallons of diesel on board',
      severity_override: 'major',
      image: {
        src: 'images/kulluk-2012-grounded-overflight.jpg',
        alt: 'Waves breaking over Kulluk grounded at Sitkalidak Island on 1 January 2013.',
        caption: 'Kulluk aground at Sitkalidak Island, 1 January 2013.',
        credit: 'USCG Petty Officer Jonathan Klingenberg, public domain'
      },
      pack_images: [
        {
          src: 'images/kulluk-2012-tow-aiviq-nanuq.jpg',
          alt: 'The conical drilling barge Kulluk under tow in open water by the anchor handler Aiviq and a second vessel, seen from a Coast Guard helicopter.',
          caption: 'The circular Kulluk under tow by the Aiviq (and tug Nanuq) before the storm - the tow that would repeatedly part in Gulf of Alaska seas (29 December 2012).',
          credit: 'U.S. Coast Guard photo by Petty Officer 1st Class Sara Francis (public domain).'
        },
        {
          src: 'images/kulluk-2012-aground-sitkalidak.jpg',
          alt: 'Kulluk aground in heavy surf against the cliffs of Sitkalidak Island, Alaska.',
          caption: 'Kulluk aground against the cliffs of Sitkalidak Island after the tow failed, with 143,000 gallons of diesel aboard (January 2013).',
          credit: 'U.S. Coast Guard photo by Petty Officer 1st Class Sara Francis (public domain).'
        }
      ],
      summary: 'In late December 2012, Shell\'s Arctic drilling barge Kulluk was being towed from Dutch Harbor, Alaska toward Seattle. A severe winter storm in the Gulf of Alaska caused the tow vessel Aiviq to suffer engine failures; the towline parted repeatedly. On New Year\'s Eve 2012, the unmanned Kulluk ran aground near Kodiak Island. There were no fatalities (and no one aboard the Kulluk), though the NTSB documented four minor injuries among the tow and response crews. The grounding triggered a massive multi-day response to prevent a fuel spill, and Shell subsequently abandoned its Arctic drilling programme.',
      executive_summary: 'In late December 2012, the drilling barge Kulluk broke free from tow during a severe Gulf of Alaska winter storm (NTSB: sustained winds ~55-60 knots, seas over 10 m) after the tow vessel MV Aiviq suffered multiple engine failures. The towline parted repeatedly despite assistance from emergency tugs; on 31 December the unmanned Kulluk grounded on Sitkalidak Island near Kodiak. No one was aboard the Kulluk and there were no fatalities; four minor injuries occurred among the tow/response crews.',
      what_happened: 'On 21 December 2012, the circular conical drilling barge Kulluk departed Dutch Harbor (Unalaska), Alaska under tow by the icebreaking anchor handler MV Aiviq, heading for Seattle for annual maintenance. An investigation later noted the tow timing was influenced in part by a commercial driver - moving the rig out of state before year-end to avoid Alaska state taxes - which contributed to towing in the peak of the storm season.\n\nSix days into the tow, a powerful winter storm struck the Gulf of Alaska with sustained winds of about 55-60 knots (gusting higher) and seas of 10+ metres. The Aiviq suffered multiple engine failures in the storm, leaving it unable to maintain tow. The towline to the Kulluk parted repeatedly despite assistance from emergency tugs. On 31 December 2012, the Kulluk - carrying approximately 143,000 gallons of diesel fuel - ran aground on the rocky shores of Sitkalidak Island.\n\nA major multi-day Coast Guard and commercial salvage response prevented a fuel spill. The rig was eventually refloated but was subsequently sold and scrapped. No personnel were aboard the Kulluk during the tow; the NTSB recorded four minor injuries among the tow and response crews.',
      what_went_wrong: [
        'Commercial pressure to move the rig before year-end drove the decision to tow through the Gulf of Alaska\'s most severe storm season - a business driver overriding operational risk management.',
        'The risk assessment for the tow did not adequately account for extreme North Pacific winter storm scenarios or engine failure contingencies.',
        'The Aiviq\'s fuel system vulnerabilities (which led to engine failures in the storm) were not identified and remedied before the tow.',
        'Backup tug contingency for a catastrophic primary tug failure in remote Alaskan winter conditions was insufficient.',
        'Emergency towline operations in storm conditions proved to be at the limits of available technology and crew capability.'
      ],
      lessons_learned: [
        'Shell towed its Arctic drilling barge out of Alaska at the peak of the storm season, a decision shaped partly by commercial pressure to move it before year-end; a Gulf of Alaska storm crippled the tow vessel, the line parted again and again, and the unmanned Kulluk grounded off Kodiak with 143,000 gallons of diesel aboard. Never let commercial or schedule pressure override a weather-based go/no-go - and plan remote ocean tows for the worst-case storm, not the average.',
        'Arctic and sub-arctic tow risk assessments must be based on worst-case storm scenarios, not average or most-likely conditions.',
        'Tow-vessel mechanical readiness and redundant propulsion must be fully verified before any ocean tow.',
        'Contingency planning for remote ocean tows must assume primary-tug failure, with secondary and tertiary tugs pre-identified and emergency reconnection demonstrated beforehand.',
      ],
      actions: [
        'The USCG investigation recommended improvements to Arctic towing standards, emergency towline protocols and vessel mechanical-readiness verification.',
        'Shell suspended and then ended its Chukchi Sea drilling programme.',
        'BSEE revised Arctic drilling and towing plan requirements, and USCG and classification-society towing guidance for polar and sub-polar waters was strengthened.',
        'The grounding became a landmark case study in commercial pressure applied to hazardous marine operations.',
      ],
      metocean: {
        wave_height_hs: '10+ m (Gulf of Alaska winter storm)',
        wind_speed: '~55-60 knots sustained (NTSB), gusting higher',
        sea_temp: '~3-5 °C',
        notes: 'The Gulf of Alaska is one of the most storm-exposed ocean regions in the world, with some of the highest recorded extra-tropical storm intensities. December-January is the climatological peak of storm frequency and intensity. The Kulluk\'s conical shape was not optimised for towing in those conditions.'
      },
      references: [
        { title: 'NTSB Marine Accident Brief - Grounding of the Mobile Offshore Drilling Unit Kulluk (2014)', type: 'Investigation report', publisher: 'National Transportation Safety Board (NTSB)', year: 2014, url: 'https://www.ntsb.gov/investigations/AccidentReports/Reports/MAB1510.pdf' },
        { title: 'US Coast Guard Marine Board of Investigation - Shell Kulluk Grounding', type: 'Investigation report', publisher: 'US Coast Guard' },
        { title: 'Wikipedia - Kulluk (drilling rig)', type: 'Encyclopedia', url: 'https://en.wikipedia.org/wiki/Kulluk_(drilling_rig)' }
      ]
    },

    /* ──────────────────────────────────────────────────
       21. Shell Nova Scotia Riser Break - 2016
    ─────────────────────────────────────────────────── */
    {
      id: 'nova-scotia-riser-2016',
      name: 'Scotian Slope Drilling Riser Break',
      year: 2016,
      date: 'March 2016',
      location: 'Scotian Slope, offshore Nova Scotia, Canada',
      lat: 43.20,
      lng: -60.30,
      region: 'North America',
      platform_type: 'Deepwater drillship (Stena IceMAX) - drilling riser to seafloor wellhead',
      operator: 'Shell Canada (rig: Stena IceMAX, drillship)',
      weather_event_type: 'storm',
      classification: 'drilling',
      weather_event: 'Severe North Atlantic winter storm forcing rig off station - riser tensioner/anti-recoil failure during disconnect',
      fatalities: 0,
      infrastructure_impact: '2-km section of drilling riser lost to ~2000 m water depth; significant equipment loss and operational downtime',
      severity_override: 'informational',
      image: {
        src: 'images/nova-scotia-riser-2016-stena-icemax.jpg',
        alt: 'Stena IceMAX drillship photographed in Falmouth Bay in 2019.',
        caption: 'Stena IceMAX in Falmouth Bay in 2019, three years after the incident.',
        credit: 'Tim Green (atoach), CC BY 2.0'
      },
      summary: 'In March 2016, a powerful North Atlantic winter storm forced the Shell-contracted drillship Stena IceMAX to move off its well location offshore Nova Scotia. During the emergency disconnect, the riser tensioner / anti-recoil system failed and a ~2-km section of drilling riser parted and sank to ~2000 m depth. The riser had been purged of fluids, so no pollution occurred, and there were no injuries. The event highlighted the criticality of the riser tensioner/anti-recoil system and of timely riser retrieval before storm conditions deteriorate.',
      executive_summary: 'In March 2016, a severe North Atlantic winter storm forced the drillship Stena IceMAX off its well location on the Scotian Slope offshore Nova Scotia. During the disconnect the riser tensioner/anti-recoil system failed, and approximately 2 km of drilling riser parted and sank to ~2000 m depth. No fatalities occurred and no pollution resulted, as the riser had been purged of drilling fluids prior to the storm.',
      what_happened: 'In March 2016, the deepwater drillship Stena IceMAX was operating on the Scotian Slope off Nova Scotia when a major North Atlantic storm system approached. The rig had already disconnected from the well (BOP closed on the wellhead) and moved off location to ride out the storm at a safe distance.\n\nDuring the disconnect sequence the drilling riser\'s tensioner / anti-recoil system failed; combined with the rig\'s motion in the storm and the wave and current forces on the ~2-km string of pipe hanging in the water column, approximately 2 km of riser parted and sank to about 2000 m depth.\n\nBecause the riser had been properly purged of drilling fluids, no pollution resulted. No personnel were injured. Recovery of the riser section required specialist deepwater intervention operations. The incident prompted a review of deepwater riser tensioner/anti-recoil systems and emergency disconnect procedures for North Atlantic storm conditions.',
      what_went_wrong: [
        'The riser tensioner / anti-recoil system failed during the emergency disconnect - the documented technical cause of the riser parting.',
        'The riser was not retrieved before storm conditions became severe enough to impose critical loads on it - the window for recovery was missed or not recognised.',
        'The interaction of large rig offsets (from storm drift) with a 2-km riser string in storm seas imposed loads that exceeded riser/tensioner capacity.',
        'Operational procedures for riser management in advancing severe storm conditions needed clearer "retrieve by this time" thresholds.'
      ],
      lessons_learned: [
        'A North Atlantic storm forced the Stena IceMAX off its Scotian Slope well; during the disconnect the riser tensioner/anti-recoil system failed and about 2 km of riser parted and sank to roughly 2,000 m. Because the riser had been purged there was no pollution and no injuries. Retrieve deepwater risers early - the last safe time is earlier than intuition suggests - and design the disconnect for the full storm-offset case.',
        'Emergency disconnect procedures for risers must account for the full storm-offset scenario, not just normal operational offsets.',
        'Riser design in harsh-environment deepwater programmes must use metocean criteria representative of actual worst-case North Atlantic storm loading.',
        'Post-disconnect riser management (tensioner settings, purging, monitoring) must be a defined emergency procedure with clear personnel responsibilities.',
      ],
      actions: [
        'Shell Canada reviewed riser management procedures and updated storm contingency planning to include riser retrieval triggers at earlier forecast-based thresholds.',
        'Canadian authorities (CNSOPB) issued guidance on deepwater riser management in extreme weather.',
        'API and IADC updated deepwater riser design and operational standards to incorporate extreme-storm loading considerations.',
        'Deepwater operations in the Scotian Slope and other North Atlantic deep-water basins now include site-specific riser disconnect analyses based on local metocean data.'
      ],
      metocean: {
        wave_height_hs: 'Severe North Atlantic winter storm - estimated 8-12 m',
        wind_speed: 'Storm force',
        sea_temp: '~5-8 °C (Scotian Slope March)',
        notes: 'The Scotian Slope is exposed to intense North Atlantic low-pressure systems, particularly in winter. The combination of storm wave height and strong surface currents from the Gulf Stream eddy field can impose very large loads on deepwater risers.'
      },
      references: [
        { title: 'Canadian Press / HuffPost Canada - Shell Nova Scotia riser break (March 2016)', type: 'News report', publisher: 'Canadian Press', year: 2016 },
        { title: 'CNSOPB - Statement on Nova Scotia drilling incident (2016)', type: 'Regulatory statement', publisher: 'Canada-Nova Scotia Offshore Petroleum Board', year: 2016 }
      ]
    },

    /* ──────────────────────────────────────────────────
       22. Skandi Hawk / Safe Astoria - 2011
    ─────────────────────────────────────────────────── */
    {
      id: 'skandi-hawk-2011',
      name: 'Skandi Hawk / Safe Astoria Near-Miss',
      year: 2011,
      data_quality: 'Unverified - no independent source corroborates this event, and the vessel Skandi Hawk (IMO 9480734) was built in 2012, after the stated 2011 date. Date and/or vessel identity are likely erroneous (2026-07-04 fact-check audit).',
      date: '2011',
      location: 'Malampaya Gas Field, South China Sea - offshore northwest Palawan, Philippines',
      lat: 11.36,
      lng: 118.88,
      region: 'Asia',
      platform_type: 'Offshore supply/multipurpose vessel (Skandi Hawk) + semi-submersible flotel (Safe Astoria) at Malampaya platform',
      operator: 'Shell Philippines / SPEX',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'Marginal/near-limit metocean conditions - elevated sea state and wind making station-keeping difficult',
      fatalities: 0,
      infrastructure_impact: 'Minor structural damage; high-potential near-miss with risk of major collision',
      severity_override: 'informational',
      summary: 'In 2011, the offshore supply vessel Skandi Hawk collided with the flotel Safe Astoria, which was moored to the Malampaya gas platform in the Philippines. The collision occurred because the vessel was operating in marginal weather conditions without adequate hazard assessment. No casualties and only minor damage, but the potential for a major accident was high.',
      executive_summary: 'In 2011, the offshore supply vessel Skandi Hawk collided with the flotel Safe Astoria at the Malampaya gas platform, Philippines, while operating near the weather limit of safe vessel operations. No personnel were injured and damage was minor, but the potential for a major collision with the platform was high.',
      what_happened: 'At the Malampaya gas field in the South China Sea, offshore northwest Palawan, the Skandi Hawk, a multi-purpose offshore support vessel, was providing support operations in the vicinity of the fixed platform and the flotel Safe Astoria, which was moored alongside.\n\nMetocean conditions were near the limit of safe vessel operations - elevated sea state and wind were making dynamic positioning station-keeping challenging for the Skandi Hawk. Due to what the subsequent investigation described as "poor planning in marginal conditions", the vessel made unintended contact with the Safe Astoria.\n\nNo personnel were injured and damage was minor, but the incident was classified as a high-potential near-miss: a more severe collision could have damaged the platform or flotel, with potential for hydrocarbon release or structural failure.',
      what_went_wrong: [
        'Operations were planned and executed in metocean conditions near or at the operational limit without adequate hazard assessment specific to the marginal weather.',
        'The decision to proceed with vessel proximity operations in the marginal conditions was not supported by a formal risk assessment.',
        'Dynamic positioning capability in the near-limit conditions may have been insufficient for the precision required near a moored flotel.',
        'SIMOPS (simultaneous operations) planning did not adequately address the collision risk from vessel operations in deteriorating weather.'
      ],
      lessons_learned: [
        'Comprehensive risk assessments must be completed for all vessel operations near platforms and flotels - particularly when weather conditions are near or at operational limits.',
        'Marginal metocean conditions are not just "nearly impossible" - they are qualitatively more hazardous than normal conditions and require heightened pre-job risk assessment.',
        'SIMOPS planning must include weather-based risk escalation criteria: if conditions exceed a defined threshold, vessel proximity operations must be suspended.',
        'Dynamic positioning capability must be explicitly verified against the prevailing and forecast conditions before commencing platform-proximity operations.'
      ],
      actions: [
        'Shell Philippines reviewed SIMOPS procedures for the Malampaya field, implementing weather-based go/no-go criteria for all vessel proximity operations.',
        'Incident used as a safety case study for Shell\'s offshore operations in Southeast Asia - emphasising that "near-limit" conditions require the same risk rigour as extreme conditions.',
        'Vessel weather-operability criteria formalised for all support vessel operations at Malampaya platform.',
        'SIMOPS manuals updated with explicit weather conditions for each type of vessel proximity operation at the site.'
      ],
      metocean: {
        notes: 'The Malampaya platform sits in the South China Sea offshore northwest Palawan. At this exposed open-ocean location, the Northeast Monsoon (November-March) and typhoon season (June-December) regularly generate elevated sea states and strong winds. The remote location and limited shelter make vessel operations particularly sensitive to marginal weather conditions.'
      },
      references: [
        { title: 'Shell safety presentation notes - Skandi Hawk / Safe Astoria near-miss', type: 'Internal safety case study', publisher: 'Shell Philippines' }
      ]
    },

    /* ──────────────────────────────────────────────────
       23. Helicopter Rollover on Helideck - 2009
    ─────────────────────────────────────────────────── */
    {
      id: 'helicopter-rollover-2009',
      name: 'Helicopter Rollover on Offshore Helideck',
      year: 2009,
      data_quality: 'Unverified - no NTSB record or report matches this event as described; it appears to conflate separate Gulf of Mexico helicopter accidents. Details (date, aircraft, mechanism) should be treated as unconfirmed (2026-07-04 fact-check audit).',
      date: '24 December 2009',
      location: 'Gulf of Mexico - Shell deepwater production platform',
      lat: 27.80,
      lng: -90.50,
      region: 'North America',
      platform_type: 'Offshore production platform helideck - Sikorsky S-76C++ medium helicopter',
      operator: 'GoM deepwater platform operator (undisclosed) / contracted helicopter operator',
      weather_event_type: 'squall',
      classification: 'aviation',
      weather_event: 'Strong gusty crosswinds on helideck - gusts 30-50 knots; platform weather measurement equipment inoperative >1 year',
      fatalities: 0,
      persons_on_board: 7,
      survivors: 7,
      image: {
        src: 'images/helicopter-rollover-2009-damaged-s76.jpg',
        alt: 'Sikorsky S-76 C++ lying on its side after dynamic rollover on an offshore helideck.',
        caption: 'Sikorsky S-76 C++ after the helideck rollover.',
        credit: 'Shell internal LFE. Internal/restricted.'
      },
      summary: 'On 24 December 2009, a Sikorsky S-76 helicopter rolled over on a deepwater Gulf of Mexico platform helideck. The pilots were ground-taxiing to reposition when a strong gust hit broadside, causing a dynamic rollover. All 7 occupants survived with only minor injuries. The helicopter was destroyed. Platform weather measurement equipment was inoperative for more than one year, and flight crew did not have current platform wind information.',
      executive_summary: 'On 24 December 2009, a Sikorsky S-76 helicopter suffered a dynamic rollover on a deepwater Gulf of Mexico platform helideck after a gust of 30-50 knots struck the aircraft broadside during a ground-taxi repositioning manoeuvre. The helicopter flipped onto its side with rotors turning, destroying the aircraft. All 7 occupants survived with minor injuries. Platform weather measurement equipment was inoperative for more than one year, and flight crew did not have current platform wind information.',
      what_happened: 'On Christmas Eve 2009, an S-76C++ helicopter landed on a deepwater production platform in the Gulf of Mexico delivering crew change passengers. Upon landing, the pilots decided to reposition the aircraft on the helideck by performing a "ground taxi" - moving on wheels with rotors turning rather than lifting off.\n\nAt this critical moment, a strong gust of 30-50 knots struck the helicopter broadside, catching the tail rotor. The aircraft suffered a dynamic rollover - flipping onto its side on the helideck with the rotor still turning. The fuselage was wrecked in the rollover.\n\nAll 7 occupants - 2 pilots and 5 passengers - were strapped into their seats. They were able to evacuate the overturned aircraft, sustaining only minor injuries. The helicopter was a total write-off.',
      what_went_wrong: [
        'Internal source material states the platform weather measurement equipment was inoperative for more than one year, so flight crew did not have current platform wind information at the time of operations.',
        'The decision to ground-taxi in gusty wind conditions of 30-50 knots was a misjudgement - such conditions make the aircraft particularly vulnerable to a broadside gust during tail-rotor-exposed repositioning.',
        'Flight operations procedures may not have included explicit wind limits for ground-taxi manoeuvres on offshore helidecks.',
        'Wind at the moment of rollover was gusty - the peak gust was not adequately anticipated or assessed before commencing the repositioning manoeuvre.',
        'An alternative - taking off and making a fresh approach at a different orientation - was available but not taken.'
      ],
      lessons_learned: [
        'A Sikorsky S-76 ground-taxiing on a Gulf of Mexico helideck was flipped onto its side by a 30-50 kt broadside gust; all seven belted occupants walked away but the aircraft was destroyed - and the platform\'s wind-measuring equipment had been broken for over a year, so the crew had no current deck wind. Keep helideck anemometers as a maintained safety barrier, and do not ground-taxi in gusty wind - lift off and re-approach at the best wind orientation.',
        'If platform wind monitoring is unavailable, restrict helicopter operations until real-time wind information is restored or an equivalent control is in place.',
        'Set explicit maximum-wind limits for ground-taxi manoeuvres in the flight operations manual, and assess peak gusts - not just mean wind - before any landing or repositioning.',
        'Seatbelts save lives in a dynamic rollover: this incident confirmed that belted occupants survive, so keep them fastened whenever on deck with rotors turning.',
      ],
      actions: [
        'The case was used to reinforce maintenance and restoration priority for the platform weather-measurement systems that support helicopter operations.',
        'The platform operator issued revised guidance for helideck operations in high winds, distributed to all contracted helicopter operators.',
        'Helicopter operators updated pilot training on wind-hazard recognition and revised the S-76 flight operations manuals to include explicit ground-taxi wind limits.',
        'The incident reinforced mandatory seatbelt use for all offshore helicopter passengers at all times.',
      ],
      metocean: {
        alert: 'Platform weather measurement equipment was inoperative for more than one year. Flight crew did not have current platform wind information.',
        wind_speed: 'Gusts 30-50 knots at helideck level',
        notes: 'Gulf of Mexico platforms are exposed to strong wind events from tropical weather systems, cold fronts, and local thunderstorm outflows. Helideck wind conditions can differ significantly from hub-height meteorological observations due to platform wake and flow distortion effects.'
      },
      references: [
        { title: 'Operator LFI bulletin - Helicopter Rollover on Offshore Helideck (Christmas Eve 2009)', type: 'Internal Learning from Incidents bulletin', publisher: 'GoM platform operator / contracted helicopter operator' },
        { title: 'Metocean and Operations - Shell Training (quoted in project lessons file)', type: 'Shell internal document', file: 'background files/metocean in business/001-3 Metocean and Operations.docx', internal: true },
        { title: 'NTSB Aviation Accident - S-76 rollover, Gulf of Mexico, Dec 2009', type: 'Aviation incident report', publisher: 'US National Transportation Safety Board', year: 2010 }
      ]
    },

    /* ══════════════════════════════════════════════════
       INCIDENTS CARRIED OVER FROM PREVIOUS DATABASE (v2.0)
       Sources: earlier research from the live site at
       vdm-ghb.github.io/incidents - 10 additional incidents
       including GoM hurricanes, internal waves, helicopter
    ══════════════════════════════════════════════════ */

    /* ──────────────────────────────────────────────────
       24. Cyclone Orson - North Rankin A - 1989
    ─────────────────────────────────────────────────── */
    {
      id: 'cyclone_orson_1989',
      name: 'Cyclone Orson - North Rankin A',
      year: 1989,
      date: '22-23 April 1989',
      location: 'North Rankin gas field, Carnarvon Basin, NW Australia',
      lat: -19.63,
      lng: 116.1,
      region: 'Australia',
      platform_type: 'Fixed offshore gas production platform',
      operator: 'Woodside Offshore Petroleum Pty Ltd',
      weather_event_type: 'cyclone',
      classification: 'design',
      storm_sid: '1989106S11128',
      storm_name: 'ORSON',
      weather_event: 'Severe Tropical Cyclone Orson - Category 5; 905 hPa and a 249 km/h gust recorded at North Rankin before the anemometers were destroyed',
      fatalities: 0,
      infrastructure_impact: 'North Rankin A remained structurally intact but sustained extensive superficial damage; seabed scour along the gas pipeline to shore required remedial stabilisation works, and storm-monitoring instruments failed.',
      severity_override: 'major',
      image: {
        src: 'images/cyclone-orson-1989-north-rankin-a.png',
        alt: 'North Rankin A gas platform on the Australian North West Shelf.',
        caption: 'North Rankin A gas platform; this context image does not show Cyclone Orson conditions.',
        credit: 'Woodside Energy via CSIROpedia. Permission required.'
      },
      summary: 'Severe Tropical Cyclone Orson passed about 4 km west of North Rankin A just after midnight on 23 April 1989. The platform recorded 905 hPa and a 249 km/h gust, reduced to the 10 m level, before its anemometers were destroyed. About 100 personnel remained after non-essential workers were evacuated and emergency standby vessels moved to safer waters. The platform remained structurally intact but sustained extensive superficial damage; seabed scour along the export gas pipeline required remedial stabilisation. Instrument failures before peak conditions meant that the most severe wind, wave and current values had to be reconstructed or modelled.',
      executive_summary: 'Category 5 Cyclone Orson passed approximately 4 km west of North Rankin A at about 0030 WST on 23 April 1989. North Rankin recorded 905 hPa and a 249 km/h gust before the anemometers were destroyed. The fixed platform remained intact but sustained extensive superficial damage, and scour along the gas pipeline to shore required remedial stabilisation. The event produced a rare offshore dataset while exposing important monitoring and extreme-current modelling limitations.',
      what_happened: 'A tropical low formed in the eastern Timor Sea on 17 April 1989, reached cyclone intensity on 18 April and intensified rapidly to Category 5 late on 20 April. At 1630 UTC on 22 April, approximately 0030 WST on 23 April, Orson\'s centre passed a few kilometres west of North Rankin A at 19.63 S, 116.1 E. Harper, Mason and Bode estimated the closest approach at about 4 km and reported that the platform experienced the eye region for about 40 minutes.\n\nNon-essential workers were evacuated by helicopter and emergency standby vessels moved to safer waters. About 100 personnel remained aboard. The platform recorded a minimum mean-sea-level pressure of 905 hPa and a 249 km/h gust reduced to the 10 m level before the anemometers were destroyed. The Bureau of Meteorology described 905 hPa as the lowest pressure then recorded for an Australian cyclone.\n\nNorth Rankin A was secure after the storm and its main structure remained intact, but it sustained extensive superficial damage. Subsequent assessment found seabed scour along the gas pipeline to shore, leading to remedial stabilisation works. The cyclone also caused failures in the offshore observing system: the Waverider lost radio contact before the peak and other instruments or power supplies failed, leaving the most severe wind, wave and current conditions dependent on engineering reconstruction and numerical modelling.\n\nOrson crossed the coast near Cape Preston about four hours after passing North Rankin. The Bureau recorded a 3.1 m storm surge at Dampier, where the near-low-tide crossing reduced inundation, and estimated approximately US$16 million in 1989 damage. Four fishermen died when Indonesian fishing vessels sank near Ashmore Reef earlier in the cyclone; those deaths are wider-storm context and are not attributed to the North Rankin platform event.',
      what_went_wrong: [
        'The North Rankin anemometers were destroyed during the cyclone, preventing a complete direct wind record through the most severe conditions.',
        'The nearby Waverider lost radio contact before the storm maximum, so peak wave conditions were not directly measured and had to be estimated from modelling and damage assessment.',
        'Failures of industry-standard instruments and offshore/onshore power supplies produced significant data losses during a rare design-level event.',
        'Seabed scour developed along the gas pipeline to shore and required remedial stabilisation after the cyclone.',
        'The combination of tidal flow, background drift, stratification, internal tides and cyclone-driven currents made separation and accurate modelling of extreme current components difficult.'
      ],
      lessons_learned: [
        'Long-term, high-quality offshore observations are essential for calibrating extreme wind, wave and current models, but the monitoring system must itself be designed to survive the event being measured.',
        'Measured, modelled and damage-inferred values must remain clearly distinguished: at North Rankin the modelled peak significant wave height was about 11 m, the estimated maximum wave was 18-19 m, and the approximately 20 m value included runup, short-crested interaction and damage assessment.',
        'A structurally intact platform can still sustain extensive superficial damage and subsea consequences; post-cyclone inspection must include topsides, monitoring systems, seabed and pipeline stability.',
        'Cyclone readiness should combine timely personnel reduction, safe relocation of standby vessels and plans for restoring damaged monitoring and communications systems.',
        'Extreme-current prediction can carry greater uncertainty than wind and wave hindcasting where tides, background currents, stratification and internal tides interact.'
      ],
      actions: [
        'Specify cyclone-monitoring instruments, moorings, telemetry and power supplies for survival beyond standard manufacturer configurations where design-level seas can exceed equipment limits.',
        'Provide redundant local recording and communications paths so loss of radio telemetry does not also remove the underlying observation record.',
        'Trigger post-cyclone inspection of platform systems, weather and ocean instruments, seabed conditions and pipeline stabilisation features before normal operations resume.',
        'Retain event datasets with explicit measured-versus-modelled labels and use them to test coupled wind, wave and current hindcast methods.',
        'Apply conservative uncertainty allowances to extreme-current modelling and investigate higher-order turbulence representations for deepwater cyclone assessments.'
      ],
      metocean: {
        wave_height_hs: 'Modelled peak Hs ~11 m at North Rankin; Hmax estimated 18-19 m; ~20 m including runup/interaction and damage assessment',
        wind_speed: '249 km/h gust at North Rankin, reduced to 10 m level, before anemometer destruction; Bureau best-track maximum 135 knots (10-minute mean)',
        notes: 'North Rankin recorded 905 hPa. The Waverider failed before peak conditions. The modelled Hs of almost 15 m and mean wind of 55.2 m/s were located about 40 km northeast of North Rankin, not at the platform. Modelled peak current near 2.5 m/s was also away from North Rankin and carried substantial uncertainty.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the Bureau chronology, closest-pass timing, 905 hPa pressure, recorded 249 km/h gust, platform status, personnel account, superficial damage and pipeline scour because these are documented in the retained Bureau report and Harper et al. paper. Moderate for peak wind, wave and current magnitudes because instruments failed before or during the maximum; the 11 m Hs, 18-19 m Hmax, approximately 20 m interacting-wave estimate, 55.2 m/s mean wind and approximately 2.5 m/s current are modelled, inferred or located away from North Rankin as stated. The reviewed sources do not substantiate the previous 2 km drilling-rig displacement, support-vessel damage, 1-in-10,000-year return-period claim or specific post-Orson regulatory actions, so those claims were removed.',
      references: [
        { title: 'Severe Tropical Cyclone Orson, 17-23 April 1989', type: 'Official cyclone report', publisher: 'Australian Bureau of Meteorology, Perth Tropical Cyclone Warning Centre', url: 'https://www.bom.gov.au/cyclone/history/pdf/orson.pdf', file: 'background files/orson.pdf', notes: 'Three-page official chronology, best track, North Rankin observations, coastal observations, storm surge and damage estimate.' },
        { title: 'Tropical Cyclone Orson - A Severe Test For Modelling', type: 'Technical conference paper', publisher: 'B. A. Harper, L. B. Mason and L. Bode / Institution of Engineers Australia', year: 1993, url: 'https://www.researchgate.net/publication/356290165_Tropical_Cyclone_Orson_-A_Severe_Test_For_Modelling', file: 'background files/Harper_etal_TCOrson_IEAust_Coasts_1993.pdf', notes: 'Six-page engineering paper covering North Rankin observations, personnel and vessel precautions, platform and pipeline effects, instrument failures, and wind-wave-current hindcasting.' },
        { title: 'Cyclone Orson (1989) - Detailed Evidence Note', type: 'Project source audit', file: 'background files/Orson_1989_Detailed_Incident_Report.md', internal: true, notes: 'Page-cited evidence boundaries distinguishing direct observations, engineering estimates and prospective actions.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       25. West Gamma - 1990
    ─────────────────────────────────────────────────── */
    {
      id: 'west_gamma_1990',
      name: 'West Gamma Jack-up Capsize During Tow',
      year: 1990,
      date: '20-21 August 1990',
      location: 'North Sea, Gorm field, Danish sector (~55°23′N 04°46′E, near pumping station "Bravo 11")',
      lat: 55.38,
      lng: 4.77,
      region: 'Europe',
      platform_type: 'Jack-up accommodation/support rig (under ocean tow)',
      operator: 'Smedvig (rig owner)',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'North Sea full gale (NW Force 9, later Force 9-10) - rig lost its tow and was disabled',
      fatalities: 0,
      persons_on_board: 51,
      survivors: 51,
      severity_override: 'notable',
      infrastructure_impact: 'Total loss - accommodation rig heavily damaged (rescue boats torn off, helideck wrecked, progressive flooding) and later capsized and sank. All 51 aboard rescued.',
      image: {
        src: 'images/west-gamma-1990-listing-in-heavy-seas.webp',
        alt: 'West Gamma jack-up listing heavily in rough North Sea conditions during the casualty response.',
        caption: 'West Gamma listing heavily in rough seas during the casualty response.',
        credit: 'ESVAGT via Mynewsdesk; original photographer not identified. Permission required.'
      },
      summary: 'The West Gamma accommodation jack-up lost its tow in a full North Sea gale on 20-21 August 1990 near the Gorm field, Danish sector, and was progressively disabled - its rescue boats torn off, helideck wrecked, and water filling the decks faster than the pumps could cope. All 51 aboard were rescued, 46 by ESVAGT fast-rescue-boat crews from the standby vessels Esvagt Omega and Esvagt Protector, before the rig capsized and sank. No lives were lost; ESVAGT received the 1991 Leith Offshore Safety Award.',
      executive_summary: 'On the night of 20-21 August 1990 the accommodation jack-up rig West Gamma lost its tow in a full North Sea gale (NW Force 9-10) in the Danish sector near the Gorm field. The heavily damaged rig was evacuated and later capsized and sank, but all 51 people aboard were rescued - 46 by ESVAGT fast rescue boats - with no loss of life. The event became a celebrated mass rescue rather than a fatal accident.',
      what_happened: 'The West Gamma, a jack-up accommodation/support rig, was under ocean tow in the North Sea when it hit a full gale-force storm on 20 August 1990 and lost its tow. It drifted, disabled and heavily damaged, in the Danish sector near the Gorm field (estimated position ~55°23′N 04°46′E, about 8 miles from the "Bravo 11" pumping station). A MAYDAY was received in the early afternoon of 20 August; the liner QE2, some 47 miles away, was asked to divert and act as on-scene rescue commander.\n\nThe gale (NW Force 9, later Force 9-10) tore the rig\'s rescue boats away, wrecked the helideck, and drove water onto the decks faster than the pumps could handle. As the situation deteriorated it was decided to evacuate. Tied in groups of five to six, the crew jumped into the dark sea where fast rescue boats (FRBs) from the standby vessels Esvagt Omega (released from the Danish Dan field) and Esvagt Protector (released from the Gorm field) waited, guided by a helicopter searchlight. Esvagt Omega\'s FRB crew entered the raging sea seven times, also recovering the crew of a capsized rescue boat from another company. All 51 West Gamma crew were saved - 46 by ESVAGT FRBs - and no lives were lost. The rig subsequently capsized and sank. ESVAGT was awarded the 1991 Leith International Conference Offshore Safety Award for the operation.',
      what_went_wrong: [
        'The rig lost its tow in a full gale and could not be kept head-to-sea, leaving it drifting and exposed to beam seas.',
        'The tow configuration - ballast distribution, watertight integrity of hatches and vents, and minimum hull air gap - proved inadequate for the sea conditions, allowing progressive water ingress.',
        'The rig\'s own means of escape were disabled early: the rescue boats were torn off and the helideck wrecked, forcing the crew to enter the sea directly.',
        'Weather planning for the tow did not prevent departure into, or continuation through, rapidly deteriorating North Sea gale conditions.',
        'Jack-up towing at the time was regulated less rigorously than on-location operations; tow-specific stability requirements were not mandatory.'
      ],
      lessons_learned: [
        'West Gamma lost its tow in a full North Sea gale, flooded faster than its pumps could cope, lost its own rescue boats and helideck, and later capsized - yet all 51 aboard were saved, 46 by ESVAGT fast-rescue-boat crews. Jack-up and accommodation-rig tows are a distinct high-risk activity needing tow-specific stability, hard weather limits and dedicated standby rescue vessels, because a rig\'s own escape means may be destroyed early.',
        'Define the maximum allowable wave height and wind for each specific tow in advance; abort or seek safe haven before those limits are approached.',
        'Personal survival equipment and drilled evacuation-into-the-sea procedures are essential when a rig\'s own rescue boats and helideck may be lost early.',
        'Contract weather routing for all ocean tows, with a named person responsible for monitoring the forecast and recommending abort.',
      ],
      actions: [
        'ESVAGT A/S was awarded the "Leith International Conference - Offshore Safety Award 1991" for the West Gamma rescue.',
        'The incident reinforced industry attention on jack-up ocean-tow safety, tow-specific stability approval, and the role of dedicated standby/rescue vessels.',
        'Classification societies and industry bodies (IMCA, IADC) developed operational guidance for jack-up ocean tows covering weather criteria, tow configuration, watertight integrity and minimum crewing.'
      ],
      metocean: {
        wave_height_hs: 'High seas and heavy swell in a NW Force 9-10 gale (precise Hs not recorded in available sources; Force 9-10 typically ~6-9 m)',
        wind_speed: 'NW Force 9, later Force 9-10 (~41-55 knots / 20-28 m/s) per QE2 log',
        sea_temp: '~16-18 °C (August North Sea)',
        notes: 'QE2 master\'s log (Capt. R. W. Warwick, 20 August 1990) records NW Force 9 winds, falling barometer (~1001 mb by 2000), high bow sea and heavy swell. The rig lost its tow, was disabled, and later capsized; all aboard were rescued.'
      },
      references: [
        { title: 'ESVAGT saves 46 from capsizing rig (West Gamma, 21 August 1990)', type: 'Rescuer account / company history', publisher: 'ESVAGT A/S', url: 'https://esvagt.com/services/stories/esvagt-saves-46-from-capsizing-rig/' },
        { title: 'QE2 Log Book extract, 20 August 1990 - Master Capt. Ronald W. Warwick (on-scene rescue commander account)', type: 'Primary source - ship\'s log', publisher: 'Cunard / QE2' },
        { title: 'IMCA guidance on jack-up towing and positioning', type: 'Industry guidance', publisher: 'International Marine Contractors Association (IMCA)' }
      ]
    },

    /* ──────────────────────────────────────────────────
       26. Hurricane Andrew - Gulf of Mexico - 1992
    ─────────────────────────────────────────────────── */
    {
      id: 'hurricane_andrew_1992',
      name: 'Hurricane Andrew - Gulf of Mexico Offshore',
      year: 1992,
      date: '25-26 August 1992',
      location: 'Gulf of Mexico, offshore south-central Louisiana',
      lat: 28.5,
      lng: -90.0,
      region: 'North America',
      platform_type: 'Multiple - fixed platforms, mobile rigs, pipelines',
      operator: 'Multiple GoM offshore operators',
      weather_event_type: 'cyclone',
      classification: 'design',
      storm_sid: '1992230N11325',
      storm_name: 'ANDREW',
      weather_event: 'Hurricane Andrew - Category 4 at GoM impact (Category 5 at Florida landfall)',
      fatalities: 0,
      infrastructure_impact: '~30 platforms destroyed or seriously damaged; multiple pipelines ruptured - triggered first major revision of API RP 2A GoM design criteria',
      severity_override: 'notable',
      summary: 'Hurricane Andrew crossed the Gulf of Mexico in August 1992 after devastating southern Florida as a Category 5. Though primarily remembered for its onshore destruction, Andrew revealed critical inadequacies in GoM offshore platform design criteria. Approximately 30 platforms were destroyed or severely damaged. Pre-storm evacuations prevented any offshore fatalities. Andrew triggered the first comprehensive revision of API RP 2A - the fundamental design standard for Gulf of Mexico platforms - incorporating updated wave and current criteria.',
      executive_summary: 'Hurricane Andrew crossed the Gulf of Mexico in August 1992 as a Category 4 storm; pre-storm evacuations prevented offshore fatalities, but approximately 30 platforms were destroyed or severely damaged and multiple pipelines ruptured. The storm revealed that existing GoM platform design criteria were inadequate in parts of the Gulf.',
      what_happened: 'Hurricane Andrew made landfall in southern Florida on 24 August 1992 as a Category 5 hurricane, then crossed southern Florida and re-entered the Gulf of Mexico. It made a second landfall near Morgan City, Louisiana on 26 August as a Category 3 storm.\n\nThe GoM offshore industry conducted pre-storm evacuations, preventing offshore fatalities. However, the storm exposed the inadequacy of existing platform design criteria. Approximately 30 platforms in the south-central GoM sustained serious structural damage or were destroyed. Multiple pipelines were ruptured or displaced. Post-storm MMS surveys revealed that many fixed platforms had design wave heights below what Andrew actually generated.',
      what_went_wrong: [
        'API RP 2A design criteria for GoM platforms (100-year return period waves) were shown to be inadequate in parts of the Gulf - actual hurricane conditions generated by Andrew exceeded the design basis of multiple platforms.',
        'Pipeline integrity management did not fully account for extreme storm loading - hurricane-induced seabed scour and wave-induced pipe oscillation damaged many pipelines.',
        'Post-storm damage assessment and platform reinstatement procedures were slow due to the scale of damage and lack of pre-planned industry-wide response protocols.',
        'Regulatory inspection requirements did not mandate explicit assessment of existing platform structural adequacy against updated storm loading criteria.'
      ],
      lessons_learned: [
        'Offshore platform design criteria must be regularly reviewed against historical hurricane data and updated when new data shows previous criteria were insufficient. The API RP 2A 100-year wave criteria did not adequately represent the GoM hurricane hazard in all sub-regions.',
        'Mass pre-storm evacuation - implemented before Andrew - is the single most effective measure for preventing hurricane-related offshore fatalities. Trigger criteria and logistics must be pre-established and rehearsed.',
        'Pipeline design and burial depth criteria must account for hurricane-induced seabed mobility and suspended pipe loads, particularly near platform structures.',
        'Post-storm damage assessment protocols - ROV surveys, structural inspection, return-to-operations criteria - must be pre-planned, not developed in the aftermath.',
        'The offshore industry must share post-storm damage data collectively to build the statistical basis for improved design criteria.'
      ],
      actions: [
        'MMS conducted comprehensive post-Andrew damage surveys and required structural reassessment of deficient platforms.',
        'API RP 2A was revised in 1997 (21st edition) with updated GoM wave and current criteria - a fundamental change to platform design standards for the region.',
        'GoM offshore industry developed improved hurricane preparedness and evacuation protocols post-Andrew.',
        'New pipeline design guidance addressed hurricane-induced seabed mobility in shallow GoM areas.',
        'MMS required operators to assess existing platforms against revised API criteria and report non-compliant structures.'
      ],
      metocean: {
        wave_height_hs: '~10-14 m in affected GoM areas',
        wind_speed: 'Sustained 140 mph (121 knots) at Florida landfall; Cat 3-4 intensity across GoM',
        sea_temp: '~29-30 °C',
        notes: 'Andrew\'s offshore GoM impact exposed platforms whose design basis - set under pre-1992 API RP 2A - underestimated the wave heights achievable from major Gulf hurricanes tracking through that region.'
      },
      references: [
        { title: 'API RP 2A-WSD - 21st Edition (1997) - post-Andrew revision', type: 'Industry standard', publisher: 'American Petroleum Institute', year: 1997 },
        { title: 'BSEE Gulf of Mexico Hurricane History', type: 'Regulatory report', publisher: 'Bureau of Safety and Environmental Enforcement', url: 'https://www.bsee.gov/resources-tools/planning-preparedness/hurricane/hurricane-history' }
      ]
    },

    /* ──────────────────────────────────────────────────
       27. Hurricane Ivan - GoM / Taylor Energy MC20 - 2004
    ─────────────────────────────────────────────────── */
    {
      id: 'hurricane_ivan_2004',
      name: 'Hurricane Ivan - GoM / Taylor Energy MC20',
      year: 2004,
      date: '15-16 September 2004',
      location: 'Gulf of Mexico, Mississippi Canyon area, offshore Alabama/Louisiana',
      lat: 28.9,
      lng: -88.0,
      region: 'North America',
      platform_type: 'Multiple fixed platforms and mobile rigs; Taylor Energy MC20 production platform',
      operator: 'Multiple operators; Taylor Energy (MC20)',
      weather_event_type: 'cyclone',
      classification: 'design',
      storm_sid: '2004247N10332',
      storm_name: 'IVAN',
      weather_event: 'Hurricane Ivan - Category 5 peak; Category 4 in GoM; world-record waves',
      fatalities: 0,
      infrastructure_impact: '7 platforms destroyed; 24 significantly damaged; Taylor Energy MC20 collapsed by submarine landslide - 15+ year oil seep',
      severity_override: 'major',
      summary: 'Hurricane Ivan crossed the Gulf of Mexico in September 2004, generating some of the largest waves ever measured there - NRL seabed gauges recorded a ~27.7 m maximum individual wave and ~17.9 m peak significant height. Seven platforms were destroyed and 24 damaged. Taylor Energy\'s MC20 platform was destroyed when storm waves triggered a submarine landslide that buried the well conductors, creating an oil leak that persisted over 15 years with heavily disputed leak-rate estimates. All platforms had been evacuated, preventing fatalities.',
      executive_summary: 'Hurricane Ivan crossed the Gulf of Mexico in September 2004 generating the largest waves ever recorded in the Gulf - an individual maximum wave height of 27.7 m. Seven platforms were destroyed and 24 more damaged; all personnel had been evacuated. Ivan\'s wave loading triggered a submarine landslide that destroyed the Taylor Energy MC20 platform, creating an oil seep that persisted for over 15 years.',
      what_happened: 'Hurricane Ivan formed as a Category 5 hurricane in the Atlantic and crossed the Gulf of Mexico in September 2004, tracking toward the Alabama/Florida Panhandle coast. US Naval Research Laboratory (NRL) bottom-mounted wave gauges recorded a peak significant wave height of ~17.9 m and a maximum individual wave height of ~27.7 m - among the largest waves ever instrumentally measured in the GoM. (These are two different quantities: the 27.7 m figure is a single extreme wave, not a significant wave height, and the two have often been conflated.)\n\nSeven platforms were totally destroyed; 24 more sustained significant structural damage. Nine drilling rigs dragged anchors or were displaced.\n\nThe most consequential long-term damage was at Mississippi Canyon block 20 (MC20). Ivan\'s wave loading triggered a seabed slope failure (submarine landslide) that caused the Taylor Energy MC20 platform to list and ultimately collapse, burying the well conductors under metres of seabed debris. The resulting slow leak from multiple well conductors persisted for over 15 years, ultimately requiring BSEE to mandate installation of a containment system in 2019. The leak rate remained contested - Taylor Energy maintained it was only ~3-5 gallons/day, while a 2019 NOAA-funded study estimated up to ~4,500 gallons/day - and the matter was not cleanly resolved.',
      what_went_wrong: [
        'The wave environment generated by Ivan significantly exceeded the design basis of multiple GoM platforms, even those that had been updated following the 1997 API RP 2A revision post-Andrew.',
        'Submarine slope failure risk at the MC20 site - where soft seabed sediments existed on a gentle slope - was not characterised or incorporated into the platform design and risk assessment.',
        'The collapse of MC20 and burial of well conductors created an unprecedented scenario for which no regulatory framework or operator contingency plan existed.',
        'Mooring failures and anchor drag on multiple rigs revealed that mooring design criteria for the deep GoM did not fully account for extreme wave-current combinations from large Category 4-5 hurricanes.',
        'Post-storm debris from collapsed platforms created additional navigation and infrastructure hazards in the area.'
      ],
      lessons_learned: [
        'GoM platform design criteria must be revisited after every major hurricane, using the full post-storm metocean dataset to update the statistical model of the extreme environment.',
        'Geotechnical hazard assessment for offshore platform sites must specifically include submarine slope failure risk under storm wave loading - particularly at sites with soft seabed on gentle slopes.',
        'Well conductor and casing integrity design must ensure that wells remain controllable even if the topside structure is destroyed; the MC20 scenario (buried, inaccessible conductors leaking for years) must be explicitly planned against.',
        'Ensemble hurricane track forecasting and probabilistic wave forecasting must be used for evacuation decision-making - the largest GoM wave environments come from rare, slow-moving Category 4-5 systems.',
        'Post-storm response plans must address not only immediate structural damage but also long-term environmental and well integrity consequences of catastrophic platform loss.'
      ],
      actions: [
        'BSEE conducted extensive post-Ivan damage surveys and required operators to reassess platform adequacy against updated criteria.',
        'API RP 2A further revised (post-Ivan and Katrina) to incorporate new extreme metocean data and mandate site-specific wave analysis for high-consequence platforms.',
        'NOAA substantially upgraded its deep-GoM wave buoy network following Ivan.',
        'BSEE eventually installed a containment dome over the MC20 seabed in 2019, after 15 years of leakage - the longest offshore oil-well incident in US history.',
        'Improved guidance on site-specific geotechnical hazard assessment for GoM platforms issued, including assessment of submarine landslide susceptibility.'
      ],
      metocean: {
        wave_height_hs: '~17.9 m peak significant wave height (NRL gauges); maximum individual wave height ~27.7 m',
        wind_speed: 'Category 5 peak (~165 mph / 143 kn) in the Caribbean; ~140 mph (Category 4) crossing the GoM',
        sea_temp: '~30 °C',
        notes: 'The 27.7 m figure frequently cited for Ivan is a maximum individual wave height measured by US Naval Research Laboratory seabed gauges - not a significant wave height. The peak Hs measured was ~17.9 m. These distinct quantities have often been conflated (and mis-attributed to NOAA buoy 42001). Conditions were nonetheless well beyond any prior GoM design basis.'
      },
      references: [
        { title: 'BSEE Gulf of Mexico Hurricane History - Ivan', type: 'Regulatory report', publisher: 'Bureau of Safety and Environmental Enforcement', url: 'https://www.bsee.gov/resources-tools/planning-preparedness/hurricane/hurricane-history' },
        { title: 'NOAA Taylor Energy MC20 - Incident information', type: 'Environmental response record', publisher: 'NOAA Office of Response and Restoration', url: 'https://response.restoration.noaa.gov/oil-and-chemical-spills/significant-incidents/taylor-energy-platform' },
        { title: 'NOAA NDBC - Hurricane Ivan extreme waves buoy data', type: 'Oceanographic measurement record', publisher: 'National Data Buoy Center / NOAA', url: 'https://www.ndbc.noaa.gov' }
      ]
    },

    /* ──────────────────────────────────────────────────
       28. Hurricane Katrina - GoM Offshore - 2005
    ─────────────────────────────────────────────────── */
    {
      id: 'hurricane_katrina_2005',
      name: 'Hurricane Katrina - GoM Offshore',
      year: 2005,
      date: '29 August 2005',
      location: 'Gulf of Mexico, offshore Louisiana and Mississippi',
      lat: 29.0,
      lng: -89.5,
      region: 'North America',
      platform_type: 'Multiple - fixed platforms, mobile rigs, FPSOs, pipelines',
      operator: 'Multiple GoM offshore operators',
      weather_event_type: 'cyclone',
      classification: 'design',
      weather_event: 'Hurricane Katrina - Category 5 peak; Category 3 at Louisiana landfall',
      storm_sid: '2005236N23285',
      storm_name: 'KATRINA',
      fatalities: 0,
      infrastructure_impact: '47 platforms totally destroyed; 20+ major structural damage; hundreds of pipeline damage reports (the widely-cited 457 figure is the combined 2005 Katrina + Rita season total) - among the largest offshore infrastructure loss events on record',
      severity_override: 'critical',
      image: {
        src: 'images/hurricane-katrina-2005-mars-platform-damage.jpg',
        alt: 'Shell Mars tension-leg platform after Hurricane Katrina, with its drilling derrick toppled across the topsides.',
        caption: 'Shell Mars TLP after Hurricane Katrina. This is one documented platform consequence within the wider regional damage record, not a depiction of all Katrina losses.',
        credit: 'Original photographer and licence unresolved. Permission required; retained as reference-only.'
      },
      summary: 'Hurricane Katrina - the costliest natural disaster in US history - devastated GoM offshore infrastructure on 29 August 2005: 47 platforms destroyed and nine drilling rigs sank or ran aground. Pre-storm mass evacuation of approximately 90,000 workers prevented offshore fatalities. Combined with Hurricane Rita three weeks later, the 2005 season caused approximately US$6 billion in offshore damage (and a combined ~457 pipeline damage reports) and forced a fundamental rethink of GoM platform design standards.',
      executive_summary: 'Hurricane Katrina made landfall on the Louisiana coast on 29 August 2005 (Category 5 peak over the Gulf); mass evacuation of ~90,000 workers prevented offshore fatalities, but 47 platforms were destroyed and over 20 sustained major damage. Pipeline damage across the 2005 season (Katrina and Rita combined) ran to some 457 reports. There were no confirmed offshore fatalities from Katrina.',
      what_happened: 'The Gulf of Mexico offshore industry conducted the largest offshore evacuation in history in the days before Katrina\'s arrival - approximately 90,000 workers were removed from platforms and rigs. This operational success prevented mass casualties from what became one of the most damaging storms in GoM offshore history.\n\nKatrina made landfall on the Louisiana/Mississippi coast on 29 August 2005 as a Category 3 storm (having reached Category 5 intensity over the Gulf). Wave heights on the continental shelf reached 10-12 m with 3-5 m storm surge; deep-water Hs exceeded 15 m. Forty-seven platforms were totally lost; over 20 more had severe damage. Nine rigs ran aground on the coastline. Hundreds of pipeline damage reports (the ~457 figure spans the combined Katrina + Rita season) caused prolonged production shutdowns contributing to US energy supply disruptions lasting months.\n\nThanks to the completed evacuation there were no confirmed offshore fatalities attributable to Katrina.',
      what_went_wrong: [
        'Despite post-Andrew revisions to API RP 2A, large numbers of existing GoM platforms still had design wave heights below those generated by Katrina - the structural inventory was not sufficiently robust for Category 4-5 hurricanes in the south-central GoM.',
        'Evacuation tracking for small marine units (liftboats, barges) was historically less rigorous than for major platforms - a recognised gap, even though the 2005 evacuation ultimately avoided offshore fatalities.',
        'Pipeline routing and burial standards in shallow GoM areas were insufficient to prevent mass damage from hurricane-induced seabed scour and wave-induced oscillation.',
        'Post-storm reinstatement planning - the sequence for safely reconnecting hundreds of damaged platforms and pipelines - was not pre-planned at industry level; restoring a system of this scale had not been exercised.',
        'The combined impact of Katrina (29 August) and Rita (24 September) was not incorporated as a credible planning scenario - assets damaged by Katrina were hit again by Rita before they could be assessed.'
      ],
      lessons_learned: [
        'Mass pre-storm evacuation of offshore platforms - conducted systematically with clear trigger criteria and tracked to 100% completion - is the most effective hurricane safety measure available. No exceptions for any vessel type including liftboats.',
        'All offshore assets including small liftboats, barges, and marine vessels must have hurricane evacuation plans and be tracked in regulator and operator evacuation systems.',
        'Pipeline integrity and burial depth design in shallow GoM must be based on extreme hurricane sea-state loading, not operational loading.',
        'GoM post-storm reinstatement must be planned as a system-level exercise - not platform by platform - with pre-planned industry and regulatory coordination.',
        'Regulators must maintain an updated structural adequacy register identifying platforms below current design criteria, enabling post-storm structural risk to be prioritised rapidly.'
      ],
      actions: [
        'BSEE published the most comprehensive post-storm damage statistics ever assembled for GoM offshore infrastructure.',
        'API RP 2A further revised with post-Katrina metocean data - more stringent design requirements for GoM platforms introduced.',
        'MMS/BSEE implemented Gulf of Mexico Hurricane Planning Guidance requiring operators to file hurricane plans and demonstrate evacuation readiness.',
        'Pipeline inspection and repair requirements strengthened following the post-Katrina damage assessment.'
      ],
      metocean: {
        wave_height_hs: '~15-17 m deep GoM; ~10-12 m on shelf',
        wind_speed: 'Sustained 175 mph (152 knots) at peak; 125 mph (108 knots) at Louisiana landfall',
        sea_temp: '~30 °C',
        notes: 'Katrina generated the most damaging wave-surge combination ever recorded for GoM offshore infrastructure. The storm surge of 3-5 m in shallow shelf areas amplified structural loads on low-air-gap platforms and caused wave-seabed interaction damage to pipelines across a vast area.'
      },
      references: [
        { title: 'BSEE Gulf of Mexico Hurricane History - Katrina', type: 'Regulatory report', publisher: 'Bureau of Safety and Environmental Enforcement', url: 'https://www.bsee.gov/resources-tools/planning-preparedness/hurricane/hurricane-history' },
        { title: 'MMS - Impact of 2005 Hurricanes on Gulf of Mexico Oil and Gas Production (2006)', type: 'Government report', publisher: 'Minerals Management Service (now BSEE)', year: 2006 }
      ]
    },

    /* ──────────────────────────────────────────────────
       Ocean Warwick — Hurricane Katrina MODU adrift — 2005
    ─────────────────────────────────────────────────── */
    {
      id: 'ocean-warwick-katrina-2005',
      name: 'Ocean Warwick Jack-up Set Adrift and Grounded During Hurricane Katrina',
      year: 2005,
      date: '29-31 August 2005',
      location: 'Gulf of Mexico - broke free from its Louisiana-shelf location and grounded on Dauphin Island, Alabama',
      lat: 30.25,
      lng: -88.13,
      location_precision: 'Presentation point is the reported grounding site on Dauphin Island, Alabama. News accounts report the unit was carried roughly 66 miles (about 106 km) from its Gulf location to the island; the exact pre-storm drilling location and a surveyed grounding coordinate were not retrieved.',
      region: 'North America',
      platform_type: 'Mat-supported self-elevating drilling unit (jack-up), owned by Diamond Offshore Drilling',
      operator: 'Diamond Offshore Drilling (rig owner)',
      weather_event_type: 'cyclone',
      classification: 'maritime',
      storm_sid: '2005236N23285',
      storm_name: 'KATRINA',
      weather_event: 'Hurricane Katrina - Category 5 peak in the Gulf of Mexico; Category 3 at Louisiana landfall on 29 August 2005',
      fatalities: 0,
      persons_on_board: 0,
      infrastructure_impact: 'The unmanned jack-up was driven off its Gulf location by Hurricane Katrina, drifted roughly 66 miles (about 106 km) and grounded on Dauphin Island, Alabama, where aerial photographs on 30-31 August 2005 showed it aground in shallow water with significant damage. It became one of the most widely photographed images of Katrina\'s impact on the offshore industry.',
      image: {
        src: 'images/ocean-warwick-katrina-2005-slate.jpg',
        alt: 'News photograph of the Ocean Warwick jack-up drilling rig grounded on the Dauphin Island shoreline after Hurricane Katrina.',
        caption: 'The Ocean Warwick jack-up aground at Dauphin Island, Alabama, after being carried across the Gulf by Hurricane Katrina, late August 2005. News image; not independently dated within this project.',
        credit: 'Slate (compote.slate.com); originating photographer and agency unresolved. Copyrighted - permission required, reference use only.'
      },
      summary: 'During Hurricane Katrina the mat-supported jack-up Ocean Warwick (Diamond Offshore) was driven off its Gulf location and carried roughly 66 miles before grounding on Dauphin Island, Alabama (30-31 August 2005). Evacuated beforehand, it caused no injuries but was a heavily damaged total loss - one of the clearest examples of the 2004-2005 pattern of mobile drilling units set adrift by Gulf hurricanes.',
      executive_summary: 'The Diamond Offshore jack-up Ocean Warwick was set adrift by Hurricane Katrina and grounded on Dauphin Island, Alabama, roughly 66 miles from its Gulf location, around 30-31 August 2005. Evacuated in advance, it caused no casualties but was heavily damaged. The event is part of the broader 2004-2005 pattern of MODUs going adrift in Gulf hurricanes (Ivan 2004; Katrina and Rita 2005), which MMS-commissioned engineering studies chronicled and which drove changes to MODU mooring and hurricane-season preparation practice. Basin-wide, MMS reported Katrina and Rita together destroyed at least 113 platforms and severely damaged dozens more.',
      what_happened: 'Ocean Warwick was a mat-supported self-elevating drilling unit (jack-up) owned by Diamond Offshore Drilling and working in the Gulf of Mexico off Louisiana. Like other mobile units, it was evacuated ahead of Hurricane Katrina, which crossed the Gulf as a Category 5 storm before making landfall near the Louisiana-Mississippi border on 29 August 2005 as a Category 3.\n\nDuring the storm the unmanned rig was driven off its location and carried across the Gulf. Aerial surveys on 30-31 August 2005 located it aground on Dauphin Island, Alabama - contemporary news reports describe it as having been carried roughly 66 miles from its Gulf position - stuck in shallow water near the island with significant damage. Photographs of the rig grounded against the Alabama shoreline became among the most recognisable images of Katrina\'s offshore impact.\n\nThe Ocean Warwick loss was one instance of a wider phenomenon in the 2004-2005 seasons: mobile offshore drilling units - jack-ups driven off location and moored semi-submersibles whose mooring lines failed - going adrift in Gulf hurricanes. MMS-commissioned engineering studies of Hurricane Ivan (2004) and of Katrina and Rita (2005) chronicled these incidents, several of which involved rigs dragging or breaking free and colliding with, or drifting toward, other infrastructure.',
      what_went_wrong: [
        'The mat-supported jack-up Ocean Warwick could not hold its Gulf of Mexico location in Hurricane Katrina and was driven off station and carried roughly 66 miles (about 106 km) before grounding on Dauphin Island, Alabama.',
        'Station-keeping and storm-survival provisions for mobile units in the 2004-2005 Gulf hurricanes were not adequate for the wind, wave and surge loads experienced, contributing to a broader pattern of MODUs set adrift.',
        'Drifting rigs posed a secondary hazard to pipelines, fixed platforms and the shoreline; the wider MMS studies documented cases of adrift MODUs interacting with other infrastructure.',
        'Because Ocean Warwick was evacuated in advance, the consequence was asset loss and grounding rather than casualties - the safety-critical control that worked here was timely evacuation, not the unit staying on location.'
      ],
      lessons_learned: [
        'Hurricane Katrina drove the unmanned jack-up Ocean Warwick off its Gulf location and about 66 miles onto a Dauphin Island beach - a total-loss grounding with zero casualties precisely because it had been evacuated. Timely, complete evacuation is the decisive life-safety control; station-keeping for mobile units must also be assessed against realistic hurricane loads, since the 2004-2005 seasons set many MODUs adrift.',
        'An adrift MODU is a mobile hazard to pipelines, platforms and the coast; hurricane planning must consider drift paths and secondary-collision risk.',
        'Mobile-unit station-keeping (jack-up leg and soil capacity, semi-submersible mooring) must be designed to realistic hurricane wind, wave and current loads, not lower routine criteria.',
        'Single-season, fleet-wide vulnerability must be planned for; MMS post-event studies of Ivan, Katrina and Rita drove revised MODU mooring and hurricane-preparation guidance.',
      ],
      actions: [
        'MMS commissioned engineering studies of MODU performance in Hurricane Ivan (e.g. OTC-18322, 2006) and of the Katrina/Rita MODU drift and damage, chronicling the incidents and informing mooring and preparation guidance.',
        'The industry and regulator reviewed and strengthened MODU mooring criteria and hurricane-season preparation practice following the 2004-2005 seasons (including API mooring guidance updates).',
        'MMS published combined Katrina/Rita damage statistics (at least 113 platforms destroyed and dozens severely damaged), the most comprehensive record of 2005 hurricane impacts on Gulf infrastructure.'
      ],
      metocean: {
        wave_height_hs: '~15-17 m in the deep Gulf during Katrina; lower but still severe on the shelf where the unit was located (basin-scale values from the Katrina record, not a measurement at the rig).',
        wind_speed: 'Katrina sustained ~175 mph (152 kn) at Gulf peak; ~125 mph (108 kn) at Louisiana landfall.',
        sea_temp: '~30 °C Gulf surface (seasonal).',
        notes: 'The weather driver is Hurricane Katrina. Ocean Warwick was one of several mobile units set adrift; no wind or wave instrument record at the unit itself was retrieved, and the metocean values are basin/landfall figures from authoritative hurricane summaries.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the asset (Diamond Offshore jack-up Ocean Warwick), the grounding on Dauphin Island, Alabama around 30-31 August 2005, and zero casualties (evacuated), because these are supported by contemporary 2005 news reporting and wire-service imagery and analysed in Cruz & Krausmann (2008). Moderate for the roughly 66-mile drift distance (news accounts). Not established: the exact pre-storm drilling location, a surveyed grounding coordinate, and any wind/wave measurement at the unit. Note: the same rig was separately damaged on location in Hurricane Ivan (September 2004) per MMS report 548aa (multi-node leg failures, repairable, did not travel) - a distinct earlier event; the Ivan MMS studies cited here are MODU-adrift context and rig background, not evidence of the Katrina grounding.',
      references: [
        { title: 'Texas firm\'s oil rig carried 66 miles by Katrina to Alabama beach', type: 'News report', publisher: 'Associated Press / Plainview Herald', year: 2005, url: 'https://www.myplainview.com/news/article/Texas-firm-s-oil-rig-carried-66-miles-by-Katrina-8626991.php', notes: 'Reports aerial photographs (30 August 2005) of the Ocean Warwick aground in shallow water off Dauphin Island after being carried about 66 miles.' },
        { title: 'Diamond jack-up found', type: 'Industry news report', publisher: 'Upstream Online', year: 2005, url: 'https://www.upstreamonline.com/online/diamond-jack-up-found/1-1-1031357', notes: 'Reports the Diamond Offshore jack-up ran aground on Dauphin Island with significant damage.' },
        { title: 'Katrina brings oil platform to Dauphin Island', type: 'Public-radio news report', publisher: 'Alabama Public Radio', year: 2005, url: 'https://www.apr.org/2005-08-31/katrina-brings-oil-platform-to-dauphin-island', notes: 'Contemporary local coverage of the Ocean Warwick grounding on Dauphin Island, 31 August 2005.' },
        { title: 'MODU Performance in Hurricane Ivan (OTC-18322)', type: 'MMS-commissioned engineering study', publisher: 'Offshore Technology Conference / U.S. Minerals Management Service', year: 2006, url: 'https://onepetro.org/OTCONF/proceedings/06OTC/06OTC/OTC-18322-MS/30015', notes: 'MMS-commissioned study of MODU incidents in Hurricane Ivan (2004). Cited here as broader MODU-adrift context, not as a source for the Katrina 2005 grounding.' },
        { title: 'Post Mortem Failure Assessment of MODUs During Hurricane Ivan (TAP)', type: 'Regulator technical assessment', publisher: 'MMS/BSEE Technical Assessment Program', url: 'https://www.bsee.gov/sites/bsee.gov/files/tap-technical-assessment-program/548aa.pdf', file: 'background files/MMS_MODU_Hurricane_Ivan_Post_Mortem_548aa.pdf', notes: 'MMS Hurricane Ivan (2004) post-mortem (downloaded). Its "Ocean Warwick" entry documents this rig\'s EARLIER on-location Ivan damage (multi-node failures in 3 legs, buckled starboard preload-tank bulkhead, wellhead impaled on hull, all 3 jackhouses damaged - repairable, did NOT travel) - a separate event about 11 months before the Katrina grounding recorded here. Cited as rig background and MODU context, not as evidence of the Katrina grounding.' },
        { title: 'Damage to offshore oil and gas facilities following hurricanes Katrina and Rita', type: 'Peer-reviewed analysis', publisher: 'Cruz & Krausmann, Journal of Loss Prevention in the Process Industries (ScienceDirect)', year: 2008, url: 'https://www.sciencedirect.com/science/article/pii/S0950423008000314', notes: 'Analyses Katrina/Rita damage to offshore facilities, including mobile units set adrift.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       GoM 2004-2005 Hurricanes — moored MODUs adrift (thematic)
    ─────────────────────────────────────────────────── */
    {
      id: 'gom-modu-mooring-adrift-2004-2005',
      name: '2004-2005 GoM Hurricanes - Moored MODUs Set Adrift and Mooring-System Failures',
      year: 2005,
      date: 'September 2004 (Ivan); August-September 2005 (Katrina and Rita)',
      location: 'Gulf of Mexico - deepwater and shelf drilling areas',
      lat: 27.5,
      lng: -90.5,
      location_precision: 'Thematic/aggregate record spanning many mobile units across the Gulf of Mexico in three hurricanes. The plotted point is a nominal central-GoM presentation location, not a single casualty position.',
      region: 'North America',
      platform_type: 'Mobile offshore drilling units (MODUs) - primarily moored semi-submersibles; jack-ups driven off location (e.g. Ocean Warwick) are a related off-station mechanism',
      operator: 'Multiple drilling contractors and Gulf of Mexico operators',
      weather_event_type: 'cyclone',
      classification: 'maritime',
      weather_event: 'Hurricanes Ivan (September 2004), Katrina (late August 2005) and Rita (late September 2005) - successive intense Gulf of Mexico hurricanes',
      fatalities: 0,
      infrastructure_impact: 'Mooring-system failures caused 16 deepwater MODUs to go adrift across Hurricanes Ivan, Katrina and Rita (MMS-sponsored OTRC study). Industry reporting records that of the moored MODUs standing in each storm\'s path, 6 broke free in Katrina and 13 in Rita; across Ivan, Katrina and Rita a total of about 21 MODUs suffered complete or partial mooring failures. Drifting units dragged anchors across, and in cases collided with or threatened, pipelines and fixed and floating production infrastructure. This mobile-unit toll was in addition to fixed-platform destruction - MMS reported Katrina and Rita together destroyed at least 113 platforms.',
      image: {
        src: 'images/gom-modu-ensco64-adrift-ivan-2004-mms.jpg',
        alt: 'Aerial photograph of the ENSCO 64 jack-up drilling rig adrift and damaged in the open Gulf of Mexico after Hurricane Ivan.',
        caption: 'The jack-up ENSCO 64 adrift and heavily damaged about 40 miles from its location during recovery after Hurricane Ivan (2004) - a worked example of the 2004-2005 pattern of mobile drilling units set adrift by Gulf hurricanes. Figure 34 of the MMS/BSEE post-mortem MODU assessment.',
        credit: 'U.S. Minerals Management Service (MMS) / BSEE, "Post Mortem Failure Assessment of MODUs During Hurricane Ivan" (Order No. 0105PO39221), Figure 34. U.S. Government work - public domain; attribute to MMS/BSEE.'
      },
      summary: 'In Hurricanes Ivan (2004), Katrina and Rita (2005), mooring-system failures set 16 deepwater MODUs adrift (6 broke free in Katrina, 13 in Rita; about 21 suffered mooring failures overall). Evacuated units meant no direct casualties, but drifting rigs dragged anchors and threatened pipelines and platforms. The pattern drove MMS studies and revised API MODU mooring and hurricane-preparation guidance. Thematic record; the Ocean Warwick grounding is documented separately.',
      executive_summary: 'Hurricanes Ivan (2004), Katrina and Rita (2005) exposed a systemic weakness in moored-MODU station-keeping in the Gulf of Mexico. Mooring failures set 16 deepwater MODUs adrift across the three storms (MMS-sponsored OTRC study); industry reporting records 6 moored MODUs breaking free in Katrina and 13 in Rita, with roughly 21 MODUs suffering complete or partial mooring failures overall. Drifting units dragged anchors and collided with or threatened pipelines and production facilities. No direct fatalities resulted because units were evacuated, but the events prompted a joint industry project, MMS-commissioned post-mortem engineering studies, and strengthened API mooring design and hurricane-preparation criteria. Documented separately: the Ocean Warwick jack-up driven off location and grounded at Dauphin Island in Katrina.',
      what_happened: 'Between 2004 and 2005 three intense hurricanes crossed the Gulf of Mexico drilling areas: Ivan (September 2004), Katrina (late August 2005) and Rita (late September 2005). Moored MODUs - mainly semi-submersible drilling rigs held on station by spread-mooring systems - repeatedly lost station-keeping when mooring lines and anchor/foundation components failed under hurricane wind, wave and current loading.\n\nAn MMS-sponsored Offshore Technology Research Center (OTRC) study, "No MODUs Adrift", reported that mooring-system failures caused 16 deepwater MODUs to go adrift across Ivan, Katrina and Rita. Industry (IADC) reporting records that of the moored MODUs in each storm\'s path, 6 broke free under Katrina and 13 under Rita; a 2007 Offshore Technology Conference paper reported that Ivan, Katrina and Rita together left about 21 MODUs having suffered complete or partial mooring failures.\n\nThe MMS Hurricane Ivan post-mortem gives the Ivan (2004) breakdown: five semi-submersibles parted moorings and four went adrift, while the only jack-up lost was the Ensco 64 (all three legs failed and the derrick and substructure collapsed onto the pipe deck; the hull floated off and was found about 40 miles from location). It found that, for every semi that broke its moorings, the failure was an expected outcome once the actual Ivan winds, waves and currents were compared with the mooring design condition. Ivan also destroyed 7 platforms, badly damaged 33 more and impacted 162 pipeline segments; earlier Gulf storms had shown the same pattern (about five MODUs went adrift in Hurricane Andrew in 1992, one toppling two fixed platforms and causing pipeline failures from dragging anchors).\n\nA drifting MODU is a large, uncontrolled hazard: it can drag its anchors across and damage pipelines and subsea systems, and can collide with fixed or floating production platforms and transportation hubs. Because the units were evacuated ahead of the storms, these events produced asset losses and significant secondary risk to infrastructure rather than direct casualties. In parallel, jack-ups were driven off location or toppled (the Ocean Warwick jack-up was carried about 66 miles and grounded on Dauphin Island in Katrina; that event is recorded separately).\n\nThe scale and repetition of the mooring failures prompted a joint industry project (JIP) to strengthen MODU moorings before the following hurricane season, MMS-commissioned post-mortem engineering studies of Ivan and of Katrina/Rita, and a review of whether API mooring design criteria were adequate - leading to revised API station-keeping guidance and interim Gulf-of-Mexico hurricane-mooring criteria.',
      what_went_wrong: [
        'Moored-MODU mooring systems (lines, connectors and anchor/foundation components) were not designed for the wind, wave and current loads of successive intense Gulf hurricanes, and failed - setting 16 deepwater MODUs adrift across Ivan, Katrina and Rita.',
        'The failures were widespread, not isolated: industry reporting records 6 moored MODUs breaking free in Katrina and 13 in Rita, with about 21 MODUs suffering complete or partial mooring failures across the three storms.',
        'A drifting MODU became a mobile hazard to critical infrastructure, dragging anchors across pipelines and colliding with or threatening fixed and floating production systems and transportation hubs.',
        'Existing API mooring design criteria for MODUs in the Gulf hurricane season proved insufficient, and no reliable means existed to prevent a drift-off after a mooring failure or to slow or stop an already-drifting unit.',
        'The vulnerability was cumulative across a short window (Lili 2002, then Ivan 2004, then Katrina and Rita 2005), yet mooring criteria had not been revised quickly enough between seasons.'
      ],
      lessons_learned: [
        'Moored-MODU station-keeping must be designed against realistic hurricane metocean loads for the Gulf of Mexico, not lower routine or single-event criteria; the repeated 2004-2005 failures showed the previous basis was inadequate.',
        'Mooring reliability is a whole-system problem: lines, connectors and anchor/foundation capacity must all be assessed for progressive-failure behaviour, because loss of a few components can cascade to total loss of station.',
        'An adrift MODU is a fleet-level and infrastructure-level hazard - hurricane planning must consider drift paths, anchor-drag damage to pipelines, and collision risk to nearby platforms, not just the survival of the individual unit.',
        'Timely evacuation remains the decisive life-safety control: the 2004-2005 mooring failures caused asset and infrastructure loss but no direct fatalities because units were unmanned.',
        'Single-season, multi-storm exposure must drive prompt between-season revision of design and preparation standards, supported by post-event data capture (GPS drift tracks, mooring-failure forensics, hindcast metocean).',
        'Mooring-component quality and traceability are the practical weak point: with mooring lines 2-3 miles long, several components are suspected of having failed below their design load, so the MMS post-mortem called for enhanced quality systems, component traceability and discard criteria for pre-laid and rig moorings.'
      ],
      actions: [
        'The Minerals Management Service (MMS) commissioned engineering studies of MODU performance in Hurricane Ivan (OTC-18322) and post-mortem analyses of MODUs in Katrina and Rita, chronicling the failures and informing revised criteria.',
        'An MMS-sponsored Offshore Technology Research Center project, "No MODUs Adrift" (final report C188, 2008), developed technical options to prevent a MODU going adrift after a mooring failure and to slow or stop an already-drifting unit.',
        'A joint industry project (JIP) assessed methods to strengthen MODU mooring systems before the next hurricane season and reviewed whether API mooring design criteria should be increased.',
        'The American Petroleum Institute revised station-keeping guidance (API RP 2SK) and issued interim Gulf-of-Mexico hurricane-mooring criteria (e.g. API 2INT-MOU) to raise MODU mooring design and preparation standards.',
        'For jack-ups, API developed Recommended Practice RP95J ("Gulf of Mexico Jackup Optimization during Hurricane Season"), raising air-gap requirements (up to about 61 ft), requiring operator soil and metocean information and stricter adherence to operating-manual design limits, and adding a satellite-tracking requirement on storm abandonment so a drifted-off jack-up can be located.'
      ],
      metocean: {
        wave_height_hs: 'Hurricane-scale seas across all three storms; Ivan produced measured significant wave heights up to ~17.9 m in the deep Gulf (with a ~27.7 m maximum individual wave), and Katrina/Rita generated comparably extreme deepwater seas. Values are storm-scale, not measurements at individual units.',
        wind_speed: 'Category 3-5 hurricane winds in the Gulf: Ivan, Katrina and Rita each reached major-hurricane intensity offshore.',
        sea_temp: '~30 °C Gulf surface (seasonal).',
        notes: 'The weather driver is three successive intense Gulf of Mexico hurricanes. The distinctive metocean lesson is station-keeping/mooring failure of floating mobile units under hurricane wind-wave-current loading, which is separate from the fixed-platform wave/surge destruction captured in the basin-wide Ivan, Katrina and Rita records.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the core figures - 16 deepwater MODUs adrift across Ivan/Katrina/Rita (MMS-sponsored OTRC study), 6 moored MODUs breaking free in Katrina and 13 in Rita (IADC), about 21 MODUs with complete or partial mooring failures (OTC-18900), and the resulting MMS studies, JIP and API guidance revisions - because these are stated in MMS-commissioned engineering studies, an Offshore Technology Conference paper and IADC industry reporting. The zero-direct-fatalities characterisation reflects that MODUs were evacuated ahead of the storms; this is a thematic/aggregate record rather than a single-asset casualty. Not established here: a complete per-unit list of the adrift MODUs, individual drift distances, and unit-level metocean measurements. Some counts are reported on slightly different bases (deepwater vs all moored MODUs; adrift vs mooring-failure), and are attributed to their specific sources rather than merged.',
      references: [
        { title: 'No MODUs Adrift (final report C188)', type: 'MMS-sponsored engineering study', publisher: 'Offshore Technology Research Center (Ward, Zhang, Kim, Aubeny, Gilbert) / U.S. Minerals Management Service', year: 2008, url: 'https://otrc.tamu.edu/research/publications/risers-and-moorings/no-modus-adrift/', notes: 'States mooring-system failures caused 16 deepwater MODUs to go adrift during Hurricanes Ivan, Katrina and Rita, and the infrastructure hazards of drifting units.' },
        { title: 'MODU Performance in Hurricane Ivan (OTC-18322)', type: 'MMS-commissioned engineering study', publisher: 'Offshore Technology Conference / U.S. Minerals Management Service', year: 2006, url: 'https://onepetro.org/OTCONF/proceedings/06OTC/06OTC/OTC-18322-MS/30015', notes: 'Chronicles MODU incidents (including units set adrift) in Hurricane Ivan.' },
        { title: 'Improved Moored MODU Design Codes for Hurricane Season (OTC-18900)', type: 'Technical conference paper', publisher: 'Offshore Technology Conference', year: 2007, url: 'https://onepetro.org/OTCONF/proceedings/07OTC/07OTC/OTC-18900-MS/37304', notes: 'Reports that Ivan, Katrina and Rita (2004-2005) resulted in about 21 MODUs suffering complete or partial mooring failures, and improved moored-MODU design codes.' },
        { title: 'Post-Mortem Analysis of MODUs in Hurricanes Katrina and Rita', type: 'Technical analysis (JPT)', publisher: 'Journal of Petroleum Technology / SPE', year: 2010, url: 'https://onepetro.org/JPT/article/62/02/57/194180/Post-Mortem-Analysis-of-MODUs-in-Hurricanes', notes: 'Post-mortem analysis of moored MODUs in Katrina and Rita.' },
        { title: 'Drilling ahead: hurricane MODU mooring failures', type: 'Industry reporting', publisher: 'IADC Drilling Contractor (Jan/Feb 2006)', year: 2006, url: 'https://iadc.org/dcpi/dc-janfeb06/Jan06-ahead.pdf', notes: 'Reports 14 moored MODUs in Katrina\'s path and 16 in Rita\'s, with 6 breaking free under Katrina and 13 under Rita.' },
        { title: 'Damage to offshore oil and gas facilities following hurricanes Katrina and Rita', type: 'Peer-reviewed analysis', publisher: 'Cruz & Krausmann, Journal of Loss Prevention in the Process Industries (ScienceDirect)', year: 2008, url: 'https://www.sciencedirect.com/science/article/pii/S0950423008000314', notes: 'Analyses Katrina/Rita offshore damage, including mobile units set adrift.' },
        { title: 'Post Mortem Failure Assessment of MODUs During Hurricane Ivan (TAP)', type: 'Regulator technical assessment', publisher: 'MMS/BSEE Technical Assessment Program', url: 'https://www.bsee.gov/sites/bsee.gov/files/tap-technical-assessment-program/548aa.pdf', file: 'background files/MMS_MODU_Hurricane_Ivan_Post_Mortem_548aa.pdf', notes: 'MMS Hurricane Ivan (2004) post-mortem (downloaded and analysed). Gives the Ivan breakdown (5 semis parted moorings, 4 adrift; only jack-up lost = Ensco 64), the finding that broken moorings were an expected outcome once actual metocean exceeded the mooring design condition, mooring quality-control conclusions, and the resulting API RP95J jack-up guidance. Source of the Ensco 64 adrift photograph (Figure 34).' }
      ]
    },

    /* ──────────────────────────────────────────────────
       29. Hurricane Rita - GoM Offshore - 2005
    ─────────────────────────────────────────────────── */
    {
      id: 'hurricane_rita_2005',
      name: 'Hurricane Rita - GoM Offshore',
      year: 2005,
      date: '24 September 2005',
      location: 'Gulf of Mexico, offshore western Louisiana and Texas',
      lat: 29.3,
      lng: -92.5,
      region: 'North America',
      platform_type: 'Multiple - fixed platforms, mobile rigs, pipelines',
      operator: 'Multiple GoM offshore operators',
      weather_event_type: 'cyclone',
      classification: 'design',
      storm_sid: '2005261N21290',
      storm_name: 'RITA',
      weather_event: 'Hurricane Rita - Category 5 peak (4th most intense Atlantic hurricane on record); Category 3 at landfall',
      fatalities: 0,
      infrastructure_impact: '69 platforms totally destroyed; 32 platforms major structural damage - combined with Katrina: ~115 platforms lost in 25 days',
      severity_override: 'major',
      summary: 'Hurricane Rita struck just 25 days after Katrina, hitting infrastructure in the western GoM that had not yet been assessed from Katrina. Rita destroyed 69 more platforms and seriously damaged 32 - bringing the combined 2005 two-storm total to approximately 115 platforms lost and over 150 damaged. The speed of successive events overwhelmed industry reinstatement capability and demonstrated that multi-storm season planning is essential for GoM operations.',
      executive_summary: 'Hurricane Rita struck the western Gulf of Mexico just 25 days after Katrina, destroying 69 more platforms and seriously damaging 32 - bringing the combined 2005 total to approximately 115 platforms lost. The offshore workforce was re-evacuated; no offshore fatalities occurred.',
      what_happened: 'Less than a month after Katrina\'s devastation, Hurricane Rita rapidly intensified to Category 5 - briefly one of the most intense Atlantic hurricanes on record - and tracked through the western Gulf of Mexico. The offshore workforce was re-evacuated to the western GoM as Rita approached. Rita made landfall near the Texas-Louisiana border on 24 September 2005.\n\nSixty-nine additional platforms were totally destroyed; 32 more sustained major structural damage. The combined 2005 season total of approximately 115 platforms destroyed exceeded the aggregate loss from any previous individual hurricane season. Production impacts were severe and prolonged, with energy supply disruptions continuing through late 2005 and into 2006.',
      what_went_wrong: [
        'A second major hurricane striking GoM infrastructure within weeks of the first was not incorporated into hurricane season risk planning or response capacity calculations - the combined impact overwhelmed industry reinstatement capability.',
        'Platforms in the western GoM designed to pre-Andrew criteria that remained "conditionally acceptable" were destroyed by Rita - conditional acceptability deferrals had not been resolved.',
        'Post-Katrina response resources were concentrated in the central GoM and could not be rapidly redeployed to the western GoM Rita impact zone.',
        'The sequential evacuation-reinstatement-re-evacuation cycle within 30 days created significant workforce fatigue and logistical difficulty.'
      ],
      lessons_learned: [
        'Hurricane season risk planning must account for multiple major hurricanes in a single season. The GoM is geographically vulnerable to sequential storms on different tracks impacting different portions of the offshore infrastructure.',
        'Reinstatement and response resource capacity must be sized for a multi-storm season scenario - not a single-event assumption.',
        'Platform structural adequacy assessment programmes must be completed, not deferred - conditional acceptability decisions must have hard deadlines enforced by regulators.',
        'Workforce management plans for sustained multi-event hurricane seasons must address workforce fatigue, logistics, and sequential evacuation demands.'
      ],
      actions: [
        'BSEE published combined Katrina/Rita damage statistics - the most comprehensive record of hurricane impacts on GoM offshore infrastructure.',
        'MMS/BSEE accelerated platform structural adequacy reassessment programmes after the 2005 season.',
        'Industry developed improved multi-event hurricane preparedness frameworks.',
        'API and BSEE reviewed GoM design criteria further in light of the combined Katrina/Rita damage dataset.'
      ],
      metocean: {
        wave_height_hs: '~12-15 m deep GoM',
        wind_speed: 'Sustained 180 mph (156 knots) at peak; Category 3 at landfall',
        sea_temp: '~30 °C',
        notes: 'Rita\'s impact zone - the western GoM and Texas shelf - had not experienced a direct major hurricane strike in many years and had proportionally more platforms operating below current API design standards than the central GoM.'
      },
      references: [
        { title: 'BSEE Hurricane Rita - Platforms/Rigs Damaged/Destroyed', type: 'Regulatory report', publisher: 'Bureau of Safety and Environmental Enforcement', url: 'https://www.bsee.gov/resources-tools/planning-preparedness/hurricane/hurricane-history/rita' },
        { title: 'MMS - Impact of 2005 Hurricanes on GoM Production (2006)', type: 'Government report', publisher: 'Minerals Management Service (now BSEE)', year: 2006 }
      ]
    },

    {
      id: 'typhoon-tlp-capsize-rita-2005',
      name: 'Typhoon Mini-TLP Capsize During Hurricane Rita',
      year: 2005,
      date: '23 September 2005',
      location: 'Green Canyon Block 237, Gulf of Mexico; found capsized and grounded in Eugene Island Block 271',
      lat: 27.73156398,
      lng: -91.11114852,
      location_precision: 'BSEE platform-structure coordinates for A (Typhoon TLP) in GC 237 (NAD27), used as the approximate capsize point. The investigation reports the post-storm grounding in EI 271 but provides no coordinates for that location.',
      region: 'North America',
      platform_type: 'Single-column mini tension-leg platform (TLP)',
      operator: 'Chevron U.S.A. Inc.',
      weather_event_type: 'cyclone',
      classification: 'design',
      storm_sid: '2005261N21290',
      storm_name: 'RITA',
      weather_event: 'Hurricane Rita; local Typhoon conditions estimated by site hindcast, distinct from Rita\'s basin-wide Category 5 peak',
      fatalities: 0,
      persons_on_board: 0,
      image: {
        src: 'images/typhoon-tlp-boem-context.jpg',
        alt: 'BOEM-hosted photograph of the Typhoon mini-TLP in Green Canyon.',
        caption: 'BOEM/BOEM-OPA context photograph of Typhoon in Green Canyon, not a view of Hurricane Rita damage. The BOEM description dates it 8 January 2004, while Flickr metadata records 19 April 2006.',
        credit: 'BOEM-OPA, courtesy of Chevron USA; CC BY-SA 2.0'
      },
      images: [
        {
          src: 'images/typhoon-tlp-boem-context.jpg',
          alt: 'BOEM-hosted photograph of the Typhoon mini-TLP in Green Canyon.',
          caption: 'Before: BOEM/BOEM-OPA context photograph of Typhoon in Green Canyon, not a view of Hurricane Rita damage. The BOEM description dates it 8 January 2004, while Flickr metadata records 19 April 2006.',
          credit: 'BOEM-OPA, courtesy of Chevron USA; CC BY-SA 2.0'
        },
        {
          src: 'images/typhoon-tlp-capsized-rita-dngroup.webp',
          alt: 'The Typhoon tension-leg platform floating capsized in the Gulf of Mexico after Hurricane Rita.',
          caption: 'After: the Typhoon platform adrift and capsized following Hurricane Rita, September 2005.',
          credit: 'DN Group / NHST (Upstream Online); photographer unresolved; permission required'
        }
      ],
      infrastructure_impact: 'Complete loss of the TLP. Found capsized, upside down and grounded in Eugene Island Block 271; no fatalities. The structure was later deployed as an artificial reef in Eugene Island Block 367.',
      summary: 'The operator\'s Typhoon mini-TLP was evacuated and shut in ahead of Hurricane Rita. After the storm, the platform was found upside down and grounded roughly 46 miles from Rita\'s eye track. The MMS/BSEE-hosted investigation identified loss of integrity in the pontoon-1 bottom-connector system, particularly the load shoulders in piles 1 and 2, as the most probable cause of capsize. It did not establish why those shoulders overloaded. There were no fatalities; the structure was later removed and deployed as an artificial reef.',
      executive_summary: 'Typhoon was evacuated before Hurricane Rita and found capsized in Green Canyon after the storm. A federal incident report identified bottom-connector/load-shoulder failure on pontoon 1 as the most probable cause, while leaving the initiating reason unresolved. Site conditions were hindcast below the cited 1,000-year wave criterion; no collision, riser snag or production-deck wave impact was identified. The evacuated platform was a complete loss with zero fatalities.',
      what_happened: 'Typhoon (A-Typhoon) was a single-column mini-TLP installed by the operator in Green Canyon Block 237 in 2001. BSEE\'s platform record gives a water depth of 2,107 ft. On 20 September 2005 the facility was evacuated ahead of Hurricane Rita, operations were secured and all wells were shut in.\n\nRita tracked southeast to northwest south of the platform. The MMS/BSEE incident report estimates that the eye passed about 46 miles from Typhoon. At approximately 0600 CDT on 23 September, the platform capsized; EPIRBs in lifeboats 2 and 1 began transmitting at 0602 and 0627. Typhoon was subsequently found upside down and grounded in Eugene Island Block 271. The report does not give coordinates for the grounding location, so the mapped point uses the original platform position as an explicitly approximate capsize location.\n\nThe incident report cites a site hindcast of 83 mph one-hour wind, 43.5 ft significant wave height, 14.4 s peak period and 2.97 kt inertial current. Those estimates are local and must not be confused with Rita\'s storm-wide peak of 155 kt (Category 5) on 22 September or its 100 kt (Category 3) landfall intensity. The investigators stated that site conditions remained below the 1,000-year storm criterion they used, including a 49 ft significant-wave-height criterion; predicted platform motions were consistent with design analyses and model tests.\n\nPost-event inspections found all six pontoons dry, with water evidence only in the central shaft. Tendon bottom connectors 3, 4 and 6 remained in their piles; connectors 1, 2 and 5 were outside the piles and buried in the seabed. The recovered connector bodies for 1, 2 and 5 were separated and their lock rings were missing. The report documented load-shoulder damage in piles 1, 2, 4 and 5; recovered material believed to be from a load shoulder showed shear ductile overload and plastic deformation. Damage to the flare boom, lifeboat 2 and tendon porches 3-6 supported the proposed capsize rotation.\n\nThe investigation named loss of integrity in the pontoon-1 mooring system, specifically the bottom-connector system at piles 1 and 2, as the most probable cause. It did not resolve why the load shoulders overloaded. The report found no evidence that a MODU collision, riser/flowline/umbilical snag, production-deck wave impact, pontoon flooding, or exceedance of the cited environmental design condition caused the loss. There were no fatalities, and the report classified the TLP as a complete loss. BSEE records removal on 29 June 2006; industry reporting says the structure was later deployed as an artificial reef in Eugene Island Block 367 at about 350 ft water depth.',
      what_went_wrong: [
        'The bottom-connector/load-shoulder system lost integrity. The incident investigation identified piles 1 and 2 on pontoon 1 as the most probable initiating failure location, with physical evidence of load-shoulder overload.',
        'The public investigation did not determine why the load shoulders overloaded; a specific manufacturing, material, installation, corrosion, fatigue or design defect is not established by the reviewed evidence.',
        'Failure of a critical tendon connection led to loss of platform stability and complete structural loss even though the site hindcast was below the storm criterion cited in the investigation.'
      ],
      lessons_learned: [
        'The Typhoon mini-TLP capsized during Hurricane Rita. It was unmanned, having been evacuated beforehand. Site conditions stayed below the storm criterion used in its design, and the investigation identified failure of a tendon bottom-connector on one pontoon as the most probable cause, without establishing why it failed. Treat tendon connectors, receptacles and load shoulders as critical load paths and verify the assembled system, not just the tendon bodies.',
        'A storm design check alone cannot demonstrate whole-system resilience when a localised connector failure can initiate capsize; single-point failure modes need explicit review.',
        'Inspect and verify the assembled connector system in service, not only the tendon bodies.',
        'When a failure mechanism is only probable and the initiating defect unknown, preserve that uncertainty rather than presenting a hypothesis as a confirmed root cause.',
      ],
      actions: [
        'The MMS report recommended studying the mooring system to identify quick fixes for existing TLPs with this connector type and determine whether the system remained acceptable for floating offshore installations.',
        'A later BSEE TLP integrity-management report states that many bottom-connector designs added a further latch intended to prevent disconnection if a tendon went slack; this documents an industry design response, not proof that slack initiated Typhoon\'s failure.'
      ],
      metocean: {
        wind_speed: '83 mph one-hour wind, site hindcast at capsize; not a direct platform observation',
        wave_height_hs: '43.5 ft (13.3 m), site hindcast; investigation cites Hs = 49 ft for its 1,000-year storm criterion',
        notes: 'MMS hindcast for approximately 0600 CDT 23 September 2005 also gives 14.4 s peak wave period and 2.97 kt inertial current. Rita\'s basin-wide best-track peak was 155 kt on 22 September; Rita was 100 kt at landfall. Do not substitute either storm-wide value for Typhoon\'s local hindcast.'
      },
      references: [
        { title: 'Chevron U.S.A. Inc. Accident Investigation Report - A-Typhoon TLP, 23 September 2005', type: 'Official incident investigation report', publisher: 'Minerals Management Service (now BSEE)', year: 2007, url: 'https://www.bsee.gov/sites/bsee.gov/files/reports/safety/050923-pdf.pdf' },
        { title: 'Platform Structures Online Query - A (Typhoon TLP), GC 237', type: 'Official platform structure record', publisher: 'Bureau of Safety and Environmental Enforcement', url: 'https://www.data.bsee.gov/Platform/PlatformStructures/Default.aspx' },
        { title: 'Integrity Management Process of Tension Leg Platforms', type: 'Government technical report', publisher: 'Bureau of Safety and Environmental Enforcement / Energo Engineering', year: 2018, url: 'https://www.bsee.gov/sites/bsee.gov/files/research-reports/792aa.pdf' },
        { title: 'Tropical Cyclone Report: Hurricane Rita, 18-26 September 2005', type: 'Official tropical cyclone report', publisher: 'National Hurricane Center', year: 2006, url: 'https://www.nhc.noaa.gov/data/tcr/AL182005_Rita.pdf' },
        { title: 'Coupled Dynamic and Static Analysis of Typhoon TLP Accident During Extreme Environmental Conditions', type: 'ASME conference paper (abstract reviewed; full text unavailable)', publisher: 'American Society of Mechanical Engineers', year: 2008, url: 'https://doi.org/10.1115/OMAE2008-57676' },
        { title: 'Chevron\'s Typhoon TLP reefed', type: 'Industry report', publisher: 'Offshore Magazine', year: 2006, url: 'https://www.offshore-mag.com/field-development/article/16792634/chevrons-typhoon-tlp-reefed' },
        { title: 'Typhoon mini-tension leg platform operated by Chevron USA, Inc. in Green Canyon', type: 'Platform context photograph', publisher: 'BOEM-OPA / Flickr', year: 2004, url: 'https://www.flickr.com/photos/boemgov/12003640555', notes: 'CC BY-SA 2.0. Context photo, not a photograph of Rita damage. BOEM description says 8 January 2004; Flickr metadata says 19 April 2006.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       30. Hurricane Gustav - GoM Offshore - 2008
    ─────────────────────────────────────────────────── */
    {
      id: 'hurricane_gustav_2008',
      name: 'Hurricane Gustav - GoM Offshore',
      year: 2008,
      date: '1 September 2008',
      location: 'Gulf of Mexico, offshore central Louisiana',
      lat: 28.8,
      lng: -90.5,
      region: 'North America',
      platform_type: 'Multiple - fixed platforms, mobile rigs',
      operator: 'Multiple GoM offshore operators',
      weather_event_type: 'cyclone',
      classification: 'design',
      storm_sid: '2008238N13293',
      storm_name: 'GUSTAV',
      weather_event: 'Hurricane Gustav - Category 4 peak; Category 2 at Louisiana landfall',
      fatalities: 0,
      infrastructure_impact: '632 of 717 manned GoM platforms evacuated - the largest mass offshore evacuation on record at the time. The final combined Gustav+Ike assessment counted 60 destroyed structures and 31 structures with extensive damage; the paper does not support a reliable per-storm split.',
      severity_override: 'notable',
      summary: 'Hurricane Gustav provided the first major test of post-Katrina offshore safety procedures in 2008. Operators evacuated more than 90,000 workers from 632 of 717 manned platforms before landfall. Gustav shut in production across the Gulf and damaged offshore infrastructure, but no offshore fatalities occurred. The later arrival of Ike complicated inspection, repair and attribution of the combined 2008 damage.',
      executive_summary: 'Hurricane Gustav was the first major test of post-Katrina offshore evacuation procedures. More than 90,000 workers were removed from 632 of 717 manned platforms before Louisiana landfall. The storm caused a major Gulf-wide shutdown and offshore damage, while the second storm, Ike, arrived before assessment and recovery were complete.',
      what_happened: 'Three years after Katrina and Rita, Hurricane Gustav provided the first major field test of the Gulf\'s revised hurricane evacuation system. As Gustav intensified toward Louisiana, operators shut in production and moved personnel off the manned platforms. By landfall near Cocodrie on 1 September 2008, 632 of 717 manned platforms had been evacuated - approximately 90% of the offshore workforce.\n\nThe storm left a large, partly assessed offshore estate behind it. Production remained shut in while operators inspected platforms, rigs, pipelines and other facilities. Ike arrived only 12 days later and forced a second evacuation before the Gustav recovery cycle was complete. The final government damage totals therefore describe the two-storm episode together rather than assigning every destroyed or damaged structure to one storm.\n\nThe combined event produced a 100% oil-production shut-in peak; recovery to 50% of peak took 27.4 days and recovery to 25% took 60.9 days. No offshore fatalities occurred, but the sequence showed how quickly a successful evacuation can become a prolonged infrastructure-recovery problem.',
      what_went_wrong: [
        '85 manned platforms were not fully evacuated before Gustav\'s arrival - the reasons for non-evacuation must be documented and addressed to move toward 100% evacuation.',
        'Production reinstatement and damage attribution were complicated by the second storm, Ike, which arrived before the industry had completed assessment and recovery from Gustav.',
        'Some helicopter evacuation operations were conducted under marginal weather conditions as the storm approached, creating aviation safety risk that must be managed with defined stop-flying criteria.'
      ],
      lessons_learned: [
        'Mass evacuation of offshore platforms when triggered by defined meteorological criteria is a central GoM hurricane safety control. Gustav demonstrated that large-scale evacuation is achievable, while also showing that the remaining exposed inventory must be identified and managed.',
        'Helicopter stop-flying criteria during hurricane approach must be defined and enforced - helicopters must not operate when conditions approach their performance limits.',
        'Infrastructure reinstatement after major hurricane damage must be driven to completion before the next hurricane season - deferred repair creates compounding risk.',
        'Regulator real-time evacuation tracking provides situational awareness of exposure - this capability must be maintained, improved, and mandated.'
      ],
      actions: [
        'MMS/BSEE published Gustav damage assessments, evacuation statistics and follow-on combined Gustav-Ike updates.',
        'Pre-storm evacuation tracking system was further improved following Gustav.',
        'GoM operators refined helicopter evacuation stop-flying criteria for storm approach conditions.',
        'Gustav\'s successful evacuation was extensively documented as a model for future seasons.'
      ],
      metocean: {
        wave_height_hs: 'Storm-scale wave conditions; no Gustav-specific platform-point value is given in the Keiser paper',
        wind_speed: 'Sustained 150 mph (130 knots) at peak; Category 2 at landfall',
        sea_temp: '~30 °C',
        notes: 'The Keiser paper reports Gustav entering the Gulf as a Category 4 storm and exposing approximately 677 platforms to hurricane-force winds; it focuses on aggregate exposure, damage inventories and production recovery rather than platform-point metocean measurements.'
      },
      references: [
        { title: 'BSEE Hurricane Gustav - Offshore Impact', type: 'Regulatory report index', publisher: 'Bureau of Safety and Environmental Enforcement', url: 'https://www.bsee.gov/resources-tools/planning-preparedness/hurricane/hurricane-history/gustav' },
        { title: 'MMS Releases Preliminary Offshore Damage Reports from Hurricane Gustav', type: 'Official damage assessment', publisher: 'Minerals Management Service', year: 2008, url: 'https://www.bsee.gov/sites/bsee_prod.opengov.ibmcloud.com/files/news/histories/080911.pdf' },
        { title: 'MMS Completes Assessment of Destroyed and Damaged Facilities from Hurricanes Gustav and Ike', type: 'Official combined damage assessment', publisher: 'Minerals Management Service', year: 2008, url: 'https://www.bsee.gov/sites/bsee.gov/files/news/hurricanes/081126a.pdf' },
        { title: 'Tropical Cyclone Report: Hurricane Gustav', type: 'Official hurricane report', publisher: 'National Hurricane Center', year: 2009, url: 'https://www.nhc.noaa.gov/data/tcr/AL072008_Gustav.pdf' },
        { title: 'The impact of Hurricanes Gustav and Ike on offshore oil and gas production in the Gulf of Mexico', type: 'Peer-reviewed technical paper', publisher: 'Applied Energy / Louisiana State University Center for Energy Studies', year: 2010, volume: '87', issue: '1', pages: '284-297', doi: '10.1016/j.apenergy.2009.07.014', url: 'https://www.sciencedirect.com/science/article/pii/S0306261909002980', file: 'background files/Keiser 1010 The impact of Hurricanes Gustav and Ike on offshore oil and gas production in the Gulf of Mexico.pdf', notes: 'Combined-storm assessment; use for aggregate exposure, damage and production-recovery statistics, not per-storm destruction attribution.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       31. Hurricane Ike - GoM Offshore - 2008
    ─────────────────────────────────────────────────── */
    {
      id: 'hurricane_ike_2008',
      name: 'Hurricane Ike - GoM Offshore',
      year: 2008,
      date: '12-13 September 2008',
      location: 'Gulf of Mexico, Texas shelf and nearshore',
      lat: 27.5,
      lng: -93.5,
      region: 'North America',
      platform_type: 'Multiple - fixed platforms, mobile rigs, pipelines',
      operator: 'Multiple GoM offshore operators',
      weather_event_type: 'cyclone',
      classification: 'design',
      storm_sid: '2008245N17323',
      storm_name: 'IKE',
      weather_event: 'Hurricane Ike - Category 4 peak; Category 2 at Galveston landfall; exceptionally large storm diameter',
      fatalities: 0,
      infrastructure_impact: 'Combined 2008 Gustav+Ike assessment: 60 structures destroyed and 31 extensively damaged in the paper abstract, with the detailed discussion also reporting 124 structures in combined extensive/moderate damage categories. Extensive pipeline and shelf-infrastructure damage followed Ike; per-storm structure splits are not treated as exact.',
      severity_override: 'major',
      image: {
        src: 'images/hurricane-ike-2008-offshore-platform-damage.jpg',
        alt: 'Fixed offshore platform leaning after severe structural damage to its jacket and lower decks.',
        caption: 'Damaged fixed offshore platform associated with Hurricane Ike; the facility and image date are unconfirmed.',
        credit: 'User-supplied Blogger-hosted image; original photographer unresolved. Reference use only.'
      },
      summary: 'Hurricane Ike struck the Texas coast near Galveston on 13 September 2008, 12 days after Gustav. Its large circulation exposed a wide area of the Texas shelf to damaging conditions, while operators again evacuated the offshore workforce. Ike extended the shutdown and recovery effort before the industry had finished assessing Gustav damage; no offshore fatalities occurred.',
      executive_summary: 'Hurricane Ike followed Gustav into the Gulf recovery zone and struck near Galveston on 13 September 2008. The second evacuation, broad Texas-shelf damage and incomplete Gustav inspections prolonged the offshore shutdown and recovery campaign. The two storms together left 60 structures destroyed and 31 extensively damaged in the final headline assessment; no offshore fatalities occurred.',
      what_happened: 'Gustav and Ike struck the Gulf 12 days apart in September 2008. Following Gustav\'s evacuation and the first round of inspections, the industry had to mobilise again as Ike approached. Ike made landfall near Galveston and the Bolivar Peninsula on 13 September, bringing a second round of platform and rig exposure across the Texas shelf. The Keiser study estimates that approximately 1,450 structures were exposed to hurricane-force winds.\n\nThe second storm mattered operationally as much as its direct damage. Inspection teams, repair vessels, helicopters and production-restart decisions were still dealing with Gustav when Ike arrived. The final government assessment counted 60 destroyed structures and 31 with extensive damage across the two-storm episode; it does not assign every loss to Ike alone.\n\nThe combined event reached a 100% oil-production shut-in peak. Recovery to 50% of peak took 27.4 days and recovery to 25% took 60.9 days. Ike therefore belongs in the database not only as a large-storm damage event, but as a case of recovery capacity being tested twice before the first response cycle was complete.',
      what_went_wrong: [
        'Hurricane intensity ratings describe maximum wind speed, not the full size of the storm; Ike exposed a much wider offshore area than a Category 2 label alone suggests.',
        'Some smaller Texas shelf platforms had received less post-Katrina/Rita attention and remained below current structural standards - they were destroyed.',
        'The rapid succession of Gustav and Ike created significant logistics challenges for assessment, repair, evacuation and the helicopter and marine-vessel fleet.'
      ],
      lessons_learned: [
        'Hurricane evacuation and structural assessment planning must be based on the full hazard parameters - not just the Saffir-Simpson intensity category. Storm size, track, forward speed, and shelf geometry all determine the wave, surge, and current threat. Integrated meteorological and oceanographic forecasting is essential.',
        'Platform structural adequacy must be maintained to current design standards across the entire GoM - including the Texas shelf - not only the high-profile deepwater central GoM.',
        'Mass offshore evacuation logistics must be sized for the possibility of two major hurricane evacuations within a single season.',
        'Storm surge hazard is decoupled from intensity category for large slow-moving hurricanes - shallow-water platforms must include extreme surge in their design basis.'
      ],
      actions: [
        'BSEE published combined Gustav and Ike damage statistics.',
        'Evacuation planning guidance updated to incorporate storm size parameters alongside intensity category.',
        'NOAA updated storm surge modelling products to better capture large-storm surge dynamics.',
        'Platform structural adequacy on the Texas shelf specifically reviewed and prioritised following Ike.'
      ],
      metocean: {
        wave_height_hs: '~10-13 m',
        wind_speed: 'Sustained 145 mph (126 knots) at peak; 110 mph (96 knots) at Galveston landfall',
        sea_temp: '~29 °C',
        notes: 'The Keiser paper reports approximately 1,450 structures exposed to hurricane-force winds during Ike and uses combined Gustav-Ike shut-in data. Its production and damage totals should not be presented as Ike-only measurements.'
      },
      references: [
        { title: 'BSEE Hurricane Ike - Offshore Impact', type: 'Regulatory report index', publisher: 'Bureau of Safety and Environmental Enforcement', url: 'https://www.bsee.gov/resources-tools/planning-preparedness/hurricane/hurricane-history/ike' },
        { title: 'Minerals Management Service Updates Number of Offshore Facilities Impacted by Hurricane Ike', type: 'Official damage assessment', publisher: 'Minerals Management Service', year: 2008, url: 'https://www.bsee.gov/sites/bsee.gov/files/news/hurricanes/081007c.pdf' },
        { title: 'Minerals Management Service Releases Details of Drilling Rigs Destroyed from Hurricane Ike', type: 'Official damage assessment', publisher: 'Minerals Management Service', year: 2008, url: 'https://www.bsee.gov/sites/bsee.gov/files/news/hurricanes/080930.pdf' },
        { title: 'MMS Completes Assessment of Destroyed and Damaged Facilities from Hurricanes Gustav and Ike', type: 'Official combined damage assessment', publisher: 'Minerals Management Service', year: 2008, url: 'https://www.bsee.gov/sites/bsee.gov/files/news/hurricanes/081126a.pdf' },
        { title: 'Tropical Cyclone Report: Hurricane Ike', type: 'Official hurricane report', publisher: 'National Hurricane Center', year: 2009, url: 'https://www.nhc.noaa.gov/data/tcr/AL092008_Ike.pdf' },
        { title: 'The impact of Hurricanes Gustav and Ike on offshore oil and gas production in the Gulf of Mexico', type: 'Peer-reviewed technical paper', publisher: 'Applied Energy / Louisiana State University Center for Energy Studies', year: 2010, volume: '87', issue: '1', pages: '284-297', doi: '10.1016/j.apenergy.2009.07.014', url: 'https://www.sciencedirect.com/science/article/pii/S0306261909002980', file: 'background files/Keiser 1010 The impact of Hurricanes Gustav and Ike on offshore oil and gas production in the Gulf of Mexico.pdf', notes: 'Combined-storm assessment; use for aggregate exposure, damage and production-recovery statistics, not per-storm destruction attribution.' }
      ]
    },

    /* ----------------------------------------------------------------------
       73. Eugene Island 322-A Structural Damage - Hurricane Lili - 2002
    ---------------------------------------------------------------------- */
    {
      id: 'eugene-island-322a-hurricane-lili-2002',
      name: 'Eugene Island 322-A Platform Structural Damage During Hurricane Lili',
      year: 2002,
      date: '3 October 2002',
      location: 'Eugene Island Block 322-A, about 80 mi south of Morgan City, Louisiana, Gulf of Mexico',
      lat: 28.95,
      lng: -91.15,
      location_precision: 'approximate',
      region: 'North America',
      platform_type: 'Two adjacent four-pile fixed platforms: drilling/quarters and production structures linked by a bridge',
      operator: 'BP (operator); former Amoco Eugene Island facility',
      weather_event_type: 'cyclone',
      classification: 'design',
      storm_sid: '2002265N10315',
      storm_name: 'LILI',
      weather_event: 'Hurricane Lili - Category 4 peak, approximately 140 mph winds; eye passed through Eugene Island Block 322',
      fatalities: 0,
      persons_on_board: 0,
      survivors: 0,
      infrastructure_impact: 'Drilling platform deck translated approximately 84-85 ft, with severe deck, bridge, jacket and leg damage; one pile was severed below the mudline and the opposite jacket-leg connection failed. The facilities were later decommissioned and reefed in place.',
      image: {
        src: 'images/eugene-island-322a-lili-2002-offshore-mag.png',
        alt: 'The Eugene Island 322-A drilling platform leaning into the sea with its deck tilted after Hurricane Lili.',
        caption: 'The EI 322-A drilling platform left leaning near collapse after Hurricane Lili, October 2002, its deck translated about 84 feet. Trade-press image; retained at its small native resolution and not independently dated within this project.',
        credit: 'Offshore Magazine (img.offshore-mag.com), Endeavor Business Media; originating photographer unresolved (associated with the OTC-16801 decommissioning account). Copyrighted - permission required, reference use only.'
      },
      summary: 'Hurricane Lili passed over Eugene Island Block 322 in October 2002 and severely damaged BP\'s EI 322-A drilling platform. The top deck shifted approximately 84-85 feet, buckling the deck and jacket legs; one corner leg nearly separated. The failure was linked to a severed pile below the mudline and failure of the opposite jacket-leg-to-pile connection. The platform was stabilized, decommissioned and later reefed in place without reported injuries or environmental events.',
      executive_summary: 'EI 322-A was a paired fixed-platform complex in 235 feet of water. When Hurricane Lili\'s eye passed through the block, the drilling platform leaned and its deck moved approximately 84-85 feet. Technical investigation and decommissioning work identified two critical foundation/connection failures: one pile severed below the mudline and the opposite jacket-leg-to-pile shim-plate connection welds failed. BP could not establish which failure occurred first.',
      what_happened: 'Eugene Island 322-A was a paired shallow-water Gulf of Mexico facility: a drilling and quarters platform stood beside a production platform, and a bridge carried flowlines and accommodation units between them. The complex was installed in approximately 235 feet of water in 1978 and had been designed for a 70-foot, 13-second wave, zero current and 125 mph wind.\n\n' +
        'Hurricane Lili passed through the Gulf in early October 2002, reaching Category 4 strength with maximum sustained winds above 140 mph. Its eye passed through the Eugene Island 322 block. In the days after the storm, the drilling platform was found leaning with severe damage to its deck, bridge and jacket. The top deck had translated approximately 84-85 feet from its original position, leaving the structure close to collapse.\n\n' +
        'BP\'s initial ROV inspection found a crushed cruciform joint in an X-bay and a compressed vertical diagonal joint in the drilling jacket, with no evidence of impact damage. Subsequent engineering assessment identified two critical locations: one pile had been severed approximately 25 feet below the mudline, while the opposite jacket leg had lost its pile shim-plate connection welds. The technical account states that either failure could have occurred first and caused the other; the final deflected shape would have been the same. A tension pile may also have pulled approximately 20 feet out of the seabed.\n\n' +
        'The damage made conventional removal hazardous. BP temporarily strengthened the deck, jacket and foundation, completed well decommissioning, and then used diamond-wire cutting and an anchor-handling vessel to topple the structures in a controlled manner for an artificial reef. The work was completed with zero injuries and no environmental events reported for the decommissioning project.',
      what_went_wrong: [
        'The paired platform was exposed to a hurricane stronger than the original 125 mph wind design criterion, although the available hindcast indicated a maximum wave of about 56 feet, below the original 70-foot wave criterion.',
        'A pile was severed below the mudline and the opposite jacket-leg-to-pile shim-plate weld connection failed; the public technical account cannot establish which failure initiated the sequence.',
        'The resulting foundation and jacket damage allowed the deck to translate approximately 84-85 feet and left the drilling platform in a severely unstable, leaning condition.',
        'The bridge-linked two-platform arrangement complicated inspection, strengthening, well access and removal after the drilling structure was damaged.'
      ],
      lessons_learned: [
        'Hurricane Lili\'s eye crossed the EI 322-A complex and the drilling platform\'s deck translated about 84-85 feet, leaving it leaning near collapse - from a pile severed below the mudline and a failed opposite jacket-leg connection, with which failed first unresolved, even though the hindcast wave was below the design wave. After a severe hurricane, inspect older fixed platforms for below-mudline pile and hidden connection damage, not just visible topside damage.',
        'Treat pile, shim-plate and jacket-leg connections as a linked load path; either local failure can trigger major platform displacement and damage.',
        'Use storm hindcasts and inspection evidence together: a wave below the design wave does not by itself prove adequate margin when wind, current, foundation condition and connection details interact.',
        'Record uncertainty in the failure sequence explicitly when post-storm evidence cannot identify which foundation failure occurred first.',
      ],
      actions: [
        'Require above-water, underwater and targeted non-destructive inspection of piles, shim plates, welds and jacket nodes after severe hurricane exposure.',
        'Temporarily strengthen damaged decks, jacket legs and foundations before well access, decommissioning or further hurricane exposure.',
        'Maintain engineered options for controlled cutting, lifting and reefing when a damaged platform cannot be safely transported intact.',
        'Review legacy fixed-platform connection details against current metocean and structural-integrity criteria, especially where inspection access is limited.',
      ],
      metocean: {
        wave_height_hs: 'About 56 ft maximum wave in preliminary Lili hindcast for EI 322 block; original design wave was 70 ft at 13 seconds',
        wind_speed: 'Hurricane Lili reached Category 4 strength with maximum sustained winds above 140 mph; original platform wind design criterion was 125 mph',
        notes: 'The technical account emphasizes that the wind-wave-current hindcast was below the original wave criterion but does not resolve the relative contribution of wind, current, foundation condition and connection failure. No platform-point instrument record is presented.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the platform arrangement, damage geometry, foundation/connection findings, stabilization and decommissioning sequence because these are documented in the OTC paper and contemporaneous technical reporting. Moderate for exact storm loading at the platform because the wave value is a preliminary hindcast and the public account does not provide a complete instrument record or definitive failure-initiation sequence.',
      sources: [
        'DeFranco et al., OTC-16801-MS, Eugene Island 322 A decommissioning paper (EXTERNAL, technical primary)',
        'BP/MMS-supported decommissioning and structural assessment account (EXTERNAL, technical industry source)',
        'National Hurricane Center Hurricane Lili report (EXTERNAL, meteorological primary)'
      ],
      references: [
        { title: 'Eugene Island 322 "A" Drilling Platform Decommissioning After Hurricane Lilli', type: 'Technical conference paper', publisher: 'Offshore Technology Conference / OnePetro', year: 2004, doi: '10.4043/16801-MS', url: 'https://onepetro.org/OTCONF/proceedings/04OTC/04OTC/OTC-16801-MS/35080', notes: 'Primary technical account of the failure evidence, temporary strengthening, well decommissioning and controlled reefing.' },
        { title: 'BP decommissions damaged platform', type: 'Technical industry report', publisher: 'Offshore Magazine', year: 2004, url: 'https://www.offshore-mag.com/home/article/16756969/bp-decommissions-damaged-platform', notes: 'Reports the 84-foot deck displacement, pile severance, opposite connection-weld failure and controlled decommissioning sequence.' },
        { title: 'MMS preliminary report: most facilities withstood Hurricane Lili', type: 'Official damage assessment', publisher: 'Minerals Management Service', year: 2002, url: 'https://www.bsee.gov/sites/bsee.gov/files/press-release/news-item/mms-preliminary-report-finds-most-facilities-withstood-hurricane-lili.pdf' },
        { title: 'Tropical Cyclone Report: Hurricane Lili', type: 'Official hurricane report', publisher: 'National Hurricane Center', year: 2003, url: 'https://www.nhc.noaa.gov/data/tcr/AL132002_Lili.pdf' },
        { title: 'Offshore platform damaged during a hurricane off of Louisiana', type: 'Incident image', publisher: 'ResearchGate', url: 'https://www.researchgate.net/publication/315874734/figure/fig2/AS:568185380405248@1512477359073/Offshore-platform-damaged-during-a-hurricane-off-of-Louisiana.png', notes: 'Image supplied for this record; attribution is tied to the OTC technical paper, but image reuse permission requires confirmation.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       32. South China Sea - Internal Wave Incidents
    ─────────────────────────────────────────────────── */
    {
      id: 'south_china_sea_solitons',
      name: 'South China Sea - Internal Wave Incidents',
      year: 2004,
      data_quality: 'Describes a recurring, well-documented oceanographic hazard class (South China Sea internal waves / solitons) rather than a single verified named incident; specific unnamed-vessel anecdotes are illustrative and not individually sourced (2026-07-04 fact-check audit).',
      date: '2000s - present (ongoing hazard)',
      location: 'South China Sea - particularly SE of Luzon Strait, east of Vietnam',
      lat: 12.0,
      lng: 113.0,
      region: 'Asia',
      platform_type: 'Drillships, semi-submersibles, FPSOs, moored platforms',
      operator: 'Multiple - CNOOC, Husky, Shell, Chevron, Petronas, others',
      weather_event_type: 'internal_wave',
      classification: 'drilling',
      weather_event: 'Internal waves (solitons) - tidally generated underwater wave packets propagating westward from the Luzon Strait',
      fatalities: 0,
      infrastructure_impact: 'Multiple riser over-tension events, emergency disconnections, vessel excursions of 50-300+ m off location; significant riser and mooring damage in multiple incidents across the region',
      severity_override: 'notable',
      summary: 'The South China Sea hosts the world\'s most energetic internal waves (solitons), generated by tidal forcing at the Luzon Strait. Invisible at the surface, these wave packets have caused multiple incidents on drillships, semi-submersibles and FPSOs through sudden 2-3 m/s current pulses, displacing vessels 50-300+ m off location without warning and causing riser over-tension, emergency disconnections and mooring damage. No fatalities are documented, but the potential for riser failure is severe, driving dedicated internal-wave monitoring across SE Asia.',
      executive_summary: 'Tidal forcing at the Luzon Strait generates powerful internal wave packets (solitons) that propagate westward across the South China Sea - invisible at the surface but producing sudden subsurface current pulses of 2-3 m/s with no visual warning. Multiple drillships and FPSOs have been displaced 50-300+ m off location, causing riser over-tension, emergency disconnections, and mooring damage.',
      what_happened: 'Internal waves in the South China Sea are generated when strong tidal flows over the Luzon Strait (between Taiwan and the Philippines) create large-amplitude oscillations in the thermocline. These propagate westward across the deep South China Sea as coherent wave packets - groups of 2-10 individual waves spaced 1-3 km apart - with periods of 15-30 minutes.\n\nAs these wave packets pass beneath a drillship or moored platform, they generate sudden subsurface horizontal current pulses typically 2-3 m/s (4-6 knots) lasting 5-20 minutes, extending from the surface to depths of 200-400 m. The sea surface typically appears calm - there is no visual warning.\n\nReported effects of internal-wave passages include vessels displaced 50-300+ m off drilling location, triggering riser high-angle alarms and emergency disconnect sequences, and FPSO mooring-line overloads. (Note: a riser-tension exceedance in the Liwan gas-field area that has sometimes been linked to an internal wave was in fact associated with Typhoon Koppu in 2009 - a separate, weather-driven cause.) These effects are characteristic of the hazard class; specific vessel-by-vessel incidents in the region are largely undisclosed in public sources.',
      what_went_wrong: [
        'Internal waves were historically not recognised as a design and operations hazard for floating production and drilling systems in the South China Sea. Early deepwater projects did not include internal wave assessment in their basis of design.',
        'The phenomenon is invisible at the surface - no visual or standard meteorological warning is possible. Without dedicated instrumentation, the first sign is the vessel already beginning to move off location.',
        'Early drillship and FPSO mooring designs for the South China Sea did not include internal wave current loads in their design basis.',
        'Operating limits for drillships (maximum current for continued drilling) did not define internal wave scenarios separately from steady tidal or loop currents.',
        'Informal observation sharing between vessels in the same area meant that downstream vessels received no advance warning of approaching wave packets from upstream vessels that had already experienced them.'
      ],
      lessons_learned: [
        'Internal wave (soliton) hazard assessment must be performed as part of the metocean design basis for any deepwater project in the South China Sea. The assessment must quantify probability, current speed, depth profile, and packet characteristics at the specific site.',
        'Real-time current monitoring at multiple depths must be maintained for all drillships and FPSOs in the South China Sea - automated alarms triggered by subsurface current speed must be linked to drilling and mooring watch operations.',
        'Mooring systems and riser designs for South China Sea operations must include internal wave loads in the design load cases - not only steady-state current.',
        'Operating criteria must specify suspension or abandonment actions when subsurface current monitoring indicates an approaching internal wave packet; emergency drill string disconnect procedures must be practised.',
        'Internal wave observations must be shared in real time between all vessels in the same operating area - formal inter-vessel reporting protocols and regional monitoring buoy networks are critical safety tools.'
      ],
      actions: [
        'Major operators in the South China Sea (CNOOC, Shell, Chevron, others) implemented real-time multi-depth current monitoring buoy systems in their operating areas.',
        'SPE/OTC technical papers on South China Sea internal waves significantly increased industry awareness from the early 2000s onward.',
        'IOGP published guidance on internal wave management for deepwater operations in internal-wave-prone regions.',
        'Classification societies (ABS, DNV) developed guidance on internal wave load cases for mooring and riser design in Southeast Asian deepwater.',
        'Chinese government oceanographic agencies conducted extensive research on South China Sea internal waves, improving understanding of generation, propagation, and potential for prediction.'
      ],
      metocean: {
        wave_height_hs: 'Surface conditions often calm - internal waves have no surface signature',
        wind_speed: 'Not applicable (internal wave phenomenon unrelated to surface weather)',
        notes: 'Internal waves in the South China Sea are generated by tidal forcing at the Luzon Strait and propagate westward as packets. Near-surface current pulses of 2-3 m/s (up to 3.5 m/s in extreme events) occur at depths of 0-400 m. The generation is regular and tidal, but individual packet strength varies. Monitoring requires acoustic Doppler current profilers (ADCPs) deployed from surface buoys or on the vessel hull.'
      },
      references: [
        { title: 'Internal Waves and Their Impacts on Deepwater Drilling in the South China Sea (OTC/SPE papers)', type: 'Technical papers', publisher: 'Society of Petroleum Engineers / Offshore Technology Conference', notes: 'Search OnePetro for "internal waves South China Sea drilling" - multiple papers from 2000s-2010s' },
        { title: 'IOGP Report - Metocean Recommended Practices', type: 'Industry guidance', publisher: 'International Association of Oil & Gas Producers (IOGP)', url: 'https://www.iogp.org/bookstore/' }
      ]
    },

    /* ──────────────────────────────────────────────────
       34. COSL Innovator Rogue Wave - 2015
    ─────────────────────────────────────────────────── */
    {
      id: 'cosl-innovator-2015',
      name: 'COSL Innovator - Wave Strike, Troll Field',
      year: 2015,
      date: '30 December 2015',
      location: 'Troll field, Norwegian North Sea (~65 km west of Bergen)',
      lat: 60.64,
      lng: 3.72,
      region: 'Europe',
      platform_type: 'Semi-submersible drilling rig (column-stabilised MODU)',
      operator: 'COSL Drilling Europe AS (rig owner) / Statoil (field operator)',
      weather_event_type: 'rogue_wave',
      classification: 'design',
      weather_event: 'Steep wave in a North Sea storm (Hs 8.5-9.5 m, Tp 12-14 s, wind 24-26 m/s) - no direct measurement or observation established the individual wave height or whether it met freak-wave criteria',
      fatalities: 1,
      persons_on_board: null,
      survivors: null,
      image: {
        src: 'images/cosl-innovator-2015-forward-bulkhead-damage.png',
        alt: 'Official Figure 3 showing the forward bulkhead of COSL Innovator with labels and outlines for wave damage.',
        caption: 'COSL Innovator forward bulkhead after the incident, with official Figure 3 damage labels and outlines.',
        credit: 'Petroleum Safety Authority Norway (PSA/Havtil); reuse with credit.'
      },
      pack_images: [
        {
          src: 'images/cosl-innovator-2015-forward-accommodation.png',
          alt: 'Forward accommodation box girder of COSL Innovator, showing the rows of cabin windows and the lifeboats above them.',
          caption: 'The forward box-girder accommodation that took the wave: the lower and mezzanine cabin window rows seen here were driven in, flooding 17 cabins and corridors.',
          credit: 'Petroleum Safety Authority Norway (PSA/Havtil) investigation report; reuse with credit.'
        }
      ],
      summary: 'At about 16:38 on 30 December 2015 a large wave struck the forward port bulkhead of COSL Innovator on the Troll field while the unit was disconnected from the well at survival draught. It drove in 17 accommodation windows, damaging 17 cabins and corridors; one person was killed and four lightly injured. The investigation assessed the weather as within the unit\'s design limits and traced the damage to under-communicated negative-air-gap results and horizontal wave slamming not carried through design.',
      executive_summary: 'On 30 December 2015 a large wave struck the forward port bulkhead of COSL Innovator while the disconnected unit was at survival draught on the Troll field. It drove in 17 accommodation windows, killing one person and lightly injuring four. The official investigation reported Hs 8.5-9.5 m, Tp 12-14 s and winds of 24-26 m/s, and assessed the weather as within the unit\'s design limits. It traced the damage to negative-air-gap information and horizontal slamming risk that had not been adequately carried through the design process.',
      what_happened: 'Planned blowout-preventer maintenance meant COSL Innovator was disconnected from the well on 30 December 2015. The morning forecast showed significant wave height would exceed the 9 m operational criterion for survival condition, so the crew deballasted the unit from 17.75 m to 15.75 m draught between 12:00 and 13:00. At the incident time, the official report gives Hs 8.5-9.5 m, Tp 12-14 s, wind 24-26 m/s, and a 1.5-degree forward trim.\n\nAt about 16:38 local time, a large wave struck the port side of the forward box-girder bulkhead. It drove in six windows on the lower deck and 11 on the mezzanine deck, causing extensive water damage to 17 cabins and corridors. One person was killed and four were lightly injured. The general alarm was raised at about 16:40. A complete personnel-on-board count was not available until about 17:20; 46 non-essential personnel were later evacuated by helicopter, and the unit sailed to shore under its own power.\n\nThe investigation assessed that a 12-15 m crest could have caused the observed damage, but stressed that the individual wave was neither measured nor observed. It found no indication of a breaking wave and considered the weather within the unit\'s design limits. It could not determine with certainty whether the wave met freak-wave criteria.',
      what_went_wrong: [
        'Independent design analyses had identified a negative air gap, but the final analysis used for construction and commissioning concluded that the unit had a positive air gap. The significance of the negative-air-gap results was not adequately communicated or followed up.',
        'Design attention focused on vertical slamming beneath the deck. Horizontal wave slamming on the forward topside bulkhead was not assessed even though a negative air gap had been identified; the investigation treated this as an underlying cause.',
        'The superstructure and its windows were not designed for the estimated horizontal wave pressure. Some window bolts were also below specification or incorrectly installed, but the investigation considered this of minor significance to the extent of damage.',
        'The personnel-on-board registration system did not function satisfactorily. A full count took about 40 minutes instead of the emergency-plan target of 10 minutes, causing a search team to make an unnecessary second sweep.',
        'Air-assisted weathertight doors opened when wave pressure apparently activated their pushbuttons; damaged pneumatic supplies then prevented local operation until the doors were manually closed and wedged.'
      ],
      lessons_learned: [
        'A steep wave within the rig\'s design weather drove in 17 accommodation windows on the disconnected COSL Innovator at survival draught, killing one person - because design checked vertical slamming under the deck but not horizontal wave impact on the forward bulkhead, and a known negative-air-gap result was not carried through. Assess air gap and horizontal wave loads with validated methods, and resolve conflicting analyses rather than let a favourable number stand.',
        'Horizontal wave forces from steep waves must be explicitly included in the structural design of accommodation modules and box girders, and windows qualified for that load.',
        'Air-gap assessment for column-stabilised units must use a consistent, validated method covering rig motion and crest statistics, not a simplified static calculation.',
        'Keep significant wave height, statistical crest and the actual striking crest distinct, and leave the absence of a direct wave measurement explicit rather than labelling it a rogue or breaking wave.',
      ],
      actions: [
        'DNV GL issued guideline OTG-13 (air-gap prediction for column-stabilised units, June 2016); Norway mandated compliance for MODUs in Norwegian waters by 1 November 2016.',
        'PSA Norway reviewed about 100 DNV GL-approved semi-submersibles; a limited number required physical modifications or operational restrictions.',
        'Classification rules (DNV GL) were updated to require explicit horizontal wave-load analysis and air-gap verification using the OTG-13 methodology.',
        'The incident fed into revisions of ISO and NORSOK wave-load design standards for column-stabilised units.',
      ],
      metocean: {
        wave_height_hs: '8.5-9.5 m significant wave height; an estimated 12-15 m crest could have caused the damage, but the individual wave was not measured',
        wind_speed: '24-26 m/s (10-minute mean at 10 m)',
        sea_temp: '~8 °C',
        notes: 'The report gives Tp 12-14 s and says the weather was within the unit\'s design criteria. It found no indication of a breaking wave. Because the individual wave was not measured or observed, it could not determine with certainty whether freak-wave criteria were met. Hs, statistical crest estimates and the actual striking crest are distinct quantities.'
      },
      references: [
        { title: 'PSA Norway - COSL Drilling: investigation of incident with fatal consequences', type: 'Official investigation landing page', publisher: 'Petroleum Safety Authority Norway (PSA / Havtil)', year: 2016, url: 'https://www.havtil.no/en/supervision/investigation-reports/2016/cosl-drilling---coslinnovator---investigation-of-incident-with-fatal-consequences/' },
        { title: 'Investigation report - COSL Drilling: COSL Innovator', type: 'Official investigation report', publisher: 'Petroleum Safety Authority Norway (PSA / Havtil)', year: 2016, file: 'background files/investigation-report---cosl-drilling---cosl-innovator.pdf' },
        { title: 'DNV GL OTG-13 - Prediction of Air Gap for Column-Stabilised Units (June 2016)', type: 'Technical guideline', publisher: 'DNV GL', year: 2016 },
        { title: 'COSL Innovator: How the investigation into wave rig death unfolded', type: 'Industry news feature', publisher: 'Energy Voice', url: 'https://www.energyvoice.com/oilandgas/north-sea/127503/cosl-innovator-investigation-wave-rig-death-unfolded/' },
        { title: 'DNV GL puts out new air gap guidelines after COSLInnovator accident', type: 'Industry news', publisher: 'Offshore Energy', url: 'https://www.offshore-energy.biz/dnv-gl-puts-out-new-air-gap-guidelines-after-coslinnovator-accident/' },
        { title: 'PTW-AW-201602 - Non-Shell Fatality from Wave Hitting Rig LQ (Shell internal LFE documenting this same event)', type: 'Shell safety bulletin', internal: true },
        { title: 'Metocean Lessons Learnt V01', type: 'Shell internal training', file: 'background files/Metocean Lessons Learnt - Learning from Experience V01.docx', internal: true }
      ]
    },

    /* ──────────────────────────────────────────────────
       35. Metocean Buoy Maintenance Explosion - 2013
    ─────────────────────────────────────────────────── */
    {
      id: 'metocean-buoy-explosion-2013',
      name: 'Metocean Buoy Maintenance Explosion',
      year: 2013,
      data_quality: 'The account is from IMCA Safety Flash SF 05/13, which is anonymised; the precise location and coordinates shown here are approximate/inferred and are not stated in the source (2026-07-04 fact-check audit).',
      date: 'Before April 2013 (IMCA SF 05/13, published 4 April 2013)',
      location: 'Offshore SE Asia - exact location not given in the IMCA source (approximate position shown)',
      lat: 6.43,
      lng: 116.07,
      region: 'Asia',
      location_precision: 'approximate',
      platform_type: 'Offshore service vessel - metocean buoy maintenance operation',
      operator: 'Undisclosed (IMCA member company)',
      weather_event_type: 'equipment',
      classification: 'survey',
      weather_event: 'Marine environmental degradation - 2-year sea deployment caused battery corrosion and hydrogen accumulation in sealed buoy compartment; ignited by angle grinder during maintenance',
      fatalities: 1,
      severity_override: 'notable',
      image: {
        src: 'images/metocean-buoy-explosion-2013-diagram.jpg',
        alt: 'IMCA sectional line drawing of the metocean buoy showing the electronics and battery compartments.',
        caption: 'Sectional drawing of the metocean buoy type involved, with electronics and battery compartments.',
        credit: 'International Marine Contractors Association, Safety Flash SF 05/13. Permission required.'
      },
      summary: 'A recovered metocean buoy exploded during maintenance aboard a service vessel off Sabah, Malaysia. After about two years at sea, corrosion had cracked the buoy\'s lead-acid batteries, filling the sealed instrument compartment with hydrogen. When a seized bolt would not come free, a technician used an angle grinder; the sparks ignited the gas and blew off the lid, which struck and killed a nearby crewman. The manual\'s mandatory purge step had not been followed (IMCA Safety Flash SF 05/13).',
      executive_summary: 'During maintenance of a recovered metocean buoy off Sabah, Malaysia, a technician used an angle grinder to free a seized bolt on the sealed instrument compartment. Corroded batteries had allowed hydrogen gas to accumulate inside after ~2 years at sea; sparks ignited the mixture and the explosion killed one crewman. The mandatory purging procedure had not been followed.',
      what_happened: 'The metocean buoy had been deployed at sea for approximately two years and was recovered for scheduled maintenance aboard a service vessel. After cleaning, a technician began opening the instrument compartment by removing 16 bolts. The final bolt had seized due to corrosion and could not be removed by hand.\n\nThe technician applied an angle grinder to the seized bolt. Sparks from the grinder immediately ignited an explosive mixture of hydrogen and oxygen that had accumulated inside the sealed compartment. The explosion violently projected the lid and internal modules outward. A nearby crewman was struck by the debris and fatally injured.\n\nInvestigation revealed that extended immersion had caused corrosion of the lid seal (accelerated by bird guano and sea spray), allowing water and salt ingress into the compartment. This had cracked the valve-regulated lead-acid battery cases; hydrogen gas had then escaped from the damaged batteries and accumulated inside the sealed space. The buoy\'s designed venting system had been rendered ineffective by the corrosion damage.\n\nCritically, the buoy\'s user manual explicitly required the compartment to be purged of gas before the lid was opened. This mandatory procedure was not followed.',
      what_went_wrong: [
        'The mandatory pre-opening purging procedure specified in the buoy\'s user manual was not performed. Personnel either were unaware of the requirement or chose to skip it - the procedure was critical and its omission was the direct cause of the fatality.',
        'An angle grinder - a powerful ignition source - was used to free a seized bolt on a sealed compartment that could contain explosive gas. No gas check was performed before introducing an ignition source.',
        'Extended deployment (~2 years) had caused severe corrosion of the lid seal, battery cases, and venting system. Scheduled maintenance intervals and inspection criteria did not adequately address the risk of hydrogen accumulation from corroded batteries.',
        'Risk assessment for the maintenance task did not identify the hazard of explosive gas accumulation in sealed metocean equipment enclosures.',
        'Personnel on the service vessel were not sufficiently trained or briefed on the specific hazards of servicing buoys equipped with lead-acid batteries after extended sea deployment.'
      ],
      lessons_learned: [
        'A recovered metocean buoy exploded when a technician used an angle grinder on a seized bolt: two years at sea had corroded the battery cases, filling the sealed compartment with hydrogen, and the manual\'s mandatory purge step had been skipped - the blast killed a nearby crewman. Treat any sealed enclosure holding lead-acid batteries as potentially full of explosive gas, and purge and gas-test it before opening or bringing any ignition source near it.',
        'Follow the manufacturer\'s purge procedure without exception - equalise the internal pressure, purge with air or nitrogen, and keep the lid open for a further 10 minutes or so before anyone works nearby.',
        'Never introduce an ignition source (grinder, drill, power tool) at a sealed buoy compartment that has not been confirmed gas-free, and keep personnel to a minimum at a safe stand-off during the first opening.',
        'Build the hydrogen-accumulation hazard into the maintenance risk assessment and the inspection intervals for long-deployed equipment - battery-case integrity, seal condition and venting are the corrosion indicators to watch.',
      ],
      actions: [
        'IMCA published Safety Flash SF 05/13 (4 April 2013), distributing the lessons across the marine contracting industry.',
        'Buoy operators updated maintenance procedures to mandate gas purging and testing before opening sealed battery compartments.',
        'Procurement and maintenance specifications were updated to require clear, accessible pre-maintenance gas-hazard documentation.',
        'Personnel training was updated to include battery gas-hazard awareness for maintenance on recovered marine instrumentation, and inspection intervals for long-deployed buoys were reviewed.',
      ],
      metocean: {
        notes: 'This incident is classified under metocean operations rather than a direct weather-driven event. The root cause was marine environmental degradation - corrosion from 2-year sea deployment (seawater, salt spray, bird guano) - that compromised battery integrity and seal condition. It is a critical lesson for all personnel involved in maintenance, recovery, and servicing of metocean equipment including waverider buoys, met-ocean moorings, and any instrumentation using sealed lead-acid battery systems. Location: South China Sea, ~50 km north of Kota Kinabalu, Sabah, Malaysia.'
      },
      references: [
        { title: 'IMCA Safety Flash SF 05/13 - Explosion Causing Fatal Injury During Maintenance of Metocean Buoy', type: 'Industry safety flash', publisher: 'International Marine Contractors Association (IMCA)', year: 2013, url: 'https://www.imca-int.com/resources/safety/safety-flashes/0513-explosion-causing-fatal-injury-during-maintenance-of-metocean-buoy/' }
      ]
    },

    /* ──────────────────────────────────────────────────
       36. ENI Krueng Mane - Andaman Sea Soliton
    ─────────────────────────────────────────────────── */
    {
      id: 'eni-aceh-soliton',
      name: 'ENI Krueng Mane - Andaman Sea Soliton Displacement',
      year: 2006,
      date: 'Mid-2000s (c. 2005-2007, before SEWS deployment in 2008)',
      location: 'Andaman Sea, Krueng Mane block, offshore Lhokseumawe, Aceh, NW Sumatra, Indonesia',
      lat: 5.60,
      lng: 97.30,
      region: 'Asia',
      platform_type: 'Drilling rig (semi-submersible or moored drillship) on deepwater exploration campaign',
      operator: 'ENI Krueng Mane Ltd. (Indonesia)',
      weather_event_type: 'internal_wave',
      classification: 'drilling',
      weather_event: 'Andaman Sea internal solitary waves (solitons) - tidal forcing over Andaman-Nicobar Ridge; currents exceeding 1.5 m/s (3 knots)',
      fatalities: 0,
      infrastructure_impact: 'Drill pipe ripped from BOP; rig displaced up to 189 m off location; 3 of 5 planned wells affected; significant equipment loss and operational downtime',
      severity_override: 'notable',
      image: {
        src: 'images/eni-aceh-soliton-slide-4-rig-impact-diagram.png',
        alt: 'Fugro GEOS diagram of a moored drilling rig, drill string and ROV exposed to an internal-wave current profile.',
        caption: 'Slide 4 diagram illustrating how solitons can affect a drilling rig, drill string, moorings and ROV; it does not depict the Krueng Mane event itself.',
        credit: 'Fugro GEOS, Soliton Early Warning System for Offshore Applications (2010), Slide 4. Permission required.'
      },
      summary: 'During ENI\'s deepwater drilling campaign in the Andaman Sea off Aceh, Indonesia, powerful internal solitary waves (solitons) repeatedly shunted the rig off location. The subsurface current pulses - over 1.5 m/s and invisible at the surface - displaced the rig up to 189 m and ripped the drill pipe from the BOP, affecting three of five planned wells. No one was hurt, but equipment loss and downtime were severe. The event led ENI and Fugro to deploy the first Soliton Early Warning System in 2008.',
      executive_summary: 'During ENI\'s deepwater drilling campaign in the Andaman Sea off Aceh, Indonesia, internal solitary waves (solitons) repeatedly displaced the drilling rig up to 189 m off location, ripping the drill pipe from the blowout preventer (BOP). Three of five planned wells were affected; no fatalities occurred but equipment loss was severe.',
      what_happened: 'The Andaman Sea is host to some of the world\'s most energetic internal solitary waves (solitons). They are generated when strong tidal currents impinge on the pycnocline at critical bathymetric features - primarily the Andaman-Nicobar Ridge between the Nicobar and Andaman Islands. Six distinct generation sources have been identified. The resulting soliton packets propagate eastward across the Andaman Sea, reaching the northwest Sumatran shelf after traversing more than 550 km.\n\nDuring ENI\'s Krueng Mane deepwater drilling campaign (mid-2000s), the drilling rig experienced repeated, sudden and violent off-location displacements. The soliton wave packets arrived with little or no visible surface signature - the sea appeared relatively calm - yet the subsurface current pulses were sufficient to overcome the rig\'s mooring and anchoring system.\n\nAt their peak, the soliton-induced currents exceeded 1.5 m/s (3 knots) and extended to depths of several hundred metres, enveloping the entire mooring and riser system. The rig was displaced up to 189 m from its drilling location in individual events. The cumulative effect on the drill string - a long, relatively rigid pipe connecting the rig to the BOP on the seafloor - was catastrophic: the lateral forces ripped the drill pipe at or near the BOP connection. Equipment was lost to the seafloor and operations on three of five planned wells were disrupted.\n\nSoliton occurrence in the area is tied to spring tidal cycles, making events predictable in principle but not in real time without dedicated subsurface monitoring.',
      what_went_wrong: [
        'No real-time subsurface current monitoring was in place - solitons arrived without warning. The surface sea state gave no indication of the approaching current pulse, leaving the rig crew with no time to take protective action (disconnect, adjust mooring, suspend drilling).',
        'The mooring and anchoring system was designed for steady-state current conditions; it did not account for the extreme transient lateral loads imposed by soliton wave packets with currents exceeding 1.5 m/s at operational depths.',
        'The Andaman Sea soliton hazard, while scientifically documented since the 1980s (Osborne and Burch, Science 1980), had not been integrated into the pre-drill metocean design basis or operational risk assessment for the Krueng Mane block.',
        'Drilling operational criteria (maximum current for continued drilling) were based on surface observations and steady-state current models - not the transient, depth-varying current profiles characteristic of internal wave packets.',
        'No industry-wide guidance existed at the time for managing soliton risk during deepwater drilling operations in the Andaman Sea - the hazard was known to oceanographers but had not translated into engineering standards or operational procedures.'
      ],
      lessons_learned: [
        'Andaman Sea internal solitary waves - invisible at the surface - repeatedly shunted ENI\'s drill rig up to 189 m off location and ripped the drill pipe from the BOP, because the mooring and operating limits were set for steady currents and there was no real-time subsurface warning. Where internal waves are generated, put soliton hazard in the metocean design basis, design moorings and risers for the transient loads, and monitor the current upstream for advance warning.',
        'Real-time subsurface monitoring (moored ADCPs between the generation zone and the site) gives actionable warning - the ENI-Fugro system achieved about 10-hour lead times.',
        'Design moorings and risers for the transient lateral loads of internal wave packets, not only steady tidal and loop currents, using measured soliton current profiles, and pre-define and drill a rapid drill-string disconnect for when a warning is received.',
        'Soliton timing is tied to spring tides, so plan operations to avoid the highest-risk windows where feasible - and apply the same site-specific assessment to any internal-wave basin (Luzon Strait, Mozambique Channel, Red Sea).',
      ],
      actions: [
        'ENI and Fugro designed and deployed the world\'s first dedicated Soliton Early Warning System (SEWS) in 2008 - two oceanographic mooring arrays between the Nicobar generation zone and the Aceh site, giving about 10-hour advance warning.',
        'The SEWS recorded 327 soliton events at its first mooring and 207 at the second, providing validated Andaman Sea frequency, speed and intensity data.',
        'The case study was presented at OFEG and published in metocean engineering literature, raising industry awareness of the hazard.',
        'IMCA published DPE 01/22 "Solitons - Be Mindful", referencing Andaman Sea cases and giving industry-wide guidance; the SEWS became a reference design for internal-wave monitoring worldwide.',
      ],
      metocean: {
        wave_height_hs: 'Surface sea state often calm - solitons have no significant surface signature',
        wind_speed: 'Not applicable - internal wave phenomenon independent of surface weather',
        notes: 'Andaman Sea solitons are generated at the Andaman-Nicobar Ridge (6 identified generation sites near Car Nicobar and Teresa Islands) and propagate ~550+ km eastward to the northwest Sumatra shelf. Packets contain 2-10 individual waves spaced 6-15 km apart. Subsurface current pulses reach 1.5-2.6 m/s and extend from the surface to 200-400 m depth. Occurrence is controlled by spring tidal cycles (threshold tidal range ~1.5 m). Satellite SAR imagery clearly shows soliton surface expressions (convergence/divergence bands) up to 12 hours in advance. Internal wave amplitudes at the generation site are ~44 m; amplitude growth during shoaling can exceed 150 m.'
      },
      references: [
        { title: 'Soliton Early Warning System for Offshore Applications - ENI Krueng Mane case study (OFEG)', type: 'Conference presentation / case study', publisher: 'Fugro GEOS Ltd / ENI Krueng Mane Ltd', year: 2010, url: 'https://www.ofeg.org/np4/%7B$clientServletPath%7D/?newsId=85&fileName=Soliton_Early_Warning_System.pdf', file: 'background files/Soliton_Early_Warning_System Andaman Sea Fugro.pdf', notes: 'Local PDF retained; Slide 4 is the source of the selected incident illustration.' },
        { title: 'IMCA DPE 01/22 - Solitons: Be Mindful', type: 'Industry guidance', publisher: 'International Marine Contractors Association (IMCA)', url: 'https://www.imca-int.com/resources/dp/dp-incidents/solitons-be-mindful/' },
        { title: 'Osborne & Burch (1980) - Internal Waves in the Andaman Sea', type: 'Scientific paper', publisher: 'Science (journal)', year: 1980, notes: 'Foundational description of Andaman Sea solitons' },
        { title: 'OTC-2797 - The Influence of Internal Waves on Deepwater Drilling Operations', type: 'Technical paper', publisher: 'Offshore Technology Conference', url: 'https://onepetro.org/OTCONF/proceedings-abstract/77OTC/All-77OTC/OTC-2797-MS/46838' },
        { title: 'SEAWATCH - Soliton Early Warning Case Study (ENI Aceh)', type: 'Industry case study', publisher: 'SEAWATCH / Fugro', url: 'https://seawatch.ai/soliton-case' },
        { title: 'NASA Earth Observatory - Making Waves in the Andaman Sea', type: 'Science outreach', publisher: 'NASA', url: 'https://science.nasa.gov/earth/earth-observatory/making-waves-in-the-andaman-sea-146256/' }
      ]
    },

    /* ──────────────────────────────────────────────────
       37. Jascon-4 Tugboat Capsize - Nigeria - 2013
    ─────────────────────────────────────────────────── */
    {
      id: 'jascon-4-2013',
      name: 'Jascon-4 Tugboat Capsizes due to Squall',
      year: 2013,
      date: '26 May 2013',
      location: 'Gulf of Guinea, ~30 km offshore Niger Delta, Nigeria (near Chevron platform)',
      lat: 4.52,
      lng: 5.20,
      region: 'Africa',
      platform_type: 'Offshore tugboat (West African Ventures) - engaged in tension tow operations',
      operator: 'West African Ventures (vessel operator) - contracted by Chevron Nigeria',
      weather_event_type: 'squall',
      classification: 'maritime',
      weather_event: 'Sudden squall with heavy ocean swells - rapid onset, no time for evasive action',
      fatalities: 11,
      persons_on_board: 12,
      survivors: 1,
      image: {
        src: 'images/jascon-4-2013-tugboat.jpg',
        alt: 'Jascon-4 tugboat before its capsize in the Gulf of Guinea.',
        caption: 'Jascon-4 before the capsize.',
        credit: 'West African Ventures. Permission required.'
      },
      pack_images: [
        {
          src: 'images/jascon-4-2013-okene-rescued.jpg',
          alt: 'Harrison Okene alive in an air pocket inside the capsized Jascon-4, filmed on the rescue diver\'s helmet camera.',
          caption: 'Harrison Okene found alive in his air pocket inside the capsized Jascon-4, about 30 m down, on the rescue diver\'s helmet camera - after roughly 60 hours trapped (May 2013).',
          credit: 'DCN Diving Group / Barcroft USA, via The Guardian (2023). Copyright; used for learning.'
        },
        {
          src: 'images/jascon-4-2013-okene-diver-now.jpg',
          alt: 'Harrison Okene today, in diving gear on a dive-support vessel.',
          caption: 'Harrison Okene afterwards: he trained and now works as a commercial saturation diver - the same trade as the men who rescued him.',
          credit: 'Handout, via The Guardian (2023). Copyright; used for learning.'
        }
      ],
      summary: 'The tugboat Jascon-4 capsized in a sudden squall about 30 km off the Niger Delta on 26 May 2013 while holding an oil tanker on a tension tow; 11 of the 12 crew died. The cook, Harrison Okene, survived about 60 hours in a small air pocket inside the sunken wreck at 30 m depth before saturation divers found him alive - one of the most remarkable survival and rescue stories in maritime history.',
      executive_summary: 'On 26 May 2013, a tugboat operating approximately 30 km off the Niger Delta coast in the Gulf of Guinea capsized after a sudden squall with heavy ocean swells struck without warning. Eleven of 12 crew perished; one survivor was found alive by saturation divers inside the sunken wreck after several days.',
      what_happened: 'On the morning of 26 May 2013 the tugboat Jascon-4 was holding an oil tanker on a tension tow about 30 km off the Niger Delta in the Gulf of Guinea. Without warning a sudden squall with heavy swells struck, and the tug capsized rapidly - with no time to don lifesaving gear or evacuate.\n\nEleven of the twelve crew were lost. The exception was the cook, Harrison Okene, who was in the bathroom as the vessel rolled. As Jascon-4 settled on the seabed at about 30 m, he found a small air pocket roughly 1.2 m high in the adjacent engineer\'s office.\n\nIn complete darkness and rising 28 degrees C water, Okene survived for about 60 hours - nearly three days - breathing the trapped air and treading water, while the surface teams searched for the wreck.\n\nOn the third day, saturation divers sent to the wreck detected signs of life; in a now-famous moment caught on camera, a diver\'s torch lit Okene\'s hand reaching from the dark. The divers fitted him a helmet and brought him out, and he spent about 60 more hours decompressing in a diving bell before surfacing safely.',
      what_went_wrong: [
        'A sudden squall with heavy swells struck with no useful warning, while the tug was committed to a demanding tension tow with no margin to respond.',
        'Gulf of Guinea tow operations face sudden convective squalls that build dangerous seas in minutes; the weather monitoring and go/no-go criteria were not matched to that hazard.',
        'The capsize was so rapid that the crew could not reach lifejackets or liferafts, or abandon in any order.',
        'Vessel stability on a tension tow can fall sharply when a loaded tow is caught beam-on to sudden heavy seas - a vulnerability that may not have been fully assessed.',
        'No formal investigation report was publicly released, limiting the full lessons the industry could draw.'
      ],
      lessons_learned: [
        'A routine tow became a disaster in minutes when a sudden squall caught the tug beam-on; Gulf of Guinea operations must treat fast-building convective squalls as a primary hazard, with real-time monitoring and automatic suspension triggers.',
        'A tension tow sharply limits a vessel\'s ability to react to sudden weather - go/no-go criteria must account for that reduced room to manoeuvre.',
        'Rapid capsize leaves no time to fetch lifesaving gear - it must be immediately to hand on offshore support vessels in open water.',
        'Air-pocket survival in a sunken vessel is possible: SAR planning near offshore operations should include rapid saturation-diving capability for people trapped in submerged spaces.'
      ],
      actions: [
        'No public investigation report was issued, so the first recommendation is simply that losses like this are formally investigated and the findings shared, in line with the IMO Casualty Investigation Code, so the industry can learn from them.',
        'Set weather windows and automatic stop or stand-off triggers for tension-tow and station-keeping work in squall-prone waters, driven by real-time radar and convective nowcasting rather than routine forecasts alone.',
        'Assess tug stability for the actual tension-tow condition - a loaded tow caught beam-on to sudden heavy seas - and define limiting sea states, headings and quick-release criteria in the operational risk assessment.',
        'Keep lifesaving gear wearable and immediately to hand for rapid capsize (PFDs worn during exposed tow work, float-free liferafts and EPIRB), and pre-position subsea or saturation-diving SAR that can search a sunken hull for survivors - which this rescue proved is possible.'
      ],
      metocean: {
        wave_height_hs: 'Heavy ocean swells from sudden squall - estimated 3-5 m',
        wind_speed: 'Squall conditions - likely 25-40 knots with sudden onset',
        sea_temp: '~28 °C (Gulf of Guinea)',
        notes: 'The Gulf of Guinea is subject to frequent sudden convective squalls, particularly during the rainy season (April-October). These events develop rapidly over warm equatorial waters with little warning from standard surface meteorological observations, and can generate dangerous localised wave conditions within minutes. The Niger Delta offshore area is particularly exposed due to the combination of warm SST, atmospheric instability, and complex coastal wind patterns.'
      },
      references: [
        { title: 'Wikipedia - Harrison Okene', type: 'Encyclopedia', url: 'https://en.wikipedia.org/wiki/Harrison_Okene' },
        { title: 'Wikipedia - Jascon 4', type: 'Encyclopedia', url: 'https://en.wikipedia.org/wiki/Jascon_4' },
        { title: 'Jascon-4 diver rescue footage - Harrison Okene (third-party hosted video)', type: 'Video footage', publisher: 'Third-party YouTube upload; original rescue footage attributed in reporting to DCN Diving', year: 2013, url: 'https://www.youtube.com/watch?v=_o82_2YFKlM', notes: 'Helmet-camera footage shows a saturation diver locating Harrison Okene alive inside the sunken Jascon-4. The YouTube upload is a third-party copy; verify availability and rights before embedding or republication.' },
        { title: 'I survived three days in a capsized boat on the ocean floor - praying in my air bubble', type: 'Interview / video context', publisher: 'The Guardian', year: 2023, url: 'https://www.theguardian.com/lifeandstyle/2023/sep/26/i-survived-three-days-in-a-capsized-boat-on-the-ocean-floor-praying-in-my-air-bubble', notes: 'Independent reporting by Paula Cocozza identifies the helmet-camera moment and credits the rescue image to DCN Diving Group / Barcroft USA.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       38. Dampier Spirit FSO - Cyclone Hubert - 2006
    ─────────────────────────────────────────────────── */
    {
      id: 'dampier-spirit-2006',
      name: 'Dampier Spirit FSO - Cyclone Hubert Mooring Failure',
      year: 2006,
      date: '6-7 April 2006',
      location: 'Stag Oilfield, North West Shelf, ~60 km NW of Dampier, Western Australia',
      lat: -20.283,
      lng: 116.250,
      region: 'Australia',
      platform_type: 'Floating Storage and Offloading (FSO) vessel - converted Aframax tanker, single-point CALM buoy mooring',
      operator: 'Apache Energy Ltd (field operator) / Teekay Offshore (vessel manager)',
      weather_event_type: 'cyclone',
      classification: 'maritime',
      storm_sid: '2006081S14129',
      storm_name: 'HUBERT',
      weather_event: 'Tropical Cyclone Hubert (Australian scale) - around Category 1-2 near the FSO, weakening near landfall on 7 April 2006',
      fatalities: 0,
      infrastructure_impact: 'Hawser failure and breakaway coupling parted; minor oil release; vessel at near-grounding risk; significant mooring system damage',
      severity_override: 'major',
      image: {
        src: 'images/dampier-spirit-2006-fso.jpg',
        alt: 'Dampier Spirit floating storage and offloading vessel at the Stag field.',
        caption: 'Dampier Spirit at the Stag field after the cyclone event.',
        credit: 'Teekay Corporation. Permission required.'
      },
      summary: 'During Tropical Cyclone Hubert in April 2006 the FSO Dampier Spirit - moored by a single-point CALM buoy at the Stag field on the Australian North West Shelf - lost its hawser as the cyclone passed, and the import-hose breakaway coupling also parted, releasing oil. Left unmoored in cyclonic seas, it came close to grounding; there were no injuries and it was recovered. The event exposed the lack of redundancy in single-point moorings and drove major revisions to NW Shelf mooring standards (ATSB report MAIR226).',
      executive_summary: 'During Tropical Cyclone Hubert in April 2006, the FSO Dampier Spirit\'s primary hawser to its CALM buoy mooring on the Australian North West Shelf parted under cyclonic loading. Left unmoored in active cyclone conditions, the vessel narrowly avoided grounding; the import hose breakaway coupling also parted, releasing oil. No fatalities occurred.',
      what_happened: 'The Dampier Spirit was a converted Aframax tanker (built 1987) operating as a Floating Storage and Offloading unit at the Stag Oilfield, approximately 60 km northwest of Dampier in the Carnarvon Basin. It was connected to the field via a single-point catenary anchor leg mooring (CALM) buoy system.\n\nAs Tropical Cyclone Hubert tracked toward the WA coast on 6-7 April 2006, its Category 2 conditions imposed cyclonic wave and wind loads on the FSO\'s mooring system. The primary hawser connecting the vessel to the CALM buoy failed under the storm loading. Simultaneously, the breakaway coupling on the import hose parted, releasing oil into the sea.\n\nWith the hawser broken, the Dampier Spirit was no longer secured to its mooring point and was exposed to the full force of the cyclone in shallow coastal waters approximately 60 km from shore. The vessel faced a serious near-grounding risk. Emergency manoeuvring and response actions were taken; the vessel did not ground, and no personnel were killed or injured. The vessel was subsequently recovered and re-moored.\n\nThe ATSB investigated the incident under report MAIR226, examining both the hawser failure mechanism and the vessel\'s manoeuvring difficulties in cyclonic conditions.',
      what_went_wrong: [
        'The single-point CALM buoy mooring system provided no redundancy - once the primary hawser failed, the vessel was entirely free in open sea during an active cyclone. Multi-point or redundant mooring systems would have retained vessel position after a single line failure.',
        'The hawser failed under cyclonic wave and wind loads, suggesting the mooring design criteria for extreme cyclone loading may not have been met, or that the hawser had suffered degradation that reduced its strength below design specification.',
        'The breakaway coupling on the import hose parted simultaneously with the hawser failure, releasing oil - compounding the incident with an environmental consequence.',
        'Single-point CALM buoy systems used for FSOs on the Australian NW Shelf were not designed with sufficient redundancy for Category 2 cyclone conditions at that time. The regulatory framework had not yet addressed this gap explicitly.',
        'Manoeuvring the vessel safely in active cyclone conditions after mooring loss proved extremely difficult - there was no pre-planned emergency response procedure for loss of mooring during a cyclone passage.'
      ],
      lessons_learned: [
        'Cyclone Hubert parted the single hawser holding the FSO Dampier Spirit to its CALM buoy, leaving it adrift in shallow coastal water and close to grounding, while the import-hose coupling released oil. A single-point mooring in a cyclone region has no redundancy - once the one connection fails the vessel is loose, so mooring systems must survive the worst credible cyclone loading without total loss of station.',
        'Mooring hawser integrity management needs regular inspection, load monitoring and fatigue-based replacement - degraded hawsers fail below their nominal design load.',
        'Pre-cyclone emergency procedures must include explicit actions for loss of mooring: emergency anchoring, engine-assisted station-keeping and evacuation criteria.',
        'Breakaway couplings on import and export hoses must prevent oil release under the dynamic conditions of a mooring failure in cyclonic seas.',
      ],
      actions: [
        'ATSB published investigation report MAIR226 (2007) with formal safety recommendations.',
        'NOPSEMA and APPEA developed enhanced guidance for MODU and FSO mooring in cyclonic conditions, and NOPSEMA issued an information paper requiring operators to reassess mooring adequacy against updated cyclone criteria.',
        'A CSIRO-led industry study developed a formal risk-management framework for mooring safety during Australia\'s cyclone season, triggered by this incident.',
        'The Australian offshore industry adopted more conservative NW Shelf mooring design criteria, drawing on both Dampier Spirit and the earlier Cyclone Orson experience.',
      ],
      metocean: {
        wave_height_hs: 'Estimated 5-8 m (Category 2 cyclone, shallow Carnarvon Basin shelf)',
        wind_speed: '~100 km/h (54 knots) sustained - Category 2 Australian scale',
        sea_temp: '~28 °C (NW Shelf April)',
        notes: 'Cyclone Hubert formed 4-5 April 2006 and tracked southwest toward the WA coast, making landfall just west of Mardie on the evening of 7 April after weakening to a tropical low. The Stag Oilfield sits on the North West Shelf in relatively shallow water, where cyclone wave heights are amplified by shoaling effects and the CALM buoy mooring system experienced the full cyclic loading of cyclone wave action.'
      },
      references: [
        { title: 'ATSB Marine Investigation Report MAIR226 - Hawser failure and manoeuvring difficulties on board Dampier Spirit during Cyclone Hubert (2007)', type: 'Official investigation report', publisher: 'Australian Transport Safety Bureau (ATSB)', year: 2007, url: 'https://www.atsb.gov.au/publications/investigation_reports/2006/mair/mair226' },
        { title: 'NOPSEMA - MODU Mooring Systems in Cyclonic Conditions (information paper)', type: 'Regulatory guidance', publisher: 'National Offshore Petroleum Safety and Environmental Management Authority (NOPSEMA)', url: 'https://www.nopsema.gov.au/sites/default/files/documents/2021-03/A461468.pdf' },
        { title: 'CSIRO - A risk management approach to safe mooring systems in Australia\'s cyclone seasons', type: 'Technical paper', publisher: 'CSIRO / Australian Journal of Civil Engineering', url: 'https://www.publish.csiro.au/AJ/AJ15056' },
        { title: 'Bureau of Meteorology - Tropical Cyclone Hubert (2006)', type: 'Meteorological record', publisher: 'Australian Bureau of Meteorology', url: 'https://www.bom.gov.au/cyclone/history/hubert.shtml' }
      ]
    },

    /* ──────────────────────────────────────────────────
       39. Malampaya Pipeline - Turbidity Current - 2006
    ─────────────────────────────────────────────────── */
    {
      id: 'malampaya-turbidity-2006',
      name: 'Malampaya Pipeline - Typhoon-Triggered Turbidity Current',
      year: 2006,
      date: '2006 (Typhoon Durian, late November / early December 2006)',
      location: 'Verde Island Passage, north of Mindoro Island, Philippines - Malampaya pipeline crossing of the Baco-Malaylay Submarine Canyon',
      lat: 13.55,
      lng: 121.29,
      region: 'Asia',
      platform_type: '504-km gas export pipeline (subsea) - Malampaya field (Palawan) to Batangas terminal (Luzon)',
      operator: 'Shell Philippines Exploration BV (SPEX) - JV with Chevron Malampaya LLC (45%) and PNOC Exploration Corporation (10%)',
      weather_event_type: 'current',
      classification: 'pipeline',
      weather_event: 'Typhoon Durian (November 2006) - extreme rainfall loaded the Baco-Malaylay canyon with sediment, triggering a catastrophic turbidity current',
      fatalities: 0,
      infrastructure_impact: 'Malampaya 504-km gas pipeline displaced from seabed; protective rock berms damaged over affected section; significant remediation required',
      severity_override: 'major',
      image: {
        src: 'images/malampaya-turbidity-2006-pipeline-displacement-map.png',
        alt: 'Bathymetry map showing the Malampaya pipeline as built and its displaced route through the Malaylay and Baco canyon system.',
        caption: 'Pipeline as built and displaced through the Malaylay and Baco submarine canyon system.',
        credit: 'Sequeiros et al. (2019), Scientific Reports, CC BY 4.0'
      },
      summary: 'In late 2006, Typhoon Durian\'s extreme rainfall over Mindoro triggered a turbidity current - a fast underwater avalanche of water-saturated sediment - in the Baco-Malaylay submarine canyon. It crossed the 504-km Malampaya subsea gas pipeline, displacing it from the seabed and damaging the protective rock berms, though no leak or injury resulted. It became a landmark case (Scientific Reports, 2019) of a typhoon-triggered turbidity current damaging critical offshore infrastructure.',
      executive_summary: 'In late 2006, extreme rainfall from Typhoon Durian loaded the Baco and Malaylay rivers with sediment that drained into the Baco-Malaylay Submarine Canyon, triggering a turbidity current. The fast-moving sediment flow displaced the 504-km Malampaya subsea gas export pipeline from its seabed position and damaged its protective rock berms. No fatalities occurred; pipeline integrity was maintained.',
      what_happened: 'The Malampaya gas pipeline is a 504-km subsea gas export system running from the Malampaya deepwater gas platform (80 km off Palawan, in approximately 43 m water depth at the platform, with subsea wells at ~850 m) eastward through the Mindoro Strait to a gas processing terminal at Batangas, Luzon. The pipeline traverses a complex bathymetric environment including the deep-water Baco-Malaylay Submarine Canyon system on the northern flank of Mindoro Island.\n\nDuring the 2006 typhoon season, Typhoon Durian (late November 2006) delivered extreme rainfall over Mindoro Island. The intense precipitation mobilised large volumes of sediment from the Baco and Malaylay river catchments, which fed rapidly into the heads of the submarine canyon system. The canyon geometry and sediment loading created conditions for a catastrophic turbidity current - a gravity-driven, high-density flow of sediment-laden water.\n\nThe turbidity current descended the canyon at high velocity and extended to the depths where the Malampaya pipeline lay on the seabed. The force of the flow was sufficient to physically displace the pipeline from its designed position and to destroy or displace sections of the protective rock berm armouring installed to stabilise the pipeline against external forces. The displacement was detected during subsequent pipeline inspection surveys. No gas release or fatalities were reported; the pipeline integrity was maintained despite the displacement.\n\nThe incident was extensively studied post-event and analysed in a Scientific Reports paper (2019), "How typhoons trigger turbidity currents in submarine canyons", which modelled the Typhoon Durian (2006) event and contrasted it with Typhoon Melor (December 2015), which did not generate a significant turbidity current.',
      what_went_wrong: [
        'The geohazard posed by the Baco-Malaylay submarine canyon to the pipeline route had been identified in design, leading to protective rock berms, but the berms were not designed for the magnitude of turbidity current a major typhoon can generate.',
        'The typhoon-to-turbidity-current chain - extreme rainfall loading the canyon head with river sediment and producing a density flow that damaged the pipeline - was not fully incorporated as a design load case for the pipeline and its protection.',
        'At the time of design (late 1990s), the quantitative link between typhoon intensity, catchment sediment yield and turbidity-current magnitude in Philippine submarine canyons was poorly understood.',
        'The pipeline condition was only checked at scheduled surveys, so the displacement was not detected in real time - only during a post-event survey.',
        'The route had limited alternative corridors: the Mindoro Strait is a chokepoint on the only viable pipeline route from Palawan to Luzon.',
      ],
      lessons_learned: [
        'Typhoon Durian\'s extreme rainfall loaded the Baco-Malaylay submarine canyon off Mindoro with sediment, triggering a turbidity current - an underwater sediment avalanche - that displaced the 504-km Malampaya gas pipeline and damaged its protective rock berms. No leak resulted, but it established a hazard class: a subsea pipeline crossing an active submarine canyon must be designed for typhoon-triggered turbidity currents, not just wave and trawl loads.',
        'Pipeline protection (rock berms, mattresses, trenching) in turbidity-current-prone areas must be designed for the extreme flow velocities of plausible canyon-scale events.',
        'Deploy subsea monitoring (current meters, position sensors, inline inspection) in known geohazard corridors to detect pipeline movement near real time, not only at scheduled surveys.',
        'Pipeline route selection must evaluate proximity to active submarine canyons; where a crossing is unavoidable, use site-specific turbidity-current probability analysis from typhoon climatology and catchment sediment budgets.',
      ],
      actions: [
        'The operator carried out detailed post-incident surveys and remediation of the affected section, including restoration of the rock-berm protection.',
        'The event was analysed in peer-reviewed work (Sequeiros et al., 2019) that established the typhoon-turbidity-current-pipeline-damage chain as a documented hazard class.',
        'Geohazard assessment methods for subsea pipelines in SE Asia were updated to include typhoon-triggered turbidity-current risk in canyon environments.',
        'Later deepwater pipeline projects in the region incorporated turbidity-current load cases in route, protection design and post-lay inspection scheduling.',
      ],
      metocean: {
        wave_height_hs: 'Not the primary hazard - pipeline damage caused by subsurface turbidity current, not surface wave action',
        wind_speed: 'Typhoon Durian (November 2006) - typhoon-force winds; the damage mechanism was rainfall-driven, not wind/wave',
        notes: 'The hazard mechanism is indirect: typhoon rainfall (not waves) loaded the canyon with sediment, triggering the turbidity current. The Baco-Malaylay Canyon system is fed by the Baco and Malaylay rivers on the northern coast of Mindoro Island. Turbidity-current velocities in such events can reach several m/s at canyon-floor depths. The Philippines is among the most typhoon-affected countries in the world (~20 typhoons/year).'
      },
      references: [
        { title: 'How typhoons trigger turbidity currents in submarine canyons (2019)', type: 'Peer-reviewed scientific paper', publisher: 'Scientific Reports (Nature)', year: 2019, url: 'https://www.nature.com/articles/s41598-019-45615-z', notes: 'Models the Typhoon Durian (2006) turbidity current in the Baco-Malaylay/Mindoro submarine canyon and contrasts it with Typhoon Melor (2015)' },
        { title: 'Offshore Technology - Malampaya gas field project description', type: 'Industry reference', publisher: 'Offshore Technology', url: 'https://www.offshore-technology.com/projects/malampaya/' }
      ]
    },

    /* ──────────────────────────────────────────────────
       40. Airbus Helicopters EC175 B (G-MCSH) - 2023
    ─────────────────────────────────────────────────── */
    {
      id: 'ec175-elgin-2023',
      name: 'EC175 (G-MCSH) Rotor-Blade Damage on Elgin Helideck',
      year: 2023,
      date: '17 February 2023',
      location: 'Elgin PUQ Oil Platform, North Sea, UK',
      lat: 56.0,
      lng: 2.75,
      region: 'Europe',
      platform_type: 'Helicopter on offshore oil platform helideck',
      operator: 'Helicopter operator / Elgin platform operator',
      weather_event_type: 'storm',
      classification: 'aviation',
      weather_event: 'Strong winds from approaching Atlantic storm; severe gusts at platform helideck',
      fatalities: 0,
      persons_on_board: null,
      infrastructure_impact: 'Four main rotor blades broke and detached from helicopter; one blade narrowly missed personnel on helideck',
      severity_override: 'notable',
      image: {
        src: 'images/ec175-elgin-2023-blade-fracture-cctv.jpg',
        alt: 'CCTV frame showing an EC175 blade fracturing and striking the fuselage on the Elgin helideck.',
        caption: 'CCTV frame of the G-MCSH blade fracture on the Elgin helideck.',
        credit: 'TotalEnergies E&P UK via the AAIB report. Permission required.'
      },
      summary: 'During an approach to the Elgin platform ahead of an Atlantic storm, the EC175 helicopter was shut down on the helideck after a tail-rotor-gearbox chip warning. A failure of the rotor brake left the main rotors free to sail in strong gusts enhanced by the platform\'s \'cliff edge\' aerodynamic effect; four main rotor blades broke and detached, one nearly striking personnel trying to secure the aircraft. The event exposed operational shortcomings, the rotor-brake failure and flight-recorder faults. There were no fatalities but a significant safety hazard.',
      executive_summary: 'On 17 February 2023, an EC175 helicopter was shut down on the Elgin North Sea platform after a tail rotor gearbox chip warning, but the rotor brake failed, leaving the main rotors free to sail in strong gusts. Four main rotor blades detached; one narrowly missed personnel on the helideck. No fatalities occurred.',
      what_happened: 'On 17 February 2023, an Airbus Helicopters EC175 B helicopter (registration G-MCSH) was transiting to the Elgin PUQ accommodation platform in the North Sea ahead of an approaching Atlantic storm. During approach, a tail rotor gearbox chip warning illuminated, signalling potential mechanical degradation.\n\nThe helicopter was shut down and parked on the helideck. The crew and platform personnel attempted to secure it using main rotor blade tie-down straps - standard procedure for severe weather. However, the helicopter\'s rotor brake system failed to operate, leaving the main rotors free to rotate.\n\nAs the storm passed through, strong winds and gusts across the platform - exacerbated by vertical air flow created by an accommodation block cliff edge - caused the unstopped rotors to sail violently. Dynamic blade loading increased dramatically with each gust. Four of the helicopter\'s main rotor blades failed at their root attachment points and detached completely from the aircraft.\n\nOne detached blade nearly struck a person on the helideck who was attempting to strap the helicopter down. The incident was contained to structural damage only; no personnel were injured.',
      what_went_wrong: [
        'The rotor brake - a critical safety mechanism designed to stop rotors when the helicopter is parked or in emergency situations - failed to function due to unspecified mechanical failure, leaving rotors free to sail in strong winds.',
        'Operational procedures did not account for the possibility of rotor brake failure or provide a contingency method to stop rotors when the brake was inoperative. The helicopter remained unsecured on the helideck.',
        'Platform design or operating procedures did not account for the vertical air flow cliff-edge effect created by the accommodation block, which intensified wind gusts on the helideck and exacerbated rotor blade sailing loads.',
        'The tie-down procedure assumed the rotor brake would function; when it failed, there was no backup method to prevent rotor rotation before blade stresses exceeded material strength limits.',
        'Flight data recorder and possibly other onboard systems had faults that limited the investigation\'s ability to understand the sequence of events in detail - redundancy and system health checks were inadequate.'
      ],
      lessons_learned: [
        'Rotor brake systems on offshore-based helicopters must have redundancy, health monitoring, and pre-flight verification protocols to ensure they are serviceable before parking in strong-wind environments.',
        'Emergency procedures must include explicit contingencies for rotor brake failure - either secondary locking mechanisms, manual rotor restraint devices, or mandatory evacuation of the helideck when brake servicing status is unknown.',
        'Platform design must account for wind acceleration effects (cliff-edge vortex shedding) on helipads; wind speed measurements and helicopter tie-down procedures must use site-specific worst-case gust factors.',
        'Flight data recorders and critical sensor systems on offshore helicopters must be regularly inspected, maintained, and redundant - loss of recording capability hampers accident investigation and learning.',
        'Helicopter operators and platform managers must jointly conduct wind-risk assessments for each offshore location, accounting for platform geometry and storm approach tracks.'
      ],
      actions: [
        'AAIB issued six formal Safety Recommendations (published May 2025) addressing rotor brake verification, emergency procedures, and flight recorder serviceability.',
        'UK helicopter operators and Airbus Helicopters implemented enhanced rotor brake pre-flight and pre-parking inspection protocols, including functional tests before strong-wind exposure.',
        'Offshore platform operators (NOPSEMA and DECC guidance) updated helicopter tie-down and storm response procedures to include rotor brake failure contingencies.',
        'Airbus Helicopters reviewed EC175 rotor brake design and maintenance intervals; recommendations for design enhancement or procedural change were likely incorporated into future service bulletins.',
        'Industry (IOGP, CHC Helicopter, and platform operators) began reviewing helipad wind acceleration effects at North Sea platforms, with some platform upgrades to wind deflectors or modified tie-down procedures.'
      ],
      metocean: {
        wave_height_hs: 'Not the dominant hazard; rotor blade damage caused by wind gust loading, not waves',
        wind_speed: 'Strong gusts during Atlantic storm passage; exact gust magnitude not disclosed in published AAIB summary, but sufficient to cause rotor blade failure when unstopped',
        notes: 'The platform cliff-edge effect (vertical wind acceleration around the accommodation block) created gusts on the helideck significantly higher than ambient wind speed. This is a known aerodynamic hazard on North Sea platforms but is often underestimated in tie-down procedures. Storm passage occurred 17 February 2023, consistent with Atlantic winter storm patterns.'
      },
      references: [
        { title: 'AAIB Investigation Report - Airbus Helicopters EC175 B, G-MCSH', type: 'Official accident investigation', publisher: 'UK Air Accidents Investigation Branch', year: 2025, url: 'https://www.gov.uk/aaib-reports/aaib-investigation-to-airbus-helicopters-ec175-b-g-mcsh', notes: 'Published 22 May 2025 - field investigation bulletin documenting rotor brake failure and blade detachment event' },
        { title: 'AAIB Glossary of Abbreviations - Investigation Report', type: 'Technical reference', publisher: 'UK Air Accidents Investigation Branch', year: 2025, url: 'https://assets.publishing.service.gov.uk/media/682471f8ffcd6ecfbf1ab82d/Abbreviations.pdf' }
      ]
    }

    /* ──────────────────────────────────────────────────
       41. La Pampilla Oil Spill - 2022
    ─────────────────────────────────────────────────── */
    ,{
      id: 'la-pampilla-2022',
      name: 'La Pampilla Refinery Oil Spill',
      year: 2022,
      date: '15 January 2022',
      location: 'Ventanilla, Callao, Peru - La Pampilla Terminal No. 2',
      lat: -11.87,
      lng: -77.19,
      region: 'South America',
      platform_type: 'Multi-buoy offshore transfer terminal / crude tanker Mare Doricum',
      operator: 'Repsol (terminal); Mare Doricum (Italian-flagged tanker)',
      weather_event_type: 'tsunami',
      classification: 'coastal',
      weather_event: 'Meteo-tsunami from Hunga Tonga volcanic eruption - anomalous long-period waves reached Peru >10,000 km from source',
      fatalities: 0,
      persons_on_board: null,
      survivors: null,
      severity_override: 'major',
      infrastructure_impact: '~11,900 barrels crude oil spilled; 700 ha contaminated; 24 beaches affected - largest oil spill in Peru\'s history',
      image: {
        src: 'images/la-pampilla-2022-shoreline-cleanup.png',
        alt: 'Shoreline cleanup operations following the La Pampilla oil spill on the Peruvian coast.',
        caption: 'Shoreline cleanup following the La Pampilla oil spill; exact date and photographer are unconfirmed.',
        credit: 'Published by SpillControl in an article by Carlos Sagrera. Permission required.'
      },
      summary: 'On 15 January 2022, the Italian tanker Mare Doricum was offloading crude oil at the Multi-buoy Terminal No. 2 of Repsol\'s La Pampilla refinery near Callao, Peru, when anomalous long-period waves from the Hunga Tonga volcanic eruption - over 10,000 km away - disrupted the mooring. The moorings failed during active transfer, releasing ~11,900 barrels into the Pacific. The spill contaminated 700 hectares and 24 beaches, killing hundreds of marine birds and mammals - the largest oil spill in Peru\'s history. No fatalities occurred.',
      executive_summary: 'Tsunami waves from the Hunga Tonga eruption - over 10,000 km away - reached Peru\'s coast and parted the mooring of tanker Mare Doricum during active crude transfer at Repsol\'s La Pampilla terminal, spilling ~11,900 barrels across 700 ha of coastline - Peru\'s largest oil spill. No fatalities.',
      what_happened: 'On 15 January 2022, the Italian-flagged crude tanker Mare Doricum was offloading its cargo at Multi-buoy Terminal No. 2 of Repsol\'s La Pampilla refinery at Ventanilla, Callao, Peru. That morning, the submarine volcano Hunga Tonga-Hunga Ha\'apai in the South Pacific - over 10,000 km away - erupted in one of the most powerful volcanic explosions recorded in the 21st century, generating a meteo-tsunami that propagated across the Pacific Ocean.\n\nAt La Pampilla the tsunami arrived as anomalous long-period waves. The Callao tide gauge recorded approximately 0.68 m, but the offshore multi-buoy terminal experienced higher local forcing from the long-wave energy. The unusual swell destabilised the Mare Doricum\'s mooring during active hose transfer. The moorings parted and the transfer hose failed, releasing crude oil directly into Callao Bay.\n\nApproximately 11,900 barrels of crude oil spilled, forming a slick that spread across 700 hectares of coastal water and washed onto 24 beaches and two protected natural areas. Hundreds of seabirds and marine mammals were killed. Peruvian authorities declared an ecological disaster - the largest oil spill in the country\'s history. Repsol initially attributed the event to the "abnormal waves" but faced regulatory and legal criticism for not having suspended operations on receipt of NOAA Pacific tsunami advisories. Peruvian authorities pursued administrative and judicial fines totalling on the order of US$37 million, though the final amounts and liability remained subject to appeals and ongoing litigation.',
      what_went_wrong: [
        'Transfer operations continued despite an active NOAA Pacific tsunami advisory following the Tonga eruption - no procedure existed to suspend offshore loading on receipt of a far-field tsunami warning.',
        'Long-period tsunami waves are not captured in standard metocean operational envelopes for mooring and transfer - the terminal\'s mooring design criteria addressed wind-sea and swell but not resonant long-wave forcing.',
        'Natech risk (natural hazard triggering a technological accident) was not identified or mitigated for this facility - hazardous-fluid transfer at a Pacific-coast terminal in a seismically active zone requires explicit tsunami response protocols.',
        'Regulatory and operational frameworks for offshore terminals in tsunami-exposed regions lacked specific guidance on operational suspension thresholds for distant-source wave events.'
      ],
      lessons_learned: [
        'Far-field tsunami advisories (PTWC / NOAA) must be integrated into operational decision-making at offshore and coastal terminals - a defined protocol for suspending hazardous-material transfer on advisory receipt is essential in Pacific basin operations.',
        'Metocean design criteria and operational envelopes must explicitly address long-period wave energy from distant volcanic or seismic sources, particularly for facilities on Pacific or Indian Ocean coasts.',
        'Natech risk must be formally identified in safety cases for offshore terminals in seismically and volcanically active regions - the combination of normal operations and an external natural trigger can produce catastrophic consequences.',
        'Regulatory oversight of real-time hazard monitoring and operational response at major offshore terminals needs strengthening in tsunami-hazard zones.'
      ],
      actions: [
        'Peruvian environmental regulator (OEFA) imposed administrative fines totalling ~64.8 million soles (~US$17.9M), and additional judicial fines of ~69.6 million soles (~US$19.2M) were sought - the amounts remained subject to appeals and ongoing legal proceedings rather than being fully settled.',
        'Repsol established a Social Action Plan for affected coastal fishing communities and funded a multi-year environmental remediation programme.',
        'NOAA and academic researchers (Natural Hazards and Earth System Sciences, 2024) published case studies on volcano-tsunami effects on moored vessels, providing recommendations for improved operational protocols at Pacific-coast offshore terminals.',
        'The incident prompted wider industry review of Natech risk management frameworks for offshore and coastal hydrocarbon facilities in tsunami-prone regions.'
      ],
      metocean: {
        wave_height_hs: '~0.68 m at Callao tide gauge; long-period tsunami waves at offshore terminal likely higher',
        notes: 'The hazard was not conventional wind-generated swell. Long-period (wave periods >10 min) tsunami waves from the Hunga Tonga eruption propagated >10,000 km across the Pacific. The local sea state appeared calm to observers while anomalous wave energy imposed large mooring forces. Standard metocean criteria do not capture far-field volcanic tsunami forcing.'
      },
      references: [
        { title: 'Volcanos, Tsunami, La Pampilla Refinery & the Tanker Mare Doricum - Peru 2022', url: 'https://spillcontrol.org/2023/07/24/volcanos-tsunami-la-pampilla-refinery-the-tanker-mare-doricum-peru-2022/', type: 'Technical analysis', publisher: 'SpillControl', year: 2023 },
        { title: 'Oil Spill near Lima, Peru - NOAA Significant Incidents', url: 'https://response.restoration.noaa.gov/oil-and-chemical-spills/significant-incidents/oil-spill-near-lima-peru', type: 'Official incident record', publisher: 'NOAA Office of Response and Restoration', year: 2022 },
        { title: 'Volcano tsunamis and their effects on moored vessel safety: the 2022 Tonga event', url: 'https://nhess.copernicus.org/articles/24/3095/2024/', type: 'Peer-reviewed paper', publisher: 'Natural Hazards and Earth System Sciences (Copernicus / EGU)', year: 2024 }
      ]
    },

    /* ──────────────────────────────────────────────────
       42. FPSO P-70 Mooring Breakaway - 2020
    ─────────────────────────────────────────────────── */
    {
      id: 'fpso-p70-2020',
      name: 'FPSO P-70 Mooring Breakaway',
      year: 2020,
      date: '30 January 2020',
      location: 'Guanabara Bay, Rio de Janeiro, Brazil',
      lat: -22.85,
      lng: -43.10,
      region: 'South America',
      platform_type: 'FPSO (P-70, commissioning phase)',
      operator: 'Petrobras',
      weather_event_type: 'squall',
      classification: 'maritime',
      weather_event: 'Unexpected strong winds - Guanabara Bay squall during incomplete mooring installation',
      fatalities: 0,
      persons_on_board: null,
      survivors: null,
      severity_override: 'notable',
      infrastructure_impact: 'Two mooring lines parted; FPSO drifted ~100 m toward Niterói shoreline before tugs recovered control - no damage',
      image: {
        src: 'images/fpso-p70-2020-vessel.jpg',
        alt: 'FPSO P-70 in Guanabara Bay, Rio de Janeiro, Brazil.',
        caption: 'FPSO P-70 in Guanabara Bay.',
        credit: 'Petrobras via OE Digital. Permission required.'
      },
      summary: 'On 30 January 2020, FPSO P-70 was undergoing final commissioning in Guanabara Bay, Rio de Janeiro, freshly delivered from a Chinese shipyard, when unexpected strong winds struck while only three of four mooring lines had been connected. Two lines parted and the vessel drifted approximately 100 metres toward the Niterói shoreline before port tugs recovered control. No casualties or environmental damage occurred. The incident illustrates the heightened vulnerability of floating units during phased mooring installation.',
      executive_summary: 'During commissioning in Guanabara Bay, FPSO P-70 had only three of four mooring lines connected when strong winds struck. Two lines parted; the vessel drifted ~100 m toward shore before tugs recovered control. No casualties or damage.',
      what_happened: 'Petrobras FPSO P-70 was delivered to Brazil from a Chinese shipyard and arrived at Guanabara Bay, Rio de Janeiro, in late January 2020 for final commissioning before proceeding to the Atapu pre-salt field in the Santos Basin. On the morning of 30 January 2020, the vessel was successfully offloaded from the semi-submersible heavy-lift vessel Boka Vanguard. Mooring operations then commenced in the sheltered but confined waters of the bay.\n\nDuring the afternoon, with only three of the four planned mooring lines connected, unexpected strong winds struck Guanabara Bay. Under the asymmetric wind loading, two of the three connected mooring lines parted. Without adequate mooring restraint and with no operational propulsion during the commissioning phase, the vessel drifted approximately 100 metres toward the Niterói shoreline. Port tugs engaged and brought the vessel under control before it could contact the shore.\n\nPetrobras reported no casualties and no damage to the vessel or environment. The P-70 was re-moored in the bay, completed commissioning, received the necessary regulatory authorisations, and proceeded to the Atapu field where it entered production later in 2020.',
      what_went_wrong: [
        'Mooring operations were progressed with an incomplete system - only 3 of 4 mooring lines were connected when weather conditions deteriorated.',
        'No defined operational weather limit was in place for the partially-moored state - the vessel was managed against the final fully-moored design envelope, which does not apply to an incomplete installation.',
        'Guanabara Bay is a semi-enclosed body of water where localised wind events can develop rapidly and are not reliably captured by regional forecasts; the mooring campaign did not account for this local meteorological characteristic.'
      ],
      lessons_learned: [
        'FPSO P-70 was being moored in sheltered Guanabara Bay with only three of four lines connected when a squall struck; two lines parted and the unpropelled vessel drifted about 100 m toward shore before tugs caught it. A partly-moored floating unit is a distinct, more vulnerable state - set weather limits and standby tugs for the incomplete-mooring condition, not just the final design.',
        'Phased mooring installation is a high-risk lifecycle state - operational weather limits must be specifically defined for the partially-moored condition, not just the final design mooring.',
        'Semi-enclosed or confined waters can experience rapid, localised wind intensification not captured by regional forecasts - operations there need dedicated local monitoring.',
        'Tug contingency must be pre-positioned before mooring operations begin; reactive deployment after a line fails in deteriorating conditions is far less effective than proactive standby.',
      ],
      actions: [
        'P-70 was successfully re-moored in Guanabara Bay and completed commissioning without further incident; the vessel began production at the Atapu field in 2020.',
        'No formal public investigation report was published for this event; internal Petrobras operational review assumed.'
      ],
      metocean: {
        wind_speed: 'Unexpected strong winds - specific speed not publicly reported',
        notes: 'Guanabara Bay is a semi-enclosed bay on the Atlantic coast of Rio de Janeiro state. Localised squall activity can produce rapid wind acceleration. No official metocean data published for this event.'
      },
      references: [
        { title: 'Petrobras P-70 floater breaks moorings in Brazil storm', url: 'https://www.upstreamonline.com/field-development/petrobras-p-70-floater-breaks-moorings-in-brazil-storm/2-1-748085', type: 'News report', publisher: 'Upstream Online', year: 2020 },
        { title: 'FPSO P-70 Stable After Storm Pushes it Near Coast', url: 'https://www.oedigital.com/news/475240-fpso-p-70-stable-after-storm-pushes-it-near-coast', type: 'News report', publisher: 'OE Digital', year: 2020 }
      ]
    }

    /* ──────────────────────────────────────────────────
       43. Caspian Sea Level Decline - 2006 to present
    ─────────────────────────────────────────────────── */
    ,{
      id: 'caspian-sea-level-decline',
      name: 'Caspian Sea Level Decline',
      year: 2006,
      date: 'Ongoing - 2006 to present',
      location: 'Caspian Sea - Kazakhstan, Azerbaijan, Russia, Turkmenistan, Iran sectors',
      lat: 41.5,
      lng: 51.5,
      region: 'Russia and Central Asia',
      platform_type: 'Multiple - fixed platforms, SPM terminals, subsea pipelines, port facilities',
      operator: 'KazMunayGas, LUKOIL, bp (ACG), TotalEnergies, Eni, Shell (Kashagan)',
      weather_event_type: 'climate',
      classification: 'design',
      weather_event: 'Accelerating sea-level decline driven by increased evaporation and reduced river inflow under climate warming - 20-30 cm/year since 2020',
      fatalities: 0,
      persons_on_board: null,
      survivors: null,
      severity_override: 'major',
      infrastructure_impact: '$6.4 bn emergency dredging programme (LUKOIL/KazMunayGas, 2025); port capacity reduced; subsea pipelines exposed; vessel access to northern shelf critically impaired',
      image: {
        src: 'images/caspian-sea-level-decline-orbit.jpg',
        alt: 'Terra MODIS satellite view of the entire Caspian Sea on 11 June 2003.',
        caption: 'Terra MODIS view of the Caspian Sea, 11 June 2003; basin context predating the documented decline.',
        credit: 'Jeff Schmaltz, NASA/GSFC, public domain'
      },
      summary: 'The Caspian Sea has fallen more than 2 metres since 2006 - now 20-30 cm a year, the fastest documented climate-driven sea-level change affecting active offshore oil and gas production. Fixed platforms, subsea pipelines, moorings and ports across five countries were designed for water depths that no longer exist. A $6.4 billion dredging programme announced in 2025 to keep vessel access to northern-shelf wells is the clearest measure of the cost of not designing for long-term climate change.',
      executive_summary: 'The Caspian Sea has fallen more than 2 metres since 2006 at a rate of 20-30 cm/year - an order of magnitude faster than global mean sea-level rise. Fixed platforms, subsea pipelines, mooring terminals, and port facilities across five national sectors were designed for water depths that no longer exist. In July 2025, LUKOIL and KazMunayGas announced a $6.4 billion dredging programme to keep vessel channels open to operating wells - the cost of not having built climate variability into structural design. Projections indicate a further 5-10 m decline by 2100 under moderate warming.',
      what_happened: 'The Caspian Sea - the world\'s largest landlocked water body - reached a modern high of approximately -26.5 m (Baltic Datum) around 1995. A sustained and accelerating decline began around 2005-2006, driven primarily by increased evaporation under rising temperatures and reduced freshwater inflow from the Volga and other rivers. The decline is not cyclical; it is a climate-forced trend.\n\nBy 2025 the sea stood at -29.23 m - the lowest level in the full instrumental measurement record - having fallen more than 2 metres in under 20 years. The current rate of decline is 20-30 cm/year, roughly 20 times the global mean rate of sea-level rise. Kazakhstan\'s government projects the level to reach -32.4 m by 2050. Peer-reviewed CMIP6 modelling (Nature Communications Earth & Environment, 2023 and 2025) projects a further 5-10 m fall by 2100 under moderate warming scenarios (<2°C) and up to 21 m under high-emissions pathways - an area larger than Iceland exposed as dry seabed.\n\nThe northern Caspian - the shallowest sector, where depths over much of the shelf are already only 3-5 m - is the zone of most acute operational impact. LUKOIL\'s Vladimir Filanovsky field and KazMunayGas\'s northern shelf assets, designed and installed in the 1990s and 2000s for conditions that assumed a broadly stable water level, now face vessel access depths at or below the operating draft of standard supply vessels. Azerbaijan\'s Dubendi oil terminal required more than 250,000 m³ of emergency dredging in 2024 to maintain tanker access. Aktau port (Kazakhstan) has seen loading capacity for tankers reduced by approximately 10%. Iran\'s Anzali port is now stranded more than 1 km from the current shoreline.\n\nIn July 2025, LUKOIL and KazMunayGas jointly announced a $6.4 billion dredging programme - the largest single infrastructure response to the problem to date - to maintain navigable channels to offshore wells. Without it, operators stated, production from existing fields would be interrupted and new development plans halted. In April 2026, Azerbaijan and Kazakhstan formalised a joint dredging venture, commissioning a dedicated vessel capable of working to 18 m depth in anticipation of conditions worsening further.',
      what_went_wrong: [
        'Offshore structures across the Caspian were designed using static water-depth assumptions derived from historical records. No sensitivity analysis was conducted on the effect of long-term sea-level change on structural loading, splash-zone position, pipeline burial, or mooring geometry over the asset\'s design life.',
        'Design codes (ISO 19902, API RP 2A, DNV standards) do not require designers to assess sea-level change - rise or fall - as an environmental input. Water depth is treated as a fixed design parameter, not a variable with a climate-driven trend.',
        'Metocean studies used to establish design criteria are hindcast-based and backward-looking. In a basin where the physical environment is trending strongly in one direction, a hindcast-only basis defines conditions for a sea level that will not exist through much of the asset\'s operating life.',
        'The design life of offshore structures (25-30 years) and the horizon of credible climate projections are the same timescale. They were not addressed together at the design stage for any known Caspian project.',
        'No major operator with Caspian exposure (bp, Shell, TotalEnergies, Eni, KazMunayGas) has published explicit sea-level decline risk disclosures in TCFD-aligned climate reporting, suggesting the risk remains insufficiently integrated into corporate risk management as well as project design.'
      ],
      lessons_learned: [
        'The Caspian Sea has fallen more than 2 m since 2006 - 20-30 cm a year - and offshore platforms, pipelines, moorings and ports across five countries were designed for water depths that no longer exist, forcing a $6.4 bn dredging programme to keep wells accessible. Where the physical environment has a strong climate-driven trend, treat water depth as a variable across the asset\'s design life, not a fixed historical value.',
        'Mean water level sets splash-zone position, cathodic protection, coatings, pipeline burial, mooring geometry and scour protection - so in climate-sensitive basins run a water-depth sensitivity analysis at design and re-assess these against updated projections through life.',
        'The operational impact arrives before any structural limit: vessel access, logistics and port throughput degrade progressively as depth falls, so operational-continuity planning must cover that intermediate regime.',
        'The principle is general, not Caspian-specific - Arctic ice-loading and open-water fetch, rising storm-surge baselines at coastal terminals, and intensifying cyclone criteria all put the climate-projection horizon and the asset design life on the same timescale, and must be addressed together.',
      ],
      actions: [
        'LUKOIL and KazMunayGas announced a $6.4 billion joint dredging programme in July 2025 to maintain vessel access to northern Caspian wells - the largest industry response to date.',
        'Azerbaijan and Kazakhstan advanced a joint dredging effort (reported 2025-2026) including a new deep dredger built at Baku Shipyard; the Dubendi terminal completed over 250,000 m³ of emergency dredging in 2024.',
        'Kazakhstan published official 2050 sea-level projection scenarios (March 2026), treating adaptation as a national infrastructure requirement rather than a future consideration.',
        'The UNEP Tehran Convention EIA Protocol (in force November 2025) now requires transboundary EIA for major new Caspian oil and gas infrastructure; no major operator has yet updated structural design standards or TCFD climate disclosures for the decline - a remaining engineering and governance gap.',
      ],
      metocean: {
        wave_height_hs: 'Not the primary hazard - wave climate unchanged in deeper southern sectors; northern shelf wave exposure changes as fetch geometry alters with retreating shoreline',
        notes: 'The primary physical driver is thermodynamic: increased evaporation (surface temperature rise) combined with reduced Volga discharge. Current rate of decline: 20-30 cm/year. Level in 2025: -29.23 m (Baltic Datum). Projected level 2050: -32.4 m (Kazakhstan government scenario). Projected level 2100: approximately -34 to -39 m under moderate warming (<2°C, ~5-10 m fall) and below ~-47 m under high emissions (SSP5-8.5, up to ~21 m fall) (CMIP6). The northern shelf (<5 m current depth) is at acute near-term risk of becoming inaccessible to supply vessels.'
      },
      references: [
        { title: 'Rapid decline of Caspian Sea level threatens ecosystem integrity, biodiversity protection, and human infrastructure', url: 'https://www.nature.com/articles/s43247-025-02212-5', type: 'Peer-reviewed paper', publisher: 'Communications Earth & Environment (Nature)', year: 2025 },
        { title: 'Climate-driven 21st century Caspian Sea level decline estimated from CMIP6 projections', url: 'https://www.nature.com/articles/s43247-023-01017-8', type: 'Peer-reviewed paper', publisher: 'Communications Earth & Environment (Nature)', year: 2023 },
        { title: 'Russia and Kazakhstan Launch $6.4 Billion Dredging Project to Save Northern Caspian Offshore Oil Industry', url: 'https://en.seanews.ir/2025/07/28/russia-and-kazakhstan-launch-6-4-billion-dredging-project-to-save-northern-caspian-offshore-oil-industry/', type: 'News report', publisher: 'Seanews', year: 2025 },
        { title: 'Kazakhstan Reports Caspian Sea Level Decline, Outlines 2050 Scenarios', url: 'https://astanatimes.com/2026/03/kazakhstan-reports-caspian-sea-level-decline-outlines-2050-scenarios/', type: 'Government / news', publisher: 'The Astana Times', year: 2026 },
        { title: 'Azerbaijan Sounds Alarm Over Shallowing of Caspian Sea', url: 'https://www.insurancejournal.com/news/international/2025/08/26/836954.htm', type: 'News report', publisher: 'Insurance Journal', year: 2025 },
        { title: 'Caspian Sea Decline Harms Iran and Raises Regional Tensions', url: 'https://www.stimson.org/2025/caspian-sea-decline-harms-iran-and-raises-regional-tensions/', type: 'Policy analysis', publisher: 'Stimson Center', year: 2025 },
        { title: 'EIA Caspian Sea Regional Analysis Brief', url: 'https://www.eia.gov/international/content/analysis/regions_of_interest/Caspian_Sea/pdf/Caspian%20Sea%20Regional%20Analysis%20Brief%202025.pdf', type: 'Official report', publisher: 'U.S. Energy Information Administration', year: 2025 },
        { title: 'Climate Change Impacts on Coastal and Offshore Petroleum Infrastructure and the Associated Oil Spill Risk', url: 'https://www.mdpi.com/2077-1312/10/7/849', type: 'Peer-reviewed paper', publisher: 'MDPI Journal of Marine Science and Engineering', year: 2022 }
      ]
    }

    ,

    /* ════════════════════════════════════════════════════════════════════
       NEW INCIDENTS (17) - 2026-07-10 Integration
       9 EXTERNAL/MIXED + 6 INTERNAL-ONLY + 1 ANONYMIZED
    ═════════════════════════════════════════════════════════════════════ */

    /* ──────────────────────────────────────────────────
      43. LFE-01/MiB-07 - Fortuna Seismic Soliton, NW Australia (2014)
      Classification: INTERNAL (contains Shell LFE database reference)
    ─────────────────────────────────────────────────── */
    {
      id: 'lfe-01-fortuna-soliton-2014',
      name: 'Fortuna Seismic Survey - Soliton Impact, NW Australia',
      year: 2014,
      date: 'January 2014',
      location: 'NW Shelf of Australia, near North Rankin Platform',
      lat: -19.78,
      lng: 116.0,
      region: 'Australia',
      asset_type: 'Seismic survey vessel',
      operator: 'Shell (survey contractor)',
      weather_event_type: 'internal_wave',
      classification: 'survey',
      weather_event: 'Soliton (internal wave) - extreme feathering currents 45°, dragging streamers below 30 m depth threshold',
      fatalities: 0,
      injuries: 0,
      environmental_impact: 'Minor - buoy release, no environmental release',
      image: {
        src: 'images/Fortuna Survey 2.png',
        alt: 'Fortuna Survey image 2 showing the vessel and streamer configuration used as incident context for the 2014 soliton impact record.',
        caption: 'Fortuna Survey image 2 selected by user for incident context in the 2014 soliton impact record.',
        credit: 'User-supplied image file (Fortuna Survey 2). Original photographer and licence not confirmed; permission required for external republication.'
      },
      summary: 'A seismic survey vessel in a known soliton-prone zone (NW Shelf) encountered a soliton wave that caused extreme streamer feathering (45°), tangling, and damage. Automatic buoy release triggered at depth threshold. Survey lines had to be reshoot; equipment replaced. Incident exposed gap in soliton risk assessment during survey planning.',
      executive_summary: 'Fortuna seismic survey vessel in NW Australia encountered a soliton wave causing extreme 45° streamer feathering, equipment tangling, and damage. Automatic buoy release triggered. Incident exposed gaps in soliton risk mitigation for seismic surveys in known soliton-prone areas.',
      what_happened: 'During January 2014, the Fortuna seismic survey vessel was conducting a multi-month 3D survey over several months in the NW Shelf, a well-documented soliton hotspot. During streamer deployment, a soliton wave hit the seismic string, causing: (1) Extreme feathering of streamers (45° from tow line); (2) Streamer tangling and equipment damage; (3) Failure of convergence criteria for survey quality; (4) Automatic release of flotation buoys triggered when solitons dragged streamers below 30 m depth threshold; (5) Operational delays and re-shooting of affected lines.',
      what_went_wrong: [
        'Survey planning did not include adequate mitigation for soliton risk despite location in known soliton-prone zone.',
        'Soliton risks not quantified or characterized by seismic team during planning.',
        'Specific metocean conditions for soliton zones not understood during planning phase.',
        'Buoy release depth trigger (30 m) set without accounting for soliton-induced downward streamer drag.',
        'No soliton warning system in place despite NW Australia being well-documented for soliton activity.',
        'Metocean operational support not engaged early enough in planning.'
      ],
      lessons_learned: [
        'Mandatory soliton risk assessment for seismic surveys in known soliton-prone areas: Andaman Sea, Sulu Sea, Australian NW Shelf, Browse, Gorgon regions.',
        'Flotation buoy release depth thresholds must be set conservatively for soliton-prone areas, or automatic release inhibited during soliton passages.',
        'Soliton early warning system (SAR-based or buoy-based) mandatory for multi-month surveys in documented soliton-active waters.',
        'Metocean operational support must be engaged in planning phase, not just execution.',
        'Geographic regions with documented soliton activity require specialized offshore planning protocols.',
        'A soliton early warning system should be considered in all high-risk areas.'
      ],
      actions: [
        'The sources (a Shell LFE/environment-plan summary and metocean training material) record the lessons and recommended mitigations above; they do not document corrective actions as implemented, so none are asserted here.',
      ],
      metocean: {
        wave_height_hs: 'Not measured; soliton-driven vertical displacement documented',
        wind_speed: 'Data not documented in available sources',
        sea_temp: 'Not critical for soliton incident; soliton is internal wave phenomenon',
        notes: 'Soliton event: internal wave causing extreme streamer feathering (45°). Buoy release triggered at 30m depth. Specific soliton amplitude and wavelength not quantified in available sources. Known soliton-prone location with documented seasonal activity.'
      },
      data_quality: 'Based on Shell metocean training material and a Fortuna environment-plan (NOPSEMA) summary. The event narrative - 45° feathering, streamer tangling and automatic buoy release at the 30 m threshold - is from the training material; no numerical soliton amplitude or wavelength is given, and corrective actions are recommended rather than documented as implemented.',
      source_classification: 'external',
      shell_internal_only: false,
      sources: [
        'Shell LFE PDF: Fortuna 3D MSS - Environment Plan Summary NOPSEMA submission.pdf (INTERNAL)',
        'Shell internal training: metocean in business/002 Metocean in Shell Business - Seismic and Field Surveys.docx (INTERNAL)',
        'NOPSEMA submission (EXTERNAL - public regulatory submission, accessible via NOPSEMA)',
        'Shell LFI Database (INTERNAL - not publicly accessible)'
      ],
      references: [
        { title: 'Fortuna 3D MSS Environment Plan Summary - NOPSEMA Submission', type: 'Shell LFE PDF', file: 'background files/LFEs Internal download/Fortuna 3D MSS - Environment Plan Summary NOPSEMA submission.pdf', internal: true },
        { title: 'Metocean in Shell Business - Seismic and Field Surveys', type: 'Shell training document', file: 'background files/metocean in business/002 Metocean in Shell Business - Seismic and Field Surveys.docx', internal: true },
        { title: 'Shell LFI Database', type: 'Internal Learning from Incidents system', internal: true }
      ]
    },

    /* ──────────────────────────────────────────────────
      44. LFE-03 - Dupal LMRP Lost During Storm
       Classification: INTERNAL (contains Shell LFE database reference)
    ─────────────────────────────────────────────────── */
    {
      id: 'lfe-03-dupal-lmrp-disconnect',
      name: 'Dupal Drillship - LMRP Disconnect During Storm',
      year: 2018,
      date: '25-26 April (year not explicitly stated in LFE; reference implies 2018)',
      location: 'Offshore Nova Scotia area, Canada (location inferred from the associated SPE paper; not stated in the LFE)',
      lat: 42,
      lng: -62,
      region: 'North America',
      location_precision: 'approximate',
      asset_type: 'Drillship (deepwater)',
      operator: 'Shell (operator)',
      weather_event_type: 'storm',
      classification: 'drilling',
      weather_event: 'Severe storm - mooring failure, uncertain timing',
      fatalities: 0,
      injuries: 0,
      environmental_impact: 'LMRP lost in 110 m water; environmental consequences of equipment loss',
      summary: 'Drillship suspended drilling and disconnected LMRP ahead of an approaching storm. Three weather-side mooring wires failed on 26 April. Remaining wires released via acoustic triggers. Vessel moved away; LMRP and marine riser lost in 110 m water. Incident exposed gaps in disconnect sequencing and forecasting uncertainty margins.',
      executive_summary: 'Drillship lost LMRP and marine riser in 110 m water when three mooring wires failed during a severe storm. Incident exposed critical gaps in pre-storm procedures, mooring design adequacy, and forecasting uncertainty margins for weather-driven disconnections.',
      what_happened: 'On 25 April, a drillship detected an approaching storm and proactively: (1) Suspended drilling activity; (2) Closed BOP; (3) Disconnected LMRP. On 26 April, three weather-side mooring wires failed under storm loading. Acoustic release devices were activated on remaining wires and vessel moved away from the well site, passing between two operational installations. The Marine Riser and LMRP were lost in 110 m of water, resulting in significant operational delays.',
      what_went_wrong: [
        'Mooring arrangement not adequate for the storm load encountered.',
        'LMRP recovery not completed before mooring integrity was compromised.',
        'Insufficient lead time between storm arrival and mooring failure.',
        'Forecasting uncertainty margin not adequately built into go/no-go decision.'
      ],
      lessons_learned: [
        'Ahead of a severe storm offshore Nova Scotia the Dupal drillship suspended drilling, closed the BOP and disconnected the LMRP - but three weather-side mooring wires then failed and the LMRP and marine riser were lost in deep water. Build real forecasting-uncertainty margin into the plan: complete the disconnect and LMRP recovery well before the storm, not at the edge of it.',
        'Mooring design and pre-storm procedures must account for forecasting-uncertainty margins.',
        'Passing between operational installations during an emergency manoeuvre requires careful pre-planning and coordination.',
        'LMRP recovery timing must account for actual storm intensification, not just forecast track and timing uncertainty.',
      ],
      actions: [
        'The LFE and the related SPE paper (SPE-189674-MS) present this as a learning case. They record the lessons and recommendations above but do not document specific corrective actions as implemented, so none are asserted here.',
      ],
      metocean: {
        wave_height_hs: 'Storm-driven; specific values not documented in available sources',
        wind_speed: 'Storm conditions; specific wind speed data not available',
        sea_temp: 'Typical offshore conditions; not critical to mooring failure analysis',
        notes: 'Storm conditions offshore eastern Canada. Specific wind speed, wave height, and storm intensity not quantified in available sources. Three mooring wires failed under storm loading, indicating design basis exceeded.'
      },
      data_quality: 'Based on a brief Shell LFE and the related SPE paper (SPE-189674-MS). The LFE does not disclose the location or year; offshore Nova Scotia and 2018 are inferred from the SPE paper. The LFE states the marine riser and LMRP were lost in 110 m of water, which is hard to reconcile with a deepwater harsh-environment well; the figure is reproduced as reported, not corroborated. The source records lessons and recommendations, not confirmed corrective actions.',
      source_classification: 'external',
      shell_internal_only: false,
      sources: [
        'Shell LFE PDF: Dupal 2018 LMRP Disconnect in Deepwater Harsh Environmental conditions.pdf (INTERNAL)',
        'ResearchGate: https://www.researchgate.net/publication/323438271_LMRP_Disconnect_in_Deepwater_Harsh_Environment_Conditions (EXTERNAL)',
        'SPE OTC 2018 (SPE-189674-MS): https://doi.org/10.2118/189674-ms (EXTERNAL - academic publication)'
      ],
      references: [
        { title: 'Dupal 2018 LMRP Disconnect in Deepwater Harsh Environmental Conditions', type: 'Shell LFE PDF', file: 'background files/LFEs Internal download/Dupal 2018 LMRP Disconnect in Deepwater Harsh Environmental conditions.pdf', internal: true },
        { title: 'LMRP Disconnect in Deepwater Harsh Environment Conditions', type: 'Academic publication', url: 'https://www.researchgate.net/publication/323438271_LMRP_Disconnect_in_Deepwater_Harsh_Environment_Conditions', external: true },
        { title: 'SPE OTC 2018 - SPE-189674-MS', type: 'Peer-reviewed conference paper', url: 'https://doi.org/10.2118/189674-ms', external: true }
      ]
    },

    /* ──────────────────────────────────────────────────
       45. LFE-12 - Transocean Winner Blown Ashore, Scotland (2016)
       Classification: EXTERNAL (BBC News + Coastguard documented)
    ─────────────────────────────────────────────────── */
    {
      id: 'lfe-12-transocean-winner-scotland-2016',
      name: 'Transocean Winner - Towed Rig Blown Ashore, Scotland',
      year: 2016,
      date: 'August 2016',
      location: 'West of Lewis, Western Isles, Scotland; grounded at Dalmore beach, Carloway area',
      lat: 58.20,
      lng: -6.75,
      region: 'Europe',
      asset_type: 'Semi-submersible drilling rig (under tow)',
      operator: 'Transocean (rig owner); towing contractor not confirmed in the cited sources',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'Severe North Atlantic storm - tow line failure',
      fatalities: 0,
      injuries: 0,
      environmental_impact: 'Significant - diesel fuel on board; potential environmental threat; Stornoway Coastguard involved in response.',
      image: {
        src: 'images/lfe-12-transocean-winner-scotland-2016-grounded.jpg',
        alt: 'Transocean Winner grounded at Dalmore beach on the Isle of Lewis after its tow line parted.',
        caption: 'Transocean Winner grounded at Dalmore beach, Isle of Lewis.',
        credit: 'BBC News; photographer not stated. Permission required.'
      },
      summary: 'Semi-submersible Transocean Winner, under tow west of Lewis with diesel fuel on board, was hit by severe storms. Tow line snapped overnight. Rig ran aground at Dalmore beach. No personnel on board. Environmental threat mitigated by Coastguard response. Incident highlights risks of towing unmanned rigs through severe weather windows.',
      executive_summary: 'Transocean Winner semi-submersible rig, under tow west of Scotland, had its tow line snap in severe North Atlantic storm. Unmanned rig drifted aground at Dalmore beach with diesel fuel on board. Incident highlighted environmental risk from unmanned rig operations in severe weather transit corridors.',
      what_happened: 'In August 2016, the Transocean Winner (empty, no personnel) was being towed westward from Scotland when it encountered severe North Atlantic storms. The tow line connecting the tug to the rig snapped during the night under extreme sea conditions. The unmanned semi-submersible drifted and ran aground on the beach at Dalmore, Carloway area, near Lewis. Stornoway Coastguard coordinated response. The grounding raised environmental concerns due to diesel fuel stored on the rig. Response teams managed the situation and prevented significant environmental release.',
      what_went_wrong: [
        'Tow line failed under storm loading during transit in severe conditions.',
        'Tow planned/executed in conditions that ultimately exceeded tow-line capacity.',
        'Environmental risk from unmanned rig with stored fuel not adequately planned for in grounding scenario.'
      ],
      lessons_learned: [
        'The unmanned semi-submersible Transocean Winner broke its tow line in a severe North Atlantic storm and grounded on a Lewis beach with diesel aboard. Even an unmanned rig under tow is a major environmental risk, so tow routing must respect storm windows with real weather-abort criteria - and plan for the grounding case.',
        'Tow-line specifications must carry appropriate safety margins for the worst storm conditions along the route, especially North Atlantic winter transits.',
        'Real-time weather monitoring and decision points must trigger tow suspension before critical storm intensification.',
        'Emergency response plans must cover grounding scenarios and fuel-spill mitigation for towed units carrying fuel or chemicals.',
      ],
      actions: [
        'The cited sources are BBC News coverage and Shell training material. They document the grounding and the Coastguard-led response but not specific corrective actions by the rig owner or tow contractor, so none are asserted here.',
      ],
      metocean: {
        wave_height_hs: 'Severe; specific measurements not documented in available sources',
        wind_speed: 'Severe North Atlantic storm; specific wind speeds not quantified in available sources',
        sea_temp: '~8-12°C (North Atlantic summer)',
        notes: 'Severe North Atlantic storm August 2016. Tow line failure attributed to extreme sea state conditions. Specific Hs, wind speed not available in BBC or coastal guard reports.'
      },
      data_quality: 'Based on BBC News coverage and Shell training material. The tow route, grounding at Dalmore, unmanned status, diesel aboard and Coastguard response are reported; the towing contractor, exact metocean values and any corrective actions are not established in the cited sources and are not asserted.',
      source_classification: 'external',
      shell_internal_only: false,
      sources: [
        'BBC News: https://www.bbc.com/news/uk-scotland-north-east-orkney-shetland-37007656 (EXTERNAL)',
        'Shell internal training: metocean in business/Metocean Lessons Learnt - Learning from Experience V01.docx (INTERNAL)',
        'Stornoway Coastguard response documentation (EXTERNAL)'
      ],
      references: [
        { title: 'BBC News - Transocean Winner Rig Grounded off Scottish Coast', type: 'News article', url: 'https://www.bbc.com/news/uk-scotland-north-east-orkney-shetland-37007656', external: true },
        { title: 'Metocean Lessons Learnt V01', type: 'Shell internal training document', file: 'background files/Metocean Lessons Learnt - Learning from Experience V01.docx', internal: true }
      ]
    },

    /* ──────────────────────────────────────────────────
       46. LFE-22 - Kerteh Gas Processing Plant Lightning Fire, Malaysia (2019)
    ─────────────────────────────────────────────────── */
    {
      id: 'lfe-22-kerteh-lightning-2019',
      name: 'Kerteh Gas Processing Plant - Lightning Strike Fire, Malaysia',
      year: 2019,
      date: 'July 2019',
      location: 'Kerteh, Malaysia (Petronas gas processing plant)',
      lat: 4.20,
      lng: 103.44,
      region: 'Asia',
      asset_type: 'Onshore gas processing plant',
      operator: 'Petronas (Malaysia)',
      weather_event_type: 'lightning',
      classification: 'onshore',
      weather_event: 'Lightning strike on gas processing facility',
      fatalities: 0,
      injuries: 0,
      environmental_impact: 'Fire contained; no major environmental release reported; 8-hour fire suppression effort',
      summary: 'Lightning struck Petronas gas processing plant at Kerteh, Malaysia, initiating a fire that took 8 hours to bring under control. Cracker and downstream operations reported unaffected. Incident demonstrates vulnerability of gas processing plants to lightning initiation and importance of lightning protection system maintenance.',
      executive_summary: 'Lightning strike on Petronas gas processing plant at Kerteh, Malaysia initiated fire requiring 8 hours to suppress. Incident exposed vulnerability of external lightning protection systems and importance of fire response preparedness for tropical gas processing facilities.',
      what_happened: 'In July 2019, a lightning strike directly hit the Petronas gas processing facility at Kerteh, Malaysia. The impact initiated a fire in a critical process area. Emergency response teams deployed and the fire was brought under control after approximately 8 hours of intensive fire-fighting operations. The cracker and downstream operations at the Kerteh facility were reported to remain unaffected. No casualties. The facility resumed operations following inspections.',
      what_went_wrong: [
        'Public reporting attributes the fire to a lightning strike on the facility. No published investigation or root-cause analysis is available, so the performance of the lightning-protection and fire-containment systems is not established.',
      ],
      lessons_learned: [
        'Lightning protection systems on gas processing plants must be inspected and maintained as safety-critical equipment.',
        'Lightning strike probability and consequence must be explicitly addressed in design basis for tropical/equatorial LNG and gas processing facilities.',
        'Fire response plans for lightning-initiated fires must account for extended fire-fighting durations (8+ hours).',
        'Process isolation sequences triggered by lightning strike should be pre-planned to minimize escalation.',
        'Post-incident inspection procedures essential to verify system integrity after lightning strike events.'
      ],
      actions: [
        'The cited sources are news reports of the fire; they do not document Petronas corrective actions, so none are asserted here. The lessons above are general good practice, not measures confirmed as taken.',
      ],
      metocean: {
        wave_height_hs: 'N/A - onshore facility; not ocean wave-dependent',
        wind_speed: 'Tropical climate conditions; not documented for this incident',
        sea_temp: 'N/A - onshore facility',
        notes: 'Lightning strike weather event at tropical onshore facility. Specific wind speeds or atmospheric conditions during lightning strike not documented in available sources. Incident driven by lightning contact, not by background sea state or wind.'
      },
      data_quality: 'Based on brief public news reports (Argus, The Chemical Engineer, Petronas release, Offshore Energy). These confirm a lightning strike, an approximately eight-hour fire, unaffected downstream operations and no casualties, but contain no investigation or root-cause analysis. Causes and corrective actions are therefore not established and are not asserted.',
      source_classification: 'external',
      shell_internal_only: false,
      sources: [
        'Argus Media: https://www.argusmedia.com/en/news/1941252-lightning-strike-hits-kerteh-gas-processing-plant (EXTERNAL)',
        'The Chemical Engineer: https://www.thechemicalengineer.com/news/fire-at-petronas-gas-processing-plant/ (EXTERNAL)',
        'Petronas Corporate Release (EXTERNAL)',
        'Offshore Energy: https://www.offshore-energy.biz/malaysia-petronas-gas-plant-catches-fire/ (EXTERNAL)',
        'Shell internal training: metocean in business/Metocean Lessons Learnt V01.docx (INTERNAL)'
      ],
      references: [
        { title: 'Argus Media - Lightning Strike Hits Kerteh Gas Processing Plant', type: 'Industry news', url: 'https://www.argusmedia.com/en/news/1941252-lightning-strike-hits-kerteh-gas-processing-plant', external: true },
        { title: 'The Chemical Engineer - Fire at Petronas Gas Processing Plant', type: 'Industry publication', url: 'https://www.thechemicalengineer.com/news/fire-at-petronas-gas-processing-plant/', external: true },
        { title: 'Petronas Incident Release', type: 'Corporate disclosure', external: true },
        { title: 'Offshore Energy - Malaysia Petronas Gas Plant Fire', type: 'Industry news', url: 'https://www.offshore-energy.biz/malaysia-petronas-gas-plant-catches-fire/', external: true }
      ]
    },

    /* ──────────────────────────────────────────────────
       47. LFE-27 - Gorgon LNG Ambient Temperature Impact (2018)
    ─────────────────────────────────────────────────── */
    {
      id: 'lfe-27-gorgon-lng-ambient-temp-2018',
      name: 'Gorgon LNG - Production Cut Due to Ambient Temperature, Australia',
      year: 2018,
      date: 'April 2018',
      location: 'Barrow Island, Western Australia (operator-run Gorgon LNG)',
      lat: -20.80,
      lng: 115.40,
      region: 'Australia',
      asset_type: 'Onshore LNG processing trains',
      operator: 'Chevron (Gorgon operator)',
      weather_event_type: 'climate',
      classification: 'design',
      weather_event: 'High ambient dry-bulb and wet-bulb temperatures reducing compressor efficiency',
      fatalities: 0,
      injuries: 0,
      environmental_impact: 'None - operational production impact only',
      summary: 'Gorgon LNG facility on Barrow Island reported production cuts of approximately 1 million tonnes (~13% below nameplate capacity) due to high ambient air temperatures affecting LNG train thermodynamic performance. Estimated financial impact ~$500M at prevailing LNG prices. Reflects design basis inadequacy for tropical ambient conditions.',
      executive_summary: 'Gorgon LNG facility on Barrow Island experienced 13% production shortfall (~$500M annual loss) due to high ambient air temperatures exceeding design basis dry-bulb and wet-bulb conditions. Incident revealed critical design gap for tropical LNG thermodynamic performance.',
      what_happened: 'Following Gorgon LNG first commercial production, ambient air temperatures around the Barrow Island processing trains caused unexpected thermodynamic performance degradation. The operator flagged that expected lifting year production (April 2018 onward) would be 14.6 million tonnes vs. nameplate capacity of 15.6 million tonnes - a 1 million tonne (13%) shortfall. The reduction was directly attributable to higher ambient dry-bulb and wet-bulb conditions than design basis, reducing both compressor efficiency and condenser performance (critical for LNG liquefaction). Financial impact was estimated at approximately $500 million loss in annual LNG revenue.',
      what_went_wrong: [
        'Design dry-bulb and wet-bulb ambient temperatures not conservatively selected for Barrow Island tropical location.',
        'LNG process design did not adequately account for full range of realistic ambient temperatures.',
        'Climate data selection process may not have captured high-temperature tail of historical distribution.',
        'Limited contingency built into compressor/condenser sizing for off-design ambient conditions.'
      ],
      lessons_learned: [
        'Ambient air temperature (design dry-bulb and wet-bulb) must be accurately and conservatively characterized for LNG plant design.',
        'Conservative design point selection has multi-billion-dollar consequence for LNG projects.',
        'LNG process design in tropical/subtropical climates must explicitly account for high ambient temperatures that reduce thermodynamic efficiency.',
        'Climate data for plant design should be current and representative of full historical operating range.',
        'Design margins for compressor and condenser performance should account for design basis uncertainty in tropical locations.',
        'Post-commissioning performance monitoring essential to validate assumptions and identify design improvements for future projects.'
      ],
      actions: [
        'The source is a single news report (The West Australian) with Shell training context. It reports the production cut and cost but does not document the operator\'s specific corrective actions, so none are asserted here.',
      ],
      metocean: {
        wave_height_hs: 'N/A - onshore facility; not ocean wave-dependent',
        wind_speed: 'Ambient air temperature event (not wind-driven); specific wind speeds not relevant',
        sea_temp: 'N/A - onshore facility',
        notes: 'Design basis ambient dry-bulb and wet-bulb temperatures exceeded during first year of operations at tropical location. Specific measured temperatures not documented in available sources. Production impact: 13% shortfall; financial impact: ~$500M annually.'
      },
      data_quality: 'Based on a single news report (The West Australian) and Shell training material. The 14.6 Mt expected output, ~1 Mt (13%) shortfall and ~$500M figure are from the news report; the design-basis shortcomings listed under "what went wrong" are inferred, not stated in the source, and no corrective actions are documented. Chevron operates Gorgon.',
      source_classification: 'external',
      shell_internal_only: false,
      sources: [
        'The West Australian (external news): https://thewest.com.au/business/oil-gas/hot-air-slowing-gorgon-trains-a-500m-whack-for-chevron-ng-b88640597z (EXTERNAL)',
        'Chevron corporate disclosures (EXTERNAL)',
        'Shell internal training: metocean in business/Metocean Lessons Learnt V01.docx (INTERNAL)'
      ],
      references: [
        { title: 'The West Australian - Hot Air Slowing Gorgon Trains', type: 'News article', url: 'https://thewest.com.au/business/oil-gas/hot-air-slowing-gorgon-trains-a-500m-whack-for-chevron-ng-b88640597z', external: true },
        { title: 'Chevron Gorgon LNG Operational Disclosure', type: 'Corporate disclosure', external: true }
      ]
    },

    /* ──────────────────────────────────────────────────
       48. MiB-02 - Oman LNG Cyclone Gonu (2007)
    ─────────────────────────────────────────────────── */
    {
      id: 'mib-02-oman-lng-cyclone-gonu-2007',
      name: 'Oman LNG Plant - Tropical Cyclone Gonu Direct Impact',
      year: 2007,
      date: 'June 2007',
      location: 'Sur, Oman (Oman LNG plant, coastal)',
      lat: 22.56,
      lng: 59.53,
      region: 'Middle East',
      asset_type: 'Onshore LNG processing plant',
      operator: 'Oman LNG (state-owned)',
      weather_event_type: 'cyclone',
      classification: 'design',
      storm_sid: '2007151N14072',
      storm_name: 'GONU',
      weather_event: 'Tropical Cyclone Gonu - Category 5 at peak; most intense on record in Arabian Sea at time',
      fatalities: 0,
      injuries: 0,
      environmental_impact: 'Structural damage to processing facilities; environmental threat from damaged equipment',
      image: {
        src: 'images/mib-02-oman-lng-cyclone-gonu-2007-satellite.jpg',
        alt: 'Aqua MODIS satellite image of Cyclone Gonu approaching Oman near peak intensity on 4 June 2007.',
        caption: 'Cyclone Gonu approaching Oman near peak intensity, 4 June 2007.',
        credit: 'NASA Aqua MODIS, public domain'
      },
      summary: 'Tropical Cyclone Gonu - the most intense tropical cyclone ever recorded in the Arabian Sea at that time - made direct impact on Oman LNG plant near Sur. Facility sustained considerable damage attributed to under-design for wind loading and wave crest impact. Contractor design excluded cyclone loads citing historical rarity, creating catastrophic design gap.',
      executive_summary: 'Tropical Cyclone Gonu (Category 5 Arabian Sea super-cyclone) made direct impact on Oman LNG plant, causing considerable structural damage. Contractor design had excluded cyclone loads as historically rare, exposing fatal design flaw in cyclone risk assessment for coastal Arabian Sea infrastructure.',
      what_happened: 'In June 2007, Tropical Cyclone Gonu (peak Category 5 intensity) tracked across the Arabian Sea and made direct impact on the Oman LNG plant near Sur, Oman. The facility, designed for coastal Arabian Sea conditions, sustained considerable structural damage to process buildings, equipment supports, and utility systems. Damage was attributed to: (1) Wind loading exceeding design basis; (2) Wave crests impacting structures; (3) General design inadequacy for extreme tropical cyclone conditions. The facility required major repairs before resuming operations.',
      what_went_wrong: [
        'Contractor excluded tropical cyclone loads from design basis, citing low historical frequency in Arabian Sea.',
        'Low historical frequency wrongly interpreted as "not in design basis" rather than "low-probability, high-consequence event".',
        'Metocean hazard identification bundled within single design contract with no independent review.',
        'No separation of metocean hazard identification from structural design contractor (conflict of interest/blind spot).',
        'Wind loading and wave crest impact design criteria did not account for Category 5 cyclone scenario.'
      ],
      lessons_learned: [
        'In areas where tropical cyclone return periods are long (e.g., Arabian Sea), cyclone loads must still be included in design basis.',
        'Consequence of impact is extreme regardless of frequency - low-probability, high-consequence events require conservative design.',
        'Metocean hazard identification must be independent of structural design contractor, or subject to independent technical review.',
        '"Low frequency" does not mean "excluded from design basis" for safety-critical coastal and LNG infrastructure.',
        'Arabian Sea has seen increasing tropical cyclone activity - historical rarity is unreliable basis for exclusion.',
        'For coastal LNG plants, conservative design wind speeds should include Category 4-5 cyclone envelopes.'
      ],
      actions: [
        'The source is Shell metocean training material (a teaching example) with Wikipedia context. It records the design-basis lesson above but does not document the operator\'s specific corrective actions, so none are asserted here.',
      ],
      metocean: {
        wave_height_hs: 'Severe swell; no site Hs value in the source.',
        wind_speed: 'Gonu peaked at about 240-270 km/h over the open Arabian Sea, but had weakened to roughly Category 1 by its Oman landfall near Sur. The source gives no measured wind at the plant; peak open-sea intensities should not be read as the wind at the facility.',
        sea_temp: '~28-30°C (Arabian Sea, June)',
        notes: 'Tropical Cyclone Gonu was the most intense Arabian Sea cyclone on record at the time (2007). It had weakened substantially before the Oman coast; the source attributes plant damage to wind loading and wave-crest impact but gives no site measurements.'
      },
      data_quality: 'Based on Shell metocean training material (a teaching example) and the Wikipedia Cyclone Gonu article. The design-basis shortcoming (cyclone loads excluded as historically rare) is as described in the training material; the plant\'s specific damage, site wind/wave values and any corrective actions are not documented and are not asserted. Casualties are not reported and are recorded as none.',
      source_classification: 'external',
      shell_internal_only: false,
      sources: [
        'Wikipedia - Cyclone Gonu: https://en.wikipedia.org/wiki/Cyclone_Gonu (EXTERNAL)',
        'Shell internal training: metocean in business/001-3 Metocean and Coastal Structures VA.docx (INTERNAL)'
      ],
      references: [
        { title: 'Wikipedia - Cyclone Gonu', type: 'Encyclopedia', url: 'https://en.wikipedia.org/wiki/Cyclone_Gonu', external: true },
        { title: 'Metocean and Coastal Structures - Shell Training', type: 'Shell internal document', file: 'background files/metocean in business/001-3 Metocean and Coastal Structures VA.docx', internal: true }
      ]
    },

    /* ──────────────────────────────────────────────────
       49. MiB-03 - Port Arthur Refinery Hurricanes (2005, 2008)
    ─────────────────────────────────────────────────── */
    {
      id: 'mib-03-port-arthur-refinery-hurricanes',
      name: 'Port Arthur Refinery - Hurricane Rita & Ike Impacts (2005, 2008)',
      year: 2005,
      date: 'September 2005 (Rita); September 2008 (Ike)',
      location: 'Port Arthur, Texas, USA (coastal refinery, Gulf of Mexico region)',
      lat: 29.88,
      lng: -93.93,
      region: 'North America',
      asset_type: 'Coastal oil refinery',
      operator: 'Motiva (joint venture operator)',
      weather_event_type: 'cyclone',
      classification: 'coastal',
      storm_sid: '2008245N17323',
      storm_name: 'IKE',
      weather_event: 'Hurricane Rita (2005) - extreme winds + rainfall flooding; Hurricane Ike (2008) - 14 ft storm surge',
      fatalities: 0,
      injuries: 0,
      environmental_impact: 'Rita: Diesel spill, oil contamination (confined to site). Ike: No major spill reported.',
      image: {
        src: 'images/mib-03-port-arthur-refinery-hurricanes-ike.jpg',
        alt: 'Port Arthur refinery flaring during shutdown preparations before Hurricane Ike landfall.',
        caption: 'Port Arthur refinery during shutdown preparations before Hurricane Ike, 12 September 2008.',
        credit: 'Junglecat, CC BY-SA 3.0'
      },
      summary: 'Port Arthur Refinery (5-6 ft above MSL) experienced significant damage from two consecutive hurricane impacts. Rita (2005) caused wind damage and rainfall flooding. Ike (2008) generated 14 ft storm surge, leaving only 2 ft margin against 16 ft-rated hurricane levee. Incident highlights multi-hazard risk (surge + wind + rainfall) and importance of design margin adequacy.',
      executive_summary: 'Port Arthur Refinery sustained hurricane damage from two consecutive events (Rita 2005, Ike 2008). Rita caused wind and flood damage; Ike generated 14 ft storm surge, leaving only 2 ft margin on 16 ft protection levee. Incident revealed multi-hazard vulnerability and design margin inadequacy for coastal Gulf of Mexico refineries.',
      what_happened: 'Hurricane Rita (September 2005): The Port Arthur Refinery, situated 5-6 feet above mean sea level and protected by a 1960s-vintage hurricane levee rated for ~16 ft surge, was directly impacted by Hurricane Rita. Extreme winds caused debris damage to oil storage tanks, tearing roofs from several new tanks in the tank farm. Torrential rainfall caused flooding in multiple areas. A diesel spill occurred but went initially undetected due to damage. Power loss required emergency flaring to safely shut down operations. Hurricane Ike (September 2008): Three years later, Hurricane Ike generated a 14 ft storm surge that threatened the facility. The hurricane protection levee held (rated to 16 ft), but the margin was only 2 feet - a critical near-miss.',
      what_went_wrong: [
        'Refinery elevation (5-6 ft ASL) leaves it highly vulnerable to Gulf of Mexico hurricane storm surge.',
        'Hurricane protection levee rated at only 16 ft - insufficient design margin for worst-case scenarios.',
        'Rita damage occurred despite levee (wind and rainfall flooding are levee-independent hazards).',
        'Ike storm surge (14 ft) left only 2 ft margin against 16 ft-rated levee.',
        'Design basis for levee built in 1960s before modern hurricane surge analysis methods.',
        'Diesel spill detection systems not robust to power loss during storm.'
      ],
      lessons_learned: [
        'Coastal industrial facilities must assess storm surge, wind, and rainfall flooding as separate but simultaneous hazards.',
        'A levee protects only against storm surge, not wind or rainfall flooding.',
        'Hurricane protection infrastructure must be periodically reviewed against updated return-period storm surge analyses.',
        'Climate change projected to intensify tropical cyclone peak winds and storm surge - legacy designs may be inadequate.',
        'Facility elevation must be checked regularly against current MSL and updated storm surge forecasts.',
        'Critical safety systems (diesel spill detection, emergency power) must remain operational during and after storm events.'
      ],
      actions: [
        'The source is Shell metocean training material with NOAA/news context, presenting Rita and Ike as a coastal multi-hazard learning example. It records the lessons above but does not document the operator\'s specific corrective actions, so none are asserted here.',
      ],
      metocean: {
        wave_height_hs: 'Not quantified in the source for the refinery; Hurricane Ike produced an approximately 14 ft storm surge at the site (levee rated about 16 ft).',
        wind_speed: 'The source gives no site wind measurement. Rita (2005) peaked at Category 5 over open water but had weakened well before the Texas/Louisiana coast; Ike (2008) was about Category 2 at the upper-Texas coast. Peak open-water intensities should not be read as the wind at the refinery.',
        sea_temp: '~27-28°C (Gulf of Mexico, September)',
        notes: 'Ike storm surge reached about 14 ft at Port Arthur, leaving roughly a 2 ft margin against the ~16 ft-rated levee. The source gives no site wind or wave-height measurements; storm-intensity figures elsewhere refer to peak open-water values, not conditions at the refinery.'
      },
      data_quality: 'Based on Shell metocean training material (a teaching example) with NOAA/news context; no primary facility investigation report was retrieved. Site wind speeds and wave heights are not reported; the 14 ft surge, ~16 ft levee rating and ~2 ft margin are the figures given by the source. Corrective actions are not documented.',
      source_classification: 'external',
      shell_internal_only: false,
      sources: [
        'NOAA hurricane records (EXTERNAL)',
        'News coverage of Hurricane Rita and Ike (EXTERNAL)',
        'Shell internal training: metocean in business/001-3 Metocean and Coastal Structures VA.docx (INTERNAL)'
      ],
      references: [
        { title: 'NOAA Hurricane Database - Hurricane Rita (2005)', type: 'Government database', external: true },
        { title: 'NOAA Hurricane Database - Hurricane Ike (2008)', type: 'Government database', external: true },
        { title: 'Metocean and Coastal Structures - Shell Training', type: 'Shell internal document', file: 'background files/metocean in business/001-3 Metocean and Coastal Structures VA.docx', internal: true }
      ]
    },

    /* ──────────────────────────────────────────────────
       50. MiB-05 - Corrib Pipeline Umbilical Storm (2015)
    ─────────────────────────────────────────────────── */
    {
      id: 'mib-05-corrib-pipeline-ireland-2014-2015',
      name: 'Corrib Pipeline Umbilical - Winter Storm Exposure, Ireland',
      year: 2015,
      date: 'Winter 2014-2015 (discovered March 2015)',
      location: 'Broadhaven Bay, Co. Mayo, Ireland (Corrib gas field nearshore approach)',
      lat: 54.35,
      lng: -10.15,
      region: 'Europe',
      asset_type: 'Subsea umbilical and water disposal line (buried)',
      operator: 'Shell (Corrib operator)',
      weather_event_type: 'storm',
      classification: 'pipeline',
      weather_event: 'Repeated severe North Atlantic winter storms - near-bed wave orbital velocities and currents exceeding design',
      fatalities: 0,
      injuries: 0,
      environmental_impact: 'Umbilical exposed and floating; no major release; emergency rock dumping deployed',
      summary: 'Corrib umbilical and water disposal line became exposed and lifted off seabed during winter 2014-2015 storms in Broadhaven Bay. Near-bed hydrodynamic loads exceeded design values due to inadequate site-specific metocean characterization. Emergency rock dumping performed summer 2015 to stabilize infrastructure. Incident highlights importance of measured metocean data for nearshore burial design.',
      executive_summary: 'Corrib pipeline umbilical became exposed and floating in Broadhaven Bay during winter 2014-2015 storms. Root cause: inadequate site-specific metocean data for nearshore burial design. Emergency rock dumping was performed in summer 2015. Incident highlighted a critical gap in the nearshore design basis and the value of measured metocean data.',
      what_happened: 'The Corrib gas field umbilical and water disposal line, buried in Broadhaven Bay near the Irish coast, was designed using numerical metocean models without prior site-specific measured data. During the winter of 2014-2015, a series of severe Atlantic storms generated near-bed wave orbital velocities and current loads that exceeded the design basis. By March 2015, inspection revealed the umbilical had become exposed and was floating above the seabed. Emergency response included rock dumping during summer 2015 to stabilize the exposed pipeline.',
      what_went_wrong: [
        'No site-specific metocean data collected at Broadhaven Bay before design.',
        'Design based on numerical models that did not properly account for complex nearshore wave and current interactions.',
        'Nearshore wave and current interactions (shoaling, refraction, bathymetric funnelling) significantly under-predicted by models.',
        'Burial depth and rock cover specification insufficient for actual storm hydrodynamic loads.',
        'Design did not conservatively account for model uncertainty in energetic nearshore environment.'
      ],
      lessons_learned: [
        'Nearshore pipeline burial design requires site-specific measured metocean data.',
        'Generic or regional hindcast models carry large uncertainties in complex coastal environments.',
        'Wave orbital velocities near seabed in shallow water can be significantly amplified by local bathymetry.',
        'Burial depth must be conservatively specified with safety factors for model uncertainty.',
        'Post-installation monitoring of buried pipelines in energetic nearshore environments should be standard practice.',
        'Emergency rock dumping is extremely expensive - investing in adequate site-specific data before design is far more cost-effective.'
      ],
      actions: [
        'The source (Shell metocean training material, with Irish media context) presents this as a learning example. It records the lessons above but does not document the operator\'s specific corrective actions, so none are asserted here. The one documented response was emergency rock dumping in summer 2015 to re-stabilise the umbilical.',
      ],
      metocean: {
        wave_height_hs: 'Winter storm conditions; specific Hs values not documented in available sources',
        wind_speed: 'North Atlantic winter storms; specific wind speeds not quantified in available sources',
        sea_temp: '~6-8°C (North Atlantic winter)',
        notes: 'Repeated severe North Atlantic winter storms (winter 2014-2015) generated near-bed orbital velocities and currents exceeding design basis. Nearshore wave and current interactions significantly under-predicted by regional models.'
      },
      data_quality: 'Based on Shell metocean training material (a teaching example) with Irish media context; no primary investigation report was retrieved. The source gives no cost figure - any specific amount should not be relied upon. The one documented response was emergency rock dumping in summer 2015; other corrective actions are not documented.',
      source_classification: 'external',
      shell_internal_only: false,
      sources: [
        'Irish media coverage (EXTERNAL)',
        'Regulatory reports - Irish offshore regulator (EXTERNAL)',
        'Shell internal training: metocean in business/001-3 Metocean and Pipelines VA.docx (INTERNAL)'
      ],
      references: [
        { title: 'Corrib Project - Irish Regulatory Filing', type: 'Government regulatory document', external: true },
        { title: 'Metocean and Pipelines - Shell Training', type: 'Shell internal document', file: 'background files/metocean in business/001-3 Metocean and Pipelines VA.docx', internal: true }
      ]
    },

    /* ──────────────────────────────────────────────────
       51. MiB-06 - Hurricane Dorian Grand Bahama (2019)
    ─────────────────────────────────────────────────── */
    {
      id: 'mib-06-hurricane-dorian-grand-bahama-2019',
      name: 'Hurricane Dorian - Equinor Grand Bahama Facility Damage',
      year: 2019,
      date: 'September 2019',
      location: 'Grand Bahama Island, Bahamas (Equinor coastal oil facilities)',
      lat: 26.65,
      lng: -78.50,
      region: 'North America',
      asset_type: 'Coastal oil storage/tank farm',
      operator: 'Equinor (Norway)',
      weather_event_type: 'cyclone',
      classification: 'coastal',
      storm_sid: '2019236N10314',
      storm_name: 'DORIAN',
      weather_event: 'Hurricane Dorian - Category 5; sustained winds ~185 mph (160 knots); major storm surge',
      fatalities: 0,
      injuries: 0,
      environmental_impact: 'Major - oil spill dispersed over 10 km downwind; significant environmental damage',
      image: {
        src: 'images/mib-06-hurricane-dorian-grand-bahama-2019-terminal-damage.jpg',
        alt: 'Aerial view of damaged oil storage tanks at the South Riding Point terminal after Hurricane Dorian.',
        caption: 'Damage at the South Riding Point oil storage facility, Grand Bahama, 7 September 2019.',
        credit: 'AP Photo/Ramon Espinosa via The Atlanta Journal-Constitution. Permission required.'
      },
      summary: 'Hurricane Dorian (Category 5) made direct hit on Equinor facilities at Grand Bahama. Six oil storage tank roofs were completely blown off. Wind-driven oil spill reached ~10 km from plant. Incident demonstrates vulnerability of fixed-roof storage tanks to Category 5 wind speeds and importance of wind-driven spill response planning.',
      executive_summary: 'Hurricane Dorian (Category 5, 185 mph sustained winds) made direct hit on Equinor Grand Bahama oil storage facility. Six fixed-roof tanks had roofs completely blown off; oil spill dispersed ~10 km downwind. Incident exposed critical vulnerability of fixed-roof tanks to Category 5 hurricane winds.',
      what_happened: 'In September 2019, Hurricane Dorian - a Category 5 hurricane with sustained winds of approximately 185 mph (160 knots) - made a direct hit on Equinor\'s coastal oil storage and processing facilities on Grand Bahama Island. The facility sustained catastrophic wind damage: six fixed-roof oil storage tanks had their roofs completely blown off by the extreme winds. Oil from the damaged tanks was dispersed by hurricane winds over a distance of approximately 10 km from the facility. Environmental and property damage was major.',
      what_went_wrong: [
        'Fixed-roof oil storage tanks not designed to withstand Category 5 hurricane wind speeds (~185 mph).',
        'Facility hurricane design basis insufficient for actual storm intensity.',
        'Wind-driven oil migration distance (10 km) not anticipated in spill response plans.',
        'Tank roof failure mode under extreme wind loads not adequately analyzed or prepared for.'
      ],
      lessons_learned: [
        'Coastal oil storage facilities in hurricane-prone regions must have design wind speeds that account for Category 4-5 events, not just historical averages.',
        'Tank roof integrity under extreme wind loads is critical environmental protection measure.',
        'Both floating-roof and fixed-roof tank designs have failure modes under Category 5 hurricane conditions.',
        'Oil spill emergency response planning must consider wind-driven surface dispersal to distances of 10+ km for major hurricane scenarios.',
        'Climate change projected to intensify tropical cyclone peak winds - design wind speeds should incorporate forward-looking climate margin.',
        'Post-hurricane inspection and integrity assessment critical before facility restart.'
      ],
      actions: [
        'The cited sources are news coverage and Shell training material. They document the tank-roof losses and oil dispersal but not Equinor\'s specific corrective actions, so none are asserted here.',
      ],
      metocean: {
        wave_height_hs: 'Extreme; Hurricane Dorian generated severe Atlantic swell. Specific Hs values not quantified in available sources.',
        wind_speed: '185 mph sustained (Category 5 at Bahamas); 200+ mph gusts recorded. (Source: Wikipedia Hurricane Dorian article)',
        sea_temp: '~27-28°C (Atlantic, September)',
        notes: 'Hurricane Dorian Category 5 at Bahamas landfall: 185 mph sustained winds, 200+ mph gusts. Major storm surge 20-25 ft. Tank roof failure caused by extreme wind loads exceeding design basis.'
      },
      data_quality: 'Based on news coverage (AP/Atlanta Journal-Constitution and others) and Shell training material. Six tank roofs blown off and oil dispersed about 10 km are as reported; Dorian\'s 185 mph / 200 mph-gust / 20-25 ft-surge figures are the storm\'s peak intensity near the Abaco Islands and Grand Bahama, not necessarily measured at the terminal. No corrective actions are documented and none are asserted.',
      source_classification: 'external',
      shell_internal_only: false,
      sources: [
        'NOAA hurricane records (EXTERNAL)',
        'Equinor corporate disclosure (EXTERNAL)',
        'News media coverage (EXTERNAL)',
        'Shell internal training: metocean in business/001-3 Metocean and Coastal Structures VA.docx (INTERNAL)'
      ],
      references: [
        { title: 'NOAA Hurricane Dorian Database', type: 'Government database', external: true },
        { title: 'Equinor Incident Disclosure', type: 'Corporate disclosure', external: true },
        { title: 'Hurricane Dorian causes oil spill in Bahamas', type: 'News report and AP incident photograph', url: 'https://www.ajc.com/news/national/hurricane-dorian-causes-oil-spill-bahamas/QAdb4PDZjgwHI3zsgQfeGM/', external: true },
        { title: 'Metocean and Coastal Structures - Shell Training', type: 'Shell internal document', file: 'background files/metocean in business/001-3 Metocean and Coastal Structures VA.docx', internal: true }
      ]
    },

    /* ══════════════════════════════════════════════════════════════
       SHELL INTERNAL-ONLY INCIDENTS (7)
    ═══════════════════════════════════════════════════════════════ */

    /* ──────────────────────────────────────────────────
       52. LFE-02 - Wave Rider Buoy Snag Pierce (2023)
    ─────────────────────────────────────────────────── */
    {
      id: 'lfe-02-wave-rider-buoy-snag-2023',
      name: 'Wave Rider Buoy Snagged by Survey Vessel - Pierce Asset, North Sea',
      year: 2023,
      date: '12 July 2023',
      location: 'Pierce Asset, UK Central North Sea',
      lat: 55.30,
      lng: 2.45,
      region: 'Europe',
      asset_type: 'Hydrographic survey vessel; Wave Rider buoy',
      operator: 'Shell (survey)',
      weather_event_type: 'equipment',
      classification: 'survey',
      weather_event: 'Equipment interaction issue (not weather-driven)',
      fatalities: 0,
      injuries: 0,
      environmental_impact: 'None reported. The buoy and survey equipment were recovered without observed damage, and an ROV survey found no integrity issues with the crossed pipelines or control umbilicals.',
      summary: 'During an anchoring-condition survey at the Pierce Asset on 12 July 2023, a hydrographic survey vessel snagged the installed Wave Rider buoy with its towed side-scan sonar. The tow dragged the buoy, anchor and rigging about 2 km north, crossing buried production and control lines to the Haewene Brim FPSO. The buoy had been redeployed about 270 m south after maintenance, but its new position was not passed to Geomatics or the survey contractor, and a planned 40 m offset ignored the tether length. An all-stop was called; an ROV survey found no pipeline or umbilical damage.',
      executive_summary: 'At the Pierce Asset on 12 July 2023, a survey vessel\'s towed side-scan-sonar system snagged a Wave Rider buoy and dragged its buoy, anchor weight and rigging about 2 km north across buried production and control lines. The buoy had been redeployed about 270 m south after maintenance without the revised position being communicated to Geomatics or the contractor, and the selected 40 m avoidance offset did not account for tether length or buoy excursion. No injury, environmental release or equipment damage was observed; an ROV survey found no pipeline or umbilical integrity issue.',
      what_happened: 'A hydrographic survey vessel was conducting anchoring-condition surveys at the Pierce Asset in the UK Central North Sea. It operated hull-mounted instruments and a towed side-scan sonar with approximately 210–220 m of tow cable, flown about 15 m above the seabed. At approximately 11:45 on 12 July 2023, while running south to north on a 002° heading, the vessel inadvertently snagged the sonar tow around the permanently installed Pierce Wave Rider buoy. The buoy supplied real-time sea-state data to the asset.\n\nThe entanglement displaced the buoy, its anchor weight and associated rigging approximately 2 km due north of its previous position. The vessel and snagged equipment passed directly over buried production and control lines between Pierce and the Haewene Brim FPSO. The crew called an all-stop, recovered the survey equipment and removed the buoy mooring tether. No damage to the buoy or survey equipment and no injury or environmental release were observed. An ROV survey that evening found no integrity issues with the crossed pipelines or control umbilicals, and the hydrographic survey continued. The buoy was taken ashore for servicing and maintenance before later reinstallation.\n\nThe buoy position had been marked on project charts, maps, the HIRA and toolbox talks. However, after recovery for routine maintenance in March 2023, it had inadvertently been redeployed about 270 m south of its earlier position. That revised location was not communicated to Geomatics and was therefore not supplied to the survey contractor. Before the survey run, visual observations prompted a 40 m course offset, but that track passed between previously observed buoy positions and did not allow for the mooring tether length or the buoy\'s maximum excursion around its anchor.',
      what_went_wrong: [
        'After March 2023 maintenance, the buoy was inadvertently redeployed about 270 m south of its prior location; the revised position was not communicated to Geomatics and was not passed to the survey contractor.',
        'A 40 m vessel offset was selected from visual observations, but the planned track passed through the middle of previously observed buoy positions and the offset was insufficient to prevent the towed system snagging the mooring tether.',
        'The maximum tether length relative to water depth, mooring slack and resulting horizontal excursion were not properly understood or incorporated into survey planning.',
        'The contractor had not been supplied with a mooring-assembly diagram and rope length, so this limitation was not identified during the HIRA or revisited in the toolbox talk.'
      ],
      lessons_learned: [
        'Provide Geomatics with accurate buoy anchor coordinates immediately after deployment and add them to GIS and flow-assurance products; the metocean team should also provide observed position and maximum excursion from the live MetNet record.',
        'Plan an avoidance offset for the entire mooring footprint, not just the observed surface position. The learning report recommends about 400 m where observed positions vary, and notes that metocean-buoy horizontal displacement can approach the water depth because storm survival requires mooring slack.',
        'Supply the survey contractor with the mooring-assembly diagram and rope length, then address the resulting interaction limits in the HIRA and close-approach toolbox talk.',
        'Use live buoy position from MetNet during planning, but give field observation and tidal state precedence over a single supplied coordinate.',
        'Display a live positional readout in the online survey room so crews can see an excursion or an increasing snag load in real time.',
        'When a towed system crosses buried infrastructure, stop work and verify pipeline and umbilical integrity by ROV before relying on an absence of visible equipment damage.'
      ],
      actions: [
        'The crew called an all-stop, recovered the survey equipment and removed the buoy mooring tether.',
        'An ROV survey was completed on the evening of 12 July and confirmed no integrity issues with the crossed pipelines or control umbilicals.',
        'The snagged buoy was recovered and taken ashore for servicing and maintenance; it was later returned to its original position. A replacement buoy had meanwhile been deployed about 270 m south.'
      ],
      metocean: {
        wave_height_hs: 'N/A - operational incident, not weather-driven',
        wind_speed: 'N/A',
        sea_temp: 'N/A',
        notes: 'Operational equipment-interaction incident, not driven by metocean conditions. Wave Rider buoy is metocean measurement equipment.'
      },
      source_classification: 'internal',
      shell_internal_only: true,
      data_quality: 'High for the date, survey configuration, snag sequence, approximately 270 m redeployment offset, approximately 2 km displacement, crossed infrastructure, response and no-damage outcome because these are stated in the expert-approved Shell Knowledge Hub learning report. The report identifies the Pierce Asset in the UK Central North Sea but gives no exact incident or buoy coordinates; the map point is therefore an approximate field location. The document records recommendations and lessons, not proof that every recommended procedural control was subsequently implemented.',
      sources: [
        'Sphera Report #1279795 (INTERNAL)',
        'Shell internal: Metocean Lessons Learnt - Learning from Experience V01.docx (INTERNAL)'
      ],
      references: [
        { title: 'Snagged Wave Rider Buoy With Survey Vessel', type: 'Shell Knowledge Hub learning report', file: 'background files/Shell Knowledge Hub -  Snagged Wave Rider Bouy.pdf', internal: true, notes: 'Learning ID 123715134258400; expert approved with no suggested changes.' },
        { title: 'Sphera Report #1279795', type: 'Shell incident report', internal: true },
        { title: 'Metocean Lessons Learnt V01', type: 'Shell internal training', file: 'background files/Metocean Lessons Learnt - Learning from Experience V01.docx', internal: true }
      ]
    },

    /* ──────────────────────────────────────────────────
       53. LFE-10 - Aircraft Turbulence Helideck (2016)
    ─────────────────────────────────────────────────── */
    {
      id: 'lfe-10-aircraft-turbulence-helideck-2016',
      name: 'AW139 Exhaust-Plume Encounter During Helideck Landing',
      year: 2016,
      date: 'December 2016',
      location: 'Offshore Malaysia - installation not identified',
      lat: 5.7901,
      lng: 114.4016,
      region: 'Asia',
      location_precision: 'approximate',
      platform_type: 'Offshore installation helideck - facility not identified',
      asset_type: 'AW139 helicopter',
      operator: 'Shell Upstream Malaysia (LFE publisher); installation not identified',
      weather_event_type: 'equipment',
      classification: 'aviation',
      weather_event: 'GTG exhaust plume across the approach path, compounded by unrepresentative platform wind data',
      fatalities: 0,
      injuries: 0,
      environmental_impact: 'None reported',
      data_quality: 'High for the event mechanism and recommendations: Shell LFE UP-AW-201733 (May 2017) is the primary internal source. The alert identifies an AW139, a December 2016 event and an offshore Malaysian context, but does not identify the installation, give coordinates, report numerical wind or sea-state values, or name the flight operator. Map coordinates are illustrative and slightly offset from nearby mapped East Malaysian offshore incidents; they do not identify the facility. The alert states that the pilots believed the LTE was caused by the exhaust plume; the subsequent bow-tie analysis identified inaccurate wind data, GTG exhaust across the preferred approach and poor wind-sensor positioning as causal factors.',
      summary: 'During a crew-change flight to an unidentified offshore Malaysian helideck in December 2016, an AW139 pilot had a momentary loss of tail-rotor effectiveness on final approach, regained control and landed safely. The pilots believed a gas-turbine-generator exhaust plume had crossed the flight path. The LFE bow-tie analysis found platform-reported wind differed from the actual wind, the GTG exhaust stacks placed a plume across the preferred approach path, and poorly positioned wind sensors did not represent helideck conditions.',
      executive_summary: 'An AW139 experienced momentary loss of tail-rotor effectiveness on final approach to an offshore Malaysian helideck in December 2016. The pilot recovered and landed safely. Shell\'s LFE linked the event to a GTG exhaust plume across the preferred approach path and to inaccurate, unrepresentative platform wind data caused by poor sensor positioning and insufficient metocean involvement in weather-system design and commissioning.',
      what_happened: 'During a routine crew-change flight in December 2016, an AW139 approached an unidentified offshore Malaysian helideck using a flight path selected from the prevailing-wind data supplied by the platform. On final approach the pilot experienced a momentary loss of tail-rotor effectiveness, regained control and landed safely.\n\nThe pilots believed that a gas-turbine-generator exhaust plume had been blown across the flight path. The LFE bow-tie analysis subsequently identified three causal issues: the platform instrumentation reported prevailing wind conditions that differed from the actual conditions; the GTG exhaust stacks allowed a plume to cross the preferred approach path; and the wind sensors were positioned where their measurements were unrepresentative of helideck conditions. The alert also identified insufficient metocean-discipline involvement in designing and commissioning the offshore real-time automatic weather system.',
      what_went_wrong: [
        'The prevailing-wind data provided by platform instrumentation differed from the actual wind conditions, so the flight path was selected using inaccurate information.',
        'Gas-turbine-generator exhaust stacks allowed an exhaust plume to be blown across the preferred helicopter approach path.',
        'Wind sensors were poorly positioned and produced measurements unrepresentative of conditions at the helideck.',
        'Metocean discipline engineers had not been sufficiently involved in the design and commissioning of the offshore real-time automatic weather system.'
      ],
      lessons_learned: [
        'Exhaust plumes can interfere with aircraft performance and controllability regardless of plume nature or temperature.',
        'Facility design and modification work require early, continuous consultation among project, aviation and metocean specialists to locate exhausts, weather sensors and motion sensors safely.',
        'Primary weather readings that appear suspect should be checked against secondary means such as windsocks or handheld wind sensors until the primary system is proven serviceable.',
        'Meteorological and motion-sensing equipment supporting aviation operations is safety-critical and requires planned maintenance and calibration to the applicable performance standard and manufacturer schedule.',
        'Helideck procedures and operational limitations must communicate unserviceable sensors, inaccurate data and approach-path restrictions to all involved parties.'
      ],
      actions: [
        'The LFE recommended reviewing facility or operations HSE cases and helideck procedures for environmental and exhaust-plume risks.',
        'The LFE recommended involving Shell Aircraft and metocean specialists during initial design and facility upgrade or modification projects.',
        'The LFE recommended treating weather and motion monitoring systems as safety-critical planned-maintenance items, maintained to Shell Performance Standard PS016 and manufacturer calibration requirements.',
        'The LFE recommended reflecting weather-system unserviceability in the Manual of Permitted Operations or equivalent operational limitations.',
        'Where plumes may regularly affect helicopter operations, the LFE recommended consulting an air-transport specialist and considering plume visualisation or technical restrictions preventing approach through affected airspace.',
        'Where primary weather measurements are insufficient or suspect, the LFE recommended independent secondary measurement for verification until the primary equipment is repaired and proven serviceable.'
      ],
      metocean: {
        wave_height_hs: 'Not reported; the LFE gives no sea-state measurements',
        wind_speed: 'No numerical speed or direction reported; platform-reported prevailing wind differed from the actual wind conditions',
        sea_temp: 'Not reported',
        notes: 'The helicopter approach was planned using erroneous wind measurements supplied by the platform; poorly positioned sensors did not represent conditions at the helideck. During final approach, a GTG exhaust plume crossed the preferred approach path. The pilots believed that encountering this plume caused the momentary loss of tail-rotor effectiveness, affecting the helicopter\'s performance and controllability.'
      },
      source_classification: 'internal',
      shell_internal_only: true,
      sources: [
        'Shell LFE PDF: UP-AW-201733 Aircraft encountered turbulence during landing at offshore helideck.pdf (INTERNAL)',
        'Shell LFI Database (INTERNAL - not publicly accessible)'
      ],
      references: [
        { title: 'UP-AW-201733 - Aircraft Encountered Turbulence During Landing at Offshore Helideck', type: 'Shell LFE PDF', publisher: 'Shell Upstream - Malaysia', year: 2017, file: 'background files/LFEs Internal download/UP-AW-201733 Aircraft encountered turbulence during landing at offshore helideck.pdf', internal: true, notes: 'May 2017 alert; event description and causal findings on p. 1, lessons and recommendations on p. 2.' },
        { title: 'Shell LFI Database', type: 'Internal Learning from Incidents system', internal: true }
      ]
    },

    /* ──────────────────────────────────────────────────
       55. LFE-19 - Oloma Pipeline Repair 4 Fatalities (2016)
    ─────────────────────────────────────────────────── */
    {
      id: 'lfe-19-oloma-pipeline-four-fatalities-2016',
      name: 'Oloma Pipeline Repair - Tidal Water Ingress into Coffer Dam',
      year: 2016,
      date: 'February 2016 (report reference GRP-AC-201603)',
      location: 'Oloma, Nigeria (onshore/coastal pipeline)',
      lat: 5.32,
      lng: 6.47,
      region: 'Africa',
      location_precision: 'approximate',
      asset_type: 'Onshore/coastal pipeline (cofferdam repair)',
      operator: 'Shell Nigeria',
      weather_event_type: 'current',
      classification: 'pipeline',
      weather_event: 'Tidal surge into cofferdam during pipeline repair - high tide forcing seawater inward',
      fatalities: 4,
      injuries: 1,
      environmental_impact: 'Hydrocarbon release into cofferdam; controlled environmental impact',
      image: {
        src: 'images/lfe-19-oloma-pipeline-four-fatalities-2016-tidal-ingress-diagram.jpg',
        alt: 'Diagram of two cofferdams, the connecting pipeline, static head and incoming tide during the Oloma repair incident.',
        caption: 'Cofferdams, connecting pipeline, static head and incoming-tide mechanism.',
        credit: 'Shell internal LFE. Internal/restricted.'
      },
      summary: 'Four workers in a cofferdam died during pipeline repair when high tide forced seawater into the cofferdam through an inadequately isolated section. The resulting pressure surge ejected crude oil, condensate, and water mixture, exposing workers to hydrocarbon vapor and mist in confined space. Combined effects of reduced oxygen, hydrocarbon exposure, and physical trauma resulted in four fatalities. One worker attempting rescue suffered serious lung injury but survived.',
      executive_summary: 'Four workers died during coastal pipeline repair when a rising tide forced seawater into a cofferdam, driving a surge of crude, condensate and water that caused hydrocarbon exposure and oxygen depletion in the confined space. Incident exposed failure to account for tidal metocean factors in isolation planning.',
      what_happened: 'During pipeline repair operations in February 2016 at Oloma, Nigeria, workers were inside a cofferdam working on isolated pipeline sections. As the tide rose, seawater ingressed into a second cofferdam through points not previously recognized as part of the pressure boundary. As water level rose, hydrostatic pressure on the pipeline increased, eventually forcing a surge of crude oil, condensate, and seawater mixture toward the workers. The workers were exposed to physical trauma, reduced oxygen, and hydrocarbon vapor/mist. Four workers died. A fifth worker attempting rescue suffered severe lung injury but was recovered and treated.',
      what_went_wrong: [
        'Isolation points did not prevent tidal water ingress from a separate cofferdam within the same isolation boundary.',
        'Risk of tidal ingress within the isolation zone was not identified or explicitly mitigated.',
        'No monitoring of secondary cofferdam water level during active repair work.',
        'Personnel worked inside confined cofferdam during rising tide conditions without positive confirmation of all ingress paths.',
        'Atmospheric monitoring was not continuous (or data not acted upon) to detect oxygen depletion.'
      ],
      lessons_learned: [
        'Pipeline repair isolation must account for all potential water ingress points - including tidal influence and inter-cofferdam connections.',
        'Tidal cycle analysis mandatory: personnel should not be inside confined cofferdam during rising tide unless all ingress paths positively isolated and monitored.',
        'Emergency escape routes from cofferdams must be assessed for tide-dependent scenarios and maintained clear.',
        'Hydrocarbon mist and oxygen depletion are lethal hazards in confined spaces; continuous atmospheric monitoring and emergency ventilation essential.',
        'Hot-work and isolation procedures must explicitly address tidal and metocean factors for coastal/intertidal pipeline work.',
        'Rescue planning must account for ongoing hazards to prevent rescue workers becoming victims.'
      ],
      actions: [
        'The Shell Action Alert (GRP-AC-201603) called for isolation of coastal/intertidal pipeline work to account for tidal ingress and to positively isolate all ingress paths.',
        'It called for continuous atmospheric monitoring during confined cofferdam work.',
        'It called for rescue planning that accounts for ongoing atmospheric and pressure-surge hazards.',
      ],
      metocean: {
        wave_height_hs: 'Tidal-driven, not wave-driven; specific values not applicable',
        wind_speed: 'Not relevant to tidal ingress event',
        sea_temp: 'Not documented',
        notes: 'Tidal water ingress during rising tide forced hydrostatic pressure surge in cofferdam. Metocean factor: tidal cycle not accounted for in isolation planning.'
      },
      data_quality: 'Based on the Shell LFE Action Alert (GRP-AC-201603) and LFI pack (GRP-AW-201605) for this fatal incident. The sequence, the four fatalities and the one survivor with a lung injury are from those internal documents. The actions listed are those called for in the Action Alert; implementation status is not independently confirmed here.',
      source_classification: 'internal',
      shell_internal_only: true,
      sources: [
        'Shell LFE PDF (Action Alert): GRP-AC-201603 Oloma incident Action Alert.pdf (INTERNAL)',
        'Shell LFE PDF (LFI Pack): GRP-AW-201605 Four fatalities during pipeline repair works - part 2.pdf (INTERNAL)',
        'Shell LFI Database (INTERNAL - not publicly accessible)'
      ],
      references: [
        { title: 'GRP-AC-201603 - Oloma Incident Action Alert', type: 'Shell LFE PDF', file: 'background files/LFEs Internal download/GRP-AC-201603 Oloma incident Action Alert.pdf', internal: true },
        { title: 'GRP-AW-201605 - Four Fatalities During Pipeline Repair Works (Part 2)', type: 'Shell LFE PDF', file: 'background files/LFEs Internal download/GRP-AW-201605 Four fatalities during pipeline repair works - part 2.pdf', internal: true },
        { title: 'Shell LFI Database', type: 'Internal Learning from Incidents system', internal: true }
      ]
    },

    /* ──────────────────────────────────────────────────
       56. MiB-01 - Sakhalin Snow Accumulation Design (2000)
    ─────────────────────────────────────────────────── */
    {
      id: 'mib-01-sakhalin-snow-accumulation-design',
      name: 'Sakhalin Gas Processing Plant - Snow Accumulation Design Failure',
      year: 2000,
      date: 'First winter of operations (approximately early 2000s)',
      location: 'Sakhalin, Russia (onshore intermediate gas plant)',
      lat: 52.50,
      lng: 141.50,
      region: 'Russia and Central Asia',
      asset_type: 'Onshore gas processing plant (intermediate gas plant)',
      operator: 'Sakhalin Energy / Shell',
      weather_event_type: 'climate',
      classification: 'design',
      weather_event: 'Extreme snow accumulation - 4 meters in first winter',
      fatalities: 0,
      injuries: 0,
      environmental_impact: 'None',
      summary: 'Metocean design report for Sakhalin gas plant specified "light winter precipitation." First winter saw 4 meters of snow - an extreme underestimation. Plant team had to rapidly strengthen roofs to prevent structural collapse. Investigation revealed design criteria prepared by project engineer without metocean expert review or consultation with local knowledge.',
      executive_summary: 'Sakhalin gas plant design criteria specified "light winter precipitation" but the first winter brought 4 metres of snow, forcing emergency roof reinforcement. Root cause: metocean criteria set by a project engineer without metocean-expert review or local knowledge.',
      what_happened: 'During the first winter of operations at a gas processing plant on Sakhalin Island, Russia, the facility experienced 4 meters of snow accumulation - far in excess of the design basis that specified "light winter precipitation." The intermediate gas plant team had to undertake emergency structural reinforcement to prevent roof collapse. Investigation revealed that the Metocean Design Criteria had been prepared by a project engineer without involvement of qualified metocean engineers or consultation with local Sakhalin residents.',
      what_went_wrong: [
        'Metocean design criteria prepared by a project engineer, not a qualified metocean engineer.',
        'No verification of criteria against local data or local expert knowledge.',
        '"Light winter precipitation" designation grossly underestimated Sakhalin\'s known extreme snowfall.',
        'No consultation with local operators or meteorological services familiar with Sakhalin climate.'
      ],
      lessons_learned: [
        'Metocean design criteria must be prepared or reviewed by qualified metocean engineers, not project engineers alone.',
        'For new areas or unfamiliar climates, consulting local operators and meteorological services is essential before finalizing design criteria.',
        'Sakhalin is a well-known extreme snow environment - regional awareness should flag snow load as high-risk parameter.',
        'Snow load is a structural safety-critical parameter and must be verified for worst-case, not just typical conditions.'
      ],
      actions: [
        'The source is Shell metocean training material presenting this as a teaching example. It records the lessons above as recommendations; it does not document specific corrective actions as implemented, so none are asserted here.',
      ],
      metocean: {
        wave_height_hs: 'N/A - onshore facility',
        wind_speed: 'Not the driving parameter for this incident',
        sea_temp: 'N/A - onshore facility',
        notes: 'Snow load: 4 metres accumulation vs. "light winter precipitation" design basis. Extreme underestimation of snow load parameter.'
      },
      data_quality: 'Based on Shell metocean training material (a teaching example). The 4 metres of snow versus "light winter precipitation" design account, and the root cause (criteria set by a project engineer without metocean review), are as described there; the date is approximate and no corrective actions are documented.',
      source_classification: 'external',
      shell_internal_only: false,
      sources: [
        'Shell internal training: metocean in business/001-3 Metocean and Civil Engineering.docx (INTERNAL)'
      ],
      references: [
        { title: 'Metocean and Civil Engineering - Shell Training', type: 'Shell internal document', file: 'background files/metocean in business/001-3 Metocean and Civil Engineering.docx', internal: true }
      ]
    },

    /* ──────────────────────────────────────────────────
       57. MiB-04 - Baram Platform Collapse Malaysia (2005)
    ─────────────────────────────────────────────────── */
    {
      id: 'mib-04-baram-platform-collapse-malaysia',
      name: 'Baram 8 Platform Collapse due to High River Discharge Currents',
      year: 2005,
      date: 'Collapse date unknown; platform recovered/decommissioned 2005',
      location: 'South China Sea, ~8 nautical miles offshore from Tanjung Baram, Miri, Sarawak, Malaysia',
      lat: 4.73,
      lng: 114.00,
      location_precision: 'approximate',
      region: 'Asia',
      asset_type: 'Fixed offshore jacket platform',
      operator: 'Malaysian offshore operator (not Shell-operated)',
      weather_event_type: 'current',
      classification: 'design',
      weather_event: 'Extreme current following heavy rainfall-driven river discharge; cyclone event',
      fatalities: 0,
      injuries: 0,
      environmental_impact: 'Platform collapse; limited environmental impact from collapse itself',
      summary: 'Fixed jacket platform Baram 8 collapsed near Baram River delta entrance after cyclone event. Root cause was extreme current conditions - design basis assumed 0.6 m/s return-period current based on open-ocean data. Actual river discharge-driven currents at location were significantly higher. Investigation found no cause for collapse other than extreme environmental severity.',
      executive_summary: 'Baram 8 fixed platform collapsed near a river delta after a cyclone event. Design basis current (0.6 m/s, open-ocean) grossly underestimated actual river-discharge-driven currents. No structural defect found - only extreme environmental severity.',
      what_happened: 'The Baram 8 platform was a fixed offshore jacket structure located near the entrance of the Baram River in Sarawak, Malaysia. During or after a cyclone event, the platform experienced loading from extreme currents - likely a combination of cyclone-driven surge, heavy rainfall-induced river discharge surge, and tidal current amplification in shallow water. The platform failed structurally. During decommissioning in 2005, investigators could find no structural defect or other cause for collapse - the only explanation was the severity of the environmental conditions.',
      what_went_wrong: [
        'Design basis current estimate (0.6 m/s) based on open-ocean data; river discharge-driven currents not characterized.',
        'Proximity to major river discharge point was not recognized as significant current hazard.',
        'No site-specific current measurements conducted at platform location.',
        'Design assumed relatively uniform open-ocean current regime; did not account for episodic river discharge surges.'
      ],
      lessons_learned: [
        'Fixed platform current design criteria must be based on site-specific measurements - generic open-ocean values inappropriate for river delta locations.',
        'River discharge-driven currents are highly episodic and can significantly exceed ambient tidal/oceanic currents.',
        'Cyclone-induced rainfall in tropical areas generates extreme short-duration river discharge surges that compound other storm loads.',
        'Near-river offshore locations require combined metocean/hydrological assessment.'
      ],
      actions: [
        'The source is Shell metocean training material presenting this as a teaching example. It records the lessons above as recommendations; it does not document specific corrective actions as implemented, so none are asserted here.',
      ],
      metocean: {
        wave_height_hs: 'Not the primary driver; current-driven failure',
        wind_speed: 'Cyclone event; specific values not documented',
        sea_temp: 'Not documented',
        notes: 'Design basis current 0.6 m/s (open-ocean) severely underestimated river-discharge-driven currents. Cyclone-driven rainfall caused extreme river surge.'
      },
      data_quality: 'Based on Shell metocean training material (a teaching example). The 0.6 m/s open-ocean design-current assumption, the river-discharge current hazard and the 2005 decommissioning finding of no cause other than environmental severity are as described there; the collapse date, exact location and any corrective actions are not established.',
      source_classification: 'external',
      shell_internal_only: false,
      sources: [
        'Shell internal training (case referenced as an industry example): metocean in business/001-3 Metocean and Fixed Offshore Structures GF and VA.docx',
        'Shell internal training: metocean in business/0041 Metocean in Shell Business - PreDG3 - Fixed Offshore Structures.docx'
      ],
      references: [
        { title: 'Metocean and Fixed Offshore Structures - Shell Training', type: 'Shell internal document', file: 'background files/metocean in business/001-3 Metocean and Fixed Offshore Structures GF and VA.docx', internal: true },
        { title: 'PreDG3 Fixed Offshore Structures - Shell Training', type: 'Shell internal document', file: 'background files/metocean in business/0041 Metocean in Shell Business - PreDG3 - Fixed Offshore Structures.docx', internal: true }
      ]
    },

    /* ──────────────────────────────────────────────────
       58. LFE-14 - Anchor Handling Seaman Injury (ANONYMIZED) (2012)
    ─────────────────────────────────────────────────── */
    {
      id: 'lfe-14-anchor-handling-seaman-injury-anonymous',
      name: 'Campaign Barge Anchor Handling - Seaman Injury During Squall',
      year: 2012,
      date: '12 June 2012',
      location: 'Offshore Brunei, Borneo (location approximate)',
      lat: 5.3,
      lng: 114.5,
      region: 'Asia',
      location_precision: 'approximate',
      asset_type: 'Campaign barge + two anchor-handling tugs',
      operator: 'Operator anonymized',
      weather_event_type: 'squall',
      classification: 'maritime',
      weather_event: 'Sudden squall - wind 35-40 knots, swell 4-5 m',
      fatalities: 0,
      injuries: 1,
      environmental_impact: 'None',
      image: {
        src: 'images/lfe-14-anchor-handling-seaman-injury-deck-scene.jpg',
        alt: 'Post-incident deck scene showing the pennant buoy and indicated casualty position.',
        caption: 'Post-incident deck scene showing the buoy and casualty position.',
        credit: 'Shell internal LFE; photographer not stated. Internal/restricted.'
      },
      summary: 'Campaign barge with two anchor-handling tugs aborted anchor retrieval operations and moved away from platform due to impending squall. Trailing tug declared emergency (steering gear water ingress); lead tug also dropped anchor. During attempt to secure pennant buoy chain on deck, crew swept off feet by sea swells. Seaman trapped under 0.6-tonne buoy; required hospitalization. Incident exposes gap in weather abort criteria and deck securing procedures.',
      executive_summary: 'During anchor-handling in a sudden squall (35-40 kn, 4-5 m swell), a seaman was swept off his feet and trapped under a 0.6-tonne pennant buoy, requiring hospitalization. Incident exposed inadequate weather abort criteria and deck-securing procedures for marine operations.',
      what_happened: 'A campaign barge with two anchor-handling tugs was conducting anchor recovery. At approximately 08:20 local time, the Tow Master observed an impending squall and instructed all vessels to abort and move away. While towing out, the trailing tug experienced water ingress into its steering gear room and dropped anchor; the lead tug was also instructed to drop anchor (wind 35-40 knots, swell 4-5 m). During attempts to secure a pennant buoy chain on the lead tug\'s deck, crew were swept off their feet by sea swells. A seaman was trapped under the 0.6-tonne pennant buoy. Medevac was arranged; the seaman required hospitalization.',
      what_went_wrong: [
        'Operations continued too close to weather limits before the abort decision was made.',
        'Pennant buoy lashing arrangements inadequate to prevent buoy becoming a hazard in rough seas.',
        'Crew were on exposed deck in conditions that exceeded safe working limits.',
        'No clear pre-defined weather go/no-go criteria with adequate safety margin.'
      ],
      lessons_learned: [
        'Marine operations with anchor handling must have clear, pre-defined weather abort criteria with sufficient safety margin.',
        'Deck equipment lashings must be reviewed for adequacy in storm conditions - not just transit weather.',
        'Personnel should not be on exposed deck during conditions exceeding safe working limits.',
        'Sudden squalls in tropical offshore locations escalate rapidly - forecasting uncertainty margin must be built into go/no-go criteria.'
      ],
      actions: [
        'This is an anonymised Shell LFE; the source does not document specific corrective actions as implemented, so none are asserted here. The lessons above are the recorded learning.',
      ],
      metocean: {
        wave_height_hs: '4-5 m swell',
        wind_speed: '35-40 knots (sudden squall)',
        sea_temp: 'Tropical; not documented',
        notes: 'Sudden squall: wind 35-40 knots, swell 4-5 m. Rapid escalation typical of tropical offshore squalls.'
      },
      data_quality: 'Based on an anonymised Shell LFE. The sequence (abort on the squall, trailing-tug steering-gear ingress, both tugs anchoring, a seaman trapped under a 0.6-tonne pennant buoy, medevac) and the conditions (35-40 kn, 4-5 m swell) are from that LFE; the operator, vessel names and exact location are withheld and the map point is approximate. Corrective actions are not documented and none are asserted.',
      source_classification: 'internal',
      shell_internal_only: true,
      sources: [
        'Shell LFE PDF (operator/incident code removed): Incident details from internal database (INTERNAL)',
        'Shell LFE System reference (INTERNAL)'
      ],
      references: [
        { title: 'Shell LFE - Anchor Handling Seaman Injury (anonymized)', type: 'Shell LFE PDF', internal: true }
      ]
    },

    /* ──────────────────────────────────────────────────
       59. Big Foot TLP - Tendon Buoyancy Loss, Gulf of Mexico (2015)
       Event: Ocean / Turbidity Current / Tidal (Loop Current) · Class: Basis of Design
    ─────────────────────────────────────────────────── */
    {
      id: 'bigfoot-tlp-tendon-2015',
      name: 'Big Foot TLP - Tendon Buoyancy Loss During Installation, Gulf of Mexico',
      year: 2015,
      date: '29-31 May 2015',
      location: 'Walker Ridge Block 29, deepwater US Gulf of Mexico (~225 miles S of New Orleans; ~1,580 m / 5,200 ft water depth)',
      lat: 27.1,
      lng: -90.4,
      region: 'North America',
      location_precision: 'approximate',
      asset_type: 'Tension-leg platform (TLP) - pre-installed mooring tendons with temporary buoyancy modules',
      operator: 'Chevron (operator 60%); Equinor/Statoil (27.5%), Marubeni (12.5%)',
      weather_event_type: 'current',
      classification: 'design',
      weather_event: 'Gulf of Mexico Loop Current - persistent strong current forcing during a deepwater TLP tendon installation campaign',
      fatalities: 0,
      injuries: 0,
      environmental_impact: 'No pollution; ~45,000 ft of tendon debris and temporary buoyancy modules fell to the seabed and were later recovered under a BSEE-supervised site-clearance programme.',
      image: {
        src: 'images/bigfoot-tlp-tendon-2015-platform.jpg',
        alt: 'Chevron Big Foot tension-leg platform in the Gulf of Mexico.',
        caption: 'Big Foot tension-leg platform; this context image does not depict the tendon damage.',
        credit: 'Chevron via Journal of Petroleum Technology. Permission required.'
      },
      summary: 'During installation of the Big Foot tension-leg platform in the deepwater Gulf of Mexico, nine of its sixteen pre-installed mooring tendons lost buoyancy over 29-31 May 2015 and sank to the seabed. The TLP hull was not yet connected and was undamaged; there were no injuries or pollution. The campaign - already struggling to find a window clear of the Gulf Loop Current - was suspended, and first oil slipped about 2.5 years to November 2018.',
      executive_summary: 'Over 29-31 May 2015, nine of sixteen pre-installed mooring tendons for the operator\'s Big Foot TLP lost buoyancy and sank to the seabed in the deepwater Gulf of Mexico, together with their temporary buoyancy modules. The unconnected TLP was undamaged and no one was hurt, but the campaign - already hampered by the Gulf Loop Current - was suspended, the TLP returned to shore, and first oil slipped ~2.5 years to November 2018. The incident is a benchmark case in metocean/Loop-Current design basis and installation-window management for deepwater tension-leg moorings.',
      what_happened: 'Big Foot is a tension-leg platform (TLP) in Walker Ridge Block 29 in the deepwater Gulf of Mexico, in about 5,200 ft (1,580 m) of water - at the time believed to be the deepest TLP of its kind. It is held down by 16 vertical steel tendons between the hull and seabed foundation piles; during installation the tendons were pre-set on the seabed and held up by temporary buoyancy modules (air cans) while the hull was brought out.\n\nThe site sits in the path of the Gulf of Mexico Loop Current - the strong, warm, clockwise flow that pushes north from the Caribbean toward the Gulf Stream - and its shed eddies. The current is highly variable and hard to forecast, so low-current installation windows are rare and short. After repeated attempts to find a gap, an 18 May try to install the TLP could not even be started. Then, over 29-31 May 2015, six of the sixteen pre-installed tendons lost buoyancy and sank, three more were damaged in the days that followed, and their buoyancy modules dropped to the seabed. The unconnected hull was undamaged, with no injuries or pollution.\n\nInstallation was suspended and the TLP towed back to a safe harbour. A BSEE-supervised, ROV-mapped clean-up recovered about 45,000 ft of tendon debris over roughly 1,300 ft; three tendons had driven as much as 80 ft into the foundation piles, which proved reusable. New tendons were built, the TLP was installed in spring 2018, and first oil came in November 2018 - about 2.5 years late. No public report established why the tendons lost buoyancy; industry analysts linked it to the strong Loop Current.',
      what_went_wrong: [
        'The temporary tendon buoyancy modules (air cans) lost buoyancy, dropping nine of sixteen pre-installed tendons to the seabed. The operator did not publicly disclose the detailed failure mechanism.',
        'The installation campaign was highly exposed to the Gulf of Mexico Loop Current and its eddies; suitable current-free windows were scarce, extending the period during which the pre-installed tendons and their buoyancy modules were exposed to current loading (industry analysts linked the strong Loop Current to the failure).',
        'The design and metocean basis for the temporary-buoyancy / pre-installation phase did not provide sufficient margin against the sustained Loop-Current environment and the long waiting periods it imposed.',
        'The installation sequence left tendons standing on temporary buoyancy for an extended time while awaiting a hull-installation weather/current window, increasing exposure to a low-probability but high-consequence failure.'
      ],
      lessons_learned: [
        'Big Foot\'s 16 tendons were pre-installed and held up by temporary buoyancy while the TLP waited for a Gulf Loop Current window; over one weekend nine lost buoyancy and sank, delaying first oil about 2.5 years. Treat the Loop Current as a primary design driver and time-limit the temporary buoyancy state - a transient installation condition can be the highest-consequence one.',
        'Temporary installation states (tendons on buoyancy modules awaiting hull connection) are high-risk transient conditions and must be engineered, and time-limited, with the same rigour as the in-service condition.',
        'Installation-window planning for Loop-Current-exposed sites needs real-time current monitoring and forecasting and pre-defined go/no-go and stand-down criteria, because suitable windows can be rare and short.',
        'Contingency and preservation plans (safe-harbour tow-back, debris recovery, re-fabrication) should be developed before installation, given the multi-year, multi-billion-dollar consequences of a mooring installation failure.',
      ],
      actions: [
        'The operator suspended installation, towed the unconnected TLP back to sheltered waters, and ran a BSEE-supervised seabed site-clearance programme recovering ~45,000 ft of tendon debris; foundation piles were reused.',
        'New tendons were fabricated and the TLP was successfully installed in spring 2018; Big Foot achieved first oil in November 2018 (~2.5-year delay from the 2015 target).',
        'The incident was shared publicly by the project team at the 2019 Offshore Technology Conference (OTC) as a lessons-learned case on deepwater installation and Loop-Current management.',
        'The event reinforced industry attention on metocean (Loop-Current) design basis, temporary-phase engineering, and installation-window criteria for deepwater tension-leg moorings.'
      ],
      metocean: {
        wave_height_hs: 'Not the primary driver - a current-loading / installation-phase incident, not a storm',
        wind_speed: 'Not the primary driver',
        sea_temp: '~24-28 °C (warm Loop-Current water)',
        notes: 'The Gulf of Mexico Loop Current is a clockwise flow of warm Caribbean water extending northward toward the Gulf Stream; its core and shed eddies can produce strong, persistent currents (commonly cited up to ~1.5-2 m/s / ~3-4 knots) at a wide range of depths, and are notoriously variable and hard to schedule around. The operator did not publicly confirm the failure mechanism; Raymond James analysts (2015) speculated the strong Loop Current was the likely cause of the tendon buoyancy loss. Note: a 2019 SPE/JPT retrospective dates the event to "29 May 2014", but contemporaneous June-2015 reporting (World Oil, Offshore) places it on 29-31 May 2015 - the date used here.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      sources: [
        'JPT / SPE - "Lessons Learned From the Big Foot Mooring Incident" (2019) (EXTERNAL)',
        'Offshore Magazine - "Big Foot tendon damage causes relocation to sheltered waters" (2015) (EXTERNAL)',
        'World Oil - "Chevron to move Big Foot to sheltered waters after damage to installation tendons" (1 June 2015) (EXTERNAL)'
      ],
      references: [
        { title: 'Lessons Learned From the Big Foot Mooring Incident', type: 'Industry technical feature', publisher: 'Journal of Petroleum Technology (SPE)', year: 2019, url: 'https://jpt.spe.org/lessons-learned-big-foot-mooring-incident' },
        { title: 'Big Foot tendon damage causes relocation to sheltered waters', type: 'Industry news', publisher: 'Offshore Magazine', year: 2015, url: 'https://www.offshore-mag.com/deepwater/article/16766212/big-foot-tendon-damage-causes-relocation-to-sheltered-waters' },
        { title: 'Chevron to move Big Foot to sheltered waters after damage to installation tendons', type: 'Industry news', publisher: 'World Oil', year: 2015, url: 'https://www.worldoil.com/news/2015/6/01/chevron-to-move-big-foot-to-sheltered-waters-after-damage-to-installation-tendons' }
      ]
    },

    /* ──────────────────────────────────────────────────
       60. GSP Saturn - 2014
    ─────────────────────────────────────────────────── */
    {
      id: 'gsp-saturn-2014',
      name: 'GSP Saturn Jack-up Storm Evacuation During Wet Tow',
      year: 2014,
      date: '7-10 November 2014',
      location: 'Pechora Sea, Arctic Russia; stranded at Cape Kanin Nos',
      lat: 69.55480117842635,
      lng: 52.993088354809196,
      region: 'Russia and Central Asia',
      location_precision: 'approximate',
      platform_type: 'Sonat Orion-class jack-up drilling platform (4-legged, independent-leg cantilever), built 1988',
      operator: 'Grup Servicii Petroliere (GSP Drilling), Romania - chartered by Gazprom Neft; towed by AHTS Stril Challenger and AHTS Stril Commander',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'Arctic storm - sustained winds 70-80 knots, gusting to 100+ knots; seas 8-12 m; near-freezing temperatures; severe icing conditions',
      fatalities: 0,
      persons_on_board: 70,
      survivors: 70,
      summary: 'While being towed from the Dolginskoye field toward Murmansk in November 2014, the jack-up GSP Saturn met a severe Arctic storm - 70-80 knot winds and 8-12 m seas. It lost a lifeboat and its helideck was damaged, and the crew were evacuated to escort vessels; all 70 got off safely. The platform was later jacked down at Cape Kanin Nos to await refloating. The immediate evacuation drew on the lesson of the Kolskaya disaster (December 2011), where a similar Arctic jack-up tow capsized with 53 lost.',
      executive_summary: 'During a severe Arctic storm on 7-10 November 2014, the jack-up platform GSP Saturn was towed from the Dolginskoye field in the Pechora Sea toward Murmansk when storm conditions (70-80 knots winds, 8-12 m seas, near-freezing temperatures) caused damage and forced immediate evacuation of all 70 crew members to escort vessels. The primary escape systems were compromised (lifeboat destroyed, helicopter deck damaged), yet 100% crew survival was achieved through precautionary evacuation protocols informed by the SPBU Kolskaya precedent (2011). The platform was subsequently jacked-down at Cape Kanin Nos. The incident validated Arctic offshore evacuation procedures and highlighted continuing vulnerability of jack-up platforms in Arctic marine transits.',
      what_happened: 'The GSP Saturn, a Romanian-operated four-legged jack-up, had finished drilling at the Dolginskoye field in the Pechora Sea and on 6 November 2014 began a wet tow toward Murmansk behind two anchor-handling tugs with escort vessels.\n\nOn the evening of 7 November the storm intensified fast - sustained 70-80 knots gusting over 100, seas building to 8-12 m, near-zero visibility in snow and spray, and severe icing at about -8 to -12 C. Heavy seas tore Lifeboat No. 1 from its davits and damaged the helicopter deck.\n\nWith a lifeboat gone and the helideck unusable, the primary means of escape were compromised. Knowing the Kolskaya disaster of December 2011 - a similar Arctic jack-up tow that capsized with 53 lost - the platform and escort masters decided on immediate evacuation rather than waiting.\n\nThrough the early hours of 8 November, rescue tender boats ferried the crew in groups of 8-10 to the escort vessels, each crossing taking 20-30 minutes in the high seas. All 70 crew were successfully evacuated. The unmanned platform was later jacked down on the seabed at Cape Kanin Nos to await refloating.',
      what_went_wrong: [
        'Primary escape systems were destroyed or damaged during the initial storm surge: lifeboat #1 lost overboard, helicopter deck damaged and unsafe. Only one lifeboat remained for ~70 crew; only helicopter deck remains were unsafe. This forced reliance on tender boat evacuation under dangerous sea conditions.',
        'The platform was transiting Arctic waters in early November, a high-risk period for Arctic storms; specific weather forecast accuracy vs. actual storm intensity/track development is undocumented, though the rapid intensification appears to have caught the operation.',
        'Jack-up platform design specifications for the towed configuration (floating on floats with legs raised) provide limited seakeeping ability for high-sea-state conditions; the 8-12 m seas and 70-80 knot winds appear to have exceeded the platform\'s safe transit envelope.',
        'Seasonal ice advance pressure in the Pechora Sea (specific 2014 freeze-up dates undocumented) may have influenced the decision to depart on 6 November rather than delay for improved weather, though this remains undocumented in available sources.'
      ],
      lessons_learned: [
        'GSP Saturn lost a lifeboat and its helideck in an Arctic storm under tow, but all 70 aboard survived because the masters evacuated immediately rather than waiting - the opposite of the Kolskaya disaster three years earlier, where delay cost 53 lives. When the primary means of escape are compromised, evacuate at once.',
        'Loss of the primary escape systems must trigger immediate evacuation, with backup means - tender boats, immersion suits, life rafts - pre-positioned and drilled.',
        'Arctic jack-up tows need forecast-driven go/no-go, several dedicated tugs and Arctic-rated life-saving equipment; seasonal ice-advance pressure must not override weather-safety criteria.',
        'Remote Arctic operations need pre-positioned refuge, support and year-round search-and-rescue so a stranded platform and its crew can be reached.',
      ],
      actions: [
        'The successful crew evacuation was widely recognized within the Arctic offshore industry as a validation of Kolskaya post-incident safety protocols and conservative evacuation decision-making.',
        'GSP Saturn incident did not trigger major regulatory changes (unlike Kolskaya 2011); instead, it reinforced existing Arctic safety protocols informed by Kolskaya.',
        'The incident supported industry adoption of Polar Code requirements (effective 2017), including enhanced life-saving systems, crew training, and operational standards for Arctic vessels.'
      ],
      metocean: {
        wave_height_hs: '8-12 m (significant wave height)',
        wind_speed: '70-80 knots sustained, gusting to 100+ knots (equivalent to strong gale / hurricane-force conditions)',
        sea_temp: '~2 °C',
        air_temp: '-8 to -12 °C',
        visibility: 'Near-zero in snow and spray',
        notes: 'Arctic weather patterns in November are highly variable. Specific forecast vs. actual storm comparisons require access to Russian meteorological archives not available in public sources. Icing conditions (air temp -8 to -12 °C + sea spray) created rapid ice accumulation on decks and superstructure. The Pechora Sea is prone to polar lows - small, short-lived but intense maritime storms that develop rapidly and are difficult to forecast. Arctic seasonal ice advance (specific 2014 dates undocumented) creates operational pressure but must not override weather safety criteria.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'Moderate. Documented facts: dates (Nov 6-10, 2014), platform specs, crew count (70), evacuation success (0 fatalities), location (Pechora Sea, Cape Kanin Nos), damage (lifeboat destroyed, helicopter deck damaged). Undocumented/estimated: exact storm timing/intensity vs. forecast, refloating timeline and final outcome, Russian-language investigation reports. Metocean conditions (wind, sea state, temperature) are from vessel reports and regional estimates; specific incident-site measurements unavailable.',
      sources: [
        'Wikipedia - GSP Saturn (jack-up rig) (EXTERNAL)',
        'SPBU Kolskaya incident database entry (comparative reference) (INTERNAL)'
      ],
      references: [
        { title: 'Wikipedia - GSP Saturn', type: 'Encyclopedia', url: 'https://en.wikipedia.org/wiki/GSP_Saturn' },
        { title: 'SPBU Kolskaya Disaster (December 2011) - Comparative reference', type: 'Incident database', publisher: 'IOGP Metocean Incidents Database', internal: true },
        { title: 'GSP Saturn Detailed Incident Report - Background documentation for training/reference', type: 'Internal case study file', file: 'background files/GSP_Saturn_2014_Detailed_Incident_Report.md', internal: true }
      ]
    },

    /* ──────────────────────────────────────────────────
       61. West Navion Helideck Rollover (AS332L G-BKZE) - 2001
    ─────────────────────────────────────────────────── */
    {
      id: 'west-navion-as332l-2001',
      name: 'West Navion Helicopter Rollover due to Cross Wind',
      year: 2001,
      date: '10 November 2001',
      location: 'West Navion drilling ship, approximately 80-100 nm west of Shetland, North Sea',
      lat: 60.45,
      lng: -2.85,
      region: 'Europe',
      location_precision: 'approximate',
      platform_type: 'Offshore drillship helideck operation (rotors-running turnaround)',
      asset_type: 'Aerospatiale/Eurocopter AS332L Super Puma helicopter (G-BKZE)',
      operator: 'CHC Scotia (aircraft operator); West Navion offshore drilling operation',
      weather_event_type: 'squall',
      classification: 'aviation',
      weather_event: 'Offshore wind shift / increasing lateral wind component during vessel heading drift',
      fatalities: 0,
      persons_on_board: 2,
      survivors: 2,
      injuries: 1,
      infrastructure_impact: 'Substantial helicopter damage; main rotor breakup on helideck',
      image: {
        src: 'images/west-navion-as332l-2001-helicopter-rollover.jpg',
        alt: 'AS332L G-BKZE after rollover on the West Navion helideck.',
        caption: 'AS332L G-BKZE after rollover on the West Navion helideck.',
        credit: 'Photographer and rights unresolved. Internal/reference use only.'
      },
      summary: 'On 10 November 2001, AS332L Super Puma G-BKZE rolled over on the West Navion helideck during a rotors-running turnaround after the vessel\'s dynamic positioning heading control was lost/degraded, allowing heading drift and increasing lateral wind loading. The co-pilot on the helideck was seriously injured by rotor debris. No fatalities occurred.',
      executive_summary: 'AS332L G-BKZE landed on West Navion west of Shetland and remained rotors-running for turnaround/refuelling. The vessel\'s heading drifted after dynamic positioning heading-control degradation, changing the relative wind and destabilizing the helicopter. The aircraft toppled to starboard and rotor blades fragmented; the co-pilot on deck suffered serious leg injury. No fatalities.',
      what_happened: 'During an offshore crew transport mission from Aberdeen to the West Navion drilling ship, CHC Scotia AS332L G-BKZE landed on the helideck and remained rotors-running while passengers disembarked and refuelling proceeded. The co-pilot disembarked to assist on deck.\n\nShortly after landing, the vessel\'s dynamic positioning heading control was lost or degraded and the ship\'s heading drifted to starboard. As heading changed, the helicopter was exposed to increasing lateral wind and a small starboard list developed on the vessel. The combined wind/vector and deck-motion effects increased the righting/toppling moment on the helicopter.\n\nThe helicopter toppled to the right on the helideck. Main rotor blades struck the deck and fragmented, scattering debris. The co-pilot on the deck sustained serious leg injury from debris. The commander evacuated; there was no post-crash fatality event.',
      what_went_wrong: [
        'Dynamic positioning heading-control integrity was lost/degraded while the helicopter was on deck with rotors turning, allowing vessel heading drift.',
        'Bridge-to-cockpit communication and procedural coupling were insufficient to provide the pilot with timely warning and a clear response path during heading-control degradation.',
        'Relative wind change and vessel list/motion were not treated as an integrated aviation hazard in rotors-running on-deck operations.',
        'Mode-awareness and annunciation for DP state change were not robust enough to prevent or rapidly flag unintended/manual mode conditions.'
      ],
      lessons_learned: [
        'Treat vessel heading-control status as a critical aviation barrier whenever helicopters are on deck with rotors turning.',
        'Define explicit alert, communication, and immediate-action procedures for helicopter crew when DP heading control is degraded or lost.',
        'Integrate marine DP upset scenarios into helideck operating procedures and joint bridge-radio-helideck drills.',
        'Use clear DP mode annunciation and alarm design that makes inadvertent mode reversion difficult and immediately obvious.',
        'Monitor and communicate relative wind and deck-motion trends continuously during rotors-running turnaround and refuelling.'
      ],
      actions: [
        'AAIB published Special Bulletin S4/2001 and Formal Report 3/2004 with causal analysis and safety recommendations.',
        'The event became a recurrent offshore aviation case study linking vessel DP mode management to helideck safety.',
        'Industry guidance has increasingly emphasized integrated marine-aviation barriers and on-deck wind/motion awareness for rotorcraft operations.'
      ],
      metocean: {
        wind_speed: 'Order of 30-45 kt range in available summaries; exact incident values vary by source context',
        wave_height_hs: 'Not primary trigger; vessel heading/wind interaction and deck attitude were dominant',
        notes: 'This was a coupled marine-aviation stability event. After DP heading-control degradation, vessel heading drift changed the relative wind and contributed to helicopter toppling forces; AAIB identified aerodynamic lateral wind effects as dominant.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'Moderate-high. Event identity and mechanism are strongly corroborated (AAIB, BBC, ASN). Primary AAIB PDFs support date of occurrence 10 Nov 2001 and location 80 nm west of Shetland; some web index metadata still shows alternate wording. Coordinates are approximate.',
      sources: [
        'UK AAIB Formal Report 3/2004 landing page (EXTERNAL)',
        'UK AAIB Special Bulletin S4/2001 landing page (EXTERNAL)',
        'BBC Scotland contemporaneous reporting (EXTERNAL)',
        'Aviation Safety Network event entry (EXTERNAL)',
        'West Navion detailed background report in this repository (INTERNAL)'
      ],
      references: [
        { title: 'AAIB Formal Report 3/2004 - Eurocopter AS332L Super Puma G-BKZE', type: 'Official accident investigation', publisher: 'UK Air Accidents Investigation Branch', year: 2004, url: 'https://www.gov.uk/aaib-reports/3-2004-eurocopter-as332l-super-puma-g-bkze-12-november-2001' },
        { title: 'AAIB Special Bulletin S4/2001 - AS332L G-BKZE', type: 'Official special bulletin', publisher: 'UK Air Accidents Investigation Branch', year: 2001, url: 'https://www.gov.uk/aaib-reports/s4-2001-as332l-g-bkze-10-november-2001' },
        { title: 'BBC Scotland - Helicopter probe into ship landing', type: 'Contemporaneous media report', publisher: 'BBC News', year: 2001, url: 'http://news.bbc.co.uk/1/hi/scotland/1709969.stm' },
        { title: 'Aviation Safety Network - AS332L G-BKZE event record', type: 'Aviation database', publisher: 'Flight Safety Foundation / ASN', url: 'https://aviation-safety.net/wikibase/188751' },
        { title: 'West Navion 2001 AS332L Detailed Incident Report', type: 'Project background file', file: 'background files/West_Navion_2001_AS332L_Detailed_Incident_Report.md', internal: true }
      ]
    },

    /* ──────────────────────────────────────────────────
       62. Sinbad Platform Decommissioning Near Miss - 2021
    ─────────────────────────────────────────────────── */
    {
      id: 'sinbad-platform-nearmiss-2021',
      name: 'Sinbad Platform Decommissioning Near Miss',
      year: 2021,
      date: 'July 2021 (exact day not stated in public regulator summary)',
      location: 'Near Varanus Island, State coastal waters off Western Australia',
      lat: -20.66,
      lng: 115.58,
      region: 'Australia',
      location_precision: 'approximate',
      platform_type: 'Monopod offshore platform topside removal using crane vessel during decommissioning',
      operator: 'Santos Ltd (asset owner/operator); Fugro (decommissioning contractor); Allseas (construction vessel); MAS / AusGroup (rope-access technicians)',
      weather_event_type: 'rogue_wave',
      classification: 'decommissioning',
      fatalities: 0,
      persons_on_board: 2,
      survivors: 2,
      injuries: 0,
      infrastructure_impact: 'Unexpected detachment, lift, swing, and rotation of topside during caisson cutting; high-potential near miss during platform removal',
      severity_override: 'major',
      image: {
        src: 'images/sinbad-platform-nearmiss-2021-topside-rotation.jpg',
        alt: 'Official diagram showing the unexpected topside rotation over workers during the Sinbad decommissioning lift.',
        caption: 'Official depiction of the unexpected topside rotation over the workers.',
        credit: 'WorkSafe WA / Government of Western Australia. Permission required.'
      },
      summary: 'In July 2021, during decommissioning of the Sinbad monopod platform near Varanus Island, two workers cutting the main caisson were exposed to a high-potential near miss when the topside unexpectedly detached from the monopod and swung over them. Rigged to a crane vessel, the suspended topside was affected by unanticipated load dynamics during the cut. No one was injured, but the event exposed major weaknesses in lift planning, auto-tensioning-mode assessment, temporary support design and line-of-fire control during offshore decommissioning.',
      executive_summary: 'During offshore platform decommissioning near Varanus Island in 2021, workers cutting the monopod caisson were nearly struck when the rigged topside unexpectedly lifted, rotated, detached, and swung overhead. A regulator summary later identified inadequate assessment of crane auto-tensioning, pre-load tension, and rotation risk as key contributors. No injuries occurred.',
      what_happened: 'Two workers were positioned on the main leg (caisson) of a monopod offshore platform during a decommissioning lift. The topside had already been rigged to a crane on a nearby vessel, and the workers were cutting through the caisson to separate the topside from its support structure.\n\nDuring the cut, the topside unexpectedly moved, detached from the supporting monopod, and swung over the workers as a suspended load. The crane operator reacted quickly, manoeuvring the topside away from the workers and lowering it into the water to stabilise its motion. The workers transferred safely to the designated crew safety vessel, and the topside was subsequently recovered onto the crane vessel without injury.\n\nA 2024 WorkSafe WA / LGIRS significant incident summary anonymised the event but described the same technical sequence. WA Today identified the asset publicly as the Sinbad platform near Varanus Island and reported that the operator had planned similar removal work on the nearby Campbell platform.',
      what_went_wrong: [
        'Dynamic forces that could be applied to the rigged load while the crane was in auto-tensioning mode were inadequately understood and were not fully considered in the lift plan.',
        'The required pre-load tension was not subjected to adequate technical assessment before the cut-and-lift sequence proceeded.',
        'The engineering assessment did not identify the turning motion induced by pre-load tension after separation, so rotation of the topside was not properly anticipated.',
        'Temporary supports on the caisson were insufficient to prevent lateral displacement and rotation when the topside lifted at small angles.',
        'The work method relied too heavily on previously successful methodologies rather than rigorously analysing whether those methods were suitable for this specific platform-removal geometry and lift configuration.',
        'Workers remained beneath or immediately adjacent to a suspended load during a separation step where unstable post-cut movement was possible, creating a severe line-of-fire exposure.'
      ],
      lessons_learned: [
        'Lift plans for offshore decommissioning must include a full technical assessment of all forces acting on the load, including forces unintentionally introduced by automatic crane settings and modes such as auto-tensioning.',
        'Pre-load tension should be treated as a critical engineered parameter, not a routine setup step; its effect on separation behaviour, rotation, and centre-of-gravity shift must be explicitly analysed.',
        'Where there is any plausible turning moment or rotation risk, castellated cut designs or other controlled-separation methods should be considered to reduce the chance of sudden detachment and swing.',
        'Temporary supports used during partial separation must be assessed for off-axis loading, lateral displacement, and rotation at small lift angles, not only for simple vertical support.',
        'Decommissioning risk assessments should address the whole asset lifecycle, including how original design and structural configuration affect later removal sequences.',
        'Workers must not be positioned under suspended loads or in the immediate swing envelope during final separation and lift-off stages.'
      ],
      actions: [
        'WorkSafe WA / LGIRS published Significant Incident Summary No. 6 in June 2024 to communicate the contributory factors and required controls for similar offshore decommissioning lifts.',
        'According to WA Today, the WA regulator prohibited similar cutting and lifting operations planned for the nearby Campbell platform until the Sinbad incident investigation had been completed.',
        'The case has become a practical example of why crane auto-tensioning behaviour, pre-load tension, and separation-induced rotation must be analysed explicitly in offshore removal engineering.',
        'The public regulator summary now points duty holders toward updated decommissioning guidance from DEMIRS/WorkSafe, NOPSEMA, and NOPTA for ageing-asset and offshore decommissioning controls.'
      ],
      metocean: {
        notes: 'No public regulator source retrieved so far provides exact wind, wave, or current values for the incident. The event is better characterised as a marine-lift and engineering-control failure during decommissioning than as a directly weather-driven incident, although vessel motion and suspended-load behaviour offshore were central to the hazard.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High confidence in the technical mechanism and contributory factors because they are documented in the 2024 WorkSafe WA / LGIRS significant incident summary. Moderate confidence in asset identity, exact month/location wording, and company attribution because the regulator summary anonymises the case; those details come from WA Today reporting. Exact incident day has not been confirmed in the public regulator material retrieved so far.',
      sources: [
        'WorkSafe WA / LGIRS Significant Incident Summary No. 6 webpage (EXTERNAL)',
        'WorkSafe WA / LGIRS Significant Incident Summary No. 6 PDF (EXTERNAL)',
        'WA Today reporting identifying the platform as Sinbad near Varanus Island and naming Santos, Fugro, Allseas, and MAS (EXTERNAL)'
      ],
      references: [
        { title: 'WorkSafe WA / LGIRS - Significant Incident Summary No. 6: Offshore platform decommissioning near miss', type: 'Official regulator summary', publisher: 'WorkSafe WA / LGIRS', year: 2024, url: 'https://www.worksafe.wa.gov.au/publications/significant-incident-summary-no-6-offshore-platform-decommissioning-near-miss' },
        { title: 'WorkSafe WA / LGIRS - Significant Incident Summary No. 6 PDF', type: 'Official regulator PDF', publisher: 'WorkSafe WA / LGIRS', year: 2024, url: 'https://www.worksafe.wa.gov.au/system/files/migrated/sites/default/files/atoms/files/significant_incident_summary_no._6_-_offshore_platform_decommissioning_near_miss.pdf' },
        { title: 'WA Today - Santos’ swinging platform off WA coast had “high potential for multiple fatalities”', type: 'Media report', publisher: 'WA Today', year: 2021, url: 'https://www.watoday.com.au/national/western-australia/santos-swinging-platform-off-wa-coast-had-high-potential-for-multiple-fatalities-20211102-p595d2.html' }
      ]
    },

    /* ──────────────────────────────────────────────────
       63. Sikorsky S-92A LN-ONT - 2020
    ─────────────────────────────────────────────────── */
    {
      id: 'ln-ont-maersk-invincible-2020',
      name: 'Sikorsky S-92A LN-ONT Loss of Control',
      year: 2020,
      date: '24 February 2020',
      location: 'Maersk Invincible jack-up rig, Valhall field, North Sea, Norway - N 56°14.99′ E 003°20.93′',
      lat: 56.2498,
      lng: 3.3488,
      region: 'Europe',
      platform_type: 'Offshore jack-up rig helideck departure',
      asset_type: 'Sikorsky S-92A helicopter (LN-ONT)',
      operator: 'Bristow Norway AS (aircraft operator); Maersk Invincible offshore installation',
      weather_event_type: 'storm',
      classification: 'aviation',
      weather_event: 'Darkness, heavy rain and mist, strong 33-42 kt winds gusting 47 kt, and no usable external horizon',
      fatalities: 0,
      persons_on_board: 11,
      survivors: 11,
      injuries: 0,
      infrastructure_impact: 'No aircraft or installation damage; serious loss-of-control and near-sea-impact event',
      severity_override: 'major',
      image: {
        src: 'images/ln-ont-maersk-invincible-2020-figure-6.jpg',
        alt: 'NSIA investigation animation showing Sikorsky S-92A LN-ONT passing an illustrated offshore installation while flying backwards.',
        caption: 'Investigation animation of LN-ONT passing the installation during rearward flight; the illustrated rig is not identical to Maersk Invincible.',
        credit: 'L3 Harris Technologies UK / Norwegian Safety Investigation Authority. Permission required.'
      },
      summary: 'During a night departure from Maersk Invincible, heavy rain, darkness and the take-off direction left the two pilots without a usable external horizon or visual references. Both became spatially disoriented before the S-92A reached the 50 kt minimum speed for its principal autopilot modes. The helicopter pitched above 25°, accelerated backwards to 49 kt, descended to 175 ft above the sea and was out of control for about 40 seconds before the commander recovered. All 11 occupants were uninjured.',
      executive_summary: 'During a night departure from Maersk Invincible in heavy rain and strong wind, both pilots became spatially disoriented with no visible horizon. The helicopter flew backwards at up to 49 kt and descended to 175 ft above the sea before control was recovered after about 40 seconds. All 11 occupants were uninjured.',
      what_happened: 'LN-ONT departed Maersk Invincible for Stavanger with two pilots and nine passengers. The helideck reported wind at 42 kt gusting 47 kt, heavy rain, 7,000 m visibility and broken cloud at 900 ft; an earlier update had shown visibility falling to 3,500 m and overcast cloud at 600 ft. Ekofisk reported rain and mist and a 5 m sea state. Although classified as VMC, darkness and rain obscured the horizon and sea surface, while the illuminated installation was behind the helicopter.\n\nShortly after the take-off decision point, both pilots became spatially disoriented. The helicopter pitched above 25°, accelerated backwards at up to 49 kt over approximately 210 m and descended to 175 ft above the sea. The commander regained situational awareness after seeing the rig, took control and recovered after about 40 seconds. The flight continued safely to Stavanger without injury or damage.',
      what_went_wrong: [
        'Darkness, heavy rain, strong headwind and the departure direction removed useful external visual references. The NSIA considered that wind and rain may also have created an illusion of forward speed.',
        'Both pilots became spatially disoriented. Control inputs were overcorrected, and communication and transfer of control did not work as expected under acute stress.',
        'Control was lost before the helicopter reached the 50 kt minimum speed for its principal autopilot modes. There was also no standard deviation call for abnormal pitch attitude.',
        'The pre-departure briefing did not ensure that Threat and Error Management explicitly addressed the demanding weather, black-hole departure and spatial-disorientation risk.'
      ],
      lessons_learned: [
        'A regulatory VMC classification does not guarantee usable visual references offshore. Night, rain, cloud and departure geometry must be assessed together for the visual-to-instrument transition.',
        'Pre-take-off Threat and Error Management should explicitly cover loss of horizon, precipitation and wind cues, automation limits and the recovery plan.',
        'Crews need clear control-transfer triggers and standard calls for abnormal pitch during demanding departures.',
        'Simulator training should reproduce spatial disorientation and upset recovery in realistic offshore darkness and rain; low-speed automation can provide an additional barrier.'
      ],
      actions: [
        'Bristow Norway conducted an internal investigation and introduced an approved standard practice for use of the cyclic force-trim release button.',
        'NSIA Safety Recommendation 2024/02T asked the Norwegian Civil Aviation Authority to follow up offshore operators’ TEM procedures, training and use in daily operations.',
        'NSIA Safety Recommendation 2024/03T asked Bristow Norway to add Standard Deviation Calls for pitch variations beyond predefined limits.'
      ],
      metocean: {
        wave_height_hs: '5 m “Sea State” reported in the 19:50Z Ekofisk METAR',
        wind_speed: 'Helideck report: 42 kt gusting 47 kt from 120°; update: 33 kt from 118°; Ekofisk: 37-38 kt from 090-100°',
        sea_temp: '8 °C',
        air_temp: '3 °C',
        visibility: 'Helideck 7,000 m, updated to 3,500 m; Ekofisk 5,000 m in rain and mist',
        cloud: 'Helideck BKN 900 ft, updated to OVC 600 ft; Ekofisk SCT 700 ft / BKN 800-900 ft',
        pressure: 'Helideck QNH 993 hPa, updated to 988 hPa; Ekofisk QNH 985-988 hPa',
        notes: 'The NSIA classified the occurrence as VMC but described demanding weather with no usable external horizon or visual references. The report did not attribute the event to turbulence or wind exceeding an aircraft limit. Its environmental mechanism was degraded visual cueing: darkness, heavy rain and mist, cloud, strong headwind, the elevated deck and departure geometry obscured the horizon and sea-surface white caps; wind and rain may also have contributed to an illusion of forward speed.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High. The event sequence, coordinates, weather observations, flight-recorder values, findings and recommendations come from NSIA Aviation Report 2024/03 and its retained local PDF. The NSIA report is explicit that no technical fault contributed. “Storm” is the closest available database event type, but the report identifies no named storm and records the occurrence as VMC; the relevant metocean contribution was strong wind plus rain/mist and loss of visual cues at night.',
      sources: [
        'Norwegian Safety Investigation Authority Aviation Report 2024/03 (EXTERNAL; retained local copy)',
        'Aerossurance incident review summarising NSIA Aviation Report 2024/03 (EXTERNAL)'
      ],
      references: [
        { title: 'NSIA Aviation Report 2024/03 - Sikorsky S-92A LN-ONT near Maersk Invincible', type: 'Official safety investigation', publisher: 'Norwegian Safety Investigation Authority', year: 2024, url: 'https://www.nsia.no/Aviation/Published-reports/2024-03', file: 'background files/2024-03 LN-ONT eng Helicopter Incident Maersk 2024.pdf' },
        { title: 'Night Offshore Take-Off Loss of Control Incident Norway', type: 'Industry safety review', publisher: 'Aerossurance', year: 2024, url: 'https://aerossurance.com/safety-management/night-offshore-take-off-loss-of-control-incident/' }
      ]
    },

    /* ──────────────────────────────────────────────────
       64. AS332L G-TIGH Cormorant A Water Impact - 1992
    ─────────────────────────────────────────────────── */
    {
      id: 'g-tigh-cormorant-a-1992',
      name: 'Super Puma G-TIGH Water Impact near Cormorant A',
      year: 1992,
      date: '14 March 1992',
      location: 'Approximately 500 m east-north-east of Cormorant A platform, East Shetland Basin, UK North Sea',
      lat: 61.1033,
      lng: 1.0733,
      region: 'Europe',
      platform_type: 'Fixed offshore production platform to accommodation-flotel personnel shuttle',
      asset_type: 'Aerospatiale AS332L Super Puma helicopter (G-TIGH)',
      operator: 'Bristow Helicopters Limited (aircraft operator); Shell UK Exploration and Production Limited charter',
      weather_event_type: 'storm',
      classification: 'aviation',
      weather_event: 'Strong gusting northerly wind, snow showers, darkness, severe turbulence warning and very rough seas',
      fatalities: 11,
      persons_on_board: 17,
      survivors: 6,
      infrastructure_impact: 'Helicopter destroyed after uncontrolled collision with the sea, inversion and sinking in about 150 m of water',
      image: {
        src: 'images/g-tigh-cormorant-a-1992-airhistory-lewis-grant.png',
        alt: 'Bristow Aerospatiale AS332L Super Puma G-TIGH in flight in red, white and blue livery.',
        caption: 'Bristow AS332L Super Puma G-TIGH in flight. This is a generic aircraft photograph, not an image of the accident sequence. The photograph date and location are unconfirmed.',
        credit: 'Photo © Lewis Grant / AirHistory.net. Copyrighted; permission required for external republication.'
      },
      pack_images: [
        {
          src: 'images/g-tigh-cormorant-a-1992-aaib-figure-f3.png',
          alt: 'AAIB reconstruction of the G-TIGH track from Cormorant A, showing the heading through the turn, the wind direction and the limit of visibility.',
          caption: 'AAIB track reconstruction: G-TIGH turned downwind from Cormorant A before a stable climb, lost airspeed and descended into the sea short of the Safe Supporter flotel.',
          credit: 'UK Air Accidents Investigation Branch, AAIB Report 2/93, Figure F3. Crown copyright 1993, Open Government Licence v3.0.'
        }
      ],
      summary: 'AS332L Super Puma G-TIGH struck the sea at night on 14 March 1992 on a short shuttle from Cormorant A to the nearby Safe Supporter flotel. Turning from a gusting headwind before a stable climb, the crew did not notice airspeed decay to near zero; a descent developed and full power did not prevent impact with very rough seas. The helicopter inverted and sank within two minutes. Twelve of 17 occupants escaped but only six were recovered alive - the AAIB found the weather within limits and the extreme sea state drove the death toll.',
      executive_summary: 'G-TIGH struck the North Sea shortly after lifting from Cormorant A at night in severe weather. During a rushed downwind turn, airspeed decayed while visually perceived ground speed remained high. The aircraft descended into very rough seas, inverted and sank within one or two minutes. Six of 17 occupants survived. Strong gusting wind and degraded visual cues contributed directly to the accident sequence; extreme sea state severely constrained survival and rescue. Icing and aircraft malfunction were excluded.',
      what_happened: 'With severe weather forcing the Safe Supporter flotel to stand off from Cormorant A, helicopters were used to shuttle people between them. At 19:48 on 14 March 1992 G-TIGH lifted from the platform with two crew and 15 passengers for the 206 m transfer, heading nearly into the strong wind, then began an immediate climbing right turn to reposition for an into-wind approach.\n\nThe turn started before a stable speed or height was established. As the helicopter swung downwind its ground speed still looked high while its airspeed fell away; the commander, searching for the flotel, and the co-pilot, struggling with wind-garbled radio calls, did not catch it until airspeed had reached effectively zero and a descent had set in from about 250 ft.\n\nMaximum power was applied too late and the helicopter struck a wave at about 25 ft/s. It rolled, inverted and sank within a minute or two - an uncontrolled crash into the sea, not a controlled ditching.\n\nFive of the 17 on board never escaped the cabin; twelve got out into the sea, but breaking waves and cold defeated the rescue and only six were pulled out alive. All eleven who died drowned, in some cases after hypothermia.',
      what_went_wrong: [
        'Turning downwind in a strong gusting wind, the handling pilot did not notice ground speed and airspeed diverge, and let airspeed and then height decay.',
        'The turn began before a stable climb speed or height was established, leaving too little height to recover.',
        'Darkness and snow removed visual cues, while the search for the flotel and wind-garbled radio calls broke the instrument cross-check.',
        'The emergency flotation was armed but could not be deployed in time, so the inverted helicopter sank within a minute or two.',
        'The survival system failed when it was needed: one liferaft was damaged and unstable, the other inaccessible, and the extreme sea state defeated rescue - only six of the twelve who escaped survived.'
      ],
      lessons_learned: [
        'Offshore wind limits do not by themselves define acceptable total risk. Flight planning must consider visual cueing, downwind manoeuvres, turbulence, sea state and whether effective rescue remains feasible.',
        'After an into-wind offshore take-off, establish a stable speed and height before turning, and trust airspeed over the strong visual sense of ground speed.',
        'Go/no-go decisions must weigh post-impact survival and whether rescue is actually feasible in the sea state, not only aircraft and helideck limits.',
        'Escape, flotation, liferafts and rescue must work as one system in the real conditions, and emergency flotation should deploy automatically after an unexpected impact.'
      ],
      actions: [
        'The AAIB made 11 safety recommendations covering crew workload, vessel-motion reporting, automatic flotation, escape and survival design, and weather effects on rescue.',
        'The operator\'s client introduced an adverse-weather policy linking escalation to whether rescue would be feasible in the wind and sea state.',
        'The accident fed into the UK CAA Review of Helicopter Offshore Safety and Survival (CAP 641, 1995).'
      ],
      metocean: {
        wind_speed: 'Met Office aftercast: 310°/35-40 kt at the surface, gusting 55-60 kt; 1953 special observation: 300°/54-64 kt',
        wave_height_max: 'Up to 11 m wave heights used in AAIB analysis; not reported as significant wave height',
        air_temp: '0 °C at 1953; dew point -3 °C; freezing level at the surface',
        visibility: 'Around 10 km, rapidly falling to 300 m in snow showers; 4,000 m in moderate snow at 1953',
        cloud: 'Broken cumulus base around 1,500 ft; occasional cumulonimbus base 550-800 ft; vertical visibility 1,200 ft at 1953',
        pressure: 'QNH 989 hPa at 1953',
        notes: 'AAIB found the severe weather and sea state remained within the helicopter\'s permitted operating envelope, but strong gusting wind was integral to the downwind-turn airspeed loss. Darkness, snow and wind-degraded communications increased workload. Down-draughts and wave crests may have prevented recovery. Sea state was a major limiting factor in survivability and rescue. Recorded liquid-water content was very low; icing and salt accretion were excluded as contributors.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High. Identity, sequence, weather observations, flight-recorder data, casualties, findings and recommendations come from AAIB Aircraft Accident Report 2/93 and its appendices. Coordinates identify the Cormorant A platform reported by AAIB; the impact was about 500 m east-north-east. The common label "ditching" is retained only as a search term: AAIB describes an uncontrolled collision/crash into the sea. Wave heights up to 11 m are maxima used in analysis, not significant wave height. A secondary Aerossurance article incorrectly states 19 occupants; AAIB and ASN establish 17.',
      sources: [
        'UK AAIB Aircraft Accident Report 2/93 and appendices (EXTERNAL; retained local copies)',
        'UK CAA CAP 641 Review of Helicopter Offshore Safety and Survival (EXTERNAL)',
        'Aviation Safety Network record 17934 (EXTERNAL)',
        'AirHistory.net photo 445595 of G-TIGH by Lewis Grant (EXTERNAL; permission required)',
        'G-TIGH detailed background report in this repository (INTERNAL)'
      ],
      references: [
        { title: 'AAIB Aircraft Accident Report 2/93 - AS332L Super Puma G-TIGH', type: 'Official accident investigation', publisher: 'UK Air Accidents Investigation Branch', year: 1993, url: 'https://www.gov.uk/aaib-reports/2-1993-as-332l-super-puma-g-tigh-14-march-1992', file: 'background files/2-1993_G-TIGH Super Puma Ditching Near Cormorant A platform, UK, March 14, 1992.pdf' },
        { title: 'AAIB Report 2/93 Appendices - G-TIGH', type: 'Official investigation appendices', publisher: 'UK Air Accidents Investigation Branch', year: 1993, url: 'https://assets.publishing.service.gov.uk/media/5422f3f940f0b6134600050d/2-1993_G-TIGH_Append.pdf', file: 'background files/AAIB_2-1993_G-TIGH_Cormorant_A_Appendices.pdf' },
        { title: 'AAIB Summary: AAR 2/1993 AS332L G-TIGH', type: 'Official report summary', publisher: 'UK Air Accidents Investigation Branch', year: 1993, url: 'https://www.gov.uk/aaib-reports/summary-aar-2-1993-as-332l-g-tigh-14-march-1992' },
        { title: 'CAP 641 - Review of Helicopter Offshore Safety and Survival', type: 'Official safety review', publisher: 'UK Civil Aviation Authority', year: 1995, url: 'https://www.caa.co.uk/publication/download/12194' },
        { title: 'Aviation Safety Network - AS332L G-TIGH accident record', type: 'Aviation accident database', publisher: 'Flight Safety Foundation / ASN', url: 'https://aviation-safety.net/wikibase/17934' }
      ]
    },

    /* ──────────────────────────────────────────────────
       Super Puma G-TIGK Lightning-Strike Ditching near Brae - 1995
    ─────────────────────────────────────────────────── */
    {
      id: 'g-tigk-brae-lightning-ditching-1995',
      name: 'Super Puma G-TIGK Lightning-Strike Ditching near Brae',
      year: 1995,
      date: '19 January 1995',
      location: 'North Sea, about 6 nm south-west of the Brae \'A\' oil production platform, UK sector',
      lat: 58.60,
      lng: 1.167,
      location_precision: 'AAIB gives the accident position as 6 nm south-west of Brae \'A\' at 58°36\'N 001°10\'E; the plotted point uses those stated coordinates.',
      region: 'Europe',
      platform_type: 'Offshore crew-change helicopter flight, Aberdeen to the Brae oilfield',
      asset_type: 'Aerospatiale AS332L Super Puma helicopter (G-TIGK)',
      operator: 'Bristow Helicopters Limited (aircraft operator); charter flight serving the Brae field',
      weather_event_type: 'storm',
      classification: 'aviation',
      weather_event: 'Convective thunderstorm activity with an isolated high-energy lightning strike; strong-to-gale southerly wind and 6-7 m seas at the ditching',
      fatalities: 0,
      persons_on_board: 18,
      survivors: 18,
      infrastructure_impact: 'The tail rotor, gearbox and pitch-servo assembly detached in flight. The helicopter ditched and stayed afloat for about three and a half hours, then its flotation bags punctured alongside a safety vessel and it sank at 1803; it was damaged beyond economic repair and later recovered for investigation.',
      image: {
        src: 'images/g-tigk-1995-ditched-adrift.jpg',
        alt: 'Bristow AS332L Super Puma G-TIGK floating upright in heavy seas after ditching, its tail rotor and gearbox missing from the end of the tail boom.',
        caption: 'G-TIGK afloat in the North Sea after the ditching, the tail rotor and gearbox torn away. All 18 aboard were rescued unhurt.',
        credit: 'UK Air Accidents Investigation Branch, AAIB Aircraft Accident Report 2/97 (frontispiece); photograph bears a Bristow Helicopters credit. Crown copyright 1997, Open Government Licence v3.0.'
      },
      summary: 'On 19 January 1995 the Bristow AS332L Super Puma G-TIGK was ferrying 16 engineers from Aberdeen to the Brae field when, descending through cloud at about 3,000 ft, it was struck by lightning. One carbon-composite tail rotor blade was damaged beyond its protection, and about three and a half minutes later the resulting imbalance tore the whole tail rotor and gearbox off the aircraft. The crew shut down the engines and ditched into 6-7 m seas; all 18 aboard were rescued unhurt.',
      what_happened: 'G-TIGK (callsign 56C), a Bristow AS332L Super Puma, left Aberdeen at 1138 hrs on 19 January 1995 to ferry 16 engineers to the Brae oilfield. The forecast warned of cumulonimbus and isolated thunderstorms along the route; the crew climbed to look for clear air, then descended to 3,000 ft.\n\nAt about 1236 hrs, in cloud at around 3,000 ft, a bang and a flash marked a lightning strike and the helicopter began to vibrate severely. The first officer, the handling pilot, transmitted a Mayday and began an autorotative descent; but as it was still controllable the crew levelled at about 1,500 ft and turned for the nearby Brae \'A\'.\n\nAbout three and a half minutes after the strike there was a loud crack; the helicopter lurched left, rolled and pitched down as the imbalanced tail rotor, gearbox and pitch servo tore away. The crew sent a second Mayday, shut down both engines to contain the yaw, inflated the floats and ditched gently at about 1242 hrs despite six-to-seven-metre seas and a 30 kt wind; the helicopter stayed upright.\n\nThe left liferaft blew over, so all 18 boarded the right 14-man raft, which stayed afloat despite being overloaded and punctured. A company helicopter heard the Mayday, found them within about half an hour, and fast rescue craft from two safety vessels recovered everyone by about 1340 hrs with no injuries. The helicopter floated about three and a half hours before its flotation bags punctured alongside a salvage vessel and it sank.',
      what_went_wrong: [
        'The route carried a forecast risk of isolated thunderstorms, yet North Sea helicopters had no onboard means of detecting areas of potential lightning discharge, and the available ground-based lightning (SFERICS) data reached crews with a 15-20 minute delay and limited positional accuracy.',
        'One carbon-composite tail rotor blade took a high-energy lightning strike that exceeded its protection, stripping its titanium leading-edge shield and causing gross loss of material - an action integral estimated at up to three times the certification level.',
        'The blade\'s lightning protection was inadequate: it had been developed from an earlier fibreglass blade certificated to lightning criteria that had since become obsolete, and this composite design had never been lightning-tested at certification.',
        'The tail-rotor imbalance set up a dynamic response in the gearbox/pylon-boom assembly; early failure of the upper mounting-bolt locking wire let that bolt loosen and fail by fatigue, and within about three and a half minutes the whole tail rotor, gearbox and pitch servo detached - a complete loss of yaw control.',
        'In the evacuation the left liferaft was unusable in the wind and sea, the single usable raft was overloaded and was punctured by a floating jettisoned cabin door, and minor procedural errors occurred - none of which, on the day, prevented a successful rescue.',
      ],
      lessons_learned: [
        'A single lightning strike crippled an offshore helicopter: it damaged a carbon-composite tail rotor blade beyond its protection, and the imbalance tore the whole tail rotor and gearbox off within three and a half minutes. Yet an immediate engine-shutdown ditching into 6-7 m seas and a disciplined evacuation saved all 18 aboard. Certify composite rotor blades against realistic lightning energy, and drill the ditching and evacuation that make such an outcome survivable.',
        'Give crews real-time lightning information and the means to avoid convective cells - after this accident the recommendation was to fit lightning-discharge mapping systems to public-transport helicopters with composite rotor blades.',
        'Design the airframe to tolerate tail-rotor damage: stronger gearbox-bolt locking and a reviewed tail-boom/pylon dynamic response so that an out-of-balance tail rotor does not rapidly shed the whole assembly.',
        'Escape, flotation, liferafts and rescue must work as one system in the real sea state - here a jettisoned door punctured the only usable raft, so survey buoyant doors for puncture risk and rehearse evacuation from a floating helicopter.',
      ],
      actions: [
        'The AAIB published Aircraft Accident Report 2/97 (July 1997), identifying four causal factors and making eight safety recommendations.',
        'Recommendations called on the CAA and industry to tighten lightning certification for rotary-wing aircraft with composite rotor blades - a higher Zone 1A action integral, a 100% probability target, additional arc-attachment test points, and representative blade-root assemblies in the tests.',
        'The manufacturer was asked to introduce stronger locking for the tail rotor gearbox mounting bolts and to review the tail boom/pylon dynamic response to tail-rotor imbalance.',
        'Further recommendations covered fitting lightning-discharge mapping systems, surveying buoyant jettisonable doors for raft-puncture risk, disabling CVFDR crash G-switches, and strengthening recurrent training for evacuation from a floating helicopter.',
      ],
      metocean: {
        wind_speed: 'Met Office aftercast: surface 170°/25-30 kt gusting 35-40 kt; 2,000 ft 190°/35-40 kt. The AAIB synopsis records a 30 kt southerly wind at the ditching.',
        wave_height_max: 'Six to seven metre seas at the ditching (AAIB synopsis).',
        air_temp: 'Surface temperature about +8°C; zero-degree isotherm around 2,000 ft.',
        visibility: 'Generally around 20 km, deteriorating to about 4 km in squally rain, hail and snow showers.',
        cloud: 'Unstable southerly airstream with 3-7 oktas cloud, occasional large cumulus or cumulonimbus base 600-1,000 ft and tops 18,000-20,000 ft; satellite showed building cumuloform cloud over the ditching position.',
        notes: 'An automatically located atmospheric discharge (SFERIC) was logged at 1300 hrs about 50 nm from the ditching position. The AAIB found the weather was within the helicopter\'s permitted operating envelope; the critical hazard was an isolated high-energy lightning strike rather than the wind and sea themselves.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High - based directly on the primary UK AAIB Aircraft Accident Report 2/97 (published July 1997; local copy retained): AS332L Super Puma G-TIGK, 19 January 1995, 6 nm south-west of Brae \'A\', lightning strike at about 3,000 ft, detachment of the tail rotor/gearbox/pitch-servo assembly some three and a half minutes later, ditching with all 18 aboard (16 passengers, two crew) rescued unhurt, four causal factors and eight safety recommendations. Coordinates are the AAIB-stated accident position (58°36\'N 001°10\'E). The report PDF is a scanned image; key sections were OCR-extracted and retained as a text file. The hero photograph is the report frontispiece (Crown copyright, Open Government Licence) and bears a Bristow Helicopters credit. Crew names (Capt Cedric Roberts; SFO Lionel Sole) come from contemporaneous Herald coverage; a Mayday/Air Crash Investigation episode transcript is retained for narrative context only.',
      references: [
        { title: 'Report on the accident to Aerospatiale AS332L Super Puma, G-TIGK, in the North Sea on 19 January 1995 (AAIB Aircraft Accident Report 2/97)', type: 'Official accident investigation', publisher: 'UK Air Accidents Investigation Branch', year: 1997, url: 'https://assets.publishing.service.gov.uk/media/5422fe16e5274a131400091d/2-1997_G-TIGK.pdf', file: 'background files/2-1997_G-TIGK.pdf', notes: 'Primary source. Lightning strike damaged a carbon-composite tail rotor blade beyond its protection; the resulting imbalance detached the tail rotor, gearbox and pitch servo within about 3.5 minutes; successful ditching with all 18 aboard rescued unhurt. Four causal factors and eight safety recommendations.' },
        { title: 'Praise for pilot in helicopter ditching', type: 'Contemporaneous press report', publisher: 'The Herald (Glasgow)', year: 1995, url: 'https://www.heraldscotland.com/news/12665891.praise-for-pilot-in-helicopter-ditching/', notes: 'Names the crew (Capt Cedric Roberts; SFO Lionel Sole) and summarises the AAIB findings on publication.' },
        { title: 'North Sea Helicopter Crash - The True Story Behind the 1995 Lightning Strike Disaster (Mayday / Air Crash Investigation)', type: 'Secondary documentary', publisher: 'Cineflix (YouTube)', url: 'https://www.youtube.com/watch?v=Im_5sw8Jj2U', notes: 'Dramatised documentary account; used only for narrative context. Full transcript retained locally.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       Super Puma VH-BHK Weather and Fuel Emergency near Barrow Island - 2013
    ─────────────────────────────────────────────────── */
    {
      id: 'vh-bhk-barrow-island-weather-2013',
      name: 'Super Puma VH-BHK Weather and Fuel Emergency near Barrow Island',
      year: 2013,
      date: '15 February 2013',
      location: 'Barrow Island area, offshore Western Australia',
      lat: -20.865,
      lng: 115.407,
      location_precision: 'ATSB gives the occurrence position as Barrow Island at 20°51.9\'S 115°24.4\'E; the plotted point uses those coordinates. The weather encounter and single-engine arrival occurred over water to the west of the island.',
      region: 'Australia',
      platform_type: 'Offshore training helicopter flight (night deck-landing practice to a support vessel)',
      asset_type: 'Aerospatiale AS332L Super Puma helicopter (VH-BHK)',
      operator: 'Bristow Helicopters (Australia) (aircraft operator); flight serving the Chevron-operated Barrow Island (Gorgon) operations',
      weather_event_type: 'storm',
      classification: 'aviation',
      weather_event: 'Unforecast night thunderstorm squall line (more than 185 km long) with severe turbulence and lightning; winds gusting to 50 kt at landing',
      fatalities: 0,
      persons_on_board: 3,
      survivors: 3,
      infrastructure_impact: 'None - the helicopter landed safely and was undamaged. The serious-incident outcome was a fuel state of 300 lb (170 L) on landing, below the 400 lb fixed reserve, after a single-engine fuel-conservation arrival.',
      image: {
        src: 'images/vh-bhk-2013-bom-radar-2110.png',
        alt: 'Bureau of Meteorology weather-radar image showing rain echoes across the Pilbara coast and offshore, with the helicopter position marked by a star near Barrow Island and the destination circled.',
        caption: 'BoM weather radar at 2110 (Dampier). The helicopter (star, near Barrow Island) and its destination (circled) against the thunderstorm band it flew into; colours show rain rate from light to heavy.',
        credit: 'Bureau of Meteorology weather radar (Dampier, 1310 UTC / 2110 WST, 15 Feb 2013), reproduced in ATSB Transport Safety Report AO-2013-034, Figure 2. © Commonwealth of Australia (Bureau of Meteorology).'
      },
      summary: 'On the night of 15 February 2013 the Bristow Super Puma VH-BHK was returning to Barrow Island, Western Australia, from night deck-landing practice on the vessel Lorelay when it flew into an unforecast thunderstorm squall line with severe turbulence and lightning. Too low on fuel to divert, the crew shut down an engine, descended below the safe altitude over water, became visual by a lightning flash and landed single-engine in 50 kt gusts on less than reserve fuel. All three were unhurt.',
      what_happened: 'VH-BHK was an Aerospatiale AS332L Super Puma operated by Bristow Helicopters at Barrow Island, Western Australia, for the Chevron-operated Gorgon operations. On the evening of 15 February 2013 it flew a night training detail - two pilots maintaining instrument and night deck-landing recency under a line training captain as pilot in command - from Barrow Island to the offshore vessel Lorelay, about 40 nm to the north-west. The pre-flight aerodrome forecast, specially extended to cover the flight, showed benign conditions, though the area forecast mentioned isolated thunderstorms.\n\nThe crew departed at 1900, completed deck-landing practice with the vessel underway, and left Lorelay at 2057. Unseen by them, a squall line of thunderstorms more than 185 km long had developed and was moving over Barrow Island. Tracking back toward the island, the weather radar returns built from light to heavy and the helicopter entered cloud with severe turbulence and significant lightning. Soon after 2110 the crew turned west, away from the island, and descended to the lowest safe altitude seeking a way around; after 10 minutes there was none.\n\nBy now fuel was critical. Turning back, the groundspeed fell as low as 36 kt, and the crew calculated there was not enough fuel to fly the published instrument approach or divert to a night alternate. Following a fuel-emergency procedure, they shut down one of the two engines to conserve fuel and descended below the lowest safe altitude in cloud over water, using the radar altimeter and weather radar, down to 250 ft.\n\nAt about 2139, some 10 km offshore, a lightning flash briefly lit the terrain and aerodrome, confirming the path was clear, and the crew then sighted the aerodrome lights. To avoid distraction and save fuel they chose not to restart the engine, and made a single-engine cross-runway landing in winds gusting to 50 kt, shutting down at 2148. Fuel remaining was 300 lb (170 L) - below the 400 lb fixed reserve, about 20 minutes of flying. All three crew were unhurt and the helicopter was undamaged.',
      what_went_wrong: [
        'The flight\'s fuel was planned on the benign aerodrome forecast and carried only about 30 minutes of extra holding fuel; it left no margin once an unforecast squall line closed the destination.',
        'A thunderstorm squall line more than 185 km long developed and moved over Barrow Island during the flight, bringing severe turbulence, lightning and 50 kt gusts that prevented a normal visual or instrument approach.',
        'The specially extended aerodrome forecast never mentioned the severe weather and was not amended as the storms developed, because the oncoming night-shift forecaster was unaware the forecast\'s validity had been extended - a shift-handover gap; no SIGMET was issued for the squall line.',
        'The flight was conducted under visual flight rules with no IFR flight notification submitted, so air traffic services were not tracking it and could not pass flight-specific weather-hazard alerts; the crew relied on monitoring general broadcasts.',
        'With no fuel to divert or fly the approach, the crew were forced into a non-standard recovery - shutting down an engine and descending below the lowest safe altitude in cloud over water - that left them with less than final reserve fuel on landing.',
      ],
      lessons_learned: [
        'An unforecast night thunderstorm closed the only destination and left a Super Puma with no fuel to divert; the crew shut down an engine, descended below the safe altitude over water in cloud, became visual by a lightning flash and landed single-engine in 50 kt gusts with less than reserve fuel - all three unhurt. Carry fuel for the weather the area forecast warns of, not just the destination forecast, and fix real diversion options before a night offshore flight.',
        'A forecast is only as good as its handover: the extended aerodrome forecast was never amended because the incoming forecaster did not know it existed, so build non-routine forecasts into a formal shift-handover checklist.',
        'File an IFR flight notification for night offshore flights even when it is not required - it lets air traffic services track the aircraft and pass directed weather-hazard alerts that a VFR flight will not receive.',
        'Give crews a live weather link to base: man the radio room for night operations and have crews request an actual weather assessment before committing inbound, so a developing storm is known before fuel becomes the constraint.',
      ],
      actions: [
        'The ATSB published investigation report AO-2013-034 (12 December 2013), classing the occurrence a serious incident with two contributing factors and two risk factors; no systemic safety issues were identified.',
        'The Bureau of Meteorology compiled a meteorological report recommending a forecaster handover checklist - including handover of any non-routine forecasts - and a reading register for all forecasters.',
        'The operator required flight crews to carry 60 minutes of holding fuel for night deck-landing practice or night flights whenever the area forecast contained thunderstorms, even if the aerodrome forecast did not require it.',
        'The operator manned its Barrow Island radio room for all night operations, required inbound night crews to request an actual weather assessment from the base, issued a Pilots-To-Read notice (18 April 2013) and ran a desktop emergency-response exercise based on a ditching scenario.',
      ],
      metocean: {
        wind_speed: 'Winds gusting to 50 kt at Barrow Island during the single-engine landing; gusts first recorded at the aerodrome from 2054.',
        cloud: 'Instrument meteorological conditions in and around a thunderstorm squall line more than 185 km long, with low cloud over the ocean around Barrow Island - low enough that the crew had to descend to 250 ft to become visual.',
        visibility: 'Poor below cloud at night; the crew needed considerable attention to hold visual reference even after sighting the aerodrome lights.',
        notes: 'A broad surface trough generated showers and thunderstorms from early afternoon; after 1800 a squall line developed inland of Barrow Island and from about 2000 moved over the coast and ocean, producing severe turbulence, significant lightning and 50 kt gusts. The weather was unforecast for Barrow Island and no SIGMET was issued; a lightning flash briefly illuminated the terrain and aerodrome, helping the crew confirm a clear path.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High - based directly on the primary ATSB Transport Safety Report AO-2013-034 (final, 12 December 2013; local copy retained): Aerospatiale AS332L Super Puma VH-BHK (s/n 2096), serious weather-related event near Barrow Island, WA, on 15 February 2013; three crew, no passengers, no injuries, no damage; thunderstorm squall-line encounter, single-engine fuel-conservation recovery and landing with 300 lb fuel (below the 400 lb fixed reserve). Coordinates are the ATSB occurrence position (20°51.9\'S 115°24.4\'E). The ATSB does not name the operator; the aircraft operator is identified as Bristow Helicopters (Australia) from a JetPhotos airframe record of VH-BHK (s/n 2096) photographed at Barrow Island, and Chevron is the Barrow Island (Gorgon) field operator by context (not stated by ATSB). The vessel Lorelay is Allseas\' pipelay vessel by name match (inferred). The hero image is a Bureau of Meteorology weather-radar figure reproduced in the ATSB report.',
      references: [
        { title: 'Weather-related event involving Super Puma helicopter, VH-BHK, Barrow Island, Western Australia, on 15 February 2013 (ATSB AO-2013-034)', type: 'Official accident investigation', publisher: 'Australian Transport Safety Bureau', year: 2013, url: 'https://www.atsb.gov.au/sites/default/files/2023-10/ao-2013-034_final.pdf', file: 'background files/ao-2013-034_VH-BHK_final.pdf', notes: 'Primary source. Night training flight encountered an unforecast thunderstorm squall line; single-engine fuel-conservation recovery and landing with fuel below the fixed reserve; three crew unhurt, no damage. Two contributing factors (unforecast severe weather closing the destination; insufficient fuel forcing an engine shutdown and descent below LSALT in IMC) and two risk factors (no IFR notification; TAF not amended due to a forecaster handover gap).' },
        { title: 'VH-BHK Eurocopter AS 332L Super Puma (s/n 2096), Bristow Helicopters, at Barrow Island (YPBX)', type: 'Airframe/operator record', publisher: 'JetPhotos', year: 2011, url: 'https://www.jetphotos.com/photo/7225720', notes: 'Photograph corroborating that VH-BHK (serial 2096) was operated by Bristow Helicopters at Barrow Island - the ATSB report does not name the operator.' }
      ]
    },

    /* ──────────────────────────────────────────────────
       64. Thunder Horse Listing - Hurricane Dennis - 2005
    ─────────────────────────────────────────────────── */
    {
      id: 'thunder-horse-listing-2005',
      name: 'Thunder Horse Listing During Hurricane Dennis Evacuation',
      year: 2005,
      date: '8-11 July 2005',
      location: 'Mississippi Canyon Block 778, Gulf of Mexico, United States',
      lat: 28.1906125,
      lng: -88.4956439,
      region: 'North America',
      platform_type: 'Permanently moored semisubmersible production, drilling and quarters platform (commissioning)',
      operator: 'BP Exploration & Production Inc. (75%); ExxonMobil (25%)',
      weather_event_type: 'cyclone',
      classification: 'design',
      storm_sid: '2005186N12299',
      storm_name: 'DENNIS',
      weather_event: 'Hurricane Dennis evacuation; hurricane wave action possibly worsened downflooding after the initial equipment-induced list',
      fatalities: 0,
      persons_on_board: 0,
      image: {
        src: 'images/semi-submersible-platform-thunder-horse-after-hurricane-v0-ynYRSD_mJzx5mVJkp7Tl4H9Tr6DKZRfllAr6TABHF40.webp',
        alt: 'Aerial view of the Thunder Horse semisubmersible platform listing heavily to port in the Gulf of Mexico in July 2005.',
        caption: 'Thunder Horse listing heavily after it was evacuated ahead of Hurricane Dennis, July 2005. The final MMS investigation found that the hurricane did not initiate the list.',
        credit: 'NBC News-hosted photograph; original photographer not identified; permission required'
      },
      infrastructure_impact: 'Approximately 20° port list, about 15,000 metric tonnes of seawater ingress, extensive lower-hull flooding and electrical damage; MMS estimated property damage at US$100 million',
      summary: 'Thunder Horse was evacuated during commissioning ahead of Hurricane Dennis. Isolating the four ballast-system hydraulic power units left residual pressure that gradually moved more than 80 valves, redistributing ballast into an approximately 16° list before the storm even passed. Defective check valves and failed watertight penetrations then let flooding spread; the platform was found at about 20° list on 11 July. No casualties, no spill and no hull breach.',
      executive_summary: 'Thunder Horse was evacuated during commissioning ahead of Hurricane Dennis. When personnel attempted to isolate the ballast-system hydraulic power units, residual pressure moved more than 80 valves and redistributed ballast, leaving the platform at an approximately 16° list before the storm passed. Defective check valves and failed watertight penetrations then allowed progressive flooding; hurricane waves may have added to later downflooding after freeboard was already lost. The evacuated platform was stabilized without casualties or pollution, but it suffered extensive flooding and an estimated US$100 million in damage.',
      what_happened: 'On 8 July 2005, personnel prepared the not-yet-producing Thunder Horse platform for evacuation ahead of Hurricane Dennis. The evacuation process included attempting to isolate four Danfoss hydraulic power units controlling ballast and bilge valves. The method was based on experience from other deepwater projects; the operator had no platform-specific written isolation procedure. Vessel-monitoring data recorded numerous alarms shortly after isolation and showed movement of more than 80 valves. A later test demonstrated that the isolation left enough hydraulic pressure to open the valves gradually.\n\nWater migrated from ballast tanks, particularly two full starboard-forward column tanks that were later found empty, into tanks and spaces in other hull quadrants. The platform first listed to starboard for about six hours and then rolled back through upright into an approximately 16° port list. MMS concluded that this initial list developed before Hurricane Dennis passed.\n\nThree bilge-system check valves were installed in the wrong orientation and another was inoperable, allowing water into lower-hull spaces. As the list exceeded about 16°, seawater downflooded through overboard discharge lines and/or vents and possibly later through the deck box. Failed multiple cable transits and two unintended bulkhead openings then allowed water to spread between nominally watertight compartments. When the platform was discovered on 11 July it was listing at about 20°. Investigators estimated that roughly 15,000 metric tonnes of seawater entered the hull, but found no hull breach or leaking engineered penetration below the normal waterline.',
      what_went_wrong: [
        'The four ballast-system hydraulic power units were not effectively isolated during evacuation; residual pressure gradually moved more than 80 ballast and bilge valves from their closed positions.',
        'There was no written, Thunder Horse-specific isolation procedure, and the vendor ballast package had had no design-stage HAZOP covering incorrect isolation or residual stored energy.',
        'Three ballast/bilge check valves were installed in the wrong orientation and a fourth was inoperable, letting ballast water into manned lower-hull spaces.',
        'Failed watertight cable transits and two unintended bulkhead openings let flooding spread between nominally watertight compartments.',
        'Remote ballast monitoring and control were not yet operational, so once the equipment-induced list passed about 16 degrees external seawater downflooded - worsened by hurricane waves - with no shore oversight.',
      ],
      lessons_learned: [
        'Thunder Horse was evacuated for Hurricane Dennis in sound condition, yet it nearly capsized - not from the storm but because isolating its ballast valves left residual pressure that quietly moved 80-plus valves, while wrong-way check valves and failed watertight penetrations let flooding spread, reaching about 20° and taking on roughly 15,000 tonnes of water. Storm-evacuation procedures must be platform-specific, written and tested so the unattended state is demonstrably fail-safe.',
        'Vendor-supplied packages still need system-level HAZOP for loss of power, residual stored energy and incorrect isolation.',
        'Watertight integrity depends on small components too - check-valve orientation, cable transits and blank modules need traceable inspection and pressure testing.',
        'A facility left unmanned for a hurricane needs working shore-based monitoring and, where practicable, remote ballast control, and commissioning and installation phases need explicit storm-readiness criteria.',
      ],
      actions: [
        'MMS recommended engineering and operational HAZOP of the hydraulic, bilge and ballast systems, with witnessed testing of the evacuation isolation procedure.',
        'MMS and the US Coast Guard were advised to inspect cable transits, bulkhead penetrations and downflooding points and to verify weather and watertight barriers.',
        'MMS recommended remote ballast monitoring and operation before a facility leaves the shipyard, and storm-readiness and curtailment plans for new facilities during installation.',
        'A later industry retrospective reports the related Atlantis project underwent marine-assurance review, ballast/bilge and electrical-penetration modifications, and installation of shore-transmitted motion, mooring and metocean monitoring.',
      ],
      metocean: {
        hurricane: 'Hurricane Dennis, a major hurricane crossing the eastern Gulf of Mexico on 10 July 2005',
        wind_speed: 'No platform-specific observed wind speed stated in the MMS investigation or NHC tropical cyclone report',
        wave_height_hs: 'No platform-specific significant wave height stated in the MMS investigation',
        notes: 'The NHC best track placed Dennis about 115 nautical miles east-southeast of Thunder Horse at 12:00 UTC on 10 July 2005. MMS determined the initial approximately 16° list pre-dated the hurricane passage; it states only that associated wave action may have contributed to subsequent downflooding. Exact local wind and wave values should not be presented as observations without an additional site-specific record.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for chronology, causal findings, flooding mechanism, damage estimate and recommendations because these come from the final MMS accident investigation. NOAA independently confirms the coordinates, 20-30° observed list, no production and diesel spill risk. Water depth varies by source: the MMS form gives 6,400 ft, NOAA describes roughly 1,000 fathoms and a later BP technical account gives about 6,050 ft; the record therefore avoids a single exact depth. No platform-specific wind or wave observation was found. The 2020 Offshore/SNAME retrospective compresses some valve details and is used only for later cross-project actions, not as the primary causal source.',
      sources: [
        'MMS Accident Investigation Report, event 8 July 2005 (EXTERNAL; retained local copy)',
        'MMS Safety Alert No. 235, Multiple Cable Transit Failures (EXTERNAL)',
        'NOAA IncidentNews 1292, Thunder Horse Platform (EXTERNAL)',
        'NOAA/NHC Tropical Cyclone Report, Hurricane Dennis (EXTERNAL)',
        'BP 2005 Form 20-F filed with the US SEC (EXTERNAL)',
        'SNAME technical retrospective republished by Offshore magazine (EXTERNAL)'
      ],
      references: [
        { title: 'Accident Investigation Report - Thunder Horse, 8 July 2005', type: 'Official accident investigation', publisher: 'Minerals Management Service / Bureau of Safety and Environmental Enforcement', year: 2007, url: 'https://www.bsee.gov/sites/bsee.gov/files/reports/safety/050708-pdf.pdf', file: 'background files/050708-pdf  BP Thunder Horse listing after Hurricane Dennis 2005.pdf' },
        { title: 'Safety Alert No. 235 - Multiple Cable Transit Failures', type: 'Official preliminary safety alert', publisher: 'Minerals Management Service / Bureau of Safety and Environmental Enforcement', year: 2005, url: 'https://www.bsee.gov/sites/bsee.gov/files/safety-alerts/incident-and-investigations/sa-235-pdf.pdf' },
        { title: 'Thunder Horse Platform; Offshore LA, Gulf of Mexico', type: 'Official environmental-response record', publisher: 'NOAA Office of Response and Restoration', year: 2005, url: 'https://incidentnews.noaa.gov/incident/1292' },
        { title: 'Tropical Cyclone Report: Hurricane Dennis, 4-13 July 2005', type: 'Official meteorological report', publisher: 'NOAA National Hurricane Center', year: 2005, url: 'https://www.nhc.noaa.gov/data/tcr/AL042005_Dennis.pdf' },
        { title: 'BP p.l.c. Annual Report and Form 20-F 2005', type: 'Regulatory company filing', publisher: 'US Securities and Exchange Commission', year: 2006, url: 'https://www.sec.gov/Archives/edgar/data/313807/000115697306000772/u50124e20vf.htm' },
        { title: 'Thunder Horse: Pushing the technology frontier', type: 'Operator technical retrospective', publisher: 'Offshore magazine / BP', year: 2009, url: 'https://www.offshore-mag.com/home/article/16758128/thunder-horse-pushing-the-technology-frontier' },
        { title: 'History of semisubmersible platforms provides guidance for future deepwater projects', type: 'SNAME technical retrospective', publisher: 'Offshore magazine / Society of Naval Architects and Marine Engineers', year: 2020, url: 'https://www.offshore-mag.com/vessels/article/14168460/history-of-semisubmersible-platforms-provides-guidance-for-future-deepwater-projects' }
      ]
    },

    /* ──────────────────────────────────────────────────
       65. Mad Dog Derrick Topple - Hurricane Ike - 2008
    ─────────────────────────────────────────────────── */
    {
      id: 'mad-dog-derrick-toppled-ike-2008',
      name: 'Mad Dog Drilling Derrick Toppled During Hurricane Ike',
      year: 2008,
      date: '13-16 September 2008',
      location: 'Mad Dog field, Green Canyon area, Gulf of Mexico, United States',
      lat: 27.1883333,
      lng: -91.0866667,
      location_precision: 'approximate',
      region: 'North America',
      platform_type: 'Deepwater truss spar production platform with drilling derrick',
      operator: 'BP Exploration & Production Inc.',
      weather_event_type: 'cyclone',
      classification: 'design',
      storm_sid: '2008245N17323',
      storm_name: 'IKE',
      weather_event: 'Hurricane Ike offshore wave and wind loading in the Gulf of Mexico',
      fatalities: 0,
      persons_on_board: 0,
      image: {
        src: 'images/mad-dog-spar-2012-cndn-bacon-cc-by-sa.jpg',
        alt: 'Mad Dog spar platform in the Gulf of Mexico, photographed in July 2012.',
        caption: 'Mad Dog spar platform (photo taken July 2012). This is a field context image, not a photograph of the 2008 derrick-topple event itself.',
        credit: 'Cndn Bacon, CC BY-SA 3.0 (also GFDL), via Wikimedia Commons'
      },
      infrastructure_impact: 'BP reported the drilling derrick was toppled and resting on the seabed after Ike. MMS later listed the Mad Dog spar rig among four drilling rigs confirmed destroyed by Hurricane Ike.',
      summary: 'Hurricane Ike crossed the Gulf in September 2008 and the offshore workforce was evacuated before peak conditions. On 16 September, BP stated that the drilling derrick on the Mad Dog platform had been toppled and was resting on the seabed. A subsequent MMS damage release listed the Mad Dog spar rig among four drilling rigs confirmed destroyed by Ike. No offshore fatalities were reported, but the event represented major deepwater structural damage during the storm recovery period.',
      executive_summary: 'In the days after Hurricane Ike, BP reported that Mad Dog\'s drilling derrick had been toppled and was on the seabed. MMS then included the Mad Dog spar rig in its list of four drilling rigs confirmed destroyed by Ike. Public sources used here support the occurrence and severity of the damage, but do not provide a full public engineering failure analysis of the derrick topple mechanism.',
      what_happened: 'Hurricane Ike made landfall in Texas on 13 September 2008 after crossing the Gulf of Mexico with a very large wind and wave footprint. Offshore operators evacuated personnel before the storm and began aerial and marine reconnaissance after passage.\n\nOn 16 September, Reuters reported BP\'s statement that the drilling derrick on its Mad Dog platform had been toppled and was resting on the seabed. The same statement cited the platform\'s nominal production capacity of up to 100,000 barrels of oil per day and 60 million cubic feet of gas per day.\n\nOn 30 September, MMS released a damage update identifying four drilling rigs confirmed destroyed by Hurricane Ike and included the Mad Dog spar rig in that list. Publicly available sources reviewed for this project confirm the major derrick loss and regulator damage classification, but do not provide a detailed public root-cause engineering reconstruction of exactly how the derrick failed.',
      what_went_wrong: [
        'The drilling derrick was lost during extreme hurricane exposure, indicating that storm loading exceeded the relevant resistance margin for the derrick or its support system in the encountered condition.',
        'Public reporting confirms severe outcome (toppled derrick; regulator-classified destruction) but does not publish a full failure sequence, limiting direct lessons on the precise initiating component-level failure.',
        'The event occurred within a compressed 2008 Gulf hurricane period (Gustav followed by Ike), which complicated inspection, access and restoration logistics across multiple assets.'
      ],
      lessons_learned: [
        'Deepwater storm readiness must explicitly include survival checks for the drilling package and derrick support path, not only hull/global platform survival criteria.',
        'Emergency and business-continuity planning should account for prolonged drilling-system outage when production topsides may remain but the derrick or drilling package is lost.'
      ],
      actions: [
        'MMS included Mad Dog in its list of drilling rigs confirmed destroyed by Hurricane Ike (30 September 2008 damage release).',
        'Industry and regulator post-storm damage tracking continued through the 2008 Gustav-Ike update cycle.',
        'Later public field summaries report that a replacement drilling package was installed on Mad Dog after the hurricane period.'
      ],
      metocean: {
        hurricane: 'Hurricane Ike (September 2008)',
        wind_speed: 'No Mad Dog site-specific observed wind speed found in reviewed public sources',
        wave_height_hs: 'No Mad Dog site-specific observed significant wave height found in reviewed public sources',
        notes: 'NHC classified Ike as a major hurricane over the Gulf before Texas landfall. This record does not infer local metocean observations at Mad Dog without a site-specific primary source.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'Moderate. High confidence that major damage occurred because BP stated the drilling derrick was toppled and Reuters captured the exact quote, and MMS later listed Mad Dog among rigs confirmed destroyed by Ike. Lower confidence on exact physical failure sequence because no full public engineering investigation was located in this pass. Coordinates and Green Canyon block context are treated as approximate field-location metadata from public secondary references.',
      sources: [
        'Reuters report quoting BP statement on toppled Mad Dog drilling derrick (EXTERNAL)',
        'MMS Hurricane Ike drilling-rig destruction release, 30 September 2008 (EXTERNAL)',
        'BSEE Hurricane Ike historical damage and activity portal (EXTERNAL)',
        'NHC Tropical Cyclone Report: Hurricane Ike (EXTERNAL)'
      ],
      references: [
        { title: 'Hurricane Ike damages several US offshore platforms', type: 'Contemporaneous news report quoting operator statement', publisher: 'Reuters', year: 2008, url: 'https://www.reuters.com/article/legal/government/hurricane-ike-damages-several-us-offshore-platforms-idUSN16365871/' },
        { title: 'MMS Releases Details of Drilling Rigs Destroyed from Hurricane Ike', type: 'Official damage assessment release', publisher: 'Minerals Management Service / Bureau of Safety and Environmental Enforcement', year: 2008, url: 'https://www.bsee.gov/sites/bsee.gov/files/news/hurricanes/080930.pdf' },
        { title: 'Hurricane Ike - Damage Assessment and Activity Statistics', type: 'Official hurricane impact portal', publisher: 'Bureau of Safety and Environmental Enforcement', year: 2008, url: 'https://www.bsee.gov/resources-tools/planning-preparedness/hurricane/hurricane-history/ike' },
        { title: 'Tropical Cyclone Report: Hurricane Ike', type: 'Official meteorological report', publisher: 'NOAA National Hurricane Center', year: 2008, url: 'https://www.nhc.noaa.gov/data/tcr/AL092008_Ike.pdf' },
        { title: 'Mad Dog oil field', type: 'Secondary location and field-context reference', publisher: 'Wikipedia', year: 2025, url: 'https://en.wikipedia.org/wiki/Mad_Dog_oil_field' }
      ]
    },

    /* ──────────────────────────────────────────────────
       66. Skandi Pacific Fatality - Pilbara - 2015
    ─────────────────────────────────────────────────── */
    {
      id: 'skandi-pacific-fatality-pilbara-2015',
      name: 'Skandi Pacific Fatality During Cargo Securing in Rough Seas',
      year: 2015,
      date: '14 July 2015',
      location: 'Off the Pilbara coast, about 90 nm north-west of Dampier, Western Australia',
      lat: -19.8116667,
      lng: 115.295,
      region: 'Australia',
      platform_type: 'Anchor handling tug supply vessel (AHTS) in offshore cargo transfer with semi-submersible rig',
      operator: 'DOF Management (Skandi Pacific) / Atwood Osprey offshore operation',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'Rough seas with repeated stern-shipped water during cargo transfer and securing operations',
      fatalities: 1,
      persons_on_board: 12,
      image: {
        src: 'images/skandi_pacific_2015_figure12_cctv_0519.jpg',
        alt: 'ATSB Figure 12 CCTV frame at 0519 showing shipped seas on Skandi Pacific\'s aft deck during cargo securing.',
        caption: 'ATSB Figure 12 (0519): CCTV frame showing shipped seas across Skandi Pacific\'s aft deck while crew were securing cargo in worsening conditions.',
        credit: 'Skandi Pacific CCTV (annotated by ATSB), from ATSB Marine Occurrence Investigation 322-MO-2015-005. Reuse permission not stated; permission may be required.'
      },
      infrastructure_impact: 'One fatal crush injury during deck cargo securing; no vessel structural damage reported by ATSB',
      summary: 'In the early hours of 14 July 2015, Skandi Pacific was backloading cargo from the Atwood Osprey rig off the Pilbara coast when worsening weather repeatedly shipped water onto the aft deck and transfer was suspended. After moving about 30 m off, two crew began re-securing deck cargo; as a securing chain was slackened a cargo block came loose, and at about 0523 two large waves over the open stern shifted cargo and fatally crushed one crewmember. ATSB found inadequate risk assessment and no clear trigger limits for water on deck.',
      executive_summary: 'Skandi Pacific suspended backloading in worsening conditions on 14 July 2015, then began securing cargo while seas continued to come over the vessel\'s open stern. During re-securing, a cargo block was temporarily left unsecured; two large waves then shifted the cargo and fatally crushed a crewmember. ATSB identified systemic control gaps, including inadequate SMS procedures for adverse-weather cargo handling and no clearly defined stop-work trigger for excessive water on deck.',
      what_happened: 'Skandi Pacific, an AHTS vessel, was loading and backloading cargo with the Atwood Osprey rig off the Pilbara coast. Weather had deteriorated over preceding days, and on 14 July 2015 seas were periodically washing over the vessel\'s open stern and across the aft deck.\n\n' +
        'At about 0505, the officer of the watch suspended cargo transfer because conditions were worsening and water on deck was increasing. The vessel was moved about 30 m off the rig but remained on the same heading in DP mode. Two integrated ratings then continued on deck to secure cargo.\n\n' +
        'While trying to improve lashings, they tensioned down the primary securing chain on the starboard cargo stow, leaving that cargo block unsecured. Around 0523, with one crewmember positioned forward near the unsecured cargo and the two crewmembers briefly separated, two large waves came over the stern in quick succession and shifted cargo forward. One crewmember was trapped between moving cargo, chains and a skip, and suffered fatal crush injuries.\n\n' +
        'ATSB\'s investigation concluded that risks of securing cargo in those conditions had not been adequately assessed, and that procedures and weather/water-on-deck stop criteria were insufficiently defined.',
      what_went_wrong: [
        'Cargo securing after operations were suspended was not adequately risk-assessed against the prevailing sea conditions and deck-water hazard.',
        'The vessel remained on a heading that continued to expose the open stern to shipped seas while deck work proceeded.',
        'The master was not called and remained unaware of the developing situation, limiting reassessment of safer options (for example, running with the weather or changing heading).',
        'Crew slackened the primary securing chain, leaving the entire starboard cargo block unsecured during re-rigging.',
        'A crewmember was in a crush-danger position forward of the unsecured cargo when waves shifted the load.',
        'SMS procedures lacked clearly defined weather and water-on-deck trigger points for suspending cargo handling and securing work in adverse conditions.'
      ],
      lessons_learned: [
        'On open-stern offshore support vessels, stop-work criteria for cargo operations must include explicit, objective limits for water shipped onto deck, not only general weather limits.',
        'When cargo transfer is stopped due to worsening weather, the follow-on cargo-securing task requires its own dynamic risk assessment and supervision plan.',
        'Temporary de-tensioning steps that can leave large cargo blocks unsecured should be treated as high-risk states and tightly controlled.',
        'Bridge and deck teams need continuous communication and clear authority escalation to call the master when conditions deteriorate during deck work.'
      ],
      actions: [
        'DOF Management revised procedures for adverse-weather working and cargo loading, including specific weather-condition limits.',
        'Risk assessments for offloading/backloading and cargo securing were updated after the accident.',
        'ATSB issued a safety recommendation to DOF to further address risks on open-stern vessels, including engineering controls to reduce shipped seas on aft decks.',
        'ATSB issued an industry safety advisory notice to masters, owners and operators of offshore support vessels regarding open-stern deck-work risks.'
      ],
      metocean: {
        wind_speed: 'Recorded around force 5-6 (about 17-27 knots) at 0400; forecasts for the period included fresh to strong easterlies',
        wave_height_hs: 'Sea state 5 recorded at 0400 (about 2.5-4 m); repeated stern-shipped waves across aft deck before the accident',
        notes: 'ATSB records rough-sea conditions with recurring deck water over the open stern as the key environmental contributor. The event mechanism depended on wave shipping onto deck during cargo securing, not a tropical cyclone landfall event.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High. This record is based directly on ATSB Marine Occurrence Investigation 322-MO-2015-005, including the official safety summary, findings, contributing factors, occurrence details and coordinates.',
      sources: [
        'ATSB Occurrence Investigation 322-MO-2015-005 final report (EXTERNAL)'
      ],
      references: [
        { title: 'Fatality on board Skandi Pacific, off the Pilbara coast, Western Australia, on 14 July 2015', type: 'Official marine occurrence investigation report', publisher: 'Australian Transport Safety Bureau (ATSB)', year: 2016, url: 'https://www.atsb.gov.au/investigations/322-mo-2015-005', file: 'background files/mo-2015-005_final Fatality on board Skandi Pacific.pdf' }
      ]
    },

    /* ──────────────────────────────────────────────────
       67. Atwood Osprey Mooring Failure - Cyclone Olwyn - 2015
    ─────────────────────────────────────────────────── */
    {
      id: 'atwood-osprey-mooring-failure-olwyn-2015',
      name: 'Atwood Osprey Mooring Failure During Cyclone Olwyn',
      year: 2015,
      date: '12 March 2015',
      location: 'North West Shelf, about 90 nm north-west of Dampier, Western Australia',
      lat: -19.60,
      lng: 115.36,
      location_precision: 'approximate',
      region: 'Australia',
      platform_type: 'Semi-submersible MODU (Atwood Osprey)',
      operator: 'Atwood Oceanics (rig owner) / Chevron (field operator contract)',
      weather_event_type: 'cyclone',
      classification: 'drilling',
      storm_sid: '2015068S14113',
      storm_name: 'OLWYN',
      weather_event: 'Cyclone Olwyn exposure with severe wind-wave loading leading to mooring line failures and anchor drag',
      fatalities: 0,
      persons_on_board: 0,
      image: {
        src: 'images/atwood-osprey-2015-thewest-hero.jpg',
        alt: 'The West Australian article hero image for the Atwood Osprey Cyclone Olwyn incident coverage.',
        caption: 'The West Australian article image used for incident context while reporting the Atwood Osprey Cyclone Olwyn mooring failure and subsequent contract change.',
        credit: 'The West Australian, article image credit shown as "The West Australian". Copyrighted; permission required for external republication.'
      },
      infrastructure_impact: 'Several mooring lines parted and the rig drifted about 3 nautical miles off location; media later reported superficial damage to nearby gas infrastructure',
      summary: 'During Cyclone Olwyn on 12 March 2015, the Atwood Osprey semi-submersible suffered multiple mooring-line failures and drifted about three nautical miles off station on the North West Shelf after the workforce had been evacuated. No injuries were reported, but the event created major-accident potential because of proximity to offshore hydrocarbon facilities and triggered extended repair downtime under force-majeure terms.',
      executive_summary: 'Atwood Osprey lost mooring integrity during Cyclone Olwyn and drifted roughly 3 nautical miles from its well location after de-manning and power-down. There were no casualties, but regulator and industry follow-up treated the event as a high-consequence near miss due to nearby infrastructure exposure. SEC filings record repair downtime and later contract-term reduction.',
      what_happened: 'On 12 March 2015, as Cyclone Olwyn affected the North West Shelf, the Atwood Osprey semi-submersible was operating on Chevron\'s Wheatstone campaign. The rig had been powered down and non-essential personnel evacuated before peak conditions.\n\n' +
        'During storm exposure, several mooring lines parted and the unit lost station, drifting approximately three nautical miles from location. Public operator filings later described an extended period out of service while mooring-line repairs were completed and approvals progressed before returning to work.\n\n' +
        'Regulator and industry workshop records treated the incident as a major-accident-potential event because a drifting MODU in this area could interact with nearby hydrocarbon infrastructure. A contemporaneous media report also stated that dragging anchors caused superficial damage to the Wheatstone trunkline and nearby Pluto LNG flowlines; this wording is retained as media-attributed detail rather than primary regulator finding.',
      what_went_wrong: [
        'Mooring integrity was not maintained under the cyclone loading encountered, resulting in multiple line failures and loss of station.',
        'The event highlighted that deterministic code compliance alone is insufficient where consequence is high; site-specific, risk-based design assumptions (including cyclone return period selection and uncertainty analysis) were not demonstrably robust enough for infrastructure proximity risk.',
        'Interface controls across operator, titleholder and mooring service providers were not mature enough to give transparent assurance of basis-of-design assumptions, installation quality and change-control boundaries throughout the campaign lifecycle.',
        'The incident exposed a narrow safety margin between de-manning/power-down strategy and residual drift consequence, including limited real-time visibility and recovery complexity for a displaced MODU near subsea/surface hydrocarbon assets.',
        'Publicly available sources do not provide a full engineering reconstruction of the exact component-level failure sequence for each mooring element, limiting mechanism-specific learning from open material.'
      ],
      lessons_learned: [
        'Cyclone Olwyn parted several of the evacuated Atwood Osprey\'s mooring lines and set it adrift about three miles across the North West Shelf, close to live gas infrastructure - a high-consequence near miss with no casualties only because the rig was de-manned. Cyclone-season mooring assurance must be risk-based for the actual consequence, not merely code-compliant, where a drifting MODU could strike nearby facilities.',
        'Cyclone-season mooring assurance must verify design basis, pretension management, degradation allowance and emergency performance for loss-of-position scenarios.',
        'De-manning decisions should be integrated with consequence modelling for nearby facilities, not only personnel safety at the rig itself.',
        'Maintain clear trigger criteria and rehearsed response plans for post-failure vessel drift, exclusion zones and infrastructure interaction, with reliable real-time position monitoring through a cyclone evacuation.',
      ],
      actions: [
        'NOPSEMA investigated and convened the August 2015 IADC/APPEA workshop on cyclonic moorings.',
        'NOPSEMA codified outcomes in Information Paper IP1631, emphasising ALARP through risk-based return-period selection, a documented Basis of Design, defined Management of Change, and independent design and installation assurance.',
        'IP1631 set operational integrity controls (recorded mooring tensions, pretension and survival-draft procedures before evacuation, competency-based inspection) and emergency preparedness for loss-of-position near infrastructure (real-time position monitoring, multi-facility drills, pre-rigged towing-bridle options).',
        'APPEA published the 2016 tropical-waters MODU mooring guideline with risk-screening categories, and NOPSEMA ran focused inspections on station-keeping controls.',
      ],
      metocean: {
        cyclone: 'Severe Tropical Cyclone Olwyn (8-14 March 2015)',
        wind_speed: 'Regional peak intensity reported by BoM at about 75 knots (storm-scale context, not rig-point observation)',
        wave_height_hs: 'No public rig-specific observed significant wave height identified in the reviewed sources',
        notes: 'BoM confirms Cyclone Olwyn timing, track and intensity in the offshore WA region. Publicly accessible sources used here do not provide a complete rig-point metocean measurement set for the exact mooring-failure window.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for date, event type, loss-of-position magnitude (~3 nm), no-casualty outcome, and operational/commercial impacts based on NOPSEMA material and SEC filings. Moderate for exact engineering failure mechanism due to absence of a publicly indexed full technical investigation reconstruction in this pass. The Wheatstone/Pluto line-damage sentence is directly verified from The West Australian article text but remains media-level evidence unless confirmed in official source wording.',
      sources: [
        'NOPSEMA Regulator newsletter and related information paper context (EXTERNAL)',
        'BoM Severe Tropical Cyclone Olwyn report (EXTERNAL)',
        'Atwood Oceanics SEC filings (8-K and 10-Q) (EXTERNAL)',
        'The West Australian article on contract and infrastructure impacts (EXTERNAL, media-level)'
      ],
      references: [
        { title: 'NOPSEMA information paper: MODU mooring in cyclonic conditions (A461468)', type: 'Regulatory information paper', publisher: 'National Offshore Petroleum Safety and Environmental Management Authority (NOPSEMA)', year: 2015, url: 'https://www.nopsema.gov.au/sites/default/files/documents/2021-03/A461468.pdf' },
        { title: 'NOPSEMA Regulator Issue 1 (Atwood Osprey incident summary)', type: 'Regulatory newsletter incident summary', publisher: 'NOPSEMA', year: 2017, file: 'background files/A544023_1 NOPSEMA Atwood Osprey Incident.pdf' },
        { title: 'Severe Tropical Cyclone Olwyn (March 2015)', type: 'Official cyclone report', publisher: 'Australian Bureau of Meteorology', year: 2015, url: 'https://www.bom.gov.au/cyclone/history/pdf/olwyn_report.pdf' },
        { title: 'Current Report (Form 8-K), Atwood Oceanics, 1 April 2015', type: 'Regulatory company filing', publisher: 'U.S. Securities and Exchange Commission', year: 2015, url: 'https://www.sec.gov/Archives/edgar/data/8411/000000841115000050/d8k.htm' },
        { title: 'Current Report (Form 8-K), Atwood Oceanics, 30 April 2015', type: 'Regulatory company filing', publisher: 'U.S. Securities and Exchange Commission', year: 2015, url: 'https://www.sec.gov/Archives/edgar/data/8411/000000841115000055/d8k.htm' },
        { title: 'Quarterly Report (Form 10-Q), period ended 31 March 2015', type: 'Regulatory company filing', publisher: 'U.S. Securities and Exchange Commission', year: 2015, url: 'https://www.sec.gov/Archives/edgar/data/8411/000000841115000054/fy1510q.htm' },
        { title: 'Chevron cuts rig deal loose', type: 'News report', publisher: 'The West Australian', year: 2015, url: 'https://thewest.com.au/business/finance/chevron-cuts-rig-deal-loose-ng-ya-389019' }
      ]
    },

    /* ──────────────────────────────────────────────────
       68. SEACOR POWER Capsize - Gulf of Mexico - 2021
    ─────────────────────────────────────────────────── */
    {
      id: 'seacor-power-capsize-2021',
      name: 'SEACOR POWER Liftboat Capsize Near Port Fourchon',
      year: 2021,
      date: '13 April 2021',
      location: 'Approximately 7 nm south of Port Fourchon, Louisiana, Gulf of Mexico, United States',
      lat: 28.93,
      lng: -90.21,
      location_precision: 'approximate',
      region: 'North America',
      platform_type: 'Self-elevating liftboat (jack-up service vessel)',
      operator: 'SEACOR Marine (SEACOR POWER) under offshore charter operations',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'Fast-moving line of severe thunderstorms; an unusually strong wake low brought two sudden squalls, extreme gusts and steep seas',
      fatalities: 13,
      persons_on_board: 19,
      survivors: 6,
      image: {
        src: 'images/seacor-power-2021-capsized.jpg',
        alt: 'USCG Figure 17 image showing the capsized SEACOR POWER liftboat in rough Gulf of Mexico seas after the casualty.',
        caption: 'USCG Figure 17: capsized SEACOR POWER on 14 April 2021 during post-casualty response operations.',
        credit: 'U.S. Coast Guard Marine Board of Investigation report image (Figure 17).'
      },
      infrastructure_impact: 'Total vessel capsize and later sinking; major loss of life; extensive multi-day SAR and recovery operations',
      summary: 'The liftboat SEACOR POWER capsized about 7 nautical miles south of Port Fourchon, Louisiana, on 13 April 2021 when a fast-moving line of severe thunderstorms produced an unusually strong wake low. Two sudden squalls brought extreme gusts, steep seas and near-whiteout conditions; winds exceeded 80 knots with gusts up to about 99 knots, and the capsize progressed so quickly that there was virtually no time for effective lifesaving actions. Of 19 people aboard, 13 died.',
      executive_summary: 'SEACOR POWER departed in forecast conditions that appeared routine, then met a fast-moving line of severe thunderstorms. An unusually strong wake low drove two sudden squalls across the vessel, bringing extreme gusts, steep seas and a rapid loss of visibility. The vessel developed a starboard list and capsized within minutes. The USCG MBI identified the extreme weather as the dominant causal factor, alongside gaps in weather warnings, liftboat operating guidance and emergency response.',
            what_happened: 'SEACOR POWER left Port Fourchon on 13 April 2021 in forecasts that looked routine. During the afternoon a fast-moving line of thunderstorms and a wake low swept across the area, and the liftboat was struck by two severe squalls - the first about 15:19, the second about 15:32 - with winds rising past 80 knots and visibility collapsing.\n\nThe vessel heeled hard to starboard as the crew tried to turn into the wind and lower the legs, and it capsized at about 15:37 - only minutes after the first squall. There was almost no time to send a distress call, escape the interior or launch survival craft.\n\nRescue by Coast Guard and nearby Good Samaritan vessels and aircraft was hampered by the weather. Of the 19 people aboard, 6 survived and 13 died.',
      what_went_wrong: [
        'A fast-moving squall line and wake low brought winds over 80 knots, gusting near 99, that far exceeded the vessel\'s limits with almost no warning.',
        'Crew procedures gave no clear plan for sudden, short-lived weather that rapidly exceeds operating limits.',
        'Liftboat stability rules understated the real wind-and-wave loading, so the margin against capsize was smaller than assumed.',
        'The vessel left with an out-of-limit aft trim, reducing its reserve of stability.',
        'Capsize took only minutes, leaving no time for distress alerting or abandonment, and flooding then progressed quickly.'
      ],
      lessons_learned: [
        'A routine-looking departure ran into a sudden squall line and wake low; winds reached about 80 to 99 knots and SEACOR POWER capsized within minutes, before any effective abandonment was possible. Fast-onset convective weather can outrun the forecast, so offshore transits need in-voyage weather re-checks and pre-agreed trigger actions - the window to act can close in minutes.',
        'Liftboat stability and operating limits must be realistic and immediately usable on the bridge, including trim and wind-wave combinations.',
        'Fast-capsize scenarios need simple distress alerting and personal survival readiness that work in seconds, not minutes.',
        'Severe-weather warnings must reach the bridge in time to act, with pre-agreed trigger actions.'
      ],
      actions: [
        'The USCG Marine Board recommended revising liftboat stability rules and cutting interim operating limits, with clearer guidance for masters.',
        'It called for better severe-weather warning and observation pipelines and bridge-ready forecasts.',
        'It recommended stronger distress-alerting and rescue-coordination tools and a review of immersion-suit and survival-equipment provisions.'
      ],
      metocean: {
        wind_speed: 'USCG MBI conclusions cite winds exceeding 80 knots with gusts up to 99 knots (10 m height) in the incident area',
        wave_height_hs: 'Operational testimony in response phase reported roughly 10-12 ft seas with occasional ~15 ft seas; pre-capsize local seas were rapidly worsening under squall conditions',
        notes: 'The MBI report states that a line of severe weather developed into a wake low around 1400, then accelerated south. NWS warnings described severe thunderstorms; SEACOR POWER encountered two local squalls at 1519 and 1532. Use severe convective storm with wake low as the event classification, and squall for the immediate local impacts.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for casualty count, chronology, causal factors and recommendation set because these come directly from the U.S. Coast Guard Marine Board of Investigation report. Coordinates are approximate in this record presentation and should be treated as such unless replaced with formally published position values used by the board.',
      sources: [
        'U.S. Coast Guard Marine Board of Investigation report for SEACOR POWER (EXTERNAL, primary)',
        'USCG District Eight / SAR-related appendices and referenced operational records as compiled in the MBI report (EXTERNAL)'
      ],
      references: [
        { title: 'Report of Investigation: Capsize of Liftboat SEACOR POWER (13 April 2021)', type: 'Official marine board investigation report', publisher: 'United States Coast Guard', year: 2022, url: 'https://www.dco.uscg.mil/OCSNCOE/Accidents-Investigations/Seacor-Power/', file: 'background files/USCG-ROI(MBI)-Seacor-Power.pdf' },
        { title: 'Report of Investigation (Direct PDF)', type: 'Official marine board investigation report (PDF)', publisher: 'United States Coast Guard', year: 2022, url: 'https://www.dco.uscg.mil/Portals/9/OCSNCOE/Casualty-Information/Seacor-Power/USCG-ROI(MBI)-Seacor-Power.pdf?ver=z47ZCi9y3qynWU0uekywVw%253d%253d', file: 'background files/USCG-ROI(MBI)-Seacor-Power.pdf' }
      ]
    },

    /* ──────────────────────────────────────────────────
       69. Ocean GreatWhite LMRP/Riser Separation - West of Shetland - 2024
    ─────────────────────────────────────────────────── */
    {
      id: 'ocean-greatwhite-lmrp-separation-2024',
      name: 'Ocean GreatWhite LMRP and Riser Separation',
      year: 2024,
      date: '1 February 2024',
      location: 'Approximately 200 km west of the Shetland Islands, North Atlantic, United Kingdom sector',
      lat: 60.3,
      lng: -4.9,
      location_precision: 'approximate',
      region: 'Europe',
      platform_type: '6th-generation harsh-environment semi-submersible drilling rig',
      operator: 'Diamond Offshore Drilling, Inc. (rig owner/operator) on contract to bp',
      weather_event_type: 'storm',
      classification: 'drilling',
      weather_event: 'Harsh-weather standby conditions during offshore drilling operations',
      fatalities: 0,
      image: {
        src: 'images/ocean-greatwhite-2024-google-thumb.jpg',
        alt: 'Ocean GreatWhite semi-submersible drilling rig photographed in open-water conditions.',
        caption: 'User-preferred candidate image for the Ocean GreatWhite 1 February 2024 LMRP/riser separation incident west of Shetland.',
        credit: 'Google-hosted cached thumbnail (originating photographer/publication unresolved; permission required).'
      },
      infrastructure_impact: 'LMRP and deployed riser string unintentionally separated and dropped to the seabed; incident-driven downtime and recovery/replacement operations',
      summary: 'On 1 February 2024, while on contract to bp about 200 km west of Shetland, the Ocean GreatWhite reported an equipment incident during harsh-weather standby. After the LMRP had been disconnected from the BOP on the well, the LMRP and deployed riser string unintentionally separated at the slip joint tensioner ring and dropped to the seabed. Diamond Offshore reported no injuries, no known environmental impact, and a secure well with BOP in place.',
      executive_summary: 'The Ocean GreatWhite was not drilling when, during harsh-weather standby west of Shetland, its disconnected LMRP and deployed riser unintentionally separated at the slip joint tensioner ring and fell to the seabed. Company SEC disclosure states no injuries, no known pollution, no reported seabed infrastructure damage, and ongoing investigation/recovery actions with customer and authorities.',
      what_happened: 'Diamond Offshore\'s SEC 8-K (filed 5 February 2024) states that on 1 February 2024 the Ocean GreatWhite was located about 200 km west of the Shetland Islands and waiting on harsh weather. The rig had disconnected the lower marine riser package (LMRP) from the rig\'s BOP on the well.\n\n' +
        'The same filing states that the LMRP and deployed riser string then unintentionally separated from the rig at the slip joint tensioner ring and dropped to the seabed. The company reported the unit was not carrying out drilling activity at the time.\n\n' +
        'Diamond Offshore disclosed that no employees were injured, the rig maintained structural integrity, the well remained secure with BOP in place, and there were no known environmental impacts. The company stated it was investigating cause, coordinating with its customer and local authorities, and planning recovery plus replacement of affected equipment.',
      what_went_wrong: [
        'A disconnected LMRP and deployed riser unintentionally separated at the slip joint tensioner ring and were lost to the seabed.',
        'The publicly available primary disclosure does not yet provide a full component-level technical root-cause analysis of the separation mechanism.',
        'Operational resilience for harsh-weather standby and suspended-drilling states remains sensitive to equipment-integrity boundaries between disconnect status and recovery sequence execution.'
      ],
      lessons_learned: [
        'Standby-in-weather states require explicit integrity assurance and contingency controls for disconnected well-control/riser assemblies.',
        'Incident reporting should preserve clear distinction between immediate consequence status (injury, pollution, well security) and unresolved causal mechanism pending formal investigation outcomes.',
        'Recovery planning and replacement readiness for critical subsea/drilling components are essential to reduce outage duration after equipment-loss events.'
      ],
      actions: [
        'Diamond Offshore initiated an incident investigation to establish the separation cause and reported cooperation with bp and local authorities.',
        'The operator announced plans to recover the dropped equipment and replace missing or damaged components.',
        'Follow-up financial and downtime impacts were to be updated as recovery/repair scope became clearer in subsequent disclosures.'
      ],
      metocean: {
        weather_context: 'Company disclosure describes harsh-weather standby conditions at the time of the incident',
        wind_speed: 'Not publicly quantified in the primary SEC filing reviewed in this pass',
        wave_height_hs: 'Not publicly quantified in the primary SEC filing reviewed in this pass',
        notes: 'No regulator-published technical metocean reconstruction was identified in this pass; treat weather forcing details as incomplete pending formal investigation releases.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for date, location context (~200 km west of Shetland), immediate operational status and stated consequences because these come directly from Diamond Offshore\'s SEC filing. Moderate for detailed metocean characterization and precise engineering root cause, which were not publicly detailed in primary documents reviewed here.',
      sources: [
        'Diamond Offshore SEC Form 8-K filing (EXTERNAL, primary)',
        'Bloomberg-carried reporting (EXTERNAL, secondary)',
        'Industry media summaries/republications (EXTERNAL, secondary)'
      ],
      references: [
        { title: 'Current Report (Form 8-K), filed 5 February 2024', type: 'Regulatory company filing', publisher: 'United States Securities and Exchange Commission', year: 2024, url: 'https://www.sec.gov/Archives/edgar/data/949039/000119312524024116/d768599d8k.htm' },
        { title: 'Diamond Offshore Says It\'s Working to Recover Dropped Equipment', type: 'News report', publisher: 'Yahoo Finance / Bloomberg', year: 2024, url: 'https://finance.yahoo.com/news/diamond-offshore-says-working-recover-135423596.html' },
        { title: 'Diamond Offshore Semi-Submersible Ocean GreatWhite Loses Lower Marine Riser Package', type: 'News report', publisher: 'gCaptain', year: 2024, url: 'https://gcaptain.com/diamond-offshore-reports-equipment-failure-involving-ocean-greatwhite-semi-submersible/' }
      ]
    },

    /* ──────────────────────────────────────────────────
       70. Papaa-305 / Varapradha Disaster - Cyclone Tauktae - 2021
    ─────────────────────────────────────────────────── */
    {
      id: 'ongc-papaa-305-varapradha-cyclone-tauktae-2021',
      name: 'ONGC Offshore - Papaa-305 and Varapradha Disaster During Cyclone Tauktae',
      year: 2021,
      date: '17 May 2021',
      location: 'Mumbai High field / Heera area, approximately 60-70 km west-northwest of Mumbai, Arabian Sea, India',
      lat: 19.41667,
      lng: 71.33333,
      location_precision: 'approximate',
      region: 'Asia',
      platform_type: 'Accommodation barge and tug (offshore support vessels)',
      operator: 'ONGC (asset owner/operator); M/s Afcons (contractor consortium lead)',
      weather_event_type: 'cyclone',
      classification: 'maritime',
      weather_event: 'Cyclone Tauktae (Arabian Sea, 16-17 May 2021), severe offshore weather with escalating sea-state and wind conditions',
      storm_sid: '2021133N10071',
      storm_name: 'TAUKTAE',
      fatalities: 86,
      persons_on_board: 274,
      survivors: 188,
      image: {
        src: 'images/ongc-papaa-305-2021-navy-gal-constructor-airlift.jpg',
        alt: 'Indian Navy helicopters airlifting workers from Gal Constructor during the Cyclone Tauktae emergency.',
        caption: 'Indian Navy helicopters airlifting workers from Gal Constructor during the Cyclone Tauktae emergency. This is rescue context for the wider Papaa-305/Varapradha disaster, not Papaa-305 itself.',
        credit: 'Indian Navy photograph published by Scroll.in, "The decisions that led to India\'s worst offshore disaster" (2021). Original photographer and reuse licence unresolved; permission required.'
      },
      infrastructure_impact: 'Loss of Papaa-305 and Varapradha with mass-casualty offshore disaster, multi-agency rescue and prolonged compensation/recovery processes',
      summary: 'The non-propelled accommodation barge Papaa-305, with 261 people aboard, stayed near ONGC\'s Heera field off Mumbai as Cyclone Tauktae rapidly intensified on 17 May 2021. It lost all its anchors, drifted into a wellhead platform and sank; with no usable life rafts and no immersion suits, 75 of those aboard died. The anchor-handling tug Varapradha was lost separately in the same cyclone with 11 more deaths - 86 in all.',
      executive_summary: 'The 17 May 2021 loss was the end of a preventable decision chain, not simply an encounter with an exceptional cyclone. Forecasts changed as Tauktae intensified rapidly, but Papaa-305 remained in the field and Varapradha did not reach protected shelter. Once anchors failed, the non-propelled barge had no independent means of escape; weather initially kept rescuers from coming alongside. The Seventeenth Report of the Parliamentary Standing Committee recorded 274 people aboard, 188 survivors and 86 fatalities across the two vessels. It called for accountability and stronger weather, regulatory, inspection and training controls after the HLC found that none of Papaa-305\'s 36 life rafts could be used.',
      what_happened: 'Papaa-305 was a non-propelled accommodation barge supporting a life-extension project in ONGC\'s Heera field. The India Meteorological Department warned of the developing cyclone from 11 May, and the barge was expected to move to a sheltered outer anchorage. It instead stayed at a position its master judged safe - a decision ONGC and the contractor later disputed.\n\nCyclone Tauktae then intensified faster than forecast and shifted east, passing about 39 nautical miles from Heera with 70-85 knot winds in the field - far above the 40 knots the barge\'s forecasts had indicated. The window to move clear had closed.\n\nAt 07:14 on 17 May the barge reported all anchors lost and began drifting toward the HS wellhead platform, which it struck and started flooding. Navy and ONGC vessels were sent, but the weather made an alongside rescue impossible; around 18:00 Papaa-305 developed a list and by 19:05 it sank, leaving hundreds of people in the sea.\n\nThrough the night 186 of the 261 aboard were pulled from the water, but 75 died - and none of the barge\'s 36 life rafts could be used because of quality and code defects, with no immersion suits carried under flag-state exemptions. In the same cyclone the anchor-handling tug Varapradha sank with the loss of 11 of its 13 crew.',
      what_went_wrong: [
        'Papaa-305 stayed in the Heera field after it was expected to move clear; the decision did not account for how far and fast the cyclone\'s track and intensity could change.',
        'The weather-decision system kept too little margin for a rapidly intensifying, east-shifting cyclone, and no senior ONGC official took command of the unfolding emergency.',
        'None of the barge\'s 36 life rafts were usable and no immersion suits were carried - flag-state exemptions and third-party certification left a lifesaving system that failed when it was needed.',
        'Safety-training assurance was unreliable: of 192 sea-survival certificates checked, 80 were not authentic, so paper compliance did not mean a trained workforce.',
        'Large accommodation barges carrying hundreds of people sat in an outdated, fragmented regulatory system, with authority divided across operator, contractor, owner and master.'
      ],
      lessons_learned: [
        'Move non-propelled, high-POB units early enough to complete anchor recovery and reach genuinely protected shelter before forecast uncertainty closes the route.',
        'Use conservative, location-specific decision thresholds, and treat basin-track and intensity uncertainty as an operational hazard, not a forecast footnote.',
        'Name one incident commander with authority across operator and contractor, and record who owns each evacuation and shelter decision.',
        'Treat survival craft and training as functional barriers to be tested, not certificates to be filed; remove exemptions that leave high-POB units without a credible means to abandon.'
      ],
      actions: [
        'The 2022 Parliamentary Standing Committee treated the loss as a systems failure and called for investigation of ONGC responsibility at every level.',
        'It recommended restoring direct, location-specific IMD forecasting support and adding field instruments to cyclone decision-making.',
        'It called for ONGC accountability in vessel inspection, action against the agencies that certified the life rafts, and review of flag-state exemptions for lifeboats and immersion suits.',
        'It recommended stronger regulation of non-propelled accommodation barges and time-bound implementation of the high-level committee recommendations.'
      ],
      metocean: {
        weather_context: 'IMD classified Tauktae as an Extremely Severe Cyclonic Storm. It rapidly intensified while moving north along India\'s west coast and passed east of earlier forecast tracks during the critical offshore decision window.',
        wind_speed: 'IMD basin-scale maximum sustained wind increased from 65 knots at 05:30 IST on 16 May to 100 knots at 05:30 on 17 May, peaking at 100 knots (180-190 km/h), gusting to 210 km/h. Evidence to Parliament separately records 70-85 knots at Heera versus 40 knots forecast by Skymet and StormGeo.',
        wave_height_hs: 'No vessel-position significant wave height was verified in the official sources reviewed.',
        notes: 'Do not substitute IMD\'s cyclone-centre intensity for conditions at either casualty. The Heera value is attributed to evidence recorded by the parliamentary report; Varapradha sank much nearer Mumbai at 19°00.21\'N, 72°30.83\'E.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the 07:14-19:05 Papaa-305 chronology, staged rescue totals, vessel-wise casualty table, Varapradha wreck position, Committee recommendations and IMD cyclone intensity because they are taken from official reports. The Heera 70-85-knot value is evidence reproduced by Parliament, not an independently reviewed instrument record. The pre-loss decision narrative and detailed survivor experience are attributed to Scroll.in and Article 14; the unpublished HLC is represented only through findings quoted by Parliament or reported from an RTI-obtained copy. The map marker is an approximate Heera-field presentation point and cannot also depict Varapradha\'s separate wreck location.',
      sources: [
        'Seventeenth Report, Department-Related Parliamentary Standing Committee on Petroleum and Natural Gas (Lok Sabha), April 2022 (EXTERNAL, primary)',
        'IMD / RSMC New Delhi preliminary report and cyclone bulletins for ESCS Tauktae (EXTERNAL, meteorological primary)',
        'Article-14 long-form investigation citing official inquiry material (EXTERNAL, secondary)',
        'Times of India explainer (20 May 2021) on barge operations and decision context (EXTERNAL, contemporaneous media)',
        'Riviera Maritime Media report (19 May 2021) with Indian Coast Guard rescue timeline context (EXTERNAL, contemporaneous media)'
      ],
      references: [
        { title: 'Seventeenth Report (Petroleum and Natural Gas), Lok Sabha - PDF', type: 'Parliamentary committee report', publisher: 'Lok Sabha Secretariat', year: 2022, file: 'background files/17_Petroleum_And_Natural_Gas_13_Parliamentary_Standing_Committee.pdf', url: 'https://eparlib.nic.in/bitstream/123456789/845761/1/17_Petroleum_And_Natural_Gas_13.pdf' },
        { title: 'Preliminary Report of Extremely Severe Cyclonic Storm Tauktae (14-19 May 2021)', type: 'Official cyclone report', publisher: 'India Meteorological Department / RSMC New Delhi', year: 2021, url: 'https://rsmcnewdelhi.imd.gov.in/uploads/report/26/26_e0cc1a_Preliminary%20Report%20on%20ESCS%20TAUKTAE-19july.pdf' },
        { title: 'The decisions that led to India\'s worst offshore disaster', type: 'Investigative news report and survivor interviews', publisher: 'Scroll.in', year: 2021, url: 'https://scroll.in/article/1001358/the-decisions-that-led-to-indias-worst-offshore-disaster' },
        { title: '86 Died In A Man-Made Disaster... (Cyclone Tauktae investigation)', type: 'Investigative news report', publisher: 'Article-14', year: 2024, url: 'https://article-14.com/post/86-died-in-a-man-made-disaster-but-3-years-later-no-repercussions-for-india-s-largest-public-sector-oil-company--66b981ba87ba5' },
        { title: 'Cyclone Tauktae: Papaa 305 accident puts focus on sea barges', type: 'News explainer', publisher: 'Times of India', year: 2021, url: 'https://timesofindia.indiatimes.com/india/papaa-305-accident-puts-focus-on-sea-barges/articleshow/82799766.cms' },
        { title: 'Cyclone crashes through Indian offshore sector, 74 seafarers missing', type: 'Maritime news report', publisher: 'Riviera Maritime Media', year: 2021, url: 'https://www.rivieramm.com/news-content-hub/cyclone-crashes-through-indian-offshore-sector-with-74-seafarers-missing-65583' }
      ]
    },

    /* ----------------------------------------------------------------------
       71. SS El Faro - Hurricane Joaquin - 2015
    ---------------------------------------------------------------------- */
    {
      id: 'el-faro-hurricane-joaquin-2015',
      name: 'SS El Faro Sinking During Hurricane Joaquin',
      year: 2015,
      date: '1 October 2015',
      location: 'Atlantic Ocean, about 40 nm northeast of Acklins and Crooked Island, Bahama',
      lat: 23.38125,
      lng: -73.9111,
      location_precision: 'approximate',
      region: 'North America',
      platform_type: '790-foot US-flagged cargo ship',
      operator: 'TOTE Maritime Puerto Rico (owner); TOTE Services, Inc. (operator)',
      weather_event_type: 'cyclone',
      classification: 'maritime',
      storm_sid: '2015270N27291',
      storm_name: 'JOAQUIN',
      weather_event: 'Hurricane Joaquin - Category 3 with 110-knot winds at the sinking; upgraded to Category 4 about 20 minutes later',
      fatalities: 33,
      persons_on_board: 33,
      survivors: 0,
      image: {
        src: 'images/el-faro-2012-ntsb-figure-3.jpeg',
        alt: 'SS El Faro at sea loaded with containers, viewed from the stern.',
        caption: 'SS El Faro at sea loaded with containers before the casualty. Photograph taken 12 March 2012 at Port Everglades, Florida.',
        credit: 'Captain William Hoey via NTSB Marine Accident Report MAR-17/01, Figure 3. Rights not independently confirmed; permission required.'
      },
      infrastructure_impact: 'Total loss of vessel; estimated damage of $36 million',
      summary: 'SS El Faro sank in the Atlantic Ocean near the Bahamas on 1 October 2015 while Hurricane Joaquin affected the vessel route. All 33 people aboard perished. The NTSB found that insufficient action to avoid the hurricane, failure to use the most current weather information, and the late decision to muster the crew were the probable cause of the sinking and loss of life.',
      executive_summary: 'On 1 October 2015, the 790-foot US-flagged cargo ship SS El Faro foundered and sank about 40 nautical miles northeast of Acklins and Crooked Island, Bahamas, during Hurricane Joaquin. Joaquin had 110-knot winds and was classified Category 3 at the time of the sinking; the National Hurricane Center upgraded it to Category 4 about 20 minutes later. All 33 people aboard perished. NTSB identified insufficient action to avoid the hurricane, reliance on noncurrent weather information, and the late decision to muster the crew as the probable cause. Flooding, propulsion loss after a sustained list, downflooding, inadequate company oversight, and unsuitable survival craft contributed to the loss.',
      what_happened: 'El Faro was on its regular run from Jacksonville to San Juan when Hurricane Joaquin moved across its route near the Bahamas. It sailed on the evening of 29 September with 33 people aboard as the storm was upgraded from a watch to a warning, moving directly across the broad route to San Juan.\n\nThe captain asked about using the sheltered Old Bahama Channel, but not for the voyage under way, and the ship continued toward the storm. The bridge worked from weather products that disagreed on Joaquin\'s position - one delayed report placed it northwest, a newer one placed the centre directly east - and the ship\'s anemometer was not working, removing an independent check.\n\nBy the early hours of 1 October El Faro was inside the dangerous weather with a sustained list. Flooding entered a cargo hold through an undetected open watertight scuttle and damaged piping, and low lube-oil pressure from the list caused loss of propulsion at about 0616 - leaving the ship unable to manoeuvre away from Joaquin.\n\nThe crew were ordered to muster at 0728, but the NTSB found the decision came too late; unsecured ventilation closures let downflooding continue and there was no damage-control plan to make the danger clear. El Faro sank shortly afterward. All 33 aboard were lost.',
      what_went_wrong: [
        'The vessel did not take sufficient action to avoid Hurricane Joaquin, and the final course brought it close to the hurricane eye.',
        'The bridge team did not use the most current weather information, and a non-working anemometer removed an independent check on the ship\'s position relative to the storm.',
        'An undetected open watertight scuttle and damaged seawater piping allowed flooding in a cargo hold; a sustained list then caused loss of propulsion through low main-engine lube-oil pressure.',
        'Unsecured ventilation closures allowed further downflooding, and there was no approved damage-control plan for recognising and managing the severity of the condition.',
        'The late muster and the lack of survival craft suitable for the conditions left the crew with little chance once the vessel was lost.',
      ],
      lessons_learned: [
        'El Faro sailed toward a strengthening hurricane on disagreeing forecasts with a dead anemometer, lost propulsion to flooding and a list, and sank with all 33 aboard. Set a hard weather-avoidance line and turn early; when weather sources disagree, treat the disagreement itself as the hazard.',
        'A dead anemometer is not a minor defect in hurricane season - restore it or impose a more conservative operating limit.',
        'Treat every watertight opening, seawater line and ventilation closure as a monitored barrier; one unverified opening can start progressive flooding.',
        'Muster before the ship is in extremis - once propulsion, stability and weather fail together, the abandonment window can vanish in minutes.',
      ],
      actions: [
        'Set and audit a no-go weather-routing trigger: if the forecast cone intersects the route, reroute before the storm closes the escape path.',
        'Make the shore office track every vessel against the latest storm centre and require a documented challenge-and-response review for threatened voyages.',
        'Require a working anemometer, barometer and barograph before departure into a tropical-cyclone area, recorded as voyage-critical defects.',
        'Put downflooding points, closure status and loss-of-propulsion actions into the approved damage-control plan, drill them, and move the muster decision ahead of the casualty curve.',
      ],
      metocean: {
        weather_context: 'Hurricane Joaquin affected the Bahamas and the vessel route during the casualty window.',
        wind_speed: '110 knots at the time of sinking according to the NHC poststorm report; upgraded to Category 4 with 115-knot winds about 20 minutes later.',
        wave_height_hs: 'Not stated as a vessel-position measurement in the NTSB executive summary; no exact significant-wave value is presented here.',
        notes: 'The NTSB report states that Joaquin was Category 3 with 110-knot winds at the sinking and that the storm was upgraded to Category 4 approximately 20 minutes later. Do not describe the sinking itself as occurring after the Category 4 upgrade without qualification.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for date, vessel identity, casualty total, wreck position, causal findings and contributing factors because these are documented in NTSB Marine Accident Report MAR-17/01. High for the storm-intensity timing as reported by NTSB from the NHC poststorm report. Moderate for the map presentation because the NTSB describes the casualty area and wreck/debris positions separately; the plotted coordinate is the reported wreck location and is marked approximate. No image is selected because no rights-cleared asset was established in this research pass.',
      sources: [
        'National Transportation Safety Board Marine Accident Report MAR-17/01 (EXTERNAL, primary)',
        'National Hurricane Center Tropical Cyclone Report: Hurricane Joaquin (EXTERNAL, meteorological primary)'
      ],
      references: [
        { title: 'Sinking of US Cargo Vessel El Faro in the Atlantic Ocean, October 1, 2015 (MAR-17/01)', type: 'Official marine accident report', publisher: 'National Transportation Safety Board', year: 2017, url: 'https://www.ntsb.gov/investigations/AccidentReports/Reports/MAR1701.pdf' },
        { title: 'Tropical Cyclone Report: Hurricane Joaquin (AL112015)', type: 'Official hurricane report', publisher: 'National Hurricane Center', year: 2016, url: 'https://www.nhc.noaa.gov/data/tcr/AL112015_Joaquin.pdf' }
      ]
    },

    /* ----------------------------------------------------------------------
       72. Mars TLP Drilling Rig Topple - Hurricane Katrina - 2005
    ---------------------------------------------------------------------- */
    {
      id: 'mars-tlp-drilling-rig-topple-katrina-2005',
      name: 'Mars TLP Drilling Rig Topple During Hurricane Katrina',
      year: 2005,
      date: '29 August 2005',
      location: 'Mars field, Mississippi Canyon blocks, Gulf of Mexico, United States',
      lat: 28.1695,
      lng: -89.2229,
      location_precision: 'approximate',
      region: 'North America',
      platform_type: 'Tension-leg production platform with drilling rig',
      operator: 'Shell Exploration & Production Company (operator); BP (joint-venture partner)',
      weather_event_type: 'cyclone',
      classification: 'design',
      storm_sid: '2005236N23285',
      storm_name: 'KATRINA',
      weather_event: 'Hurricane Katrina - approximately four hours in the eyewall, with about 80-foot waves and gusts above 200 mph',
      fatalities: 0,
      persons_on_board: 0,
      survivors: 0,
      image: {
        src: 'images/hurricane-katrina-2005-mars-platform-damage.jpg',
        alt: 'Mars tension-leg platform after Hurricane Katrina with its drilling derrick toppled across the topsides.',
        caption: 'Mars TLP after Hurricane Katrina, showing the toppled drilling rig across the platform topsides.',
        credit: 'Photographer unresolved; sourced via English Wikipedia. Copyrighted and unlicensed; reference use only.'
      },
      infrastructure_impact: 'The drilling rig support clamps failed under hurricane loading and the rig toppled across the platform deck; major topsides and export-pipeline repairs followed, while the TLP structure and wells remained serviceable.',
      summary: 'As Hurricane Katrina passed over the Mars TLP, the platform\'s drilling rig was damaged when the clamps holding it were overtaxed by extreme hurricane wind loading. The rig structure failed and toppled onto the deck, while the TLP structure and wells remained serviceable. Shell and its contractors removed the damaged rig in sections, repaired the platform and deepwater export pipelines, and returned Mars to production ahead of schedule in May 2006.',
      executive_summary: 'Hurricane Katrina severely damaged the Mars TLP drilling rig but did not disable the platform\'s hull or wells. A technical recovery case study attributes the topple to the rig-holding clamps being overtaxed during four hours of extreme hurricane wind loading. The damaged structure was removed with derrick barges, the clamps and other systems were upgraded, and Mars returned to production ahead of schedule.',
      what_happened: 'Mars is a tension-leg production platform in the deepwater Gulf of Mexico, designed to produce oil and gas from a water depth of about 3,000 feet. It was evacuated before Hurricane Katrina reached the central Gulf of Mexico, leaving no offshore workforce exposed during the storm. The TLP spent approximately four hours in Katrina\'s eyewall. Shell\'s later account described waves around 80 feet and wind gusts exceeding 200 mph at the platform.\n\n' +
        'During Katrina, the Mars hull, tension-leg system and wells remained serviceable, but the drilling rig and major elements of the production topsides were heavily damaged. The technical case study states that the massive clamps holding the rig were overtaxed by the extreme hurricane wind loading; the rig structure failed and toppled onto the deck.\n\n' +
        'Recovery was itself a major offshore operation. Shell used derrick barges to lift the toppled rig - reported at about 670 tons - off the deck in two pieces and transport it ashore for repair, supported by an icebreaker, a deepwater flotel and remotely operated subsea equipment. Repairs also included the export pipelines in approximately 2,700-3,000 feet of water. Mars returned to production in May 2006; the drilling rig was put back on in March 2007. The recovery and reconstruction campaign passed one million work hours without a recordable injury.\n\n' +
        'The recovery changed the hardware and the operating system around it. The technical case study reports replacement clamps rated at 2 million psi, four times the strength of the previous clamps, improved storm-monitoring communications, more evacuation helicopters and ships, additional spare parts, a study of alternative oil export routes, and participation in an industry effort to develop more robust offshore drilling-rig mooring systems.',
      what_went_wrong: [
        'The rig-holding clamps were not strong enough for the extreme hurricane wind loading experienced during Katrina; the technical case study identifies clamp overloading as the immediate failure explanation.',
        'The public case study does not publish a full independent calculation of the clamp failure, load path, fatigue history or dynamic rig-platform interaction, so those mechanisms remain unresolved.',
        'The damaged rig became a large, tangled obstruction on the deck, turning recovery into a complex heavy-lift and worksite-management problem.',
        'Damage was not limited to the visible rig: production equipment and deepwater export pipelines also required repair before the asset could return to normal performance.'
      ],
      lessons_learned: [
        'Hurricane Katrina put the evacuated Mars TLP through about four hours in the eyewall; the hull, tendons and wells survived, but the clamps holding the roughly 670-ton drilling rig were overtaxed and the rig toppled across the deck. Surviving the platform does not mean the mounted rig is secure - assess the rig and its restraints directly against extreme hurricane loading, and design recovery into the project from the start.',
        'Design clamps and restraints for extreme hurricane wind loading and dynamic motion, with credible margins beyond routine operating loads.',
        'Design recovery into the original project: define lift points, removal sequences, temporary works and safe access for a toppled heavy structure.',
        'Plan post-storm restart around the whole production system, including subsea export pipelines and specialist heavy-lift capacity.',
      ],
      actions: [
        'Verify drilling-rig clamps and restraint load paths against current hurricane wind criteria and credible dynamic load cases.',
        'Keep a platform-specific hurricane damage and recovery plan with engineered lift points, removal paths and specialist vessel options.',
        'Inspect and reassess topsides equipment, risers and export pipelines after extreme storms before restarting production.',
        'Pre-contract heavy-lift, subsea-repair and fabrication support, and use post-event equipment-failure evidence to update design and survival criteria.',
      ],
      metocean: {
        weather_context: 'Mars was reported to have spent approximately four hours in Hurricane Katrina\'s eyewall.',
        wind_speed: 'Gusts exceeding 200 mph reported in Shell\'s post-storm Mars recovery account; not a platform anemometer record reproduced in the reviewed source.',
        wave_height_hs: 'Approximately 80-foot waves reported in Shell\'s post-storm Mars recovery account; not presented as a formal significant-wave-height measurement.',
        notes: 'These are storm and post-storm account values for the Mars area, not a complete platform-point metocean instrumentation set. The exact failure mechanism of the drilling rig remains unresolved in the public sources reviewed.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the toppled-rig outcome, clamp-overload explanation, recovery method, hardware upgrades and restart chronology because these are documented in the DEKRA technical case study and Shell/industry recovery accounts. Moderate for exact local wind/wave values and the detailed structural sequence: the case study is an operator recovery/safety account rather than a full independent failure investigation, and its storm values are not a complete platform instrumentation record.',
      sources: [
        'Shell Exploration & Production Company Mars TLP recovery and production update (EXTERNAL, operator account)',
        'Bowen, Duplantis and Knoll, Mars TLP recovery project presentation (EXTERNAL, conference record indexed by U.S. Department of Energy OSTI)',
        'BSEE/MMS Gulf of Mexico hurricane damage statistics (EXTERNAL, regulatory context)'
      ],
      references: [
        { title: 'Mars TLP production exceeding pre-Katrina levels', type: 'Industry report reproducing Shell recovery account', publisher: 'Offshore Magazine', year: 2006, url: 'https://www.offshore-mag.com/production/article/16791983/mars-tlp-production-exceeding-pre-katrina-levels' },
        { title: 'Mars TLP recovery project: recovery and repair of offshore exploration and production facilities', type: 'Conference presentation record', publisher: 'U.S. Department of Energy OSTI', year: 2007, url: 'https://www.osti.gov/etdeweb/biblio/20961585' },
        { title: 'Safety in Katrina\'s Wake - Shell Mars Platform Case Study', type: 'Technical recovery and safety case study', publisher: 'DEKRA North America', year: 2018, url: 'https://dekraprod-media.e-spirit.cloud/e4a059f3-faa3-42d3-9b6f-96599ba3c1ff/media/case-study-shell-mars-program.pdf', notes: 'States that storm loading overtaxed the rig-holding clamps, causing the drilling rig structure to fail and topple; documents replacement clamp strength and recovery controls.' },
        { title: 'Platform recovery', type: 'Project account', publisher: 'Grand Isle Shipyard', year: 2024, url: 'https://www.gisy.com/platform-recovery/' },
        { title: 'Mars oil platform', type: 'Secondary field and location reference', publisher: 'Wikipedia', year: 2024, url: 'https://en.wikipedia.org/wiki/Mars_(oil_platform)' }
      ]
    },

    /* ----------------------------------------------------------------------
       74. Gryphon Alpha FPSO - Multiple Mooring-Line Failure - 2011
    ---------------------------------------------------------------------- */
    {
      id: 'gryphon-alpha-mooring-failure-2011',
      name: 'Gryphon Alpha FPSO - Multiple Mooring-Line Failure',
      year: 2011,
      date: '4 February 2011',
      location: 'Gryphon field, UK North Sea, Block 9/18b, approximately 175-201 miles northeast of Aberdeen; water depth 112 m',
      lat: 59.3543,
      lng: -1.5487,
      location_precision: 'Field coordinates supplied for review: 59.3543 N, 1.5487 W. Public sources place the field approximately 175-201 miles northeast of Aberdeen.',
      region: 'Europe',
      platform_type: 'Floating production, storage and offloading vessel (FPSO)',
      operator: 'Maersk Oil North Sea UK Ltd.',
      weather_event_type: 'storm',
      classification: 'maritime',
      weather_event: 'Severe North Sea storm - 53-knot winds, 9 m waves and approximately 12-degree roll',
      fatalities: 0,
      injuries: 2,
      persons_on_board: 114,
      survivors: 114,
      image: {
        src: 'images/gryphon-alpha-2011-fpso.jpg',
        alt: 'Aerial view of the Gryphon Alpha FPSO underway at sea.',
        caption: 'Gryphon Alpha FPSO at sea. Context image; not a photograph of the February 2011 storm or mooring failure.',
        credit: 'Energy Voice image; source URL: https://wpcluster.dctdigital.com/energyvoice/wp-content/uploads/sites/4/2013/09/gryphon.jpg. Asset-specific licence and original photographer not confirmed; permission required for publication.'
      },
      infrastructure_impact: 'Major - partial loss of station damaged subsea risers, flowlines, structures and associated subsea infrastructure; FPSO required dry-dock repairs and mooring replacement.',
      environmental_impact: 'No gas detected after shutdown in the immediate response; subsea infrastructure was damaged.',
      summary: 'During a severe North Sea storm, one of Gryphon Alpha\'s ten mooring lines failed. The FPSO lost heading control and turned partly beam-on to the weather, after which three further lines failed. The vessel moved partially off station and damaged subsea architecture. Production was shut down, 74 non-essential personnel were evacuated, and the vessel was later dry-docked for repairs and replacement of the mooring and subsea systems.',
      executive_summary: 'On 4 February 2011, the Maersk Oil Gryphon Alpha FPSO experienced 53-knot winds and 9 m waves. One of its ten mooring lines failed, the vessel lost heading control and turned partly beam-on to the weather, and three more lines then failed. The partial station excursion damaged subsea infrastructure. Thrusters and later tug support helped control the vessel; 74 of 114 people onboard were evacuated and two suffered slight injuries. The original mooring system was subsequently recovered for forensic inspection and replaced during a major reinstatement project.',
      what_happened: 'On 4 February 2011 the Gryphon Alpha FPSO was riding out a severe North Sea storm (53-knot winds, 9 m waves, about 12-degree roll) at the Gryphon field, held by ten chain moorings through its turret with five thrusters for heading control.\n\nOne mooring line parted. The FPSO lost heading control and swung partly beam-on to the weather, loading the remaining lines, and three more then failed. The vessel moved partially off station and its movement damaged surrounding subsea risers, flowlines and structures. Production was shut down and thrusters were used to regain heading.\n\nOf 114 people aboard, 74 non-essential crew were evacuated by helicopter while about 40 essential staff stayed to stabilise the vessel; two were slightly injured and three tugs assisted. Gryphon Alpha was later dry-docked in Rotterdam and the damaged subsea infrastructure and the original mooring system were recovered and replaced. The public technical paper does not identify why the original lines failed.',
      what_went_wrong: [
        'A first mooring-line failure caused loss of heading control and exposed the remaining moorings to increased weather loading when the FPSO turned partly beam-on.',
        'The multiple-line failure allowed a partial station excursion within a congested subsea architecture, damaging risers, flowlines, structures and associated subsea equipment.',
        'The public OTC paper does not identify the metallurgical, fatigue, corrosion, manufacturing, inspection or design root cause of the original line failures; it refers readers to a separate source for further failure information.',
        'The unexpected failure required a large reinstatement project to be mobilised rapidly, including recovery and forensic inspection of the original mooring system.'
      ],
      lessons_learned: [
        'One parted mooring line let the Gryphon Alpha FPSO swing beam-on to a North Sea storm, and three more lines then failed - the vessel drove partially off station and tore up its own subsea risers and flowlines. Mooring and station-keeping design must assume sequential, multiple-line failure, including the heading swing after the first line goes, and the subsea layout must survive the degraded-mooring excursion.',
        'Subsea layout and riser/flowline design must account for the degraded-mooring excursion envelope and possible chain contact.',
        'Critical mooring components need inspectable, traceable and recoverable arrangements so failures can be examined and renewal planned; replacement designs should be checked for intact, single-line-failure and thruster-failure cases.',
        'Severe-weather response must integrate shutdown, evacuation, thruster operation and tug support while protecting essential personnel, with real-time position and mooring-proximity monitoring during reconnection around live subsea assets.',
      ],
      actions: [
        'The original mooring system was recovered for forensic inspection and the damaged moorings and subsea infrastructure were replaced.',
        'The replacement system used a weighted 100 m tri-parallel chain section to reduce dynamic tensions, loads and excursions, with design checks to DNV-OS-E301 (2010).',
        'The replacement mooring changed the original 84 mm studded chain arrangement to 84 mm studless chain with 120 mm studless weighted sections and refurbished Stevpris anchors.',
        'The new design included dynamic analysis for intact and single-line-failure cases, thruster-failure review, higher-load fairleads and redundant thruster power-group arrangements.'
      ],
      metocean: {
        wave_height_hs: '9 m waves reported by BBC; wave definition not stated in the contemporary report',
        wind_speed: '53 knots reported by BBC',
        sea_temp: 'Not documented',
        notes: 'The BBC reported 53-knot winds, 9 m waves and a 12-degree roll during the incident. The OTC paper documents the sequential mooring failures and heading-loss response; it does not identify the original line-failure mechanism or provide a site-specific metocean reconstruction.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High confidence for date, operator, storm observations, personnel response and the sequential mooring-failure/station-excursion sequence. The OTC paper is a 2014 technical paper on mooring replacement and FPSO reconnection, not an independent casualty investigation; the root cause of the original line failures remains unresolved in the reviewed public sources.',
      sources: [
        'BBC News, 4 February 2011 (EXTERNAL): https://www.bbc.co.uk/news/uk-scotland-north-east-orkney-shetland-12366273',
        'Offshore Technology Conference paper OTC-25322-MS, Toal et al. (2014) (EXTERNAL): https://doi.org/10.4043/25322-MS'
      ],
      references: [
        { title: 'Gryphon Alpha FPSO - Experience Gained During Moorings Replacement and Hook-Up', type: 'OTC technical paper', publisher: 'Offshore Technology Conference', year: 2014, url: 'https://onepetro.org/OTCONF/proceedings/14OTC/14OTC/D031S033R006/172162', doi: '10.4043/25322-MS', file: 'background files/otc-25322-ms Gryphon Alpha FPSO - Experience Gained During Moorings Replacement and Hook-Up.pdf', notes: 'Paper scope is reinstatement, mooring replacement and reconnection; it explicitly refers elsewhere for further information on the original mooring failure.' },
        { title: 'Workers saved from storm-struck North Sea oil unit', type: 'Contemporaneous news report', publisher: 'BBC News', year: 2011, url: 'https://www.bbc.co.uk/news/uk-scotland-north-east-orkney-shetland-12366273' },
        { title: 'Extracted text for review', type: 'Local working extract', file: 'background files/Gryphon_Alpha_OTC25322_extracted.txt', note: 'Generated from the locally saved OTC paper; retained as a search aid, not a substitute for the paper.' }
      ]
    },

    {
      id: 'ocean-valiant-tow-grounding-2025',
      name: 'Ocean Valiant Rig Grounding After Towline Failure',
      year: 2025,
      date: '11 January 2025',
      location: 'Dherwa / El Haouichet beach, approximately 20 km west of Bizerte, Tunisia',
      lat: 37.30,
      lng: 9.68,
      region: 'Africa',
      location_precision: 'approximate',
      platform_type: '119 m offshore drilling rig / floating oil platform in tow',
      asset_type: 'Offshore drilling rig Ocean Valiant (IMO 8753330), under tow for scrapping',
      operator: 'Diamond Offshore (reported owner; operator at the time of tow not confirmed)',
      weather_event_type: 'storm',
      classification: 'decommissioning',
      weather_event: 'Rough weather during tow caused the towline to part and the rig to drift ashore',
      fatalities: 0,
      persons_on_board: null,
      survivors: null,
      injuries: 0,
      infrastructure_impact: 'Rig grounded on the beach; no apparent structural damage or oil pollution was reported',
      image: {
        src: 'images/ocean-valiant-2025-afp.jpg',
        alt: 'Ocean Valiant grounded on Hwaichat beach near Bizerte, Tunisia, on 13 January 2025.',
        caption: 'Ocean Valiant grounded on Hwaichat beach near Bizerte after the towline parted in rough weather.',
        credit: 'Fethi Belaid / AFP via The Peninsula Qatar. Permission required.'
      },
      summary: 'On the night of 11 January 2025, the 119 m drilling rig Ocean Valiant ran aground on Dherwa / El Haouichet beach near Bizerte, Tunisia, while being towed from Scotland to Turkey for scrapping. Rough weather caused the towline to part; the rig drifted until it grounded. No injuries, apparent major structural damage or oil pollution were reported.',
      executive_summary: 'During a tow from Scotland to Turkey for scrapping, Ocean Valiant broke away in rough weather and grounded near Bizerte, Tunisia. No injuries or pollution were reported; the rig was later refloated and removed in May 2026.',
      what_happened: 'Ocean Valiant, a 119 m offshore drilling rig built in 1988, was being towed by the offshore supply vessel Maersk Tracer from Scotland toward Turkey for scrapping. During rough weather on the night of 11 January 2025, the towline or traction cables parted. The rig could not be reconnected promptly and drifted onto Dherwa / El Haouichet beach, approximately 20 km west of Bizerte. It was eventually refloated and cleared from the coast in May 2026.',
      what_went_wrong: [
        'A tow connection failed during adverse weather while the rig was in transit.',
        'The rig could not be reconnected before wind, sea state and currents carried it ashore.',
        'The public sources reviewed do not identify the technical failure mode of the towline or establish whether the tow plan or weather criteria were deficient.'
      ],
      lessons_learned: [
        'Ocean Valiant parted its towline in rough weather during a scrapping tow from Scotland to Turkey and grounded on a Tunisian beach; it took more than a year to refloat. Even an end-of-life rig under tow needs conservative route weather limits, clear abort criteria and a plan for a towline failure near a coast.',
        'Tow plans for large offshore units should define conservative weather limits and clear abort criteria for the full route, including coastal approaches.',
        'Emergency reconnection and tug-assist arrangements should be assessed for the consequences of a towline failure in deteriorating weather.',
      ],
      actions: [
        'Tunisian maritime authorities opened an investigation and coordinated environmental inspections after the grounding.',
        'The rig was refloated and removed from the coast in May 2026 after more than a year of salvage, legal and administrative work.'
      ],
      metocean: {
        notes: 'Public reporting describes rough or bad weather and continuing rough seas but does not provide verified wind, wave or current measurements.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High confidence for the rig identity, IMO number, date, location, tow route, towline failure, weather involvement, no-reported-pollution outcome and May 2026 removal. The technical cause of the towline failure, exact coordinates, tow plan, owner/operator responsibility and final investigation findings remain unresolved in the public sources reviewed.',
      sources: [
        'Shipwreck Log, Ocean Valiant (EXTERNAL): https://shipwrecklog.com/log/2025/01/ocean-valiant/',
        'AFP via The Peninsula Qatar, 13 January 2025 (EXTERNAL): https://thepeninsulaqatar.com/article/13/01/2025/floating-offshore-oil-platform-runs-aground-off-tunisia',
        'Business News Tunisia, 16 January 2025 (FRENCH): https://businessnews.com.tn/2025/01/16/plateforme-petroliere-echouee-a-bizerte-aucune-fuite-polluante-na-ete-detectee/1352242/',
        'Webdo Tunisia, 15 May 2026 (FRENCH): https://www.webdo.tn/fr/actualite/national/bizerte-apres-seize-mois-dattente-la-plateforme-petroliere-echouee-quitte-enfin-les-cotes-tunisiennes/398036/'
      ],
      references: [
        { title: 'Ocean Valiant', type: 'Maritime incident record', publisher: 'Shipwreck Log', year: 2025, url: 'https://shipwrecklog.com/log/2025/01/ocean-valiant/', notes: 'Provides the rig name, IMO 8753330, tow vessel, reported Diamond Offshore ownership and scrapping route; secondary source.' },
        { title: 'Floating offshore oil platform runs aground off Tunisia', type: 'Contemporaneous news report', publisher: 'AFP / The Peninsula Qatar', year: 2025, url: 'https://thepeninsulaqatar.com/article/13/01/2025/floating-offshore-oil-platform-runs-aground-off-tunisia' },
        { title: 'Plateforme pétrolière échouée à Bizerte : aucune fuite polluante n’a été détectée', type: 'Maritime authority interview', publisher: 'Business News Tunisia', year: 2025, url: 'https://businessnews.com.tn/2025/01/16/plateforme-petroliere-echouee-a-bizerte-aucune-fuite-polluante-na-ete-detectee/1352242/' },
        { title: 'Bizerte : Après seize mois d’attente, la plateforme pétrolière échouée quitte enfin les côtes tunisiennes', type: 'Salvage and removal report', publisher: 'Webdo Tunisia', year: 2026, url: 'https://www.webdo.tn/fr/actualite/national/bizerte-apres-seize-mois-dattente-la-plateforme-petroliere-echouee-quitte-enfin-les-cotes-tunisiennes/398036/' }
      ]
    },

    /* ----------------------------------------------------------------------
       75. Schiehallion FPSO Bow Impact Damage - 1998
    ---------------------------------------------------------------------- */
    {
      id: 'schiehallion-fpso-bow-impact-1998',
      name: 'Schiehallion FPSO - Bow Impact Damage',
      year: 1998,
      date: 'November 1998',
      location: 'Schiehallion field, approximately 90 miles west of the Shetland Islands, UK North Sea',
      lat: 60.20,
      lng: -4.50,
      location_precision: 'Approximate field position; the reviewed sources do not state incident coordinates.',
      region: 'Europe',
      platform_type: 'Floating production, storage and offloading vessel (FPSO), blunt elliptical bow',
      operator: 'BP-operated Schiehallion field; original FPSO co-venturers included Shell',
      weather_event_type: 'rogue_wave',
      classification: 'design',
      weather_event: 'Steep or near-breaking wave causing horizontal wave-slap impact on the FPSO bow',
      fatalities: 0,
      persons_on_board: null,
      survivors: null,
      infrastructure_impact: 'Bow impact damage; the HSE report records the FPSO as taken out of service after the event, but the reviewed sources do not document the repair scope or outage duration.',
      image: {
        src: 'images/schiehallion-fpso-wave-slap-illustration.jpg',
        alt: 'Close-up of an FPSO bow above the sea, used as contextual imagery for the Schiehallion wave-slap incident.',
        caption: 'FPSO bow detail used as contextual imagery for the Schiehallion wave-slap case; not independently verified as a photograph of the November 1998 damage.',
        credit: 'Elsevier image CDN, article image 1-s2.0-S2092678216305106-gr15_lrg.jpg; source URL: https://ars.els-cdn.com/content/image/1-s2.0-S2092678216305106-gr15_lrg.jpg. Permission/licence status requires confirmation.'
      },
      summary: 'On 9 November 1998, a steep-fronted wave struck the Schiehallion FPSO bow and caused impact damage. The force was mainly horizontal, acting on near-vertical bow plating, rather than the more familiar vertical bottom-slamming case. The incident led to BP-, HSE- and EPSRC-supported work because the industry did not have adequate practical guidance for designing FPSO bows against this type of wave slap.',
      executive_summary: 'A steep-fronted North Sea wave damaged the Schiehallion FPSO bow on 9 November 1998. The HSE report describes a large, mainly horizontal wave-slap force on near-vertical bow plating and records that the FPSO was taken out of service. The incident exposed a design gap: significant wave height and period alone were not enough to represent the damaging wave or the resulting structural load.',
      what_happened: 'The Schiehallion FPSO was operating in the harsh-water field approximately 90 miles west of the Shetland Islands. On 9 November 1998, during a storm, a steep-fronted wave struck the vessel\'s blunt elliptical bow and caused bow damage. The HSE report calls this mechanism wave slap: the fast-moving face of a steep or near-breaking wave hit near-vertical plating and imposed a large, approximately horizontal force.\n\n' +
        'The FPSO was taken out of service after the damage. The reviewed HSE report does not give a full repair account, outage duration, exact damage dimensions, personnel consequences, wind speed or incident wave height. It is primarily a follow-up research report, not a casualty investigation.\n\n' +
        'The follow-up work used a 1:80 Schiehallion model and a model of the shuttle tanker Loch Rannoch. The practical finding was that a damaging wave cannot be described adequately by height and period alone: wave-front steepness, wave shape, breaking or near-breaking behaviour and direction relative to the bow all affect the load. The report then proposed simplified design guidance for curved bow plating, while noting that safety factors were outside its scope.',
      what_went_wrong: [
        'The bow was exposed to a horizontal wave-slap mechanism that was not adequately covered by the design guidance available at the time. The HSE report does not identify a separate material, fabrication or maintenance defect as the root cause.',
        'The damaging wave could not be represented by significant wave height and period alone. Wave-front steepness, wave shape, breaking behaviour and encounter direction were important to the impact.',
        'The design problem involved both the magnitude and the area over which the short-duration load acted. Very local pressure peaks should not be applied directly to a larger structural component without accounting for load area and dynamic response.',
        'The source does not report incident wind speed, incident wave height, damage dimensions, repair scope, outage duration or personnel consequences.'
      ],
      lessons_learned: [
        'A steep-fronted wave struck the Schiehallion FPSO\'s blunt bow in 1998 and damaged it with a mainly horizontal \'wave slap\' - a load case the design guidance of the day did not cover, and one that significant wave height and period alone cannot represent. Design FPSO bows for horizontal wave-slap, specifying wave steepness, breaking behaviour and direction, not only Hs and period.',
        'Apply impact loads over realistic stiffened-panel areas and account for the short-duration dynamic response, rather than applying a local pressure peak to a whole component.',
        'Use physical or numerical model tests when bow geometry or operating draft makes wave-impact behaviour uncertain.',
        'Record the horizontal wave-slap load case explicitly in design reviews, with the assumed wave steepness, breaking treatment, loaded area and dynamic amplification.',
      ],
      actions: [
        'BP, HSE and EPSRC supported a dedicated investigation of wave impact on FPSO bows after the Schiehallion damage.',
        'The related SAFE-FLOW Joint Industry Project / EU project, involving MARIN, brought complementary work on bow and green-water impact loading into the design-guidance programme.',
        'The investigation produced simplified design guidance for curved bow plating, including the effects of loaded area and dynamic response; it did not prescribe safety factors.',
        'Future design reviews should record the horizontal wave-slap load case, assumed wave-front steepness, breaking treatment, loaded area and dynamic amplification.'
      ],
      metocean: {
        wave_height_hs: 'Not reported for the November 1998 incident in the reviewed paper',
        wind_speed: 'Not reported for the November 1998 incident in the reviewed paper',
        sea_temp: 'Not reported',
        notes: 'The research identifies a steep or near-breaking wave face and horizontal wave-slap impact as the relevant mechanism. Model tests used controlled wave groups and later random/constrained-random wave methods; those laboratory values are not incident observations and are not entered as casualty metocean conditions.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the date (9 November 1998), bow impact, horizontal wave-slap mechanism, FPSO bow form and taking the vessel out of service because these are stated in HSE Research Report 324. Moderate for the field position because the map uses an approximate field location from current field sources. Low or unverified for incident wind, wave height, damage dimensions, repair scope, outage duration and personnel consequences because the reviewed report does not provide them. The event is classified as rogue_wave for the database hazard taxonomy, but the source does not establish that the wave met a formal rogue-wave definition. The report executive-summary text contains a conflicting 1989 year; its incident section states 9/11/98 and the repository abstract states November 1998, so this record uses 1998.',
      sources: [
        'Xu, L.; Barltrop, N.; Okan, B. (2008), Ocean Engineering 35, 1148-1157 (EXTERNAL, peer-reviewed experimental study): https://doi.org/10.1016/j.oceaneng.2008.04.013',
        'Local source PDF: background files/rr324 Wave slap loading on FPSO bows.pdf (EXTERNAL HSE report)',
        'Xu, L.; Barltrop, N.; Okan, B. (2008), Ocean Engineering 35, 1148-1157 (EXTERNAL, companion experimental paper): https://doi.org/10.1016/j.oceaneng.2008.04.013'
      ],
      references: [
        { title: 'Wave slap loading on FPSO bows: Research Report 324', type: 'HSE research report', publisher: 'Health and Safety Executive / Universities of Glasgow and Strathclyde', year: 2005, url: 'https://strathprints.strath.ac.uk/9870/', file: 'background files/rr324 Wave slap loading on FPSO bows.pdf', notes: 'Primary source for this entry. Records the 9 November 1998 Schiehallion bow damage, wave-slap mechanism, taking the FPSO out of service and practical design guidance.' },
        { title: 'Bow impact loading on FPSOs 1 - Experimental investigation', type: 'Peer-reviewed companion article', publisher: 'Ocean Engineering / Elsevier', year: 2008, url: 'https://doi.org/10.1016/j.oceaneng.2008.04.013', doi: '10.1016/j.oceaneng.2008.04.013', file: 'background files/Xu 20008 Bow impact loading on FPSOs 1—Experimental investigation.pdf', notes: 'Companion experimental study; used for supporting context, not as the main incident source.' },
        { title: 'FPSO Bow Damage in steep waves', type: 'Related article record', publisher: 'Semantic Scholar', url: 'https://www.semanticscholar.org/paper/FPSO-Bow-Damage-in-steep-waves-Gorf/b4a63998225e07464b02188f54358398af03b8e3', notes: 'User-provided related article link; the supplied Elsevier figure was downloaded locally, but the article PDF was not downloaded because the Semantic Scholar endpoint was rate-limited during review.' },
        { title: 'Article image 1-s2.0-S2092678216305106-gr15_lrg.jpg', type: 'Context image', publisher: 'Elsevier image CDN', url: 'https://ars.els-cdn.com/content/image/1-s2.0-S2092678216305106-gr15_lrg.jpg', file: 'images/schiehallion-fpso-wave-slap-illustration.jpg', notes: 'Downloaded 2026-09-05. Close-up FPSO bow image selected as contextual illustration; not treated as verified evidence of the 1998 damage. Permission/licence status requires confirmation.' }
      ]
    },

    /* ----------------------------------------------------------------------
       76. Ocean Vanguard Mooring Brake Failure - 2004
    ---------------------------------------------------------------------- */
    {
      id: 'ocean-vanguard-mooring-brake-failure-2004',
      name: 'Ocean Vanguard - Mooring Brake Failure and Riser Damage',
      year: 2004,
      date: '14 December 2004',
      location: 'Halten Bank, Norwegian Sea, Norway',
      lat: 65.20,
      lng: 7.40,
      location_precision: 'Approximate Halten Bank position; exact coordinates are not stated in the reviewed incident account.',
      region: 'Europe',
      platform_type: 'Third-generation semi-submersible drilling rig (Trosvik Bingo 3000)',
      operator: 'Diamond Offshore; drilling for Eni',
      weather_event_type: 'storm',
      classification: 'drilling',
      weather_event: 'Norwegian Sea storm - approximately 55-knot wind, 10.3 m significant wave height and waves up to approximately 16.9 m',
      fatalities: 0,
      persons_on_board: 86,
      survivors: 86,
      injuries: 0,
      infrastructure_impact: 'Rig moved approximately 160 m off location; the well was lost, seabed cleanup was required, and the wellhead, BOP, riser, riser-tensioning system and mooring winches were damaged.',
      environmental_impact: 'No pollution was recorded; seabed cleanup was required after the incident.',
      image: {
        src: 'images/ocean-vanguard-anchoring-failure-2004.jpg',
        alt: 'Ocean Vanguard semi-submersible drilling rig at sea.',
        caption: 'Ocean Vanguard at sea. Context image, not a photograph of the December 2004 mooring failure.',
        credit: 'Officer of the Watch / PSA-derived account; https://officerofthewatch.com/2013/11/20/drilling-rig-anchoring-failure-incident-information/. Permission status requires confirmation.'
      },
      summary: 'At 22:40 on 14 December 2004, Ocean Vanguard suffered uncontrolled run-out of anchor chains 1 and 2 while drilling for Eni on the Halten Bank with the riser and BOP still connected. The rig lost position, listed 8-12 degrees and drifted approximately 160 m before remaining anchored on six lines. No one was injured and no pollution was recorded, but the event had major-accident potential: the well was lost, seabed cleanup was required, and the wellhead, BOP, riser, tensioning system and winches were damaged.',
      executive_summary: 'Havtil\'s investigation found that Ocean Vanguard\'s band brakes lacked sufficient holding force and the winch pawls were operated incorrectly. The direct failures occurred in a system weakened by poor winch maintenance, unclear procedures, inadequate qualifications, inaccurate anchor-line tension measurement and weak contractor follow-up by Eni. Twenty-three of 86 crew were evacuated to Heidrun the same night; the rig was off contract for about six months and repair and cleanup work continued through 2005-2007.',
      what_happened: 'Ocean Vanguard, a semi-submersible, was drilling for Eni on the Halten Bank with 86 aboard, the BOP closed and the riser prepared for disconnecting, when the weather built after 22:00 on 14 December 2004 to about 55 knots of wind, 10.3 m significant wave height and individual waves up to about 16.9 m.\n\nAt 22:40 the brakes on anchor winches 1 and 2 failed and both chains ran out uncontrolled, load transfer pulling the second after the first. The emergency riser disconnect was started but needed time to activate, and the six remaining lines dragged the rig into an 8-12 degree list and about 160 m off the well.\n\nThe well was eventually disconnected with no injuries and no pollution, but the wellhead, BOP, riser, tensioning system and winches were all damaged, the well was lost, and the rig was off contract for about six months. The regulator classed it as a serious event for its major-accident potential; 23 non-essential crew were evacuated to Heidrun that night.',
      what_went_wrong: [
        'Havtil found two direct causes: the band brake lacked sufficient holding force, and the winch pawls (the secondary brake) were operated incorrectly.',
        'The anchor winches had not been maintained well enough to perform their function, with inadequate maintenance documentation.',
        'Personnel lacked sufficient understanding of the governing winch documents, pawl use and riser-disconnect criteria, and the regulator found qualification gaps.',
        'Anchor-line tension measurement was not accurate enough, and weather and wave measurement and reporting routines were inadequate.',
        'The rig was still connected to the well when the mooring failed, so a station-keeping failure became a riser, BOP and wellhead damage event; Eni had not sufficiently verified its contractor\'s barriers.',
      ],
      lessons_learned: [
        'Ocean Vanguard was still latched to its well when both anchor-winch brakes failed in a storm; the rig dragged 160 m off location and tore up the wellhead, BOP and riser - no injuries, but a serious near-miss. Mooring-winch brakes are a critical barrier that must be maintained, tested and operable by competent crew, and a mobile unit should disconnect before it loses station.',
        'Critical winch procedures must be consistent across governing documents, understood by qualified people and verified in practice before severe weather.',
        'Riser-disconnect criteria must be explicit and conservative, integrated with the actual mooring condition, forecast, anchor-line tension and hydraulic response time.',
        'The duty holder must actively verify contractor barriers, maintenance and competence, not rely on contractor documentation alone.',
      ],
      actions: [
        'Havtil issued follow-up findings covering 10 deviations and 6 improvement points - winch maintenance, contractor verification, mooring analysis, competence, document consistency, brake design, riser disconnect, tension measurement and alarms.',
        'Diamond Offshore revised maintenance routines, upgraded the brake systems, reviewed procedures and reassessed training and qualifications.',
        'Diamond Offshore and Eni ran gap and risk analyses against regulations and class rules across their mobile units.',
        'Future operations should verify the mooring analysis, complete a documented pre-rig-move winch check, test alarms and tension measurement, and set clear weather and riser-disconnect decision points.',
      ],
      metocean: { wave_height_hs: '10.3 m significant wave height; individual waves up to approximately 16.9 m', wind_speed: 'Approximately 55 kn', notes: 'Values are from the PSA-derived incident account; no complete hindcast or instrument reconstruction was reviewed.' },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the date, rig, crew count, 160 m excursion, evacuation, direct causes, underlying causes, damage and regulator findings because these are documented in the official Havtil investigation report. Moderate for exact coordinates and detailed repair chronology; the plotted position is an approximate Halten Bank point and the public report describes the economic and repair consequences without a complete cost breakdown.',
      sources: ['Havtil investigation report: https://www.havtil.no/tilsyn/granskingsrapporter/2012/eni-norge-ocean-vanguard-gransking-av-hendelse/', 'Officer of the Watch PSA-derived account: https://officerofthewatch.com/2013/11/20/drilling-rig-anchoring-failure-incident-information/', 'Norwegian Offshore Directorate facility record: https://factpages.sodir.no/facility/pageview/moveable/all/287902'],
      references: [
        { title: 'Gransking av ankerkjetting utrausing på Ocean Vanguard 14.12.2004', type: 'Official investigation report', publisher: 'Petroleum Safety Authority Norway / Havtil', year: 2005, url: 'https://www.havtil.no/tilsyn/granskingsrapporter/2012/eni-norge-ocean-vanguard-gransking-av-hendelse/', file: 'background files/Havtil Ocean Vanguard Investigation Report.pdf', notes: 'Primary source. Identifies the direct brake and pawl causes, nine underlying causes, deviations and improvement points involving Diamond Offshore and Eni.' },
        { title: 'Drilling Rig Anchoring Failure Incident Information', type: 'PSA-derived incident account', publisher: 'Officer of the Watch', year: 2013, url: 'https://officerofthewatch.com/2013/11/20/drilling-rig-anchoring-failure-incident-information/', file: 'background files/Ocean Vanguard anchoring failure incident image.jpg', notes: 'Readable English summary of the event, evacuation, six-month downtime and follow-up work; image is contextual only.' },
        { title: 'Ocean Vanguard facility record', type: 'Official facility record', publisher: 'Norwegian Offshore Directorate', url: 'https://factpages.sodir.no/facility/pageview/moveable/all/287902' }
      ]
    },

    /* ----------------------------------------------------------------------
       77. Deepwater Asgard Hurricane Zeta Riser Damage - 2020
    ---------------------------------------------------------------------- */
    {
      id: 'deepwater-asgard-hurricane-zeta-riser-damage-2020',
      name: 'Deepwater Asgard - Hurricane Zeta Riser and LMRP Damage',
      year: 2020,
      date: '28 October 2020',
      location: 'Green Canyon Block 895, Highgarden Well #1, Gulf of Mexico, United States',
      lat: 28.75,
      lng: -90.15,
      location_precision: 'Approximate Green Canyon Block 895 position; exact coordinates are not stated in the BSEE report.',
      region: 'North America',
      platform_type: 'Deepwater drillship',
      operator: 'Transocean; contracted by Beacon Offshore Engineering (BOE)',
      weather_event_type: 'cyclone',
      classification: 'drilling',
      storm_sid: '2020299N18277',
      storm_name: 'ZETA',
      weather_event: 'Hurricane Zeta - 90-100 mph sustained winds, 30 ft swells and a recorded 152 mph peak gust',
      fatalities: 0,
      persons_on_board: null,
      survivors: null,
      injuries: 0,
      infrastructure_impact: 'Drillship moved approximately 1.9 nautical miles from the well; the marine riser, LMRP, telescopic joint, MUX cables, Blue Pod and Yellow Pod were damaged. Estimated repair or replacement cost was $5.7 million.',
      image: {
        src: 'images/deepwater-asgard-hurricane-zeta-2020.jpg',
        alt: 'Deepwater Asgard drillship at sea.',
        caption: 'Deepwater Asgard at sea. Context image credited to ShipSpotting; not a photograph of the Hurricane Zeta damage.',
        credit: 'ShipSpotting via Safety4Sea; https://safety4sea.com/bsee-investigation-inaccurate-weather-forecast-key-to-drillship-incident/. Permission status requires confirmation.'
      },
      summary: 'On 28 October 2020, Hurricane Zeta drove the Deepwater Asgard off Highgarden Well #1 in Green Canyon Block 895. A forecast showing an eastward Category 1 passage led BOE and Transocean to remain connected while the well was being secured. The actual storm produced 90-100 mph sustained winds, 30 ft swells and a 152 mph peak gust. EDS cleared the BOPs, but the drillship continued northwest, damaging the riser at the moon-pool wave breaker and dragging the LMRP across the seabed twice.',
      executive_summary: 'BSEE identified inaccurate weather forecasting as the probable cause of the Deepwater Asgard incident and the decision to remain latched to the well as a contributing cause. Mechanical problems with the Iron Roughneck had already delayed well activities. When Hurricane Zeta intensified and the forecast worsened, the drillship reached the red watch circle, activated EDS and cleared the BOPs, but travelled approximately 1.9 nautical miles. Riser, LMRP, telescopic-joint, MUX-cable and pod damage was estimated at $5.7 million.',
      what_happened: 'Deepwater Asgard was drilling Highgarden Well #1 in Green Canyon Block 895, in approximately 5,594 ft of water. On 24 October 2020, Tropical Disturbance #59 approached the Gulf while the crew was tripping drill pipe to set a cement retainer at 26,200 ft. Mechanical problems with the Iron Roughneck delayed the operation and left the equipment out of service for much of 25 October. Repairs were completed early on 26 October, after which the crew finished pulling out of hole, set and tested the RTTS, and prepared to trip back in.\n\nOn 27 October, Zeta strengthened to a Category 1 hurricane and entered the Gulf in the projected path of the drillship. The crew displaced the marine riser with seawater and removed the RTTS running tool to prepare either to disconnect or remain connected. A BOE-Transocean conference call considered the forecast and previous sister-drillship experience; the decision was made to remain latched to the well and ride out the storm.\n\nOn 28 October, sustained winds reached 90-100 mph and sea swells reached approximately 30 ft. With thrusters at 100% output, the drillship could not maintain well centre and reached the red watch circle at 159 ft off location. At approximately 09:40, the EDS was activated from the driller\'s chair. BSEE records that the EDS required approximately 24 seconds to function; disconnect was complete at approximately 170 ft off well centre. Air Pressure Vessel bottles were placed online to increase tensioner pressure and support the marine riser and LMRP.\n\nThe drillship was then pushed northwest at approximately 5.5 mph. At about 10:06, the marine riser struck the hull at the moon-pool wave breaker. By 10:12, the slip joint was fully closed and had locked itself; the subsea team applied hydraulic locks. The derrick sensor recorded a 152 mph peak gust at 10:36. At approximately 10:52, the inclinator recorded 15.9 degrees, indicating that the LMRP had struck the seabed, although this was not known to the drill crew at the time. The drillship stopped at approximately 12:48 after travelling about 1.9 nautical miles from the well. During the return to the safe zone, the LMRP struck the seabed a second time. The well was secured, but the riser, LMRP, telescopic joint, MUX cables, Blue Pod and Yellow Pod required repair or replacement.',
      what_went_wrong: [
        'The forecast showed Zeta passing east as a Category 1; the actual weather at the rig was worse - strong Category 1-2 conditions, extremely rough seas and a 152 mph peak gust.',
        'Iron Roughneck mechanical failures delayed the drilling sequence and cut the time available to secure the well before the storm intensified.',
        'The operator and drilling contractor chose to stay connected on the basis of the forecast and sister-rig experience rather than move to a secure location early.',
        'Once sustained winds reached 90-100 mph the drillship could not hold well centre even at 100% thruster output, and it reached the red watch circle before the disconnect was complete.',
        'The emergency disconnect cleared the BOPs, but the rig kept moving: the riser hit the moon-pool wave breaker and the LMRP struck the seabed twice - the first strike unknown to the crew at the time.',
      ],
      lessons_learned: [
        'The Deepwater Asgard stayed latched to its well for Hurricane Zeta on a forecast of an eastward Category 1 pass; the storm came in worse (90-100 mph, a 152 mph gust), the rig could not hold station, and the late disconnect still cost about $5.7M of riser and LMRP damage. Treat a Category 1 forecast as a trigger to secure, disconnect and move off early, and plan for the storm to exceed the forecast.',
        'Weather decisions must allow for forecast uncertainty and changing tracks; a track passing east of the rig is not a sufficient basis to remain connected.',
        'Weather-readiness plans need schedule contingency for equipment failures that eat into securing time, and emergency-weather limits must be decision triggers with time to complete the whole sequence.',
        'Analyse riser, BOP, tensioner, slip-joint and LMRP behaviour for each location and storm, including post-disconnect motion and seabed contact, with bathymetry and alarms that make an LMRP seabed strike immediately apparent.',
      ],
      actions: [
        'The operator set that, when Category 1 or stronger winds are forecast, the contractor should secure the well, displace the riser, disconnect, pull a length of riser and move to a secure location.',
        'It planned to require a riser, BOP and tensioner analysis for Category 1 conditions at each well location between 1 June and 1 December.',
        'The contractor planned to revise its Extreme Weather Evacuation Plan, and the parties to compare projected with actual Zeta conditions with the weather provider.',
        'The parties planned to obtain bathymetry maps so rig teams can identify seabed hazards along emergency-disconnect and safe-zone routes.',
      ],
      metocean: { wave_height_hs: 'Approximately 30 ft sea swells; BSEE does not identify this as significant wave height', wind_speed: '90-100 mph sustained; 152 mph peak gust recorded by the derrick wind sensor', notes: 'BSEE describes strong Category 1 to Category 2 hurricane-force conditions and extremely rough seas. The peak gust was equivalent to Category 4 hurricane-force wind. BSEE identifies inaccurate weather forecasting as the probable cause and remaining connected as a contributing cause. The report records a 15.9-degree inclination after an LMRP seabed strike, not a 5-degree flex-joint angle.' },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for date, rig, block, weather, EDS sequence, excursion, damage and cost because these are in the official BSEE report. Moderate for the plotted coordinates because they are an approximate block position.',
      sources: ['BSEE Accident Investigation Report GC-895-BOE-28-OCT-2020: https://www.bsee.gov/sites/bsee.gov/files/gc-895-boe-28-oct-2020.pdf', 'Safety4Sea summary: https://safety4sea.com/bsee-investigation-inaccurate-weather-forecast-key-to-drillship-incident/'],
      references: [
        { title: 'Accident Investigation Report - GC-895-BOE-28-OCT-2020', type: 'Official accident investigation report', publisher: 'Bureau of Safety and Environmental Enforcement (BSEE)', year: 2021, url: 'https://www.bsee.gov/sites/bsee.gov/files/gc-895-boe-28-oct-2020.pdf', file: 'background files/BSEE Deepwater Asgard Accident Investigation Report 2020-10-28.pdf' },
        { title: 'BSEE Investigation: Inaccurate weather forecast key to drillship incident', type: 'Regulatory-report summary', publisher: 'Safety4Sea', year: 2021, url: 'https://safety4sea.com/bsee-investigation-inaccurate-weather-forecast-key-to-drillship-incident/', file: 'background files/Deepwater Asgard Hurricane Zeta contextual image.jpg' }
      ]
    },

    /* ----------------------------------------------------------------------
       78. Ensco 7500 Unplanned Riser Disconnect - 2005
    ---------------------------------------------------------------------- */
    {
      id: 'ensco-7500-riser-disconnect-spill-2005',
      name: 'Ensco 7500 - Unplanned Riser Disconnect and Synthetic-Mud Spill',
      year: 2005,
      date: '5 July 2005',
      location: 'Green Canyon Block 652, OCS-G 21810, Gulf of Mexico, off Louisiana, United States',
      lat: 27.3370,
      lng: -90.1549,
      location_precision: 'Approximate well position from BSEE coordinates.',
      region: 'North America',
      platform_type: 'Dynamically positioned semi-submersible drilling unit (Ensco 7500)',
      operator: 'Anadarko Petroleum Corporation; drilling contractor Ensco Offshore Company',
      weather_event_type: 'cyclone',
      classification: 'drilling',
      storm_sid: '2005185N18273',
      storm_name: 'CINDY',
      weather_event: 'Tropical Storm Cindy development - 61-knot wind, 14-16 ft swells and loop-current conditions up to approximately 3.3 knots',
      fatalities: 0,
      persons_on_board: null,
      survivors: null,
      injuries: 0,
      infrastructure_impact: 'Unplanned LMRP/riser disconnect; riser inner barrel, slip-joint/tension-ring system and tension line were damaged or displaced. Approximately 710 barrels of synthetic-base mud were released.',
      environmental_impact: 'Approximately 710 barrels of synthetic-base mud spilled; no open-hole hydrocarbons were exposed below casing at disconnect.',
      image: { src: 'images/ensco-7500-riser-disconnect-2005.jpg', alt: 'Ensco 7500 semi-submersible drilling unit at sea.', caption: 'Ensco 7500 semi-submersible drilling unit. Context image from the investigation report; not a photograph of the July 2005 disconnect.', credit: 'U.S. Minerals Management Service via Officer of the Watch, Figure 1; source URL: https://officerofthewatch.com/2014/03/31/semi-submersible-drilling-unit-riser-disconnect-investigation-report/. Permission status requires confirmation.' },
      summary: 'On 5 July 2005, Ensco 7500 lost station while displacing synthetic-based mud from its riser in preparation for a storm disconnect. With approximately 3.3-knot current, 61-knot wind and 14-16 ft swells, the rig was already 175 ft off well centre when EDS was ordered. The LMRP released after about four minutes, hard recoil wedged the slip joint and tension ring, the riser bent, and approximately 710 barrels of synthetic mud spilled.',
      executive_summary: 'BSEE found that loop currents and deteriorating tropical weather exceeded Ensco 7500\'s DP station-keeping capability. One thruster had been out of service for 3-4 months, the rig began riser displacement while slipping, and an EDS control configuration delayed the LMRP function. The incident caused riser damage and a 710-barrel synthetic-mud spill, but no open-hole hydrocarbons were exposed.',
      what_happened: 'Ensco 7500, a dynamically-positioned semi-submersible, was drilling an exploratory well in Green Canyon Block 652 when the Gulf of Mexico loop current and developing Tropical Storm Cindy built beneath it. One of its seven thrusters had been out of service for three to four months.\n\nOn 5 July 2005, with drilling suspended, the crew was displacing about 1,538 barrels of synthetic mud from the riser with seawater when the combined roughly 61-knot wind, 14-16 ft swells and about 3.3-knot current overpowered the rig\'s station-keeping. At about 175 ft off well centre the Emergency Disconnect Sequence was ordered; the LMRP did not release promptly and a second command was needed.\n\nThe disconnect completed at about 1204 with hard recoil that wedged the slip joint and tension ring and bent the hanging riser; about 710 barrels of synthetic mud spilled. The rig was steered away from the Marco Polo platform and drifted more than 15,000 ft from the well. No open-hole hydrocarbons were exposed below casing when it disconnected.',
      what_went_wrong: ['Combined wind, waves and loop currents exceeded available DP thruster capability even though engine power was available.', 'Thruster No. 5 had been unavailable for 3-4 months, reducing station-keeping redundancy.', 'The riser was displaced after the rig was already slipping, leaving insufficient margin for controlled disconnect.', 'EDS took approximately four minutes; added BOP ram closing pressure could delay LMRP operation and the subsea engineer did not recognise the consequence.', 'The operator and contractor had not fully demonstrated DP performance and failure-mode controls over the expected campaign conditions.'],
      lessons_learned: [
        'The loop current, a developing tropical storm and a thruster out of service for months together overpowered Ensco 7500\'s dynamic positioning; it began displacing its riser while already slipping, lost station, and a hard-recoil disconnect bent the riser and spilled about 710 barrels. Treat loop currents as a primary station-keeping input, and never start riser displacement when the rig is already losing position or lacks margin to complete the disconnect.',
        'Use a site-specific riser-disconnect plan covering environmental triggers, T-time, work stoppage, heading, drift direction and nearby hazards.',
        'An unavailable critical thruster requires a formal operating-limit review and conservative restrictions, not continued operation on the remaining margin.',
        'Verify emergency-disconnect pod selection, control pressures, LMRP timing and hard-recoil response through realistic drills, and prove DP capability through FMEA and trials.',
      ],
      actions: ['BSEE recommended site-specific riser-disconnect and storm plans with current, weather, T-time, heading and hazard criteria.', 'Operators should verify DP capability through FMEA, proving trials and annual trials, and maintain critical thrusters or revise limits when unavailable.', 'Riser-disconnect training should verify pod selection, control pressures, LMRP release timing and hard-recoil response.', 'Pollution planning should account for riser mud inventory and confirm hydrocarbon exposure before a weather-driven disconnect.'],
      metocean: { wave_height_hs: '4-6 ft seas with 14-16 ft swells', wind_speed: 'Approximately 61 knots by 1200; 41 knots at 1130', notes: 'Loop-current conditions reached approximately 3.3 knots. Tropical Storm Cindy developed on 5 July and became a hurricane on 6 July.' },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for rig, well, date, coordinates, timeline, environmental conditions, EDS sequence, 710-barrel spill, equipment damage and findings because these are documented in MMS/BSEE OCS Report 2006-058. Moderate for exact repair scope and final cost.',
      sources: ['MMS/BSEE OCS Report 2006-058: https://www.bsee.gov/sites/bsee.gov/files/2006-058.pdf', 'BSEE Safety Alert 243: https://www.bsee.gov/sites/bsee.gov/files/safety-alerts/incident-and-investigations/sa-243-pdf.pdf', 'Officer of the Watch summary: https://officerofthewatch.com/2014/03/31/semi-submersible-drilling-unit-riser-disconnect-investigation-report/'],
      references: [
        { title: 'Investigation of Riser Disconnect and Spill - Green Canyon Block 652, OCS-G 21810, July 5, 2005', type: 'Official investigation report', publisher: 'U.S. Minerals Management Service / BSEE', year: 2006, url: 'https://www.bsee.gov/sites/bsee.gov/files/2006-058.pdf', file: 'background files/BSEE 2006-058 Ensco 7500 Riser Disconnect and Spill.pdf' },
        { title: 'Unplanned Riser Disconnect Results in Spill', type: 'BSEE Safety Alert 243', publisher: 'BSEE', year: 2006, url: 'https://www.bsee.gov/sites/bsee.gov/files/safety-alerts/incident-and-investigations/sa-243-pdf.pdf', file: 'background files/BSEE Safety Alert 243 Unplanned Riser Disconnect.pdf' },
        { title: 'Semi-Submersible Drilling Unit Riser Disconnect - Investigation Report', type: 'Incident summary', publisher: 'Officer of the Watch', year: 2014, url: 'https://officerofthewatch.com/2014/03/31/semi-submersible-drilling-unit-riser-disconnect-investigation-report/', file: 'background files/Ensco 7500 riser disconnect figure 2.jpg' }
      ]
    },

    /* ----------------------------------------------------------------------
       79. Storm Britta - North Sea Offshore and Coastal Damage - 2006
    ---------------------------------------------------------------------- */
    {
      id: 'storm-britta-north-sea-damage-2006',
      name: 'Storm Britta - North Sea Offshore and Coastal Damage',
      year: 2006,
      date: '31 October - 1 November 2006',
      location: 'North Sea and southern North Sea coast, northern Europe',
      lat: 54.80,
      lng: 8.80,
      location_precision: 'Approximate regional presentation point; multi-site storm record.',
      region: 'Europe',
      platform_type: 'Regional event affecting offshore production platforms, research infrastructure, shipping and coastal energy infrastructure',
      operator: 'Multiple operators and infrastructure owners across the North Sea',
      weather_event_type: 'storm',
      classification: 'coastal',
      storm_name: 'BRITTA',
      weather_event: 'Storm Britta / Orkantief Britta / Allerheiligen storm - extratropical North Sea windstorm',
      fatalities: null,
      persons_on_board: null,
      survivors: null,
      infrastructure_impact: 'Wave-impact damage to FINO1 and reported damage to Valhall lifeboats and several North Sea production platforms; coastal flooding, harbour impacts, transport interruptions and energy-infrastructure impacts were also reported.',
      environmental_impact: 'Storm surge and wave impacts affected coastal areas and offshore assets; no single quantified regional pollution outcome is established in the reviewed sources.',
      image: {
        src: 'images/storm-britta-maximum-gust-wind-speed-2006.png',
        alt: 'Map of maximum gust and wind speed observations across northern Europe during Storm Britta.',
        caption: 'Maximum gust and wind speed observations across northern Europe during Storm Britta, 31 October-1 November 2006.',
        credit: 'Kettle, Storm Britta in 2006: offshore damage and large waves in the North Sea (2015); image extracted from page 2 of the paper. Permission status requires confirmation.'
      },
      summary: 'Storm Britta was a severe extratropical North Sea windstorm on 31 October-1 November 2006. Its low-pressure system moved from Scotland toward southern Norway and drove a high wave field southward across the North Sea. The regional event produced offshore platform and research-infrastructure damage, ship emergencies, coastal flooding, transport interruptions and energy-infrastructure impacts.',
      executive_summary: 'Britta was also reported as Orkantief Britta or the Allerheiligen storm. High waves propagated from the northern to southern North Sea over roughly 12-18 hours. FINO1 sustained structural damage, Valhall reported lifeboat damage, Ekofisk recorded extreme wave measurements, and other production platforms and vessels were affected. This record is a regional synthesis; not every reported damage case has a separate primary investigation.',
      what_happened: 'During 31 October and 1 November 2006, a deep low-pressure system moved from Scotland toward southern Norway and then eastward through Scandinavia. Strong northerly winds pushed a developing wave field southward across the North Sea. Severe conditions progressed through the offshore platform line from the northern North Sea toward Troll, Heimdal, Sleipner and Ekofisk, then reached the southern North Sea and the Dutch-German coast.\n\n' +
        'Ekofisk recorded the largest significant wave heights among the Norwegian platform group. One measurement system indicated wave heights reaching approximately 22 m above mean sea level, although the review notes data-quality limitations in the extreme measurements. Valhall reported wave damage to lifeboats. FINO1, the instrumented German offshore research platform near the Dutch-German border, experienced structural damage and recorded the storm through its meteorological, oceanographic and wave-buoy systems.\n\n' +
        'Several Dutch production platforms were also reported to have suffered wave-impact damage. Offshore shipping incidents included bridge-window damage, swept deck cargo and rescue operations. The Dutch motor lifeboat Anna Margaretha capsized three times while responding to an offshore emergency near Schiermonnikoog and Borkum, but reached harbour under its own power. The review also reports the floating drilling platform Bredford Dolphin breaking free from tow during high winds while being transferred from Scotland to Poland; this remains a reported event rather than an independently verified platform casualty in this record.\n\n' +
        'Across the region, storm surge and high winds interrupted ferry and bridge services, flooded harbour areas, damaged coastal infrastructure and caused power interruptions. The review links some offshore damage to waves exceeding 15 m above average sea level, but does not provide a complete site-by-site engineering damage inventory.',
      what_went_wrong: ['The storm generated a high and rapidly propagating wave field that affected offshore and coastal assets in sequence.', 'Significant wave height did not fully describe the individual waves associated with damage; unusually large waves occurred within the broader storm sea state.', 'Operators and vessel crews faced rapidly changing wind, current, wave and visibility conditions across a wide region.', 'Public evidence is fragmented across platform measurements, government reports, maritime records, media reports and technical papers; several platform damage mechanisms remain unresolved at component level.', 'Infrastructure exposure extended beyond primary production assets to lifeboats, research platforms, vessels, ports and power systems.'],
      lessons_learned: ['Regional storm readiness should account for southward wave propagation and not rely only on the nearest installation measurement.', 'Offshore design and operations should consider individual extreme waves within a storm sea state, not only significant wave height.', 'Wave, wind, current and storm-surge observations should be combined in real time for platforms, vessels and coastal infrastructure.', 'Lifeboats, research platforms and secondary offshore systems require severe-weather assurance alongside primary production structures.', 'Regional records should distinguish measured damage, regulator-confirmed findings, media reports and review-article synthesis.'],
      actions: ['Use site-specific storm plans connecting regional forecasts, wave propagation, storm surge, current information and asset operating limits.', 'Maintain regional consequence maps covering platforms, research towers, subsea infrastructure, shipping routes, ports and rescue resources.', 'Retain high-resolution wave and platform-instrument data after major storms so individual damaging waves can be compared with asset response.', 'Verify lifesaving systems against realistic list, wave-impact, visibility and rescue-access conditions.', 'Follow the cited primary sources before converting individual cases such as FINO1 or Valhall into separate canonical incidents.'],
      metocean: { wave_height_hs: 'Regional high-wave field; Ekofisk indicated values up to approximately 22 m above mean sea level, with data-quality limitations noted', wind_speed: 'Strong northerly wind field; exact values varied by location', storm_surge: 'Severe surge and coastal flooding in the southern North Sea and Baltic-connected waters', notes: 'Britta was an extratropical European windstorm, not a tropical cyclone; no IBTrACS SID is assigned. The reviewed papers describe waves over 15 m above average sea level at several damage locations and southward wave-field progression over roughly 12-18 hours.' },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for storm timing, regional development, wave-field progression and named damage categories because these are synthesized from the two reviewed papers and cited government/technical sources. Moderate for individual platform damage details; low or unverified for exact damage scope at unnamed Dutch platforms and the Bredford Dolphin tow event without the cited primary reports.',
      sources: ['Kettle (2016), Assessing Extreme Events for Energy Meteorology in Europe: https://doi.org/10.1016/j.egypro.2016.10.033', 'Kettle (2015), Storm Britta in 2006: offshore damage and large waves in the North Sea: https://doi.org/10.5194/nhessd-3-5493-2015'],
      references: [
        { title: 'Assessing Extreme Events for Energy Meteorology in Europe', type: 'Energy-meteorology review article', publisher: 'Energy Procedia / Elsevier', year: 2016, url: 'https://doi.org/10.1016/j.egypro.2016.10.033', file: 'background files/Assessing_Extreme_Events_for_Energy_Meteorology_Me.pdf', notes: 'Primary review source for alternate storm terminology, regional energy-infrastructure impacts and the offshore-events map.' },
        { title: 'Storm Britta in 2006: offshore damage and large waves in the North Sea', type: 'Natural-hazards review article', publisher: 'Natural Hazards and Earth System Sciences Discussion', year: 2015, url: 'https://doi.org/10.5194/nhessd-3-5493-2015', file: 'background files/Review_Article_Storm_Britta_in_2006_offshore_damag.pdf' },
        { title: 'Petroleum Safety Authority Norway Annual Report, 2007', type: 'Regulatory source cited by the review', publisher: 'Petroleum Safety Authority Norway', year: 2007, notes: 'Cited for Norwegian offshore platform damage context; individual report should be obtained before separate Valhall/Ekofisk entries.' },
        { title: 'Oceanographic results of two years operation of the first offshore wind research platform in the German Bight - FINO1', type: 'Technical paper cited by the review', publisher: 'DEWI Magazin', year: 2007, notes: 'Cited as a FINO1 source; separate primary copy was not located in this pass.' }
      ]
    },

    /* ----------------------------------------------------------------------
       80. Valhall Platform Wave Damage - Storm Britta - 2006
    ---------------------------------------------------------------------- */
    {
      id: 'valhall-platform-wave-damage-britta-2006',
      name: 'Valhall Field Centre Platform Wave Damage During Storm Britta',
      year: 2006,
      date: 'November 2006',
      location: 'Valhall field centre, southern Norwegian North Sea',
      lat: 56.25,
      lng: 3.35,
      location_precision: 'Approximate Valhall field-centre position; exact affected-platform coordinates and incident date are not stated in the reviewed source.',
      region: 'Europe',
      platform_type: 'Fixed offshore production, drilling and accommodation platforms',
      operator: 'Valhall license group / BP-operated field',
      weather_event_type: 'storm',
      classification: 'design',
      storm_name: 'BRITTA',
      weather_event: 'Storm Britta / Orkantief Britta - powerful North Sea storm with high waves',
      fatalities: null,
      persons_on_board: null,
      survivors: null,
      infrastructure_impact: 'Extensive damage to several Valhall field-centre platforms, including destruction of two lifeboats; the event accelerated the Valhall Redevelopment project.',
      image: {
        src: 'images/valhall-platform-field-centre-context.jpg',
        alt: 'Valhall offshore platform field centre in rough North Sea conditions.',
        caption: 'Valhall field-centre context photograph; not a photograph of the November 2006 storm damage.',
        credit: 'Offshore Technology, image URL: https://www.offshore-technology.com/wp-content/uploads/sites/20/2017/09/2-image-45.jpg. Permission status requires confirmation.'
      },
      summary: 'During Storm Britta in November 2006, a powerful wave struck the Valhall field centre and caused extensive damage to several platforms, including the destruction of two lifeboats. Seabed subsidence had reduced the air gap of the ageing installations, increasing their exposure to wave impact. The event contributed to acceleration of the Valhall Redevelopment project.',
      executive_summary: 'A large wave caused extensive damage across the Valhall field centre during Storm Britta in November 2006, including destruction of two lifeboats. The field had subsiding seabed conditions and ageing QP, PCP and DP installations whose original design-life horizon was around 2007. Subsidence reduced the platforms\' air gap and increased concern about continued operation in high waves. The event helped accelerate Valhall Redevelopment and replacement of the old process and accommodation functions.',
      what_happened: 'Valhall was discovered in the 1970s and developed with the original field-centre installations, including the quarters platform QP, process and compression platform PCP, and drilling platform DP. The original development plan, approved in 1977, anticipated production ending around 2000. By the early 2000s, improved reservoir knowledge and technology indicated a much longer field life, but the first three installations were approaching their intended design-life horizon around 2007. QP and PCP therefore required repeated approvals for continued use.\n\n' +
        'Because of the seabed subsidence, the fixed platforms settled relative to the sea surface and their available air gap reduced. The field history records that the installations sometimes had to be evacuated when high waves threatened during bad weather.\n\n' +
        'Because of the seabed subsidence, the fixed platforms settled relative to the sea surface and their available air gap reduced.\n\n' +
        'During Storm Britta in November 2006, a powerful wave struck the field centre. The Norwegian Petroleum Museum\'s Valhall history records extensive damage to several platforms, including destruction of two lifeboats. The event showed how subsidence and reduced air gap increased exposure of ageing facilities to wave impact and became a direct reminder of the limits of continued operation.\n\n' +
        'The Valhall Redevelopment project, planned from the early 2000s and approved in 2007, was accelerated after the damage. Options to jack up or modernise the older platforms were considered, but the licensees selected a new combined process and accommodation platform, Valhall PH. The PH jacket was installed in 2009, topside modules followed in 2010, and the platform entered service in January 2013, replacing the main process and accommodation functions of PCP and QP.\n\n' +
        'The public source identifies the regional storm context and the broad damage outcome, but does not state which individual platforms were damaged, which lifeboats were destroyed, the exact wave measurement at Valhall, the repair scope, casualties or production downtime. Those details are not inferred here.',
      what_went_wrong: [
        'A high wave caused extensive damage across several field-centre installations, demonstrating the vulnerability of ageing facilities to severe North Sea wave loading.',
        'Two lifeboats were destroyed, reducing the redundancy of the emergency-evacuation system at the field centre.',
        'Seabed subsidence reduced the air gap beneath the ageing facilities, increasing exposure of lower structural and equipment levels to wave impact; the accessible sources do not quantify the loss.',
        'The reviewed source does not provide a component-level engineering failure sequence or identify whether design, maintenance, degradation or wave exceedance dominated each item of damage.'
      ],
      lessons_learned: [
        'Ageing and subsiding offshore installations require explicit reassessment of air gap, wave exposure, structural condition and lifesaving-appliance redundancy, supported by measured settlement and air-gap trends.',
        'Lifeboat availability should be assessed across the entire field-centre system; loss of two boats can materially change evacuation capacity even when the platforms remain standing.',
        'Severe-weather evacuation criteria should reflect the actual condition and remaining design life of each installation, not only the original design basis.',
        'Regional storm damage affecting several connected platforms should trigger integrated field redevelopment and infrastructure-replacement decisions.'
      ],
      actions: [
        'The Valhall Redevelopment project was accelerated after the November 2006 damage and the safety concerns associated with subsidence and ageing installations.',
        'The redevelopment replaced the old process and accommodation functions with a new Valhall PH platform, while retaining field continuity through staged installation and hook-up.',
        'Future asset reviews should verify platform-specific damage records, lifeboat capacity, structural condition, subsidence effects and high-wave evacuation limits.'
      ],
      metocean: {
        wave_height_hs: 'Not quantified for the Valhall field centre in the reviewed source',
        wind_speed: 'Not quantified at Valhall in the reviewed source',
        notes: 'The event occurred during Storm Britta / Orkantief Britta in November 2006. The regional Britta reviews describe a severe North Sea wave field and high waves above 15 m at some damage locations, but no Valhall-specific measurement is entered here.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the November 2006 timing, Valhall field-centre location, extensive multi-platform damage, destruction of two lifeboats and redevelopment consequence because these are stated in the Norwegian Petroleum Museum\'s Valhall industrial-history account. Moderate for the storm attribution because the page describes the event as a powerful wave in November 2006 and the reviewed Britta papers place it within the 31 October-1 November 2006 storm. Low or unverified for exact affected platforms, component damage, wave measurements, repair duration, casualties and downtime.',
      sources: [
        'Valhall industrial-history project, Norwegian version (EXTERNAL, Norwegian-language evidence): https://valhall.industriminne.no/nb/ny-valhall-prosess-og-boligplattform/',
        'Valhall industrial-history project, English version (EXTERNAL): https://valhall.industriminne.no/en/new-process-and-hotel-platform-on-valhall/',
        'Kettle (2016), Assessing Extreme Events for Energy Meteorology in Europe (EXTERNAL review): https://doi.org/10.1016/j.egypro.2016.10.033',
        'Kettle (2015), Storm Britta in 2006: offshore damage and large waves in the North Sea (EXTERNAL review): https://doi.org/10.5194/nhessd-3-5493-2015'
      ],
      references: [
        { title: 'Ny Valhall prosess- og boligplattform', type: 'Norwegian industrial-history account', publisher: 'Valhall / Norwegian Petroleum Museum', year: 2019, url: 'https://valhall.industriminne.no/nb/ny-valhall-prosess-og-boligplattform/', file: 'background files/images/New process and hotel platform on Valhall - Valhall.html', notes: 'Primary local evidence for extensive damage to several platforms and destruction of two lifeboats after a powerful wave in November 2006.' },
        { title: 'New process and hotel platform on Valhall', type: 'Industrial-history account', publisher: 'Valhall / Norwegian Petroleum Museum', year: 2019, url: 'https://valhall.industriminne.no/en/new-process-and-hotel-platform-on-valhall/', file: 'background files/images/New process and hotel platform on Valhall - Valhall.html' },
        { title: 'Assessing Extreme Events for Energy Meteorology in Europe', type: 'Energy-meteorology review article', publisher: 'Energy Procedia / Elsevier', year: 2016, url: 'https://doi.org/10.1016/j.egypro.2016.10.033', file: 'background files/Assessing_Extreme_Events_for_Energy_Meteorology_Me.pdf' },
        { title: 'Storm Britta in 2006: offshore damage and large waves in the North Sea', type: 'Natural-hazards review article', publisher: 'Natural Hazards and Earth System Sciences Discussion', year: 2015, url: 'https://doi.org/10.5194/nhessd-3-5493-2015', file: 'background files/Review_Article_Storm_Britta_in_2006_offshore_damag.pdf' },
      ]
    },

    {
      id: 'cyclone-olivia-1996-northwest-shelf',
      name: 'Severe Tropical Cyclone Olivia - Northwest Shelf Infrastructure Damage',
      year: 1996,
      date: '5-12 April 1996 (Pilbara crossing: 10 April)',
      location: 'Northwest Shelf, Western Australia (Barrow Island, Varanus Island and Campbell monopod area)',
      lat: -20.55,
      lng: 115.45,
      region: 'Australia',
      platform_type: 'Offshore oil and gas facilities, shallow-water monopod and subsea pipelines',
      operator: 'Multiple Northwest Shelf operators; Campbell monopod operator not identified in reviewed sources',
      weather_event_type: 'cyclone',
      classification: 'design',
      storm_sid: '1996095S09133',
      storm_name: 'OLIVIA',
      weather_event: 'Severe Tropical Cyclone Olivia - Category 4; WMO-recognized world tropical-cyclone gust record of 408 km/h at Barrow Island; approximately 925 hPa and 195 km/h estimated 10-minute winds',
      fatalities: 0,
      injuries: 10,
      infrastructure_impact: 'Millions of dollars of offshore oil and gas damage; waves damaged the Campbell monopod, currents shifted shallow-water pipelines and pipeline anchors were damaged without reported line rupture',
      severity_override: 'major',
      image: {
        src: 'images/cyclone-olivia-1996-noaa-satellite.png',
        alt: 'Satellite image of Severe Tropical Cyclone Olivia near peak intensity on 10 April 1996.',
        caption: 'Severe Tropical Cyclone Olivia near peak intensity on 10 April 1996. The satellite image shows the storm, not the Campbell monopod damage.',
        credit: 'NOAA/NCDC via Wikimedia Commons, public domain.'
      },
      summary: 'Severe Tropical Cyclone Olivia crossed the Pilbara coast near Mardie on 10 April 1996 after passing through the southern Northwest Shelf. It produced a verified 408 km/h Barrow Island gust - the world record for a tropical-cyclone gust - damaged offshore facilities and the Campbell monopod in about 40 m of water, and shifted shallow-water pipelines and damaged their anchors without a line rupture. With Cyclone Orson, it drove a reassessment of Northwest Shelf metocean design.',
      executive_summary: 'Cyclone Olivia caused major Northwest Shelf oil and gas damage in April 1996. The WMO-recognized 408 km/h Barrow Island measurement is the world record for the highest wind gust recorded in a tropical cyclone. It was a short-duration local gust, not the storm\'s sustained Category 4 intensity or a claim about the highest wind in every weather category. Waves damaged the Campbell monopod, currents shifted shallow-water pipelines and extreme winds damaged Barrow and Varanus Island facilities.',
      what_happened: 'Olivia developed north of Darwin, reached cyclone intensity on 5 April and intensified while moving toward Western Australia. It reached peak intensity late on 9 April and crossed the Pilbara coast near Mardie at approximately 2030 WST on 10 April. The Bureau assessed the cyclone as Category 4, with an estimated minimum pressure near 925 hPa and maximum 10-minute sustained winds near 195 km/h.\n\nBarrow Island recorded a 408 km/h gust, Varanus Island 267 km/h and Mardie 257 km/h. The Bureau and later verification work treat the Barrow reading as reliable, but it was a short-duration local gust and is not representative of the cyclone\'s mean intensity.\n\nOlivia affected the southern Northwest Shelf oil and gas region, where the OTC engineering assessment identified approximately 24 marine production facilities. Waves were believed responsible for damage to the Campbell monopod in approximately 40 m water depth northeast of Barrow Island. Strong currents shifted existing shallow-water pipelines east of Barrow Island, and pipeline anchors were damaged although no line rupture is reported in the reviewed summary. Barrow and Varanus Island facilities also suffered extensive wind damage, and offshore production was shut down during the storm.\n\nOnshore, the towns of Mardie and Pannawonica were extensively damaged. The wider event caused approximately 10 reported injuries, including one injury in Pannawonica from flying glass; the reviewed sources identify no fatalities.',
      what_went_wrong: [
        'Offshore design and integrity assessment had to account for combined wind, wave, current and storm-surge loading across a distributed field rather than one platform location.',
        'The Campbell monopod and shallow-water pipelines were exposed to different dominant mechanisms: wave loading at the monopod and current-driven seabed or pipeline movement east of Barrow Island.',
        'Pipeline anchors and supporting subsea infrastructure could be damaged even where the pipeline itself did not rupture.',
        'The extreme Barrow Island gust illustrates the difficulty of representing short-duration eyewall gusts using cyclone-scale mean-wind categories alone.'
      ],
      lessons_learned: [
        'Severe Tropical Cyclone Olivia crossed the Northwest Shelf in 1996 and produced the world-record tropical-cyclone wind gust - 408 km/h at Barrow Island - damaging offshore facilities, the Campbell monopod and shallow-water pipelines (shifted by currents, anchors damaged) without a line rupture. Assess offshore fields as connected systems against coupled wind, wave, current and surge, and remember a short eyewall gust can far exceed the storm\'s sustained category.',
        'Use coupled site-specific wind, wave, current and storm-surge modelling for shallow-water structures and pipeline stability.',
        'Treat pipeline movement, anchor damage and seabed mobility as integrity outcomes even when no loss of containment occurs.',
        'Retain high-frequency wind measurements and document sensor exposure, gust duration and averaging period before comparing observations with cyclone design categories.',
      ],
      actions: [
        'For future projects, define inspection and stabilisation triggers for shallow-water pipelines and anchors after severe cyclone current and wave loading.',
        'Include distributed-facility shutdown, restart and subsea integrity verification in cyclone response plans.',
        'Use Olivia observations and Northwest Shelf buoy/platform records to validate regional wind, wave and current models.'
      ],
      metocean: {
        wave_height_hs: 'Offshore wave measurements and modelling are documented in the Buchan, Black and Cohen OTC assessment; a single verified facility-point Hs is not stated in the reviewed abstract.',
        wind_speed: 'Estimated 10-minute maximum near 195 km/h; Barrow Island gust 408 km/h, Varanus Island 267 km/h and Mardie 257 km/h.',
        sea_temp: 'Not reported in the reviewed sources',
        notes: 'The OTC assessment identifies central pressure as low as 925 hPa, forward speed up to 8 m/s and an elongated storm shape contributing to long fetches. Barrow\'s 408 km/h value is a short-duration local gust, not sustained cyclone intensity.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for storm timing, Category 4 assessment, pressure, Bureau wind observations and the verified Barrow Island gust. The 408 km/h value is the recognized world record for the highest wind gust in a tropical cyclone; it is not a sustained-wind record and is not presented as the highest wind across all weather phenomena. High for regional offshore consequences described in the Buchan, Black and Cohen OTC abstract. Moderate for exact Campbell failure mechanism, affected pipeline identities, operators and facility-specific wave/current values because the full technical paper was not available in this research pass.',
      references: [
        { title: 'Severe Tropical Cyclone Olivia - Bureau history page', type: 'Meteorological record', publisher: 'Australian Bureau of Meteorology', url: 'https://www.bom.gov.au/cyclone/history/olivia.shtml' },
        { title: 'The Impact of Tropical Cyclone Olivia on Australia\'s Northwest Shelf', type: 'Offshore engineering paper', publisher: 'S. J. Buchan, P. G. Black and R. L. Cohen', year: 1999, url: 'https://onepetro.org/OTCONF/proceedings/99OTC/All-99OTC/OTC-10791-MS/39520' },
        { title: 'Documentation and verification of the world extreme wind gust record: 113.3 m/s on Barrow Island during Tropical Cyclone Olivia', type: 'Peer-reviewed meteorological paper', publisher: 'Courtney et al.', year: 2012, url: 'https://www.bom.gov.au/jshess/docs/2012/courtney_hres.pdf' },
        { title: 'WMO World Weather and Climate Extremes Archive', type: 'International extremes archive', publisher: 'World Meteorological Organization', url: 'https://wmo.int/site/world-weather-and-climate-extremes-archive' }
      ]
    },

    /* ----------------------------------------------------------------------
       83. VLCC ARAFURA Fatal Wave Strike - Cape Horn - 2021
    ---------------------------------------------------------------------- */
    {
      id: 'arafura-fatal-wave-cape-horn-2021',
      name: 'VLCC ARAFURA Fatal Wave Strike off Cape Horn',
      year: 2021,
      date: '11 September 2021',
      location: 'West of Cape Horn, approximately 50 nm west-northwest of Islas Diego Ramirez, Chile',
      lat: -56.17,
      lng: -70.0733333,
      region: 'South America',
      platform_type: 'Very large crude carrier (VLCC)',
      operator: 'Euronav NV (owner); Northern Marine Management (manager)',
      weather_event_type: 'rogue_wave',
      classification: 'maritime',
      weather_event: 'Gale-force north-westerly wind, combined wind sea and long south-westerly swell; fatal wave probably meeting a freak-wave definition, with impact height undetermined',
      fatalities: 2,
      persons_on_board: 23,
      survivors: 21,
      image: {
        src: 'images/arafura-2021-weather-conditions-figure-18.jpeg',
        alt: 'Forward view over the deck of VLCC ARAFURA in rough seas west of Cape Horn at 11:20 on 11 September 2021.',
        caption: 'Febima Figure 18: onboard video frame recorded at 11:20, 87 minutes after the casualty, showing the continuing weather conditions. It does not depict the impact wave.',
        credit: 'Federal Bureau for the Investigation of Maritime Accidents (Febima), Report 2021/004987, Figure 18. Publication reuse terms require Febima attribution; figure-specific third-party rights are not identified.'
      },
      infrastructure_impact: 'Mooring-winch drum covers were washed away and a covered 1.5-tonne chafing chain was displaced; the report does not identify loss of vessel integrity or pollution',
      summary: 'At 09:53 on 11 September 2021, while VLCC ARAFURA was west of Cape Horn in gale-force wind and a long combined swell, a wave came over the bow as the Chief Officer and Bosun checked the port anchor lashing. Both were swept across the forecastle into deck equipment and later died of their injuries. Belgium\'s marine casualty bureau concluded the wave probably met a freak-wave definition, and faulted limited onboard trauma capability and interrupted hospital-to-shore medical communications.',
      executive_summary: 'A recurrent bosun-store bilge alarm led to an authorized daylight inspection while ARAFURA rounded Cape Horn in gale conditions. The store was dry, but the task expanded to checking a nearby loose anchor lashing. At 09:53, a much larger wave crossed the forecastle and swept the Chief Officer and Bosun into deck equipment; both later died. Febima described the wave as probably meeting a freak-wave definition while stressing that its height was unknown and that waves up to about 11.5 m were statistically expectable from the reconstructed sea state.',
      what_happened: 'ARAFURA was carrying crude oil from Porto do Acu, Brazil, to Long Beach, United States, via Cape Horn. Weather routing had forecast gale-force north-westerly winds and 6-7 m significant seas for 11 September. The vessel reduced speed, used hand steering and completed its heavy-weather checklist. Around the casualty period, the bridge observed force 6-7 WNW wind, rough sea and a long, heavy swell; spray crossed the starboard bow, but no waves had been observed coming onto the forecastle deck.\n\n' +
        'A forward bosun-store bilge alarm had activated intermittently. Because the system did not record alarm history and the store could not be inspected or drained remotely, the Chief Officer and Master agreed to check it in daylight. At 09:41, after turning about 30 degrees to starboard to create lee on the port-side walkway, the Master authorized the Chief Officer and Bosun to proceed forward. They reported the store dry and successfully tested both bilge alarms. The Master then asked them to make a quick check of the nearby port anchor lashing.\n\n' +
        'At 09:52, the Chief Officer reported that the lashing appeared loose and that they would tighten it. At 09:53, the Master saw a wave approaching the starboard bow and warned them. Seconds later, a large volume of water crossed the bulwark. The Bosun was found about 15 m from the lashing and the Chief Officer about 41 m away; mooring-drum covers had been washed away and a covered 1.5-tonne chafing chain displaced.\n\n' +
        'The crew recovered both injured men to the ship\'s hospital and obtained remote medical advice. Helicopter evacuation was unavailable because weather conditions were too severe, while naval vessels were many hours away. The Chief Officer was declared dead at 13:00 and the Bosun at 17:00. The official investigation attributed both deaths to severe traumatic injuries from being swept into deck equipment.',
      what_went_wrong: [
        'The observed sea gave false reassurance: reconstructed significant wave height was about 5.5-5.75 m and the forecastle freeboard was 9.9 m, so only a small minority of waves appeared able to reach the working area.',
        'The impact wave was significantly higher than the waves observed from the bridge and probably met a freak-wave definition, but its height was not measured and no operational forecast or onboard detection tool could predict it.',
        'The bilge-alarm system showed only current activation, without a time-and-duration history that could support diagnosis of the intermittent alarm from a safe location.',
        'The bosun store had no remote camera and its bilge valves required manual operation, making physical access necessary if flooding had been real.',
        'The inspection expanded to tightening the nearby anchor lashing, placing both crew members on the exposed forecastle when the wave arrived.',
        'Severe injuries exceeded the diagnostic and treatment capability normally available aboard, helicopter evacuation was prevented by weather, and the portable satellite phone could not communicate from the ship\'s hospital.'
      ],
      lessons_learned: [
        'Treat significant wave height as a statistical descriptor, not a maximum: individual waves approaching twice the significant height may occur even when the deck has remained mostly dry.',
        'Keep exposed-deck access decisions task-specific. A sheltered route or compartment inspection does not establish that adjacent forecastle work is safe.',
        'Provide alarm histories and remote inspection or drainage capability for forward spaces so intermittent alarms do not force personnel into exposed areas during heavy weather.',
        'Heavy-weather permits should address emergent work, task expansion, wave direction, freeboard exceedance and a clear abort trigger before personnel leave shelter.',
        'Test medical communications from the ship\'s hospital and plan for prolonged onboard casualty care where aviation evacuation can be unavailable.'
      ],
      actions: [
        'Gale Force added explanations of significant sea, maximum waves, wind waves, swell and freak waves to the forecast description sent to vessels, and considered adding a freak-wave likelihood index.',
        'Northern Marine Management required ship-specific heavy-weather risk assessments and updated its generic assessment for hazards and consequences identified by the accident.',
        'The manager revised heavy-weather procedures to require a permit to work for necessary deck work in adverse conditions and to consider placing weather and sea on the stern by altering course.',
        'The manager strengthened emergent-work communication and training, incorporated the event into safety-learning programmes, and added heavy-weather precautions to bridge-resource and safety training.',
        'The manager began reviews of bosun-store bilge-valve configuration, hospital satellite communications and CCTV monitoring for bosun stores on existing and new vessels.'
      ],
      metocean: {
        wind_speed: 'Gale-force NW wind in the post-event analysis; bridge observations recorded force 6-7 WNW wind, while VDR review noted 30-35 knots around 07:57',
        wave_height_hs: 'Forecast 6-7 m; observed about 5.6 m; post-event reconstruction 5.5-5.75 m, with 3.75 m wind waves and 4 m SW swell at 13 s',
        notes: 'The post-event maximum individual wave estimate was 10.5 m and the forecastle freeboard was 9.9 m. Febima states that the impact-wave height could not be determined, that waves up to about 11.5 m were expectable from the reconstructed significant wave height, and that the wave probably met a freak-wave definition. The Benjamin-Feir index was 0.1, indicating no high forecast risk of freak waves.'
      },
      source_classification: 'external',
      shell_internal_only: false,
      data_quality: 'High for the time, coordinates, people aboard, fatalities, sequence, metocean reconstruction, formal cause, contributing factors and actions because these come directly from Febima Report 2021/004987. The impact-wave height was not measured; “probably meeting the definition of a freak wave” is the bureau\'s qualified conclusion, not a confirmed wave-height observation. Figure 18 was recorded at 11:20, 87 minutes after the casualty, and is weather context rather than an image of the impact wave. The official PDF does not print a publication date; its Belgian government hosting path is dated 2023 and its embedded modification timestamp is 1 June 2022, so no publication year is asserted in the reference metadata.',
      sources: [
        'Federal Bureau for the Investigation of Maritime Accidents Report 2021/004987 (EXTERNAL, controlling official investigation)',
        'The Maritime Executive report reproducing the manager\'s contemporaneous casualty statement (EXTERNAL, secondary corroboration)'
      ],
      references: [
        { title: 'Report on the investigation into a fatal accident on board VLCC ARAFURA near Cape Horn with the decease of two crew members on September 11th, 2021 (2021/004987)', type: 'Official marine casualty investigation report', publisher: 'Federal Bureau for the Investigation of Maritime Accidents (Febima), Belgium', url: 'https://mobilit.belgium.be/sites/default/files/documents/publications/2023/Final%20report%20VLCC%20ARAFURA%2011%20september%202021.pdf', file: 'background files/Final report VLCC ARAFURA 11 september 2021.pdf' },
        { title: 'VLCC\'s Chief Mate and Bosun Killed by Wave off Cape Horn', type: 'Contemporaneous news report quoting vessel manager', publisher: 'The Maritime Executive', year: 2021, url: 'https://maritime-executive.com/article/vlcc-s-chief-mate-and-bosun-killed-by-wave-off-cape-horn' }
      ]
    }

  ] /* end incidents array */
}; /* end INCIDENTS_DATA */





