/* Knossen Webdesign — Cookie Banner */
(function() {
  'use strict';
  var consent = localStorage.getItem('kw_cookie_consent');
  if (consent) return;

  var banner = document.createElement('div');
  banner.id = 'kw-cookie-banner';
  banner.innerHTML = [
    '<div class="kw-cookie-inner">',
    '  <div class="kw-cookie-text">',
    '    <strong>Cookies</strong>',
    '    <p>Wij gebruiken cookies om onze website te verbeteren. Functionele cookies zijn noodzakelijk; analytische cookies plaatsen we alleen met uw toestemming. <a href="/privacyverklaring.html#cookies">Meer info</a></p>',
    '  </div>',
    '  <div class="kw-cookie-buttons">',
    '    <button id="kw-cookie-accept" class="kw-btn kw-btn-accept">Alles accepteren</button>',
    '    <button id="kw-cookie-functional" class="kw-btn kw-btn-functional">Alleen noodzakelijk</button>',
    '  </div>',
    '</div>'
  ].join('\n');

  document.body.appendChild(banner);
  requestAnimationFrame(function() {
    requestAnimationFrame(function() { banner.classList.add('kw-visible'); });
  });

  document.getElementById('kw-cookie-accept').addEventListener('click', function() {
    localStorage.setItem('kw_cookie_consent', 'all');
    closeBanner();
    loadAnalytics();
  });

  document.getElementById('kw-cookie-functional').addEventListener('click', function() {
    localStorage.setItem('kw_cookie_consent', 'functional');
    closeBanner();
  });

  function closeBanner() {
    banner.classList.remove('kw-visible');
    setTimeout(function() { banner.remove(); }, 400);
  }

  function loadAnalytics() {
    // Vervang 'G-XXXXXXXXXX' met je eigen Measurement ID en uncomment:
    /*
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX', { anonymize_ip: true });
    */
  }
})();

// Bij volgende bezoeken: laad analytics als eerder geaccepteerd
(function() {
  if (localStorage.getItem('kw_cookie_consent') === 'all') {
    // Uncomment en vul je GA ID in:
    /*
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX', { anonymize_ip: true });
    */
  }
})();
