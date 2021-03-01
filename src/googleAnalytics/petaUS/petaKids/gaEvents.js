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
if (currentPage.indexOf('freehelpinganimalsmagazine.asp') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Initiated, 'PETA Kids Free Magazine');
}
else if (currentPage.indexOf('freehelpinganimalsmagazinety.asp') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Submitted, 'PETA Kids Free Magazine');
}
else if (currentPage.indexOf('contact_peta.asp') > 0) {
	sendEvent(petaGA_FormCategory_Feedback, petaGA_FormAction_Initiated, 'PETA Kids Contact Form');
}
else if (currentPage.indexOf('report-abuse.asp') > 0) {
	sendEvent(petaGA_FormCategory_Feedback, petaGA_FormAction_Initiated, 'PETA Kids Report Abuse Form');
}
else if (currentPage.indexOf('report-abuse-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_Feedback, petaGA_FormAction_Submitted, 'PETA Kids Report Abuse Form');
}
else if (currentPage.indexOf('enews.asp') > 0) {
	sendEvent(petaGA_FormCategory_eNews, petaGA_FormAction_Initiated, 'PETA Kids E News Signup Form');
}
else if (currentPage.indexOf('thankyou-p.asp') > 0) {
	sendEvent(petaGA_FormCategory_eNews, petaGA_FormAction_Submitted, 'PETA Kids E News Signup Form');
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'PETA Kids E News Signup Form');
}
else if (currentPage.indexOf('forward-to-friends-thankyou.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'PETA Kids E News Signup Form');
}
else if (currentPage.indexOf('pledgetohelpanimalsincircuses.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'PETA Kids Help Animals in Circuses');
}
else if (currentPage.indexOf('pledgetohelpanimalsincircuses-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'PETA Kids Help Animals in Circuses');
}
else if (currentPage.indexOf('helplucy.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'PETA Kids Help Lucy Form');
}
else if (currentPage.indexOf('helplucy-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'PETA Kids Help Lucy Form');
}
else if (currentPage.indexOf('petsmart-mission.asp') > 0) {
	sendEvent(petaGA_FormCategory_Submission, petaGA_FormAction_Initiated, 'PETA Kids PetSmart Pedge');
}
else if (currentPage.indexOf('petsmart-mission-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_Submission, petaGA_FormAction_Submitted, 'PETA Kids PetSmart Pedge');
}
else if (currentPage.indexOf('ref/recommend.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'PETA Kids TAF Form');
}
else if (currentPage.indexOf('ref/recommend_thanks.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'PETA Kids TAF Form');
}
else if (currentPage.indexOf('sea_kittens/game_f2f.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'PETA Kids Sea Kittens FTF');
}
else if (currentPage.indexOf('sea_kittens/game_f2f-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'PETA Kids Sea Kittens FTF');
}
else if (currentPage.indexOf('report-copyright.asp') > 0) {
	sendEvent(petaGA_FormCategory_Feedback, petaGA_FormAction_Initiated, 'PETA Kids Copyright Form');
}
else if (currentPage.indexOf('report-copyright-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_Feedback, petaGA_FormAction_Submitted, 'PETA Kids Copyright Form');
}
else if (currentPage.indexOf('free_stickers.asp') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Initiated, 'PETA Kids Free Stickers');
}
else if (currentPage.indexOf('free_stickers_ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Submitted, 'PETA Kids Free Stickers');
}
else if (currentPage.indexOf('mccruelty-ecard.asp') > 0) {
	sendEvent(petaGA_FormCategory_eCard, petaGA_FormAction_Initiated, 'PETA Kids McCruelty E-Card');
}
else if (currentPage.indexOf('mccruelty-mission-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_eCard, petaGA_FormAction_Submitted, 'PETA Kids McCruelty E-Card');
}
else if (currentPage.indexOf('ecards/preview.asp?cardid=kid002') > 0) {
	sendEvent(petaGA_FormCategory_eCard, petaGA_FormAction_Initiated, 'PETA Kids Easter E-Card');
}
else if (currentPage.indexOf('ecards/cardsubmit1.asp') > 0) {
	sendEvent(petaGA_FormCategory_eCard, petaGA_FormAction_Submitted, 'PETA Kids Easter E-Card');
}
else if (currentPage.indexOf('ecards/preview.asp?cardid=mom1') > 0) {
	sendEvent(petaGA_FormCategory_eCard, petaGA_FormAction_Initiated, 'PETA Kids Easter E-Card');
}
else if (currentPage.indexOf('ecard/july4/share.asp') > 0) {
	sendEvent(petaGA_FormCategory_eCard, petaGA_FormAction_Initiated, 'PETA Kids July 4 E-Card');
}
else if (currentPage.indexOf('ecard/july4/thankyou.asp') > 0) {
	sendEvent(petaGA_FormCategory_eCard, petaGA_FormAction_Submitted, 'PETA Kids July 4 E-Card');
}
else if (currentPage.indexOf('feat/yugikids/index.asp') > 0) {
	sendEvent(petaGA_FormCategory_Contest, petaGA_FormAction_Initiated, 'PETA Kids Yu Gi Oh Poster');
}
else if (currentPage.indexOf('vsk/order.asp') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Initiated, 'PETA Kids VSK');
}
else if (currentPage.indexOf('vsk/thankyou.html') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Submitted, 'PETA Kids VSK');
}
else if (currentPage.indexOf('sparklehearts.asp') > 0) {
	sendEvent(petaGA_FormCategory_Contest, petaGA_FormAction_Initiated, 'Sparklehearts contest');
}
else if (currentPage.indexOf('sparklehearts-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_Contest, petaGA_FormAction_Submitted, 'Sparklehearts contest');
}
