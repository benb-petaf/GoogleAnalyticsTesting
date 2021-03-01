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
if (currentPage.indexOf('score.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Score with the Lettuce Ladies');
}
else if (currentPage.indexOf('score_results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Score with the Lettuce Ladies');
}
else if (currentPage.indexOf('forward.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Lettuce Ladies Site Share');
}
else if (currentPage.indexOf('forward_ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Lettuce Ladies Site Share');
}
else if (currentPage.indexOf('vote.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Lettuce Ladies Vote');
}
else if (currentPage.indexOf('vote_results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Lettuce Ladies Vote');
}
else if (currentPage.indexOf('submitphoto.asp') > 0) {
	sendEvent(petaGA_FormCategory_Activist, petaGA_FormAction_Initiated, 'Lettuce Lady Gallery Submit');
}
else if (currentPage.indexOf('submitphoto_ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'Lettuce Lady Gallery Submit');
}
else if (currentPage.indexOf('vote_bb.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Initiated, 'Broccoli Boys Vote');
}
else if (currentPage.indexOf('vote_bb_results.asp') > 0) {
	sendEvent(petaGA_FormCategory_Poll, petaGA_FormAction_Submitted, 'Broccoli Boys Vote');
}