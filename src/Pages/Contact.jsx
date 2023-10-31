import React from "react";
import Hero from "../components/Hero";
import contactImage from "../assets/munnar.jpg";
import Form from "../components/Form";

function Contact() {
  return (
    <div>
      <Hero cName="hero-mid" hero_image={contactImage} title="Contact" />
      <Form />
    </div>
  );
}

export default Contact;
