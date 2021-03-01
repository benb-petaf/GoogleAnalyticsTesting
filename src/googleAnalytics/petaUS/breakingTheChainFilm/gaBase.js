(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-23739476-59', 'auto', { 'siteSpeedSampleRate': 50 });

/* PII-redaction */
if ( typeof petaPIIURL === 'object' && petaPIIURL.containsPII() ) {
	ga('set', 'location', petaPIIURL.getPIIRedactedURL());
	ga('set', 'title', '[PII REDACTED FROM PAGE URL]');
}

/* Remarketing */
ga('require', 'displayfeatures');

/* Ecommerce */
ga('require', 'ecommerce');

/* Cross Domain Auto Linking */
//ga('require', 'linker');
//ga('linker:autoLink', petaGA_linkedDomains);

/* Enhanced Link Attribution */
ga('require', 'linkid', 'linkid.js');
//ga('require', 'outboundLinkTracker');
ga('send', 'pageview');
