// Initialize Google Map
function initMap() {
  // Set coordinates for IIT
  const iit = { lat: 41.8349, lng: -87.6270 };
  
  // Create map centered on IIT
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: iit,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });
  
  // Add marker for IIT
  const marker = new google.maps.Marker({
    position: iit,
    map: map,
    title: "Illinois Institute of Technology",
  });
  
  // Add info window for the marker
  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Illinois Institute of Technology</h3><p>My University</p>",
  });
  
  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
  
  // Add custom control button
  const controlButton = document.createElement("button");
  controlButton.textContent = "Questions?";
  controlButton.classList.add("custom-map-control");
  
  controlButton.addEventListener("click", () => {
    alert("If you have questions, contact me at:\nwrogelio290@gmail.com");
  });
  
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlButton);
  
  // Add custom styling to the control button
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
    }
    .custom-map-control:hover {
      background-color: #34495e;
    }
  `;
  document.head.appendChild(style);
}

// Load the Google Maps API script
function loadGoogleMaps() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX860SBK3-Vw9O9f7AEvTAIH8rl&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  // Load Google Maps API if we're on the maps page
  if (document.getElementById("map")) {
    loadGoogleMaps();
  }
});