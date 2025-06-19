import { useEffect, useState } from "react";
import hero from "../assets/milin-john-aQV-nqJpq7g-unsplash.jpg";
import hero2 from "../assets/sell.jpg";

import hero3 from "../assets/sumit-sourav-eSRtxPd9q1c-unsplash.jpg";
import "../index.css";

export default function Hero() {
  const images = [hero, hero2, hero3];
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91", // default
  });
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1 = enter details, 2 = enter OTP
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setIsAnimating(false);
      }, 2000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!isValidEmail(formData.email)) {
      setMessage("❌ Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://granth-backend.onrender.com/api/send-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setStep(2);
        setMessage("✅ OTP sent to your email.");
      } else {
        setMessage(`❌ ${data.error || "Failed to send OTP."}`);
      }
    } catch (err) {
      setMessage("❌ An error occurred while sending OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://granth-backend.onrender.com/api/verify-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            phone: formData.countryCode + formData.phone, // include full phone
            otp,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        // ✅ Store form data in sessionStorage on successful submission
        sessionStorage.setItem("formData", JSON.stringify(formData));

        setMessage("✅ OTP verified. Form submitted successfully.");
        setFormData({ name: "", email: "", phone: "", countryCode: "" });
        setOtp("");
        setStep(1);
      } else {
        setMessage(`❌ ${data.error || "OTP verification failed."}`);
      }
    } catch (err) {
      setMessage("❌ An error occurred while verifying OTP.");
    } finally {
      setLoading(false);
    }
  };

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
          <img
            src={images[next]}
            alt="current"
            className="w-full h-full object-cover flex-shrink-0"
            draggable="false"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      </div>

      {/* Left Content */}
      <div className="font-raleway font-light relative z-10 w-full sm:w-1/2 lg:w-2/5 px-4 sm:px-6 md:px-10 mb-8 lg:mb-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl leading-snug mb-6 uppercase">
          Find Your Perfect Home or Invest in Goa with <br />
          <span className="text-3xl sm:text-4xl md:text-5xl text-[var(--primary-color)] font-semibold">
            Granth Dream homes
          </span>
        </h1>
        <p className="text-base sm:text-lg mb-8 text-white/80">
          Your most <span className="font-semibold"> Trusted & Reliable </span>{" "}
          Real Estate Partner
        </p>
      </div>

      {/* Right Form */}
      <div className="relative w-full sm:w-11/12 lg:w-[420px] bg-transparent p-8 shadow-xl backdrop-blur-md space-y-6 mt-5 font-raleway font-light transition-colors">
        <form
          onSubmit={step === 1 ? handleSendOtp : handleVerifyOtp}
          className="space-y-4"
        >
          {step === 1 && (
            <>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  className="w-full bg-transparent backdrop-blur-sm p-3 text-black dark:text-white border border-gray-300 dark:border-gray-700"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  Phone Number
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) =>
                      setFormData({ ...formData, countryCode: e.target.value })
                    }
                    className="w-full sm:w-auto bg-black p-3 border border-gray-300 dark:border-gray-700"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+39">🇮🇹 +39</option>
                    <option value="+86">🇨🇳 +86</option>
                    <option value="+82">🇰🇷 +82</option>
                    <option value="+7">🇷🇺 +7</option>
                    <option value="+34">🇪🇸 +34</option>
                    <option value="+351">🇵🇹 +351</option>
                    <option value="+90">🇹🇷 +90</option>
                    <option value="+62">🇮🇩 +62</option>
                    <option value="+63">🇵🇭 +63</option>
                    <option value="+92">🇵🇰 +92</option>
                    <option value="+880">🇧🇩 +880</option>
                    <option value="+212">🇲🇦 +212</option>
                    <option value="+20">🇪🇬 +20</option>
                    <option value="+27">🇿🇦 +27</option>
                    <option value="+254">🇰🇪 +254</option>
                    <option value="+55">🇧🇷 +55</option>
                    <option value="+52">🇲🇽 +52</option>
                    <option value="+48">🇵🇱 +48</option>
                    <option value="+31">🇳🇱 +31</option>
                    <option value="+46">🇸🇪 +46</option>
                    <option value="+47">🇳🇴 +47</option>
                    <option value="+45">🇩🇰 +45</option>
                  </select>

                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="^[0-9]{7,15}$"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) {
                        setFormData({ ...formData, phone: value });
                      }
                    }}
                    className="w-full bg-transparent backdrop-blur-sm p-3 text-black dark:text-white border border-gray-300 dark:border-gray-700"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  className="w-full bg-transparent backdrop-blur-sm p-3 text-black dark:text-white border border-gray-300 dark:border-gray-700"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </>
          )}

          {step === 2 && (
            <div>
              <label className="text-sm mb-1 block text-gray-300">
                Enter OTP
              </label>
              <input
                type="text"
                placeholder="Enter the OTP sent to your email"
                value={otp}
                className="w-full bg-transparent backdrop-blur-sm p-3 text-white border border-gray-300 dark:border-gray-700"
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full font-light bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] text-black py-3 hover:opacity-90 transition"
          >
            {loading
              ? "Please wait..."
              : step === 1
              ? "Send OTP"
              : "Verify OTP & Submit"}
          </button>

          {message && <p className="text-sm mt-2">{message}</p>}
        </form>
      </div>
    </div>
  );
}
