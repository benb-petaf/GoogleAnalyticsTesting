/****************************************************** 
-Submit events to GA based on the page we're on.         
-ALL PAGE NAMES IN THIS SECTION NEED TO BE lowercase. 
-Category and Action should be variable names from https://resources.peta.org/googleAnalytics/global/ga_constants.js. 
-Label should be what requestor provided (in single quotes).
_gaq.push(['_trackEvent', Category, Action, 'Label']); 
******************************************************/ 

//Get the current page's URL and convert it to lowercase.
var currentPage = window.location.toString().toLowerCase();

//Check to see if currentPage matches a given URL and submit a GA Event if it does.
if (currentPage.indexOf('sharethelove.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend , petaGA_FormAction_Initiated, 'PETA XXX - Share The Love']);
}
else if (currentPage.indexOf('sharethelove-ty.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend , petaGA_FormAction_Submitted, 'PETA XXX - Share The Love']);
}