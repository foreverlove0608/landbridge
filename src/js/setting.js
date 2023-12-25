// matchHeight
jQuery(function ($) {
	$('.reason-top__list-ttl').matchHeight();
	$('.results-top__list-icon').matchHeight();
	$('.system-top__list-img').matchHeight();
	$('.system-top__list-desc').matchHeight();
	$('.request-top__list-item p').matchHeight();
	$('.results-top__list-ttl').matchHeight();
	$(window).on("load resize", function () {
		$('.reason-top__list-ttl').matchHeight();
		$('.results-top__list-icon').matchHeight();
		$('.system-top__list-img').matchHeight();
		$('.system-top__list-desc').matchHeight();
		$('.request-top__list-item p').matchHeight();
		$('.results-top__list-ttl').matchHeight();
	});
});

$(function () {
	var urlHash = location.hash;
	if (urlHash) {
		$('body,html').stop().scrollTop(0);
		setTimeout(function () {
			var target = $(urlHash);
			var position = target.offset().top;
			$('body,html').stop().animate({scrollTop: position}, 1000);
		}, 100);
	}

	jQuery('.js-scroll').click(function(e) {
		jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top }, 1500);
		return false;
		e.preventDefault();
	});
});