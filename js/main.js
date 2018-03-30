$(document).ready(function(){
	$(".slider").owlCarousel({
		items: 1,
		autoplay: true,
		autoplayHoverPause: true,
		loop: true
	});

	$(".slider-snowbords").owlCarousel({
		items: 3,
		// autoplay: true,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		center: true,
		navText: [ '', '' ]
	});



});