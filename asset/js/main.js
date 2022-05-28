(function ($) {
	
	"use strict";


	$('.open-menu').click(function(){
		$('.open-menu').css({"display":'none'})
		$('.close-menu').css({"display":'block'})
		$('.nav').css({"transform":'scaleY(1)',"transition":"ease-in .3s"})
		$('.sticky_header').css({"border-bottom":'none'})
	});
	$('.close-menu').click(function(){
		$('.close-menu').css({"display":'none'})
		$('.open-menu').css({"display":'block'})
		$('.nav').css({"transform":'scaleY(0)',"transition":"ease-out .3s"})
	});


	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}


	// fixed navbar
	// When the user scrolls the page, execute myFunction
	window.onscroll = function() {
		
		// Get the navbar
		var main__header = document.getElementById("main-header");
		var header__warp = document.querySelector(".header-warp");
		// var dark__section = document.getElementById("dark__section");
		
		// Get the offset position of the navbar
		var scrollY = 20;
		
		// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
		if (window.pageYOffset >= scrollY) {
			header__warp.classList.add("fixed_top");
			main__header.classList.add("sticky_header");
			header__warp.classList.add("all_transations");
		
			
		
		} else {
			header__warp.classList.remove("fixed_top");
			main__header.classList.remove("sticky_header");
			header__warp.classList.add("all_transations");
		
		}
		
	};

	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	$('#custommer-comment').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);
