import React from "react";
import Hero from "../../components/Hero";
import LinksList from "../../components/LinksList";
import EmpowerSection from "./EmpowerSection";
import Experiences from "./Experiences";

function HomePage() {
  return (
    <div className="">
      <Hero />
      <LinksList />
      <EmpowerSection />
      <Experiences />
    </div>
  );
}

export default HomePage;
