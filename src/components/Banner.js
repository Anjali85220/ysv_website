import React, { useState, useEffect } from "react";
import "./Banner.css";

const ContactForm = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>Submit the Form to Download Brochure</h2>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your Name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your Email Id" required />

          <label>Phone</label>
          <input type="tel" placeholder="Enter your phone number" required />

          <label>Message</label>
          <textarea placeholder="Type your message" />

          <div className="checkbox">
            <input type="checkbox" required />
            <span>
              I hereby provide my consent that the representative from One with
              the Nature can contact me and that I have read and accepted the
              Privacy Policy and Terms and Conditions.
            </span>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

const Banner = () => {
  const images = ["/madhuram-banner.jpg", "/banner2.jpg", "/banner3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Image slider
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    // Show popup after 15 seconds
    const popupTimer = setTimeout(() => {
      setShowForm(true);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(popupTimer);
    };
  }, [images.length]);

  return (
    <div className="banner" id="home">
      {/* Left Content */}
      <div className="banner-left">
        <h4>WELCOME TO</h4>
        <h1>
          SRI VENKATA YSV <br />
          <span>MADHURAM</span>
        </h1>
        <p>
          A house is made of bricks and beams. <br />
          A home is made of hopes and dreams.
        </p>

        <div className="search-box">
          <div className="option">
            City: <strong>Visakhapatnam</strong>
          </div>
          <div className="option">
            Type: <strong>Apartment</strong>
          </div>
          <div className="option">
            Price: <strong>₹50L–₹1Cr</strong>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="banner-right">
        <img src={images[currentIndex]} alt="Project" />
      </div>

      {/* Popup Form */}
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Banner;
