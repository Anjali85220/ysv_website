import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./Banner.css";

const ContactForm = ({ onClose }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d9fnf5s",   // 🔹 replace with your EmailJS service ID
        "template_gtb395g",  // 🔹 replace with your EmailJS template ID
        e.target,
        "lVxA2r26bLwNO0oNy"    // 🔹 replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Form submitted successfully!");
          e.target.reset();
          onClose();
        },
        (error) => {
          alert("Failed to send. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Submit the Form to Download Brochure</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        <form onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Enter your Name" required />

          <label>Email</label>
          <input type="email" name="user_email" placeholder="Enter your Email Id" required />

          <label>Phone</label>
          <input type="tel" name="user_phone" placeholder="Enter your phone number" required />

          <label>Message</label>
          <textarea name="message" placeholder="Type your message" />

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
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

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
            Price: <strong>₹60L–₹1Cr</strong>
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
