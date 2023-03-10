import React from "react";

function Button({ content = "begin your journey" }) {
  return (
    <button className="py-4 w-52 text-[#0b2e2b] tracking-wider text-sm font-medium uppercase bg-[#c3a955] hover:bg-[#c3a955ee]">
      {content}
    </button>
  );
}

export default Button;
