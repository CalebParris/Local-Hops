function initMap() {


    var options = {
        zoom: 6,
        center: { lat: 31, lng: -100 },
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    const window = [];
    $.ajax({
        url: "/api/brewery",
        method: "GET"
    }).then(function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let lat = parseFloat(data[i].lat);
            let long = parseFloat(data[i].long);

            let name = data[i].name;
            let address = data[i].address;
            let city = data[i].city;
            let phonenumber = data[i].phonenumber;
            let brewerytype = data[i].brewerytype;
            let winObj = { name: name, address: address, city: city, phonenumber: phonenumber, brewerytype: brewerytype , lat: lat, lng: long};
            window.push(winObj);
        }
        return window;

    }).then(function () {
        let markers = [];
        window.map((location) => {
            let position = {lat: location.lat, lng: location.lng}
        
           const marker = new google.maps.Marker({
                position: position, 
                map: map,
                icon: {
                    url: "./images/beericon.png",
                    scaledSize: new google.maps.Size(40, 40)
                },

            });

            markers.push(marker);
    
        });
        const path = "./images";
        new MarkerClusterer(map, markers, { imagePath: `${path}/m` });      
    });
}