/****************************************************** 
-Submit events to GA based on the page we're on.         
-ALL PAGE NAMES IN THIS SECTION NEED TO BE lowercase. 
-Category and Action should be variable names from https://resources.peta.org/googleAnalytics/global/ga_constants.js. 
-Label should be what requestor provided (in single quotes).
sendEvent(trackEvent, Category, Action, 'Label');  
******************************************************/ 
var currentPage = window.location.toString().toLowerCase();

if (currentPage.indexOf('signup.aspx') > 0) {
	sendEvent(petaGA_FormCategory_eNews, petaGA_FormAction_Initiated, 'McCruelty Campaign Updates');
}
else if (currentPage.indexOf('signupty.aspx') > 0) {
	sendEvent(petaGA_FormCategory_eNews, petaGA_FormAction_Submitted, 'McCruelty Campaign Updates');
}
else if (currentPage.indexOf('actionpackthankyou.aspx') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Submitted, 'McCruelty Action Pack');
}
else if (currentPage.indexOf('actionpack.aspx') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Initiated, 'McCruelty Action Pack');
}
else if (currentPage.indexOf('actionpackp2.aspx') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Initiated, 'McCruelty Action Pack');
}
else if (currentPage.indexOf('demo.aspx') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'McCruelty Demo Pack');
}
else if (currentPage.indexOf('demothankyou.aspx') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'McCruelty Demo Pack');
}
else if (currentPage.indexOf('generatorshare.aspx') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'McCruelty Generator Share');
}
else if (currentPage.indexOf('superchicksistersshare.aspx') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'McCruelty Super Chick Sisters Share');
}
else if (currentPage.indexOf('superchicksisterssharety.aspx') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'McCruelty Super Chick Sisters Share');
}
else if (currentPage.indexOf('vsk.aspx') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Initiated, 'McCruelty VSK');
}
else if (currentPage.indexOf('vskty.aspx') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Submitted, 'McCruelty VSK');
}