import React, { useEffect } from 'react';

const MapPage = () => {
  useEffect(() => {
    // Initialize the map once the component is mounted
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=x-planet-443415-m4&callback=initMap`;
    script.async = true;
    document.body.appendChild(script);

    window.initMap = () => {
      const adventureParkLocation = { lat: 19.9975, lng: 73.7898 }; // Example coordinates for Nashik

      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: adventureParkLocation,
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: adventureParkLocation,
        map: map,
        title: "Adventure Park",
      });

      // Add listener to open Google Maps when map is clicked
      map.addListener("click", () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${adventureParkLocation.lat},${adventureParkLocation.lng}`, "_blank");
      });
    };

    return () => {
      // Clean up script if the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>Adventure Park Location</h1>
      <div id="map" style={{ height: '80vh', width: '100%' }}></div>
    </div>
  );
};

export default MapPage;

