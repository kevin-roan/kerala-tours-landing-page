import React from "react";
import Hero from "../components/Hero";
import contactImage from "../assets/4.jpg";

function Contact() {
  return (
    <div>
      <Hero cName="hero-mid" hero_image={contactImage} title="Contact" />
    </div>
  );
}

export default Contact;
