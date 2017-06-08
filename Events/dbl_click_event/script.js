// Double click

$(document).ready(function () {
	$(".box").dblclick(function () {
		if ($(".box").hasClass("add")) {
			$(this).removeClass("add");
		} else {
			$(this).addClass("add");
		}
	});

	// MouseEnter()

	$(".box").mouseenter(function () {
		//		if ($(".box").hasClass("red")) {
		//			$(".box").removeClass("red");
		//		} else {
		//			$(".box").addClass("red");
		//		}
		$(".box").addClass("red");
	});

	// mousedown()

	$(".box").mouseleave(function () {
		$(this).removeClass("red");
	});

	// mousedown()
	$(".box").mousedown(function () {
		$(this).css("background-color", "green");
	});
});
