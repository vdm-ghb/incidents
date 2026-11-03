/* ═══════════════════════════════════════════════════
   Incident timeline strip: one dot per incident by date, a faint per-year
   count histogram, a dual-handle year-range filter and a play-through.
   Data-agnostic: app.js supplies filtering, tooltip HTML and map callbacks.
   ═════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var MONTHS = ['january','february','march','april','may','june','july','august','september','october','november','december'];
  var DOT = 6, STEP = 7, MAX_ROWS = 5, THUMB_HALF = 5, PLAY_MS = 320;
  var STORE_KEY = 'timelineCollapsed';

  function monthOf(incident) {
    var d = String(incident.date || '').toLowerCase();
    for (var i = 0; i < MONTHS.length; i++) if (d.indexOf(MONTHS[i]) !== -1) return i;
    return 6; // unknown month: place mid-year
  }

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (html != null) e.innerHTML = html;
    return e;
  }

  function init(opts) {
    var all = opts.incidents.filter(function (i) { return typeof i.year === 'number'; });
    var minY = Math.min.apply(null, all.map(function (i) { return i.year; }));
    var maxY = Math.max.apply(null, all.map(function (i) { return i.year; }));
    var from = minY, to = maxY, playing = null, hoverId = null;

    var root = el('div', { id: 'timeline', role: 'region', 'aria-label': 'Incident timeline' });
    root.innerHTML =
      '<button id="timeline-play" type="button" aria-pressed="false" title="Play through the years">&#9654;</button>' +
      '<div id="timeline-plot">' +
        '<div id="timeline-bars" aria-hidden="true"></div>' +
        '<div id="timeline-dots" role="group" aria-label="Incidents by date"></div>' +
        '<div class="timeline-shade" id="timeline-shade-left" aria-hidden="true"></div>' +
        '<div class="timeline-shade" id="timeline-shade-right" aria-hidden="true"></div>' +
        '<div id="timeline-axis" aria-hidden="true"></div>' +
        '<div id="timeline-range">' +
          '<input id="timeline-from" type="range" step="1" aria-label="Timeline start year">' +
          '<input id="timeline-to" type="range" step="1" aria-label="Timeline end year">' +
        '</div>' +
      '</div>' +
      '<div id="timeline-label" aria-live="polite"></div>' +
      '<button id="timeline-collapse" type="button" title="Hide timeline" aria-label="Hide timeline">&#9662;</button>';
    var pill = el('button', { id: 'timeline-pill', type: 'button', title: 'Show timeline', 'aria-label': 'Show timeline' }, 'Timeline &#9652;');
    var card = el('div', { id: 'timeline-card', role: 'tooltip' });
    document.body.appendChild(root);
    document.body.appendChild(pill);
    document.body.appendChild(card);

    var plot = root.querySelector('#timeline-plot');
    var dotsEl = root.querySelector('#timeline-dots');
    var barsEl = root.querySelector('#timeline-bars');
    var axisEl = root.querySelector('#timeline-axis');
    var inFrom = root.querySelector('#timeline-from');
    var inTo = root.querySelector('#timeline-to');
    var label = root.querySelector('#timeline-label');
    var playBtn = root.querySelector('#timeline-play');
    [inFrom, inTo].forEach(function (inp) { inp.min = minY; inp.max = maxY; });
    inFrom.value = from; inTo.value = to;

    function xOf(year) {
      var w = plot.clientWidth - 2 * THUMB_HALF;
      return THUMB_HALF + (maxY === minY ? 0.5 : (year - minY) / (maxY - minY)) * w;
    }
    function yearWidth() { return (plot.clientWidth - 2 * THUMB_HALF) / Math.max(1, maxY - minY); }

    function drawAxis() {
      var html = '';
      for (var y = Math.ceil(minY / 10) * 10; y <= maxY; y += 10) {
        html += '<span class="timeline-tick" style="left:' + xOf(y).toFixed(1) + 'px">' + y + '</span>';
      }
      axisEl.innerHTML = html;
    }

    function drawBars() {
      var counts = {};
      all.forEach(function (i) { counts[i.year] = (counts[i.year] || 0) + 1; });
      var peak = Math.max.apply(null, Object.keys(counts).map(function (k) { return counts[k]; }));
      var h = MAX_ROWS * STEP, bw = Math.max(2, yearWidth() * 0.7), html = '';
      Object.keys(counts).forEach(function (y) {
        var c = counts[y];
        html += '<span class="timeline-bar" title="' + y + ': ' + c + (c === 1 ? ' incident' : ' incidents') + '" style="left:' +
          (xOf(+y) - bw / 2).toFixed(1) + 'px;width:' + bw.toFixed(1) + 'px;height:' + Math.max(2, c / peak * h).toFixed(1) + 'px"></span>';
      });
      barsEl.innerHTML = html;
    }

    function isOut(inc) { return !opts.matchesOtherFilters(inc) || inc.year < from || inc.year > to; }

    function drawDots() {
      var byYear = {};
      all.forEach(function (i) { (byYear[i.year] = byYear[i.year] || []).push(i); });
      var html = '';
      Object.keys(byYear).forEach(function (y) {
        var list = byYear[y].sort(function (a, b) { return monthOf(a) - monthOf(b); });
        var cols = Math.ceil(list.length / MAX_ROWS);
        list.forEach(function (inc, k) {
          var col = Math.floor(k / MAX_ROWS), row = k % MAX_ROWS;
          var x = xOf(+y) + (col - (cols - 1) / 2) * STEP - DOT / 2;
          html += '<span class="timeline-dot ' + opts.classColor(inc) + (isOut(inc) ? ' out' : '') + '" data-incident-id="' + inc.id +
            '" role="button" aria-label="' + String(inc.name).replace(/"/g, '&quot;') + ' (' + inc.year + ')" style="left:' + x.toFixed(1) +
            'px;bottom:' + (row * STEP + 1) + 'px"></span>';
        });
      });
      dotsEl.innerHTML = html;
    }

    function drawRange() {
      var half = yearWidth() / 2;
      root.querySelector('#timeline-shade-left').style.width = Math.max(0, from === minY ? 0 : xOf(from) - half) + 'px';
      var right = to === maxY ? 0 : plot.clientWidth - (xOf(to) + half);
      root.querySelector('#timeline-shade-right').style.width = Math.max(0, right) + 'px';
      label.textContent = from === minY && to === maxY ? minY + ' – ' + maxY : from + ' – ' + to;
      root.classList.toggle('filtered', !(from === minY && to === maxY));
    }

    function render() {
      if (root.classList.contains('collapsed')) return;
      drawAxis(); drawBars(); drawDots(); drawRange();
    }

    function emit() {
      drawRange();
      dotsEl.querySelectorAll('.timeline-dot').forEach(function (d) {
        var inc = byId(d.getAttribute('data-incident-id'));
        d.classList.toggle('out', isOut(inc));
      });
      opts.onRangeChange(from === minY && to === maxY ? null : from, from === minY && to === maxY ? null : to);
    }

    function setRange(f, t) {
      from = Math.max(minY, Math.min(f, maxY)); to = Math.max(from, Math.min(t, maxY));
      inFrom.value = from; inTo.value = to;
      emit();
    }

    inFrom.addEventListener('input', function () { stop(); var f = +inFrom.value; setRange(f, Math.max(f, to)); });
    inTo.addEventListener('input', function () { stop(); var t = +inTo.value; setRange(Math.min(from, t), t); });

    /* Play-through: grow the end year from the start year to the latest year. */
    function stop() {
      if (!playing) return;
      clearInterval(playing); playing = null;
      playBtn.innerHTML = '&#9654;'; playBtn.setAttribute('aria-pressed', 'false'); playBtn.title = 'Play through the years';
      root.classList.remove('playing');
    }
    function play() {
      if (playing) { stop(); return; }
      var start = to >= maxY ? from : to;
      setRange(from, start);
      playBtn.innerHTML = '&#10074;&#10074;'; playBtn.setAttribute('aria-pressed', 'true'); playBtn.title = 'Pause';
      root.classList.add('playing');
      playing = setInterval(function () {
        if (to >= maxY) { stop(); return; }
        setRange(from, to + 1);
      }, PLAY_MS);
    }
    playBtn.addEventListener('click', play);

    /* Hover card + map linking */
    function byId(id) { for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i]; return null; }
    function hideCard() {
      card.classList.remove('visible');
      if (hoverId) { opts.onHoverEnd(byId(hoverId)); hoverId = null; }
    }
    dotsEl.addEventListener('mouseover', function (e) {
      var dot = e.target.closest('.timeline-dot');
      if (!dot) return;
      var inc = byId(dot.getAttribute('data-incident-id'));
      if (!inc || hoverId === inc.id) return;
      if (hoverId) opts.onHoverEnd(byId(hoverId));
      hoverId = inc.id;
      card.innerHTML = opts.tooltipHTML(inc);
      card.classList.add('visible');
      var r = dot.getBoundingClientRect(), cw = card.offsetWidth;
      card.style.left = Math.max(8, Math.min(r.left + r.width / 2 - cw / 2, window.innerWidth - cw - 8)) + 'px';
      card.style.bottom = (window.innerHeight - r.top + 10) + 'px';
      opts.onHover(inc);
    });
    dotsEl.addEventListener('mouseout', function (e) {
      if (e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('.timeline-dot')) return;
      hideCard();
    });
    root.addEventListener('mouseleave', function () { if (opts.onLeave) opts.onLeave(); });
    dotsEl.addEventListener('click', function (e) {
      var dot = e.target.closest('.timeline-dot');
      if (!dot) return;
      hideCard();
      opts.onSelect(byId(dot.getAttribute('data-incident-id')));
    });

    /* Collapse: phones always start collapsed; desktop remembers the choice. */
    function setCollapsed(c, remember) {
      root.classList.toggle('collapsed', c);
      pill.classList.toggle('visible', c);
      if (c) { stop(); hideCard(); } else render();
      if (remember) { try { localStorage.setItem(STORE_KEY, c ? '1' : '0'); } catch (e) { /* storage unavailable */ } }
    }
    root.querySelector('#timeline-collapse').addEventListener('click', function () { setCollapsed(true, true); });
    pill.addEventListener('click', function () { setCollapsed(false, true); });
    var stored = null;
    try { stored = localStorage.getItem(STORE_KEY); } catch (e) { /* storage unavailable */ }
    setCollapsed(window.innerWidth <= 640 || stored === '1', false);

    var resizeTimer = null;
    window.addEventListener('resize', function () { clearTimeout(resizeTimer); resizeTimer = setTimeout(render, 120); });

    render();
    return {
      render: render,
      reset: function () { stop(); setRange(minY, maxY); },
      range: function () { return { from: from, to: to, min: minY, max: maxY }; }
    };
  }

  window.IncidentTimeline = { init: init };
})();
