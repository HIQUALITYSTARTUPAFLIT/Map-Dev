console.log("Ready");

var MARKERS = [];
var MAP
var MYLOC;

function initMap() {
    var uluru = { lat: -25.363, lng: 131.044 };
    MAP = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru,
        disableDefaultUI: true
    });

    MYLOC = new google.maps.Marker({
        clickable: false,
        icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
            new google.maps.Size(22, 22),
            new google.maps.Point(0, 18),
            new google.maps.Point(11, 11)),
        shadow: null,
        zIndex: 999,
        map: MAP// your google.maps.Map object
    });


    navigator.geolocation.getCurrentPosition(position => {
        MAP.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    });

    navigator.geolocation.watchPosition(position => {
        MYLOC.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    });
}

/*
{
    lat: 0,
    long: 0,
    title: "test",
    icon {
        url: "icon.png",
        size: {
            x: 32,
            y: 32
        }
    }
}
*/

function placeMarker(options) {
    var marker = new google.maps.Marker({
        map: map,
        position: { lat: options.lat || 0, lng: options.long || 0 },
        title: options.title || "",
        icon: {
            url: options.icon.imageURL || "",
            size: new google.maps.Size(options.icon.size.x || 32, options.icon.size.y || 32),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(options.icon.size.x / 2, options.icon.size.y)
        }
    });
    MARKERS.push(marker);
    return marker;
}