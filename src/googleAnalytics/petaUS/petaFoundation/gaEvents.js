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
if (currentPage.indexOf('material_usage.php') > 0) {
	sendEvent(petaGA_FormCategory_Submission, petaGA_FormAction_Initiated, 'Material Usage Form');
}
else if (currentPage.indexOf('material_usage_ty.php') > 0) {
	sendEvent(petaGA_FormCategory_Submission, petaGA_FormAction_Submitted, 'Material Usage Form');
}
else if (currentPage.indexOf('material_usage-spanish.php') > 0) {
	sendEvent(petaGA_FormCategory_Submission, petaGA_FormAction_Initiated, 'Material Usage Spanish Form');
}
else if (currentPage.indexOf('material_usage_ty-spanish.php') > 0) {
	sendEvent(petaGA_FormCategory_Submission, petaGA_FormAction_Submitted, 'Material Usage Spanish Form');
}
