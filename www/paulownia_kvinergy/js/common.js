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
		cowsInTrees: 'url(img/blog/pavlovnia-kvin/krupniy-rogatiy-scot-kormitsiy-paulowniey.jpg)',
		beeOnPaulownia: 'url(img/blog/pavlovnia-kvin/pcheli-na-pavlovnii.png)',
		honeyInCells: 'url(img/blog/pavlovnia-kvin/med-soty.png)'
	};

//function which change picture on hover
	function photoChange(selector, adress1, adress2) {
		$(selector).hover(function () {
			$(selector).css('background-image', adress1);
		}, function () {
			$(selector).css('background-image', adress2);
		});
	};

	photoChange('.wood-music-tools', imgUrl.woodMade, imgUrl.musicTool);
	photoChange('.krugliak', imgUrl.shanTongWood, imgUrl.krugliak);
	photoChange('.medicine-drugs', imgUrl.powderFromExtract, imgUrl.extractLeave);
	photoChange('.animals-eating', imgUrl.cowsInTrees, imgUrl.cowInPaulownia);
	photoChange('.bees-eating', imgUrl.beeOnPaulownia, imgUrl.honeyInCells);


	$('.logo-litera').map(function () {
		let ths = $(this);
		ths.html(ths.html().replace('i', '<span class="red-litera">i</span>'));
	});
	$('.markup-num').each(function () {
		let ths = $(this);
		ths.html(ths.html().replace('6', '<span>6</span>'));
	});

	$('.search').on('click', function () {
		$('.search-field').stop().slideToggle();
		$('.search-field input[type=text]').focus();
		$('.mobile-menu').stop().slideUp();

	});
	$(document).keyup(function (e) {
		if (e.keyCode === 27) {
			$('.search-field').slideUp();
		}
	}).click(function () {
		$('.search-field').slideUp();
	})
	$('.search-wrap').click(function (e) {
		e.stopPropagation();
	});
	$('.top-line').before('<div class="mobile-menu d-lg-none"></div>');
	$('.top-menu').clone().appendTo('.mobile-menu');
	$('.mobile-menu-button').click(function () {
		$('.mobile-menu').stop().slideToggle();
	});

	/*$('.cat-header-block').after('<div class="telephon-number-position d-sm-none"></div>');
	$('.tel').clone().appendTo('.telephon-number-position');*/


	$('.col-item').hover(function () {
		ths = $(this);
		lnk = ths.closest('.col-item').find('h4 a');

		lnk.addClass('hover');
	}, function () {
		lnk.removeClass('hover');
	});

	$('.swiper-button_custom').on('click', function () {
		$(this).addClass('active');
		let removeActive = function () {
			$('.swiper-button_custom').removeClass('active');
		};
		let timeoutId = setTimeout(removeActive, 300);

	});


	function sliderChange(x) {

		if (x.matches) {

			let swiper1 = new Swiper('.container-swiper-coverflow', {
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
			let swiper2 = new Swiper('.container-swiper-coverflow', {
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

	let widthW = window.matchMedia('(max-width: 768px)')
	sliderChange(widthW)
	widthW.addEventListener(sliderChange, sliderChange)

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


let topBlock = document.querySelector('.top-line');
let offsetTopBlock = topBlock.offsetTop;
/*let block = document.querySelector('.top-line');*/


$(window).on('scroll', function () {
	$('.mobile-menu').removeClass('fixed-on-hover').slideUp();
	if ($(this).scrollTop() >= offsetTopBlock) {
		$('.top-line').next().css({'margin-top': '65px', 'transition': '.3s all ease;'});
		$(topBlock).addClass('fixed')
		$(".mobile-menu").addClass('fixed');


	} else {
		$(topBlock).removeClass('fixed');
		$(".mobile-menu").removeClass('fixed');
		$('.top-line').next().css({'margin-top': '0', 'transition': '.3s all ease;'});
	};

});

$("header").hover(function () {
	$('.mobile-menu').addClass('fixed-on-hover');
});

//snippet for view active menu
$('.main-menu li').removeClass('active');
var path = window.location.pathname;
$('.main-menu li a').each(function () {
	var href = $(this).attr('href');
	if (path.slice(1).substring(0, href.length) === href) {
		$(this).parent('li').addClass('active');
	}
});