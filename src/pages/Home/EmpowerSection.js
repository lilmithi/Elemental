import React from "react";

function EmpowerSection() {
  return (
    <section className="min-h-screen w-full grid grid-cols-1 lgPro:grid-cols-2 pt-16 px-3 lgPro:pl-28 md:pr-0 gap-12 md:gap-24 grid-flow-row font-Nunito relative empower">
      <img
        src="assets/images/empower-background.jpg"
        alt="empower background"
        className="absolute top-0 left-0 w-full h-full object-cover object-bottom -z-10 brightness-50"
      />
      <div className="text-white col-span-2 lgPro:col-span-1 text-justify md:text-left justify-self-center">
        <h1 className="uppercase text-[#c3a955] text-left tracking-widest text-2xl md:text-3xl font-bold font-Roboto">
          Restore. Recharge. Reconnect.
        </h1>
        <p className="my-3">
          It's no secret that we live in unprecedented times. Our world is
          facing a global mental health epidemic and the challenges thet lie
          before us demand new approaches to how we lead ourselves and others.
        </p>
        <p className="my-3">
          Yet, with more to do, less time to do it in, more complexity and
          moving parts, it's easy to become disconnected and depleted and as a
          result experience higher levels of stress, anxiety and depression. In
          fact, according to a recent poll by Forbes, nearly 60% of leaders
          experience burnout.
        </p>
        <p className="my-3">
          To help leaders meet these modern-day challenges, we facilitate
          bespoke, nature-based immersions that offer an inside-out approach to
          your wellbeing, empowering you to restore and recharge your inner
          world so you can elevate your impact and influence in the outer world.
        </p>
      </div>
      <div className="col-span-2 lgPro:col-span-1 justify-self-center">
        <img
          src="assets/images/restore-reconnect.jpg"
          alt="restore-reconnect pic"
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="col-span-2 text-white text-justify md:text-left lgPro:hidden">
        <h1 className="uppercase text-left text-[#c3a955] tracking-wider text-2xl md:text-3xl font-bold font-Roboto">
          Ancient meets modern
        </h1>
        <p className="my-3">
          Our transformational retreats are for male high-performers,
          change-makers, leaders and decision makers: these will often be
          Executives, Founders, Leaders and Entrepreneurs.
        </p>
        <p className="my-3">
          By intentionally weaving together ancient wisdom traditions and
          today's leading-edge scientific research with expert practitioners and
          world-class service, our aim is to provide you a safe and supportive
          space for you to journey inward, allowing you to emerge with a renewed
          sense of joy, purpose and connection to yourself and the natural
          world.
        </p>
      </div>
      <div className="lgPro:col-span-1 col-span-2 justify-self-center">
        <img
          src="assets/images/ancient.jpg"
          alt="ancient"
          className="w-96 max-h-[500px] object-cover object-center brightness-75"
          loading="lazy"
        />
      </div>
      <div className="lgPro:col-span-1 col-span-2 lgPro:pr-24 text-white text-justify md:text-left hidden lgPro:block">
        <h1 className="uppercase text-left text-[#c3a955] tracking-wider text-2xl md:text-3xl font-bold font-Roboto">
          Ancient meets modern
        </h1>
        <p className="my-3">
          Our transformational retreats are for male high-performers,
          change-makers, leaders and decision makers: these will often be
          Executives, Founders, Leaders and Entrepreneurs.
        </p>
        <p className="my-3">
          By intentionally weaving together ancient wisdom traditions and
          today's leading-edge scientific research with expert practitioners and
          world-class service, our aim is to provide you a safe and supportive
          space for you to journey inward, allowing you to emerge with a renewed
          sense of joy, purpose and connection to yourself and the natural
          world.
        </p>
      </div>
    </section>
  );
}

export default EmpowerSection;
