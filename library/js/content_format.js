jQuery(document).ready(function(){
	if (window.location.pathname.indexOf("/zh/")==0) {
		console.log("appling format for zh");
		jQuery(".post p").addClass("paragraph-zh");
	}
});
