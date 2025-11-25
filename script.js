function initMap() {
  const iit = { lat: 41.8349, lng: -87.6270 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: iit,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  const marker = new google.maps.Marker({
    position: iit,
    map: map,
    title: "Illinois Institute of Technology",
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Illinois Institute of Technology</h3><p>My University</p>",
  });
  
  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });

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
    }
    .custom-map-control:hover {
      background-color: #34495e;
    }
  `;
  document.head.appendChild(style);
}

function loadGoogleMaps() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX860SBK3-Vw9O9f7AEvTAIH8rl&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementById("map")) {
    loadGoogleMaps();
  }
});