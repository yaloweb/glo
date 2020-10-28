$(function() {
	
		$('.skill-tabs-body-item').each(function(i) {
			let ths = $(this),
					img = ths.find('.skill-tabs-img'),
					imgSrc = ths.find('.skill-tabs-img').find('img').attr('src');
			img.remove();
			$('.skill-tabs-img-list').append(`<div class="skill-tabs-img" style="background-image: url(${imgSrc});"></div>`);
		});

		$('.skill-tabs-link').eq(0).addClass('active');
		$('.skill-tabs-img').eq(0).show();
		$('.skill-tabs-body-item').eq(0).show().addClass('active');

		$('.skill-tabs-border').css('width', $('.skill-tabs-link').outerWidth());

		$('.skill-tabs-link').on('click', function(e) {
			e.preventDefault();

			let ths = $(this),
					index = ths.index() - 1;

			if ( $('.skill-tabs-body-item').eq(index).is(':hidden') ) {

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
				$(`.skill-tabs-img`).eq(index).fadeIn(400);

				$('.skill-tabs-body-item').removeClass('active').hide();
				$('.skill-tabs-body-item').eq(index).show();
				setTimeout(() => {
					$('.skill-tabs-body-item').eq(index).addClass('active')
				}, 50);

			}

		});

		let sidebar = $('.sidebar-content');

		sidebar.parents('.block-wrapper').find('.open-content-list-btn').appendTo('.landing-main');

		sidebar.find('.container').removeClass('container');

		if ( sidebar.length !== 0 ) {

			let f = 0,
					l = $('.js-left-col:last').parents('.block-wrapper').attr('id');

			$('.block-wrapper').each(function(i) {

				let ths = $(this);

				if ( ths.attr('id') == sidebar.parents('.block-wrapper').attr('id') ) {
					f = i
				}
				if ( f !== 0 && i > f ) {
					ths.addClass('go-to-left-col');
					ths.find('.container').removeClass('container')
				}
				if ( ths.attr('id') == l ) {
					return false
				}

			});

			$('.go-to-left-col').wrapAll('<div class="article-page"><div class="container"><div class="row"><div class="col-lg-9 text-content-col-place"></div></div></div></div>');

			$('.article-page > .container > .row').append('<div class="col-lg-3 sidebar-col-place"></div>');

			sidebar.appendTo('.sidebar-col-place');

		}

		let contentAuthor = $('.text-content-footer');

		if (contentAuthor.length !== 0 ) {

			contentAuthor.appendTo('.text-content-col-place');

		}

});