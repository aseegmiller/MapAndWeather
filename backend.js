
var wundergroundKey = "6f37a0fd2391cbcb";
// var inputStreet = $("#street");
// var inputState = $("#state").val();
// var inputCity = $("#city").val();
// var inputUrl = "http://api.wunderground.com/api/" + wundergroundKey + "/geolookup/conditions/q/" + inputState + "/" + inputCity + ".json"


//get weather here
var locationWeather = function (inputUrl) {
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
}

//get streetview here
// var streetView = "http://maps.googleapis.com/maps/api/streetview?size=600x400&" + inputStreet + "," + inputCity + "," + inputState;

//get submit and return
$(document).on("click", "#submit", function(){
var inputStreet = $("#street").val();
var inputState = $("#state").val();
var inputCity = $("#city").val();

console.log(inputCity);
console.log(inputState);
console.log(inputStreet);

				// var img = $("<img>");
				// img.attr("src", streetView);
				// $(tag).append(img);

})
