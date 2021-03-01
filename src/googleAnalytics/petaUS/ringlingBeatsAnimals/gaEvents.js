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
if (currentPage.indexOf('share.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Ringling TAF Form']);
}
else if (currentPage.indexOf('share-thanks.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Ringling TAF Form']);
}
else if (currentPage.indexOf('bound-babies-share.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Ringling TAF Form']);
}
else if (currentPage.indexOf('share-thanks.asp?fbsc=1') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Ringling TAF Form']);
}
else if (currentPage.indexOf('ringling-refund.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Feedback, petaGA_FormAction_Initiated, 'Ringling Refund']);
}
else if (currentPage.indexOf('ringling-refund-thanks.asp?fbsc=1') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Feedback, petaGA_FormAction_Submitted, 'Ringling Refund']);
}
