$(window).on('scroll', function() {
	var mq15Distance = $('.mq15').offset().top;
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >200) {
		$('.mq15').addClass('scrolled');
	}	else {
		$('.mq15').removeClass('scrolled');
	}
});

$(window).on('scroll', function() {
	var mq10Distance = $('.mq10').offset().top;
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >900) {
		$('.mq10').addClass('scrolled');
	}	else {
		$('.mq10').removeClass('scrolled');
	}
});

$(window).on('scroll', function() {
	var mq11Distance = $('.mq11').offset().top;
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >1400) {
		$('.mq11').addClass('scrolled');
	}	else {
		$('.mq11').removeClass('scrolled');
	}
});

$(window).on('scroll', function() {
	var mq12Distance = $('.mq12').offset().top;
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >3200) {
		$('.mq12').addClass('scrolled');
	}	else {
		$('.mq12').removeClass('scrolled');
	}
});

$(window).on('scroll', function() {
	var mq13Distance = $('.mq13').offset().top;
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >4300) {
		$('.mq13').addClass('scrolled');
	}	else {
		$('.mq13').removeClass('scrolled');
	}
});
