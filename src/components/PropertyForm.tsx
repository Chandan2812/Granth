import React, { useState } from "react";

type Props = {
  onClose: () => void;
};

const PropertyForm: React.FC<Props> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bedrooms: "",
    size: "",
    message: "",
    titleDeed: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target;

    const name = target.name;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submission:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-5">
      <div className="bg-white w-full max-w-xl p-8 rounded-lg relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-800 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6 text-[#0a1f44]">
          Property Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Your Name *"
            className="w-full border p-3 rounded"
            required
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email Address *"
            className="w-full border p-3 rounded"
            required
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Your Phone Number *"
            className="w-full border p-3 rounded"
            required
            onChange={handleChange}
          />
          <input
            name="address"
            placeholder="Your Property Address *"
            className="w-full border p-3 rounded"
            required
            onChange={handleChange}
          />

          <div className="flex gap-4">
            <select
              name="bedrooms"
              className="w-1/2 border p-3 rounded"
              required
              onChange={handleChange}
            >
              <option value="">Bedrooms *</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4+">4+ Bedrooms</option>
            </select>
            <input
              name="size"
              placeholder="Size *"
              className="w-1/2 border p-3 rounded"
              required
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Leave your message"
            className="w-full border p-3 rounded"
            rows={4}
            required
            onChange={handleChange}
          />

          <div className="flex items-center gap-2">
            <input type="checkbox" name="titleDeed" onChange={handleChange} />
            <label htmlFor="titleDeed" className="text-sm text-gray-700">
              Do you have a title deed?
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-6 py-3 rounded shadow-md transition-all duration-200"
          >
            Send Message
          </button>

          <p className="text-xs text-gray-600 mt-2">
            By clicking Submit, you agree to our{" "}
            <a href="#" className="underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default PropertyForm;
