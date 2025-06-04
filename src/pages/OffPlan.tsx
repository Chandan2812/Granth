import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Projects } from "../data/UpcomingProjects";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import PromptConsultation from "../components/PromptConsultation";

export const OffPlan: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Navbar />
      <div className="bg-white dark:bg-black text-black dark:text-white px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-light mb-10 text-center text-black dark:text-white pt-10">
            Our Exclusive Property
          </h2>

          {/* Grid of project cards */}
          <div className="flex flex-col gap-12">
            {Projects.map((project) => {
              const {
                id,
                name,
                bannerImages,
                description,
                featuresAndAmenities,
                projectHighlights,
              } = project;
              const highlights = featuresAndAmenities.slice(0, 4);

              return (
                <div
                  key={id}
                  className="flex flex-col md:flex-row bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100 dark:border-neutral-700 group"
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2 h-[350px] overflow-hidden">
                    <img
                      src={bannerImages[1]}
                      alt={name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between md:w-1/2">
                    <div>
                      <h3 className="text-2xl font-bold capitalize text-neutral-900 dark:text-white mb-1">
                        {name}
                      </h3>

                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {projectHighlights[0]?.place}
                      </p>

                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                        {description}
                      </p>

                      {/* Feature Badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {highlights.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200"
                          >
                            {feature.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => navigate(`/offplan/${id}`)}
                      className="mt-4 self-start px-5 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] text-black hover:brightness-110 transition"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <PromptConsultation />
      <Footer />
    </div>
  );
};
