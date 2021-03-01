/****************************************************** 
-Submit events to GA based on the page we're on.         
-ALL PAGE NAMES IN THIS SECTION NEED TO BE lowercase. 
-Category and Action should be variable names from https://resources.peta.org/googleAnalytics/global/ga_constants.js. 
-Label should be what requestor provided (in single quotes).
_gaq.push(['_trackEvent', Category, Action, 'Label']); 
******************************************************/ 
var currentPage = window.location.toString().toLowerCase();

if (currentPage.indexOf('/about/volunteer/') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Volunteer, petaGA_FormAction_Initiated, 'Volunteer Form']);
}
else if (currentPage.indexOf('/about/volunteer-thanks/default.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Volunteer, petaGA_FormAction_Submitted, 'Volunteer Form']);
}
else if (currentPage.indexOf('/action/join-action-team-thanks/') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'Activist Network Form']);
}
else if (currentPage.indexOf('/action/subscribe-to-enews-provide-more-information/default.asp?') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_eNews, petaGA_FormAction_Submitted, 'Header E-News Opt-In Form']);
}
else if (currentPage.indexOf('/action/subscribe-to-enews-provide-more-information-thanks/') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_eNews, petaGA_FormAction_Submitted, 'Sign Up for E-Mail Updates � Provide More Information Form']);
}
else if (currentPage.indexOf('/action/subscribe-to-enews-thanks/') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'Sign Up for E-Mail Updates Form']);
}
else if (currentPage.indexOf('/donate/browse-gifts/') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Purchase, petaGA_FormAction_Initiated, 'PETA Presents Order Form']);
}
else if (currentPage.indexOf('/features/15th-anniversary-milestones/share.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, '15th Anniversary Milestones Forward to a Friend Form']);
}
else if (currentPage.indexOf('/features/15th-anniversary-milestones/thankyou.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, '15th Anniversary Milestones Forward to a Friend Form']);
}
else if (currentPage.indexOf('/features/burberry-fur-fighters/share.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Bloody Burberry: The Fur Fighters Spread the Word Form']);
}
else if (currentPage.indexOf('/features/burberry-fur-fighters/share_ty.asp?fbsc=1') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Bloody Burberry: The Fur Fighters Spread the Word Form']);
}
else if (currentPage.indexOf('/features/compassionate-kid-award/') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Contest, petaGA_FormAction_Initiated, 'Nominate Your Compassionate Kid for an Award Form']);
}
else if (currentPage.indexOf('/features/compassionate-kid-award-thanks/default.asp?fbsc=1') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Contest, petaGA_FormAction_Submitted, 'Nominate Your Compassionate Kid for an Award Form']);
}
else if (currentPage.indexOf('/features/sea-kittens/create-your-own/share/default.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Sea Kittens Share Your Sea Kitten With Friends form']);
}
else if (currentPage.indexOf('/features/sea-kittens/create-your-own/share/thank-you/default.asp?fbsc=1') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Sea Kittens Share Your Sea Kitten With Friends form']);
}
else if (currentPage.indexOf('/features/sea-kittens/share/') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Sea Kittens Share With Friends form']);
}
else if (currentPage.indexOf('/features/sea-kittens/share/thank-you/default.asp?fbsc=1') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Sea Kittens Share With Friends form']);
}
else if (currentPage.indexOf('/features/whose-skin-are-you-in/default.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'Whose Skin Are You In Pledge form']);
}
else if (currentPage.indexOf('/features/whose-skin-are-you-in/share.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Whose Skin Are You In Share Video form']);
}
else if (currentPage.indexOf('/features/whose-skin-are-you-in/share-thanks.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Whose Skin Are You In Share Video form']);
}
else if (currentPage.indexOf('/issues/animals-are-not-ours-to-eat/vegetarian-starter-kit/') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Pack, petaGA_FormAction_Initiated, 'Vegetarian Starter Kit Request form']);
}
else if (currentPage.indexOf('/issues/animals-are-not-ours-to-eat/vegetarian-starter-kit-thanks/') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Pack, petaGA_FormAction_Submitted, 'Vegetarian Starter Kit Request form']);
}
