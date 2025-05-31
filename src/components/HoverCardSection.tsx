// components/HoverCardSection.tsx
import React from "react";

type Section = {
  title: string;
  image: string;
  content: string;
};

const sections: Section[] = [
  {
    title: "Quality",
    image: "https://www.rivieragoa.com/wp-content/uploads/2021/06/quality.jpg",
    content: `At Granth Dream Homes, quality is the cornerstone of everything we build. From hand-picking premium locations in Goa to adopting meticulous construction practices and sourcing the finest materials, we never compromise. Every home we deliver is crafted with precision and built to stand the test of time.`,
  },
  {
    title: "Locations",
    image:
      "https://www.rivieragoa.com/wp-content/uploads/2021/06/locations.jpg",
    content: `Our portfolio spans some of Goa’s most sought-after neighborhoods—from tranquil inland retreats to vibrant beachside locales. We carefully curate each project location to ensure it offers a perfect blend of lifestyle, convenience, and long-term value.`,
  },
  {
    title: "Sustainability",
    image:
      "https://www.rivieragoa.com/wp-content/uploads/2021/06/sustainability-home-page.jpg",
    content: `We believe in responsible development. Our projects integrate eco-conscious features such as rainwater harvesting, solar power systems, energy-efficient lighting, and waste management solutions—ensuring a sustainable living experience for you and a lighter footprint on Goa’s beautiful environment.`,
  },
  {
    title: "Timeless",
    image: "https://www.rivieragoa.com/wp-content/uploads/2021/07/ttt-1.jpg",
    content: `Homes by Granth Dream Homes are designed to remain timeless. We focus on classic architectural aesthetics, enduring materials, and thoughtful layouts that stay relevant for generations—enhancing not just your lifestyle but the entire neighborhood.`,
  },
  {
    title: "Relationships",
    image: "https://www.rivieragoa.com/wp-content/uploads/2021/07/ttt.jpg",
    content: `At Granth Dream Homes, we prioritize relationships just as much as real estate. Whether you're buying your first home, investing in a vacation villa, or exploring Goa for a retirement destination—we're with you at every step, offering transparent advice, reliable support, and a long-term commitment.`,
  },
];

const HoverCardSection: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-12 hidden md:block">
      {/* Section Heading */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl md:text-4xl font-light mb-4 text-black dark:text-white font-raleway">
          What Defines Granth Dream Homes
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          We build homes that reflect the spirit of Goa and the values of
          lasting quality.
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap w-full text-white">
        {sections.map((section, index) => (
          <div
            key={index}
            className="group relative w-full md:w-1/2 lg:flex-1 h-[300px] md:h-[400px] overflow-hidden transition-all duration-500 cursor-pointer border border-gray-300 dark:border-gray-800"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-center bg-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundImage: `url(${section.image})` }}
            />

            {/* Content Overlay */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-between items-start dark:bg-black bg-opacity-80 group-hover:bg-opacity-50 transition-colors duration-500">
              <h2 className="text-2xl md:text-3xl font-serif text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                {section.title}
              </h2>
              {section.content && (
                <p className="mt-4 text-sm text-white max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {section.content}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverCardSection;
