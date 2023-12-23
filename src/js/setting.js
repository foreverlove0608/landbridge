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
