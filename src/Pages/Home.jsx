import React from "react";
import { Hero } from "../components";
import herobg from "../assets/12.jpg";
import Destination from "../components/Destination";

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
    </div>
  );
}

export default Home;
