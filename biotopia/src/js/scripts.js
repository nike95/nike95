$(document).ready(function(){
	$('.tab__slide').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  arrow: true,
	  fade: true,
	});
	$('.header__navlist>li>a').click(function(){
		$('.header__navlist>li>a').removeClass('active');
		$(this).addClass('active');
	});
});

