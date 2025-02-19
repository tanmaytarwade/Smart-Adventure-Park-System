// import React from 'react';
// import './MapPage.css';

// const MapPage = () => {
//   return (
//     <div className="map-page">
//       <h1>Adventure Park Location</h1>
//       <div className="iframe-container">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304223.5358544049!2d74.57132627569638!3d19.816991973554696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc454eaaaaaaab%3A0x21d67f0b0966d8b2!2sArjun%20Adventure%20Park!5e0!3m2!1sen!2sin!4v1735494811019!5m2!1sen!2sin"
//           width="1200"
//           height="700"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default MapPage;

//----------------------------------------------------------------------------------------------

// import React, { useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";
// import "./MapPage.css"; // Ensure this file is present

// mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN"; // 🔹 Replace with a valid token

// const MapPage = () => {
//   const mapContainer = useRef(null);
//   const map = useRef(null); // Store map instance to prevent re-creation

//   useEffect(() => {
//     if (!mapContainer.current) return; // Ensure container exists

//     // ✅ Initialize Mapbox map
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/streets-v11", // 🔹 Map style
//       center: [77.5946, 12.9716], // 🔹 Default center (Bangalore)
//       zoom: 12, // 🔹 Initial zoom level
//     });

//     // ✅ Add navigation controls (zoom in/out)
//     map.current.addControl(new mapboxgl.NavigationControl());

//     // ✅ Cleanup on unmount
//     return () => map.current.remove();
//   }, []);

//   return (
//     <div className="map-page">
//       <h1>Adventure Park Location</h1>
//       <div ref={mapContainer} className="map-container" />
//     </div>
//   );
// };

// export default MapPage;

// import React, { useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";
// import "./MapPage.css"; // Ensure this file is present

// mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN"; // 🔹 Replace with a valid token

// const MapPage = () => {
//   const mapContainer = useRef(null);
//   const map = useRef(null); // Store map instance to prevent re-creation

//   useEffect(() => {
//     if (!mapContainer.current) return; // Ensure container exists

//     // ✅ Initialize Mapbox map
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/light-v10", // Modern light theme
//       center: [77.5946, 12.9716], // 🔹 Default center (Bangalore)
//       zoom: 14, // Closer view for more detail
//       pitch: 45, // Tilt for 3D effect
//       bearing: -17.6, // Rotate slightly for virtual feel
//       antialias: true, // Smooth edges
//     });

//     // ✅ Add navigation controls (zoom in/out, rotate)
//     map.current.addControl(new mapboxgl.NavigationControl());

//     // ✅ Add 3D buildings
//     map.current.on("load", () => {
//       const layers = map.current.getStyle().layers;
//       const labelLayerId = layers.find(
//         (layer) => layer.type === "symbol" && layer.layout["text-field"]
//       )?.id;

//       map.current.addLayer(
//         {
//           id: "3d-buildings",
//           source: "composite",
//           "source-layer": "building",
//           filter: ["==", "extrude", "true"],
//           type: "fill-extrusion",
//           minzoom: 15,
//           paint: {
//             "fill-extrusion-color": "#aaa",
//             "fill-extrusion-height": ["get", "height"],
//             "fill-extrusion-base": ["get", "min_height"],
//             "fill-extrusion-opacity": 0.6,
//           },
//         },
//         labelLayerId
//       );
//     });

//     // ✅ Add markers for adventure park activities
//     const activities = [
//       { name: "Zip-lining", coords: [77.596, 12.972], description: "High-speed thrill!" },
//       { name: "Rock Climbing", coords: [77.593, 12.974], description: "Challenge yourself!" },
//       { name: "Kayaking", coords: [77.597, 12.970], description: "Paddle your way!" },
//     ];

//     activities.forEach((activity) => {
//       const marker = new mapboxgl.Marker()
//         .setLngLat(activity.coords)
//         .setPopup(new mapboxgl.Popup().setText(`${activity.name}: ${activity.description}`))
//         .addTo(map.current);
//     });

//     // ✅ Cleanup on unmount
//     return () => map.current.remove();
//   }, []);

//   return (
//     <div className="map-page">
//       <h1>Adventure Park Virtual Map</h1>
//       <div ref={mapContainer} className="map-container" />
//     </div>
//   );
// };

// export default MapPage;

import React from "react";
import "./MapPage.css";
import parkMap from "../assets/Map.jpg"; // Adjust the path based on your folder structure

const MapPage = () => {
  return (
    <div className="map-page-container">
      <h1>Explore Our Adventure Park</h1>
      <img src={parkMap} alt="Adventure Park Virtual Map" className="map-image" />
    </div>
  );
};

export default MapPage;

