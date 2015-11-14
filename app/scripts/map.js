var pins = [
                {
                    pin : '',
                    desc : '',
                    lat : 42.85717,
                    long : 74.609259
                }
            ];





            var mapOptions = {
                zoom: 16,
                center: new google.maps.LatLng(42.85717, 74.609259),
                
                styles: [
                            {stylers:[
                                {saturation:0},
                                {gamma:1}
                            ]},
                            {elementType:"labels.text.stroke",
                                stylers:[{visibility:"off"}]},
                            {featureType:"poi.business",
                                elementType:"labels.text",
                                stylers:[{visibility:"off"}]},
                            {featureType:"poi.business",
                                elementType:"labels.icon",
                                stylers:[{visibility:"off"}]},
                            {featureType:"poi.place_of_worship",
                                elementType:"labels.text",
                                stylers:[{visibility:"off"}]},
                            {featureType:"poi.place_of_worship",
                                elementType:"labels.icon",
                                stylers:[{visibility:"off"}]},
                            {featureType:"road",
                                elementType:"geometry",
                                stylers:[{visibility:"simplified"}]},
                            {featureType:"water",
                                stylers:[{visibility:"on"},
                                {saturation:50},{gamma:0},
                                {hue:"#50a5d1"}]},
                            {featureType:"administrative.neighborhood",
                                elementType:"labels.text.fill",
                                stylers:[{color:"#333333"}]},
                            {featureType:"road.local",
                                elementType:"labels.text",
                                stylers:[{weight:0.5},
                                {color:"#333333"}]},
                            {featureType:"transit.station",
                                elementType:"labels.icon",
                                stylers:[{gamma:1},{saturation:50}]}]
            }

    var map = new google.maps.Map(document.getElementById('ca-map'), mapOptions);

    var markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.pin,
            icon: 'images/marker.svg',
            animation: google.maps.Animation.BOUNCE
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        // google.maps.event.addListener(marker, 'click', function(){
        //     infoWindow.setContent('<h2 id="marker_title">' + marker.title + '</h2>' + marker.content);
        //     infoWindow.open($scope.map, marker);
        // });
        
        markers.push(marker);
        
    }  
    
    for (var i = 0; i < pins.length; i++){
        createMarker(pins[i]);
    }

    var openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }