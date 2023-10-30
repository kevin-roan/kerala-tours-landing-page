import React from "react";
import Hero from "../components/Hero";
import serviceImage from "../assets/vagamon.jpg";

function Service() {
  return (
    <div>
      <Hero cName="hero-mid" hero_image={serviceImage} title="Service" />
    </div>
  );
}

export default Service;
