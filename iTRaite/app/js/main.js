$(function(){

	
	$('.min_menu__nav>ul>li>a').click(function(){
		if ($(this).parent().hasClass('active')) {
			$(this).parent().toggleClass('active');
		}else {
			$('.min_menu__nav>ul>li>a').removeClass('active');
			$(this).parent().addClass('active');
		}
		return false;
	});

	$('.min_menu__nav>ul>li>ul>li').click(function(){
		if ($(this).hasClass('active')) {
            $(this).toggleClass('active');
		}else {
			$('.min_menu__nav>ul>li>ul>li').removeClass('active');
			$(this).addClass('active');
		}
	});
	

	$('.burger').click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.min_menu').toggleClass('active');
			$('.header__logo').removeClass('hide');
		}else {
			$(this).addClass('active');
			$('.min_menu').toggleClass('active');
			$('.header__logo').addClass('hide');
		}
	});

	$('.footer__col').click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).find('.footer__list').slideUp();
			$('.footer__bold').removeClass('active');
		}else {
			$(this).addClass('active');
			$('.footer__list').slideUp();
			$(this).find('.footer__list').slideDown();
			$('.footer__bold').removeClass('active');
		    $(this).find('.footer__bold').addClass('active');
		}
	});

	function windowSize(){
		if ($(window).width() < '992'){
			if (!$('.navigate__row').hasClass('slick-initialized')) {
				$('.navigate__row').slick({
					arrows: false,
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: false,
					responsive: [
					    {
					      breakpoint: 768,
					      settings: {
					      	slidesToShow: 1,
					      }
					    }
				  	]
				})	
			}
		}else{
			if ($('.navigate__row').hasClass('slick-initialized')) {
				$('.navigate__row').slick('unslick');
			}
		}
		if ($(window).width() < '992'){
			if (!$('.partners__row').hasClass('slick-initialized')) {
				$('.partners__row').slick({
					arrows: false,
					dots: true,
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: false,
					responsive: [
					    {
					      breakpoint: 575,
					      settings: {
					      	slidesToShow: 2,
					      }
					    }
				  	]
				})	
			}
		}else{
			if ($('.partners__row').hasClass('slick-initialized')) {
				$('.partners__row').slick('unslick');
			}
		}
		if ($(window).width() < '992'){
			if (!$('.topfirms__row ').hasClass('slick-initialized')) {
				$('.topfirms__row ').slick({
					arrows: false,
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: false,
					responsive: [
					    {
					      breakpoint: 768,
					      settings: {
					      	slidesToShow: 1,
					      }
					    }
				  	]
				})	
			}
		}else{
			if ($('.topfirms__row ').hasClass('slick-initialized')) {
				$('.topfirms__row ').slick('unslick');
			}
		}    
	};
	$(window).on('load resize',windowSize);

});