(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

var page;
if (document.location.pathname.indexOf('?') > -1) {
	page = document.location.pathname + '&fia=true';
}
else{
	page = document.location.pathname + '?fia=true';
}

ga('create', 'UA-25573941-11', 'auto');
ga('set', 'page', page);
ga('set', 'title', ia_document.title);
ga('send', 'pageview');