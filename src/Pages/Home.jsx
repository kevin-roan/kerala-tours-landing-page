import React from "react";
import { Hero } from "../components";
import herobg from "../assets/12.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero
        hero_image={herobg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        cName="hero"
        button_text="Travel Plan"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </div>
  );
}

export default Home;
