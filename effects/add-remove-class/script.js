$(document).ready(function () {

	$(".bar").click(function () {
		if ($(this).hasClass("plus")) {
			$(this).animate({
				width: "200px"
			}, "slow");
			$(this).removeClass("plus");
		} else {
			if ($(this).hasClass("plus")) {
				$(this).each(function () {
					if ($(this).hasClass("plus")) {
						$(this).animate({
							width: "200px"
						}, "slow");
						$(this).removeClass("plus");
					}

				});
				$(this).animate({
					width: "200px"
				}, "slow");
				$(this).addClass("plus");
			} else if (!$(this).hasClass("plus")) {
				$(this).animate({
					width: "200px"
				}, "slow");
				$(this).addClass("plus");
			}
		}
	});
});


//$(document).ready(function () {
//	$(".bar").click(function () {
//		if ($(this).hasClass("plus")) {
//			$(this).animate({
//				width: "100px"
//			}, "slow");
//		} else {
//			$(this).addClass("plus");
//		}
//	});
//});
