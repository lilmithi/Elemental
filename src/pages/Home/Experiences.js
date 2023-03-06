import React from "react";
import BenefitTriangle from "../../components/BenefitTriangle";
import Button from "../../components/Button";

function Experiences() {
  return (
    <section className="text-center min-h-screen bg-[#062e2d] font-Nunito pt-10 pb-4 px-4 md:pt-12 md:px-20 xl:px-32">
      <div className="text-[#c3a955] uppercase font-semibold font-Roboto tracking-wider text-xl md:text-3xl mb-6 md:mb-10">
        <h1>Life-changing experiences.</h1>
        <h1>Long-lasting results.</h1>
      </div>
      <p className="text-white md:px-16 lg:text-center lg:px-36 text-left">
        For those who are ready to step into a higher octave of living and
        leading, our retreats serve as a catalyst for your expansion and
        evolution. Here are just a few of the many benefits you may experience
        as a result of embarking on one of our journeys
      </p>
      <div className="flex gap-12 md:gap-3 items-center justify-around flex-wrap my-16">
        <BenefitTriangle
          triangle="t1"
          upright={false}
          heading="Increased mental and emotional resilience"
          text="Dissolve stress and anxiety and breakthrough limiting beliefs,
            negative patterns and trauma"
        />

        <BenefitTriangle
          triangle="t2"
          upright={true}
          heading="Deeper sense of purpose and meaning"
          text="Feel more alive and fulfilled and create a greater connection to
            yourself, others and life itself."
        />

        <BenefitTriangle
          triangle="t2"
          upright={false}
          heading="More harmonious relationships"
          text="Overcome your triggers, improve your communication and feel more
            connected to your friends, family and team."
        />

        <BenefitTriangle
          triangle="t1"
          upright={true}
          heading="Greater clarity, creativity and confidence"
          text="Illuminate your mind and tap into the flow of life to uncover your
            creative genius and highest potential."
        />
      </div>
      <Button />
    </section>
  );
}

export default Experiences;
