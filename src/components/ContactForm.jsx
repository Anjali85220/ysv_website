import React from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css"; // ✅ keep your popup styles

const ContactForm = ({ onClose }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d9fnf5s",   // ✅ replace with your EmailJS Service ID
        "template_gtb395g",  // ✅ replace with your EmailJS Template ID
        e.target,
        "lVxA2r26bLwNO0oNy"  // ✅ replace with your EmailJS Public Key
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

export default ContactForm;
