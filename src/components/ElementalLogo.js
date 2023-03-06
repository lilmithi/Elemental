import React from "react";
import { Link } from "react-router-dom";

function ElementalLogo() {
  return (
    <Link
      to="/"
      className="w-max mx-auto -mt-1 h-max flex flex-col items-center justify-center overflow-hidden"
    >
      <img
        src="assets/images/full-logo.png"
        alt="logo"
        className="w-20 object-cover brightness-110"
      />
    </Link>
  );
}

export default ElementalLogo;
