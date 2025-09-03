import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    {/* Left WhatsApp Button */}
    <a
      href="https://wa.me/9177681945"
      className="footer-icon left-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>

    <div className="footer-content">
      <p><strong>Murthy Constructions</strong> | Contact: 9177681945</p>
      <p>Architects/Structures, #39-12-40/1, Vamsinagar, Madhavadhara, Visakhapatnam</p>
      <p>&copy; {new Date().getFullYear()} Sri Venkata YSV Madhuram</p>
      
      {/* Credit line */}
      <p>
        Designed and Developed by{" "}
        <a 
          href="https://www.mindsahead.in/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-link"
        >
          MindsAhead Digital
        </a>
      </p>
    </div>

    {/* Right Call Button */}
    <a href="tel:+919177681945" className="footer-icon right-icon">
      <FaPhone />
    </a>
  </footer>
);

export default Footer;
