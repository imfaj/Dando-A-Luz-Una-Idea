var data2 = 1;
$(document).ready(function(){

	$.ajax({
		url: 'https://fcc-weather-api.glitch.me/api/current?lat=9.937542&lon=-84.061180',
		type: "GET",
		dataType: "json",
		success: function(data) {
			data2 = data
			$("p").text(data2["main"]["temp"])
			alert(data2["main"]["temp"])
		}
	})
});

$.ajax({
url: 'https://fcc-weather-api.glitch.me/api/current?lat=9.937542&lon=-84.061180',
type: "GET",
dataType: "json",
success: function(data) {
	data2 = data
	$("p").text(data2["main"]["temp"])
}
})

/*
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

	/*$("input[name=texto1],input[name=email1],input[name=area1],input[name=input3],input[name=input4]").change(function () {
		if($(this).val()){
	  		alert("No esta vacio.");	  	
	  	}
	  	else{
	  		alert("Esta vacio.")
	  	}
	  	if($("input[name=input3]").is(":checked") || !($("input[name=input4]").is(":checked"))){
			$("#div3").hide()
		}
		else{
			if(!($("input[name=input3]").is(":checked")) || $("input[name=input4]").is(":checked")){
				$("#div2").hide()
			}
		}
	});
	$("input[name=email1]").change(function () {
		if(isEmail($(this).val())){
			alert("El formato del email es correcto.")
		}
		else{alert("El formato del email es incorrecto.")}
	});*/