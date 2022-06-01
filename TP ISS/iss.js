let lat = 0;
let long = 0;
let map;


$(document).ready(
    function ($) {
        map = L.map('map').setView([lat, long], 3);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);
        appel()
        setInterval(appel, 10000);
    }
)


//appel Ajax
function appel() {
    $.ajax(
        {
            url: 'http://api.open-notify.org/iss-now.json',
            method: 'GET'
        }
    )


        .done(
            (donnees) => {
                lat = donnees.iss_position.latitude;
                long = donnees.iss_position.longitude;

                $("#latitude").text("Latitude : " + lat);

                $("#longitude").text("Longitude : " + long);


                map.flyTo([lat, long]);


                let marker = L.marker([51.5, -0.09]).addTo(map);

                let circle = L.circle([lat, long], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 50000,
                }).addTo(map);


            }
        );
}




