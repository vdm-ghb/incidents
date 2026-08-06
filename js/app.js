/* ═══════════════════════════════════════════════════
   Offshore Incidents — Lessons Learned Database
   v4.0 — 58 incidents (51 external + 7 Shell internal),
           three-way dataset toggle (Full / Shell / External)
   ═════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var CLASSIFICATION_LABELS = { drilling:'Drilling', maritime:'Maritime / Tow', aviation:'Aviation', onshore:'Onshore Operations', coastal:'Port / Coastal', design:'Basis of Design', pipeline:'Pipeline', survey:'Survey', decommissioning:'Decommissioning' };
  function classKey(incident) { return incident.classification || 'other'; }
  function classColor(incident) { return 'cls-' + classKey(incident); }
  function classLabel(incident) { return CLASSIFICATION_LABELS[classKey(incident)] || classKey(incident); }
  function fatalityText(incident) {
    if (incident.fatalities > 0) return incident.fatalities + (incident.fatalities===1?' fatality':' fatalities');
    if (incident.infrastructure_impact) { var s=incident.infrastructure_impact; return s.length>60?s.substring(0,58)+'…':s; }
    return 'Near-miss / 0 fatalities';
  }

  var CONSEQUENCE_RULES = {
    schedule: /\b(delay|delays|delayed|downtime|shutdown|shut down|outage|schedule|reschedul|reinstatement|resume|resuming|out of service)\b/i,
    financial: /\b(us\$|usd|\$\d|million|billion|financial|cost|costs|loss|losses|economic)\b/i,
    asset_loss: /\b(capsize|capsized|sank|sunk|destroyed|destruction|total loss|constructive total loss|toppled|collapse|collapsed|grounded|grounding|drifted|lost\s+(its|the)\s+(mooring|anchor|tow)|lost\s+(lmrp|riser|vessel|rig|platform|derrick))\b/i,
    infrastructure: /\b(damage|damaged|failure|failures|rupture|ruptured|collision|flooding|spill|fire|explosion|structural|mooring)\b/i
  };

  function incidentConsequenceTags(incident) {
    if (incident._consequenceTags) return incident._consequenceTags;
    if (Array.isArray(incident.consequence_tags) && incident.consequence_tags.length) {
      incident._consequenceTags = incident.consequence_tags.slice();
      return incident._consequenceTags;
    }

    var tags = [];
    var text = [incident.summary, incident.executive_summary, incident.what_happened, incident.infrastructure_impact, incident.environmental_impact]
      .filter(Boolean)
      .join(' ');

    var injuries = incident.injuries;
    var hasSevereInjury = (typeof injuries === 'number' && injuries > 0) || (typeof injuries === 'string' && injuries.trim() && injuries.trim() !== '0');
    if ((incident.fatalities || 0) > 0 || hasSevereInjury) tags.push('human_harm');

    if (incident.infrastructure_impact || CONSEQUENCE_RULES.infrastructure.test(text)) tags.push('infrastructure');
    if (incident.environmental_impact) tags.push('environment');
    if (CONSEQUENCE_RULES.schedule.test(text)) tags.push('schedule');
    if (CONSEQUENCE_RULES.financial.test(text)) tags.push('financial');
    if (CONSEQUENCE_RULES.asset_loss.test(text)) tags.push('asset_loss');

    incident._consequenceTags = tags;
    return tags;
  }

  var EVENT_TYPE_LABELS = { cyclone:'Cyclone / Hurricane / Typhoon', storm:'Severe (Extra-tropical) Storm', squall:'Squall / Thunderstorm', lightning:'Lightning', rogue_wave:'Extreme / Rogue Wave', internal_wave:'Internal Wave / Soliton', current:'Ocean / Turbidity Current / Tidal', tsunami:'Tsunami / Meteo-tsunami', climate:'Climate / Ambient Extremes', equipment:'Metocean Equipment' };
  var EVENT_TYPE_LETTERS = { cyclone:'C', storm:'S', squall:'Q', lightning:'L', rogue_wave:'R', internal_wave:'I', current:'U', tsunami:'T', climate:'K', equipment:'E' };

  /* Region bounding boxes [SW, NE] */
  var REGION_BOUNDS = {
    'Africa':                [[  -5.0, -20.0],[ 25.0,  50.0]],
    'Asia':                  [[  -5.0,   60.0],[ 50.0, 145.0]],
    'Australia':             [[-45.0,  110.0],[ -9.0, 155.0]],
    'Europe':                [[ 48.0,  -15.0],[ 66.0,  15.0]],
    'Middle East':           [[ 15.0,   45.0],[ 35.0,  65.0]],
    'North America':         [[ 18.0, -175.0],[ 70.0, -45.0]],
    'Russia and Central Asia':[[ 35.0,  45.0],[ 72.0, 175.0]],
    'South America':         [[-42.0,  -82.0],[ 12.0, -30.0]]
  };

  var FALLBACK_MAP_VIEW = { center: [25,10], zoom: 1 };
  var STARTUP_MAP_VIEW = { center: [27.277785806017697, 56.037581055189605], zoom: 3 };
  var homeMapView = { center: STARTUP_MAP_VIEW.center.slice(), zoom: STARTUP_MAP_VIEW.zoom };

  var map = L.map('map', { center:STARTUP_MAP_VIEW.center, zoom:STARTUP_MAP_VIEW.zoom, minZoom:1, maxZoom:14, zoomControl:true, preferCanvas:true, worldCopyJump:true });
  L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution:'Tiles &copy; <a href="https://www.esri.com/">Esri</a>', maxZoom:13 }).addTo(map);
  L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}', {
    attribution:'', maxZoom:13, opacity:0.7 }).addTo(map);

  var allIncidents=[], activeMarkers=[], activeFilters={type:'all',region:'all',classification:'all',consequence:'all'};
  var stormTracksBySid = {};
  var activeTrackLayer = null;
  var activeTrackLabel = null;
  var lockedTrackSid = null;
  /* Dataset view: 'full' | 'shell' | 'external' — starts on full */
  var DATASET_VIEWS = ['full','shell','external'];
  var DATASET_LABELS = { full:'Full Dataset', shell:'Shell Internal', external:'External Only' };
  var datasetView = 'full';

  // Match Hurricane Tracker intensity color scheme from ShellDigitalWeather bundle.
  var STORM_CAT_COLORS = {
    '-5': '#888888', // Unknown
    '-4': '#bdc3c7', // Post-tropical
    '-3': '#95a5a6', // Misc disturbance
    '-2': '#7fb3be', // Subtropical
    '-1': '#3498db', // Tropical Depression
    '0': '#f1c40f',  // Tropical Storm
    '1': '#f39c12',  // Category 1
    '2': '#e67e22',  // Category 2
    '3': '#e74c3c',  // Category 3
    '4': '#c0392b',  // Category 4
    '5': '#8e44ad'   // Category 5
  };

  function normalizeLon(lon) {
    if (lon > 180) return lon - 360;
    if (lon < -180) return lon + 360;
    return lon;
  }

  function clearActiveTrack() {
    if (!activeTrackLayer) return;
    map.removeLayer(activeTrackLayer);
    activeTrackLayer = null;
  }

  function clearActiveTrackLabel() {
    if (!activeTrackLabel) return;
    map.removeLayer(activeTrackLabel);
    activeTrackLabel = null;
  }

  function categoryFromWind(windKt) {
    if (typeof windKt !== 'number' || isNaN(windKt)) return -5;
    if (windKt < 34) return -1;
    if (windKt <= 63) return 0;
    if (windKt <= 82) return 1;
    if (windKt <= 95) return 2;
    if (windKt <= 112) return 3;
    if (windKt <= 136) return 4;
    return 5;
  }

  function categoryColor(category) {
    var key = String(category);
    return STORM_CAT_COLORS[key] || STORM_CAT_COLORS['-5'];
  }

  function closestTrackPoint(points, incident) {
    if (!points || !points.length || !incident) return null;
    var best = null;
    var bestD = Infinity;
    points.forEach(function(pt) {
      var dLat = pt.lat - incident.lat;
      var dLon = pt.lon - incident.lng;
      var d = dLat * dLat + dLon * dLon;
      if (d < bestD) {
        bestD = d;
        best = pt;
      }
    });
    return best;
  }

  function drawTrackLabel(incident, trackData) {
    clearActiveTrackLabel();
    if (!incident || !trackData || !trackData.points || !trackData.points.length) return;
    var label = incident.storm_name || incident.storm_label || '';
    if (!label) return;
    var nearest = closestTrackPoint(trackData.points, incident);
    if (!nearest) return;

    activeTrackLabel = L.marker([nearest.lat, nearest.lon], {
      interactive: false,
      keyboard: false,
      icon: L.divIcon({
        className: 'storm-track-label-wrap',
        html: '<div style="transform:translate(-118%,-50%);background:rgba(13,20,33,0.88);color:#fff;font-size:10px;font-weight:700;letter-spacing:0.02em;padding:3px 6px;border-radius:10px;border:1px solid rgba(255,255,255,0.28);white-space:nowrap;">'+esc(label)+'</div>',
        iconSize: null
      })
    }).addTo(map);
  }

  function drawTrackBySid(sid, incident, isLocked) {
    clearActiveTrack();
    clearActiveTrackLabel();
    var trackData = stormTracksBySid[sid];
    if (!trackData || !trackData.points || trackData.points.length < 2) return false;

    var group = L.layerGroup();
    var points = trackData.points;
    for (var i = 1; i < points.length; i++) {
      var prev = points[i - 1];
      var cur = points[i];
      var segColor = categoryColor(cur.category);
      L.polyline([[prev.lat, prev.lon], [cur.lat, cur.lon]], {
        color: segColor,
        weight: isLocked ? 4 : 3,
        opacity: isLocked ? 0.95 : 0.8,
        lineCap: 'round',
        lineJoin: 'round'
      }).addTo(group);
    }

    points.forEach(function(pt) {
      var dotColor = categoryColor(pt.category);
      var dot = L.circleMarker([pt.lat, pt.lon], {
        radius: isLocked ? 4 : 3,
        weight: 1,
        color: '#ffffff',
        fillColor: dotColor,
        fillOpacity: isLocked ? 0.95 : 0.85,
        opacity: 0.95
      });
      dot.bindTooltip((pt.time || 'Unknown time') + (typeof pt.wind_kt === 'number' ? (' | ' + Math.round(pt.wind_kt) + ' kt') : ''), {
        direction: 'top',
        opacity: 0.95,
        sticky: true
      });
      dot.addTo(group);
    });

    activeTrackLayer = group.addTo(map);
    if (activeTrackLayer && typeof activeTrackLayer.eachLayer === 'function') {
      activeTrackLayer.eachLayer(function(layer) {
        if (layer && typeof layer.bringToFront === 'function') layer.bringToFront();
      });
    }
    drawTrackLabel(incident, trackData);
    return true;
  }

  function restoreLockedTrack() {
    if (lockedTrackSid) {
      var lockedIncident = allIncidents.find(function(inc) { return inc.storm_sid === lockedTrackSid; }) || null;
      drawTrackBySid(lockedTrackSid, lockedIncident, true);
      return;
    }
    clearActiveTrack();
    clearActiveTrackLabel();
  }

  function showIncidentTrack(incident, lockTrack) {
    if (!incident || !incident.storm_sid) {
      if (lockTrack) lockedTrackSid = null;
      if (!lockedTrackSid) {
        clearActiveTrack();
        clearActiveTrackLabel();
      }
      return;
    }
    if (lockTrack) lockedTrackSid = incident.storm_sid;
    if (!drawTrackBySid(incident.storm_sid, incident, !!lockTrack) && lockTrack) {
      lockedTrackSid = null;
      clearActiveTrack();
      clearActiveTrackLabel();
    }
  }

  function loadStormTracks() {
    function ingestStormGeo(geo) {
      if (!geo || !geo.features || !Array.isArray(geo.features)) return;
      geo.features.forEach(function(feature) {
        if (!feature || !feature.properties || !feature.geometry) return;
        var sid = feature.properties.sid;
        var coords = feature.geometry.coordinates;
        if (!sid || !Array.isArray(coords) || !coords.length) return;
        var points = [];
        if (Array.isArray(feature.properties.track_points) && feature.properties.track_points.length) {
          points = feature.properties.track_points.map(function(tp) {
            var cat = (typeof tp.category === 'number') ? tp.category : categoryFromWind(tp.wind_kt);
            return {
              time: tp.time || '',
              lat: tp.lat,
              lon: normalizeLon(tp.lon),
              wind_kt: tp.wind_kt,
              category: cat
            };
          });
        } else {
          points = coords.map(function(pt) {
            return { time: '', lat: pt[1], lon: normalizeLon(pt[0]), wind_kt: null, category: -5 };
          });
        }
        stormTracksBySid[sid] = {
          sid: sid,
          points: points
        };
      });
      // Keep locked track visible after reloads of the storm-track file.
      if (lockedTrackSid) {
        var lockedIncident = allIncidents.find(function(inc) { return inc.storm_sid === lockedTrackSid; }) || null;
        drawTrackBySid(lockedTrackSid, lockedIncident, true);
      }
    }

    if (window.STORM_TRACKS_DATA) {
      ingestStormGeo(window.STORM_TRACKS_DATA);
      return;
    }

    fetch('data/storm_tracks.geojson').then(function(res) {
      if (!res.ok) throw new Error('Failed storm track fetch: ' + res.status);
      return res.json();
    }).then(function(geo) {
      ingestStormGeo(geo);
    }).catch(function(err) {
      console.warn('Storm tracks were not loaded. Incident overlays disabled.', err);
    });
  }

  function loadData() {
    if (!window.INCIDENTS_DATA) { console.error('INCIDENTS_DATA not found'); return; }
    allIncidents = window.INCIDENTS_DATA.incidents;
    homeMapView = getStartupMapView();
    map.setView(homeMapView.center, homeMapView.zoom);
    updateDatasetButton();
    renderMarkers();
    updateStats();
  }

  function getStartupMapView() {
    if (!Array.isArray(STARTUP_MAP_VIEW.center) || STARTUP_MAP_VIEW.center.length !== 2) {
      return { center: FALLBACK_MAP_VIEW.center.slice(), zoom: FALLBACK_MAP_VIEW.zoom };
    }
    return { center: STARTUP_MAP_VIEW.center.slice(), zoom: STARTUP_MAP_VIEW.zoom };
  }

  function isShellInternal(inc) {
    return inc.shell_internal_only === true || inc.source_classification === 'internal';
  }

  function getIncidents(view) {
    // 'full'     -> all incidents
    // 'shell'    -> Shell internal-only incidents
    // 'external' -> externally-sourced / public incidents (incl. unclassified baseline)
    if (view === 'shell')    return allIncidents.filter(isShellInternal);
    if (view === 'external') return allIncidents.filter(function(inc){ return !isShellInternal(inc); });
    return allIncidents; // full
  }

  function updateDatasetButton() {
    var btn = document.getElementById('dataset-toggle-btn');
    if (!btn) return;
    var count = getIncidents(datasetView).length;
    btn.setAttribute('data-view', datasetView);
    var valueEl = btn.querySelector('.stat-value');
    var labelEl = btn.querySelector('.stat-label');
    if (valueEl) valueEl.textContent = DATASET_LABELS[datasetView];
    if (labelEl) labelEl.textContent = count + ' incidents';
  }

  function createMarker(incident) {
    if (!incident.lat || !incident.lng) return null; // Skip incidents with null coordinates
    var clsClass=classColor(incident), letter=EVENT_TYPE_LETTERS[incident.weather_event_type]||'?';
    var icon=L.divIcon({ className:'', html:'<div class="incident-marker '+clsClass+'">'+letter+'</div>', iconSize:[32,32], iconAnchor:[16,16], tooltipAnchor:[18,0] });
    var marker=L.marker([incident.lat,incident.lng],{icon:icon,riseOnHover:true,title:incident.name,alt:incident.name});
    var tooltipImage=incident.image&&incident.image.src?'<img class="tooltip-image" src="'+esc(incident.image.src)+'" alt="" loading="lazy">':'';
    var summaryText=incident.summary||incident.executive_summary||'';
    var ttHTML='<div class="tooltip-name">'+esc(incident.name)+' ('+incident.year+')</div><div class="tooltip-meta">'+esc(shortLoc(incident.location,55))+'</div><span class="tooltip-fatal '+clsClass+'">'+esc(fatalityText(incident))+'</span>'+(summaryText?'<div class="tooltip-summary">'+esc(summaryText)+'</div>':'')+tooltipImage;
    marker.bindTooltip(ttHTML,{permanent:false,direction:'right',opacity:1});
    marker.on('mouseover',function(){ showIncidentTrack(incident, false); });
    marker.on('mouseout',function(){ restoreLockedTrack(); });
    marker.on('click',function(){ openModal(incident); });
    return marker;
  }

  function createWrappedMarkers(incident) {
    var marker = createMarker(incident);
    if (!marker) return [];

    var markers = [marker];
    [-360, 360].forEach(function(offset) {
      var wrapped = createMarker(Object.assign({}, incident, { lng: incident.lng + offset }));
      if (wrapped) markers.push(wrapped);
    });
    return markers;
  }

  function renderMarkers() {
    activeMarkers.forEach(function(m){ map.removeLayer(m); });
    activeMarkers=[];
    var displayIncidents = getIncidents(datasetView); // Apply dataset view first
    var filtered=displayIncidents.filter(function(inc){
      if (activeFilters.type!=='all' && inc.weather_event_type!==activeFilters.type) return false;
      if (activeFilters.classification!=='all' && classKey(inc)!==activeFilters.classification) return false;
      if (activeFilters.consequence!=='all' && incidentConsequenceTags(inc).indexOf(activeFilters.consequence)===-1) return false;
      return true;
    });
    filtered.forEach(function(inc){
      createWrappedMarkers(inc).forEach(function(marker) {
        marker.addTo(map);
        activeMarkers.push(marker);
      });
    });
    updateStats(filtered);
    filterTableRows();
  }

  function updateStats(filtered) {
    document.getElementById('stat-incidents').textContent=(filtered||allIncidents).length;
  }

  document.getElementById('filter-type').addEventListener('change',function(e){ activeFilters.type=e.target.value; renderMarkers(); });
  document.getElementById('filter-classification').addEventListener('change',function(e){ activeFilters.classification=e.target.value; renderMarkers(); });
  document.getElementById('filter-consequence').addEventListener('change',function(e){ activeFilters.consequence=e.target.value; renderMarkers(); });
  document.getElementById('filter-region').addEventListener('change',function(e){
    activeFilters.region=e.target.value;
    renderMarkers();
    if (e.target.value!=='all' && REGION_BOUNDS[e.target.value]) {
      map.fitBounds(REGION_BOUNDS[e.target.value],{padding:[40,40],maxZoom:8});
    } else { map.setView(homeMapView.center, homeMapView.zoom); }
  });
  document.getElementById('filter-reset').addEventListener('click',function(){
    activeFilters={type:'all',region:'all',classification:'all',consequence:'all'};
    document.getElementById('filter-type').value='all';
    document.getElementById('filter-region').value='all';
    document.getElementById('filter-classification').value='all';
    document.getElementById('filter-consequence').value='all';
    renderMarkers();
    map.setView(homeMapView.center, homeMapView.zoom);
  });

  /* ── Dataset toggle: cycles Full -> Shell -> External ── */
  var datasetToggleBtn = document.getElementById('dataset-toggle-btn');
  if (datasetToggleBtn) {
    datasetToggleBtn.addEventListener('click', function() {
      var idx = DATASET_VIEWS.indexOf(datasetView);
      datasetView = DATASET_VIEWS[(idx + 1) % DATASET_VIEWS.length];
      updateDatasetButton();
      renderMarkers();
    });
  }

  /* ── Legend collapse ── */
  var legend=document.getElementById('legend');
  if (window.innerWidth>640) legend.classList.add('open');
  document.getElementById('legend-header').addEventListener('click',function(){ legend.classList.toggle('open'); });

  /* ── Modal ── */
  var modalOverlay=document.getElementById('modal-overlay'), modalContent=document.getElementById('modal-content'), modalClose=document.getElementById('modal-close');
  var tableOverlay=document.getElementById('table-overlay');
  var imageLightbox=document.getElementById('image-lightbox'), imageLightboxImage=document.getElementById('image-lightbox-image'), imageLightboxCaption=document.getElementById('image-lightbox-caption');
  var activeIncidentImage=null;

  function openModal(incident) {
    showIncidentTrack(incident, true);
    activeIncidentImage=incident.image||null;
    modalContent.innerHTML=buildIncidentHTML(incident);
    modalOverlay.classList.remove('hidden');
    document.body.style.overflow='hidden';
    map.panTo([incident.lat,incident.lng],{animate:true,duration:0.4});
    history.replaceState(null,'','#'+incident.id);
  }
  function closeModal() {
    lockedTrackSid = null;
    clearActiveTrack();
    clearActiveTrackLabel();
    modalOverlay.classList.add('hidden');
    activeIncidentImage=null;
    document.body.style.overflow='';
    history.replaceState(null,'',window.location.pathname+window.location.search);
  }
  function closeTableOverlay() { tableOverlay.classList.add('hidden'); document.body.style.overflow=''; }
  function openImageLightbox(image) {
    if (!image||!image.src) return;
    imageLightboxImage.src=image.src;
    imageLightboxImage.alt=image.alt||image.caption||'';
    imageLightboxCaption.textContent=[image.caption,image.credit].filter(Boolean).join(' — ');
    imageLightbox.classList.remove('hidden');
  }
  function closeImageLightbox() {
    imageLightbox.classList.add('hidden');
    imageLightboxImage.removeAttribute('src');
  }

  modalClose.addEventListener('click',closeModal);
  modalOverlay.addEventListener('click',function(e){ if(e.target===modalOverlay) closeModal(); });
  modalContent.addEventListener('click',function(e){
    if (e.target.closest('.incident-image-button')) openImageLightbox(activeIncidentImage);
  });
  document.getElementById('image-lightbox-close').addEventListener('click',closeImageLightbox);
  imageLightbox.addEventListener('click',function(e){ if(e.target===imageLightbox) closeImageLightbox(); });
  document.addEventListener('keydown',function(e){
    if (e.key==='Escape') {
      if (!imageLightbox.classList.contains('hidden')) { closeImageLightbox(); return; }
      if (!modalOverlay.classList.contains('hidden')) { closeModal(); return; }
      if (!tableOverlay.classList.contains('hidden')) { closeTableOverlay(); }
    }
  });
  document.getElementById('modal-print').addEventListener('click',function(){
    document.getElementById('print-report').innerHTML='<div class="print-header">Offshore Weather Incidents — Lessons Learned Database</div>'+document.getElementById('modal-content').innerHTML;
    window.print();
  });
  document.getElementById('modal-share').addEventListener('click',function(){
    var btn=this;
    navigator.clipboard.writeText(window.location.href).then(function(){
      btn.textContent='✓ Copied!';
      setTimeout(function(){ btn.innerHTML='&#128279; Share'; },2000);
    });
  });

  function buildIncidentHTML(inc) {
    var clsClass=classColor(inc), clsLbl=classLabel(inc), eventLabel=EVENT_TYPE_LABELS[inc.weather_event_type]||inc.weather_event_type;
    var impactBadge=inc.fatalities>0?inc.fatalities+(inc.fatalities===1?' fatality':' fatalities'):(inc.infrastructure_impact?'Infrastructure impact':'Near-miss');
    var survivorsStr=inc.persons_on_board?(( inc.survivors!==null?inc.survivors:0)+' of '+inc.persons_on_board+' survived'):'';
    var nf=(typeof inc.fatalities==='number')?inc.fatalities:(parseInt(inc.fatalities,10)||0);
    var casualtiesStr=survivorsStr?(nf+' ('+survivorsStr+')'):(nf>0?String(nf):'');
    var m=inc.metocean||{}, metoceanHTML='';
    var metoceanAlertHTML = m.alert
      ? '<div class="metocean-alert"><span class="metocean-alert-title">Critical metocean factor</span><p class="metocean-alert-text">'+esc(m.alert)+'</p></div>'
      : '';
    if (m.wave_height_hs||m.wind_speed||m.visibility||m.sea_temp) {
      var items=[];
      if (m.wave_height_hs) items.push(metoceanItem('Wave height (Hs)',m.wave_height_hs));
      if (m.wind_speed)     items.push(metoceanItem('Wind speed',m.wind_speed));
      if (m.visibility)     items.push(metoceanItem('Visibility',m.visibility));
      if (m.sea_temp)       items.push(metoceanItem('Sea temperature',m.sea_temp));
      metoceanHTML='<div class="inc-metocean">'+items.join('')+'</div>'+(m.notes?'<p class="inc-para" style="margin:10px 32px 0;font-size:12px;color:var(--text-muted)"><em>'+esc(m.notes)+'</em></p>':'');
    }
    var infraHTML=inc.infrastructure_impact?'<div class="infra-callout"><span class="infra-label">Infrastructure impact</span>'+esc(inc.infrastructure_impact)+'</div>':'';
    var whatHappenedParas=(inc.what_happened||'').split('\n\n').map(function(p){ return '<p class="inc-para">'+esc(p)+'</p>'; }).join('');
    return '<div class="inc-hero">'+
      '<div class="inc-hero-badges"><span class="badge badge-fatal '+clsClass+'">'+esc(impactBadge)+'</span><span class="badge badge-class">'+esc(clsLbl)+'</span><span class="badge badge-type">'+esc(eventLabel)+'</span><span class="badge badge-year">'+inc.year+'</span></div>'+
      '<h2 class="inc-name" id="modal-incident-name">'+esc(inc.name)+'</h2>'+
      '<div class="inc-meta-grid">'+metaItem('Date',inc.date)+metaItem('Location',shortLoc(inc.location,60))+metaItem('Platform / Vessel',inc.platform_type)+metaItem('Operator',inc.operator)+metaItem('Weather event',inc.weather_event)+(casualtiesStr?metaItem('Casualties',casualtiesStr):'')+
      '</div></div>'+metoceanAlertHTML+metoceanHTML+infraHTML+
      '<div class="inc-body">'+
      '<div class="inc-section"><div class="inc-section-title">Summary</div><p class="inc-para">'+esc(inc.summary||inc.executive_summary)+'</p>'+buildImageHTML(inc.image)+'</div>'+
      '<div class="inc-section"><div class="inc-section-title">What Happened</div>'+whatHappenedParas+'</div>'+
      '<div class="inc-section"><div class="inc-section-title">What Went Wrong</div>'+numberedList(inc.what_went_wrong)+'</div>'+
      '<div class="inc-section"><div class="inc-section-title">Lessons Learned</div>'+numberedList(inc.lessons_learned)+'</div>'+
      '<div class="inc-section"><div class="inc-section-title">Actions and Changes</div>'+numberedList(inc.actions)+'</div>'+
      (inc.references&&inc.references.length?'<div class="inc-section"><div class="inc-section-title">References &amp; Sources</div>'+buildRefsHTML(inc.references)+'</div>':'')+
      '</div>';
  }

  function buildImageHTML(image) {
    if (!image||!image.src) return '';
    var credit=image.credit?'<span class="incident-image-credit">'+esc(image.credit)+'</span>':'';
    return '<figure class="incident-image-figure"><button class="incident-image-button" type="button" aria-label="Open full-size incident image"><img class="incident-summary-image" src="'+esc(image.src)+'" alt="'+esc(image.alt||image.caption||'')+'" loading="lazy" decoding="async"></button><figcaption>'+esc(image.caption||'')+credit+'</figcaption></figure>';
  }

  function numberedList(items) {
    if (!items||!items.length) return '<p class="inc-para" style="color:var(--text-muted)">Not yet documented.</p>';
    return '<ul class="inc-list">'+items.map(function(item,i){ return '<li data-num="'+(i+1)+'">'+esc(item)+'</li>'; }).join('')+'</ul>';
  }
  function metaItem(label,value) {
    if (!value) return '';
    return '<div class="inc-meta-item"><span class="inc-meta-label">'+esc(label)+'</span><span class="inc-meta-value">'+esc(value)+'</span></div>';
  }
  function metoceanItem(label,value) {
    return '<div class="metocean-item"><span class="metocean-label">'+esc(label)+'</span><span class="metocean-value">'+esc(value)+'</span></div>';
  }
  function buildRefsHTML(refs) {
    if (!refs||!refs.length) return '<p class="inc-para" style="color:var(--text-muted)">References to be added.</p>';
    return '<div class="ref-list">'+refs.map(function(ref){
      var titleEl=ref.url?'<a href="'+esc(ref.url)+'" target="_blank" rel="noopener">'+esc(ref.title)+'</a>':esc(ref.title);
      var tags=[ref.type,ref.publisher,ref.year?String(ref.year):null,ref.language].filter(Boolean).map(function(t){ return '<span class="ref-tag">'+esc(t)+'</span>'; }).join('');
      var notesEl=ref.notes?'<div style="margin-top:5px;font-size:11px;color:var(--text-muted)">'+esc(ref.notes)+'</div>':'';
      return '<div class="ref-item"><div class="ref-title">'+titleEl+'</div><div class="ref-meta">'+tags+'</div>'+notesEl+'</div>';
    }).join('')+'</div>';
  }
  function esc(str) {
    if (!str) return '';
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function shortLoc(loc, max) {
    if (!loc || loc.length <= max) return loc;
    var s = loc.substring(0, max);
    var i = s.lastIndexOf(',');
    return (i > max * 0.5 ? s.substring(0, i) : s) + '…';
  }

  /* ── Table overlay ── */
  var tableHandlerAttached=false;
  function openTableOverlay() {
    filterTableRows();
    tableOverlay.classList.remove('hidden');
    document.body.style.overflow='hidden';
  }
  document.getElementById('stat-incidents-btn').addEventListener('click',openTableOverlay);
  document.getElementById('table-close').addEventListener('click',closeTableOverlay);
  tableOverlay.addEventListener('click',function(e){ if(e.target===tableOverlay) closeTableOverlay(); });

  function filterTableRows() {
    var tbody=document.getElementById('incidents-tbody');
    if (!tbody) return;
    var datasetIncidents = getIncidents(datasetView);
    var visible=datasetIncidents.filter(function(inc){
      if (activeFilters.region!=='all' && inc.region!==activeFilters.region) return false;
      if (activeFilters.type!=='all' && inc.weather_event_type!==activeFilters.type) return false;
      if (activeFilters.classification!=='all' && classKey(inc)!==activeFilters.classification) return false;
      if (activeFilters.consequence!=='all' && incidentConsequenceTags(inc).indexOf(activeFilters.consequence)===-1) return false;
      return true;
    }).sort(function(a,b){
      var fa=a.fatalities||0, fb=b.fatalities||0;
      return fb!==fa ? fb-fa : (a.year||0)-(b.year||0);
    });
    tbody.innerHTML=visible.map(function(inc,idx){
      var clsText=classLabel(inc), clsClass=classColor(inc);
      var fatalCell;
      if (inc.fatalities>0) { fatalCell='<span class="fatal-count">'+inc.fatalities+'</span>'+(inc.fatalities===1?' fatality':' fatalities'); }
      else if (inc.infrastructure_impact) { var is=inc.infrastructure_impact; fatalCell='<span class="fatal-zero">0</span><div class="impact-text">'+esc(is.length>60?is.substring(0,58)+'…':is)+'</div>'; }
      else { fatalCell='<span class="fatal-zero">0 — near-miss</span>'; }
      var asset=(inc.platform_type||'').replace(/\s*\([^)]+\)/g,'').trim(); if(asset.length>55) asset=asset.substring(0,53)+'…';
      var loc=inc.location||''; if(loc.length>50) loc=loc.substring(0,48)+'…';
      return '<tr data-id="'+esc(inc.id)+'" data-region="'+esc(inc.region)+'">'+
        '<td class="col-rank">'+(idx+1)+'</td><td class="col-name">'+esc(inc.name)+'</td><td class="col-year">'+inc.year+'</td>'+
        '<td class="col-location">'+esc(loc)+'</td><td class="col-asset">'+esc(asset)+'</td>'+
        '<td class="col-fatal">'+fatalCell+'</td><td class="col-weather">'+esc(inc.weather_event||'')+'</td>'+
        '<td class="col-sev"><span class="sev-pill '+clsClass+'">'+esc(clsText)+'</span></td></tr>';
    }).join('');
    if (!tableHandlerAttached) {
      tbody.addEventListener('mouseover',function(e){
        var row=e.target.closest('tr[data-id]');
        if (!row) return;
        var inc=allIncidents.find(function(i){ return i.id===row.getAttribute('data-id'); });
        if (inc) showIncidentTrack(inc, false);
      });
      tbody.addEventListener('mouseout',function(e){
        var row=e.target.closest('tr[data-id]');
        if (!row) return;
        if (e.relatedTarget && row.contains(e.relatedTarget)) return;
        restoreLockedTrack();
      });
      tbody.addEventListener('click',function(e){
        var row=e.target.closest('tr[data-id]');
        if (!row) return;
        var inc=allIncidents.find(function(i){ return i.id===row.getAttribute('data-id'); });
        if (inc) { closeTableOverlay(); openModal(inc); }
      });
      tableHandlerAttached=true;
    }
    var titleCount=document.getElementById('table-title-count');
    if (titleCount) titleCount.textContent=visible.length;
    document.getElementById('stat-incidents').textContent=visible.length;
  }

  loadStormTracks();
  loadData();
  if (window.location.hash) {
    var hashId=window.location.hash.slice(1);
    var linked=allIncidents.find(function(i){ return i.id===hashId; });
    if (linked) openModal(linked);
  }
})();
