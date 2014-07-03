
//get submit and return
$(document).on("click", "#submit", function(e){
	e.preventDefault();
	$("#streetview").empty();
	$("#titlerow").empty();
	$("#rowtemp").empty();
	$("#rowweather").empty();
	$("#rowfeelslike").empty();
	$("#rowwind").empty();

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
			var modTitleRow = $("#titlerow");
			var modRowWeather = $("#rowweather");
			var modRowTemp = $("#rowtemp");
			var modRowFeelsLike = $("#rowfeelslike");
			var modRowWind = $("#rowwind");

			var divMod = $("#weather");
			var theEnd = "</br>";
			var location = cityWeather['location']['city'];
			var currentWeather = cityWeather['current_observation']['weather'];
			var tempFC = cityWeather['current_observation']['temperature_string'];
			var feelsLike = cityWeather['current_observation']['feelslike_string'];
			var windData = cityWeather['current_observation']['wind_string'];

			modTitleRow.append($('<th>')
				.text("The current conditions in "))
			modTitleRow.append($('<th>')
				.text(location))
			modRowWeather.append($('<td>')
				.text("Weather: "))
			modRowWeather.append($('<td>')
				.text(currentWeather))
			modRowTemp.append($('<td>')
				.text("Temperature: "))
			modRowTemp.append($('<td>')
				.text(tempFC))
			modRowFeelsLike.append($('<td>')
				.text("Feels like: "))
			modRowFeelsLike.append($('<td>')
				.text(feelsLike))
			modRowWind.append($('<td>')
				.text("Wind: "))
			modRowWind.append($('<td>')
				.text(windData))

		}
	});
});
})
