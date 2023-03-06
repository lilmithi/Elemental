import React from "react";
import Hero from "../../components/Hero";
import LinksList from "../../components/LinksList";
import EmpowerSection from "./EmpowerSection";

function HomePage() {
  return (
    <div className="">
      <Hero />
      <LinksList />
      <EmpowerSection/>
    </div>
  );
}

export default HomePage;
