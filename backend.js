
var wundergroundKey = "6f37a0fd2391cbcb";
var inputStreet = $("street");
console.log(inputStreet);
var inputState = $("#state").val();
console.log(inputState);
var inputCity = $("#city").val();
console.log(inputCity);
var inputUrl = "http://api.wunderground.com/api/" + wundergroundKey + "/geolookup/conditions/q/" + inputState + "/" + inputCity + ".json"
}

//get weather here
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

//get streetview here
var streetView = "http://maps.googleapis.com/maps/api/streetview?size=600x400&" + inputStreet + "," + inputCity + "," + inputState;

//get submit and return
$(document).on("click", "#button", function(){
				var img = $("<img>");
				img.attr("src", streetView);
				$(tag).append(img);

})

// $(document).on("click", ".team-name", function () {
// 	$(this).next().toggle();
// 	var visible = $(this).next().is(":visible");
// 	if (visible) {
// 		$(this).parent().removeClass('team-collapsed')
// 	} else {
// 		$(this).parent().addClass('team-collapsed')
// 	}
// })