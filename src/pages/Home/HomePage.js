import React from "react";
import Hero from "../../components/Hero";
import LinksList from "../../components/LinksList";
import EmpowerSection from "./EmpowerSection";
import Experiences from "./Experiences";
import WhyElemental from "./WhyElemental";

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
