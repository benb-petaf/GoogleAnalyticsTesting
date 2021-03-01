/****************************************************** 
-Submit events to GA based on information from the page title.
-Category and Action should be variable names from https://resources.peta.org/googleAnalytics/global/ga_constants.js. 
-Label should be document.title because this is used across multiple pages.
_gaq.push(['_trackEvent', Category, Action, 'Label']); 
******************************************************/ 

var currentPageURL = window.location.toString().toLowerCase();
var currentPageTitle = document.title;

var takeActionPhrases = new Array('Take Action', 'Kom in actie', 'Agissez', 'アクションを起こす', '現在就行動', 'Toma acción');
var tafPhrases = new Array('Tell-a-Friend', 'Verteel en vriend', 'Passez le mot', '友達に教える', '与朋友分享', 'Díselo a un amigo');
var donatePhrases = new Array('Donate Now', 'Donateur Worden', 'Faites un don', 'Donaciones', '今すぐ寄付する', '捐款', 'Dona ahora');
var presentPhrases = new Array('Cadeaux virtuels de PETA', 'PETA Presents', 'PETA Cadeaus');

var isPage1 = false;
var isPage2 = false;

function checkForTakeAction()
{	
	for(var i = 0; i < takeActionPhrases.length; i++)
	{  
		if (currentPageTitle.toLowerCase().indexOf(takeActionPhrases[i].toLowerCase()) > 0)
		{              
			return true;
		}
	}
	return false;
}

function checkForTAF()
{
	for(var i = 0; i < tafPhrases.length; i++)
	{  
		if(currentPageTitle.toLowerCase().indexOf(tafPhrases[i].toLowerCase()) > 0)
		{
			return true;
		}
	}
	return false;
}

function checkForDonate()
{	
	for(var i = 0; i < donatePhrases.length; i++)
	{  
		if(currentPageTitle.toLowerCase().indexOf(donatePhrases[i].toLowerCase()) > -1)
		{
			return true;
		}
	}
	return false;
}

function checkForPresent()
{	
	for(var i = 0; i < presentPhrases.length; i++)
	{  
		if(currentPageTitle.toLowerCase().indexOf(presentPhrases[i].toLowerCase()) > -1)
		{
			return true;
		}
	}
	return false;
}

// Figure out which step of the process we're in.
if( currentPageTitle.indexOf('- 1') > 0 )
{
	isPage1 = true;
	currentPageTitle = currentPageTitle.split('- 1')[0];
}
else if( currentPageTitle.indexOf('- 2') > 0 )
{
	isPage2 = true;
	currentPageTitle = currentPageTitle.split('- 2')[0];
}

// See if we're on a Take Action page.
if( checkForTakeAction() == true )
{
	// "Take Action" Initiation Event
	if( isPage1 == true )
	{
		_gaq.push(['_trackEvent', petaGA_FormCategory_TakeAction, petaGA_FormAction_Initiated, currentPageTitle]);
	}
	// "Take Action" Submission Event
	else if( isPage2 == true )
	{
		_gaq.push(['_trackEvent', petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, currentPageTitle]);
	}
}
// See if we're on a Tell A Friend page.
else if( checkForTAF() == true )
{
	// "Take Action" Submission Event if we came from a page in action.affiliateDomain.com.
	if( document.referrer.indexOf('action.') > -1 && isPage1)
	{
		_gaq.push(['_trackEvent', petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, currentPageTitle]);
	}
	
	// "Tell A Friend" Initiation Event
	if( isPage1 == true )
	{
		_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Initiated, currentPageTitle]);
	}
	// "Tell A Friend" Submission Event
	else if( isPage2 == true )
	{
		_gaq.push(['_trackEvent', petaGA_FormCategory_ForwardToAFriend, petaGA_FormAction_Submitted, currentPageTitle]);
	}
}
// See if we're on a Donation page.
else if( checkForDonate() == true )
{
	// "Take Action" Submission Event if we came from a page in action.affiliateDomain.com.
	if( document.referrer.indexOf('action.') > -1 && isPage1)
	{
		_gaq.push(['_trackEvent', petaGA_FormCategory_TakeAction, petaGA_FormAction_Submitted, currentPageTitle]);
	}
	
	// "Donation" Initiation Event
	if( isPage1 == true )
	{
		_gaq.push(['_trackEvent', petaGA_FormCategory_Donate, petaGA_FormAction_Initiated, currentPageTitle]);
	}
	// "Donation" Submission Event
	else if( isPage2 == true )
	{
		_gaq.push(['_trackEvent', petaGA_FormCategory_Donate, petaGA_FormAction_Submitted, currentPageTitle]);
	}
}
// See if we're on a PETA Presents page.
else if( checkForPresent() == true )
{
	_gaq.push(['_trackEvent', petaGA_FormCategory_Donate, petaGA_FormAction_Initiated, currentPageTitle]);
}