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
if (currentPage.indexOf('action-form.asp') > 0) {
	sendEvent(petaGA_FormCategory_Activist, petaGA_FormAction_Initiated, 'PETA France Activist Network');
}
else if (currentPage.indexOf('thankyou.asp?fbsc=1') > 0) {
	sendEvent(petaGA_FormCategory_Activist, petaGA_FormAction_Submitted, 'PETA France Activist Network');
}
else if (currentPage.indexOf('furfreepledge.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'PETA France Fur Pledge');
}
else if (currentPage.indexOf('furfreepledgety-ftf.asp?fbsc=1') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'PETA France Fur Pledge');
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'PETA France Fur Pledge');
}
else if (currentPage.indexOf('furfreepledgeftf-ty.asp?fbsc=1') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'PETA France Fur Pledge');
}
else if (currentPage.indexOf('feat-famke.asp') > 0) {
	sendEvent(petaGA_FormCategory_Contest, petaGA_FormAction_Initiated, 'PETA France Famke Contest');
}
else if (currentPage.indexOf('feat-famke-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_Contest, petaGA_FormAction_Submitted, 'PETA France Famke Contest');
}
else if (currentPage.indexOf('feat-pink_wool.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'PETA France Pink Wool Pledge');
}
else if (currentPage.indexOf('feat-pink_wool_ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'PETA France Pink Wool Pledge');
}
else if (currentPage.indexOf('fastfoodnation/forward_game.asp') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'PETA France Fast Food nation Game');
}
else if (currentPage.indexOf('feat-dmonaghanad.asp') > 0) {
	sendEvent(petaGA_FormCategory_Contest, petaGA_FormAction_Initiated, 'PETA France Dominic Monaghan Conest');
}
else if (currentPage.indexOf('feat-dmonaghanad_ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_Contest, petaGA_FormAction_Submitted, 'PETA France Dominic Monaghan Conest');
}
else if (currentPage.indexOf('feat-suryabonaly.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'PETA France Surya Bonaly Seals Action');
}
else if (currentPage.indexOf('feat-suryabonaly-ty.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'PETA France Surya Bonaly Seals Action');
}
else if (currentPage.indexOf('protecteulabanimals.asp') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, 'PETA France Viv Pledge');
}
else if (currentPage.indexOf('protecteulabanimals_ftf.asp?fbsc=1') > 0) {
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, 'PETA France Viv Pledge');
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, 'PETA France Viv Pledge');
}
else if (currentPage.indexOf('protecteulabanimals_ftfty.asp?fbsc=1') > 0) {
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, 'PETA France Viv Pledge');
}
else if (currentPage.indexOf('feat-sadiefrost_form.asp') > 0) {
	sendEvent(petaGA_FormCategory_Contest, petaGA_FormAction_Initiated, 'Sadie Frost Signed Poster Contest');
}
else if (currentPage.indexOf('feat-sadiefrost_ty.asp?fbsc=1') > 0) {
	sendEvent(petaGA_FormCategory_Contest, petaGA_FormAction_Submitted, 'Sadie Frost Signed Poster Contest');
}
else if (currentPage.indexOf('alicia_ad/win.asp') > 0) {
	sendEvent(petaGA_FormCategory_Contest, petaGA_FormAction_Initiated, 'Alicia Silverstone Poster Conest');
}
else if (currentPage.indexOf('alicia_ad/win-ty.asp?fbsc=1') > 0) {
	sendEvent(petaGA_FormCategory_Contest, petaGA_FormAction_Submitted, 'Alicia Silverstone Poster Conest');
}
