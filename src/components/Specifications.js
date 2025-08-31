import React from "react";
import "./Specifications.css";

const Specifications = () => (
  <section id="specifications" className="specs">
    <h2 className="section-title">Specifications</h2>
    <div className="specs-grid">
      <div className="floorplan-container">
        <img src="/floorplan.jpg" alt="Floor Plan" className="floorplan" />
      </div>
      <div className="details">
        <h3>Salient Features</h3>
        <ul className="features-list">
          <li>LIFT: 6 passenger lift of standard make</li>
          <li>GENERATOR: Power backup for lift, common areas, 2 lights and 1 fan in each flat</li>
          <li>SECURITY: CCTV surveillance</li>
          <li>PARKING: Car parking for every flat</li>
        </ul>
      </div>
    </div>
    <div className="structure">
      <h3>Structure</h3>
      <p>R.C.C. Framed structure, red brick masonry, vitrified tiles, teakwood main doors, UPVC windows, modular switches, ISI fittings, 24hr borewell water supply.</p>
    </div>
  </section>
);

export default Specifications;
