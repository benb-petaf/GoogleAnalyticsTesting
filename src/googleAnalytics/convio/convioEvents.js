/****************************************************** 
-Submit events to GA based on information from the URL.
-Category and Action should be variable names from https://resources.peta.org/googleAnalytics/global/ga_constants.js. 
-Label should be document.title because this is used across multiple pages.
sendEvent(Category, Action, 'Label'); 
******************************************************/ 

var currentPage = window.location.toString().toLowerCase();

/****************************************************** 
BEGIN - Advocacy and Tell A Friend Events
******************************************************/ 

// "Take Action" Initiation Event
if( currentPage.indexOf('page=useraction') > 0 )
{
	sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, document.title);
}
// "Take Action" Submission Event and/or "Tell A Friend" Initiation Event
else if( currentPage.indexOf('page=onscreenthanks') > 0 )
{
	// "Take Action" Submission Event if we came from a page in secure.peta.org.
	if( document.referrer.indexOf('secure.peta.org') > -1 )
	{
		sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, document.title);
	}
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, document.title);
}
// "Tell A Friend" Submission Event
else if( currentPage.indexOf('page=tafthanks') > 0 )
{
	sendEvent(petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, document.title);
}

/****************************************************** 
END - Advocacy and Tell A Friend Events
******************************************************/ 

/****************************************************** 
BEGIN - Standard Donation Events
******************************************************/ 

// "Donation" Initiation Event
if( currentPage.indexOf('donation=form1') > 0 || currentPage.indexOf('pagename=donatenow') > 0 )
{
	sendEvent(petaGA_FormCategory_Donate, petaGA_FormAction_Initiated, document.title);
}
// "Donation" Submission Event
else if( currentPage.indexOf('donation=completed') > 0 )
{
	sendEvent(petaGA_FormCategory_Donate, petaGA_FormAction_Submitted, document.title);
}

// "Take Action" Submission Event
if( (currentPage.indexOf('pagename=donatenow') > 0 || currentPage.indexOf('donation=form1') > 0) && ((document.referrer.toLowerCase().indexOf('page=useraction') > -1) || (document.referrer.toLowerCase().indexOf('responseid') > -1) || (document.title.toLowerCase().indexOf('thank you') > -1) ))
{
	// Only fire submission event if URL does NOT contain "iframe=true"
	if(currentPage.indexOf('iframe=true') <= 0){
		sendEvent(petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, document.title);
	}
}

/****************************************************** 
END - Standard Donation Events
******************************************************/ 

/****************************************************** 
BEGIN - PageBuilder Donation Events
******************************************************/ 

// "Donation" Initiation Event
if( (currentPage.indexOf('spageserver') > 0 || currentPage.indexOf('spagenavigator') > 0 ) && currentPage.indexOf('_df') > 0)
{
	sendEvent(petaGA_FormCategory_Donate, petaGA_FormAction_Initiated, document.title);
}
// "Donation" Submission Event
else if( (currentPage.indexOf('spageserver') > 0 || currentPage.indexOf('spagenavigator') > 0 ) && currentPage.indexOf('_thanks') > 0)
{
	sendEvent(petaGA_FormCategory_Donate, petaGA_FormAction_Submitted, document.title);
}

/****************************************************** 
END - PageBuilder Donation Events
******************************************************/ 

/****************************************************** 
BEGIN - Donation TY Page Social Share Button Events
******************************************************/ 

function twitterClickHandler(){
	sendSocialEvent(petaGA_SNsource_Twitter, petaGA_GenericAction_Share, currentPage);
}
function facebookClickHandler(){
	sendSocialEvent(petaGA_SNsource_Facebook, petaGA_GenericAction_Share, currentPage);
}
function emailClickHandler(){
	sendEvent(petaGA_LinkCategory_Link, petaGA_GenericAction_ClickThrough, 'Donation TY Email Friend: ' + document.title);
}

function addEventHandler(elementID, clickHandler){
	var element = document.getElementById(elementID);
	if (element) {
		if (element.addEventListener) {
			element.addEventListener("click", clickHandler, false);
		} 
		else {
			element.attachEvent('onclick', clickHandler);
		}
	}
}

function initEventHandlers()
{
   if (document.readyState=="complete")
   {
		addEventHandler("wide-share-twitter", twitterClickHandler);
		addEventHandler("wide-share-facebook", facebookClickHandler);
		addEventHandler("wide-share-email", emailClickHandler);
   }
}

document.onreadystatechange = initEventHandlers;

/****************************************************** 
END - Donation TY Page Social Share Button Events
******************************************************/ 