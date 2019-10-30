$(window).on('scroll', function() {
	var mq1Distance = $('.mq1').offset().top;
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >1200) {
		$('.mq1').addClass('scrolled');
	}	else {
		$('.mq1').removeClass('scrolled');
	}
});

$(window).on('scroll', function() {
	var mq2Distance = $('.mq2').offset().top;
		console.log(mq16Distance);
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >3800) {
		$('.mq2').addClass('scrolled');
	}	else {
		$('.mq2').removeClass('scrolled');
	}
});

$(window).on('scroll', function() {
	var mq3Distance = $('.mq3').offset().top;
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >4550) {
		$('.mq3').addClass('scrolled');
	}	else {
		$('.mq3').removeClass('scrolled');
	}
});

$(window).on('scroll', function() {
	var mq4Distance = $('.mq4').offset().top;
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >300) {
		$('.mq4').addClass('scrolled');
	}	else {
		$('.mq4').removeClass('scrolled');
	}
});

$('#home').on('click', function () {
	$('h2 #manly').fadeIn(350);
});