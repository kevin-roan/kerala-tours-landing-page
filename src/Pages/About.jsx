import React from "react";
import Hero from "../components/Hero";
import kochin2 from "../assets/kochin2.jpg";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <div>
      <Hero cName="hero-mid" hero_image={kochin2} title="About" />
      <AboutUs />
    </div>
  );
}

export default About;
