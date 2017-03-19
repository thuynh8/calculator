/** Google Map API
****************/

function initMap() {
    var uluru = {lat: 33.761575, lng: -117.989908};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: uluru
    });

    var contentString = "<div style='color:#000000;'><h4>TD Lending Inc</h4><p>13833 Beach Boulevard, Westminster, California CA 92683</p></div>";

    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        animation: google.maps.Animation.DROP
    });
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
        toggleBounce();
    });

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function() {
                marker.setAnimation(null);
            }, 2000);
        }
    }
}


// function getCounty(zip) {
//
//     var geocoder = new google.maps.Geocoder();
//     var county, city, response, result, adresses;
//     response = geocoder.geocode({'address': zip}, function(results, status) {
//         if (status === 'OK') {
//             for (var i = 0; i < results.length; i++) {
//                 result = results[i];
//                 addresses = result.address_components;
//                 for (var j = 0; j < addresses.length; j++) {
//                     var type = addresses[j].types[0];
//                     if (type == 'locality') {
//                         city = addresses[j].long_name;
//                         console.log(city);
//                     }
//                     if (type == 'administrative_area_level_2') {
//                         county = addresses[j].long_name;
//                         console.log(county);
//                     }
//                 }
//             }
//         }
//     });
//     return county;
// }
