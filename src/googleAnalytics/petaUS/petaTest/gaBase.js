/************DANGER ZONE - DO NOT TOUCH - FOR REAL************/
	var currentPage = window.location.toString().toLowerCase(); 		
	
	var _gaq = _gaq || [];
	
	//These two lines are for Enhanced Link Attribution
	var pluginUrl = '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
	_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
	
	_gaq.push(['_setAccount', 'UA-23739476-41']);
	_gaq.push(['_setDomainName', 'petatest.org']);
	_gaq.push(['_setAllowHash', false]);
	_gaq.push(['_setAllowLinker', true]);
	_gaq.push(['_setCampTermKey', 'c']);
	_gaq.push(['_trackPageview']);        
	
	(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
/************DANGER ZONE - DO NOT TOUCH - FOR REAL************/