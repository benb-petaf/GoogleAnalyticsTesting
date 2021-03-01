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
if (currentPage.indexOf('index.aspx') > 0 || currentPage.indexOf('index-1.aspx') > 0 || currentPage.indexOf('index-2.aspx') > 0 || window.location.pathname == '/') {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'Meet Your Meat Pledge to Be Veg Form');
}
else if (currentPage.indexOf('thankyou-pledge-adult.aspx') > 0 || currentPage.indexOf('thankyou-pledge-teen.aspx') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'Meet Your Meat Pledge to Be Veg Form');
}
else if (currentPage.indexOf('tellafriend.aspx') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Meet Your Meat TAF Form');
}
else if (currentPage.indexOf('thankyou-share.aspx') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Meet Your Meat TAF Form');
}
