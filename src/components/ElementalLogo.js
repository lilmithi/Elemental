import React from "react";
import { Link } from "react-router-dom";

function ElementalLogo() {
  return (
    <Link
      to="/"
      className="w-max mx-auto -mt-1 h-max flex flex-col items-center justify-center overflow-hidden"
    >
      <img
        src="assets/images/elemental-logo.png"
        alt="Elemental logo"
        className="w-14 h-14 object-cover"
      />
      <span className="text-white text-sm font-RobotoMono tracking-widest font-light uppercase">
        Elemental
      </span>
    </Link>
  );
}

export default ElementalLogo;
