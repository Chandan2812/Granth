import { useState } from "react";
import hero from "../assets/react.svg";
import "../index.css";

export default function Hero() {
  const [selectedCurrency, setSelectedCurrency] = useState<
    "GBP" | "CNY" | "EUR" | "AED" | "USD"
  >("AED");
  const [minPrice, setMinPrice] = useState(40000);
  const [maxPrice, setMaxPrice] = useState(150000000);

  // Currency conversion rates for demo purposes
  const conversionRates: {
    [key in "GBP" | "CNY" | "EUR" | "AED" | "USD"]: number;
  } = {
    GBP: 0.22,
    CNY: 1.56,
    EUR: 0.92,
    AED: 1,
    USD: 0.27,
  };

  const handleCurrencyChange = (
    currency: "GBP" | "CNY" | "EUR" | "AED" | "USD"
  ) => {
    setSelectedCurrency(currency);
    const conversionRate = conversionRates[currency];
    setMinPrice(40000 * conversionRate);
    setMaxPrice(150000000 * conversionRate);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col pt-28 pb-10 md:pt-5 lg:flex-row items-center justify-between px-6 sm:px-10 relative overflow-hidden dark:bg-black dark:text-white">
      {/* Background Image */}
      <img
        src={hero}
        alt="Dubai Tower"
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
        style={{ background: "var(--bg-primary-gradient)" }}
        draggable="false"
      />

      {/* Left Content */}
      <div className="font-raleway font-thin relative z-10 w-full sm:w-1/2 lg:w-1/3 px-4 sm:px-6 md:px-10 mb-8 lg:mb-0">
        <h1 className="text-3xl sm:text-4xl leading-snug mb-6">
          INVEST IN DUBAI REAL <br /> ESTATE WITH MONDUS
        </h1>
        <p className="text-lg mb-8 text-white/80">
          We bring <span className="font-semibold">Due Diligence</span> at Your
          service
        </p>
      </div>

      {/* Right Form */}
      <div className="relative z-10 w-full sm:w-11/12 lg:w-[420px] bg-[#121212]/90 p-8 rounded-2xl shadow-xl border border-[#333] backdrop-blur-md space-y-6 mt-5">
        {/* Dropdowns */}
        <div className="space-y-4 font-raleway font-thin">
          <div>
            <label className="text-sm mb-1 block">Property Type</label>
            <select className="w-full bg-[#1f1f1f] p-3 rounded text-white border border-gray-700">
              <option>Villa</option>
              <option>Apartment</option>
              <option>Townhouse</option>
              <option>Studio</option>
              <option>Penthouse</option>
            </select>
          </div>
          <div>
            <label className="text-sm mb-1 block">Bedrooms</label>
            <select className="w-full bg-[#1f1f1f] p-3 rounded text-white border border-gray-700">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>
          </div>
        </div>

        {/* Currency Selector */}
        <div>
          <label className="text-sm mb-2 block font-raleway font-thin">
            Currency
          </label>
          <div className="flex flex-wrap gap-2 text-sm font-raleway font-thin">
            {["AED", "USD", "EUR", "GBP", "CNY"].map((cur) => (
              <span
                key={cur}
                onClick={() => handleCurrencyChange(cur as any)}
                className={`px-3 py-1 rounded-full border text-white/70 cursor-pointer ${
                  selectedCurrency === cur
                    ? "bg-[var(--primary-color)] text-black font-semibold"
                    : "border-gray-600 hover:border-white"
                }`}
              >
                {cur}
              </span>
            ))}
          </div>
        </div>

        {/* Price Inputs */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm mb-1 block font-raleway font-thin">
              Min Price ({selectedCurrency})
            </label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-full bg-[#1f1f1f] p-3 rounded text-white border border-gray-700"
            />
          </div>
          <div>
            <label className="text-sm mb-1 block font-raleway font-thin">
              Max Price ({selectedCurrency})
            </label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full bg-[#1f1f1f] p-3 rounded text-white border border-gray-700"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full font-raleway font-light bg-gradient-to-r from-[#C29579] via-[#e3c5b5] to-[#C29579] text-black py-3 rounded-lg  hover:opacity-90 transition">
          Show 100+ Projects
        </button>
      </div>
    </div>
  );
}
