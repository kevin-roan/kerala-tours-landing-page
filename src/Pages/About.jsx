import React from "react";
import Hero from "../components/Hero";
import kochin2 from "../assets/kochin2.jpg";

function About() {
  return (
    <div>
      <Hero cName="hero-mid" hero_image={kochin2} title="About" />
    </div>
  );
}

export default About;
