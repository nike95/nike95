/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
$(document).ready((function(){

	/*fake-link*/
	Link = function(){};
	Link.prototype.openLink = function(el) {
	    var link = $(el).attr('data-href');
	    var win = null;
	    win = window.open(link, '_self');
	    win.focus();
	};
	window.Link = new Link();
	$(function(){
	    $(document).on('click', '.fake-link', function(e) {
	        e.stopPropagation();
	        window.Link.openLink($(this));
	        return false;
	    });
	});


	function calcform() {
		col_b = $('input[name="colletter"]').val();
		height_b = $('input[name="heightletter"]').val();
		rama_b = 0;
		border_b = 0;
		front_b = 0;
		if($('#checkbox').prop('checked')){
			base_p = 55;
			$('.in_type').val('Световая');
		}else{
			base_p = 30;
			$('.in_type').val('Обычная');
		}
		if ($('.in_rama').val() == 'да' || $('.in_rama').val() == 'Да') {
			rama_b = 12;
		}
		if ($('.in_front-b').val() != '#000' && $('.in_front-b').val() != '#fff') {
			front_b = 19;
		}
		if ($('.in_border-b').val() != '#000' && $('.in_border-b').val() != '#fff') {
			border_b = 13;
		}
		pries = col_b*height_b*(rama_b+ border_b+ front_b+ base_p);
		$('.calculatecost__outcome span').text(pries+' руб');
		$('.in_summ').val(pries+' руб');
		$('.in_col').val(col_b);
		$('.in_lengh').val(height_b );

	}
 calcform();

  $(".calculatecost__form").submit((function() {
        $.ajax({
            type: "POST",
            url: "mail_calc.php",
            data: $(this).serialize()
        }).done((function() {
			window.location.pathname = "/thanks/";
        }));
        return false; 
    }));


  $('input').on('change', function () {
       calcform();
    });
	/*mask-phone*/
	$("input[type=tel]").mask("+7 (999) 999-9999");


	/*page-scroll*/
	var win = $('.firstscreen').height() + 400;
	$('.page-scroll').click(function () {
	    $('body,html').animate({
	        scrollTop: win
	    }, 800);
	    return false;
	});

	$(".firstscreen__btnpayment").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 800);
	});
	/*range*/
	$(".range__input").each(function(i,elem) {
	    val = $(this).val();
	    min = $(this).attr('min');
	    max = $(this).attr('max');
	    step = $(this).attr('step');
	    position =100/(max - step) * (val- step);
	    $(this).parent().find('.range__track').width(position+"%");
	    $(this).parent().parent().find(".range-num").text(val);
	});
	$(".range__input").on('input',function(){
	    val = $(this).val();
	    min = $(this).attr('min');
	    max = $(this).attr('max');
	    step = $(this).attr('step');
	    position =100/(max - step) * (val- step);
	    $(this).parent().find('.range__track').width(position+"%");  
	    $(this).parent().parent().find(".range-num").text(val);
	    if (val > (max - 8)) {

	    	$(this).parent().find(".range__max").hide();
	    }else {
	    	$(this).parent().find(".range__max").show();
	    }
	    if (val < 5 ) {

	    	$(this).parent().find(".range__min").hide();
	    }else {
	    	$(this).parent().find(".range__min").show();
	    }
	});	


   /*sliders*/

   	$('#whythisletter-prev').click(function(){
        $(".whythisletter__slide-js").trigger('prev.owl.carousel');
 	});
	$('#whythisletter-next').click(function(){
      $(".whythisletter__slide-js").trigger('next.owl.carousel');
 	});
 	$('#aboutproduction-prev').click(function(){
        $(".aboutproduction__slide-js").trigger('prev.owl.carousel');
 	});
	$('#aboutproduction-next').click(function(){
      $(".aboutproduction__slide-js").trigger('next.owl.carousel');
 	});
 	$('#reviews-prev').click(function(){
        $(".reviews__slide-js").trigger('prev.owl.carousel');
 	});
	$('#reviews-next').click(function(){
      $(".reviews__slide-js").trigger('next.owl.carousel');
 	});
 	$('#step-prev').click(function(){
        $(".step__slide-js").trigger('prev.owl.carousel');
 	});
	$('#step-next').click(function(){
      $(".step__slide-js").trigger('next.owl.carousel');
 	});
 	$('#portfolio-prev').click(function(){
        $(".portfolio__bigslide-js").trigger('prev.owl.carousel');
 	});
	$('#portfolio-next').click(function(){
      $(".portfolio__bigslide-js").trigger('next.owl.carousel');
 	});



	$(".ustrust__slide-js").owlCarousel({
		items: 4,
		nav: true,
		dots: false,
				loop:true,
		responsive:{
			320:{
				items:1,
				nav: false,
				dots: true,
				dotsContainer: '#ustrust-dots',
				margin: 50,
				loop:true,
			},
	        480:{
				items:1,
				nav: false,
				dots: true,
				dotsContainer: '#ustrust-dots',
				margin: 50,
				loop:true,
	        },
	        600:{
	            items:2,
	            nav: false,
	            dots: true,
	            dotsContainer: '#ustrust-dots',
				margin: 50,
				loop:true,
	        },
	        768:{
				items:2,
				loop:true,
	        },
	        992:{
				items:3,
				loop:true,
	        },
	        1200:{
				items:3,
				loop:true,
	        },
	        1350:{
				items:4,
				loop:true,
	        },
	    }
	});

	$(".whythisletter__slide-js").owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		margin:15,
		autoWidth: true,
		loop:true,
 		dotsContainer: '#whythisletter-dots',
		responsive:{
			320:{
				items:1,
			},
	        480:{
				items:1,
	        },
	        600:{
	            items:2,
	        },
	        768:{
				items:2,
	        },
	        992:{
				items:3,
	        },
	        1200:{
				items:3,
	        },
	        1350:{
				items:1,
	        },
	    }
	});

	$(".aboutproduction__slide-js").owlCarousel({
		items: 1,
		nav: false,
		dots: true,
 		dotsContainer: '#aboutproduction-dots',
		responsive:{
			320:{
				items:1,
			},
	        480:{
				items:1,
	        },
	        600:{
	            items:1,
	        },
	        768:{
				items:1,
	        },
	        992:{
				items:1,
	        },
	        1200:{
				items:1,
	        },
	        1350:{
				items:1,
	        },
	    }
	});


	$(".reviews__slide-js").owlCarousel({
		items: 1,
		nav: false,
		dots: true,
 		dotsContainer: '#reviews-dots',
		responsive:{
			320:{
				items:1,
	            margin: 20,
			},
	        480:{
				items:1,
	            margin: 20,
	        },
	        600:{
	            items:1,
	            margin: 20,
	        },
	        768:{
				items:1,
	        },
	        992:{
				items:1,
	        },
	        1200:{
				items:1,
	        },
	        1350:{
				items:1,
	        },
	    }
	});

 	var sync1 = $(".step__slide-js");
  	var sync2 = $(".step__slide-num-js");
  	var slidesPerPage = 1;
  	var syncedSecondary = true;
	sync2
	    .on('initialized.owl.carousel', function () {
	      sync2.find(".owl-item").eq(0).addClass("current");
	    })
	    .owlCarousel({
	    items : slidesPerPage,
	    slideBy: 1,
	    slideSpeed: 1000,
	});
	function syncPosition(el) {
	    var count = el.item.count-1;
	    var current = el.item.index;
	    current = Math.abs(current);
	    if(current < 0) {
	      current = count;
	    }
	    if(current > count) {
	      current = 0;
	    }
	    sync2
	      .find(".owl-item")
	      .removeClass("current")
	      .eq(current)
	      .addClass("current");
	    var onscreen = sync2.find('.owl-item.active').length - 1;
	    var start = sync2.find('.owl-item.active').first().index();
	    var end = sync2.find('.owl-item.active').last().index();
	    $('.step__bg img').removeClass('show');
	    $('.step__bg img').eq(current).addClass('show');
	    if (current > end) {
	      sync2.data('owl.carousel').to(current, 100, true);
	    }
	    if (current < start) {
	      sync2.data('owl.carousel').to(current - onscreen, 100, true);
	    }
	    if (current == 0) {
	      sync2.data('owl.carousel').to(current - onscreen, 100, true);
	      $('.slide-step__prev').addClass('disabled');
	    }else{
	    	$('.slide-step__prev').removeClass('disabled');
	    }
	}

	
	var sync3 = $(".portfolio__bigslide-js");
  	var sync4 = $(".portfolio__minslide-js");
  	var slidesPerPage = 5;
  	var syncedSecondary = true;
	sync3.owlCarousel({
	    items : 1,
	    nav: false,
	    dots: true,
	    animateIn: 'fadeIn',
        animateOut: 'fadeOut',
	    dotsContainer: '#portfolio-dots',

	      responsive:{
	      		0:{
	      			items:1,
				    animateIn: false,
			        animateOut: false,
				    nav: false,
				    dots: true,
				    dotsContainer: '#portfolio-dots',
				    margin:10,
	      		},
		        600:{
				    items : 1,
				    nav: false,
				    dots: true,
				    animateIn: 'fadeIn',
			        animateOut: 'fadeOut',
				    dotsContainer: '#portfolio-dots',
		        },
		        1900:{
				    items : 1,
				    nav: false,
				    dots: true,
				    animateIn: 'fadeIn',
			        animateOut: 'fadeOut',
				    dotsContainer: '#portfolio-dots',
		        },
		    }
	}).on('changed.owl.carousel', syncPosition_new);
	sync4
	    .on('initialized.owl.carousel', function () {
	      sync4.find(".owl-item").eq(0).addClass("current");
	    })
	    .owlCarousel({
	    items : slidesPerPage,
	    slideBy: 1,
	    slideSpeed: 1000,
	    autoWidth: true,
	    margin:14,
	    dots: false,
	    touchDrag: false,
        mouseDrag: false,
	}).on('changed.owl.carousel', syncPosition2);;
	function syncPosition_new(el) {
	    var count = el.item.count-1;
	    var current = el.item.index;
	    current = Math.abs(current);
	    if(current < 0) {
	      current = count;
	    }
	    if(current > count) {
	      current = 0;
	    }
	    sync4
	      .find(".owl-item")
	      .removeClass("current")
	      .eq(current)
	      .addClass("current");
	    var onscreen = sync4.find('.owl-item.active').length - 1;
	    var start = sync4.find('.owl-item.active').first().index();
	    var end = sync4.find('.owl-item.active').last().index();
	    $('.step__bg img').removeClass('show');
	    $('.step__bg img').eq(current).addClass('show');
	    if (current > end) {
	      sync4.data('owl.carousel').to(current, 100, true);
	    }
	    if (current < start) {
	      sync4.data('owl.carousel').to(current - onscreen, 100, true);
	    }
	}
	function syncPosition2(el) {
	    if(syncedSecondary) {
	      var number = el.item.index;
	      sync3.data('owl.carousel').to(number, 100, true);
	    }
	}
	  
	sync4.on("click", ".owl-item", function(e){
	    e.preventDefault();
	    var number = $(this).index();
	    sync3.data('owl.carousel').to(number, 300, true);
	 });

	

	/*timer*/
	$(window).on("load", function() {
    function nextDayAndTime(dayOfWeek, hour, minute) {
      var now = new Date()
      var result = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + (7 + dayOfWeek - now.getDay()) % 7,
        hour,
        minute)
      if (result < now)
        result.setDate(result.getDate() + 7)
      return result
    }

    function get_timer() {
        var date_new = nextDayAndTime(0, 23, 0).toString();
        var date_t = new Date(date_new);
        var date = new Date();
        var timer = date_t - date;
        if(date_t > date) {
            var day = parseInt(timer/(60*60*1000*24));
            if(day < 10) {
                day = '0' + day;
            }
            day = day.toString();

            var hour = parseInt(timer/(60*60*1000))%24;
            if(hour < 10) {
                hour = '0' + hour;
            }
            hour = hour.toString();

            var min = parseInt(timer/(1000*60))%60;
            if(min < 10) {
                min = '0' + min;
            }
            min = min.toString();

            var sec = parseInt(timer/1000)%60;
            if(sec < 10) {
                sec = '0' + sec;
            }
            sec = sec.toString();

            if(day[1] == 9 &&
                hour[0] == 2 &&
                hour[1] == 3 &&
                min[0] == 5 &&
                min[1] == 9 &&
                sec[0] == 5 &&
                sec[1] == 9) {
                animation($("#day0"),day[0]);
            }
            else {
                $("#day0").html(day[0]);
            }

            if(hour[0] == 2 &&
                hour[1] == 3 &&
                min[0] == 5 &&
                min[1] == 9 &&
                sec[0] == 5 &&
                sec[1] == 9) {
                animation($("#day1"),day[1]);
            }
            else {
                $("#day1").html(day[1]);
            }

            if(hour[1] == 3 &&
                min[0] == 5 &&
                min[1] == 9 &&
                sec[0] == 5 &&
                sec[1] == 9) {
                animation($("#hour0"),hour[0]);
            }
            else {
                $("#hour0").html(hour[0]);
            }

            if(min[0] == 5 &&
                min[1] == 9 &&
                sec[0] == 5 &&
                sec[1] == 9) {
                animation($("#hour1"),hour[1]);
            }
            else {
                $("#hour1").html(hour[1]);
            }

            if(min[1] == 9 &&
                sec[0] == 5 &&
                sec[1] == 9) {
                animation($("#min0"),min[0]);
            }
            else {
                $("#min0").html(min[0]);
            }

            if(sec[0] == 5 && sec[1] == 9) {
                animation($("#min1"),min[1]);
            }
            else {
                $("#min1").html(min[1]);
            }

            if(sec[1] == 9) {
                animation($("#sec0"),sec[0]);
            }
            else {
                $("#sec0").html(sec[0]);
            }
            animation($("#sec1"),sec[1]);
        }
        else{
            $("#clock").html("<span id='stop'>Отсчет закончен!!!</span>");
        }
        setTimeout(get_timer,1000);
    	}
	    if ($(this).scrollTop() > 2000) {
	        get_timer(); 
	    }
	    if ($(window).width() < 500) {
	        get_timer(); 
	    }
	    function animation(vibor,param) {
	        vibor.html(param)
	        .css({'marginTop':'-20px','opacity':'0'})
	        .animate({'marginTop':'0px','opacity':'1'});
	    }
	    $(window).scroll(function() {
	    if ($(this).scrollTop() > 2000) {
	          setTimeout(function() {
	            get_timer(); 
	            }, 1000);  
	        }
	    });
	});

	

	/*resize*/
	function windowSize(){
		if ($(window).width() <= 1200) {
	      if ( $('.activities__flex').length && !$('.activities__flex').hasClass('init')) {
	        $('.activities__flex').addClass('owl-carousel init');
	        $('.activities__flex').owlCarousel({
	          items: 2,
	          nav: false,
	          dots: true,
	          responsive:{
	          		0:{
	          			items:1,
	          			autoWidth:true,
	          		},
			        480:{
			            items:1,
			            autoWidth:true,
			        },
			        600:{
			        	autoWidth:true,
			            items:2,
			        },
			        768:{
			        	autoWidth:true,
			            items:2,
			        },
			        992:{
			            items:2,
			        },
			    }
	        });
	      }
	    }else {
	      $('.activities__flex').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded init');
	      $('.activities__flex').find('.owl-stage-outer').children().unwrap();
	    }
	    if ($(window).width() >= 992) {
	      if ( $('.step__slide-js').length && !$('.step__slide-js').hasClass('init')) {
	        $('.step__slide-js').addClass('owl-carousel init');
			$(".step__slide-js").owlCarousel({
			    items : 1,
			    nav: false,
			    dots: false,
				animateOut: 'slideOutUp',
				animateIn: 'slideInUp',
				touchDrag: false,
		        mouseDrag: false,
			}).on('changed.owl.carousel', syncPosition);
	      }
	    }else {
	      $('.step__slide-js').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded init');
	      $('.step__slide-js').find('.owl-stage-outer').children().unwrap();
	    }
	    if ($(window).width() <= 992) {
	    	$(".setapplication__img-girl").after($(".setapplication__btn-girl"));
	    }else{
	    	$(".setapplication__timework-girl").after($(".setapplication__btn-girl"));
	    }
	    if ($(window).width() <= 992) {
	    	$(".setapplication__img-men").after($(".setapplication__btn-men"));
	    }else{
	    	$(".setapplication__timework-men").after($(".setapplication__btn-men"));
	    }
	    if ($(window).width() <= 768) {
	    	if (!$('.calc-slider').length) {
	    		$(".calculatecost__colmn:nth-child(2)").after("<div class='calc-slider owl-carousel'></div>");
	    		$('.calc-slider').append($('.calculatecost__box'));	
	    		$('.calc-slider').append($('.calculatecost__form'));
	    		$(".calc-slider").owlCarousel({
				    items : 1,
				    nav: false,
				    dots: false,
				    mouseDrag: false,
				    touchDrag: false,
				    margin:10,
				})	
	    	}
	    }
	    if ($(window).width() <= 601) {
	    	$(".firstscreen__btnbox").after($(".page-scroll"));
	    }else{
	    	$(".firstscreen .container").after($(".page-scroll"));
	    }
	    if ($(window).width() <= 601) {
	    	$(".footer__logobox").after($(".footer__ordercall"));
	    }else{
	    	$(".footer__phone").after($(".footer__ordercall"));
	    }
	    if ($(window).width() <= 601) {
	    	$(".footer__phone").after($(".footer__addres"));
	    }else{
	    	$(".footer__flex--padding .footer__colmn:nth-child(2)").append($(".footer__addres"));
	    }

	    $('.owl-item:nth-child(2) .aboutproduction__list, .owl-item:nth-child(3) .aboutproduction__list').height($('.owl-item:first-child .aboutproduction__list').height());
	    if ($(window).width() <= 601) { 
	    	top_d = $('.owl-item:first-child .aboutproduction__box').height() + 145;
	    	$('.slide-control.slide-control--aboutprod').css('top', top_d)
	    }
	}
	$(window).on('load resize', windowSize);

 	$('.calc-slider__next').click(function(){
        $(".calc-slider").trigger('next.owl.carousel');
 	});
	$('.calc-slider__prev').click(function(){
      $(".calc-slider").trigger('prev.owl.carousel');
 	});


	/*ozer*/
	$('#checkbox').on('change', function(){
		if ($(this).prop('checked')) {
			$('.calculatecost').addClass('black');
			$(this).parent().find('label').text('Световой');
		}else{
			$('.calculatecost').removeClass('black');
			$(this).parent().find('label').text('Не световой');
		}
	});

	$('.calculatecost__colorselectbox').click(function(){
		$('.color-list').removeClass('show');
		$(this).find('.color-list').addClass('show');
	});

	$(document).mouseup(function (e){
	    var div = $(".calculatecost__colorall"); 
	    if (!div.is(e.target) 
	        && div.has(e.target).length === 0) {
	      $('.color-list').removeClass('show');
	    }
	});

	$('.calculatecost__btn').click(function(){
		$('.calculatecost__btn').removeClass('active');
		$(this).addClass('active');
		$('.in_rama').val($(this).text());
		calcform();
		return  false;
	});

	$('.question-ansver__item').click(function(){
		if ($(this).hasClass('active')) {
			$('.question-ansver__item').removeClass('active');
			$('.question-ansver__show').slideUp();
		}else{
			$('.question-ansver__item').removeClass('active');
			$(this).addClass('active');
			$('.question-ansver__show').slideUp();
			$(this).find('.question-ansver__show').slideDown();
		}
	});

	$('.pop-call').click(function(){
		$('html,body').addClass('noscroll');
		$('.popup').addClass('show');
		return false;
	});
	$('.popup__close').click(function(){
		$('html,body').removeClass('noscroll');
		$('.popup').removeClass('show');
	});
	$(document).mouseup(function (e){ 
		var div = $(".popup__box");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('html,body').removeClass('noscroll');
			$('.popup').removeClass('show');
		}
	});

	$('.color-list__item').click(function(){
		color = $(this).css('background-color');
		$(this).parent().parent().parent().find('.calculatecost__colornowbox').css('background-color', color);
		if (!$(this).parent().hasClass('front-b')) {
			$('path.inside').css('fill', color);
			$('.in_border-b').val($(this).text());
		}else {
			$('path.outside').css('fill', color);
			$('.in_front-b').val($(this).text());
		}
		       calcform();
	});


  $(".popup__form").submit((function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done((function() {
			window.location.pathname = "/thanks/";
        }));
        return false; 
    }));


}));