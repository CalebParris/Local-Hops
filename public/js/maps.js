function initMap(){


    var options = {
        zoom:6,
        center: {lat:31, lng:-100},
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    const locations = [];

    $.ajax({
        url:"/api/brewery/latlng",  
        method: "GET"
        }).then(function(data) {
        console.log(data);
        for ( let i = 0; i < data.length; i++) {
            let lat = parseFloat(data[i].lat);
            let long = parseFloat(data[i].long);
            let locObj = {lat:lat , lng:long};
            locations.push(locObj);
        }
        return locations;

    }).then(function(location){
        const markers = locations.map((location) => {
            return new google.maps.Marker({
               position: location,
               map: map,
               icon:{
                 url:"./images/beericon.png",
                 scaledSize: new google.maps.Size(40, 40)
             },
             });
           });

           const path = "./images";
      new MarkerClusterer(map, markers, {imagePath: `${path}/m`});
    });

    console.log(locations);

}