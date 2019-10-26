$(window).on('scroll', function() {
	var mq14Distance = $('.mq14').offset().top;
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >200) {
		$('.mq14').addClass('scrolled');
	}	else {
		$('.mq14').removeClass('scrolled');
	}
});

$(window).on('scroll', function() {
	var mq5Distance = $('.mq5').offset().top;
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >700) {
		$('.mq5').addClass('scrolled');
	}	else {
		$('.mq5').removeClass('scrolled');
	}
});

$(window).on('scroll', function() {
	var mq6Distance = $('.mq6').offset().top;
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >1600) {
		$('.mq6').addClass('scrolled');
	}	else {
		$('.mq6').removeClass('scrolled');
	}
});

$(window).on('scroll', function() {
	var mq7Distance = $('.mq7').offset().top;
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >2600) {
		$('.mq7').addClass('scrolled');
	}	else {
		$('.mq7').removeClass('scrolled');
	}
});

$(window).on('scroll', function() {
	var mq8Distance = $('.mq8').offset().top;
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >3000) {
		$('.mq8').addClass('scrolled');
	}	else {
		$('.mq8').removeClass('scrolled');
	}
});

$(window).on('scroll', function() {
	var mq9Distance = $('.mq9').offset().top;
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >3400) {
		$('.mq9').addClass('scrolled');
	}	else {
		$('.mq9').removeClass('scrolled');
	}
});

$(window).on('scroll', function() {
	var mq9bDistance = $('.mq9b').offset().top;
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >4000) {
		$('.mq9b').addClass('scrolled');
	}	else {
		$('.mq9b').removeClass('scrolled');
	}
});