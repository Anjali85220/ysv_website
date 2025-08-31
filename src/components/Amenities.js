import React from "react";
import "./Amenities.css";

const Amenities = () => {
  const main = [
    { title: "Grand Entry", img: "/entry.jpg" },
    { title: "Terrace Garden", img: "/garden.jpg" },
    { title: "Terrace Yoga", img: "/yoga.jpg" },
    { title: "Terrace Gym", img: "/gym.jpg" },
  ];

  const extra = [
    "Kids Sand Pit",
    "Seating Areas",
    "Outdoor BBQ Area with Setup",
    "Terrace Gazibo Sitout",
    "Emergency First Aid Kit",
    "Star Gazing Deck with Telescope",
    "24/7 CCTV Surveillance",
    "100% Power Backup (Diesel Generator)",
    "Premium Lift",
    "Intercom",
    "Tot-lot Area",
  ];

  // ✅ New images for both sides (location pin design)
  const sideImages = [
    { img: "/sandpit.jpg", title: "Kids Sand Pit" },
    { img: "/seating.jpg", title: "Seating Area" },
    { img: "/cctv.jpg", title: "24/7 CCTV" },
    { img: "/lift.jpg", title: "Premium Lift" },
  ];

  return (
    <section id="amenities" className="amenities">
      <h2 className="section-title">Amenities</h2>

      <div className="grid">
        {main.map((item, i) => (
          <div key={i} className="card">
            <img src={item.img} alt={item.title} className="card-img" />
            <div className="card-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <h3 className="extra-title">Additional Amenities</h3>

      {/* ✅ New Location Pin Images Row */}
      <div className="location-row">
        {sideImages.map((item, i) => (
          <div key={i} className="location-pin">
            <div className="pin-img-wrapper">
              <img src={item.img} alt={item.title} className="pin-img" />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <ul className="extra-list">
        {extra.map((item, i) => (
          <li key={i}>✔ {item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Amenities;
