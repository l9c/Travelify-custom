jQuery(document).ready(function(){
	console.log("overriding social...");
	jQuery(".social-icons ul li.google-plus a,.social-icons ul li.pinterest a,.social-icons ul li.tumblr a").addClass("social-icon-override");

	jQuery(".social-icons ul li.google-plus a").html('<i class="fa fa-weixin"></i>');
        jQuery(".social-icons ul li.pinterest a").html('<i class="fa fa-weibo"></i>');
	jQuery(".social-icons ul li.tumblr a").html('<i class="fa fa-qq"></i>');
	
	jQuery('.social-icon-override').attr('title','');
});
