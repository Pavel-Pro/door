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