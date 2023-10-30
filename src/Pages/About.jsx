import React from "react";
import Hero from "../components/Hero";
import night from "../assets/night.jpg";

function About() {
  return (
    <div>
      <Hero cName="hero-mid" hero_image={night} title="About" />
    </div>
  );
}

export default About;
