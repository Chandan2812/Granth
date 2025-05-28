import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import goa from "../assets/Untitled (784 x 994 px).png";

const properties = [
  {
    image: goa,
    title: "Marina Living",
    location: "Goa",
    design: "Designed in the style of American resorts of Miami",
    interiorDetails: [
      "Designer Furnishings – Fully Furnished Living, Dining & Bedrooms",
      "Modular Kitchen",
      "Designer Tiles for Bathrooms",
      "Door Access Control System",
      "Artefacts & Furnishings",
    ],
    featuresAmenities: [
      "Infinity Pool",
      "Fully Equipped Gym",
      "24/7 Security",
      "Covered Parking",
      "Kids Play Area",
    ],
    nearby: {
      restaurants: [
        "The Fisherman's Wharf",
        "Olive Bar & Kitchen",
        "Cafe Alchemia",
      ],
      utilities: [
        "Hospital – Healthway Hospital",
        "Supermarket – Big Bazaar",
        "Pharmacy – Apollo",
      ],
    },
  },
  {
    image: "https://fnst.axflare.com/community/WEBP/uYHqVeSOBZ.webp",
    title: "Ocean Breeze Residences",
    location: "Goa",
    design: "Modern tropical style with eco-friendly materials",
    interiorDetails: [
      "Spacious Balconies with Ocean View",
      "Smart Home Automation",
      "Italian Marble Flooring",
      "Energy Efficient Lighting",
      "Custom Kitchen Cabinets",
    ],
    featuresAmenities: [
      "Rooftop Infinity Pool",
      "Yoga and Meditation Deck",
      "Children’s Play Zone",
      "24/7 CCTV Surveillance",
      "Dedicated Visitor Parking",
    ],
    nearby: {
      restaurants: ["Viva Panjim", "Bomra's", "Mum’s Kitchen"],
      utilities: [
        "Airport – Goa International Airport",
        "Mall – Mall De Goa",
        "Clinic – Dr. Paulo’s Clinic",
      ],
    },
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

  const offset = index * 100;

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
                <div className="w-full md:w-1/2 p-6 flex flex-col gap-6 font-raleway font-thin">
                  {/* Interior Details */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 border-b pb-1 border-gray-300 dark:border-gray-700">
                      Interior Highlights
                    </h4>
                    <ul className="list-disc list-inside text-sm space-y-1 font-light dark:font-thin">
                      {property.interiorDetails.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Features & Amenities */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 border-b pb-1 border-gray-300 dark:border-gray-700">
                      Features & Amenities
                    </h4>
                    <ul className="list-disc list-inside text-sm space-y-1 font-light dark:font-thin">
                      {property.featuresAmenities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Nearby Places */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 border-b pb-1 border-gray-300 dark:border-gray-700">
                      Nearby Places
                    </h4>
                    <div className="text-sm mb-2">
                      <strong className="block mb-1 text-[var(--primary-color)]">
                        Restaurants:
                      </strong>
                      <div className="flex flex-wrap gap-2">
                        {property.nearby.restaurants.map((place, i) => (
                          <span
                            key={i}
                            className="bg-gray-200 dark:bg-[#333] text-xs px-3 py-1 rounded-full"
                          >
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm">
                      <strong className="block mb-1 text-[var(--primary-color)]">
                        Utilities:
                      </strong>
                      <div className="flex flex-wrap gap-2">
                        {property.nearby.utilities.map((place, i) => (
                          <span
                            key={i}
                            className="bg-gray-200 dark:bg-[#333] text-xs px-3 py-1 rounded-full"
                          >
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a href="/goa">
                      <button className="border border-[var(--primary-color)] text-black bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] hover:opacity-80 transition-all font-medium px-6 py-2 ">
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
