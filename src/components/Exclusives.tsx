import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import goa from "../assets/Untitled (784 x 994 px).png";

const properties = [
  {
    image: goa, // Replace with actual image path
    title: "Marina Living",
    location: "Goa",
    roi: "7–8%",
    paymentPlan: "Post-handover payment plan – 30% over 2 years",
    locationDetails:
      "Parallel to Sheikh Zayed Road, 5 minutes to Jumeirah Beach",
    design: "Designed in the style of American resorts of Miami",
    description:
      "One of the last new developments in the area with growing capital value – Dubai Marina. Just a few minutes’ away from Marina Beach, Ain Dubai, and the world-famous promenade, The Walk.",
    handover: "June 30, 2025",
  },
  {
    image: "https://fnst.axflare.com/community/WEBP/uYHqVeSOBZ.webp", // Replace with actual image path
    title: "Marina Living",
    location: "Goa",
    roi: "7–8%",
    paymentPlan: "Post-handover payment plan – 30% over 2 years",
    locationDetails:
      "Parallel to Sheikh Zayed Road, 5 minutes to Jumeirah Beach",
    design: "Designed in the style of American resorts of Miami",
    description:
      "One of the last new developments in the area with growing capital value – Dubai Marina. Just a few minutes’ away from Marina Beach, Ain Dubai, and the world-famous promenade, The Walk.",
    handover: "June 30, 2025",
  },
];

const Exclusives = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index + 1 < properties.length) setIndex(index + 1);
  };

  const offset = index * 100; // one full card per scroll

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-10 px-2 md:px-28 font-raleway font-thin custom-gradient-lines relative">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-light mb-6 text-black dark:text-gray-100 md:text-center pl-6">
          PROJECTS
        </h2>
        <p className="text-sm md:text-base pl-6 font-light dark:font-thin md:text-center">
          Discover the outstanding range of Goa properties only with{" "}
          <span className="text-[var(--primary-color)] font-light">GRANTH</span>
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${offset}%)` }}
        >
          {properties.map((property, idx) => (
            <div key={idx} className="flex-shrink-0 w-full px-4">
              <div className="flex flex-col md:flex-row bg-gray-50 dark:bg-[#1A1A1A] rounded-lg overflow-hidden">
                {/* Image section */}
                <div className="w-full md:w-1/2">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover md:h-[80vh]"
                    draggable="false"
                  />
                  <div className="p-4">
                    <h3 className="text-xl md:text-2xl font-light mb-2">
                      {property.title}
                    </h3>
                    <p className="flex items-center text-sm font-light dark:font-thin">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      {property.location}
                    </p>
                  </div>
                </div>

                {/* Details section */}
                <div className="w-full md:w-1/2 p-6 flex flex-col gap-4">
                  <div>
                    <h4 className="text-lg font-light mb-1">ROI</h4>
                    <p className="text-sm font-light dark:font-thin">
                      Expected ROI – {property.roi}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-light mb-1">PRIME LOCATION</h4>
                    <p className="text-sm font-light dark:font-thin">
                      {property.locationDetails}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-light mb-1">PAYMENT PLAN</h4>
                    <p className="text-sm font-light dark:font-thin">
                      {property.paymentPlan}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-light mb-1">DESIGN</h4>
                    <p className="text-sm font-light dark:font-thin">
                      {property.design}
                    </p>
                  </div>
                  <p className="text-sm font-light dark:font-thin">
                    {property.description}
                  </p>
                  <p className="text-sm font-light dark:font-thin">
                    Handover date: {property.handover}
                  </p>
                  <div className="mt-4 flex gap-4">
                    <a href="/contact">
                      <button className="border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-gradient-to-r from-[#C29579] via-[#e3c5b5] to-[#C29579] font-light hover:text-black px-6 py-2">
                        Explore now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6 px-2 sm:px-6 text-black dark:text-white text-sm font-light">
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className="flex items-center gap-2  disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
            PREV
          </button>
          <span className="text-black dark:text-white">
            {index + 1} / {properties.length}
          </span>
          <button
            onClick={handleNext}
            disabled={index + 1 >= properties.length}
            className="flex items-center gap-2  disabled:opacity-30 disabled:cursor-not-allowed"
          >
            NEXT
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Exclusives;
