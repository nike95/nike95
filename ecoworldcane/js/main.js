$(function(){
	new WOW().init();

	$('.aboutproduct__item').click(function(){
		let index = $(this).index() + 1;
		$('.aboutproduct__item').removeClass("active");
		$(this).addClass("active");
		$(".aboutproduct__img").removeClass("active");
		$(".aboutproduct__img").eq(index).addClass("active");
	});
	
	$('.burger').click(function(){
		$(".min-menu").addClass("active");
		$(".firstscreen").addClass("active");
		$("body,html").addClass("noscroll");	
	});
	$('.min-menu__close').click(function(){
		$(".min-menu").removeClass("active");
		$(".firstscreen").removeClass("active");
		$("body,html").removeClass("noscroll");	
	});
});