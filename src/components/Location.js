import React from "react";
import "./Location.css";
import { ExternalLink, Umbrella, ShoppingCart, Waves, Building2, Trophy, Home } from "lucide-react"; 

const Location = () => (
  <section id="location" className="location">
    <h2>Location Advantage</h2>

    <div className="location-wrapper">
      {/* Removed Map & QR images */}

      {/* Styled Location Advantage */}
      <div className="location-text">
        <div className="location-advantage">
          <ul>
            <li><Umbrella size={22} color="#333" className="check-icon" /> 5 kms from Rushikonda Beach</li>
            <li><ShoppingCart size={22} color="#333" className="check-icon" /> 1 km from DMart</li>
            <li><Waves size={22} color="#333" className="check-icon" /> Next to Janoos Water Park</li>
            <li><Building2 size={22} color="#333" className="check-icon" /> Located in the Center of the City</li>
            <li><Trophy size={22} color="#333" className="check-icon" /> 2 km from the Cricket Stadium</li>
            <li><Home size={22} color="#333" className="check-icon" /> Perfect for Families in Visakhapatnam</li>
          </ul>
        </div>
        <br />

        <a
          href="https://maps.app.goo.gl/yi4aViBMQriy2s1X9"
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          View on Google Maps <ExternalLink size={20} color="#333" />
        </a>
      </div>
    </div>
  </section>
);

export default Location;
