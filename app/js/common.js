$(function() {

	$('.header-open-menu').on('click', function() {
		$('.header-row').addClass('opened');
	});

	$('.header-close-menu').on('click', function() {
		$('.header-row').removeClass('opened');
	});

	let mainSlideIndex = 1,
			mainSlidesQnt = $('.main-slider-item').length;

	$('.main-slider-prev').on('click', function() {
		mainSlideIndex = mainSlideIndex > 1 ? mainSlideIndex - 1 : mainSlidesQnt;
		$('.main-slider-item').removeClass('active');
		$('.main-slider-item').eq(mainSlideIndex - 1).addClass('active');
	});

	$('.main-slider-next').on('click', function() {
		mainSlideIndex = mainSlideIndex == mainSlidesQnt ? 1 : mainSlideIndex + 1;
		$('.main-slider-item').removeClass('active');
		$('.main-slider-item').eq(mainSlideIndex - 1).addClass('active');
	});

	let mainSlider = $('.main-slider');

	function initMainSlider() {
		if ( $(window).width() < 576 ) {
			mainSlider.addClass('owl-carousel');
			mainSlider.owlCarousel({
				items: 1,
				dots: false,
				nav: true,
				margin: 27,
				autoWidth: true
			})
		}
		else {
			mainSlider.removeClass('owl-carousel');
			mainSlider.trigger('destroy.owl.carousel')
		}
	}initMainSlider();

	$('.course-slider').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		mouseDrag: false,
		margin: 0
	});

	$('.skill-tabs-link').eq(0).addClass('active');
	$('.skill-tabs-img').eq(0).show();
	$('.skill-tabs-body-item').eq(0).show().addClass('active');

	$('.skill-tabs-border').css('width', $('.skill-tabs-link').outerWidth());

	$('.skill-tabs-link').on('click', function(e) {
		e.preventDefault();

		let ths = $(this),
				id = ths.attr('href');

		if ( $(id).is(':hidden') ) {

			$('.skill-tabs-link').removeClass('active');

			ths.addClass('active');

			let pos = ths.position().left;
			$('.skill-tabs-border').css({
				'-webkit-transform': `translateX(${pos}px)`,
				'-moz-transform': `translateX(${pos}px)`,
				'-o-transform': `translateX(${pos}px)`,
				'transform': `translateX(${pos}px)`,
				'width': `${ths.outerWidth()}px`
			});

			$('.skill-tabs-img').hide();
			$(`.skill-tabs-img[data-for='${id}']`).fadeIn(400);

			$('.skill-tabs-body-item').removeClass('active').hide();
			$(id).show();
			setTimeout(() => {
				$(id).addClass('active')
			}, 50);

		}

	});

	$('.accordion-item').eq(0).find('.accordion-title').addClass('active');
	$('.accordion-item').eq(0).find('.accordion-body').show();

	$('.accordion-item').each(function() {
		let ths = $(this),
				title = ths.find('.accordion-title'),
				body = ths.find('.accordion-body');
		title.on('click', function() {
			body.slideToggle(400);
			title.toggleClass('active');
		});
	});

	function animation(top) {

		$('.numbers-item').eq(0).css({
			'-webkit-transition-delay': '0s',
			'-moz-transition-delay': '0s',
			'-o-transition-delay': '0s',
			'transition-delay': '0s',
		});
		$('.numbers-item').eq(1).css({
			'-webkit-transition-delay': '.25s',
			'-moz-transition-delay': '.25s',
			'-o-transition-delay': '.25s',
			'transition-delay': '.25s',
		});
		$('.numbers-item').eq(2).css({
			'-webkit-transition-delay': '.5s',
			'-moz-transition-delay': '.5s',
			'-o-transition-delay': '.5s',
			'transition-delay': '.5s',
		});
		$('.numbers-item').eq(3).css({
			'-webkit-transition-delay': '.75s',
			'-moz-transition-delay': '.75s',
			'-o-transition-delay': '.75s',
			'transition-delay': '.75s',
		});

		$('.animate').each(function() {
			let ths = $(this),
					thsTop = ths.offset().top;
			if ( top >= thsTop - $(window).height() * 0.9 ) {
				ths.addClass('animate-fade-in')
			}
		});

	}animation($(window).scrollTop());

	$(document).on('click', function(e) {
		if ( !$(e.target).closest('.header').length ) {
			$('.header-row').removeClass('opened')
		}
	});

	$(window).on('scroll', function() {
		let top = $(window).scrollTop();
		animation(top);
	});

	$(window).on('resize', function() {
		initMainSlider();
	});

	$(window).on('load', function() {
		$('body').css('opacity', '');
		setTimeout(() => {
			$('body').removeClass('load-animation')
		}, 300)
	});

});
