var map;
var markers = [];
var infoWindow;
var locationSelect;


function initMap() {
    var loL = { lat: 13, lng: 80 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: loL,
        zoom: 11,
        mapTypeId: 'roadmap',
    });
    showStoreMarkers();
};


function showStoreMarkers() {
    stores.forEach(function(store, index) {
        var latlng = new google.maps.LatLng(
            store.coordinates.latitude,
            store.coordinates.longitude
        );
        var name = store.name;
        var address = store.addressLines[0];
        createMarker(latlng, name, address);
    });
};


function createMarker(latlng, name, address) {
    var html = "<b>" + name + "</b> <br/>" + address;
    var marker = new google.maps.Marker({
        map: map,
        position: latlng
    });
    google.maps.event.addListener(marker, 'click', function () {
         infoWindow.setContent(html);
         infoWindow.open(map, marker);
     });
    markers.push(marker);
};