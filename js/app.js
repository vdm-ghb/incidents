/* ═══════════════════════════════════════════════════
   Offshore Incidents — Lessons Learned Database
   v3.3 — 40 incidents, collapsible legend, region zoom,
           table region filter, animated incidents button
   ═══════════════════════════════════════════════════ */
(function () {
  'use strict';

  function severityClass(incident) {
    if (incident.severity_override) return 'sev-' + incident.severity_override;
    var f = incident.fatalities;
    if (f >= 50) return 'sev-critical';
    if (f >= 10) return 'sev-major';
    if (f >= 1)  return 'sev-notable';
    return 'sev-informational';
  }
  function severityKey(incident) {
    if (incident.severity_override) return incident.severity_override;
    var f = incident.fatalities;
    if (f >= 50) return 'critical';
    if (f >= 10) return 'major';
    if (f >= 1)  return 'notable';
    return 'informational';
  }
  function severityLabel(incident) {
    var labels = { critical:'Critical', major:'Major', notable:'Notable', informational:'Near-miss' };
    return labels[severityKey(incident)] || 'Unknown';
  }
  function fatalityText(incident) {
    if (incident.fatalities > 0) return incident.fatalities + (incident.fatalities===1?' fatality':' fatalities');
    if (incident.infrastructure_impact) { var s=incident.infrastructure_impact; return s.length>60?s.substring(0,58)+'…':s; }
    return 'Near-miss / 0 fatalities';
  }

  var EVENT_TYPE_LABELS = { hurricane:'Hurricane / Typhoon', storm:'Severe Storm', internal_wave:'Internal Wave / Soliton', helicopter:'Helicopter', maintenance:'Maintenance / Equipment', tsunami:'Tsunami / Meteo-tsunami', climate:'Climate Change / Long-term Variability' };
  var EVENT_TYPE_LETTERS = { hurricane:'H', storm:'S', internal_wave:'W', helicopter:'🚁', maintenance:'M', tsunami:'T', climate:'C' };

  /* Region bounding boxes [SW, NE] */
  var REGION_BOUNDS = {
    'North Sea':             [[ 51.0,  -5.0],[ 62.5,  12.0]],
    'North Atlantic':        [[ 40.0, -60.0],[ 66.0,   5.0]],
    'Gulf of Mexico':        [[ 22.0, -99.0],[ 31.5, -82.0]],
    'Southeast Asia':        [[ -6.0,  95.0],[ 22.0, 125.0]],
    'East Asia':             [[ 35.0, 115.0],[ 46.0, 132.0]],
    'Arabian Sea':           [[  8.0,  50.0],[ 28.0,  78.0]],
    'Caspian Sea':           [[ 36.0,  48.5],[ 43.5,  54.5]],
    'Middle East':           [[ 19.0,  50.0],[ 30.0,  62.0]],
    'Arctic / North Pacific':[[ 46.0, 135.0],[ 63.0,-145.0]],
    'Australia / NW Shelf':  [[-34.0, 108.0],[-14.0, 130.0]],
    'West Africa':           [[  0.0,   1.0],[ 10.0,  12.0]],
    'South America':         [[-38.0, -85.0],[ 12.0, -32.0]]
  };

  var map = L.map('map', { center:[25,10], zoom:2, minZoom:2, maxZoom:14, zoomControl:true, preferCanvas:true });
  L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution:'Tiles &copy; <a href="https://www.esri.com/">Esri</a>', maxZoom:13 }).addTo(map);
  L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}', {
    attribution:'', maxZoom:13, opacity:0.7 }).addTo(map);

  var allIncidents=[], activeMarkers={}, activeFilters={type:'all',region:'all',severity:'all'};

  function loadData() {
    if (!window.INCIDENTS_DATA) { console.error('INCIDENTS_DATA not found'); return; }
    allIncidents = window.INCIDENTS_DATA.incidents;
    renderMarkers();
    updateStats();
  }

  function createMarker(incident) {
    var sevClass=severityClass(incident), letter=EVENT_TYPE_LETTERS[incident.weather_event_type]||'?';
    var icon=L.divIcon({ className:'', html:'<div class="incident-marker '+sevClass+'">'+letter+'</div>', iconSize:[32,32], iconAnchor:[16,16], tooltipAnchor:[18,0] });
    var marker=L.marker([incident.lat,incident.lng],{icon:icon,riseOnHover:true});
    var ttHTML='<div class="tooltip-name">'+esc(incident.name)+' ('+incident.year+')</div><div class="tooltip-meta">'+esc(shortLoc(incident.location,55))+'</div><span class="tooltip-fatal '+sevClass+'">'+esc(fatalityText(incident))+'</span>'+(incident.executive_summary?'<div class="tooltip-summary">'+esc(incident.executive_summary)+'</div>':'');
    marker.bindTooltip(ttHTML,{permanent:false,direction:'right',opacity:1});
    marker.on('click',function(){ openModal(incident); });
    return marker;
  }

  function renderMarkers() {
    Object.values(activeMarkers).forEach(function(m){ map.removeLayer(m); });
    activeMarkers={};
    var filtered=allIncidents.filter(function(inc){
      if (activeFilters.type!=='all' && inc.weather_event_type!==activeFilters.type) return false;
      if (activeFilters.severity!=='all' && severityKey(inc)!==activeFilters.severity) return false;
      return true;
    });
    filtered.forEach(function(inc){ var m=createMarker(inc); m.addTo(map); activeMarkers[inc.id]=m; });
    updateStats(filtered);
    filterTableRows();
  }

  function updateStats(filtered) {
    document.getElementById('stat-incidents').textContent=(filtered||allIncidents).length;
  }

  document.getElementById('filter-type').addEventListener('change',function(e){ activeFilters.type=e.target.value; renderMarkers(); });
  document.getElementById('filter-severity').addEventListener('change',function(e){ activeFilters.severity=e.target.value; renderMarkers(); });
  document.getElementById('filter-region').addEventListener('change',function(e){
    activeFilters.region=e.target.value;
    renderMarkers();
    if (e.target.value!=='all' && REGION_BOUNDS[e.target.value]) {
      map.fitBounds(REGION_BOUNDS[e.target.value],{padding:[40,40],maxZoom:8});
    } else { map.setView([25,10],2); }
  });
  document.getElementById('filter-reset').addEventListener('click',function(){
    activeFilters={type:'all',region:'all',severity:'all'};
    document.getElementById('filter-type').value='all';
    document.getElementById('filter-region').value='all';
    document.getElementById('filter-severity').value='all';
    renderMarkers();
    map.setView([25,10],2);
  });

  /* ── Legend collapse ── */
  var legend=document.getElementById('legend');
  if (window.innerWidth>640) legend.classList.add('open');
  document.getElementById('legend-header').addEventListener('click',function(){ legend.classList.toggle('open'); });

  /* ── Modal ── */
  var modalOverlay=document.getElementById('modal-overlay'), modalContent=document.getElementById('modal-content'), modalClose=document.getElementById('modal-close');
  var tableOverlay=document.getElementById('table-overlay');

  function openModal(incident) {
    modalContent.innerHTML=buildIncidentHTML(incident);
    modalOverlay.classList.remove('hidden');
    document.body.style.overflow='hidden';
    map.panTo([incident.lat,incident.lng],{animate:true,duration:0.4});
    history.replaceState(null,'','#'+incident.id);
  }
  function closeModal() {
    modalOverlay.classList.add('hidden');
    document.body.style.overflow='';
    history.replaceState(null,'',window.location.pathname+window.location.search);
  }
  function closeTableOverlay() { tableOverlay.classList.add('hidden'); document.body.style.overflow=''; }

  modalClose.addEventListener('click',closeModal);
  modalOverlay.addEventListener('click',function(e){ if(e.target===modalOverlay) closeModal(); });
  document.addEventListener('keydown',function(e){
    if (e.key==='Escape') {
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
    var sevClass=severityClass(inc), sevLabel=severityLabel(inc), eventLabel=EVENT_TYPE_LABELS[inc.weather_event_type]||inc.weather_event_type;
    var impactBadge=inc.fatalities>0?inc.fatalities+(inc.fatalities===1?' fatality':' fatalities'):(inc.infrastructure_impact?'Infrastructure — '+sevLabel:'Near-miss');
    var survivorsStr=inc.persons_on_board?(( inc.survivors!==null?inc.survivors:0)+' of '+inc.persons_on_board+' survived'):'';
    var m=inc.metocean||{}, metoceanHTML='';
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
      '<div class="inc-hero-badges"><span class="badge badge-fatal '+sevClass+'">'+esc(impactBadge)+'</span><span class="badge badge-type">'+esc(eventLabel)+'</span><span class="badge badge-year">'+inc.year+'</span></div>'+
      '<h2 class="inc-name" id="modal-incident-name">'+esc(inc.name)+'</h2>'+
      '<div class="inc-meta-grid">'+metaItem('Date',inc.date)+metaItem('Location',shortLoc(inc.location,60))+metaItem('Platform / Vessel',inc.platform_type)+metaItem('Operator',inc.operator)+metaItem('Weather event',inc.weather_event)+(survivorsStr?metaItem('Casualties',survivorsStr):'')+
      '</div></div>'+metoceanHTML+infraHTML+
      '<div class="inc-body">'+
      '<div class="inc-section"><div class="inc-section-title">Summary</div><p class="inc-para">'+esc(inc.executive_summary||inc.summary)+'</p></div>'+
      '<div class="inc-section"><div class="inc-section-title">What Happened</div>'+whatHappenedParas+'</div>'+
      '<div class="inc-section"><div class="inc-section-title">What Went Wrong</div>'+numberedList(inc.what_went_wrong)+'</div>'+
      '<div class="inc-section"><div class="inc-section-title">Lessons Learned</div>'+numberedList(inc.lessons_learned)+'</div>'+
      '<div class="inc-section"><div class="inc-section-title">Actions and Changes</div>'+numberedList(inc.actions)+'</div>'+
      (inc.references&&inc.references.length?'<div class="inc-section"><div class="inc-section-title">References &amp; Sources</div>'+buildRefsHTML(inc.references)+'</div>':'')+
      '</div>';
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
    var visible=allIncidents.filter(function(inc){
      if (activeFilters.region!=='all' && inc.region!==activeFilters.region) return false;
      if (activeFilters.type!=='all' && inc.weather_event_type!==activeFilters.type) return false;
      if (activeFilters.severity!=='all' && severityKey(inc)!==activeFilters.severity) return false;
      return true;
    }).sort(function(a,b){
      var fa=a.fatalities||0, fb=b.fatalities||0;
      return fb!==fa ? fb-fa : (a.year||0)-(b.year||0);
    });
    var sevLabels={critical:'Critical',major:'Major',notable:'Notable',informational:'Near-miss'};
    tbody.innerHTML=visible.map(function(inc,idx){
      var sevKey=severityKey(inc), sevClass=severityClass(inc), sevText=sevLabels[sevKey]||sevKey;
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
        '<td class="col-sev"><span class="sev-pill '+sevClass+'">'+sevText+'</span></td></tr>';
    }).join('');
    if (!tableHandlerAttached) {
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

  loadData();
  if (window.location.hash) {
    var hashId=window.location.hash.slice(1);
    var linked=allIncidents.find(function(i){ return i.id===hashId; });
    if (linked) openModal(linked);
  }
})();
