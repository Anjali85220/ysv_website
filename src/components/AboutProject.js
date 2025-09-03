import React, { useState } from "react";
import "./AboutProject.css";
import ContactForm from "./ContactForm"; // ✅ Import popup form

const AboutProject = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="about-project" className="about-project">
      <div className="about-project-content">
        {/* Left Side Image */}
        <div className="image-side">
          <img 
            src="/about_project.jpg" 
            alt="About Project" 
            className="building-img" 
          />
        </div>

        {/* Right Side Text */}
        <div className="text-side">
          <h2 className="section-title">About Project</h2>
          <p className="project-description">
            <strong>Sri Venkata YSV Madhuram</strong> is designed to offer 
            <span className="highlight"> modern living </span> with world-class amenities, 
            premium specifications, and the strategic location advantage of 
            <span className="highlight"> Madhurawada, Visakhapatnam.</span>
          </p>
          <p className="project-description">
            With a perfect blend of comfort, convenience, and elegance, our project 
            ensures a lifestyle that elevates your everyday living.
          </p>

          {/* ✅ Button opens popup */}
          <button className="cta-btn" onClick={() => setShowForm(true)}>
            Download Brochure
          </button>
        </div>
      </div>

      {/* ✅ Contact Form Popup */}
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default AboutProject;
