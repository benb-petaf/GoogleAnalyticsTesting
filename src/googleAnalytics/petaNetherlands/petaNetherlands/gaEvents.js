/****************************************************** 
-Submit events to GA based on the page we're on.         
-ALL PAGE NAMES IN THIS SECTION NEED TO BE lowercase. 
-Category and Action should be variable names from https://resources.peta.org/googleAnalytics/global/ga_constants.js. 
-Label should be what requestor provided (in single quotes).
sendEvent(Category, Action, 'Label'); 
******************************************************/ 

//Get the current page's URL and convert it to lowercase.
var currentPage = window.location.toString().toLowerCase();

//Check to see if currentPage matches a given URL and submit a GA Event if it does.
if (currentPage.indexOf('vrijwilligers.asp') > 0) {
	sendEvent(petaGA_FormCategory_Volunteer, petaGA_FormAction_Initiated, 'PETA NL Volunteer Form');
}
else if (currentPage.indexOf('activisten-thankyou_new.asp') > 0) {
	sendEvent(petaGA_FormCategory_Volunteer, petaGA_FormAction_Submitted, 'PETA NL Volunteer Form');
}
else if (currentPage.indexOf('activisten-sorry_new.asp') > 0) {
	sendEvent(petaGA_FormCategory_Volunteer, petaGA_FormAction_Submitted, 'PETA NL Volunteer Form');
}