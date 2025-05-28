import hero from "../assets/hero.png";
import "../index.css";

export default function Hero() {
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
          INVEST IN DUBAI REAL <br /> ESTATE WITH GRANTH
        </h1>
        <p className="text-lg mb-8 text-white/80">
          We bring <span className="font-semibold">Due Diligence</span> at Your
          service
        </p>
      </div>

      {/* Right Form */}
      {/* Lead Generation Form */}
      <div className="relative z-10 w-full sm:w-11/12 lg:w-[420px] bg-[#121212]/90 p-8 rounded-2xl shadow-xl border border-[#333] backdrop-blur-md space-y-6 mt-5 font-raleway font-thin">
        {/* User Details */}
        <div className="space-y-4">
          <div>
            <label className="text-sm mb-1 block">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-[#1f1f1f] p-3 rounded text-white border border-gray-700"
            />
          </div>
          <div>
            <label className="text-sm mb-1 block">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#1f1f1f] p-3 rounded text-white border border-gray-700"
            />
          </div>
          <div>
            <label className="text-sm mb-1 block">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone"
              className="w-full bg-[#1f1f1f] p-3 rounded text-white border border-gray-700"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full font-light bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] text-black py-3 rounded-lg hover:opacity-90 transition">
          Submit Interest
        </button>
      </div>
    </div>
  );
}
