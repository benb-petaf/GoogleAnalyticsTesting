/****************************************************** 
-Submit events to GA based on the page we're on.         
-ALL PAGE NAMES IN THIS SECTION NEED TO BE lowercase. 
-Category and Action should be variable names from https://resources.peta.org/googleAnalytics/global/ga_constants.js. 
-Label should be what requestor provided (in single quotes).
sendEvent(trackEvent, Category, Action, 'Label');  
******************************************************/ 

//Get the current page's URL and convert it to lowercase.
var currentPage = window.location.toString().toLowerCase();

//Check to see if currentPage matches a given URL and submit a GA Event if it does.
if (currentPage.indexOf('forward.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Mars Site Share');
}
else if (currentPage.indexOf('forward-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Mars Site Share');
}