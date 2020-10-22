

function initMap(){
    var options = {
        zoom:8,
        center: {lat:29.7296, lng:-95.6486},
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

 


//     // breweries below to show multiple on map:



addMarker({
    coords: {lat:29.7296 , lng:-95.6486}});
addMarker({lat:29.7586, lng:-95.363});
addMarker({lat:29.7430, lng:-95.3968});
addMarker({lat:29.9095, lng:-95.5847});
addMarker({lat:29.723, lng:-95.3780});
addMarker({lat:29.7310, lng:-95.4847});
addMarker({lat:29.7669, lng:-95.3822});
addMarker({lat:29.6924, lng:-95.2775});
addMarker({lat:29.9641, lng:-95.5422});
addMarker({lat:29.7346, lng:-95.3315});
addMarker({lat:29.7673, lng:-95.4096});
addMarker({lat:29.76453, lng:-95.3623});
addMarker({lat:29.8439, lng:-95.4959});
addMarker({lat:29.9943, lng:-95.5721});
addMarker({lat:29.73663, lng:-95.5914});
addMarker({lat:29.7535, lng:-95.38813});
addMarker({lat:29.8183, lng:-95.4101});
addMarker({lat:29.8034, lng:-95.3757});
addMarker({lat:29.74258, lng:-95.4077});
addMarker({lat:29.75898, lng:-95.3631});
addMarker({lat:29.7368, lng:-95.5802});
addMarker({lat:29.7528, lng:-95.3778});
addMarker({lat:29.74258, lng:-95.4077});
addMarker({lat:29.7157, lng:-95.4147});
addMarker({lat:29.7483, lng:-95.3858});
addMarker({lat:29.74213, lng:-95.3900});
addMarker({lat:29.7213, lng:-95.4171});
addMarker({lat:29.7341, lng:-95.4002});
addMarker({lat:29.7447, lng:-95.3930});
addMarker({lat:29.7341, lng:-95.4147});
addMarker({lat:29.73900, lng:-95.6439});
addMarker({lat:29.7174, lng:-95.4160});
addMarker({lat:29.7192, lng:-95.4154});
addMarker({lat:29.7464, lng:-95.410});
addMarker({lat:29.7678, lng:-95.3796});
addMarker({lat:29.7524, lng:-95.3548});
addMarker({lat:30.2676, lng:-97.7388});

addMarker({lat:30.2660, lng:-97.7356});

addMarker({lat:30.2625, lng:-97.7154});


    //for multiple markers:

    function addMarker(coords){
        var marker = new google.maps.Marker({
               position:coords,
                map:map,
              icon:{
                  url:"./images/beericon.png",
                  scaledSize: new google.maps.Size(58, 58)
              }
            
             });


    }
}
