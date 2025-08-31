import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <p><strong>Murthy Constructions</strong> | Contact: 9494373899</p>
    <p>Architects/Structures: 8885637325, #39-12-40/1, Vamsinagar, Madhavadhara, Visakhapatnam</p>
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
  </footer>
);

export default Footer;
