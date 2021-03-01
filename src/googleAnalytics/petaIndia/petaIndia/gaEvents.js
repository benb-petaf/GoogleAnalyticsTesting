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
if (currentPage.indexOf('change-everything/share-with-friends.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Change Everything E-Card FTF Form']);
}
else if (currentPage.indexOf('change-everything/share-with-friends-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Change Everything E-Card FTF Form']);
}
else if (currentPage.indexOf('testing123/share-with-friends.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Testing 1 2 3 FTF Form']);
}
else if (currentPage.indexOf('testing123/share-with-friends-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Testing 1 2 3 FTF Form']);
}
else if (currentPage.indexOf('about/job-application.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Registration, petaGA_FormAction_Initiated, 'Job Application Form']);
}
else if (currentPage.indexOf('about/job-application-ty.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Registration, petaGA_FormAction_Submitted, 'Job Application Form']);
}
else if (currentPage.indexOf('about/share-with-friends.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Share With Friends Form']);
}
else if (currentPage.indexOf('about/share-with-friends-ty.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Share With Friends Form']);
}
else if (currentPage.indexOf('about/sign-up-for-enews.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_eNews, petaGA_FormAction_Initiated, 'E-News Sign-Up Form']);
}
else if (currentPage.indexOf('about/sign-up-for-enews-ty.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_eNews, petaGA_FormAction_Submitted, 'E-News Sign-Up Form']);
}
else if (currentPage.indexOf('action/sign-up-to-be-an-activist.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Initiated, 'Activist Sign-Up Form']);
}
else if (currentPage.indexOf('action/sign-up-to-be-an-activist-peta-ty.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'Activist Sign-Up Form PETA India']);
}
else if (currentPage.indexOf('action/sign-up-to-be-an-activist-dishoom-ty.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'Activist Sign-Up Form Dishoom']);
}
else if (currentPage.indexOf('donate/become-a-member.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Donate, petaGA_FormAction_Initiated, 'Become a Member Form']);
}
else if (currentPage.indexOf('donate/credit-card.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Donate, petaGA_FormAction_Initiated, 'Credit Card Donation Form']);
}
else if (currentPage.indexOf('donate/donate-now.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Donate, petaGA_FormAction_Initiated, 'Donate Now Form']);
}
else if (currentPage.indexOf('donate/make-a-donation-using-demand-draft.aspx') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Donate, petaGA_FormAction_Initiated, 'Demand Draft Donation']);
}
