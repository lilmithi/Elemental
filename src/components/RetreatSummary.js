import React from "react";
import Button from "./Button";

function RetreatSummary({
  link,
  imageUrl,
  date,
  destination,
  country,
  description,
}) {
  return (
    <div className="w-full h-[250px] md:w-1/3 md:h-full relative retreatSummary">
      <img
        src={imageUrl}
        alt={destination}
        className="absolute top-0 left-0 w-full h-full object-cover object-bottom md:object-center brightness-50"
        loading="lazy"
      />
      <div className="z-10 w-full h-full absolute top-0 left-0 text-left lgPro:px-10 retreat-sub1">
        <p className="text-cream-500 mt-6 mb-2">{date}</p>
        <h2 className="uppercase font-medium tracking-wide">{destination}</h2>
        <h2 className="uppercase my-1 font-medium tracking-wide">{country}</h2>
        <p className="md:mt-10">{description}</p>
        <div className="md:absolute bottom-12 left-0 md:w-full md:text-center">
          <Button content="Learn more" />
        </div>
      </div>
      <div className="z-10 absolute bottom-0 text-left w-full h-max p-6 md:pl-12 retreat-sub2 font-Nunito">
        <p className="text-cream-500 font-medium">{date}</p>
        <h2 className="uppercase tracking-wider font-medium text-lg">{destination}</h2>
        <h2 className="uppercase tracking-wider font-medium text-lg">{country}</h2>
      </div>
    </div>
  );
}

export default RetreatSummary;
