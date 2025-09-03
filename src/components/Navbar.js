import React, { useState } from "react";
import "./Navbar.css";
import ContactForm from "./ContactForm"; // ✅ import your form

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false); // ✅ form state

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
            {/* ✅ Opens popup instead of scrolling */}
            <button className="primary-btn" onClick={() => setShowForm(true)}>
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
