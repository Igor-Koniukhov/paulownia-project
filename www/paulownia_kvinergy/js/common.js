//prices of our products:
$('.moneyGr').text('грн');
//money value depends of country

$('.price-light-tgreen-5mm').text(7.9);
$('.text-5mm').text('5мм -');
$('.price-light-tgreen-6mm').text(13.4);
$('.text-6mm').text('6мм -');
$('.price-light-tgreen-7mm').text(18.5);
$('.text-7mm').text('7мм -');
$('.price-light-tgreen-8mm').text(26.5);
$('.text-8mm').text('8мм -');
$('.price-light-tgreen-10mm').text(35.1);
$('.text-10mm').text('10мм -');
$('.price-light-tgreen-12mm').text(45.3);
$('.text-12mm').text('12мм -');

$('.price-azotfiksator-biomag').text(174);
$('.price-azotfiksator-biomag-dry').text(200);
$('.price-fitodoctor').text(150);
$('.price-fitodoctor-dry').text(200);
$('.price-fitodoctor-dry-20').text(16);
$('.price-kvinergy-root').text(120);
$('.price-shan-tong-root').text(120);
$('.price-pao-tong-root').text(120);
$('.price-pawlownia-tree').text(60 * 24);
$('.price-shan-tong-tree').text(60 * 24);
$('.price-pao-tong-tree').text(60 * 24);
$('.price-gumat-k-1l').text(80);
$('.price-gumat-k-200ml').text(25);
$('.price-gumat-k-dry').text(320);
$('.price-adumax').text(8);
$('.price-aktarafit-k').text(30);
$('.price-entocid').text(55);
$('.price-komplezim').text(20);
$('.price-trihodermin').text(17);
$('.price-limocid').text(64);
$('.price-kalievaya-selitra').text(100);
$('.price-rater').text(247);
$('.price-monokalijfosfat').text(100);


//--------end--of-prices
//the function help round number to certain value after coma
function roundPlus(x, n) { //x - число, n - количество знаков
	if(isNaN(x) || isNaN(n)) return false;
	let m = Math.pow(10,n);
	return Math.round(x*m)/m;
}
//---end-roundPlus

$(function () {

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
	$('.top-line').after('<div class="mobile-menu d-lg-none"></div>');
	$('.top-menu').clone().appendTo('.mobile-menu');
	$('.mobile-menu-button').click(function () {
		$('.mobile-menu').stop().slideToggle();
	});
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
});

$("body").prognroll({
	height: 3,
	color: "#ec1c1c",
	custom: false
});

let topBlock = document.querySelector('.top-line');
let offsetTopBlock = topBlock.getBoundingClientRect().top;
$('.mobile-menu-button').on('click', function () {
	if ($(window).scrollTop() <= offsetTopBlock) {
		$('.mobile-menu').addClass('fixed-on-hover');
		let offsetBottom = $(window).scrollTop();
		let topLineHeight2 = topBlock.getBoundingClientRect().height;
		let topLineHeight = 65;
		let positionMobMenu = offsetTopBlock + topLineHeight2;
		$('.fixed-on-hover').css({'top': positionMobMenu + 'px'});

	} else {
		$('.fixed-on-hover').css({'top': 'unset'});
		$('.mobile-menu').removeClass('fixed-on-hover');
	}

})

let scrollUpButton = document.querySelector('.roll-up');

window.addEventListener('scroll', function (e) {
	$('.fixed-on-hover').css({'top': '65px'});

	$('.mobile-menu').slideUp().removeClass('fixed-on-hover');

	if ($(this).scrollTop() >= offsetTopBlock) {
		$('.top-line').next().next().css({'margin-top': '65px', 'transition': '.3s all ease;'});
		$(topBlock).addClass('fixed')
		$(".mobile-menu").addClass('fixed');
		$(scrollUpButton).css({'display': 'block'});
	} else {
		$(topBlock).removeClass('fixed');
		$(".mobile-menu").removeClass('fixed');
		$('.top-line').next().next().css({'margin-top': '0', 'transition': '.3s all ease;'});
		$(scrollUpButton).css({'display': 'none'});
	}
});


let scrollUpFunction = (but) => {
	$(but).click(function () {
		$("html, body").animate({scrollTop: 0}, "slow");
		return false;
	});
}

scrollUpFunction(scrollUpButton);

//snippet for view active menu
$('.main-menu li').removeClass('active');
var path = window.location.pathname;
$('.main-menu li a').each(function () {
	var href = $(this).attr('href');

	if (path.slice(1).substring(0, href.length) === href) {
		$(this).parent('li').addClass('active');
	}
});


//that script add price and value in form
$('.btn-buy').on('click', function () {
	//main content  hidden
	$('.main-page-wrapper').css({'display': 'none'});
	$('.article-content').css({'display': 'none'});
	// form is appeared as content instead main content
	$('.popup-wrapper').removeClass('d-none').addClass('popup-form');
	$('.form-wrapper').removeClass('d-none');
	// sources were specified - from which places will be taken value for cells
	let ths = $(this);
	let price = ths.parent().find('.price').html() * 1;
	let pack = ths.parent().find('.pack').html();
	let moneyGr = $('.moneyGr').html();
	let productName = ths.parent().parent().find('h3').html();

	//destinations were specified as cells in send form for the buy card and assigned value
	$('#moneyGr').val(moneyGr);
	$('#pack').val(pack);
	$('#nameProduct').val(productName);
	$('#priceP').val(price);

	if ($('#multiplyOfOrder').value == null) {

		$('#multiplyOfOrder').val(price);
	}
	//concrete places were specified with 'this' to value taken
	$('#numbers').val(1)
	let inputNum = document.querySelector('#numbers');
	inputNum.onchange = function () {
		let multiplyOfOrder = $('#multiplyOfOrder');
		let numbersOfproduct = Math.floor(inputNum.value * 1);
		let multiplyOf = numbersOfproduct * price;
		multiplyOfOrder.val(roundPlus(multiplyOf, 1));
	}
});

$('.btn-buy').click(function (e) {
	e.stopPropagation();
});
$('.close').on('click', function () {
	let popupWrapper = document.body.getElementsByClassName('popup-wrapper')[0];
	$(popupWrapper).removeClass('popup-form').addClass('d-none');
	$('.main-page-wrapper').css({'display': 'block'});
	$('.article-content').css({'display': 'block'});
})




$(function () {

	document.getElementById('ajax-contact-form-2').addEventListener('submit', function (evt) {
		var http = new XMLHttpRequest(), f = this;
		var th = $(this);
		evt.preventDefault();
		http.open("POST", "contactbuy.php", true);
		http.onreadystatechange = function () {
			if (http.readyState == 4 && http.status == 200) {
				alert(http.responseText);
				if (http.responseText.indexOf(f.nameFF.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
					th.trigger("reset");
				}
			}
		}
		http.onerror = function () {
			alert('Ошибка, попробуйте еще раз');
		}
		http.send(new FormData(f));
	}, false);

});

window.addEventListener('beforeunload', function () {
window.scrollTo(0,0);
})
