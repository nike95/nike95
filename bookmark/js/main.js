$(document).ready(function(){

	$('.features__navitem').click(function(){
		var index = $(this).index();
		$('.features__navitem').removeClass('active');
		$(this).addClass('active');
		$('.features__tab').removeClass('active');
		$(this).parent().parent().parent().find('.features__tab').eq(index).addClass('active');
		return false;
	});

	$('.questions__item').click(function(){
		if (!$(this).hasClass('active')) {
			$('.questions__item').removeClass('active');
			$('.questions__titlebox>span').removeClass('active');
			$(this).find('.questions__titlebox>span').addClass('active');
			$('.questions__titlebox>p').removeClass('active');
			$(this).find('.questions__titlebox>p').addClass('active');
			$(this).addClass('active');
			$('.questions__ansver').slideUp();
			$(this).find('.questions__ansver').slideDown();
		}else {
			$(this).removeClass('active');
			$(this).find('.questions__ansver').slideUp();
		}
	});

	$('.burger').click(function(){
		$(this).addClass('disabled');
		$('html,body').addClass('noscroll');
		$('.header__logo').addClass('disabled');
		$('.mobilemenu').addClass('active');
		$('.header').addClass('disabled');
	});

	$('.mobilemenu__close').click(function(){
		$(this).removeClass('disabled');
		$('html,body').removeClass('noscroll');
		$('.header__logo').removeClass('disabled');
		$('.mobilemenu').removeClass('active');
		$('.header').removeClass('disabled');
	});
});