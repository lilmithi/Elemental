import React from "react";
import Hero from "../../components/Hero";
import LinksList from "../../components/LinksList";
import EmpowerSection from "./sections/EmpowerSection";
import Experiences from "./sections/Experiences";
import WhyElemental from "./sections/WhyElemental";
import UpcomingRetreats from "./sections/UpcomingRetreats";

function HomePage() {
  return (
    <>
      <Hero />
      <LinksList />
      <EmpowerSection />
      <Experiences />
      <WhyElemental />
      <UpcomingRetreats />
    </>
  );
}

export default HomePage;
