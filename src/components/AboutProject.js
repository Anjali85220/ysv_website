import React from "react";
import "./AboutProject.css";

const AboutProject = () => (
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
        <button className="cta-btn">Download Brochure</button>
      </div>
    </div>
  </section>
);

export default AboutProject;
