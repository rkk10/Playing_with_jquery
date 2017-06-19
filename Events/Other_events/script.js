$(document).ready(function () {
	if ($("#uname").val().lenght < 10 || $("#pass").val().lenght < 8) {
		$("#msg_1").html("Please Enter valid user name");
		$("#msg_1").html("Enter valid uname");
		$("#msg_1").html("Enter valid password");
	} else {
		$("#msg_1").html("");
		$("#msg_1").html("");
	}
});
