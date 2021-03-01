(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-23739476-17', 'auto', {'allowLinker': true, 'siteSpeedSampleRate': 50});

/* PII-redaction */
if ( typeof petaPIIURL === 'object' && petaPIIURL.containsPII() ) {
	ga('set', 'location', petaPIIURL.getPIIRedactedURL());
	ga('set', 'title', '[PII REDACTED FROM PAGE URL]');
}

/* Remarketing */
ga('require', 'displayfeatures');

/* Ecommerce */
ga('require', 'ecommerce');

/* Cross Domain Auto Linking */
ga('require', 'linker');
ga('linker:autoLink', ['peta.org', 'peta2.com']);

/* Enhanced Link Attribution */
ga('require', 'linkid', 'linkid.js');
ga('send', 'pageview');

/*  File Extensions Array */
var petaGA_fileExtensions = new Array(".pdf",
									  ".png",
									  ".jpg",
									  ".jpeg",
									  ".gif",
									  ".zip",
									  ".mp3",
									  ".swf",
									  ".doc",
									  ".docx");
var currentDomainName = window.location.host + "/";							
var allLinks = document.links;

function lookForFileExtension(url){
	for (var i = 0; i < petaGA_fileExtensions.length; i++) {	
		if(url.indexOf(petaGA_fileExtensions[i]) > 0){
			return true;
		}
	}
	return false;
}

function gaDownloadListener(){
	var urlToCheck = this.href.toLowerCase();
	
	// Fire PDF Download event
	if(urlToCheck.indexOf(".pdf")  > 0){
		ga('send', 'event', petaGA_PDFCategory_PDF, petaGA_GenericAction_Download, urlToCheck);
	}
	// Fire Image Download event
	else if(urlToCheck.indexOf(".png")  > 0 || urlToCheck.indexOf(".jpg")  > 0 || urlToCheck.indexOf(".jpeg")  > 0 || urlToCheck.indexOf(".gif")  > 0){
		ga('send', 'event', petaGA_ImageCategory_Image, petaGA_GenericAction_Download, urlToCheck);
	}
	// Fire ZIP Download event
	else if(urlToCheck.indexOf(".zip")  > 0){
		ga('send', 'event', 'ZIP', petaGA_GenericAction_Download, urlToCheck);
	}
	// Fire MP3 Download event
	else if(urlToCheck.indexOf(".mp3")  > 0){
		ga('send', 'event', 'MP3', petaGA_GenericAction_Download, urlToCheck);
	}
	// Fire SWF Download event
	else if(urlToCheck.indexOf(".swf")  > 0){
		ga('send', 'event', 'SWF', petaGA_GenericAction_Download, urlToCheck);
	}
	// Fire DOC Download event
	else if(urlToCheck.indexOf(".doc")  > 0 || urlToCheck.indexOf(".docx")  > 0){
		ga('send', 'event', 'Word Doc', petaGA_GenericAction_Download, urlToCheck);
	}
}

function addDownloadListeners(){
	var currentURL;
	var fileExtensionFound = false;
	var linkAddListener;
	var originalOnclick;
	
	for (var i = 0; i < allLinks.length; i++) {		
		currentURL = allLinks[i].href.toString().toLowerCase();
		fileExtensionFound = lookForFileExtension(currentURL);
		
		if(fileExtensionFound == true){
			linkAddListener = document.body.getElementsByTagName("a")[i];
			if(linkAddListener.onclick){
				originalOnclick = linkAddListener.onclick;		
				linkAddListener.onclick = gaDownloadListener;					
				linkAddListener.addEventListener("click", originalOnclick, false);
			}
			else{
				linkAddListener.onclick = gaDownloadListener;
			}
		}
	}
	window.removeEventListener('DOMContentLoaded', addDownloadListeners);
}

window.addEventListener('DOMContentLoaded', addDownloadListeners);
