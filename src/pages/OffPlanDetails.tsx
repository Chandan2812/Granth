import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { Projects } from "../data/UpcomingProjects";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { MapPin } from "lucide-react";
import DownloadBrochureForm from "../components/DownloadBrochureForm";
import DownloadPaymentPlan from "../components/DownloadPayment";

const OffPlansDetails: React.FC = () => {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [viewPayment, setViewPayment] = useState(false);
  const { id } = useParams();
  const project = id
    ? Projects.find((p) => p.id.toLowerCase() === id.toLowerCase())
    : null;

  if (!project)
    return (
      <div className="text-center py-20 text-white">Project Not Found</div>
    );

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="bg-black text-white">
      <Navbar />

      <div className="w-full overflow-hidden">
        <Slider {...sliderSettings}>
          {bannerImages.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Banner ${index}`}
                className="w-full h-[95vh] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Welcome Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">{name}</h1>
          <p className="text-gray-300 text-lg mb-6">{description}</p>

          <div className="flex  gap-4">
            {/* Brochure Button */}
            <button
              className="px-6 py-3 text-white bg-[var(--primary-color)] hover:opacity-80 font-semibold rounded-md transition"
              onClick={() => {
                setShowDownloadPopup(true);
                console.log("Brochure button clicked");
              }}
            >
              Download Brochure
            </button>

            {/* Price List Button */}
            <button
              className="px-6 py-3 text-[var(--primary-color)] border border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white font-semibold rounded-md transition"
              onClick={() => {
                setViewPayment(true);
                console.log("Price List button clicked");
              }}
            >
              View Payment Plan
            </button>
          </div>
        </div>

        {projectHighlights[3]?.videoUrl ? (
          <video
            src={projectHighlights[3].videoUrl}
            controls
            autoPlay
            muted
            className="rounded-xl shadow-lg w-full"
          />
        ) : null}
      </div>

      {/* Project Highlights Box */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-neutral-900 border border-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-white">
              Project Highlights
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-300">
              {highlights.map((point, idx) => {
                // Highlight keywords
                const formatted = point
                  .replace(
                    /(assured)/gi,
                    '<span style="color: var(--primary-color)">$1</span>'
                  )
                  .replace(
                    /(discount)/gi,
                    '<span style="color: var(--primary-color)">$1</span>'
                  )
                  .replace(
                    /(guarantee|guaranteed)/gi,
                    '<span style="color: var(--primary-color)">$1</span>'
                  )
                  .replace(
                    /(complimentary)/gi,
                    '<span style="color: var(--primary-color)">$1</span>'
                  );

                return (
                  <li
                    key={idx}
                    className="list-disc list-inside"
                    dangerouslySetInnerHTML={{ __html: formatted }}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* RERA Section */}
      {rera.registered && (
        <div className="py-16 bg-black max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-center justify-center gap-10">
          {/* Left side - Text content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {rera.title}
            </h2>
            <p className="text-gray-400 mb-2 max-w-xl mx-auto md:mx-0">
              {rera.text1}
            </p>
            <p className="text-yellow-400 font-bold text-lg mb-2">
              RERA No.: {rera.registrationId}
            </p>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto md:mx-0">
              {rera.text2}
            </p>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={rera.image}
              alt="RERA Certificate"
              className="w-[220px] rounded-md"
            />
          </div>
        </div>
      )}

      {/* Features & Amenities */}
      <div className="py-16 ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Features & Amenities
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 ">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Feature ${i}`}
                className="rounded-lg "
              />
            ))}
          </div>

          <section>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
              {featuresAndAmenities.map(({ label, icon: Icon }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 border rounded-xl bg-white dark:bg-neutral-900 shadow hover:shadow-md transition"
                >
                  <Icon className="w-6 h-6 text-[var(--primary-color)]" />
                  <span className="text-gray-800 dark:text-gray-200 text-base">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Connectivity */}
      <div className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left side - List with custom icons */}
          <ul className="flex-1 space-y-4 text-gray-300">
            <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center  gap-2">
              <MapPin className="w-5 h-5 text-green-600" />
              Connectivity Of The Property            
            </h4>
            {connectivity.places.map((place, index) => (
              <li key={index} className="flex items-center gap-3">
                {/* Replace this SVG with your preferred icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400 flex-shrink-0"
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
                <span className="text-xl">{place}</span>
              </li>
            ))}
          </ul>

          {/* Right side - Map */}
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
      {/* Modals */}
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

export default OffPlansDetails;
