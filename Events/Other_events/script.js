$(document).ready(function () {
	$("#submit").click(function () {
		if ($("#uname").val().length < 10 ) {
			$("#msg_1").html("Enter valid username")
		} 
		else if($("#pass").val().length < 8) {
			$("#msg_2").html("Enter valid password")
		}
		else{
			$("#msg_1").html("");
			$("#msg_2").html("");
			alert("logged in");
		}
	});
});
