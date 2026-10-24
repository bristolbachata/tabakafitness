/* Tabaka Fitness – cookie consent.
 * - Nothing optional runs until the visitor accepts.
 * - To switch on Google Analytics, paste your GA4 Measurement ID below (looks like "G-XXXXXXXXXX").
 *   Leave it empty and no analytics code is ever loaded.
 */
(function () {
  var GA_ID = ""; // <-- paste your GA4 Measurement ID here, e.g. "G-ABC123XYZ9"

  var KEY = "tabaka_consent";
  var MAX_AGE = 365 * 24 * 60 * 60 * 1000; // choice is remembered for 12 months
  var d = document;
  var banner = null;

  function read() {
    try {
      var v = JSON.parse(window.localStorage.getItem(KEY));
      if (v && v.v === 1 && Date.now() - v.t < MAX_AGE) return v;
    } catch (e) {}
    return null;
  }
  function write(analytics) {
    try { window.localStorage.setItem(KEY, JSON.stringify({ v: 1, a: analytics ? 1 : 0, t: Date.now() })); } catch (e) {}
  }

  function loadAnalytics() {
    if (!GA_ID || window.__tabakaGA) return;
    window.__tabakaGA = true;
    window['ga-disable-' + GA_ID] = false;
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    gtag('js', new Date());
    gtag('consent', 'update', { analytics_storage: 'granted' });
    gtag('config', GA_ID, { anonymize_ip: true });
    var s = d.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    d.head.appendChild(s);
  }

  function clearAnalytics() {
    if (GA_ID) window['ga-disable-' + GA_ID] = true;
    var expired = 'expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    d.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (name === '_ga' || name === '_gid' || name.indexOf('_ga_') === 0 || name.indexOf('_gat') === 0) {
        d.cookie = name + '=; ' + expired;
        var parts = window.location.hostname.split('.');
        for (var i = 0; i < parts.length - 1; i++) {
          d.cookie = name + '=; ' + expired + '; domain=.' + parts.slice(i).join('.');
        }
      }
    });
  }

  function apply(analytics) {
    write(analytics);
    if (analytics) loadAnalytics(); else clearAnalytics();
    hide();
  }

  function hide() {
    if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
    banner = null;
  }

  function show(expanded) {
    hide();
    var current = read();
    banner = d.createElement('div');
    banner.className = 'cc';
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookie preferences');
    banner.innerHTML =
      '<h2 class="cc-title" id="cc-title" tabindex="-1">Your cookie choices</h2>' +
      '<p>We use essential storage to remember your choice, and optional analytics cookies to see how the site is used so we can improve it. Analytics stays off unless you accept. <a href="/cookie-policy/">Cookie policy</a></p>' +
      '<div class="cc-prefs" id="cc-prefs" hidden>' +
        '<label class="cc-row"><input type="checkbox" checked disabled><span><b>Strictly necessary</b>Remembers your cookie choice. Always on.</span></label>' +
        '<label class="cc-row"><input type="checkbox" id="cc-analytics"><span><b>Analytics</b>Anonymous visit statistics (Google Analytics).</span></label>' +
      '</div>' +
      '<div class="cc-actions">' +
        '<button type="button" class="btn small" data-cc="accept">Accept all</button>' +
        '<button type="button" class="btn small ghost" data-cc="reject">Reject non-essential</button>' +
        '<button type="button" class="cc-link" data-cc="custom" aria-expanded="false" aria-controls="cc-prefs">Customise</button>' +
        '<button type="button" class="btn small ghost" data-cc="save" hidden>Save choices</button>' +
      '</div>';
    // First in the page so keyboard users reach it straight after the skip link.
    var skip = d.querySelector('.skip');
    if (skip && skip.parentNode) skip.parentNode.insertBefore(banner, skip.nextSibling);
    else d.body.insertBefore(banner, d.body.firstChild);

    var prefs = banner.querySelector('#cc-prefs');
    var custom = banner.querySelector('[data-cc="custom"]');
    var save = banner.querySelector('[data-cc="save"]');
    var box = banner.querySelector('#cc-analytics');
    box.checked = !!(current && current.a);

    function setExpanded(open) {
      prefs.hidden = !open;
      save.hidden = !open;
      custom.setAttribute('aria-expanded', String(open));
    }
    setExpanded(!!expanded);

    banner.addEventListener('click', function (e) {
      var t = e.target.closest ? e.target.closest('[data-cc]') : null;
      if (!t) return;
      var action = t.getAttribute('data-cc');
      if (action === 'accept') apply(true);
      else if (action === 'reject') apply(false);
      else if (action === 'save') apply(box.checked);
      else if (action === 'custom') setExpanded(prefs.hidden);
    });
    banner.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && read()) { hide(); }
    });
    if (expanded) { var h = banner.querySelector('#cc-title'); if (h) h.focus(); }
  }

  // Footer / cookie-policy "Cookie settings" buttons
  d.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-cookie-settings]') : null;
    if (t) { e.preventDefault(); show(true); }
  });

  var saved = read();
  if (saved) {
    if (saved.a) loadAnalytics();
  } else {
    window.setTimeout(function () { if (!read()) show(false); }, 600);
  }
})();
