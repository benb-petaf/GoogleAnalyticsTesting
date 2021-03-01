////////////////////////////
//         Audio
////////////////////////////

//---- Audio Category Values ----
var petaGA_AudioCategory_Audio = "Audio";

////////////////////////////
//         E-Cards
////////////////////////////

//---- E-Card Category Values ----
var petaGA_eCardCategory_eCard = "E-Card";

////////////////////////////
//         Forms
////////////////////////////

//---- Form Category Values ----
var petaGA_FormCategory_Activist = "Activist Form";
var petaGA_FormCategory_Comment = "Comment Form";
var petaGA_FormCategory_Contest = "Contest Form";
var petaGA_FormCategory_Donate = "Donation Form";
var petaGA_FormCategory_eCard = "E-Card Form";
var petaGA_FormCategory_eNews = "E-News Form";
var petaGA_FormCategory_Feedback = "Feedback Form";
var petaGA_FormCategory_ForwardToAFriend = "Forward to a Friend Form";
var petaGA_FormCategory_Login = "Login Form";
var petaGA_FormCategory_Pack = "Pack Form";
var petaGA_FormCategory_Pledge = "Pledge Form";
var petaGA_FormCategory_Poll = "Poll Form";
var petaGA_FormCategory_Purchase = "Purchase Form";
var petaGA_FormCategory_Quiz = "Quiz Form";
var petaGA_FormCategory_Registration = "Registration Form";
var petaGA_FormCategory_Submission = "Submission Form";
var petaGA_FormCategory_TakeAction = "Take Action Form";
var petaGA_FormCategory_Volunteer = "Volunteer Form";
var petaGA_FormCategory_Wishlist = "Wishlist Form";

//---- Form Action Values ----
var petaGA_FormAction_Initiated = "Form Initiated";
var petaGA_FormAction_Submitted = "Form Submitted";

////////////////////////////
//         Games
////////////////////////////

//---- Game Category Values ----
var petaGA_GameCategory_Game = "Game";

////////////////////////////
//    Generic Actions
////////////////////////////

//---- Generic Action Values ----
var petaGA_GenericAction_ClickThrough = "Click Through";
var petaGA_GenericAction_Complete = "Complete";
var petaGA_GenericAction_Download = "Download";
var petaGA_GenericAction_End = "End";
var petaGA_GenericAction_Play = "Play";
var petaGA_GenericAction_Receipt = "Receipt/Pick-Up";
var petaGA_GenericAction_Share = "Share";

//Don't use petaGA_DownloadAction_Downloaded, but leave it in this file.
var petaGA_DownloadAction_Downloaded = "Download";

////////////////////////////
//         Images
////////////////////////////

//---- Image Category Values ----
var petaGA_ImageCategory_Image = "Image";

////////////////////////////
//         Links
////////////////////////////

//---- Link Category Values ----
var petaGA_LinkCategory_Link = "Link";
//Don't use petaGA_LinkCategory_Subscribe, but leave it in this file.
var petaGA_LinkCategory_Subscribe = "Link";

////////////////////////////
//         PDFs
////////////////////////////

//---- PDF Category Values ----
var petaGA_PDFCategory_PDF = "PDF";
//Don't use petaGA_DownloadCategory_PDF, but leave it in this file.
var petaGA_DownloadCategory_PDF = "PDF";

////////////////////////////
//         Slideshows
////////////////////////////

//---- Slideshow Category Values ----
var petaGA_SlideshowCategory_Slideshow = "Slideshow";

//---- Slideshow Action Values ----
var petaGA_SlideshowAction_Auto = "Slideshow Auto-play";
var petaGA_SlideshowAction_Backward = "Slideshow Backward";
var petaGA_SlideshowAction_Forward = "Slideshow Forward";

////////////////////////////
//    Social Networking
////////////////////////////

/******************************************
These should only be used for 
social networking buttons that we created, 
NOT for AddThis/API buttons.
*****************************************/

//---- Social Networking Source Values ----
var petaGA_SNsource_Facebook = "Facebook";
var petaGA_SNsource_Twitter = "Twitter";
var petaGA_SNsource_Digg = "Digg";
var petaGA_SNsource_StumbleUpon = "StumbleUpon";
var petaGA_SNsource_Reddit = "Reddit";
var petaGA_SNsource_Tumblr = "Tumblr";
var petaGA_SNsource_GooglePlus = "Google+";

//---- Social Networking Action Values ----
//Use petaGA_GenericAction_Share

////////////////////////////
//  User Generated Content
////////////////////////////

//---- User Generated Content Category Values ----
var petaGA_UserGeneratedContentCategory = "User Generated Content";

//---- User Generated Content Action Values ----
//No actions yet.

////////////////////////////
//         Videos
////////////////////////////

//---- Video Category Values ----
var petaGA_VideoCategory_Video = "Video";


var currentPage = window.location.toString().toLowerCase();

var _gaq = _gaq || [];

//These two lines are for Enhanced Link Attribution
var pluginUrl = '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
_gaq.push(['_require', 'inpage_linkid', pluginUrl]);

_gaq.push(['_setAccount', 'UA-23739476-1']);
_gaq.push(['_setDomainName', 'peta.org']);
_gaq.push(['_setAllowHash', false]);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_setCampTermKey', 'c']);
_gaq.push(['_trackPageview']);