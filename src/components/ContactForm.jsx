import React from "react";
import "./ContactForm.css"; // ✅ your popup styles

const ContactForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle actual form submission (API, email, etc.)
    alert("Form submitted successfully!");
    onClose(); // ✅ close popup after submit
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>Submit the Form to Download Brochure</h2>

        <form onSubmit={handleSubmit}>
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

export default ContactForm;
