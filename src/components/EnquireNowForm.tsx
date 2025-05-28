import React from "react";
import contactImg from "../assets/hero.png"; // Replace with your image path

const EnquireNowForm: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto bg-white dark:bg-[#121212] text-black dark:text-white rounded-xl shadow-lg overflow-hidden font-raleway">
      {/* Left Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={contactImg}
          alt="Contact"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 p-6 md:p-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
          Get Your Dream Home
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1f1f1f] text-black dark:text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1f1f1f] text-black dark:text-white"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1f1f1f] text-black dark:text-white"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1f1f1f] text-black dark:text-white"
          />
          <button
            type="submit"
            className="w-full py-3 rounded bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] text-black font-semibold hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquireNowForm;
