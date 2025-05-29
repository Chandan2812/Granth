import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const PromptConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://mondus-backend.onrender.com/api/prompt",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Form submitted successfully!");
        setFormData({ name: "", phone: "", email: "" }); // Reset
      } else {
        setMessage("❌ " + (data.error || "Something went wrong."));
      }
    } catch (err) {
      console.error("Submission error:", err);
      setMessage("❌ Failed to submit. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4 py-10 flex justify-center bg-white dark:bg-black text-black dark:text-white font-raleway transition-colors duration-300">
      <div className="w-full md:w-[83%] bg-gradient-to-r from-[var(--primary-color)] via-gray-900 to-[var(--primary-color)] p-[1px] bg-center">
        <div className="bg-white dark:bg-black px-8 py-10 sm:px-16 sm:py-14 transition-colors duration-300">
          <h2 className="text-center text-xl md:text-3xl tracking-wide font-light mb-2">
            PROMPTLY AT YOUR SERVICE
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-10">
            Fill form below and our agent will contact you shortly
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-b border-gray-400 dark:border-gray-500 outline-none px-2 py-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-b border-gray-400 dark:border-gray-500 outline-none px-2 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your E-Mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-b border-gray-400 dark:border-gray-500 outline-none px-2 py-2"
            />
            <button
              type="submit"
              disabled={loading}
              className="border border-[var(--primary-color)] text-[var(--primary-color)] px-4 py-2 uppercase text-sm tracking-widest hover:bg-gradient-to-r from-[#C29579] via-[#e3c5b5] to-[#C29579] hover:text-black transition"
            >
              {loading ? "Sending..." : "SEND"}
            </button>
          </form>

          {message && (
            <p className="text-center text-sm text-green-600 dark:text-green-400 mb-4">
              {message}
            </p>
          )}

          <p className="text-center text-md text-gray-600 dark:text-gray-400">
            Or contact us right now via{" "}
            <a
              href="https://wa.me/971521110795"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary-color)] inline-flex items-center gap-1 hover:underline"
            >
              <FaWhatsapp size={20} /> WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromptConsultation;
