import React, { useState } from "react";
import brochurePDF from "../assets/brochure.pdf";

interface Props {
  onClose: () => void;
}

const DownloadBrochureForm: React.FC<Props> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

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

      if (response.status === 200 || response.status === 409) {
        // ✅ Both new and existing users allowed to download

        onClose();

        const link = document.createElement("a");
        link.href = brochurePDF;
        link.download = "Brochure_Granth.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        throw new Error(data.error || "Submission failed.");
      }
    } catch (error: any) {
      setErrorMsg(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
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
          className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 text-black dark:text-white rounded"
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

        {errorMsg && (
          <p className="text-sm text-red-500 text-center">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-[var(--primary-color)] text-white hover:opacity-90 rounded"
        >
          {loading ? "Submitting..." : "Submit & Download"}
        </button>
      </form>
    </div>
  );
};

export default DownloadBrochureForm;
