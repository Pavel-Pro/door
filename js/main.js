	$('.burger').click(function() {
		$('.header-menu').slideToggle('500')
		$('.burger__item:first-child').toggleClass('burger__item-top')
		$('.burger__item:nth-child(2)').toggleClass('burger__item-middle')
		$('.burger__item:last-child').toggleClass('burger__item-bottom');
	});
	$('.factory__slider').slick({
		infinite: true,
     	dots: true,
      	slidesToShow: 1,
      	slidesToScroll: 1,
      	responsive: [{
      		breakpoint: 750,
		    	settings: {
		    		arrows: false,
		    	}
		    }
	    ]
	});
	$(window).on('scroll', function(){
		var menuShow = $('.veneered').offset().top;
		var currentHeight = $(document).scrollTop();
		if (currentHeight >= menuShow) {
			$('.main').addClass('fixed');
			$('.header').addClass('fixed');
		} else {
			$('.main').removeClass('fixed');
			$('.header').removeClass('fixed');
		}
	});
	$('.header-menu__item.dropdown').hover(function(){
		if($(this).children('.sub-menu__inner').is(':visible')){
			$(this).children('.sub-menu__inner').addClass('sub-menu__inner_opacity');
		}
		$(this).children('.sub-menu__inner').fadeIn();
	},
	function(){
		$(this).children('.sub-menu__inner').delay(333).removeClass('sub-menu__inner_opacity').fadeOut();
	}
);