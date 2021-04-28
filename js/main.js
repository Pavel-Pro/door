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
	$('.header-menu__item.dropdown').on('mouseover', function() {
		console.log('mouseover');
		$(this).children('.sub-menu__inner').show();
	});
	$('.header-menu__item.dropdown').on('mouseout', function() {
		// $(this).children('.sub-menu__inner').delay(7000).removeClass('hover');
		console.log('mouseout');
		// $(this).children('.sub-menu__inner').delay(1000).hide();
		function hideFunc() {
			console.log('setTimeout');
			$('.header-menu__item.dropdown').children('.sub-menu__inner').hide()
		}
		setTimeout(hideFunc, 5000);
	});
	$('.sub-menu__inner').on('mouseover', function() {
		console.log('mouseover');
		$(this).show();
	});
	$('.sub-menu__inner').on('mouseout', function() {
		console.log('mouseout');
		$(this).hide();
	});