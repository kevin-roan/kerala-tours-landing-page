import React from "react";
import Hero from "../components/Hero";
import contactImage from "../assets/munnar.jpg";

function Contact() {
  return (
    <div>
      <Hero cName="hero-mid" hero_image={contactImage} title="Contact" />
    </div>
  );
}

export default Contact;
