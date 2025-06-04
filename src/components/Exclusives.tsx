import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectPageData } from "../data/PropertyData";

const projectKeys = Object.keys(projectPageData) as (
  | "velvet_vista"
  | "baliHeights"
)[];

export const Exclusives: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectKeys.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projectKeys.length - 1 ? 0 : prev + 1));
  };

  const currentProjectKey = projectKeys[currentIndex];
  const project = projectPageData[currentProjectKey];

  if (!project) return <div>Project not found</div>;

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white md:py-10 w-full relative">
      <h2 className="text-3xl md:text-4xl font-light text-black dark:text-gray-100 text-center font-raleway under">
        Our Exclusive Projects
      </h2>

      <div className="min-h-[500px] flex flex-col items-center justify-center relative">
        {/* Arrows for desktop */}
        <button
          onClick={prevProject}
          aria-label="Previous Project"
          className="hidden md:block absolute left-0 md:left-10 top-1/2 -translate-y-1/2 text-[var(--primary-color)] hover:opacity-80 z-20"
        >
          <ChevronLeft size={80} />
        </button>

        <div className="max-w-6xl w-full flex items-center gap-4 shadow-lg rounded-lg bg-white dark:bg-neutral-900 p-8 relative">
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {/* Left */}
            <div className="md:w-1/2 flex flex-col items-center">
              <img
                src={project.about.image}
                alt={`${currentProjectKey} main`}
                className="w-full rounded-md object-cover mb-3"
              />
              <h2 className="text-xl font-semibold capitalize">
                {currentProjectKey}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Goa</p>
            </div>

            {/* Right */}
            <div className="md:w-1/2 space-y-6">
              <div>
                <h3 className="text-3xl mb-1 text-[var(--primary-color)]">
                  {project.about.sectionTitle}
                </h3>
                <p className="text-lg text-gray-800 dark:text-gray-300 text-justify pt-10">
                  {project.about.description}
                </p>
                <p className="text-lg text-gray-800 dark:text-gray-300 text-justify pt-10">
                  {project.location.description}
                </p>
              </div>

              <div className="pt-3">
                <a href={`/projects/${currentProjectKey}`}>
                  <button className="w-fit px-6 font-light bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] text-black py-2 rounded hover:opacity-90 transition">
                    Explore Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows for desktop */}
        <button
          onClick={nextProject}
          aria-label="Next Project"
          className="hidden md:block absolute right-0 md:right-10 top-1/2 -translate-y-1/2 text-[var(--primary-color)] hover:opacity-80 z-20"
        >
          <ChevronRight size={80} />
        </button>

        {/* Mobile Previous/Next Buttons */}
        <div className="flex md:hidden justify-between w-full max-w-xl mx-auto px-4 mt-6">
          <button
            onClick={prevProject}
            className="flex items-center gap-1 px-4 py-2 text-black dark:text-white rounded-md text-sm font-medium shadow hover:opacity-90"
          >
            <ChevronLeft size={18} />
            Previous
          </button>
          <button
            onClick={nextProject}
            className="flex items-center gap-1 px-4 py-2 text-black dark:text-white rounded-md text-sm font-medium shadow hover:opacity-90"
          >
            Next
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
