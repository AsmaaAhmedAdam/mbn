(function($){
	"use strict";

	// Project Slides
	$('.project-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		smartSpeed: 2000,
		margin: 20,
		autoplayHoverPause: true,
		autoplay: true,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	// Video Popup
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Feedback Slides
	$('.feedback-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		margin: 30,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-right'></i>"
		],
	});

	// Partner Slides
	$('.partner-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		smartSpeed: 2000,
		margin: 30,
		autoplayHoverPause: true,
		autoplay: true,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-right'></i>"
		],
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 3
			},
			768: {
				items: 4
			},
			1200: {
				items: 6
			}
		}
	});

	// Team Slides
	$('.team-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		smartSpeed: 2000,
		margin: 15,
		autoplayHoverPause: true,
		autoplay: true,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 4
			},
			1200: {
				items: 5
			}
		}
	});

	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// Blog Slides
	$('.blog-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		smartSpeed: 2000,
		margin: 30,
		autoplayHoverPause: true,
		autoplay: true,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});

	// Services Details Slides
	$('.services-image-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 1,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		autoplay: true,
	});

	// FAQ Accordion
	$(function() {
		$('.accordion').find('.accordion-title').on('click', function(){
			// Adds Active Class
			$(this).toggleClass('active');
			// Expand or Collapse This Panel
			$(this).next().slideToggle('fast');
			// Hide The Other Panels
			$('.accordion-content').not($(this).next()).slideUp('fast');
			// Removes Active Class From Other Titles
			$('.accordion-title').not($(this)).removeClass('active');		
		});
	});

	/*new-js*/

	// Services Slides
	$('.services-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		margin: 30,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		autoplay: true,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});

	// Feedback Slides
	$('.feedback-slides-two').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		margin: 30,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		autoplay: true,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			1200: {
				items: 2
			}
		}
	});

	/*end-new-js*/

	// Go to Top
	$(function(){
		//Scroll event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.go-top').fadeIn('slow');
			if (scrolled < 300) $('.go-top').fadeOut('slow');
		});  
		//Click event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});
	});
	// smooth scroll
	$( '.uk-navbar-nav li a' ).on( 'click', function(e){
		var href = $(this).attr( 'href' );
		$( 'html, body' ).animate({
			  scrollTop: $( href ).offset().top
		}, '300' );
		e.preventDefault();
	  });

	// Testimonials Slides
	$('.testimonials-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 1,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		autoplay: false,
	});

	// Lax JS
	window.onload = function() {
		lax.setup() // init
		const updateLax = () => {
			lax.update(window.scrollY)
			window.requestAnimationFrame(updateLax)
		}
		window.requestAnimationFrame(updateLax)
    }

	// Preloader JS
    jQuery(window).on('load', function() {
        $('.uk-preloader').fadeOut();
    });

	// dark mode
	$(".mode").on('click', function() {
		$(".dark-mode").toggleClass('uk-dark');
});

   // init Isotope elements
   var $box = $(".isotope-box").isotope({
	itemSelector: ".isotope-item",
});
// in arabic
if ($("html").attr("dir", "rtl")) {
	var $box = $(".isotope-box").isotope({
		originLeft: false
	});
}

// filter functions
// bind filter button click
$(".isotope-toolbar").on("click", "button", function () {
	var filterValue = $(this).attr("data-type");
	$(".isotope-toolbar").find(".active").removeClass("active");
	$(this).addClass("active");
	if (filterValue !== "*") {
		filterValue = '[data-type="' + filterValue + '"]';
	}
	console.log(filterValue);
	$box.isotope({ filter: filterValue });
});

// change is-checked class on buttons

$(".lang").click(function () {
	var dir = $("html").attr("dir");
	if(dir == "rtl")
	{
	   $("html").attr("dir", "");
	}
	else{
		$("html").attr("dir", "rtl");
	}
});



}(jQuery));