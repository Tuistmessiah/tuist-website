import React, { useState, useEffect } from "react";
import HeroSection from "../sections/HeroSection/HeroSection";
import { fitleredSectionsByPage } from "../data/tuistAPI";

function Homepage() {
  const [pageContent, setPageContent] = useState();

  useEffect(() => {
    fitleredSectionsByPage("homepage").then((pageObject) =>
      setPageContent(pageObject)
    );
  }, []);

  if (!pageContent) {
    return <div>Loading!</div>;
  }

  return (
    <div className="App">
      <HeroSection {...pageContent.hero} />
    </div>
  );
}

export default Homepage;
