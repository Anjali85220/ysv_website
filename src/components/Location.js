import React from "react";
import "./Location.css";
import { ExternalLink, CheckCircle } from "lucide-react"; // icons

const Location = () => (
  <section id="location" className="location">
    <h2>Location Advantage</h2>

    <div className="location-wrapper">
      {/* Map & QR images */}
      <div className="location-images">
        <div className="image-card fade-in">
          <img src="/location-map.jpg" alt="Project Location" />
          <p>Project Location Map</p>
        </div>
        <div className="image-card fade-in delay">
          <img src="/google-qr.jpg" alt="Google QR" />
          <p>Scan to Open in Maps</p>
        </div>
      </div>

      {/* Styled Location Advantage */}
      <div className="location-text">
        <div className="location-advantage">
          <ul>
            <li><CheckCircle size={18} className="check-icon" /> 5 kms from Rushikonda Beach</li>
            <li><CheckCircle size={18} className="check-icon" /> 1 km from DMart</li>
            <li><CheckCircle size={18} className="check-icon" /> Next to Janoos Water Park</li>
            <li><CheckCircle size={18} className="check-icon" /> Located in the Center of the City</li>
            <li><CheckCircle size={18} className="check-icon" /> 2 km from the Cricket Stadium</li>
            <li><CheckCircle size={18} className="check-icon" /> Perfect for Families in Visakhapatnam</li>
          </ul>
        </div>
<br></br>
        <a
          href="https://maps.app.goo.gl/yi4aViBMQriy2s1X9"
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          View on Google Maps <ExternalLink size={18} />
        </a>
      </div>
    </div>
  </section>
);

export default Location;
