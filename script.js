function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: { lat: 41.8349, lng: -87.6270 },
        mapTypeId: "roadmap",
    });

    const marker = new google.maps.Marker({
        position: { lat: 41.8349, lng: -87.6270 },
        map: map,
        title: "Illinois Institute of Technology",
        animation: google.maps.Animation.DROP,
    });

    const infowindow = new google.maps.InfoWindow({
        content: "<h3>Illinois Institute of Technology</h3><p>My University - Studying ITM</p>",
    });

    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });

    const controlDiv = document.createElement("div");
    controlDiv.style.margin = "10px";
    
    const controlUI = document.createElement("button");
    controlUI.style.backgroundColor = "#134577";
    controlUI.style.color = "white";
    controlUI.style.border = "none";
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlUI.style.cursor = "pointer";
    controlUI.style.fontFamily = "Times New Roman";
    controlUI.style.fontSize = "16px";
    controlUI.style.lineHeight = "38px";
    controlUI.style.padding = "0 15px";
    controlUI.style.textAlign = "center";
    controlUI.textContent = "Questions?";
    controlDiv.appendChild(controlUI);

    controlUI.addEventListener("click", () => {
        alert("If you have questions, contact me at:\nwrogelio290@gmail.com");
    });

    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlDiv);

    setTimeout(() => {
        infowindow.open(map, marker);
    }, 2000);
}

function loadGoogleMaps() {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('map')) {
        loadGoogleMaps();
    }
});