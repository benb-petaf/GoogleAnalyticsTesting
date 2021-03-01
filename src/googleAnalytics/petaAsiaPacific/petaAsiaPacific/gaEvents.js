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
if (currentPage.indexOf('aboutpeta-contact-general.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Feedback, petaGA_FormAction_Initiated, 'PAP Contact Form']);
}
else if (currentPage.indexOf('aboutpeta-contact-general-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Feedback, petaGA_FormAction_Submitted, 'PAP Contact Form']);
}
else if (currentPage.indexOf('aboutpeta-contact-ideas.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Feedback, petaGA_FormAction_Initiated, 'PAP Contact Form']);
}
else if (currentPage.indexOf('aboutpeta-contact-ideas-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Feedback, petaGA_FormAction_Submitted, 'PAP Contact Form']);
}
else if (currentPage.indexOf('aboutpeta-contact-media.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Feedback, petaGA_FormAction_Initiated, 'PAP Contact Form']);
}
else if (currentPage.indexOf('aboutpeta-contact-media-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Feedback, petaGA_FormAction_Submitted, 'PAP Contact Form']);
}
else if (currentPage.indexOf('aboutpeta-contact-reportcruelty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Initiated, 'PAP Report Cruelty Form']);
}
else if (currentPage.indexOf('aboutpeta-contact-reportcruelty-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'PAP Report Cruelty Form']);
}
else if (currentPage.indexOf('aboutpeta-contact-website.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Feedback, petaGA_FormAction_Initiated, 'PAP Contact Form']);
}
else if (currentPage.indexOf('aboutpeta-contact-website-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Feedback, petaGA_FormAction_Submitted, 'PAP Contact Form']);
}
else if (currentPage.indexOf('aboutpeta-jobs-apply.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Registration, petaGA_FormAction_Initiated, 'PAP Jobs Form']);
}
else if (currentPage.indexOf('aboutpeta-jobs-apply-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Registration, petaGA_FormAction_Submitted, 'PAP Jobs Form']);
}
else if (currentPage.indexOf('aboutpeta-jobs-apply-australia.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Registration, petaGA_FormAction_Initiated, 'PAP Australia Jobs Form']);
}
else if (currentPage.indexOf('aboutpeta-jobs-apply-australia-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Registration, petaGA_FormAction_Submitted, 'PAP Australia Jobs Form']);
}
else if (currentPage.indexOf('activist-forwardsite.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'PAP Activist Site Share']);
}
else if (currentPage.indexOf('activist-forwardsite-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'PAP Activist Site Share']);
}
else if (currentPage.indexOf('alicia_psa/share.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'PAP Alicia Silverstone site forward']);
}
else if (currentPage.indexOf('alicia_psa/share-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'PAP Alicia Silverstone site forward']);
}
else if (currentPage.indexOf('feature-be-prepared-for-natural-disasters.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'PAP Disaster FTF Form']);
}
else if (currentPage.indexOf('feature-be-prepared-for-natural-disasters-thank-you.asp?fbsc=1') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'PAP Disaster FTF Form']);
}
else if (currentPage.indexOf('feature-best-dressed-celebs-08.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Initiated, 'PAP Nominate Celebs 08 form']);
}
else if (currentPage.indexOf('feature-best-dressed-celebs-08-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'PAP Nominate Celebs 08 form']);
}
else if (currentPage.indexOf('featurechinafurinvestigation2010.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'PAP China fur FTF from']);
}
else if (currentPage.indexOf('featurechinafurinvestigation2010ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'PAP China fur FTF from']);
}
else if (currentPage.indexOf('feature-indonesiasexoticskins.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'PAP Exotic Skins FTF Form']);
}
else if (currentPage.indexOf('feature-indonesiasexoticskinsty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'PAP Exotic Skins FTF Form']);
}
else if (currentPage.indexOf('forwardpage.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'PAP Site Share page']);
}
else if (currentPage.indexOf('forwardpage-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'PAP Site Share page']);
}
else if (currentPage.indexOf('subscribe-enews.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_eNews, petaGA_FormAction_Initiated, 'PAP E-News']);
}
else if (currentPage.indexOf('subscribe-enews-ty.asp') > 0) {
	_gaq.push(['_trackEvent', petaGA_FormCategory_eNews, petaGA_FormAction_Submitted, 'PAP E-News']);
}
