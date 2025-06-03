import React, { useState, useEffect } from "react";
import brochurePDF from "../assets/brochure.pdf";

interface Props {
  onClose: () => void;
}

const DownloadBrochureForm: React.FC<Props> = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [infoMsg, setInfoMsg] = useState("");
  const [countryCode, setCountryCode] = useState("+91"); // Default India

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = brochurePDF;
    link.download = "Brochure_Granth.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
  };

  useEffect(() => {
    const savedUser = sessionStorage.getItem("formData");
    if (savedUser) {
      downloadBrochure();
    }
  }, []);

  const handleInitialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setInfoMsg("");

    const { name, email, phone } = formData;

    if (!name || !email || !phone) {
      setErrorMsg("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMsg("Invalid email format.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "https://granth-backend.onrender.com/api/send-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();

      if (res.ok) {
        setStep(2);
        setInfoMsg("OTP sent to your email.");
      } else {
        setErrorMsg(data.error || "Failed to send OTP.");
      }
    } catch (err) {
      setErrorMsg("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setInfoMsg("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://granth-backend.onrender.com/api/verify-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            phone: `${countryCode}${formData.phone}`,
            otp,
          }),
        }
      );
      const data = await res.json();

      if (res.ok) {
        sessionStorage.setItem("formData", JSON.stringify(formData));
        downloadBrochure();
      } else {
        setErrorMsg(data.error || "OTP verification failed.");
      }
    } catch (err) {
      setErrorMsg("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-white dark:bg-black text-black dark:text-white rounded-lg w-full max-w-md p-6 shadow-xl transition-colors">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-black dark:text-white hover:opacity-70 text-xl"
        aria-label="Close"
      >
        ✕
      </button>

      <h3 className="text-xl font-semibold mb-4 text-center">
        Get the Brochure
      </h3>

      {errorMsg && (
        <p className="text-sm text-red-500 text-center mb-2">{errorMsg}</p>
      )}
      {infoMsg && (
        <p className="text-sm text-green-600 text-center mb-2">{infoMsg}</p>
      )}

      {step === 1 ? (
        <form onSubmit={handleInitialSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-black dark:text-white rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-black dark:text-white rounded"
          />
          <div className="flex gap-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-1/3 p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-black dark:text-white rounded"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+971">🇦🇪 +971</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              {/* Add more countries as needed */}
            </select>

            <input
              type="tel"
              inputMode="numeric"
              pattern="^[0-9]{7,15}$"
              placeholder="Enter your phone"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value;
                // Allow only digits
                if (/^\d*$/.test(value)) {
                  setFormData({ ...formData, phone: value });
                }
              }}
              className="flex-1 bg-transparent backdrop-blur-sm p-3 text-black dark:text-white border border-gray-300 dark:border-gray-700"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-[var(--primary-color)] text-white hover:opacity-90 rounded"
          >
            {loading ? "Sending OTP..." : "Submit"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-black dark:text-white rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-[var(--primary-color)] text-white hover:opacity-90 rounded"
          >
            {loading ? "Verifying OTP..." : "Verify & Download"}
          </button>
        </form>
      )}
    </div>
  );
};

export default DownloadBrochureForm;
