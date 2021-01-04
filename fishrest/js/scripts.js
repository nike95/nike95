/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
$(document).ready((function(){

	jQuery((function($){
	    $(document).mouseup((function (e){ 
	        var block = $(".popup-bascked"); 
	        if (!block.is(e.target) && block.has(e.target).length === 0) {
	            $('.popup').removeClass('active');
				$('body').removeClass('noscroll'); 
	        }
	    }));
	}));

	$('.slider').slick({
	    vertical: true,
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    verticalSwiping: true,
	    asNavFor: '.slider-big',
        focusOnSelect: true,
          responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 4,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 5,
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 4,
		      }
		    }
		  ]
	});

	$('.slider-big').slick({
		fade: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider',
	});
	

	$('.raiting__item').click((function(){
		index = $(this).index();
		$(this).parent().find('.raiting__item').each((function(i,elem) {
			if (i<=index) {
				$(elem).addClass('active');
			}else {
				$(elem).removeClass('active');
			}
		}));
	}));

	$('.raiting__item').hover((function(){
		index = $(this).index();
		$(this).parent().find('.raiting__item').each((function(i,elem) {
			if (i<=index) {
				$(elem).addClass('active');
			}else {
				$(elem).removeClass('active');
			}
		}));
	}));

	$('.raiting__item').mouseleave( (function() {
        $(this).parent().find('.raiting__item').removeClass('active');
	}));


	$('.pannier-calc__minus').click((function(){
		var valnumber = Number($(this).parent().find('.pannier-calc__num').text());
		if(valnumber != 0){
			$(this).parent().find('.pannier-calc__num').text(valnumber - 1);	
		}
	}));
	$('.pannier-calc__plus').click((function(){
		var valnumber = Number($(this).parent().find('.pannier-calc__num').text());
			$(this).parent().find('.pannier-calc__num').text(valnumber + 1) ;
	}));

	$('.checkout-box__input,.checkout-box__textarea').on('focus', (function() {
	  $(this).parent().find('span').hide();
	}));
	$('.checkout-box__input,.checkout-box__textarea').on('blur', (function() {
	  $(this).parent().find('span').show();
	}));

	$('.share').click((function(){
		$('.share__list').addClass('active');
	}));

	$('.min-menu__item>a').click((function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).parent().find('.min-menu2level').removeClass('active');
			$('.search-min').addClass('hide');
			$('.back-min').addClass('active');
		}else{
			$('.min-menu__item>a').removeClass('active');
			$('.min-menu2level').removeClass('active');
			$(this).addClass('active');
			$(this).parent().find('.min-menu2level').addClass('active');
		}
	}));

	$('.back-min').click((function(){
		$(this).removeClass('active');
		$('.min-menu2level').removeClass('active');
		$('.search-min').removeClass('hide');
	}));

	$('.scroll-nav__item--menu, .header-min__menu').click((function(){
		$('.menu-show').toggleClass('active');
		$('body').addClass('noscroll');
	}));
	$('.menu-show__close, .header-min__menu--close').click((function(){
		$('.menu-show').removeClass('active');
		$('body').removeClass('noscroll');
	}));

	$('.withus__slide').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		dots: false,
		arrows: false,
	});
	$(".withus__prev").click((function() { 
   		$(".withus__slide").slick('slickPrev');
	}));

	$(".withus__next").click((function() { 
	    $(".withus__slide").slick('slickNext');
	}));


	$('.new-slide').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  variableWidth: true,
	  arrows: true,
	  dots: false,
	});

	$('.header-search__btn').click((function(){
		$(this).addClass('active');
		$('.header-search__show').toggleClass('active');
		$('.header-search__input').focus();
	}));
	$('.header-search__close').click((function(){
		$('.header-search__show').removeClass('active');
		$('.header-search__btn').removeClass('active');
	}));

	var win = $('.firstscreen').height();
	$('.firstscreen__arrow').click((function () {
	    $('body,html').animate({
	        scrollTop: win
	    }, 800);
	    return false;
	}));

	if ($(".catalogue-category").length) {
		var objToStick = $(".catalogue-category"); 
		var topOfObjToStick = $(objToStick).offset().top; 
		    
	    $(window).scroll((function () {
	        var windowScroll = $(window).scrollTop();
	        if (windowScroll > topOfObjToStick) { 
	            $(objToStick).addClass("topwindow");
	        } else {
	            $(objToStick).removeClass("topwindow");
	        };
	    }));
	}
}));