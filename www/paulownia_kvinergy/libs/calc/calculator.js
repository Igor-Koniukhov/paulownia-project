$(function () {

	let selectSpice,
		selectPrice,
		selectedMethod,
		selectedQuantity,
		woodForPeriod,
		woodFromOneTree=0.333,
		sortName,
		square = 1,
		sum,
		x ,
		y ,
		ga = 10000,
		money = {
			'g': [1, "грн"],
			'd': [28, "$"],
		},

		treeSpice = {

			"Paulownia Kvinerdji ": {"1 саж": 60, "  1 саж 2-x летн": 450, "1 корень": 120},
			"Paulownia Shan Tong ": {"1 саж": 60, "  1 саж 2-x летн": 450, "1 корень": 120},
			"Paulownia Pao Tong ": {"1 саж": 60, "  1 саж 2-x летн": 450, "1 корень": 120},
			"Paulownia Pao Tong ": {"1 корень малый": 80, "корневые черенки ": 30},

		},


		methodSeeding = {

			4: {" саженец / корень ": 625},
			5: {" саженец / корень ": 400},

		}


	function insertSortNames() {

		let html = '',
			spice;
		for (sortName in treeSpice) {
			for (spice in treeSpice[sortName]) {
				html += '<option data-sortName="' + sortName + '" data-spice="' + spice + '" data-price="' + treeSpice[sortName][spice] + '">' +
					' ' + sortName + ' - ' + spice + ' ' + treeSpice[sortName][spice] + ' ' + money.g[1] + '</option>';

			}

		}

		$('#tree-spice').append(html);
	}

	function insertMethodSeeding() {

		let html = '',
			method,
			qnt;
		for (method in methodSeeding) {
			for (qnt in methodSeeding[method]) {
				html += '<option data-method="' + (method + " x " + method) + '" data-qnt="' + methodSeeding[method][qnt] + '">' +
					' ' + (method + " x " + method) + ' - ' + qnt + '</option>';

			}

		}

		$('#method').append(html);
	}


	function changeSortName() {

		sum = square = 0;

		selectSpice = $('#tree-spice option').filter(':selected').data('spice');//извлекает данные из атрибута селектора option
		selectPrice = $('#tree-spice option').filter(':selected').data('price');//извлекает данные из атрибута селектора option

	}

	function changeMethodSeeding() {

		sum = square = 0;

		selectedMethod = $('#method option').filter(':selected').data('method');//извлекает данные из атрибута селектора option
		selectedQuantity = $('#method option').filter(':selected').data('qnt');//извлекает данные из атрибута селектора option

	}


	function changeWidth() {
		x = $("#width").val()
		if (x < 4) {
			x = 4;
			$("#width").val(4)
		}
	}

	function changeLength() {
		y = $("#length").val()
		if (y < 4) {
			y = 4;
			$("#length").val(4)
		}
	}


// isNumeric проверяет поступающее значение на число и возвращает true || false
	function isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);

	}

	function recalc() {
		x = isNumeric(x) ? x : 4;
		y = isNumeric(y) ? y : 4;
		selectPrice = isNumeric(selectPrice) ? selectPrice : 0;
		selectSpice = (selectSpice != undefined) ? 0 : 0;
		selectedQuantity = isNumeric(selectedQuantity) ? selectedQuantity : 0;
		woodForPeriod = isNumeric(woodForPeriod) ? woodForPeriod : 0;
		square = isNumeric(square) ? square : 0;

		changeTable();

	}


	insertSortNames()
	insertMethodSeeding()

	$("#tree-spice").change(function () {
		changeSortName();
		recalc()
	});

	$("#method").change(function () {
		changeMethodSeeding()
		recalc()
	});

	$("#width").change(function () {
		changeWidth()
		recalc()

	});

	$("#length").change(function () {
		changeLength()
		recalc()

	})




	function changeTable() {
		square = x * y;
		$(".square").html(square + " m" + `<sup>` + "2" + `</sup>`)
		$(".tree-spice").text(sortName + selectSpice + ' ' + selectPrice + "" + money.g[1])
		$(".price").text(selectPrice + money.g[1])
		$(".qnt").text(Math.floor(selectedQuantity * (square / ga)) + " саженцев")

		$(".sum").text(Math.floor(selectPrice * selectedQuantity * (square / ga)) + "" + money.g[1])
		woodForPeriod = Math.floor((woodFromOneTree * selectedQuantity) * (square / ga))

		$(".wood").html((woodForPeriod ) + " m" + `<sup>` + "3" + `</sup>`)
		$(".profit").text((250 * woodForPeriod) + "" + money.d[1])

	}

	$(".bnt-reload").on('click', function () {
		window.location.reload();

	})

});
