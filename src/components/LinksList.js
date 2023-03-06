import React from "react";
import { NavLink } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";

function NavLinknksNavLinkst() {
  return (
    <div className="bg-[#284847] md:px-12">
      <ul className="flex justify-evenly items-center uppercase text-white py-4 font-RobotoMono font-light text-sm tracking-wide">
        <NavLink to="/" className="overflow-hidden navLink hidden md:block">
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
        <NavLink
          to="/testimonials"
          className="navLink hidden md:block optional-navlink"
        >
          Testimonials
        </NavLink>
        <NavLink
          to="/team"
          className="navLink hidden md:block optional-navlink"
        >
          Team
        </NavLink>
        <NavLink to="/faq" className="navLink hidden md:block optional-navlink">
          Faq
        </NavLink>
        <NavLink
          to="/contacts"
          className="navLink hidden md:block optional-navlink"
        >
          Contact us
        </NavLink>
        <CiMenuKebab
          color="rgb(195 169 85)"
          style={{ border: "solid 1px", fontSize: "1.15rem" }}
          className="md:hidden"
        />
      </ul>
    </div>
  );
}

export default NavLinknksNavLinkst;
