/*
 * main.js
 * -----------------------------------------------
 * Small javascript demo of the Google Map API
 * Expanded upon from PUI Week 10 Google Map API Lab 
 * This is the complete demo version of my Assignment 7 submission
 */

//update the latitude and longitude for where you want the center of your map to be 
var myHome = {lat: 40.442019, lng: -79.938162}
var marker;

function myMap() {
	//Defines the properties of the map 
	var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
	var contentString = "Here's some information about the place you clicked!";

	var mapProp= {
		center: myHome, //defines where the map is centered on load
		zoom:5, //specifies map initial zoom level 
		icon: image,
		animation: google.maps.Animation.DROP
	};

	var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);

	var infowindow = new google.maps.InfoWindow({
          content: contentString
    });

	var marker = new google.maps.Marker({
		position: myHome,
		map: map,
		icon: image,
		animation: google.maps.Animation.DROP
	});

	marker.addListener('click', function() {
		toggleBounce()
        infowindow.open(map, marker);
    });

	function toggleBounce() {
	    if (marker.getAnimation() !== null) {
	        marker.setAnimation(null);
	    } else {
	        marker.setAnimation(google.maps.Animation.BOUNCE);
	    }
	}	
}



