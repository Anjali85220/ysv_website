import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "./Popup.css"; // styles for popup

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Show popup when page loads
  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo">MURTHY CONSTRUCTIONS</div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home" className="transparent-btn">Home</a></li>
          <li><a href="#about-builder" className="transparent-btn">About Builder</a></li>
          <li><a href="#about-project" className="transparent-btn">About Project</a></li>
          <li><a href="#location" className="transparent-btn">Location</a></li>
          <li><a href="#amenities" className="transparent-btn">Amenities</a></li>
          <li><a href="#specifications" className="transparent-btn">Specifications</a></li>
          <li><a href="#testimonials" className="transparent-btn">Testimonials</a></li>
          <li>
            <button 
              className="login-btn" 
              onClick={() => setShowPopup(true)}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="popup-close" onClick={() => setShowPopup(false)}>
              ✕
            </button>
            <h2>Get in Touch</h2>
            <form className="popup-form">
              <input type="text" placeholder="Name*" required />
              <input type="email" placeholder="Email*" required />
              <input type="tel" placeholder="Mobile*" required />
              <textarea placeholder="Your Message" rows="4"></textarea>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
