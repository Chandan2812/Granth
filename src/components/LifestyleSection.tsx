import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/Untitled design (2).png";
import image2 from "../assets/Untitled design (3).png";
import image3 from "../assets/Untitled design (4).png";
import image4 from "../assets/Untitled design (5).png";
import image5 from "../assets/Untitled design (6).png";
import image6 from "../assets/Untitled design (7).png";

const lifestyleData = [
  { title: "Downtown Living", image: image1 },
  { title: "Residential Community", image: image2 },
  { title: "Marina Living", image: image3 },
  { title: "Suburban Escape", image: image4 },
  { title: "Beachfront Bliss", image: image5 },
  { title: "Skyline Retreat", image: image6 },
];

const LifeStyleSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 3 < lifestyleData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const cardWidth = 400; // px
  const gap = 24; // Tailwind gap-6 = 1.5rem = 24px
  const totalOffset = (cardWidth + gap) * startIndex;

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-10">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <h2 className="text-center text-3xl md:text-4xl font-light mb-2 text-black dark:text-gray-100 font-raleway">
          Lifestyle in Goa
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
          Wide range options for any lifestyle. Make your choice with us
        </p>

        <div className="relative">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(-${totalOffset}px)` }}
          >
            {lifestyleData.map((item, index) => (
              <div
                key={index}
                className="w-[400px] h-[300px] bg-white dark:bg-neutral-900 text-black dark:text-white shadow-md dark:shadow-lg flex-shrink-0 flex flex-col justify-between"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[350px] md:w-full h-[230px] object-cover border border-red-600"
                  draggable="false"
                />
                <div className="bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 text-center py-2">
                  <h3 className="text-lg mb-1">{item.title}</h3>
                  <button className="text-sm border-t pt-1 border-gray-300 dark:border-gray-600 w-full hover:text-gray-600 dark:hover:text-gray-300">
                    EXPLORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-8 px-2 sm:px-6 text-gray-600 dark:text-gray-400">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="flex items-center gap-2 hover:text-black dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
            PREV
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + 3 >= lifestyleData.length}
            className="flex items-center gap-2 hover:text-black dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            NEXT
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LifeStyleSection;
