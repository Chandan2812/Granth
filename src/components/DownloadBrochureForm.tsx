// src/components/DownloadBrochureForm.tsx
import React, { useState } from "react";
import brochurePDF from "../assets/brochure.pdf"; // ✅ Import the PDF

interface Props {
  onClose: () => void;
}

const DownloadBrochureForm: React.FC<Props> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onClose(); // Close popup

    // Trigger brochure download
    const link = document.createElement("a");
    link.href = brochurePDF;
    link.download = "Brochure_Granth.pdf";
    document.body.appendChild(link); // Required for some browsers like Firefox
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative bg-white dark:bg-black text-black dark:text-white rounded-lg w-full max-w-md p-6 shadow-xl transition-colors">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 z-10 text-black dark:text-white hover:opacity-70"
      >
        ✕
      </button>
      <h3 className="text-xl font-semibold mb-4">Get the Brochure</h3>
      <form onSubmit={handleDownloadSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border  border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-black dark:text-white rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-black dark:text-white rounded"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          required
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-black dark:text-white rounded"
        />
        <button
          type="submit"
          className="w-full py-2 bg-[var(--primary-color)] text-white hover:opacity-90 rounded"
        >
          Submit & Download
        </button>
      </form>
    </div>
  );
};

export default DownloadBrochureForm;
