import React from "react";
import { useNavigate } from "react-router-dom";
import { projectPageData } from "../data/PropertyData";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import PromptConsultation from "../components/PromptConsultation";

const projectKeys = Object.keys(projectPageData) as (
  | "sawantwadi"
  | "baliHeights"
)[];

export const OffPlan: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (key: string) => {
    navigate(`/projects/${key}`);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white dark:bg-black text-black dark:text-white px-4 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projectKeys.map((key) => {
            const project = projectPageData[key];

            return (
              <div
                key={key}
                className="rounded-lg shadow-md bg-white dark:bg-neutral-900 overflow-hidden hover:shadow-lg transition cursor-pointer flex flex-col"
                onClick={() => handleNavigate(key)}
              >
                <img
                  src={project.about.image}
                  alt={key}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 flex flex-col gap-2 flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold capitalize">{key}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Goa
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                    {project.about.description}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent card click
                      handleNavigate(key);
                    }}
                    className="mt-auto w-fit px-4 py-2 text-sm bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] text-black rounded hover:opacity-90 transition"
                  >
                    Explore More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <PromptConsultation />
      <Footer />
    </div>
  );
};
