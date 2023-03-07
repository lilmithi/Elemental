import React from "react";
import RetreatSummary from "../../../components/RetreatSummary";

function UpcomingRetreats() {
  const retreats = [
    {
      imageUrl: "assets/images/san-lucas.jpg",
      date: "June 3 - 10, 2023",
      destination: "Cabo san lucas",
      country: "Mexico",
      description:
        "Located on the southernmost tip of the Baja California peninsula where the Sea of Cortes (Gulf of California) and the Pacific Ocean meet, Cabo San Lucas is a premier and luxurious spot for travelers around the world.",
    },
    {
      imageUrl: "assets/images/san-miguel.jpg",
      date: "September 16 - 23, 2023",
      destination: "San Miguel De Allende",
      country: "Mexico",
      description:
        "San Miguel de Allende may just be the most charming small town in Mexico. It's no pueblito, though, but a colorful, colonial-style city with a vibrant wine scene, markets and artisans galore, and one of the most impressive gastronomic scenes in Mexico.",
    },

    {
      imageUrl: "assets/images/zihuatanejo.jpg",
      date: "November 25 - December 2, 2023",
      destination: "Zihuatanejo",
      country: "Mexico",
      description:
        "Zihuatanejo — a nearly undiscovered town—has a white sand beach, waterfront fish shacks, cool places to stay, and a laid-back vibe. This Pacific coast paradise is perfect for a quick escape from real life. Playa la Ropa, a curved expanse of white sand heaven, wants you to slow down and relax.",
    },
  ];
  return (
    <section className="min-h-screen bg-[#062623] text-center py-6 px-6 md:px-12 lgPro:pl-24 lgPro:pr-4 text-white">
      <h1 className="uppercase tracking-wider font-Roboto text-2xl my-6 text-cream-500">
        Upcoming Retreats
      </h1>
      <div className="flex gap-0 flex-wrap md:items-center h-[34rem] w-full max-w-[85rem] mx-auto">
        {retreats.map((retreat, index) => (
          <RetreatSummary
            key={index}
            imageUrl={retreat.imageUrl}
            date={retreat.date}
            destination={retreat.destination}
            country={retreat.country}
            description={retreat.description}
          />
        ))}
      </div>
    </section>
  );
}

export default UpcomingRetreats;
