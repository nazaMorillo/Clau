// JavaScript Document
function initialize() {
	var myLatlng = new google.maps.LatLng(-32.944696, -60.662291);
	var settings = {
		zoom: 16,
		center: myLatlng,
		mapTypeControl: true,
		panControl: true,
		zoomControl: true,
		scaleControl: true,
		streetViewControl: true,
		overviewMapControl: true,
		scrollwheel: false,
		draggable: true,
		zoomControlOptions: {
		  style: google.maps.ZoomControlStyle.SMALL
		},
		
		/*TERRAIN - ROADMAP - HYBRID - SATELLITE*/
		mapTypeId: google.maps.MapTypeId.HYBRID,				
	};
	
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	
	var contentString = '<div id="mapa_info">'+
						'<h1 id="firstHeading" class="firstHeading">Claudia Serrano</h1><br/><h2>Maquilladora Profesional</h2>'+
						'<p>Maquillaje - Manicuría - Depilación.<br/>San Luis 2812</p>'+
						'</div>';
	  
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});	  
	
	var markerImage = 'images/marker.png';

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title:"Claudia Serrano - San Luis 2812"	
	});
	
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
		
	var styles = [{
		stylers: [
			{ saturation: 15}
		]
	}];
	  
	var styledMap = new google.maps.StyledMapType(styles);
	  	
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');		
}