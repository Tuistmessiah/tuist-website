import React from "react";
import { heroSection } from "../../dummyData";
import HeroSection from "../sections/HeroSection/HeroSection";

function Homepage() {
  return (
    <div className="App">
      <HeroSection {...heroSection} />
    </div>
  );
}

export default Homepage;
