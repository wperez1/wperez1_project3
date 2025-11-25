function initMap() {
  try {
    const iit = { lat: 41.8349, lng: -87.6270 };
 
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: iit,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          "featureType": "all",
          "elementType": "geometry.fill",
          "stylers": [{"weight": "2.00"}]
        },
        {
          "featureType": "all",
          "elementType": "geometry.stroke",
          "stylers": [{"color": "#9c9c9c"}]
        },
        {
          "featureType": "all",
          "elementType": "labels.text",
          "stylers": [{"visibility": "on"}]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{"color": "#f2f2f2"}]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry.fill",
          "stylers": [{"color": "#ffffff"}]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [{"saturation": -100}, {"lightness": 45}]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [{"color": "#eeeeee"}]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{"color": "#7b7b7b"}]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [{"color": "#ffffff"}]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{"visibility": "simplified"}]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]
        }
      ]
    });

    const marker = new google.maps.Marker({
      position: iit,
      map: map,
      title: "Illinois Institute of Technology",
      animation: google.maps.Animation.DROP,
      icon: {
        url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDNy41OCAyIDQgNS41OCA0IDEwQzQgMTUuNTUgMTEuMTUgMjEuNTkgMTEuNTkgMjEuOTlDMTEuNzkgMjIuMTIgMTIuMjEgMjIuMTIgMTIuNDEgMjEuOTlDMTIuODUgMjEuNTkgMjAgMTUuNTUgMjAgMTBDMjAgNS41OCAxNi40MiAyIDEyIDJaTTEyIDEzQzkuMjQgMTMgNyAxMC43NiA3IDhDNyA1LjI0IDkuMjQgMyAxMiAzQzE0Ljc2IDMgMTcgNS4yNCAxNyA4QzE3IDEwLjc2IDE0Ljc2IDEzIDEyIDEzWiIgZmlsbD0iIzEzNDU3NyIvPgo8L3N2Zz4K",
        scaledSize: new google.maps.Size(40, 40),
      }
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="padding: 10px;">
          <h3 style="margin: 0 0 5px 0; color: #134577;">Illinois Institute of Technology</h3>
          <p style="margin: 0;">My University</p>
          <p style="margin: 5px 0 0 0; font-size: 12px;">10 W 35th St, Chicago, IL 60616</p>
        </div>
      `,
    });
    
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    setTimeout(() => {
      infoWindow.open(map, marker);
    }, 1000);

    const controlButton = document.createElement("button");
    controlButton.textContent = "Questions?";
    controlButton.classList.add("custom-map-control");
    
    controlButton.addEventListener("click", () => {
      alert("If you have questions, contact me at:\nwrogelio290@gmail.com");
    });
    
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlButton);

    const style = document.createElement("style");
    style.textContent = `
      .custom-map-control {
        background-color: #134577;
        color: white;
        border: none;
        padding: 10px 15px;
        margin: 10px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
        font-family: "Times New Roman", Times, serif;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      }
      .custom-map-control:hover {
        background-color: #34495e;
      }
    `;
    document.head.appendChild(style);
    
    console.log("Google Maps initialized successfully");
    
  } catch (error) {
    console.error("Error initializing Google Maps:", error);
    document.getElementById("map").innerHTML = `
      <div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #f5f5f5; border-radius: 8px; padding: 20px; text-align: center;">
        <h3 style="color: #134577; margin-bottom: 10px;">Map Loading Issue</h3>
        <p>There was a problem loading the Google Map. Here's the location information:</p>
        <div style="background: white; padding: 15px; border-radius: 5px; margin: 10px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <strong>Illinois Institute of Technology</strong><br>
          10 W 35th St<br>
          Chicago, IL 60616
        </div>
        <button onclick="showContactAlert()" style="background-color: #134577; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
          Questions?
        </button>
      </div>
    `;
  }
}

function showContactAlert() {
  alert("If you have questions, contact me at:\nwrogelio290@gmail.com");
}

function gm_authFailure() {
  console.error("Google Maps API authentication failed");
  document.getElementById("map").innerHTML = `
    <div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #f5f5f5; border-radius: 8px; padding: 20px; text-align: center;">
      <h3 style="color: #d32f2f; margin-bottom: 10px;">Google Maps Error</h3>
      <p>The map cannot be loaded due to an API key issue.</p>
      <div style="background: white; padding: 15px; border-radius: 5px; margin: 10px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
        <strong>Illinois Institute of Technology</strong><br>
        10 W 35th St<br>
        Chicago, IL 60616
      </div>
      <button onclick="showContactAlert()" style="background-color: #134577; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
        Questions?
      </button>
    </div>
  `;
}

function loadGoogleMaps() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX860SBK3-Vw9O9f7AEvTAIH8rl&callback=initMap`;
  script.async = true;
  script.defer = true;
  script.onerror = function() {
    console.error("Failed to load Google Maps API script");
    gm_authFailure();
  };
  document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded, checking for map element");

  if (document.getElementById("map")) {
    console.log("Map element found, loading Google Maps API");
    loadGoogleMaps();
  }
});