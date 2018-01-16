console.log("Ready");

var MARKERS = [];
var MAP

function initMap() {
    var uluru = { lat: -25.363, lng: 131.044 };
    MAP = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    //var marker = new google.maps.Marker({
    //    position: uluru,
    //    map: map
    //});
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
            url = options.icon.imageURL || "",
            size = new google.maps.Size(options.icon.size.x, options.icon.size.y),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(options.icon.size.x / 2, options.icon.size.y)
        }
    });
}