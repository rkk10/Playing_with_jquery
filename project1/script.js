$(document).ready(function(e){
	$("#submit").click(function(event){
		if($("#mob").val().length<10 || $("#mob").val().length>13){
			//alert("Please Enter Valid Mobile Number");
			$("#msg_2").html("Please enter valid mobile number");
			$("#mob").focus();
		}
		else{
			$("#msg_1").html("");
		}
		if($("#name").val().length<=0){
			//alert("Please Enter Valid Name");
			$("#msg_1").html("Please enter valid name");
			$("#name").focus();
		}
		else{
			$("#msg_1").html("");
		}
	});
	$("#mob").keypress(function(e){
		var code=e.keyCode||e.which;
		if(code<48 || code>57){
			//alert("Only Number Allowed  "+ code);
			$("#msg_2").html("Only Number Allowed");
			return false;
		}
		else{
			$("#msg_2").html("");
		}
	});
	$("#name").keypress(function(e){
		var code=e.keyCode||e.which;
		if((code<96 || code>123)&&(code<64 || code>91)){
			//alert("Only Charector Allowed  "+ code);
			$("#msg_1").html("Only Charector Allowed");
			return false;
		}
		else{
			$("#msg_1").html("");
		}
	});
	
});