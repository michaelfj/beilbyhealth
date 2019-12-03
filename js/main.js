$(window).on('scroll', function() {
	var mq1Distance = $('.mq1').offset().top;
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >100) {
		$('.mq1').addClass('scrolled');
	}	else {
		$('.mq1').removeClass('scrolled');
	}
});

$(window).on('scroll', function() {
	var mq2Distance = $('.mq2').offset().top;

	console.log(mq2Distance);

	var distanceScrolled = $(window).scrollTop();

	console.log(distanceScrolled);
	
	if (distanceScrolled >1300) {
		$('.mq2').addClass('scrolled');
	}	else {
		$('.mq2').removeClass('scrolled');
	}
});

$(window).on('scroll', function() {
	var mq3Distance = $('.mq3').offset().top;
	var distanceScrolled = $(window).scrollTop();
	if (distanceScrolled >2000) {
		$('.mq3').addClass('scrolled');
	}	else {
		$('.mq3').removeClass('scrolled');
	}
});

$('#home').on('click', function () {
	$('h2 #manly').fadeIn(350);
});



