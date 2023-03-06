import React from "react";

function BenefitTriangle({ triangle = "t1", upright = true, heading, text }) {
  return (
    <div className="flex flex-col w-52 h-60 items-center justify-center">
      <img
        src={
          triangle === "t1" ? "assets/images/t1.png" : "assets/images/t2.png"
        }
        alt={upright ? "upright triangle" : "inverted triangle"}
        className={`${upright ? "" : "rotate-triangle"} w-28`}
      />
      <h3 className="uppercase text-[#c3a955]">{heading}</h3>
      <p className="text-white">{text}</p>
    </div>
  );
}

export default BenefitTriangle;
