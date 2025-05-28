import React from "react";
import about from "../assets/about.png";

const About: React.FC = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white  transition-colors font-raleway">
      <div className="w-11/12 mx-auto grid md:grid-cols-3 gap-4 md:gap-8 items-center p-4 md:p-16">
        {/* Image section (1/3 for desktop) */}
        <div className="relative w-full md:col-span-1 flex justify-center">
          <img
            src={about}
            alt="Real Estate Experts"
            className="w-full" // Adjust image width for desktop
            draggable="false"
          />
        </div>

        {/* Text section (2/3 for desktop) */}
        <div className="mt-8 md:mt-0 md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Welcome to Granth Dream Homes
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            After making a mark in Dubai’s real estate landscape with over $1B
            in sales, we bring our expertise, integrity, and excellence to
            India. Granth Dream Homes LLP is here to redefine the real estate
            experience in Goa, offering unparalleled investment opportunities in
            one of India’s most promising destinations. Whether you seek a dream
            home or a smart investment, we make it happen with absolute
            transparency and commitment to quality.
          </p>
          <a href="/contact">
            <button className="border px-6 py-3 transition mb-8 border-[var(--primary-color)] text-[var(--primary-color)] btn-gradient-hover">
              Enquire now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
