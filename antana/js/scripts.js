/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
$(document).ready((function(){

	$('.registration-page__radio input').click((function(){
		if ($(this).val() == 1) {
			$('.registration-page__wrap').slideDown();
		}else{
			$('.registration-page__wrap').slideUp();	
		}
	}));

	$('.contact__show-lk').click((function(){
		$('.popup').addClass('active');
		$('.entry').addClass('active');
		return false;
	}));

	$(document).mouseup((function (e){
		var div = $(".entry, .recovery"); 
		if (!div.is(e.target) 
			&& div.has(e.target).length === 0) { 
			$('.popup').removeClass('active');
			$('.entry,.recovery').removeClass('active');
		}
	}));
	
	$('.entry__forgot').click((function(){
		$('.popup').addClass('active');
		$('.entry').removeClass('active');
		$('.recovery').addClass('active');
		return false;
	}));

	$('.popup__close').click((function(){
		$('.popup').removeClass('active');
		$('.entry,.recovery').removeClass('active');
	}));

	if($("#horizontal-scroller").length) {
		timeline = document.getElementById("horizontal-scroller");
		timeline.onmousedown = () => {
		  let pageX = 0;
		  document.onmousemove = e => {
		    if (pageX !== 0) {
		      timeline.scrollLeft = timeline.scrollLeft + (pageX - e.pageX);
		    }
		    pageX = e.pageX;
		  };
		  timeline.onmouseup = () => {
		    document.onmousemove = null;
		    timeline.onmouseup = null;
		  };

		  timeline.ondragstart = () => {
		    return false;
		  };
		};
	}
	
	if($("#horizontal-scroller").length) {
		timeline2 = document.getElementById("horizontal-scroller2");
		timeline2.onmousedown = () => {
		  let pageX = 0;

		  document.onmousemove = e => {
		    if (pageX !== 0) {
		      timeline2.scrollLeft = timeline2.scrollLeft + (pageX - e.pageX);
		    }
		    pageX = e.pageX;
		  };
		  timeline2.onmouseup = () => {
		    document.onmousemove = null;
		    timeline2.onmouseup = null;
		  };

		  timeline2.ondragstart = () => {
		    return false;
		  };
		};
	}
	

	$('.languages__item').click((function(){
		$('.languages__item').removeClass('active');
		$(this).addClass('active');
	}));

	$('.contact__lk>a').click((function(){
		$('.contact__show').toggleClass('active');

	}));

	$(document).mouseup((function (e){
		var div = $(".contact__show, .contact__lk");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.contact__show').removeClass('active');
		}
	}));
	
	$('.top-slide__box').slick({
		fade: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: false,
		infinite: false,
		responsive: [
		    {
		      breakpoint: 1300,
		      settings: {
		      	arrows: false,
		      }
		    }
	  	]
	});

	$('.inside-slide__box').slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: false,
		infinite: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	function windowSize(){
		if ($(window).width() > '600'){
			if (!$('.project').hasClass('slick-initialized')) {
				$('.project').slick({
					arrows: true,
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: false,
					responsive: [
					    {
					      breakpoint: 992,
					      settings: {
					      	slidesToShow: 2,
					      }
					    }
				  	]
				})	
			}
		}else{
			if ($('.project').hasClass('slick-initialized')) {
				$('.project').slick('unslick');
			}
		} 
	};
	$(window).on('load resize',windowSize);

	$('.quotes__slide').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false
	});

 	$('.inside-country__item').click((function(){
 		$('.inside-country__item').removeClass('active');
 		$(this).addClass('active');
 		index = $(this).index();
 		$('.inside-slide__box').slick('slickGoTo',index);
 	}));

 	$('.menu-min').click((function(){
 		$('.show-menu').toggleClass('active');
 		$('body').toggleClass('no-scroll');
 	}));

 	$('.show-menu__close').click((function(){
 		$('.show-menu').removeClass('active');
 		$('body').removeClass('no-scroll');
 	}));

	$(document).mouseup((function (e){
		var div = $(".show-menu__box");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
	 		$('.show-menu').removeClass('active');
	 		$('body').removeClass('no-scroll');
		}
	}));

 	$('.min-menu__item--has-child').click((function(){
 		$(this).toggleClass('open');
 		$(this).find('.inside-menu').slideToggle();
 	}));

 	$('.lang-min').click((function(){
 		$('.lang-min__list').toggleClass('active');
 	}));

 	$(document).mouseup((function (e){
		var div = $(".lang-min");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
	 		$('.lang-min__list').removeClass('active');
		}
	}));

 	$('.sorting__start').click((function(){
 		$('.sorting-show').removeClass('active');
 		$('.sorting__start').removeClass('active');
 		$(this).addClass('active');
 		$(this).parent().find('.sorting-show').addClass('active');
 	}));

 	$('.sorting-show__item').click((function(){
 		$(this).parent().removeClass('active');
 		var val_select = $(this).text();
 		$(this).parent().parent().find('.sorting__start').text(val_select);
 	}));

 	jQuery((function($){
		$(document).mouseup((function (e){
			var div = $(".sorting-show");
			if (!div.is(e.target) 
			    && div.has(e.target).length === 0) {
				$('.sorting-show').removeClass('active');
			}
		}));
	}));

	$(window).on('load resize', (function(){
		if ($('.sorting').length) {
			if ($(window).width() <= 992) {
			    $('.page__content').prepend($('.sorting'));
			  } else{
			  	$('.sidebar').prepend($('.sorting'));
			}
		}
	}));

	$(window).on('load resize', (function(){
		if ($('.surfinglk').length) {
			if ($(window).width() <= 992) {
			    $('.page__content').prepend($('.surfinglk'));
			  } else{
			  	$('.sidebar').prepend($('.surfinglk'));
			}
		}
	}));

	if ($('.popular__link').length) {
		if ($(window).width() <= 470) {
		    $('.article__popular').after($('.popular__link'));
		}
	}


	$('.select-wiew__item').click((function(){
	    $('.select-wiew__item').removeClass('active');
	    $(this).addClass('active');
	    partner = $(this).index();
	    $('.partners-box__item').removeClass('active');
	    $('.partners-box__item').eq(partner).addClass('active');
	}));

	$(window).on('load resize', (function(){
		if ($('.partners-parameters__box').length) {
			if ($(window).width() <= 992) {
			    $('.partners-box').after($('.partners-parameters__box'));
			} 
		}
	}));

	$('.photogalary__box').slick({
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
	 	variableWidth: true,
	 	responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		      	slidesToShow: 3,
		      	variableWidth: false,
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		      	slidesToShow: 2,
		      	slidesToScroll: 1,
		      	variableWidth: false,
		      }
		    },
		    {
		      breakpoint: 660,
		      settings: {
		      	slidesToShow: 1,
		      	slidesToScroll: 1,
		      	variableWidth: false,
		      }
		    }
	  	]
	});
	$('.similar-company__box').slick({
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		      	slidesToShow: 2,
		      	slidesToScroll: 1,
		      	variableWidth: false,
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		      	slidesToShow: 1,
		      	slidesToScroll: 1,
		      }
		    }
	  	]
	});
    $.datepicker.setDefaults(
        {
        closeText: 'Закрыть',
        prevText: '',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
            'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    });
	$("#date").datepicker();

	
}));