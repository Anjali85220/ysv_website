import React, { useState } from "react";
import "./Navbar.css";
import ContactForm from "./ContactForm"; // ✅ import your form

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false); // ✅ form state

  // ✅ Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">MURTHY CONSTRUCTIONS</div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home" className="transparent-btn" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about-builder" className="transparent-btn" onClick={handleLinkClick}>About Builder</a></li>
          <li><a href="#about-project" className="transparent-btn" onClick={handleLinkClick}>About Project</a></li>
          <li><a href="#location" className="transparent-btn" onClick={handleLinkClick}>Location</a></li>
          <li><a href="#amenities" className="transparent-btn" onClick={handleLinkClick}>Amenities</a></li>
          <li><a href="#specifications" className="transparent-btn" onClick={handleLinkClick}>Specifications</a></li>
          <li><a href="#testimonials" className="transparent-btn" onClick={handleLinkClick}>Testimonials</a></li>
          <li>
            {/* ✅ Opens popup instead of scrolling */}
            <button
              className="primary-btn"
              onClick={() => {
                setShowForm(true);
                setIsOpen(false); // close menu
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* ✅ Conditionally render the form */}
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </>
  );
};

export default Navbar;
