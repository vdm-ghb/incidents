/*
 * Shared incident "sleeve" renderer for the internal analysis explorers
 * (causal_analysis.html, bowtie_view.html).
 *
 * One renderer, loaded from the live dataset (window.INCIDENTS_DATA), so the
 * explorers' incident panel can never drift from data/incidents.js or from
 * each other. Provides the same content plus the map page's interactive
 * features: image gallery, click-to-enlarge lightbox, Safety Moment pack link
 * and Print. The storm-track mini-map stays map-page-only by design.
 *
 * API: window.IncidentSleeve.open(id) / .close()
 *      window.IncidentSleeve.headerExtra = (id) => htmlString   // optional hook
 * Also exposes window.openSleeve(id) for convenience.
 */
(function () {
  'use strict';

  var STYLE_ID = 'incident-sleeve-styles';
  var LIGHTBOX_ID = 'sleeve-lightbox';
  var currentImages = [];

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function records() {
    return (window.INCIDENTS_DATA && window.INCIDENTS_DATA.incidents) || [];
  }

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var css = [
      /* action buttons in the header */
      '#sleeve .sm-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:9px}',
      '#sleeve .sm-actions a,#sleeve .sm-actions button{font-size:11px;border-radius:6px;padding:4px 11px;cursor:pointer;text-decoration:none;border:1px solid var(--border);background:var(--surface2);color:var(--text);transition:border-color .15s,color .15s,background .15s}',
      '#sleeve .sm-actions a:hover,#sleeve .sm-actions button:hover{border-color:var(--accent);color:var(--accent)}',
      '#sleeve .sm-pack{background:rgba(240,136,62,.1);border-color:rgba(240,136,62,.45)}',
      '#sleeve .sm-pack:hover{border-color:var(--major,#f0883e);color:var(--major,#f0883e);background:rgba(240,136,62,.16)}',
      /* image gallery */
      '#sleeve .sgal{display:grid;grid-template-columns:1fr;gap:10px;margin-top:8px}',
      '#sleeve .sgal.multi{grid-template-columns:1fr 1fr}',
      '#sleeve .sfig{margin:0}',
      '#sleeve .simg{display:block;width:100%;padding:0;border:1px solid var(--border);border-radius:6px;overflow:hidden;cursor:zoom-in;background:#111820}',
      '#sleeve .simg:hover,#sleeve .simg:focus-visible{border-color:var(--accent);outline:none}',
      '#sleeve .simg img{display:block;width:100%;border:0;border-radius:0;margin:0}',
      '#sleeve .scap{font-size:10px;color:var(--muted);margin-top:4px;line-height:1.4}',
      /* lightbox */
      '#' + LIGHTBOX_ID + '{position:fixed;inset:0;z-index:120;background:rgba(5,8,12,.92);display:none;align-items:center;justify-content:center;padding:28px;cursor:zoom-out}',
      '#' + LIGHTBOX_ID + '.on{display:flex}',
      '#' + LIGHTBOX_ID + ' figure{margin:0;max-width:94vw;max-height:94vh;display:flex;flex-direction:column;align-items:center}',
      '#' + LIGHTBOX_ID + ' img{max-width:94vw;max-height:84vh;object-fit:contain;border:1px solid var(--border);border-radius:6px;background:#111820}',
      '#' + LIGHTBOX_ID + ' figcaption{color:#cfe0f5;font-size:12px;margin-top:10px;max-width:900px;text-align:center;line-height:1.5}',
      '#' + LIGHTBOX_ID + ' .lbx-close{position:absolute;top:16px;right:20px;background:rgba(20,28,38,.9);border:1px solid var(--border);color:#e8f0fb;border-radius:6px;padding:5px 13px;font-size:13px;cursor:pointer}',
      /* print: show only the open record */
      '@media print{',
      '  body > *:not(#sleeve){display:none !important}',
      '  #sleeve{position:static !important;transform:none !important;width:auto !important;max-width:100% !important;box-shadow:none !important;border:0 !important;overflow:visible !important}',
      '  #sleeve .hd{position:static !important}',
      '  #sleeve .sclose,#sleeve .sm-actions{display:none !important}',
      '  #' + LIGHTBOX_ID + '{display:none !important}',
      '}'
    ].join('\n');
    var el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = css;
    document.head.appendChild(el);
  }

  function getSleeve() {
    var s = document.getElementById('sleeve');
    if (!s) { s = document.createElement('div'); s.id = 'sleeve'; document.body.appendChild(s); }
    return s;
  }

  function getLightbox() {
    var lb = document.getElementById(LIGHTBOX_ID);
    if (lb) return lb;
    lb = document.createElement('div');
    lb.id = LIGHTBOX_ID;
    lb.innerHTML = '<button class="lbx-close" type="button" aria-label="Close image">Close \u2715</button>' +
      '<figure><img alt=""><figcaption></figcaption></figure>';
    document.body.appendChild(lb);
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.classList.contains('lbx-close')) closeLightbox();
    });
    return lb;
  }

  function imagesOf(r) {
    var l = (r.images && r.images.length) ? r.images : (r.image ? [r.image] : []);
    return l.filter(function (im) { return im && im.src; });
  }

  function listSec(title, arr) {
    return (Array.isArray(arr) && arr.length)
      ? '<div class="sec"><h4>' + esc(title) + '</h4><ul>' +
        arr.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>'
      : '';
  }

  function paraSec(title, txt) {
    return txt
      ? '<div class="sec"><h4>' + esc(title) + '</h4>' +
        String(txt).split(/\n\n+/).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>'
      : '';
  }

  function galleryHTML(r) {
    currentImages = imagesOf(r);
    if (!currentImages.length) return '';
    var figs = currentImages.map(function (im, idx) {
      var cap = esc(im.caption || '') + (im.credit ? ' \u2014 ' + esc(im.credit) : '');
      return '<figure class="sfig">' +
        '<button class="simg" type="button" data-idx="' + idx + '" aria-label="Open full-size image">' +
        '<img src="../' + esc(im.src) + '" alt="' + esc(im.alt || im.caption || '') + '" loading="lazy" decoding="async"></button>' +
        (cap ? '<figcaption class="scap">' + cap + '</figcaption>' : '') + '</figure>';
    }).join('');
    return '<div class="sec"><div class="sgal' + (figs.length > 1 ? ' multi' : '') + '">' + figs + '</div></div>';
  }

  function headerExtraFor(id) {
    var fn = window.IncidentSleeve && window.IncidentSleeve.headerExtra;
    if (typeof fn !== 'function') return '';
    try { return fn(id) || ''; } catch (e) { return ''; }
  }

  function open(id) {
    var sleeve = getSleeve();
    var r = records().find(function (x) { return x.id === id; });
    if (!r) {
      sleeve.innerHTML = '<div class="hd"><button class="sclose" type="button">Close</button>' +
        '<h3>Record unavailable</h3></div><div class="bd"><p>Could not load <code>' + esc(id) +
        '</code> from ../data/incidents.js.</p></div>';
      sleeve.classList.add('on');
      return;
    }

    var mo = r.metocean || {};
    var moRows = Object.keys(mo).filter(function (k) { return mo[k] && k !== 'notes'; })
      .map(function (k) { return '<div><b>' + esc(k.replace(/_/g, ' ')) + '</b><span>' + esc(mo[k]) + '</span></div>'; }).join('');

    var meta = [
      r.date && ['Date', r.date], r.location && ['Location', r.location],
      r.operator && ['Operator', r.operator], r.platform_type && ['Asset', r.platform_type],
      r.weather_event && ['Weather', r.weather_event],
      (r.fatalities != null) && ['Fatalities', r.fatalities],
      (r.persons_on_board != null) && ['On board', r.persons_on_board],
      (r.survivors != null) && ['Survivors', r.survivors]
    ].filter(Boolean);

    var refs = (Array.isArray(r.references) && r.references.length)
      ? '<div class="sec"><h4>References</h4><ul>' + r.references.map(function (f) {
          return '<li>' + (f.url
            ? '<a href="' + esc(f.url) + '" target="_blank" rel="noopener">' + esc(f.title) + '</a>'
            : esc(f.title)) +
            (f.publisher ? ' \u2014 ' + esc(f.publisher) : '') +
            (f.year ? ' (' + esc(f.year) + ')' : '') + '</li>';
        }).join('') + '</ul></div>'
      : '';

    sleeve.innerHTML =
      '<div class="hd"><button class="sclose" type="button">Close</button>' +
        '<h3>' + esc(r.name) + ' (' + esc(r.year) + ')</h3>' +
        '<div class="loc">' + esc(r.region) + ' \u00b7 ' + esc(r.weather_event_type) + ' \u00b7 ' + esc(r.classification) + '</div>' +
        headerExtraFor(id) +
        '<div class="sm-actions">' +
          '<a class="sm-pack" href="../pack.html?id=' + encodeURIComponent(r.id) + '" target="_blank" rel="noopener" title="Open the print-ready safety-moment pack">\uD83D\uDCE3 Safety Moment</a>' +
          '<button class="sm-print" type="button" title="Print this record">\uD83D\uDDA8 Print</button>' +
          '<a class="sm-map" href="../index.html#' + esc(r.id) + '">Open on map</a>' +
        '</div>' +
      '</div>' +
      '<div class="bd">' +
        (meta.length ? '<div class="sec"><h4>Details</h4><ul>' +
          meta.map(function (kv) { return '<li><b>' + esc(kv[0]) + ':</b> ' + esc(kv[1]) + '</li>'; }).join('') + '</ul></div>' : '') +
        (moRows ? '<div class="sec"><h4>Metocean</h4><div class="mo">' + moRows + '</div>' +
          (mo.notes ? '<p style="margin-top:7px">' + esc(mo.notes) + '</p>' : '') + '</div>' : '') +
        galleryHTML(r) +
        paraSec('Summary', r.executive_summary || r.summary) +
        paraSec('What happened', r.what_happened) +
        listSec('What went wrong', r.what_went_wrong) +
        listSec('Lessons learned', r.lessons_learned) +
        listSec('Actions', r.actions) +
        (r.infrastructure_impact ? paraSec('Infrastructure impact', r.infrastructure_impact) : '') +
        (r.environmental_impact ? paraSec('Environmental impact', r.environmental_impact) : '') +
        (r.data_quality ? paraSec('Data quality', r.data_quality) : '') +
        refs +
      '</div>';

    sleeve.classList.add('on');
    sleeve.scrollTop = 0;
  }

  function close() { getSleeve().classList.remove('on'); }

  function openLightbox(idx) {
    var im = currentImages[idx];
    if (!im || !im.src) return;
    var lb = getLightbox();
    var img = lb.querySelector('img');
    var cap = lb.querySelector('figcaption');
    img.src = '../' + im.src;
    img.alt = im.alt || im.caption || '';
    cap.textContent = [im.caption, im.credit].filter(Boolean).join(' \u2014 ');
    lb.classList.add('on');
  }

  function closeLightbox() {
    var lb = document.getElementById(LIGHTBOX_ID);
    if (!lb) return;
    lb.classList.remove('on');
    var img = lb.querySelector('img');
    if (img) img.removeAttribute('src');
  }

  function init() {
    injectStyles();
    var sleeve = getSleeve();
    sleeve.addEventListener('click', function (e) {
      if (e.target.closest('.sclose')) { close(); return; }
      if (e.target.closest('.sm-print')) { window.print(); return; }
      var imgBtn = e.target.closest('.simg');
      if (imgBtn) { openLightbox(parseInt(imgBtn.getAttribute('data-idx'), 10) || 0); }
    });
    // Capture-phase so the lightbox swallows Escape before the explorer closes the sleeve.
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var lb = document.getElementById(LIGHTBOX_ID);
      if (lb && lb.classList.contains('on')) { closeLightbox(); e.stopImmediatePropagation(); }
    }, true);
  }

  window.IncidentSleeve = { open: open, close: close, headerExtra: null };
  window.openSleeve = open;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
