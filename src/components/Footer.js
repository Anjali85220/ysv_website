import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  // ✅ Fire GA4 events when user clicks
  const handleWhatsAppClick = () => {
    if (window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "Footer WhatsApp",
      });
    }
  };

  const handleCallClick = () => {
    if (window.gtag) {
      window.gtag("event", "call_click", {
        event_category: "engagement",
        event_label: "Footer Call",
      });
    }
  };

  return (
    <footer className="footer">
      {/* Left WhatsApp Button */}
      <a
        href="https://wa.me/919177681945" // ✅ full country code
        className="footer-icon left-icon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onClick={handleWhatsAppClick}
      >
        <FaWhatsapp />
      </a>

      <div className="footer-content">
        {/* Company + Phone (clickable) */}
        <p>
          <strong>Murthy Constructions</strong> |{" "}
          <a
            href="tel:+919177681945"
            className="footer-link"
            aria-label="Call us"
            onClick={handleCallClick}
          >
            +91 91776 81945
          </a>
        </p>

        {/* Address */}
        <p>
          PLOT NO:5, NEAR CAR SHED JN. PM PALEM MAIN ROAD, WARD-4,
          <br />
          MADHURAWADA, VISAKHAPATNAM - 530041
        </p>

        {/* ✅ RERA Number */}
        <p>
          <strong>RERA No:</strong> P03280064376
        </p>

        {/* Copyright */}
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
      <a
        href="tel:+919177681945"
        className="footer-icon right-icon"
        aria-label="Call us"
        onClick={handleCallClick}
      >
        <FaPhone />
      </a>
    </footer>
  );
};

export default Footer;
