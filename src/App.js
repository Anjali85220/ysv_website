import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutBuilder from "./components/AboutBuilder";
import AboutProject from "./components/AboutProject";
import Location from "./components/Location";
import Amenities from "./components/Amenities";
import Specifications from "./components/Specifications";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <AboutBuilder />
      <AboutProject />
      <Location />
      <Amenities />
      <Specifications />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
