$(function () {
	//variable which used in the photoChange function
	let imgUrl = {
		musicTool: 'url(img/blog/pavlovnia-kvin/muzikalnii-instrumenti-iz-paulownii.png)',
		woodMade: 'url(img/blog/pavlovnia-kvin/izdelia-iz-paulownii.png)',
		shanTongWood: 'url(img/blog/pavlovnia-kvin/shan-tong-drevesina.jpg)',
		krugliak: 'url(img/blog/pavlovnia-kvin/krugliak-po-godam-3.png)',
		extractLeave: 'url(img/blog/pavlovnia-kvin/labor-glasses.png)',
		powderFromExtract: 'url(img/blog/pavlovnia-kvin/extract-listiev-pavlovnii.png)',
		cowInPaulownia: 'url(img/blog/pavlovnia-kvin/telnok-est-paulowniu-1.png)',
		pigEatingPaulownia: 'url(img/blog/pavlovnia-kvin/upotreblenie-paulowni-2i.png)',
		cowsInTrees: 'url(img/blog/pavlovnia-kvin/krupniy-rogatiy-scot-kormitsiy-paulowniey.jpg)'
	};
//function which change picture on hover
	function photoChange(selector, adress1, adress2) {
		$(selector).hover(function () {
			$(selector).css('background-image',  adress1);
		}, function () {
			$(selector).css('background-image', adress2);
		});
	};

	photoChange('.wood-music-tools',imgUrl.woodMade, imgUrl.musicTool);
	photoChange('.krugliak', imgUrl.shanTongWood, imgUrl.krugliak);
	photoChange('.medicine-drugs',imgUrl.powderFromExtract, imgUrl.extractLeave);
	photoChange('.animals-eating',imgUrl.cowsInTrees, imgUrl.cowInPaulownia);


	$('.logo-litera').map(function () {
		let ths = $(this);
		ths.html(ths.html().replace('i', '<span>i</span>'));
	});
	$('.markup-num').each(function () {
		let ths = $(this);
		ths.html(ths.html().replace('6', '<span>6</span>'));
	});

	$('.search').on('click', function () {
		$('.search-field').stop().slideToggle();
		$('.search-field input[type=text]').focus();

	});
	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			$('.search-field').slideUp();
		}
	}).click(function () {
		$('.search-field').slideUp();
	})
	$('.search-wrap').click(function (e) {
		e.stopPropagation();
	});
	$('.top-line').after('<div class="mobile-menu d-lg-none"></div>');
	$('.top-menu').clone().appendTo('.mobile-menu');
	$('.mobile-menu-button').click(function () {
		$('.mobile-menu').stop().slideToggle();
	});
	$('.cat-header-block').after('<div class="telephon-number-position d-sm-none"></div>');
	$('.tel').clone().appendTo('.telephon-number-position');


	$('.col-item').hover(function () {
		ths = $(this);
		lnk = ths.closest('.col-item').find('h4 a');

		lnk.addClass('hover');
	}, function () {
		lnk.removeClass('hover');
	});

	$('.swiper-button_custom').on('click', function () {
		$(this).addClass('active');
		var removeActive = function () {
			$('.swiper-button_custom').removeClass('active');
		};
		var timeoutId = setTimeout(removeActive, 300);

	});

	function sliderChange(x) {

		if (x.matches) {

			var swiper1 = new Swiper('.container-swiper-coverflow', {
				pagination: {
					el: '.swiper-pagination',
					type: 'progressbar',
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});


		} else {
			var swiper2 = new Swiper('.container-swiper-coverflow', {
				effect: 'coverflow',
				grabCursor: true,
				centeredSlides: true,
				initialSlide: 2,
				slidesPerView: 3,
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 400,
					modifier: 1,
					slideShadows: true,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				keyboard: {
					enabled: true,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
		}

	}

	var widthWindow = window.matchMedia('(max-width: 768px)')
	sliderChange(widthWindow)
	widthWindow.addEventListener(sliderChange())


	$("body").prognroll({
		height: 3,
		color: "#ec1c1c",
		custom: false
	});


});


// swipers always at the end--------

var swiper = new Swiper('.swiper-container_black-cover', {
	slidesPerView: 'auto',
	slidesPerGroup: 1,
	spaceBetween: 5,
	initialSlide: 0,
	keyboard: {
		enabled: true,
	},
	watchSlidesProgress: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});







