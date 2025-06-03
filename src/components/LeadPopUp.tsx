// src/components/LeadPopupForm.tsx
import React, { useEffect, useState } from "react";
import EnquireNowForm from "./EnquireNowForm";

const LeadPopupForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const shown = sessionStorage.getItem("leadPopupShown");
    if (!shown) {
      setTimeout(() => setIsOpen(true), 15000); // Optional delay
      sessionStorage.setItem("leadPopupShown", "true");
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "auto"; // Restore scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 z-10 text-white bg-black bg-opacity-50 hover:bg-opacity-75 px-3 py-1 rounded-full"
        >
          ✕
        </button>
        <EnquireNowForm />
      </div>
    </div>
  );
};

export default LeadPopupForm;
