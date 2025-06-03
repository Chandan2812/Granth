import React from "react";
import { Building2, Handshake, School } from "lucide-react"; // Lucide icons (or use any icon set)
import { MdVilla } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";

type Service = {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: <FaMapMarkedAlt size={32} className="text-[var(--primary-color)]" />,
    label: "Plots",
    title: "Prime Plots in GOA both Residential or Commercial",
    description:
      "Secure your slice of paradise with clear-title land in top Goa locations.",
  },
  {
    icon: <Building2 size={32} className="text-[var(--primary-color)]" />,
    label: "Apartments",
    title: "Modern Apartments for Living or High Rentals",
    description:
      "Comprehensive help with shortlisting, inspecting, and negotiating your apartment deals.",
  },
  {
    icon: <MdVilla size={32} className="text-[var(--primary-color)]" />,
    label: "Villas",
    title: "Luxury Villas in Prime Locations of Goa",
    description:
      "Expert support in planning, customizing, and acquiring your dream villa.",
  },
  {
    icon: <Handshake size={32} className="text-[var(--primary-color)]" />,
    label: "Property Management",
    title: "End to End Property Management",
    description:
      "From maintenance to rentals, we manage your property for you so you can be stress-free.",
  },
  {
    icon: <School size={32} className="text-[var(--primary-color)]" />,
    label: "Investment Advisory",
    title: "Residential or Commercial Investment Advisory",
    description:
      "Get expert guidance on high-yield investment opportunities in Goa.",
  },
];

const WhatWeDoSection: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway">
      <section className="max-w-7xl px-6 py-16 mx-auto">
        <div className="mb-6">
          <p className="text-sm tracking-wider text-[var(--primary-color)] font-semibold uppercase">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-black dark:text-gray-100">
            We Help You Find and Buy Your Dream Home OR Investment Property.
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-5 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-gray-100 dark:bg-neutral-900 border border-white/10 dark:border-gray-800 hover:shadow-xl rounded-xl p-6 transition duration-300 flex flex-col space-y-4 md:space-y-6 hover:scale-[1.02]"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">{service.icon}</div>
                <h3 className="text-base font-semibold">{service.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoSection;
