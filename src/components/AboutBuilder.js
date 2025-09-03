import React, { useState } from "react";
import "./AboutBuilder.css";
import ContactForm from "./ContactForm"; // ✅ import your popup form

const AboutBuilder = () => {
  const [showForm, setShowForm] = useState(false);

  return (
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
          <button className="cta-btn" onClick={() => setShowForm(true)}>
            Contact Us Today
          </button>
        </div>

        {/* Right side image */}
        <div className="image-side">
          <img src="/engineer.png" alt="Engineer" className="engineer-img" />
        </div>
      </div>

      {/* ✅ Contact Form Popup */}
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default AboutBuilder;
