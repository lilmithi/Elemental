import React from "react";

function Experiences() {
  return (
    <section className="text-center min-h-screen bg-[#062e2d] font-Nunito pt-10 px-4 md:pt-12 md:px-20 xl:px-32">
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
      <div className="flex items-center justify-around flex-wrap">
        <div>
          <img src="assets/images/t1.png" alt="upright triangle" />
        </div>
        <div>
          <img
            src="assets/images/t2.png"
            alt="upright triangle2"
            className="rotate-triangle"
          />
        </div>
        <div>
          <img src="assets/images/t2.png" alt="downside triangle2" />
        </div>
        <div>
          <img
            src="assets/images/t1.png"
            alt="downside triangle1"
            className="rotate-triangle"
          />
        </div>
      </div>
    </section>
  );
}

export default Experiences;
