import React from "react";
import Hero from "../components/Hero";
import serviceImage from "../assets/vagamon.jpg";
import Trip from "../components/Trip";

function Service() {
  return (
    <div>
      <Hero cName="hero-mid" hero_image={serviceImage} title="Service" />
      <Trip />
    </div>
  );
}

export default Service;
