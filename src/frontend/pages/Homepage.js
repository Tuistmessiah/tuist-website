import React, { useState, useEffect } from "react";
import { heroSection } from "../../dummyData";
import HeroSection from "../sections/HeroSection/HeroSection";
import { fitleredSectionsByPage } from "../data/tuistAPI";

function Homepage() {
  const [content, setContent] = useState();

  useEffect(() => {
    fitleredSectionsByPage("homepage").then((result) => {
      setContent(result);
      console.log({ result });
    });
  }, []);

  if (!content) {
    return <div>Loading!</div>;
  }
  // console.log("FINALL");
  // console.log({ ...content.hero });
  // console.log({ ...heroSection });
  return (
    <div className="App">
      <HeroSection {...content.hero} />
    </div>
  );
}

export default Homepage;
