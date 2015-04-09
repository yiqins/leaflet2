(function(){

	var map = L.map('map').setView([40.80859, -73.964803], 17);
	L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 22}).addTo(map);

//marker 1,2
// You don't want to declare a variable of the same name twice
	var marker1 = L.marker([40.80859, -73.964803]).addTo(map);
	marker.bindPopup("<b>This is Columbia University</b><br>Welcome to my school!").openPopup();

	var marker2 = L.marker([31.2989, 121.4992]).addTo(map);
	marker.bindPopup("<b>This is Fudan University</b><br>Welcome to my hometown!");

//circle 1,2
	// Same thing with circle, you don't want to declare a variable twice
	var circle = L.circle([40.7, -74.0], 200, {
    color: 'pink',
    fillColor: 'pink',
    fillOpacity: 0.5}).addTo(map);
	circle.bindPopup("This is New York City.");

    var circle = L.circle([31.2, 121.5], 200, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5}).addTo(map);
    circle.bindPopup("This is Shanghai City.");


//exercise 2

    var popup = L.popup();
	function onMapClick(e) {
	    popup
	        .setLatLng(e.latlng)
	        .setContent("You clicked the map at " + e.latlng.toString())
	        .openOn(map);
	}
	map.on('click', onMapClick);

$('#current').on('click', function(){
    map.locate({setView: true});
    console.log('User Location');
 });

$('#columbia').on('click', function(){
    map.setView([40.80859, -73.964803], 15);
    console.log('Columbia');
});

$('#fudan').on('click', function(){
    map.setView([31.2989, 121.4992], 15);    
    console.log('Fudan');
});


var locations ={

// These should be lowercase to match what you have in your data attributes
'columbia':{	
		name: 'Colubia University',
        Lat: 40.80859,
        Lng: -73.964803,
		},

'fudan':{	
   		name: 'Fudan University',
        Lat: 31.2989,
        Lng: 121.4992,
    } 
};
	

// This css selector should be `.button` instead of `.option`
$('.button').on('click', function(){
	var id = $(this).attr('data-which');
	var latlng = L.latLng(locations[id].Lat, locations[id].Lng);
	map.setView(latlng,20);
	});


}).call(this);

	