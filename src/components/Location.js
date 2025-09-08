import React from "react";
import "./Location.css";
import { ExternalLink, Umbrella, ShoppingCart, Waves, Building2, Trophy, Home } from "lucide-react"; 

const Location = () => {
  // ✅ Track Google Maps click
  const handleMapClick = () => {
    if (window.gtag) {
      window.gtag("event", "google_maps_click", {
        event_category: "engagement",
        event_label: "Location Section - View on Google Maps",
      });
    }
  };

  return (
    <section id="location" className="location">
      <h2>Location Advantage</h2>

      <div className="location-wrapper">
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

          {/* ✅ Single button for Google Maps with directions + tracking */}
          <a
            href="https://share.google/JOdnrldZQKHl3Wz3U"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
            onClick={handleMapClick}
          >
            View on Google Maps <ExternalLink size={20} color="#333" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
