jQuery(document).ready(function(){
	console.log("overriding social...");
	jQuery(".social-icons ul li.google-plus a,.social-icons ul li.pinterest a,.social-icons ul li.tumblr a").addClass("social-icon-override");

	jQuery(".social-icons ul li.google-plus a").html('<i class="fa fa-weixin"></i>');
	jQuery(".social-icons ul li.google-plus a").append('<img class="hover-qrcode-img" src="'+jQuery(".social-icons ul li.google-plus a").attr('href')+'"/>');
	jQuery(".social-icons ul li.google-plus a").attr('href','javascript:;');

	jQuery(".social-icons ul li.pinterest a").html('<i class="fa fa-weibo"></i>');
	jQuery(".social-icons ul li.tumblr a").html('<i class="fa fa-qq"></i>');
	
	jQuery('.social-icon-override').attr('title','');




	jQuery('.social-icons ul li.google-plus a').hover(
		function() {
			jQuery('.hover-qrcode-img').css('display','inline-block');
		}, function() {
			jQuery('.hover-qrcode-img').css('display','none');
		}
	);
});
