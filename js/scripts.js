

var Page = (function(){
    
  function Page(){
    // the button where activate de page scroll
    var navigator_button = document.querySelector("#navigator_button");
     // list with al sections to manipulate animations and page scroll
    var allSections     = document.getElementsByTagName('section')
    , session_1         = document.querySelector("#session_1 article figure")
    , session_1_footer  = document.querySelector("#session_1 footer")
    , session_2         = document.querySelector("#session_2 article figure")
    , session_2_footer  = document.querySelector("#session_2 footer")
    , session_3         = document.querySelector("#session_3 article figure")
    , session_3_footer  = document.querySelector("#session_3 footer")
    , rect ;

    // capturing the window scroll to init animations
    function watchScroll(){

      // section 1
      rect = session_1.getBoundingClientRect();
      if(rect.top < this.pageYOffset){
       session_1.className = 'slideUp';
       session_1_footer.className = 'slideUp';
      }else{
        session_1.className = '';
        session_1_footer.className = '';
      }

      // section 2
        rect = session_2.getBoundingClientRect();
      if(rect.top < this.pageYOffset){
        session_2.className = 'slideRight';
        session_2_footer.className = 'slideLeft';
      }else{
        session_2.className = '';
        session_2_footer.className = '';
      }

      // section 3
        rect = session_3.getBoundingClientRect();
      if(rect.top < this.pageYOffset){
        session_3.className = 'expandOpen';
        session_3_footer.className = 'expandOpen';
      }else{
        session_3.className = '';
        session_3_footer.className = '';
      }

    }

     //this function is responsable to run the window scroll
    function scrollToTop(){
       
      for (section in allSections){
        try{
          // getting all positon of the section
          var rect = allSections[section].getBoundingClientRect();
        }catch ( err){

        }
        // trying to capture that section is active
        if(rect.bottom > 0 ){
          window.scrollBy(0, parseInt(rect.height) + parseInt(rect.top));
          break;
        }
      }
    }

    navigator_button.addEventListener('click',scrollToTop);

    return {
      watchScroll : watchScroll
    }
  }

  return Page;

}()); 

var p = new Page();
window.addEventListener("scroll", p.watchScroll, false);

// google maps   
function init() {
  
  var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(51.52413 , -0.07376),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      draggable: false,
      zoomControl: false,
      scaleControl: false,
      scrollwheel: false,
      styles: [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]
  };
  
  var myMap = new google.maps.Map(document.getElementById('myMap'), mapOptions);
  

  var pictureLabel = document.createElement("img");
     pictureLabel.src = "http://0.0.0.0:8000/assets/icon_maps.png";
     pictureLabel.width = 64;

  var marker = new MarkerWithLabel({
    icon:{
      path : 'http://0.0.0.0:8000/assets/icon_maps.png'
    },
    position: myMap.getCenter(),
    map: myMap,
    labelAnchor: new google.maps.Point(10, 10),
    labelContent : pictureLabel
  });

     var iw = new google.maps.InfoWindow({
       content: "Geek Label<br> 4th Floor<br> 27 - 33 Bethnal Green Road<br> Shoreditch<br> London<br> E1 6LA<br>"
     });

     iw.open(myMap, marker);
}

google.maps.event.addDomListener(window, 'load', init);
