function getLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(callback);
    } else {
    	callback(null, "Geolocation is not supported by this browser.")
    }
}

function main() {
  $('.newimg').on('click', function() {
    $(this).toggleClass('beautiful');
  
  setTimeout(function() {
    $(".newimg").toggleClass('beautiful');
    }, 400);
  
  $.valHooks.textarea = {
  get: function( elem ) {
      return elem.value.replace( /\r?\n/g, "\r\n" );
  } };
  
  var a = $("#newmessage").val();
  
  $("#newmessage").val('');
  
  getLocation(function (position) {
  	var lat = position.coords.latitude;
  	var lng = position.coords.longitude;
  	console.log(lat, lng);
  	var baseUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lng + "&radius=16000&keyword=airport&key=AIzaSyCKXaj1k3CcaIdVJl2QHtHlfAc3aFICb-c";
	$("#newmessage").val(baseUrl);
	
	 $.ajax({
            url: baseUrl,
            type: "GET",
            crossDomain: true,
            dataType: "json",
            success: function sendData(data) {
            renderData(data)
            },
            error: function (xhr, status) {
                alert("error");
            }
        });
	
	// $.getJSON(baseUrl,  (data) => {
//     renderData(data);
//   })
	
	function renderData(){
	console.log(data);
	
	}
	
	
	
  });
  
  
  
  
  });
  
}

$(document).ready(main);
