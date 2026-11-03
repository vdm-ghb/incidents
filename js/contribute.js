/* ═══════════════════════════════════════════════════
   Contribute dialog (Tier 1): suggest an incident, report a correction or send
   feedback. The site is static, so the form composes a structured email that
   opens in the user's own email app; nothing is sent until they press Send.
   ═════════════════════════════════════════════════════ */
(function () {
  'use strict';

  // Custodian mailbox — change here only. The address is never shown on the page: only the
  // name is displayed, and the address is inserted into the email or copied text on demand.
  var CONFIG = { name: 'Vadim Anokhin', user: 'SDA-Metocean-Mailbox', domain: 'shell.com', subjectPrefix: '[Offshore Weather Incidents]' };
  var MAILTO_SOFT_LIMIT = 1900; // some email clients truncate very long mailto links

  var TYPES = {
    incident: 'Suggest a new incident',
    correction: 'Correction to an incident',
    feedback: 'General feedback'
  };
  var SECTIONS = ['Summary', 'What happened', 'What went wrong', 'Lessons learned', 'Actions',
    'Metocean conditions', 'Date / location / casualties', 'Classification (hazard or operation)',
    'References / sources', 'Image', 'Other'];

  function address() { return CONFIG.user + '@' + CONFIG.domain; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  function init(opts) {
    var incidents = (opts.incidents || []).slice().sort(function (a, b) { return String(a.name).localeCompare(String(b.name)); });
    var eventTypes = opts.eventTypes || {};

    var overlay = document.createElement('div');
    overlay.id = 'contrib-overlay';
    overlay.className = 'hidden';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'contrib-title');
    overlay.innerHTML =
      '<form id="contrib-form" novalidate>' +
        '<div id="contrib-head"><h2 id="contrib-title">Contribute to the database</h2>' +
          '<button type="button" id="contrib-close" aria-label="Close">&#215;</button></div>' +
        '<div id="contrib-body">' +
          '<p class="contrib-intro">Help keep this reference accurate and growing. Your message is prepared as an email to the database developer &mdash; it opens in your own email app and nothing is sent until you press <strong>Send</strong>.</p>' +
          '<div id="contrib-types" role="radiogroup" aria-label="Type of contribution">' +
            Object.keys(TYPES).map(function (k) {
              return '<label class="contrib-type"><input type="radio" name="ctype" value="' + k + '"> ' + TYPES[k] + '</label>';
            }).join('') +
          '</div>' +

          '<fieldset data-for="incident">' +
            '<label>Incident name or vessel/platform <span class="req">*</span><input name="inc_name" required maxlength="160" placeholder="e.g. Ocean Ranger capsize"></label>' +
            '<div class="contrib-row"><label>Date or year<input name="inc_date" maxlength="60" placeholder="e.g. 15 Feb 1982"></label>' +
            '<label>Location<input name="inc_location" maxlength="120" placeholder="e.g. Grand Banks, Canada"></label></div>' +
            '<label>Main metocean factor<select name="inc_hazard"><option value="">Not sure</option>' +
              Object.keys(eventTypes).map(function (k) { return '<option>' + esc(eventTypes[k]) + '</option>'; }).join('') +
            '</select></label>' +
            '<label>What happened and the lesson <span class="req">*</span><textarea name="inc_description" required rows="4" maxlength="1500" placeholder="A few sentences: the operation, the weather or sea condition involved, the outcome."></textarea></label>' +
            '<label>Source(s) <span class="req">*</span><textarea name="inc_sources" required rows="2" maxlength="800" placeholder="Investigation report, paper or article — title and link"></textarea></label>' +
          '</fieldset>' +

          '<fieldset data-for="correction">' +
            '<label>Incident <span class="req">*</span><select name="cor_incident" required><option value="">Choose an incident&hellip;</option>' +
              incidents.map(function (i) { return '<option value="' + esc(i.id) + '">' + esc(i.name) + ' (' + esc(i.year) + ')</option>'; }).join('') +
            '</select></label>' +
            '<label>Section<select name="cor_section">' + SECTIONS.map(function (s) { return '<option>' + s + '</option>'; }).join('') + '</select></label>' +
            '<label>What is incorrect or missing <span class="req">*</span><textarea name="cor_issue" required rows="3" maxlength="1200"></textarea></label>' +
            '<label>Suggested correction<textarea name="cor_fix" rows="3" maxlength="1200"></textarea></label>' +
            '<label>Supporting source <span class="req">*</span><textarea name="cor_source" required rows="2" maxlength="800" placeholder="Report title, page or section, and link"></textarea></label>' +
          '</fieldset>' +

          '<fieldset data-for="feedback">' +
            '<label>Your feedback <span class="req">*</span><textarea name="fb_message" required rows="6" maxlength="2000" placeholder="Usefulness, features, presentation, how you use the database&hellip;"></textarea></label>' +
          '</fieldset>' +

          '<div class="contrib-row"><label>Your name (optional)<input name="who_name" maxlength="80" autocomplete="name"></label>' +
          '<label>Organisation (optional)<input name="who_org" maxlength="100" autocomplete="organization"></label></div>' +

          '<label class="contrib-confirm"><input type="checkbox" name="confirm" required> ' +
            'My message contains no confidential, personal or commercially sensitive information, and any source I cite is publicly available or I am authorised to share it. <span class="req">*</span></label>' +
          '<div id="contrib-status" role="status" aria-live="polite"></div>' +
        '</div>' +
        '<div id="contrib-actions">' +
          '<button type="button" id="contrib-copy">Copy message</button>' +
          '<button type="submit" id="contrib-send">Open email &rarr;</button>' +
        '</div>' +
      '</form>';
    document.body.appendChild(overlay);

    var form = overlay.querySelector('#contrib-form');
    var status = overlay.querySelector('#contrib-status');
    var fieldsets = overlay.querySelectorAll('fieldset[data-for]');

    function type() { var r = form.querySelector('input[name="ctype"]:checked'); return r ? r.value : 'incident'; }
    function setType(t) {
      form.querySelector('input[name="ctype"][value="' + t + '"]').checked = true;
      fieldsets.forEach(function (fs) { var on = fs.getAttribute('data-for') === t; fs.hidden = !on; fs.disabled = !on; });
      status.textContent = ''; status.className = '';
    }
    form.querySelectorAll('input[name="ctype"]').forEach(function (r) { r.addEventListener('change', function () { setType(r.value); }); });

    function val(name) { var el = form.elements[name]; return el ? String(el.value || '').trim() : ''; }
    function incidentById(id) { for (var i = 0; i < incidents.length; i++) if (incidents[i].id === id) return incidents[i]; return null; }
    function pageUrl(id) { return window.location.origin + window.location.pathname + (id ? '#' + id : ''); }

    function compose() {
      var t = type(), lines = ['Offshore Weather Incidents - Lessons Learned Database', 'Submission type: ' + TYPES[t]], subject;
      if (t === 'incident') {
        subject = 'New incident: ' + val('inc_name');
        lines.push('', 'Incident: ' + val('inc_name'));
        if (val('inc_date')) lines.push('Date: ' + val('inc_date'));
        if (val('inc_location')) lines.push('Location: ' + val('inc_location'));
        lines.push('Metocean factor: ' + (val('inc_hazard') || 'Not sure'), '', 'What happened and the lesson:', val('inc_description'), '', 'Source(s):', val('inc_sources'));
      } else if (t === 'correction') {
        var inc = incidentById(val('cor_incident'));
        subject = 'Correction: ' + (inc ? inc.name + ' [' + inc.id + ']' : val('cor_incident'));
        lines.push('', 'Incident: ' + (inc ? inc.name + ' (' + inc.year + ') [' + inc.id + ']' : val('cor_incident')), 'Record link: ' + pageUrl(inc ? inc.id : ''),
          'Section: ' + val('cor_section'), '', 'What is incorrect or missing:', val('cor_issue'));
        if (val('cor_fix')) lines.push('', 'Suggested correction:', val('cor_fix'));
        lines.push('', 'Supporting source:', val('cor_source'));
      } else {
        subject = 'Feedback';
        lines.push('', 'Feedback:', val('fb_message'));
      }
      var who = [val('who_name'), val('who_org')].filter(Boolean).join(', ');
      lines.push('', 'Submitted by: ' + (who || 'not given'),
        'Confirmed: no confidential, personal or commercially sensitive information; sources are public or authorised to share.',
        'Sent from: ' + pageUrl(''));
      return { to: address(), subject: CONFIG.subjectPrefix + ' ' + subject, body: lines.join('\n') };
    }

    function mailtoUrl(m) { return 'mailto:' + m.to + '?subject=' + encodeURIComponent(m.subject) + '&body=' + encodeURIComponent(m.body); }

    function validate() {
      if (form.checkValidity()) return true;
      var first = form.querySelector(':invalid');
      if (first) { first.focus(); if (first.reportValidity) first.reportValidity(); }
      status.textContent = 'Please complete the required fields marked *.';
      status.className = 'error';
      return false;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validate()) return;
      var m = compose(), url = mailtoUrl(m);
      window.IncidentContribute.last = { mailto: url };
      (opts.launch || function (u) { window.location.href = u; })(url);
      status.className = 'ok';
      status.innerHTML = 'Your email app should now open with the message to ' + esc(CONFIG.name) + ' ready &mdash; please press <strong>Send</strong>. ' +
        'If nothing opened' + (url.length > MAILTO_SOFT_LIMIT ? ' or the text looks cut off' : '') +
        ', use <strong>Copy message</strong> &mdash; the copied text includes the email address.';
    });

    overlay.querySelector('#contrib-copy').addEventListener('click', function () {
      if (!validate()) return;
      var m = compose(), text = 'To: ' + m.to + '\nSubject: ' + m.subject + '\n\n' + m.body;
      window.IncidentContribute.last = { copy: text };
      function done(ok) {
        status.className = ok ? 'ok' : 'error';
        status.innerHTML = ok ? 'Message copied, including the email address for ' + esc(CONFIG.name) + '. Paste it into a new email and send.'
          : 'Copy failed &mdash; please try <strong>Open email</strong> instead.';
      }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(fallbackCopy(text)); });
      else done(fallbackCopy(text));
    });
    function fallbackCopy(text) {
      var ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); var ok = false;
      try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
      document.body.removeChild(ta); return ok;
    }

    var lastFocus = null;
    function open(t, incident) {
      lastFocus = document.activeElement;
      form.reset();
      setType(t || 'incident');
      if (incident && form.elements.cor_incident) form.elements.cor_incident.value = incident.id;
      overlay.classList.remove('hidden');
      var first = overlay.querySelector('fieldset:not([hidden]) input, fieldset:not([hidden]) textarea, fieldset:not([hidden]) select');
      if (t === 'correction' && incident) first = form.elements.cor_section;
      if (first) first.focus();
    }
    function close() {
      overlay.classList.add('hidden');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    overlay.querySelector('#contrib-close').addEventListener('click', close);
    overlay.addEventListener('mousedown', function (e) { if (e.target === overlay) close(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !overlay.classList.contains('hidden')) { e.stopImmediatePropagation(); close(); }
    }, true);

    return { open: open, close: close, address: address };
  }

  window.IncidentContribute = { init: init, last: null };
})();
