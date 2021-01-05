/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
$(document).ready((function(){

	$(window).on('load resize', (function(){
		if ($('.contacts-soc__btn').length) {
			if ($(window).width() <= 480) {
			   	$('.contacts-schedule').appendTo('.contacts-info__item:first-child');
			  } else{
			  	$('.contacts-schedule').appendTo('.contacts-info');
			}
		}
	}));

	$('.popular-questions__input').click((function(){
		$('.popular-questions__list').toggleClass('active');
	}));
	$('.popular-questions__item').click((function(){
		var  popularquestions  = $(this).text();
		$('.popular-questions__input').val(popularquestions );
		$('.popular-questions__list').removeClass('active');
		return false;
	}));


	$('input[type=phone]').mask('9(999)-999-99-99');
	$('input[type=email]').keyup( (function() {
	  	var value = $(this).val(); 
	    var rep = /[-\;":'а-яА-Я]/; 
	    if (rep.test(value)) { 
	        value = value.replace(rep, ''); 
	        $(this).val(value); 
	    } 
	}));

	$('.cards-options__item').click((function(){
		$('.cards-options__item').removeClass('active');
		$(this).addClass('active');
		var cat_slide = $(this).index();
		$('.cards__wrap').removeClass('active');
		$(this).parent().parent().parent().find('.cards__wrap').eq(cat_slide).addClass('active');
		$('.card').slick('setPosition',0);
		return false;
	}));

	$(window).on('load resize', (function(){
		if ($('.contacts-soc__btn').length) {
			if ($(window).width() <= 992) {
			   $(".contacts-soc__btn").appendTo(".contacts-info");
			  } else{
			  	 $(".contacts-soc__btn").appendTo(".contacts-soc");
			}
		}
	}));


	$('.rate__choice').click((function(){
		$(this).parent().parent().find('.rate-pop').addClass('active');
	}));
	$('.rate-pop__close').click((function(){
		$('.rate-pop').removeClass('active');
	}));
	

	$(window).on('load resize', (function(){
		if ($('.premium-banner__subtitle').length) {
			if ($(window).width() <= 450) {
			   $('.premium-banner__subtitle').appendTo($('.premium-banner__title'));
			   $('.table-btn').text('Подключить');
			  } else{
			  	$('.premium-banner__subtitle').prependTo($('.premium-banner__title'));
			}
		}
	}));
	
	$('.calculator__prew').click((function(){
		var valnumber = Number($('.calculator__number').text());
		if(valnumber != 0){
			$(this).parent().find('.calculator__number').text(valnumber - 1);	
		}
		
	}));
	$('.calculator__next').click((function(){
		var valnumber = Number($('.calculator__number').text());
		$(this).parent().find('.calculator__number').text(valnumber + 1) ;
	}));

	$('.tunup-form__output').click((function(){
		$(this).toggleClass('active');
		$(this).parent().find('.tunup-form__show').toggleClass('active');
	}));
	$('.tunup-form__item').click((function(){
		var tunup_text = $(this).text();
		$('.tunup-form__output').removeClass('active');
		$('.tunup-form__output').text(tunup_text);
		$('.tunup-form__show').removeClass('active');
	}));

	$('.selectrout__output').click((function(){
		$(this).toggleClass('active');
		$(this).parent().find('.selectrout__show').toggleClass('active');
	}));
	$('.selectrout__item').click((function(){
		var selectrout_text = $(this).text();
		$(this).parent().parent().find('.selectrout__output').text(selectrout_text);
		$(this).parent().removeClass('active');
		$(this).parent().parent().find('.selectrout__output').removeClass('active');
	}));

	$('.setting-form__output').click((function(){
		$(this).toggleClass('active');
		$('.setting-form__show').toggleClass('active');
	}));
	$('.setting-form__item').click((function(){
		var setting_text = $(this).text();
	}));

	$('.step__item').click((function(){
		var stepnum = $(this).index();
		$('.step__item').removeClass('active');
		$(this).addClass('active');
		$('.step__flex').removeClass('active');
		$('.step__flex').eq(stepnum).addClass('active');

		$('.step__item').removeClass('black');
		if (stepnum == 1) {
			$('.step__item').eq(0).addClass('black');
		}
		if (stepnum == 2) {
			$('.step__item').eq(0).addClass('black');
			$('.step__item').eq(1).addClass('black');
		}
	}));

	$('.connect-select__output').click((function(){
		$(this).toggleClass('active');
		$('.connect-select__list').toggleClass('active');
	}));
	$('.connect-select__item').click((function(){
		var connection_text = $(this).text();
		$('.connect-select__output').text(connection_text);
		$('.connect-select__output').removeClass('active');
		$('.connect-select__list').removeClass('active');
	}));

	$('.chaneel-category__item').click((function(){
		var chaneel_index = $(this).index();
		$('.chaneel-category__item').removeClass('active');
		$(this).addClass('active');
		$('.chaneel-wrap__box').removeClass('active');
	    $('.chaneel-wrap__box').eq(chaneel_index).addClass('active');
	}));
	$('.simply__link').click((function(){
		$('.pop-cam').addClass('active');
		$('body').addClass('popup__open');
		return false;
	}));
	$('.chaneel-wrap__item>img,.chanel-box__item>img').click((function(){
		$('.chaneel-info').addClass('active');
		$('body').addClass('popup__open');
	}));
	$('.chaneel-info__close').click((function(){
		$('.chaneel-info').removeClass('active');
		$('body').removeClass('popup__open');
	}));

	$('.regulations__title').click((function(){
		$(this).toggleClass('active');
		$('.regulations-show').slideToggle();
	}));

	$('.burger').click((function(){
		$('.min-menu').addClass('active');
		$('body').addClass('no-scroll');
	}));
	$('.min-menu__close').click((function(){
		$('.min-menu').removeClass('active');
		$('body').removeClass('no-scroll');	
	}));

	$('.min-menu .menu-bottom__item--haschild').click((function(){
		$('.menu-show').toggleClass('active');
		$(this).toggleClass('active');
	}));


	$('.faq__item').click((function(){
		$('.faq__item').removeClass('active');
		$(this).toggleClass('active');
		$('.faq__text').removeClass('active');
		$(this).find('.faq__text').toggleClass('active');
	}));

	$('.package-box__item').click((function(){
		var category_index = $(this).index();
		$('.package-box__item').removeClass('active');
		$(this).addClass('active');
		$('.chanel-box__wrap').removeClass('active');
		$('.chanel-box__wrap').eq(category_index).addClass('active');
		$('.chanel-box__wrap').slick('setPosition',0);
	}));

	$('.package-box__next').click((function(){
	  $(".chanel-box__wrap").slick('slickNext');
	}));
	$('.package-box__prev').click((function(){
		$(".chanel-box__wrap").slick('slickPrev');
	}));


	$('.links-top__item--pay').click((function(){
		$('.popup-box').addClass('active');
		$('.popup-pay').addClass('active');
		$('body').addClass('no-scroll');
	}));
	$('.popup-box__close').click((function(){
		$('.popup-box').removeClass('active');
		$('.popup-pay').addClass('active');
		$('body').removeClass('no-scroll');
	}));

	$('.support__name').click((function(){
		$(this).toggleClass('active');
		$(this).parent().find('.support-show').slideToggle();
	}));
	$('.support-show2level__name').click((function(){
		$(this).toggleClass('active');
		$(this).parent().find('.support-show2level__text').slideToggle();
	}));


	$('.document__item').click((function(){
		$(this).find('.document__name').toggleClass('active');
		$(this).find('.document-show').slideToggle();
	}));


	$('.breadcrumbs-select').click((function(){
		$('.breadcrumbs-select__list').toggleClass('active');
	}));
	$('.breadcrumbs-select__item').click((function(){
		var text_output = $(this).text();
		$('.breadcrumbs-select__list').removeClass('active');
		$('.breadcrumbs-select__output').text(text_output);
		return false;
	}));
	$(document).mouseup((function (e){
		var div = $(".select__list");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$(".select__list").removeClass('active');
		}
		var rate_pop = $(".rate-pop");
		if (!rate_pop.is(e.target) && rate_pop.has(e.target).length === 0) {
			$(".rate-pop").removeClass('active');
		}
		var faq__item = $(".faq__item");
		if (!faq__item .is(e.target) && faq__item .has(e.target).length === 0) {
			$(".faq__text").removeClass('active');
			$(".faq__item").removeClass('active');
		}
		var div2 = $(".breadcrumbs-select__list");
		if (!div2.is(e.target) && div2.has(e.target).length === 0) {
			$(".breadcrumbs-select__list").removeClass('active');
		}
		var setting_show = $(".setting-form__show");
		if (!setting_show.is(e.target) && setting_show.has(e.target).length === 0) {
			$(".setting-form__show").removeClass('active');
		}
		var chaneel = $(".chaneel-info");
		if (!chaneel.is(e.target) && chaneel.has(e.target).length === 0) {
			$(".chaneel-info").removeClass('active');
			$('body').removeClass('popup__open');
		}
		var popup = $(".popup-pay");
		if (!popup.is(e.target) && popup.has(e.target).length === 0) {
			$(".popup-pay").removeClass('active');
			$('.popup-box').removeClass('active');
		}
		var popularquestion = $('.popular-questions__list');
		if (!popularquestion.is(e.target) && popularquestion.has(e.target).length === 0) {
			$('.popular-questions__list').removeClass('active');
		}
		
		$('.pop-cam').removeClass('active');
	}));

	var win = $('.firstscreen').height() + $('.header').height();
    $('.firstscreen__scrolldown').click((function () {
	    $('body,html').animate({
	        scrollTop: win
	    }, 1200);
	}));

	$('.select').click((function(){
		$('.select__list').toggleClass('active');
	}));
	$('.select__item').click((function(){
		var text_output = $(this).text();
		$('.select__list').removeClass('active');
		$('.select__output').val(text_output);
		return false;
	}));
	$(document).mouseup((function (e){
		var div = $(".select__list");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$(".select__list").removeClass('active');
		}
	}));


	$(".slide-control__prew").click((function() { 
   	 	$(".card").slick('slickPrev');
   	 	$(".history__slide").slick('slickPrev');
	}));
	$(".slide-control__next").click((function() { 
	    $(".card").slick('slickNext');
	    $(".history__slide").slick('slickNext');
	}));


	$('.card').slick({
		infinity: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		variableWidth: true,	
		responsive: [
		    {
		      breakpoint: 1210,
		      infinity: false,
		      settings: {	
		        slidesToShow: 3,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 980,
		      infinity: false,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 600,
		      infinity: false,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    }
		]
	});

	$('.history__slide').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,	
		infinite: false,
		responsive: [
		    {
		      breakpoint: 980,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});
	$('.chanel-box__wrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
	});
	$('.firstscreen__box').slick({
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
	});

}));