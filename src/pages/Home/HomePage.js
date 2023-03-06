import React from "react";
import Hero from "../../components/Hero";
import LinksList from "../../components/LinksList";
import EmpowerSection from "./sections/EmpowerSection";
import Experiences from "./sections/Experiences";
import WhyElemental from "./sections/WhyElemental";

function HomePage() {
  return (
    <>
      <Hero />
      <LinksList />
      <EmpowerSection />
      <Experiences />
      <WhyElemental />
    </>
  );
}

export default HomePage;
