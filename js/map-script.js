"use strict";

var CustomMapStyles = [{
	"featureType": "road.arterial",
	"stylers": [
	{
		"weight": 0.5
	}
	]
},
{
	"featureType": "road.arterial",
	"elementType": "geometry",
	"stylers": [
	{
		"color": "#ffff80"
	},
	{
		"weight": 1.5
	}
	]
},
{
	"featureType": "road.arterial",
	"elementType": "geometry.fill",
	"stylers": [
	{
		"color": "#ffff80"
	}
	]
}];

var contentString = '<h6>КОП "Отечество"</h6> <p>пр. Фрунзе 240А стр. 18 </p>';

// 56.478336, 85.016987

function initMap() {
	var location = {lat: 56.478336, lng: 85.016987};
  	var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
	center: location,
	styles: CustomMapStyles
  });

var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Нажми на меня!'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  infowindow.open(map, marker);
}


// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		// add your functions
		initMap()
	})(jQuery);
});