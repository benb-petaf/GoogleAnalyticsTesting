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
if (currentPage.indexOf('forwardtofriend.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Burberry Site Share');
}
else if (currentPage.indexOf('forwardtofriend-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Burberry Site Share');
}
else if (currentPage.indexOf('order.asp') > 0) {
	sendEvent(petaGA_FormCategory_Activist, petaGA_FormAction_Initiated, 'Burberry Leafletting Form');
}
else if (currentPage.indexOf('order-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'Burberry Leafletting Form');
}
else if (currentPage.indexOf('features/chavs/send_asbo.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'Burberry Chaf Form');
}
else if (currentPage.indexOf('features/chavs/send_asbo_thankyou.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'Burberry Chaf Form');
}
else if (currentPage.indexOf('features/chavs/email_to_friends.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Burberry Site Share Chavs');
}
else if (currentPage.indexOf('features/chavs/email_to_friends_thankyou.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Burberry Site Share Chavs');
}
else if (currentPage.indexOf('features/fur_fighters/share.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Burberry Fur Fighters Share');
}
else if (currentPage.indexOf('features/fur_fighters/share_ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Burberry Fur Fighters Share');
}
else if (currentPage.indexOf('enews-moreinfo.asp') > 0) {
	sendEvent(petaGA_FormCategory_eNews, petaGA_FormAction_Submitted, 'Burberry E-News Header Form');
	sendEvent(petaGA_FormCategory_eNews, petaGA_FormAction_Initiated, 'Burberry E-News Header More Information Form');
}
else if (currentPage.indexOf('enews-ty.asp?fbsc=1') > 0) {
	sendEvent(petaGA_FormCategory_eNews, petaGA_FormAction_Submitted, 'Burberry E-News Header More Information Form');
}
