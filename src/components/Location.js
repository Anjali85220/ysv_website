import React from "react";
import "./Location.css";
import { MapPin, ExternalLink } from "lucide-react"; // icons

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

      {/* Address & Link */}
      <div className="location-text">
        <p className="address">
          <MapPin size={20} className="icon" />
          <span>
            PLOT NO:5, NEAR CAR SHED JN. PM PALEM MAIN ROAD, WARD-4, <br />
            MADHURAWADA, VISAKHAPATNAM - 530041
          </span>
        </p>
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
