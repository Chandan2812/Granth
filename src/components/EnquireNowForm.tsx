import React from "react";
import contactImg from "../assets/popup.jpg"; // Replace with your image path
import { useState } from "react";

const EnquireNowForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      setResponseMsg("❌ Name, Email, and Phone are required.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        "https://granth-backend.onrender.com/api/enquiry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone, message }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        setResponseMsg("✅" + data.message);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setResponseMsg(`❌ ${data.error || "Submission failed."}`);
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1f1f1f] text-black dark:text-white"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1f1f1f] text-black dark:text-white"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] text-black font-semibold hover:opacity-90 transition"
          >
            {loading ? "Submitting..." : "Submit"}
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
