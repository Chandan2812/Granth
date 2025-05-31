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

export const RentProjects: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (key: string) => {
    navigate(`/projects/${key}`);
  };

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
            {projectKeys.map((key) => {
              const project = projectPageData[key];
              const highlights =
                project.featuresAndAmenities?.features?.slice(0, 2) || [];

              return (
                <div
                  key={key}
                  className="flex flex-col md:flex-row bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100 dark:border-neutral-700 group"
                  onClick={() => handleNavigate(key)}
                >
                  {/* Image Wrapper */}
                  <div className="w-full md:w-1/2 h-[350px] overflow-hidden">
                    <img
                      src={project.about.image}
                      alt={key}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="p-6 flex flex-col justify-between md:w-1/2">
                    <div>
                      {/* Title */}
                      <h3 className="text-2xl font-bold capitalize text-neutral-900 dark:text-white mb-1">
                        {project.about.sectionTitle}
                      </h3>

                      {/* Location */}
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        Goa
                      </p>

                      {/* Description */}
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 ">
                        {project.about.description}
                      </p>

                      {/* Unit Info */}
                      <div className="flex justify-between w-full  mb-5 flex-wrap ">
                        <div className="flex flex-col items-center text-center text-sm text-gray-600 dark:text-gray-400  min-w-[100px]">
                          <span className="text-xs">Unit</span>
                          <span className="font-semibold text-md text-neutral-900 dark:text-white">
                            {project.about.unitType}
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-center text-sm text-gray-600 dark:text-gray-400  min-w-[100px]">
                          <span className="text-xs">Plot Area</span>
                          <span className="font-semibold text-md text-neutral-900 dark:text-white">
                            {project.about.plotArea}
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-center text-sm text-gray-600 dark:text-gray-400  min-w-[100px]">
                          <span className="text-xs">Built-up</span>
                          <span className="font-semibold text-md text-neutral-900 dark:text-white">
                            {project.about.builtArea}
                          </span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {highlights.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate(key);
                      }}
                      className="mt-4 self-start px-5 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] text-black hover:brightness-110 transition"
                    >
                      Explore More
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
