
//get submit and return
$(document).on("click", "#submit", function(e){
	e.preventDefault();
	$("#streetview").empty();
	$("#weather").empty();

	var inputStreet = $("#street").val();
	var inputState = $("#state").val();
	var inputCity = $("#city").val();

	//get streetview here
	var streetView = "http://maps.googleapis.com/maps/api/streetview?size=600x400&location=" + inputStreet + "," + inputCity + "," + inputState;
	var img = $("<img>");
	img.attr("src", streetView);
	$(streetview).append(img);

//get weather here

var wundergroundKey = "6f37a0fd2391cbcb";
var inputUrl = "http://api.wunderground.com/api/" + wundergroundKey + "/geolookup/conditions/q/" + inputState + "/" + inputCity + ".json";
jQuery(document).ready(function($) {

	$.ajax({
		url : inputUrl,
		dataType : "jsonp",
		success : function(cityWeather) {
			var divMod = $("#weather");
			var theEnd = "</br>";
			var location = cityWeather['location']['city'];
			var currentWeather = cityWeather['current_observation']['weather'];
			var tempFC = cityWeather['current_observation']['temperature_string'];
			var feelsLike = cityWeather['current_observation']['fellslike_sting'];
			var windData = cityWeather['current_observation']['wind_string'];
					divMod.append($("<p>")
					.append("The current conditions in " + location + ":" + theEnd)
					.append("Weather: " + currentWeather + theEnd)
					.append("Temperature: " + tempFC + theEnd)
					.append("Feels like: " + feelsLike + theEnd)
					.append('Wind: ' + windData)
					)
		}
	});
});
})
