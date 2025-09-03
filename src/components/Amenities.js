import React from "react";
import "./Amenities.css";
import { 
  FaChild, FaChair, FaUtensils, FaPagelines, FaFirstAid, 
  FaStar, FaVideo, FaBolt, FaDumbbell, FaBinoculars 
} from "react-icons/fa";
import { MdOutlineFestival } from "react-icons/md";

const Amenities = () => {
  const main = [
    { title: "Grand Entry", img: "/entry.jpg" },
    { title: "Terrace Garden", img: "/garden.jpg" },
    { title: "Terrace Yoga", img: "/yoga.jpg" },
    { title: "Terrace Gym", img: "/gym.jpg" },
  ];

  // ✅ Clean extra amenities with proper icons
  const extra = [
    { title: "Kids Sand Pit", icon: <FaChild /> },
    { title: "Seating Areas", icon: <FaChair /> },
    { title: "Outdoor BBQ Area", icon: <FaUtensils /> },
    { title: "Terrace Gazebo Sitout", icon: <MdOutlineFestival /> },
    { title: "Emergency First Aid Kit", icon: <FaFirstAid /> },
    { title: "Star Gazing Deck", icon: <FaStar /> },
    { title: "24/7 CCTV Surveillance", icon: <FaVideo /> },
    { title: "100% Power Backup", icon: <FaBolt /> },
  ];

  return (
    <section id="amenities" className="amenities">
      <h2 className="section-title"> Top Amenities</h2>

      {/* Main Grid */}
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

      {/* Extra Amenities */}
      <div className="extra-grid">
        {extra.map((item, i) => (
          <div key={i} className="extra-card">
            <div className="extra-icon">{item.icon}</div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
