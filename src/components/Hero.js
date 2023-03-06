import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "./Button";
import ElementalLogo from "./ElementalLogo";

function Hero({
  heroTitle = "elevate your",
  heroEm = "wellbeing",
  para = "Luxury leadership retreats that integrate the power of nature, psychedelics and wellness.",
  heroImage = "assets/images/home-hero-high.jpg",
  heroImageLazy = "assets/images/home-hero-low.jpg",
}) {
  return (
    <section className="h-screen relative">
      <LazyLoadImage
        src={heroImage}
        placeholderSrc={heroImageLazy}
        alt="hero pic"
        className="absolute top-0 left-0 -z-10 w-full h-full object-cover object-center brightness-50 bg-[#284847] 3xl:container"
      />
      <ElementalLogo />
      <div className="text-center font-Roboto text-white mt-32 text-4xl tracking-widest uppercase font-semibold">
        <h1>{heroTitle}</h1>
        <span className="text-[#c3a955] leading-8">{heroEm}</span>
      </div>
      <p className="text-center text-white leading-10 mt-4 mb-8">{para}</p>
      <div className="text-center">
        <Button />
      </div>
    </section>
  );
}

export default Hero;
