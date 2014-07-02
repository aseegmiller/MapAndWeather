
var wundergroundKey = "6f37a0fd2391cbcb";
var inputStreet = $("#street").val();
var inputState = $("#state").val();
var inputCity = $("#city").val();
var inputUrl = "http://api.wunderground.com/api/" + wundergroundKey + "/geolookup/conditions/q/" + inputState + "/" + inputCity + ".json"


//get weather here
/*
jQuery(document).ready(function($) {
  $.ajax({
  url : inputUrl,
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  alert("Current temperature in " + location + " is: " + temp_f);
  }
  });
});
*/

//get streetview here
var streetView = "http://maps.googleapis.com/maps/api/streetview?size=600x400&" + inputStreet + "," + inputCity + "," + inputState;

//get submit and return
$(document).on("click", "#submit", function(e){
	e.preventDefault();

	var inputStreet = $("#street").val();
	var inputState = $("#state").val();
	var inputCity = $("#city").val();

				var img = $("<img>");
				img.attr("src", streetView);
				$(streetview).append(img);

			})
