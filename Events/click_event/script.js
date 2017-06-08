$(document).ready(function () {
	$(".box").click(function () {
		$(this).hide();
	});

	//hover()
	$(".box").hover(function () {
			$(this).css("background-color", "blue");
		},
		function () {
			$(this).css("background-color", "black");
		});
});
