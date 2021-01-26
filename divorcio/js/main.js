$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 1,
	    responsive:{
	        0:{
	            items:1,
	            nav:false,
	            dots: true
	        },
	        600:{
	            items:1,
	            nav:false,
	            dots: true
	        },
	        1000:{
	            items:1,
	            nav:true,
	            loop:false,
	            dots: true
	        }
	    }
	})
});