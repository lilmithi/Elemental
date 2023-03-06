import React from "react";

function EmpowerSection() {
  return (
    <section className="min-h-screen w-full grid md:grid-cols-2 pt-16 md:pl-32 gap-28 grid-flow-row font-Nunito relative empower">
      <img
        src="assets/images/empower-background.jpg"
        alt="empower background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-50"
      />
      <div className="text-white">
        <h1 className="uppercase text-[#c3a955] tracking-widest text-2xl md:text-3xl font-bold font-RobotoMono">
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
      <div className="">
        <img
          src="assets/images/restore-reconnect.jpg"
          alt="restore-reconnect pic"
          className="object-cover object-center w-full"
        />
      </div>
    </section>
  );
}

export default EmpowerSection;
