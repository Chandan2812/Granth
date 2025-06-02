import React, { useState } from "react";
import contactImg from "../assets/popup.jpg";

const EnquireNowForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    const { name, email, phone } = formData;

    if (!name || !email || !phone) {
      setResponseMsg("❌ Name, Email, and Phone are required.");
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setResponseMsg("❌ Please enter a valid email.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        "https://granth-backend.onrender.com/api/send-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone }),
        }
      );
      const data = await res.json();

      if (res.ok) {
        setResponseMsg("✅ OTP sent to your email.");
        setStep(2);
      } else {
        setResponseMsg(`❌ ${data.error || "Failed to send OTP."}`);
      }
    } catch (err) {
      setResponseMsg("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch("http://localhost:8000/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, otp }),
      });
      const data = await res.json();

      if (res.ok) {
        // ✅ Store in sessionStorage
        sessionStorage.setItem("formData", JSON.stringify(formData));

        setResponseMsg("✅ OTP verified. Form submitted successfully.");
        setFormData({ name: "", email: "", phone: "" });
        setOtp("");
        setStep(1);
      } else {
        setResponseMsg(`❌ ${data.error || "OTP verification failed."}`);
      }
    } catch (err) {
      setResponseMsg("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto bg-white dark:bg-[#121212] text-black dark:text-white rounded-xl shadow-lg overflow-hidden font-raleway">
      {/* Left Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={contactImg}
          alt="Contact"
          className="w-full h-[520px] object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 p-6 md:p-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
          Get Your Dream Home
        </h2>

        <form
          onSubmit={step === 1 ? handleSendOtp : handleVerifyOtp}
          className="space-y-4"
        >
          {step === 1 ? (
            <>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1f1f1f] text-black dark:text-white"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1f1f1f] text-black dark:text-white"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1f1f1f] text-black dark:text-white"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </>
          ) : (
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1f1f1f] text-black dark:text-white"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] text-black font-semibold hover:opacity-90 transition"
          >
            {loading ? "Processing..." : step === 1 ? "Send OTP" : "Verify OTP"}
          </button>

          {responseMsg && (
            <p className="text-sm mt-2 text-center">{responseMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default EnquireNowForm;
