import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectPageData } from "../data/PropertyData";
import { useNavigate } from "react-router-dom";

const projectKeys = Object.keys(projectPageData) as ("acasa" | "baliHeights")[];

const MAX_ITEMS = 5;

export const Exclusives: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectKeys.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projectKeys.length - 1 ? 0 : prev + 1));
  };

  const currentProjectKey = projectKeys[currentIndex];
  const project = projectPageData[currentProjectKey];

  if (!project) return <div>Project not found</div>;

  const liClass =
    "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded shadow-sm border border-gray-300 dark:border-gray-700 text-sm";

  const renderLimitedList = (items: string[]) => {
    const limited = items.slice(0, MAX_ITEMS);
    return (
      <>
        {limited.map((item, idx) => (
          <li key={idx} className={liClass}>
            {item}
          </li>
        ))}
      </>
    );
  };

  const goToDetailsPage = () => {
    navigate(`/projects/${currentProjectKey}`);
  };
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway">
      <h2 className="text-3xl md:text-4xl font-light  text-black dark:text-gray-100 text-center">
        Our Projects
      </h2>
      <div className=" min-h-[500px] flex items-center justify-center p-4 relative font-raleway">
        {/* Arrows outside the content box */}
        <button
          onClick={prevProject}
          aria-label="Previous Project"
          className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[var(--primary-color)] shadow hover:opacity-80 z-20"
        >
          <ChevronLeft className="w-3 h-3 md:w-6 md:h-6 text-gray-700 dark:text-gray-300" />
        </button>

        <div className="max-w-6xl w-full flex items-center gap-4 shadow-lg rounded-lg bg-white dark:bg-neutral-900 p-8 relative z-10">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {/* Left Side */}
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

            {/* Right Side */}
            <div className="md:w-1/2 space-y-6">
              {/* Section Title and Description */}
              <div>
                <h3 className="text-2xl  mb-1">{project.about.sectionTitle}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.about.description}
                </p>
              </div>

              {/* Features & Amenities */}
              <section>
                <h4 className="text-lg  mb-2">
                  {project.featuresAndAmenities.sectionTitle}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {renderLimitedList(project.featuresAndAmenities.features)}
                </ul>
              </section>

              {/* Designer Furnishings */}
              <section>
                <h4 className="text-lg  mb-2">
                  {project.designerFurnishings.sectionTitle}
                </h4>
                <ul className="flex flex-wrap gap-2 mb-3">
                  {renderLimitedList(project.designerFurnishings.features)}
                </ul>
              </section>

              {/* Explore Button */}
              <div className="pt-3">
                <button
                  onClick={goToDetailsPage}
                  className="w-fit px-6 font-light bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] text-black py-2 rounded hover:opacity-90 transition"
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextProject}
          aria-label="Next Project"
          className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[var(--primary-color)] shadow hover:opacity-80  z-20"
        >
          <ChevronRight className="w-3 h-3 md:w-6 md:h-6 text-gray-700 dark:text-gray-300" />
        </button>
      </div>
    </div>
  );
};
