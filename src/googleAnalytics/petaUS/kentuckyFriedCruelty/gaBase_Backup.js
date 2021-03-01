/************DANGER ZONE - DO NOT TOUCH - FOR REAL************/ 
	 var _gaq = _gaq || [];
	 _gaq.push(['_setAccount', 'UA-23739476-17']);
	 _gaq.push(['_setDomainName', 'kentuckyfriedcruelty.com']);
	 _gaq.push(['_setAllowHash', false]);
	 _gaq.push(['_setAllowLinker', true]);
	 _gaq.push(['_setCampTermKey', 'c']);
	 _gaq.push(['_trackPageview']);

	(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	 })();
	 
	////////////////////////////
	//  File Extensions Array
	////////////////////////////

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
			_gaq.push(['_trackEvent', petaGA_PDFCategory_PDF, petaGA_GenericAction_Download, urlToCheck]);
		}
		// Fire Image Download event
		else if(urlToCheck.indexOf(".png")  > 0 || urlToCheck.indexOf(".jpg")  > 0 || urlToCheck.indexOf(".jpeg")  > 0 || urlToCheck.indexOf(".gif")  > 0){
			_gaq.push(['_trackEvent', petaGA_ImageCategory_Image, petaGA_GenericAction_Download, urlToCheck]);
		}
		// Fire ZIP Download event
		else if(urlToCheck.indexOf(".zip")  > 0){
			_gaq.push(['_trackEvent', 'ZIP', petaGA_GenericAction_Download, urlToCheck]);
		}
		// Fire MP3 Download event
		else if(urlToCheck.indexOf(".mp3")  > 0){
			_gaq.push(['_trackEvent', 'MP3', petaGA_GenericAction_Download, urlToCheck]);
		}
		// Fire SWF Download event
		else if(urlToCheck.indexOf(".swf")  > 0){
			_gaq.push(['_trackEvent', 'SWF', petaGA_GenericAction_Download, urlToCheck]);
		}
		// Fire DOC Download event
		else if(urlToCheck.indexOf(".doc")  > 0 || urlToCheck.indexOf(".docx")  > 0){
			_gaq.push(['_trackEvent', 'Word Doc', petaGA_GenericAction_Download, urlToCheck]);
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
/************DANGER ZONE - DO NOT TOUCH - FOR REAL************/