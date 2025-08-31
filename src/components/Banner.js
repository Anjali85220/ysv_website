import React, { useState, useEffect } from "react";
import "./Banner.css";

const Banner = () => {
  const images = [
    "/madhuram-banner.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
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
            City: <strong>Hyderabad</strong>
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
    </div>
  );
};

export default Banner;
