import React from "react";
import { NavLink } from "react-router-dom";

function NavLinknksNavLinkst() {
  return (
    <div className="bg-[#284847] md:px-12">
      <ul className="flex justify-evenly items-center uppercase text-white py-4 font-RobotoMono font-light text-sm tracking-wide">
        <NavLink to="/" className="overflow-hidden navLink">
          <img
            src="assets/images/mini-logo.png"
            alt="mini-logo"
            className="w-10 h-10 brightness-110 object-cover object-center"
          />
        </NavLink>
        <NavLink to="/benefits" className="navLink">
          Benefits
        </NavLink>
        <NavLink to="/model" className="navLink">
          Our Model
        </NavLink>
        <NavLink to="/retreats" className="navLink">
          Retreats
        </NavLink>
        <NavLink to="/testimonials" className="navLink">
          Testimonials
        </NavLink>
        <NavLink to="/team" className="navLink">
          Team
        </NavLink>
        <NavLink to="/faq" className="navLink">
          Faq
        </NavLink>
        <NavLink to="/contacts" className="navLink">
          Contact us
        </NavLink>
      </ul>
    </div>
  );
}

export default NavLinknksNavLinkst;
