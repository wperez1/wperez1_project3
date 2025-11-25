function initMap() {
    const iitLocation = { lat: 41.8349, lng: -87.6270 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: iitLocation,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    const marker = new google.maps.Marker({
        position: iitLocation,
        map: map,
        title: "Illinois Institute of Technology",
        animation: google.maps.Animation.DROP
    });

    const infoContent = `
        <div style="padding: 10px;">
            <h3 style="margin: 0 0 8px 0; color: #134577;">Illinois Institute of Technology</h3>
            <p style="margin: 0 0 5px 0;"><strong>My University</strong></p>
            <p style="margin: 0; font-size: 12px;">10 W 35th St, Chicago, IL 60616</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Pursuing ITM Degree</p>
        </div>
    `;
    
    const infoWindow = new google.maps.InfoWindow({
        content: infoContent
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });

    setTimeout(() => {
        infoWindow.open(map, marker);
    }, 1500);

    const questionButton = document.createElement("button");
    questionButton.textContent = "Questions?";
    questionButton.style.cssText = `
        background-color: #134577;
        color: white;
        border: none;
        padding: 10px 15px;
        margin: 10px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
        font-family: "Times New Roman", Times, serif;
        font-size: 14px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    `;

    questionButton.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "#34495e";
    });
    
    questionButton.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "#134577";
    });

    questionButton.addEventListener("click", function() {
        alert("If you have questions, contact me at:\nwrogelio290@gmail.com");
    });

    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(questionButton);

    map.setOptions({
        styles: [
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{ "visibility": "off" }]
            }
        ]
    });
    
    console.log("Google Maps initialized successfully");
}

function gm_authFailure() {
    console.error("Google Maps API failed to load");
    const mapElement = document.getElementById("map");
    if (mapElement) {
        mapElement.innerHTML = `
            <div style="height: 100%; display: flex; align-items: center; justify-content: center; background: #f8f9fa; border-radius: 8px; padding: 20px; text-align: center;">
                <div>
                    <h3 style="color: #134577; margin-bottom: 15px;">Map Unavailable</h3>
                    <p style="margin-bottom: 15px;">Unable to load Google Maps at this time.</p>
                    <button onclick="showContactAlert()" style="background-color: #134577; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                        Contact Me
                    </button>
                </div>
            </div>
        `;
    }
}

function showContactAlert() {
    alert("If you have questions, contact me at:\nwrogelio290@gmail.com");
}

function loadGoogleMaps() {
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("map")) {
        loadGoogleMaps();
    }
});