import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/Untitled design (2).png";
import image4 from "../assets/Untitled design (5).png";
import image5 from "../assets/Untitled design (6).png";
import image6 from "../assets/Untitled design (7).png";

const lifestyleData = [
  { title: "Downtown Living", image: image1 },
  { title: "Suburban Escape", image: image4 },
  { title: "Beachfront Bliss", image: image5 },
  { title: "Skyline Retreat", image: image6 },
];

const LifeStyleSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Set visible count based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = lifestyleData.length - visibleCount;

  const handleNext = () => {
    if (startIndex < maxIndex) setStartIndex(startIndex + 1);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  return (
    <div className=" relative bg-white dark:bg-black text-black dark:text-white py-12">
      <h2 className="text-center text-3xl md:text-4xl font-light mb-2 text-black dark:text-gray-100 font-raleway">
        Goa Lifestyle
      </h2>
      <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
        Wide range options for any lifestyle. Make your choice with us
      </p>

      <div className=" max-w-7xl mx-auto px-6">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`absolute -left-2 md:left-10 top-1/2 -translate-y-1/2 z-20 text-[var(--primary-color)] disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <ChevronLeft size={80} />
        </button>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(100 / visibleCount) * startIndex}%)`,
            }}
          >
            {lifestyleData.map((item, idx) => (
              <div
                key={idx}
                className="w-full  md:w-1/3 flex-shrink-0 px-3"
                style={{ flex: `0 0 ${100 / visibleCount}%` }}
              >
                <div className="bg-white dark:bg-[#111] rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-center mb-2">
                      {item.title}
                    </h3>
                    <hr className="border-gray-300 dark:border-gray-600 mb-3" />
                    <div className="mt-auto mx-auto">
                      <button className="text-md text-[var(--primary-color)] text-center">
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={startIndex >= maxIndex}
          className={`absolute right-0 md:right-10 top-1/2 -translate-y-1/2 z-20 text-[var(--primary-color)]  disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <ChevronRight size={80} />
        </button>
      </div>
    </div>
  );
};

export default LifeStyleSection;
