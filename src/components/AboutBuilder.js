import React from "react";
import "./AboutBuilder.css";

const AboutBuilder = () => (
  <section id="about-builder" className="about-builder">
    <div className="about-content">
      {/* Left side text */}
      <div className="text-side">
        <h4 className="subtitle">About Us</h4>
        <h2 className="title">Building Dreams, Creating Landmarks</h2>
        <p>
          <strong>Murthy Constructions</strong> proudly presents 
          <span className="highlight"> Sri Venkata YSV Madhuram</span> – a 
          landmark residential project where trust meets excellence.
        </p>
        <p>
          With years of expertise in the construction industry, we are committed 
          to delivering premium quality homes that reflect innovation, durability, 
          and timeless design.
        </p>
        <button className="cta-btn">Contact Us Today</button>
      </div>

      {/* Right side image */}
      <div className="image-side">
        <img src="/engineer.png" alt="Engineer" className="engineer-img" />
      </div>
    </div>
  </section>
);

export default AboutBuilder;
