import React from "react";
import HolisticModel from "../../../components/HolisticModel";

function WhyElemental() {
  const data = [
    {
      title: "Preparation",
      duration: "2 Weeks",
      status: "Remote",
      text: "Before you embark on your journey with us we provided self-inquiry excercises and support to ensure you have a deeply meaningful and enriching experience. You will also have the opportunity to meet your lead facilitators and fellow participants via video call, allowing you to know each other and feel safe in the froup, as well as ask any burning questions you might have.",
    },
    {
      title: "Implementation",
      duration: "1 Week",
      status: "On-Site Retreat",
      text: `Embark on an unforgettable quest in some of the most idyllic locations in Mexico. Through a carefully curated blend of Sonic Breathwork, holistic wellness therapies, workshops and psilocybin-assisted journeys, our experiences offer you the opportunity to be challenged, inspired, and deeply nourished in your body, mind and soul.`,
    },
    {
      title: "Integration",
      duration: "2 Weeks",
      status: "Remote",
      text: "One of the most important aspects of having peak experiences is integration. Through 1-1 and group calls, we help you take the insights, the clarity and the inner wisdom you received from the experience and embody and actualize them into our everyday life.",
    },
  ];
  return (
    <section className="min-h-screen why-elemental relative py-28 text-white px-4 md:px-24 lgPro:px-48 2xl:px-64">
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
        {data.map((item, index) => (
          <HolisticModel
            key={index}
            position={index + 1}
            title={item.title}
            duration={item.duration}
            status={item.status}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
}

export default WhyElemental;
