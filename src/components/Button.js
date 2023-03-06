import React from "react";

function Button({ content = "begin your journey" }) {
  return (
    <button className="py-4 px-5 text-[#0b2e2b] tracking-wider text-sm font-bold uppercase bg-[#c3a955] hover:bg-[#c3a955ee]">
      {content}
    </button>
  );
}

export default Button;
