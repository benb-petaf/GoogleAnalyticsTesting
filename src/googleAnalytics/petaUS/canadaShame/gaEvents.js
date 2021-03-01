/****************************************************** 
-Submit events to GA based on the page we're on.         
-ALL PAGE NAMES IN THIS SECTION NEED TO BE lowercase. 
-Category and Action should be variable names from https://resources.peta.org/googleAnalytics/global/ga_constants.js. 
-Label should be what requestor provided (in single quotes).
_gaq.push(['_trackEvent', Category, Action, 'Label']); 
******************************************************/ 

//Get the current page's URL and convert it to lowercase.
var currentPage = window.location.toString().toLowerCase();
var refferer = document.referrer.toString().toLowerCase();

//Check to see if currentPage matches a given URL and submit a GA Event if it does.
if (currentPage.indexOf('demo.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Initiated, 'Canada\'s Shame Demo Form']);
}
else if (currentPage.indexOf('demop2.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Initiated, 'Canada\'s Shame Demo Form p2']);
}
else if (currentPage.indexOf('demoty.aspx') > 0) {
	// "Take Action" Submission Event if we came from demo.aspx.
	if( referrer.indexOf('demo.aspx') > -1 )
	{
		_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'Canada\'s Shame Demo Form']);
	}
	// "Take Action" Submission Event if we came from demop2.aspx.
	else if( referrer.indexOf('demop2.aspx') > -1 )
	{
		_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'Canada\'s Shame Demo Form p2']);
	}	
}
else if (currentPage.indexOf('ecardstop.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_eCard, petaGA_FormAction_Initiated, 'Canada\'s Shame Stop the Seal Slaughter']);
}
else if (currentPage.indexOf('ecardstopty.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_eCard, petaGA_FormAction_Submitted, 'Canada\'s Shame Stop the Seal Slaughter']);
}
else if (currentPage.indexOf('ecardbloody.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_eCard, petaGA_FormAction_Initiated, 'Canada\'s Shame Bloody Canada']);
}
else if (currentPage.indexOf('ecardbloodyty.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_eCard, petaGA_FormAction_Submitted, 'Canada\'s Shame Bloody Canada']);
}
