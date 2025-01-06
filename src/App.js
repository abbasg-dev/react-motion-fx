import React from "react";
import Header from "./components/Header";
import HeroText from "./components/HeroText";
import ImageSection from "./components/ImageSection";
import ContentSection from "./components/ContentSection";
import FeaturedWork from "./components/FeaturedWork";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <HeroText />
      <ImageSection />
      <ContentSection />
      <FeaturedWork />
      <Projects />
    </>
  );
}

export default App;
