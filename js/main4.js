$(window).on('scroll', function() {
	var mq16Distance = $('.mq16').offset().top;
	
	console.log(mq16Distance);
	
	var distanceScrolled = $(window).scrollTop();
	
	console.log(distanceScrolled);
	
	if (distanceScrolled >200) {
		$('.mq16').addClass('scrolled');
	}	else {
		$('.mq16').removeClass('scrolled');
	}
});