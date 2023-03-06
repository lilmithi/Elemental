import React from 'react'

function HolisticModel({index,title, duration, status, text}) {
  return (
    <div className="md:h-52 pb-2 sm:pb-0 h-auto flex flex-col md:flex-row md:items-center bg-[#093331] opacity-80">
      <div className="bg-[#92a788] md:w-[7.5%] md:h-full flex items-center justify-center">
        {index}
      </div>
      <div className="flex md:w-[25%] md:h-full md:items-center">
        <div className="border-b border-r-0 flex md:flex-col justify-around flex-wrap items-center w-full md:py-8 sm:border-r sm:border-b-0 border-[#c3a955] md:justify-center">
          <h3 className="text-[#c3a955] font-semibold text-lg">{title}</h3>
          <p className="">
            <span>{duration}, </span>
            <span>{status}</span>
          </p>
        </div>
      </div>
      <p className="md:w-[67.5%] text-sm px-8 pt-2 sm:pt-0">
        {text}
      </p>
    </div>
  );
}

export default HolisticModel