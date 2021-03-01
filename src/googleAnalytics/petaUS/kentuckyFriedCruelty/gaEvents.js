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
if (currentPage.indexOf('index.php') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'Pink KFC Petition');
}
else if (currentPage.indexOf('g-pinkpetition.php') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'Pink KFC Petition');
}
else if (currentPage.indexOf('g-pinkpetition-ty.php') > 0) {
	if (currentPage.indexOf('?fbsc=1') > 0)	{
		sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Pink KFC Petition');
	}
	else {
		sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'Pink KFC Petition');
	}
}
else if (currentPage.indexOf('g-pinkpetition-fwd.php') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Pink KFC Petition');
}
else if (currentPage.indexOf('forward.php') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'KFC Site Forward');
}
else if (currentPage.indexOf('forward-ty.php') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'KFC Site Forward');
}
else if (currentPage.indexOf('g-vskorderform.php') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Initiated, 'KFC VSK Order Form');
}
else if (currentPage.indexOf('g-vskorderform-ty.php') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Submitted, 'KFC VSK Order Form');
}
else if (currentPage.indexOf('g-demoform.php') > 0) {
	sendEvent(petaGA_FormCategory_Volunteer, petaGA_FormAction_Initiated, 'Pink KFC Demo Organize');
}
else if (currentPage.indexOf('g-demoform-ty.php') > 0) {
	sendEvent(petaGA_FormCategory_Volunteer, petaGA_FormAction_Submitted, 'Pink KFC Demo Organize');
}
else if (currentPage.indexOf('g-tell_us.php') > 0) {
	sendEvent(petaGA_FormCategory_Feedback, petaGA_FormAction_Initiated, 'Pink KFC Demo Feedback');
}
else if (currentPage.indexOf('g-tell_us_ty.php') > 0) {
	sendEvent(petaGA_FormCategory_Feedback, petaGA_FormAction_Submitted, 'Pink KFC Demo Feedback');
}
else if (currentPage.indexOf('superchicksisters/share.php') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'KFC Super Chick Sisters Game');
}
else if (currentPage.indexOf('superchicksisters/share-ty.php') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'KFC Super Chick Sisters Game');
}