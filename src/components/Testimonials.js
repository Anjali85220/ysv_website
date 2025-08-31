import React from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    quote: "The construction quality is top-notch. Truly feels like home.",
    name: "Ramesh K.",
    role: "Resident",
  },
  {
    quote: "Amenities are world-class. Loved the terrace garden and yoga area.",
    name: "Lakshmi P.",
    role: "Resident",
  },
  {
    quote: "Spacious apartments and friendly neighbors. Highly recommended!",
    name: "Anita S.",
    role: "Resident",
  },
  {
    quote: "Excellent location and safety. The staff is very helpful.",
    name: "Vikram T.",
    role: "Resident",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="testimonials">
    <div className="testimonials-header">
      <h2>What Our Residents Say</h2>
      <p>Hear from our happy residents and their experiences living here.</p>
    </div>
    <div className="cards">
      {testimonialsData.map((t, index) => (
        <div className="t-card" key={index}>
          <p>"{t.quote}"</p>
          <h4>{t.name}</h4>
          <span>{t.role}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
