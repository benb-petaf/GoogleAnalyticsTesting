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
if (currentPage.indexOf('index-intl.asp') > 0) {
	sendEvent(petaGA_FormCategory_Activist, petaGA_FormAction_Initiated, 'PETA Latino Activist Form');
}
else if (currentPage.indexOf('thankyou.asp?fbsc=1') > 0) {
	sendEvent(petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'PETA Latino Activist Form');
}
else if (currentPage.indexOf('email.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'PETA Latino FTF form');
}
else if (currentPage.indexOf('cardprocess.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'PETA Latino FTF form');
}
else if (currentPage.indexOf('email.html') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'PETA Latino FTF form');
}
else if (currentPage.indexOf('enews.asp') > 0) {
	sendEvent(petaGA_FormCategory_eNews, petaGA_FormAction_Initiated, 'PETA Latino E-News');
}
else if (currentPage.indexOf('enews-thx.html?fbsc=1') > 0) {
	sendEvent(petaGA_FormCategory_eNews, petaGA_FormAction_Submitted, 'PETA Latino E-News');
}
else if (currentPage.indexOf('chavez/award.html') > 0) {
	sendEvent(petaGA_FormCategory_Activist, petaGA_FormAction_Initiated, 'PETA Latino Cesar Chavez Award');
}
