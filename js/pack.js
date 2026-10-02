/* ═══════════════════════════════════════════════════
   Safety Moment pack renderer — data-driven from incidents.js
   URL: pack.html?id=<incident-id>
   ═══════════════════════════════════════════════════ */
(function () {
  'use strict';

  var CLASSIFICATION_LABELS = { drilling:'Drilling', maritime:'Maritime / Tow', aviation:'Aviation', onshore:'Onshore Operations', coastal:'Port / Coastal', design:'Basis of Design', pipeline:'Pipeline', survey:'Survey', decommissioning:'Decommissioning' };
  var CLASS_COLORS = { drilling:'#e67e22', maritime:'#2980b9', aviation:'#8e44ad', onshore:'#27ae60', coastal:'#16a085', design:'#c0392b', pipeline:'#a0522d', survey:'#d81b8c', decommissioning:'#006d77', other:'#7f8c8d' };
  var EVENT_TYPE_LABELS = { cyclone:'Cyclone / Hurricane / Typhoon', storm:'Severe (Extra-tropical) Storm', squall:'Squall / Thunderstorm', lightning:'Lightning', rogue_wave:'Extreme / Rogue Wave', internal_wave:'Internal Wave / Soliton', current:'Ocean / Turbidity Current / Tidal', tsunami:'Tsunami / Meteo-tsunami', climate:'Climate / Ambient Extremes', equipment:'Metocean Equipment' };
  var EVENT_TYPE_LETTERS = { cyclone:'C', storm:'S', squall:'Q', lightning:'L', rogue_wave:'R', internal_wave:'I', current:'U', tsunami:'T', climate:'K', equipment:'E' };

  function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function classKey(inc){ return inc.classification || 'other'; }
  function classLabel(inc){ return CLASSIFICATION_LABELS[classKey(inc)] || classKey(inc); }
  function classColor(inc){ return CLASS_COLORS[classKey(inc)] || CLASS_COLORS.other; }
  function eventLabel(inc){ return EVENT_TYPE_LABELS[inc.weather_event_type] || inc.weather_event_type || ''; }
  function eventLetter(inc){ return EVENT_TYPE_LETTERS[inc.weather_event_type] || '•'; }

  function impactText(inc){
    if (inc.fatalities > 0) return inc.fatalities + (inc.fatalities===1?' fatality':' fatalities');
    if (inc.infrastructure_impact) return 'Infrastructure impact';
    return 'Near-miss / 0 fatalities';
  }
  function casualtiesText(inc){
    var nf = (typeof inc.fatalities==='number') ? inc.fatalities : (parseInt(inc.fatalities,10)||0);
    if (inc.persons_on_board){
      var surv = (inc.survivors!==null && inc.survivors!==undefined) ? inc.survivors : 0;
      return nf + ' fatal · ' + surv + ' of ' + inc.persons_on_board + ' survived';
    }
    return nf>0 ? String(nf)+' fatal' : 'No fatalities';
  }

  function chunk(arr, size){
    var out=[]; for (var i=0;i<arr.length;i+=size) out.push(arr.slice(i,i+size)); return out;
  }
  // The Safety Moment is a trimmed view; the full account lives on the incident page.
  // Cap the headline lists so a long record stays presentation-length.
  var PACK_LIST_CAP = { what_went_wrong: 5, lessons_learned: 4, actions: 4 };
  function capList(arr, key){ return (arr || []).slice(0, PACK_LIST_CAP[key]); }
  function storyBeats(inc){
    var raw = (inc.what_happened || inc.summary || '').split('\n\n').map(function(p){ return p.trim(); }).filter(Boolean);
    if (!raw.length && inc.executive_summary) raw = [inc.executive_summary];
    return raw;
  }

  // Extra shareable images beyond the scene image, for a dedicated gallery slide.
  function packGalleryImages(inc){
    var list = (inc.pack_images && inc.pack_images.length) ? inc.pack_images
             : ((inc.images && inc.images.length) ? inc.images : []);
    var sceneSrc = inc.image && inc.image.src;
    return list.filter(function(im){ return im && im.src && im.src !== sceneSrc; }).slice(0, 3);
  }
  function gallerySlide(number, total, inc, imgs){
    var cols = imgs.length >= 3 ? 'cols-3' : 'cols-2';
    return slideShell(number, total, inc,
      '<div class="slide-band" style="background:'+classColor(inc)+'"></div>'+
      '<div class="slide-pad">'+
        '<div class="slide-kicker">Evidence and aftermath</div>'+
        '<h2 class="slide-title">What the investigation found</h2>'+
        '<div class="slide-body"><div class="pack-gallery '+cols+'">'+
          imgs.map(function(im){
            return '<figure class="pack-figure"><img src="'+esc(im.src)+'" alt="'+esc(im.alt||im.caption||'')+'">'+
              '<figcaption>'+esc([im.caption, im.credit].filter(Boolean).join(' \u2014 '))+'</figcaption></figure>';
          }).join('')+
        '</div></div>'+
      '</div>');
  }

  function listSlide(number, total, inc, kicker, title, items, listClass){
    return slideShell(number, total, inc,
      '<div class="slide-band" style="background:'+classColor(inc)+'"></div>'+
      '<div class="slide-pad">'+
        '<div class="slide-kicker">'+esc(kicker)+'</div>'+
        '<h2 class="slide-title">'+esc(title)+'</h2>'+
        '<div class="slide-body"><ul class="pack-list '+listClass+(items.length>5?' tight':'')+'">'+
          items.map(function(t){ return '<li>'+esc(t)+'</li>'; }).join('')+
        '</ul></div>'+
      '</div>');
  }

  function slideShell(number, total, inc, inner){
    return '<section class="slide">'+inner+
      '<div class="slide-foot">'+
        '<span><a href="index.html">IOGP Metocean Incidents Database</a> · Learning from incidents</span>'+
        '<span>'+esc(inc.name)+' · '+number+' / '+total+'</span>'+
      '</div></section>';
  }

  function metoceanCards(inc){
    var m = inc.metocean || {}, cards=[];
    if (m.wave_height_hs) cards.push(['Wave height (Hs)', m.wave_height_hs]);
    if (m.wind_speed)     cards.push(['Wind speed', m.wind_speed]);
    if (m.visibility)     cards.push(['Visibility', m.visibility]);
    if (m.sea_temp)       cards.push(['Sea temperature', m.sea_temp]);
    return cards;
  }

  function discussionQuestions(inc){
    var ev = eventLabel(inc).toLowerCase().replace(/\s*\/.*$/,'').trim() || 'metocean event';
    return [
      'Could a comparable ' + ev + ' challenge one of our operations? Where is our exposure?',
      'Which barriers would have to fail for an outcome like this to reach us?',
      'Of the lessons here, which are already in place for us — and which are gaps?',
      'What one action will each of us take away from this discussion?'
    ];
  }

  function takeaway(inc){
    if (inc.lessons_learned && inc.lessons_learned.length) return inc.lessons_learned[0];
    if (inc.executive_summary) return inc.executive_summary;
    return inc.summary || '';
  }

  // Pick the authoritative investigation/official references to cite on the close slide.
  function keyReferences(inc){
    var refs = (inc.references || []).slice();
    if (!refs.length) return [];
    var rx = /inquiry|investigation|official|commission|\breport\b|board|ntsb|aaib|psa|havtil|atsb|mms|bsee|nsia|coast guard|marine board|imd|cndh|failure analysis/i;
    var key = refs.filter(function(r){ return rx.test(r.type||'') || rx.test(r.title||''); });
    return (key.length ? key : refs).slice(0, 3);
  }

  function buildSlides(inc){
    var slides = [];

    // Story slides — paginate long narratives across up to 2 slides.
    var beats = storyBeats(inc);
    var storyPages = beats.length > 4 ? chunk(beats, Math.ceil(beats.length/2)) : [beats];
    var galleryImgs = packGalleryImages(inc);

    // Count total for footer numbering.
    var total = 2 /* title + scene */ + storyPages.length
      + (inc.what_went_wrong && inc.what_went_wrong.length ? 1 : 0)
      + (galleryImgs.length ? 1 : 0)
      + (inc.lessons_learned && inc.lessons_learned.length ? 1 : 0)
      + (inc.actions && inc.actions.length ? 1 : 0)
      + 2 /* discussion + close */;

    var n = 0;

    // 1 — Title
    n++;
    slides.push(slideShell(n, total, inc,
      '<div class="title-grid">'+
        '<div class="title-left">'+
          '<div class="title-eyebrow">Safety Moment</div>'+
          '<div class="title-badges">'+
            '<span class="badge impact" style="background:'+classColor(inc)+'">'+esc(impactText(inc))+'</span>'+
            '<span class="badge">'+esc(classLabel(inc))+'</span>'+
            '<span class="badge letter" title="'+esc(eventLabel(inc))+'">'+esc(eventLetter(inc))+'</span>'+
            '<span class="badge">'+esc(eventLabel(inc))+'</span>'+
          '</div>'+
          '<h1 class="title-name">'+esc(inc.name)+' ('+esc(inc.year)+')</h1>'+
          '<p class="title-oneline">'+esc(inc.summary||'')+'</p>'+
          '<dl class="title-meta">'+
            metaRow('Date', inc.date)+
            metaRow('Location', inc.location)+
            metaRow('Asset', inc.platform_type)+
            metaRow('Casualties', casualtiesText(inc))+
          '</dl>'+
        '</div>'+
        '<div class="title-right">'+
          '<div id="pack-map"></div>'+
          '<div class="title-map-caption">'+mapCaption(inc)+'</div>'+
        '</div>'+
      '</div>'));

    // 2 — Setting the scene (metocean + image)
    n++;
    var cards = metoceanCards(inc);
    var img = inc.image;
    var figureHTML = img && img.src
      ? '<figure class="scene-figure"><img src="'+esc(img.src)+'" alt="'+esc(img.alt||img.caption||'')+'">'+
          '<figcaption>'+esc([img.caption, img.credit].filter(Boolean).join(' — '))+'</figcaption></figure>'
      : '<figure class="scene-figure noimg">No incident-specific image is held for this record.</figure>';
    slides.push(slideShell(n, total, inc,
      '<div class="slide-band" style="background:'+classColor(inc)+'"></div>'+
      '<div class="slide-pad">'+
        '<div class="slide-kicker">Setting the scene</div>'+
        '<h2 class="slide-title">Operational context and conditions</h2>'+
        '<div class="slide-body scene-grid">'+
          '<div>'+
            '<p class="title-oneline" style="margin-bottom:10px">'+esc(inc.weather_event||'')+'</p>'+
            (cards.length
              ? '<div class="metocean-cards">'+cards.map(function(c){ return '<div class="mc"><div class="mc-label">'+esc(c[0])+'</div><div class="mc-value">'+esc(c[1])+'</div></div>'; }).join('')+'</div>'
              : '')+
            ((inc.metocean&&inc.metocean.notes)?'<p class="scene-note">'+esc(inc.metocean.notes)+'</p>':'')+
          '</div>'+
          figureHTML+
        '</div>'+
      '</div>'));

    // 3(+) — What happened (story)
    storyPages.forEach(function(page, idx){
      n++;
      slides.push(listSlide(n, total, inc, 'What happened'+(storyPages.length>1?' ('+(idx+1)+' of '+storyPages.length+')':''),
        idx===0 ? 'Sequence of events' : 'Sequence of events — continued', page, 'story'));
    });

    // What went wrong
    if (inc.what_went_wrong && inc.what_went_wrong.length){
      n++;
      slides.push(listSlide(n, total, inc, 'What went wrong', 'Causes and contributing factors', capList(inc.what_went_wrong, 'what_went_wrong'), 'cause'));
    }
    // Evidence gallery — extra shareable images beyond the scene image
    if (galleryImgs.length){
      n++;
      slides.push(gallerySlide(n, total, inc, galleryImgs));
    }
    // Lessons learned
    if (inc.lessons_learned && inc.lessons_learned.length){
      n++;
      slides.push(listSlide(n, total, inc, 'Learning', 'Lessons learned', capList(inc.lessons_learned, 'lessons_learned'), 'lesson'));
    }
    // Actions
    if (inc.actions && inc.actions.length){
      n++;
      slides.push(listSlide(n, total, inc, 'Actions', 'Actions and recommendations', capList(inc.actions, 'actions'), 'warn'));
    }

    // Discussion
    n++;
    slides.push(slideShell(n, total, inc,
      '<div class="slide-band" style="background:'+classColor(inc)+'"></div>'+
      '<div class="slide-pad discussion-pad">'+
        '<div class="slide-kicker">For discussion</div>'+
        '<h2 class="slide-title">Points for discussion</h2>'+
        '<div class="slide-body">'+
          discussionQuestions(inc).map(function(q,i){ return '<div class="discuss-q"><span class="qn">'+(i+1)+'</span>'+esc(q)+'</div>'; }).join('')+
        '</div>'+
      '</div>').replace('class="slide"','class="slide discussion"'));

    // Close
    n++;
    var sources = keyReferences(inc);
    var sourcesHTML = sources.length
      ? '<div class="close-sources"><div class="slide-kicker">Key investigation reports</div>'+
          '<ul class="close-source-list">'+sources.map(function(r){
            var label = esc(r.title) + (r.publisher?' — '+esc(r.publisher):'') + (r.year?' ('+esc(r.year)+')':'');
            return '<li>'+(r.url
              ? '<a href="'+esc(r.url)+'" target="_blank" rel="noopener">'+label+'</a>'
              : label + (r.internal?' · internal':' · see full record'))+'</li>';
          }).join('')+'</ul></div>'
      : '';
    slides.push(slideShell(n, total, inc,
      '<div class="slide-pad">'+
        '<div class="slide-kicker">Key takeaway</div>'+
        '<p class="close-takeaway">'+esc(takeaway(inc))+'</p>'+
        '<a class="close-link" href="index.html#'+esc(inc.id)+'">Open the full incident record, sources & data-quality notes &#8594;</a>'+
        sourcesHTML+
        '<p class="close-caveat">This safety moment was developed with AI assistance, based on information in the published investigation reports and other sources cited in the full record; uncertain or incomplete information is identified rather than presented as established fact. '+
          'See the full record for references and evidence boundaries.</p>'+
      '</div>').replace('class="slide"','class="slide close"'));

    return slides.join('');
  }

  function metaRow(label, value){
    if (!value) return '';
    return '<dt>'+esc(label)+'</dt><dd>'+esc(value)+'</dd>';
  }

  // Title-slide map caption: name the storm when a dated track is shown, else the incident location.
  function mapCaption(inc){
    var pts = stormTrackPoints(inc.storm_sid);
    if (pts && pts.length >= 2 && inc.storm_name){
      var nm = inc.storm_name.charAt(0).toUpperCase() + inc.storm_name.slice(1).toLowerCase();
      return 'Track of ' + esc(nm) + ' (dated) and incident location';
    }
    return (inc.location_precision==='approximate'?'Approximate incident location':'Incident location') + ' \u2014 ' + esc(inc.location||'');
  }

  function initMap(inc){
    if (typeof L === 'undefined' || inc.lat==null || inc.lng==null) return;
    var map = L.map('pack-map', { center:[inc.lat,inc.lng], zoom:5, zoomControl:false,
      attributionControl:false, dragging:false, scrollWheelZoom:false, doubleClickZoom:false,
      boxZoom:false, keyboard:false, touchZoom:false });
    L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', { maxZoom:13 }).addTo(map);
    L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}', { maxZoom:13, opacity:0.7 }).addTo(map);

    // Draw the storm track (if any) at the same fixed zoom as every other incident;
    // the fixed viewport shows only the section of the track around the incident.
    var pts = stormTrackPoints(inc.storm_sid);
    if (pts && pts.length >= 2) drawStormTrack(map, pts);
    L.circleMarker([inc.lat,inc.lng], { radius:9, color:'#fff', weight:2, fillColor:classColor(inc), fillOpacity:0.95 }).addTo(map);
    setTimeout(function(){ map.invalidateSize(); map.setView([inc.lat,inc.lng], 5); }, 140);
  }

  // ── Storm-track overlay (mirrors the main map; used for cyclone/hurricane/typhoon incidents) ──
  var STORM_CAT_COLORS = { '-5':'#888888','-4':'#bdc3c7','-3':'#95a5a6','-2':'#7fb3be','-1':'#3498db','0':'#f1c40f','1':'#f39c12','2':'#e67e22','3':'#e74c3c','4':'#c0392b','5':'#8e44ad' };
  var TRACK_MONTH_ABBR = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  function normalizeLon(lon){ if(lon>180) return lon-360; if(lon<-180) return lon+360; return lon; }
  function categoryFromWind(w){ if(typeof w!=='number'||isNaN(w)) return -5; if(w<34) return -1; if(w<=63) return 0; if(w<=82) return 1; if(w<=95) return 2; if(w<=112) return 3; if(w<=136) return 4; return 5; }
  function categoryColor(c){ return STORM_CAT_COLORS[String(c)] || STORM_CAT_COLORS['-5']; }
  function localDayInfo(utcTime, lon){
    if(!utcTime) return null;
    var m=/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})/.exec(utcTime);
    if(!m) return null;
    var offH=Math.round((typeof lon==='number'?lon:0)/15);
    var dt=new Date(Date.UTC(+m[1],+m[2]-1,+m[3],+m[4],+m[5])+offH*3600000);
    return { key:dt.getUTCFullYear()+'-'+dt.getUTCMonth()+'-'+dt.getUTCDate(), label:dt.getUTCDate()+' '+TRACK_MONTH_ABBR[dt.getUTCMonth()] };
  }
  function stormTrackPoints(sid){
    var geo = window.STORM_TRACKS_DATA;
    if(!sid || !geo || !geo.features) return null;
    var f = null;
    for (var i=0;i<geo.features.length;i++){ var ft=geo.features[i]; if(ft && ft.properties && ft.properties.sid===sid){ f=ft; break; } }
    if(!f) return null;
    if(Array.isArray(f.properties.track_points) && f.properties.track_points.length){
      return f.properties.track_points.map(function(tp){
        var cat=(typeof tp.category==='number')?tp.category:categoryFromWind(tp.wind_kt);
        return { time:tp.time||'', lat:tp.lat, lon:normalizeLon(tp.lon), wind_kt:tp.wind_kt, category:cat };
      });
    }
    if(f.geometry && Array.isArray(f.geometry.coordinates)){
      return f.geometry.coordinates.map(function(pt){ return { time:'', lat:pt[1], lon:normalizeLon(pt[0]), category:-5 }; });
    }
    return null;
  }
  function drawStormTrack(map, pts){
    for (var i=1;i<pts.length;i++){
      L.polyline([[pts[i-1].lat,pts[i-1].lon],[pts[i].lat,pts[i].lon]], {
        color:categoryColor(pts[i].category), weight:3.5, opacity:0.9, lineCap:'round', lineJoin:'round'
      }).addTo(map);
    }
    pts.forEach(function(p){
      L.circleMarker([p.lat,p.lon], { radius:2.5, weight:1, color:'#fff', fillColor:categoryColor(p.category), fillOpacity:0.9, opacity:0.9 }).addTo(map);
    });
    // Date label at each local-day change, so the track reads as a dated path.
    var lastKey=null;
    pts.forEach(function(p){
      var info=localDayInfo(p.time,p.lon);
      if(!info || info.key===lastKey) return;
      lastKey=info.key;
      L.marker([p.lat,p.lon], { interactive:false, keyboard:false, icon:L.divIcon({ className:'pack-track-day',
        html:'<div style="transform:translate(-50%,-165%);font-size:8.5pt;font-weight:700;color:#0d1421;white-space:nowrap;text-shadow:-1px -1px 0 #fff,1px -1px 0 #fff,-1px 1px 0 #fff,1px 1px 0 #fff,0 0 3px rgba(255,255,255,.95);">'+esc(info.label)+'</div>',
        iconSize:null }) }).addTo(map);
    });
  }

  // Scale fixed 16:9 slides to fit the viewport width on screen (print uses true size).
  var SLIDE_W = 13.333*96, SLIDE_H = 7.5*96;
  function layoutScale(){
    if (document.body.classList.contains('presenting')) return;
    var avail = Math.min(document.documentElement.clientWidth - 32, SLIDE_W);
    var scale = Math.min(1, avail / SLIDE_W);
    document.querySelectorAll('.slide').forEach(function(el){
      el.style.transformOrigin = '';
      el.style.transform = scale<1 ? 'scale('+scale+')' : '';
      el.style.marginBottom = scale<1 ? ((SLIDE_H*scale - SLIDE_H) + 22) + 'px' : '';
    });
  }

  /* ── Present mode: one slide at a time, scaled to fill the viewport ── */
  var presenting = false, current = 0, slidesList = [];
  function refreshSlides(){ slidesList = Array.prototype.slice.call(document.querySelectorAll('.slide')); }
  function scaleCurrent(){
    var el = slidesList[current]; if (!el) return;
    var scale = Math.min(window.innerWidth / SLIDE_W, window.innerHeight / SLIDE_H);
    el.style.transformOrigin = 'center center';
    el.style.transform = 'scale('+scale+')';
    el.style.marginBottom = '';
  }
  function updateNav(){
    var prev = document.getElementById('nav-prev'), next = document.getElementById('nav-next');
    prev.classList.toggle('is-hidden', current === 0);
    next.classList.toggle('is-hidden', current === slidesList.length - 1);
    document.getElementById('nav-counter').textContent = (current + 1) + ' / ' + slidesList.length;
  }
  function gotoSlide(i){
    if (!slidesList.length) return;
    current = Math.max(0, Math.min(slidesList.length - 1, i));
    slidesList.forEach(function(el, idx){ el.classList.toggle('is-current', idx === current); });
    scaleCurrent();
    updateNav();
  }
  function enterPresent(){
    if (presenting) return;
    refreshSlides();
    presenting = true;
    document.body.classList.add('presenting');
    document.getElementById('pack-nav').hidden = false;
    if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(function(){});
    current = 0;
    gotoSlide(0);
  }
  function exitPresent(){
    if (!presenting) return;
    presenting = false;
    document.body.classList.remove('presenting');
    document.getElementById('pack-nav').hidden = true;
    slidesList.forEach(function(el){ el.classList.remove('is-current'); el.style.transform=''; el.style.transformOrigin=''; el.style.marginBottom=''; });
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(function(){});
    layoutScale();
  }
  function onKey(e){
    if (!presenting) return;
    switch (e.key){
      case 'ArrowRight': case 'PageDown': case ' ': case 'Spacebar': e.preventDefault(); gotoSlide(current+1); break;
      case 'ArrowLeft': case 'PageUp': e.preventDefault(); gotoSlide(current-1); break;
      case 'Home': e.preventDefault(); gotoSlide(0); break;
      case 'End': e.preventDefault(); gotoSlide(slidesList.length-1); break;
      case 'Escape': exitPresent(); break;
    }
  }

  function showError(msg){
    document.getElementById('pack-deck').innerHTML = '<div class="pack-error">'+msg+'</div>';
  }

  function init(){
    var params = new URLSearchParams(window.location.search);
    var id = params.get('id');
    var data = window.INCIDENTS_DATA && window.INCIDENTS_DATA.incidents;
    if (!data){ showError('Incident data failed to load.'); return; }
    if (!id){ showError('No incident specified. Add <code>?id=&lt;incident-id&gt;</code> to the URL.'); return; }
    var inc = data.find(function(i){ return i.id === id; });
    if (!inc){ showError('Incident <strong>'+esc(id)+'</strong> was not found in the database.'); return; }

    document.title = 'Safety Moment — ' + inc.name;
    document.getElementById('pack-toolbar-title').textContent = 'Safety Moment · ' + inc.year;
    document.getElementById('pack-record').setAttribute('href', 'index.html#'+inc.id);
    document.getElementById('pack-deck').innerHTML = buildSlides(inc);

    initMap(inc);
    refreshSlides();
    layoutScale();
    window.addEventListener('resize', function(){ presenting ? scaleCurrent() : layoutScale(); });
    document.getElementById('pack-print').addEventListener('click', function(){ window.print(); });
    document.getElementById('pack-present').addEventListener('click', enterPresent);
    document.getElementById('nav-prev').addEventListener('click', function(){ gotoSlide(current-1); });
    document.getElementById('nav-next').addEventListener('click', function(){ gotoSlide(current+1); });
    document.getElementById('nav-exit').addEventListener('click', exitPresent);
    document.addEventListener('keydown', onKey);
    document.addEventListener('fullscreenchange', function(){ if (presenting && !document.fullscreenElement) exitPresent(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
