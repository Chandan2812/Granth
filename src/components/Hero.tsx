import { useEffect, useState } from "react";
import hero from "../assets/milin-john-aQV-nqJpq7g-unsplash.jpg";
import hero2 from "../assets/sell.jpg";
import "../index.css";

export default function Hero() {
  const images = [hero, hero2];
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://granth-backend.onrender.com/api/prompt",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMessage("✅" + data.message);
        setFormData({ name: "", email: "", phone: "" });
      } else {
        setMessage(`❌ ${data.error || "Submission failed."}`);
      }
    } catch (err) {
      setMessage("❌ An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setIsAnimating(false);
      }, 1000); // match duration below
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const next = (current + 1) % images.length;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col pt-28 pb-10 md:pt-5 lg:flex-row items-center justify-between px-6 sm:px-10 relative overflow-hidden dark:bg-black dark:text-white">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <div
          className="w-full h-full flex"
          style={{
            transform: `translateX(${isAnimating ? "-100%" : "0%"})`,
            transition: isAnimating ? "transform 1s ease-in-out" : "none",
          }}
        >
          <img
            src={images[current]}
            alt="current"
            className="w-full h-full object-cover flex-shrink-0"
            draggable="false"
          />
          <img
            src={images[next]}
            alt="next"
            className="w-full h-full object-cover flex-shrink-0"
            draggable="false"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      </div>

      {/* Left Content */}
      <div className="font-raleway font-light relative z-10 w-full sm:w-1/2 lg:w-2/5 px-4 sm:px-6 md:px-10 mb-8 lg:mb-0">
        <h1 className="text-3xl leading-snug mb-6">
          Find Your Perfect Home or Invest Smartly in Goa with <br />
          <span className="text-[var(--primary-color)] text-4xl font-semibold">
            Granth Properties
          </span>
        </h1>
        <p className="text-lg mb-8 text-white/80">
          Your most
          <span className="font-semibold"> Trusted & Reliable </span> Real
          Estate Partner
        </p>
      </div>

      {/* Right Form */}
      <div className="relative z-10 w-full sm:w-11/12 lg:w-[420px] bg-transparent p-8 shadow-xl backdrop-blur-md space-y-6 mt-5 font-raleway font-light transition-colors">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm mb-1 block text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              className="w-full bg-transparent backdrop-blur-sm p-3 text-black dark:text-white border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-500"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="text-sm mb-1 block text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent backdrop-blur-sm p-3 text-black dark:text-white border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="text-sm mb-1 block text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone"
              className="w-full bg-transparent backdrop-blur-sm p-3 text-black dark:text-white border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-500"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full font-light bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] text-black dark:text-white py-3 hover:opacity-90 transition"
          >
            {loading ? "Submitting..." : "Submit Interest"}
          </button>
          {message && <p className="text-sm mt-2">{message}</p>}
        </form>
      </div>
    </div>
  );
}
