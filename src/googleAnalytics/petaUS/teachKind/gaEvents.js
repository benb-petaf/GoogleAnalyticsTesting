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
if (currentPage.indexOf('ar-club.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Initiated, 'TeachKind Join Form']);
}
else if (currentPage.indexOf('ar-club-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'TeachKind Join Form']);
}
else if (currentPage.indexOf('change-chained-dogs.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Initiated, 'TeachKind Chained Dog Form']);
}
else if (currentPage.indexOf('change-chained-dogs-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'TeachKind Chained Dog Form']);
}
else if (currentPage.indexOf('freedissectionalternative.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'TeachKind Dissection Alt']);
}
else if (currentPage.indexOf('freedissectionalternative-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'TeachKind Dissection Alt']);
}
else if (currentPage.indexOf('merchandise.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Purchase, petaGA_FormAction_Initiated, 'TeachKind Free Materials']);
}
else if (currentPage.indexOf('merchandise-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Purchase, petaGA_FormAction_Submitted, 'TeachKind Free Materials']);
}
else if (currentPage.indexOf('network.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Initiated, 'TeachKind Teacher\'s Network']);
}
else if (currentPage.indexOf('network-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'TeachKind Teacher\'s Network']);
}
else if (currentPage.indexOf('mfm-implement.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Initiated, 'TeachKind MFM Form']);
}
else if (currentPage.indexOf('mfm-implement-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'TeachKind MFM Form']);
}
else if (currentPage.indexOf('recommend.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'TeachKind Site Recommend']);
}
else if (currentPage.indexOf('recommendprocess.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'TeachKind Site Recommend']);
}