import React from 'react';
import './MapPage.css';

const MapPage = () => {
  return (
    <div className="map-page">
      <h1>Adventure Park Location</h1>
      <div className="iframe-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304223.5358544049!2d74.57132627569638!3d19.816991973554696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc454eaaaaaaab%3A0x21d67f0b0966d8b2!2sArjun%20Adventure%20Park!5e0!3m2!1sen!2sin!4v1735494811019!5m2!1sen!2sin"
          width="1200"
          height="700"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapPage;









