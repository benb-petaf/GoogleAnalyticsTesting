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
if (currentPage.indexOf('send_your_photos.asp') > 0) {
	sendEvent(petaGA_FormCategory_Activist, petaGA_FormAction_Initiated, 'PetSmart Photo Submission form');
}
else if (currentPage.indexOf('send_your_photos_ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'PetSmart Photo Submission form');
}
else if (currentPage.indexOf('blow_the_whistle.asp') > 0) {
	sendEvent(petaGA_FormCategory_Activist, petaGA_FormAction_Initiated, 'PetSmart Whistleblower form');
}
else if (currentPage.indexOf('blow_the_whistle_ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'PetSmart Whistleblower form');
}
else if (currentPage.indexOf('forward.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'PetSmart FTF Form');
}
else if (currentPage.indexOf('forward_ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'PetSmart FTF Form');
}
else if (currentPage.indexOf('campaign_updates_sign_up.asp') > 0) {
	sendEvent(petaGA_FormCategory_eNews, petaGA_FormAction_Initiated, 'PetSmart E-News Signup');
}
else if (currentPage.indexOf('campaign_updates_sign_up_ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_eNews, petaGA_FormAction_Submitted, 'PetSmart E-News Signup');
}
