/****************************************************** 
-Submit events to GA based on the page we're on.         
-ALL PAGE NAMES IN THIS SECTION NEED TO BE lowercase. 
-Category and Action should be variable names from https://resources.peta.org/googleAnalytics/global/ga_constants.js. 
-Label should be what requestor provided (in single quotes).
_gaq.push(['_trackEvent', Category, Action, 'Label']); 
******************************************************/ 
var currentPage = window.location.toString().toLowerCase();