import React from "react";

function WhyElemental() {
  return (
    <section className="min-h-screen why-elemental relative pt-32 text-white px-4 md:px-24 lgPro:px-48 2xl:px-64">
      <img
        src="assets/images/why-elemental.jpg"
        alt="why-elemental"
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full object-cover object-bottom brightness-90 -z-10"
      />
      <h3 className="uppercase text-[#c3a955] text-center font-Roboto font-normal text-2xl lgPro:text-3xl tracking-wider mb-8">
        Why Elemental?
      </h3>
      <p className="text-left md:text-center my-2">
        Our promise is simple: massive personal and professional growth in 5
        weeks.
      </p>
      <p className="text-left md:text-center">
        Our 3-step holistic model offers expert guidance from intake to
        integration, providing you with the practices, tools and resources you
        need to prosper and thrive in and out of the boardrooms
      </p>

      <div className="mt-8">
        <div className="md:h-52 pb-2 sm:pb-0 h-auto flex flex-col md:flex-row md:items-center bg-[#093331] opacity-80">
          <div className="bg-[#92a788] md:w-[7.5%] md:h-full flex items-center justify-center">
            1
          </div>
          <div className="flex md:w-[25%] md:h-full md:items-center">
            <div className="border-b border-r-0 flex md:flex-col justify-around flex-wrap items-center w-full md:py-8 sm:border-r sm:border-b-0 border-[#c3a955] md:justify-center">
              <h3 className="text-[#c3a955] font-semibold text-lg">
                Preparation
              </h3>
              <p className="">
                <span>2 Weeks, </span>
                <span>Remote</span>
              </p>
            </div>
          </div>
          <p className="md:w-[67.5%] text-sm px-8 pt-2 sm:pt-0">
            Before you embark on your journey with us we provided self-inquiry
            excercises and support to ensure you have a deeply meaningful and
            enriching experience. You will also have the opportunity to meet
            your lead facilitators and fellow participants via video call,
            allowing you to know each other and feel safe in the froup, as well
            as ask any burning questions you might have.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyElemental;
