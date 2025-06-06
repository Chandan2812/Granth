import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { Projects } from "../data/UpcomingProjects";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import DownloadBrochureForm from "../components/DownloadBrochureForm";
import DownloadPaymentPlan from "../components/DownloadPayment";

const BuyDetails: React.FC = () => {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [viewPayment, setViewPayment] = useState(false);
  const { id } = useParams();
  const project = id
    ? Projects.find((p) => p.id.toLowerCase() === id.toLowerCase())
    : null;

  if (!project)
    return (
      <div className="text-center py-20 text-black dark:text-white">
        Project Not Found
      </div>
    );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    name,
    description,
    bannerImages,
    featuresAndAmenities,
    highlights,
    projectHighlights,
    rera,
    images,
    connectivity,
  } = project;

  const SampleNextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      className="absolute hidden md:block top-1/2 right-4 z-10 transform -translate-y-1/2 bg-white dark:bg-black text-[var(--primary-color)] p-2 rounded-full shadow cursor-pointer hover:scale-105 transition"
    >
      <ChevronRight size={48} />
    </div>
  );

  const SamplePrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      className="absolute hidden md:block top-1/2 left-4 z-10 transform -translate-y-1/2 bg-white dark:bg-black text-[var(--primary-color)] p-2 rounded-full shadow cursor-pointer hover:scale-105 transition"
    >
      <ChevronLeft size={48} />
    </div>
  );

  const settings = {
    centerMode: true,
    centerPadding: "20%", // desktop: peek sides
    slidesToShow: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640, // below 640px (mobile)
        settings: {
          centerMode: false, // turn off center mode
          centerPadding: "0px", // no side preview
          slidesToShow: 1, // full‐width slide
        },
      },
    ],
  };
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />

      <div className="w-full py-8">
        <Slider {...settings}>
          {bannerImages.map((src, index) => (
            <div key={index} className="px-2">
              <img
                src={src}
                alt={`Image ${index}`}
                className="rounded-lg object-cover md:h-[100vh] h-[40vh]  w-full shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{name}</h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
            {description}
          </p>

          <div className="flex gap-4">
            <button
              className="px-3 py-3 bg-[var(--primary-color)] text-white font-semibold rounded-md hover:opacity-80 transition"
              onClick={() => setShowDownloadPopup(true)}
            >
              Download Brochure
            </button>

            <button
              className="px-3 py-3 border border-[var(--primary-color)] text-[var(--primary-color)] dark:text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white font-semibold rounded-md transition"
              onClick={() => setViewPayment(true)}
            >
              View Payment Plan
            </button>
          </div>
        </div>

        {projectHighlights[3]?.videoUrl && (
          <video
            src={projectHighlights[3].videoUrl}
            controls
            muted
            className="rounded-xl shadow-lg w-full"
          />
        )}
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-neutral-100 dark:bg-neutral-900 border border-gray-300 dark:border-gray-700 md:p-8 p-3 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Project Highlights</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-800 dark:text-gray-300 px-4">
              {highlights.map((point, idx) => {
                const formatted = point
                  .replace(
                    /(Fully loaded)/gi,
                    '<span style="color: var(--primary-color)">$1</span>'
                  )
                  .replace(
                    /(12% assured pre-rentals)/gi,
                    '<span style="color: var(--primary-color)">$1</span>'
                  )
                  .replace(
                    /(Attractive)/gi,
                    '<span style="color: var(--primary-color)">$1</span>'
                  )
                  .replace(
                    /(Minimum 5% lease guarantee)/gi,
                    '<span style="color: var(--primary-color)">$1</span>'
                  )
                  .replace(
                    /(30% discount on F&B)/gi,
                    '<span style="color: var(--primary-color)">$1</span>'
                  )
                  .replace(
                    /(Royal Orchid Group of Hotels)/gi,
                    '<span style="color: var(--primary-color)">$1</span>'
                  )
                  .replace(
                    /(Free stay for 12 nights)/gi,
                    '<span style="color: var(--primary-color)">$1</span>'
                  )
                  .replace(
                    /(guarantee|guaranteed)/gi,
                    '<span style="color: var(--primary-color)">$1</span>'
                  )
                  .replace(
                    /(One complimentary)/gi,
                    '<span style="color: var(--primary-color)">$1</span>'
                  );

                return (
                  <li
                    key={idx}
                    className="list-disc list-outside pl-5"
                    dangerouslySetInnerHTML={{ __html: formatted }}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {rera.registered && (
        <div className="py-16 bg-white dark:bg-black max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">{rera.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {rera.text1}
            </p>
            <p className="text-yellow-500 font-bold text-lg mb-2">
              RERA No.: {rera.registrationId}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {rera.text2}
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={rera.image}
              alt="RERA Certificate"
              className="w-[220px] rounded-md"
            />
          </div>
        </div>
      )}

      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Features & Amenities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Feature ${i}`}
                className="rounded-lg"
              />
            ))}
          </div>
          <section>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
              {featuresAndAmenities.map(({ label, icon: Icon }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-neutral-900 shadow hover:shadow-md transition"
                >
                  <Icon className="w-8 text-[var(--primary-color)]" />
                  <span className="text-gray-800 dark:text-gray-200 text-xs">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="bg-white dark:bg-black py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <ul className="flex-1 space-y-4 text-gray-800 dark:text-gray-300">
            <h4 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-600" />
              Connectivity Of The Property
            </h4>
            {connectivity.places.map((place, index) => (
              <li key={index} className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500 dark:text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4"
                  />
                </svg>
                <span className="text-lg">{place}</span>
              </li>
            ))}
          </ul>

          <div className="flex-1 w-full md:w-auto">
            <iframe
              title="Map"
              src={connectivity.embeddedMapUrl}
              className="w-full h-64 rounded-lg border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />

      {showDownloadPopup && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <DownloadBrochureForm onClose={() => setShowDownloadPopup(false)} />
        </div>
      )}

      {viewPayment && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <DownloadPaymentPlan onClose={() => setViewPayment(false)} />
        </div>
      )}
    </div>
  );
};

export default BuyDetails;
