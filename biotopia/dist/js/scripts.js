/*! project-name v0.0.1 | (c) 2021 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
$(document).ready((function(){
	$('.tab__slide').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  arrow: true,
	  fade: true,
	});
	$('.header__navlist>li>a').click((function(){
		$('.header__navlist>li>a').removeClass('active');
		$(this).addClass('active');
	}));
}));

