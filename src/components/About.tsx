import React from "react";
import about from "../assets/about.png";

const About: React.FC = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition-colors font-raleway ">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-between p-4 md:px-6 md:py-16 gap-6">
        {/* Image section */}
        <div className="w-full md:w-1/2 flex justify-center items-center md:max-h-[500px] overflow-hidden ">
          <img
            src={about}
            alt="Real Estate Experts"
            className="w-full h-auto  object-contain"
            draggable="false"
          />
        </div>

        {/* Text section */}
        <div className="w-full md:w-1/2 flex flex-col bg-white dark:bg-black p-4 md:p-8 shadow-lg ">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Welcome to Granth Dream Homes
            </h2>
            <h3 className="text-xl font-medium mb-6 text-[var(--primary-color)]">
              Your Gateway to Luxurious Living in Goa
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              After making a mark in Dubai’s real estate landscape with over $1B
              in sales, we bring our expertise, integrity, and excellence to
              India. Granth Dream Homes LLP is here to redefine the real estate
              experience in Goa, offering unparalleled investment opportunities
              in one of India’s most promising destinations. Whether you seek a
              dream home or a smart investment, we make it happen with absolute
              transparency and commitment to quality.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Join us in creating a legacy where luxury meets lifestyle, and
              every home tells a story of trust and excellence.
            </p>
          </div>
          <a href="/contact">
            <button className="w-fit border px-6 py-3 transition border-[var(--primary-color)] text-black bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] hover:opacity-80 mt-auto">
              Enquire now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
