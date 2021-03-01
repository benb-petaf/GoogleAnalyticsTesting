/****************************************************** 
-Submit events to GA based on the page we're on.         
-ALL PAGE NAMES IN THIS SECTION NEED TO BE lowercase. 
-Category and Action should be variable names from https://resources.peta.org/googleAnalytics/global/ga_constants.js. 
-Label should be what requestor provided (in single quotes).
_sendEvent(Category, Action, 'Label'); 
******************************************************/ 

//Get the current page's URL and convert it to lowercase.
var currentPage = window.location.toString().toLowerCase();

//Check to see if currentPage matches a given URL and submit a GA Event if it does.
if (currentPage.indexOf('takecharge/t-likeitonpeta2.asp') > 0) {
	sendEvent(petaGA_FormCategory_Feedback, petaGA_FormAction_Initiated, 'Suggest Phrases to Like');
}
else if (currentPage.indexOf('takecharge/t-likeitonpeta2ty.asp?fbsc=1') > 0) {
	sendEvent(petaGA_FormCategory_Feedback, petaGA_FormAction_Submitted, 'Suggest Phrases to Like');
}
else if (currentPage.indexOf('takecharge/t-chinafur.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'Chinese Fur Farms: Take Our Fur-Free Pledge');
}
else if (currentPage.indexOf('takecharge/t-chinafur-thankyou.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'Chinese Fur Farms: Take Our Fur-Free Pledge');
}
else if (currentPage.indexOf('takecharge/t-dogcatfur.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'China�s Shocking Dog and Fur Trade Forward to Friends');
}
else if (currentPage.indexOf('takecharge/t-dogcatfur-thanks2.asp?fbsc=1') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'China�s Shocking Dog and Fur Trade Forward to Friends');
}
else if (currentPage.indexOf('takecharge/t-morning_routine.asp') > 0) {
	sendEvent(petaGA_FormCategory_Submission, petaGA_FormAction_Initiated, 'How Cruelty-Free Is Your Morning Routine Points Submission Form');
}
else if (currentPage.indexOf('takecharge/t-morning_routine-ty.asp?fbsc=1') > 0) {
	sendEvent(petaGA_FormCategory_Submission, petaGA_FormAction_Submitted, 'How Cruelty-Free Is Your Morning Routine Points Submission Form');
}
else if (currentPage.indexOf('college/college_form.asp') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Initiated, 'College Leafleting Pack Order Form');
}
else if (currentPage.indexOf('college/college_form_ty.asp?fbsc=1') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Submitted, 'College Leafleting Pack Order Form');
}
else if (currentPage.indexOf('livevegpak.asp') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Initiated, 'Free Sticker Pack Order Form');
}
else if (currentPage.indexOf('thankyou-veg.asp?fbsc=1') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Submitted, 'Free Sticker Pack Order Form');
}
else if (currentPage.indexOf('takecharge/t-catdogpics.asp') > 0) {
	sendEvent(petaGA_FormCategory_Submission, petaGA_FormAction_Initiated, 'Post Your \'If You Wouldn\'t Eat a Dog or Cat �\' Pic');
}
else if (currentPage.indexOf('takecharge/t-catdogpics_ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_Submission, petaGA_FormAction_Submitted, 'Post Your \'If You Wouldn\'t Eat a Dog or Cat �\' Pic');
}
else if (currentPage.indexOf('takecharge/leafletpack.asp') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Initiated, 'Request peta2 Campaign Materials');
}
else if (currentPage.indexOf('takecharge/leafletpackthanks.asp') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Submitted, 'Request peta2 Campaign Materials');
}
else if (currentPage.indexOf('outthere/o-angel.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'David Boreanaz Is an "Angel" for Animals:  Pledge to be an Angel for Animals ');
}
else if (currentPage.indexOf('outthere/o-angel-ty.asp?fbsc=1') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'David Boreanaz Is an "Angel" for Animals:  Pledge to be an Angel for Animals ');
}
else if (currentPage.indexOf('outthere/o-eliroth.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Eli Roth Speaks Out Against Violence Share With Friends');
}
else if (currentPage.indexOf('outthere/o-eliroththankyou.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Eli Roth Speaks Out Against Violence Share With Friends');
}
else if (currentPage.indexOf('outthere/o-falloutboykfc.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'Fall Out Boy Fight KFC Cruelty Petition');
}
else if (currentPage.indexOf('outthere/o-falloutboykfc_thanks.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'Fall Out Boy Fight KFC Cruelty Petition');
}
else if (currentPage.indexOf('outthere/o-famke.asp') > 0) {
	sendEvent(petaGA_FormCategory_Submission, petaGA_FormAction_Initiated, 'Famke Janssen Is an Angel for Animals Tagline Submission');
}
else if (currentPage.indexOf('outthere/o-famke-thanks.asp') > 0) {
	sendEvent(petaGA_FormCategory_Submission, petaGA_FormAction_Submitted, 'Famke Janssen Is an Angel for Animals Tagline Submission');
}
else if (currentPage.indexOf('outthere/o_fid_petition.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'Fur Is Definitely Dead Petition');
}
else if (currentPage.indexOf('outthere/o_fid_petition_ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'Fur Is Definitely Dead Petition');
}
else if (currentPage.indexOf('takecharge/t-givemccrueltythebird.asp') > 0) {
	sendEvent(petaGA_FormCategory_Submission, petaGA_FormAction_Initiated, 'Give McCruelty the Bird! Photo Submission Form');
}
else if (currentPage.indexOf('outthere/o-justinbieber.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'Justin Bieber Animal Homelessness Pledge');
}
else if (currentPage.indexOf('outthere/o-justinbieber-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'Justin Bieber Animal Homelessness Pledge');
}
else if (currentPage.indexOf('outthere/o-save99.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'More Join the Fight to Save #99 Petition');
}
else if (currentPage.indexOf('outthere/o-save99_thanks.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'More Join the Fight to Save #99 Petition');
}
else if (currentPage.indexOf('outthere/o-mychildrenmybride-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'Scary Kids Scaring Kids KFC Pledge');
}
else if (currentPage.indexOf('outthere/o-scarykids.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'Scary Kids Scaring Kids KFC Pledge');
}
else if (currentPage.indexOf('outthere/o-scarykids-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'Scary Kids Scaring Kids KFC Pledge');
}
else if (currentPage.indexOf('outthere/o-audreykitchingsavesanimals.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'Audrey Kitching Saves Animals Animal Homelessness Pledge');
}
else if (currentPage.indexOf('outthere/o-audreykitchingsavesanimals-ty.asp?fbsc=1') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'Audrey Kitching Saves Animals Animal Homelessness Pledge');
}
else if (currentPage.indexOf('outthere/o-audrina-patridge.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'Audrey Kitching Saves Animals Animal Homelessness Pledge');
}
else if (currentPage.indexOf('outthere/o-audrina-patridge-ty.asp ') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'Audrey Kitching Saves Animals Animal Homelessness Pledge');
}
else if (currentPage.indexOf('outthere/o-tommylee.asp') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Initiated, 'Tommy Lee: \'Ink, Not Mink\' Free DVD and Stickers Form ');
}
else if (currentPage.indexOf('outthere/o-tommylee-thanks.asp') > 0) {
	sendEvent(petaGA_FormCategory_Pack, petaGA_FormAction_Submitted, 'Tommy Lee: \'Ink, Not Mink\' Free DVD and Stickers Form ');
}
else if (currentPage.indexOf('outthere/o-trentreznoripod.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'Watch Trent Reznor�s New Video Fur-Free Pledge');
}
else if (currentPage.indexOf('outthere/o-trentreznoripod-thanks.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'Watch Trent Reznor�s New Video Fur-Free Pledge');
}
else if (currentPage.indexOf('takecharge/t-iamsphotos.asp') > 0) {
	sendEvent(petaGA_FormCategory_Submission, petaGA_FormAction_Initiated, 'We Won\'t Buy While Dogs and Cats Die! Photo Submission');
}
else if (currentPage.indexOf('takecharge/t-iamsphotos-thanks.asp') > 0) {
	sendEvent(petaGA_FormCategory_Submission, petaGA_FormAction_Submitted, 'We Won\'t Buy While Dogs and Cats Die! Photo Submission');
}
else if (currentPage.indexOf('outthere/o-yeahyeahyeahs.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'Yeah Yeah Yeahs Gone Wild Forward to Friends');
}
else if (currentPage.indexOf('outthere/o-yeahyeahyeahs-thanks.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'Yeah Yeah Yeahs Gone Wild Forward to Friends');
}
else if (currentPage.indexOf('report-abuse.asp') > 0) {
	sendEvent(petaGA_FormCategory_Feedback, petaGA_FormAction_Initiated, 'Report Website Abuse');
}
else if (currentPage.indexOf('report-abuse-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_Feedback, petaGA_FormAction_Submitted, 'Report Website Abuse');
}
else if (currentPage.indexOf('enews-thx.asp') > 0) {
	sendEvent(petaGA_FormCategory_eNews, petaGA_FormAction_Submitted, 'peta2 E-News');
}
else if (currentPage.indexOf('amoe.asp') > 0) {
	sendEvent(petaGA_FormCategory_Contest, petaGA_FormAction_Initiated, 'Text Message Contest Entry Form');
}
else if (currentPage.indexOf('amoe-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_Contest, petaGA_FormAction_Submitted, 'Text Message Contest Entry Form');
}
else if (currentPage.indexOf('report-copyright.asp') > 0) {
	sendEvent(petaGA_FormCategory_Feedback, petaGA_FormAction_Initiated, 'DMCA Notice of Copyright Infringement');
}
else if (currentPage.indexOf('report-copyright-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_Feedback, petaGA_FormAction_Submitted, 'DMCA Notice of Copyright Infringement');
}
else if (currentPage.indexOf('meatsnotgreen/index.asp?') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'Chinese Fur Farms: Take Our Fur-Free Pledge');
}
else if (currentPage.indexOf('outthere/o-mikenesssocialdistortion.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'Chinese Fur Farms: Take Our Fur-Free Pledge');
}
else if (currentPage.indexOf('p2vsk2_flash/tellafriend.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'What They Never Told You Forward to Friends');
}
else if (currentPage.indexOf('p2vsk2_flash/tellafriend-thankyou.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'What They Never Told You Forward to Friends');
}
else if (currentPage.indexOf('furisdead/?c=p2896y&utm_source=peta2%2bmicrosoft%2bad&utm_medium=cpc&utm_campaign=0109%2bskelanimal%2ffid%2bfeature') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'Fur Is Dead Skelanimals Pledge');
}
