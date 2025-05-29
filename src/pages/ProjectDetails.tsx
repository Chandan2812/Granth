import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import { projectPageData } from "../data/PropertyData";
import { useParams } from "react-router-dom";
import video from "../assets/WhatsApp Video 2025-05-28 at 2.54.11 PM (1).mp4";
import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import DownloadBrochureForm from "../components/DownloadBrochureForm";
import DownloadPaymentPlan from "../components/DownloadPayment";
import { CheckCircle, Sofa } from "lucide-react";
import { MapPin, Waves, UtilityPole } from "lucide-react";
import PromptConsultation from "../components/PromptConsultation";

const ProjectDetails = () => {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [viewPayment, setViewPayment] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  const { key } = useParams();
  const data = key
    ? projectPageData[key as keyof typeof projectPageData]
    : null;

  if (!data) return <div>Project not found</div>;

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative h-[80vh] bg-cover bg-center mt-24"
        style={{
          backgroundImage: `url('${data.hero.backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 text-white bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-semibold">
            {data.hero.title}
          </h1>
          <p className="mt-4 text-lg">{data.hero.subtitle}</p>
        </div>
      </div>

      <div className="font-sans max-w-7xl mx-auto">
        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 items-center">
          <div>
            <h2 className="text-2xl mb-4">{data.about.sectionTitle}</h2>
            <p className="mb-4 text-md font-thin text-gray-700 dark:text-gray-200">
              {data.about.description}
            </p>
            <div className=" flex gap-5">
              <button
                onClick={() => setShowDownloadPopup(true)}
                className="w-fit border px-6 py-3 mt-5 transition border-[var(--primary-color)] text-black bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] hover:opacity-80"
              >
                Download Brochure
              </button>
              <button
                onClick={() => setViewPayment(true)}
                className="w-fit border px-6 py-3 mt-5 transition border-[var(--primary-color)] text-black bg-gradient-to-r from-[var(--primary-color)] via-[#e3c5b5] to-[var(--primary-color)] hover:opacity-80"
              >
                View Payment Plan
              </button>
            </div>
          </div>
          <div className="relative">
            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="absolute top-2 left-2 z-10 p-2 bg-white/80 dark:bg-black/60 rounded-full shadow"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-black dark:text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-black dark:text-white" />
              )}
            </button>

            <video
              ref={videoRef}
              src={video}
              className="w-full rounded"
              autoPlay
              muted
              playsInline
            />
          </div>
        </div>

        {/* Designer Furnishings Section */}
        <section className="px-6 py-12 mx-auto max-w-7xl">
          <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-10">
            {data.designerFurnishings.sectionTitle}
          </h3>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {data.designerFurnishings.images.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={img}
                  alt={`Furnish ${index + 1}`}
                  className="object-cover w-full h-48"
                />
              </div>
            ))}
          </div>

          {/* Features in Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.designerFurnishings.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 border rounded-lg shadow hover:shadow-md transition duration-300 bg-white dark:bg-neutral-900"
              >
                <Sofa className="w-6 h-6 text-[var(--primary-color)]" />
                <span className="text-gray-800 dark:text-gray-200 text-sm">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Features & Amenities Section */}
        <section className="px-6 py-12 mx-auto max-w-7xl">
          <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-10">
            {data.featuresAndAmenities.sectionTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {data.featuresAndAmenities.features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 border rounded-lg shadow hover:shadow-md transition duration-300 bg-white dark:bg-neutral-900"
              >
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-800 dark:text-gray-200 text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Site Layout View Section */}
        <div className="p-8">
          <img
            src={`${data.siteView.image}`}
            alt="Site View"
            className="w-full rounded"
          />
        </div>
        {/* Plans Section */}
        <div className="p-8">
          <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-10">
            {data.plans.sectionTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.plans.layouts.map((layout, index) => (
              <img
                key={index}
                src={`${layout.image}`}
                alt={layout.title}
                className="rounded shadow-lg"
              />
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="p-8">
          <h3 className="text-lg font-semibold mb-2">{data.location.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-sm space-y-6">
              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300">
                {data.location.description}
              </p>

              {/* Beaches Nearby */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                  <Waves className="w-5 h-5 text-blue-500" />
                  Beaches Nearby
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {data.location.beachesNearby.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-2 py-3 border rounded-md shadow-sm bg-white dark:bg-neutral-900"
                    >
                      <MapPin className="w-4 h-4 text-cyan-600" />
                      <span className="text-gray-800 dark:text-gray-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Utilities Nearby */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4 mt-6">
                  <UtilityPole className="w-5 h-5 text-yellow-600" />
                  Utilities Nearby
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {data.location.utilitiesNearby.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-1 py-3 border rounded-md shadow-sm bg-white dark:bg-neutral-900"
                    >
                      <MapPin className="w-4 h-4 text-cyan-600" />
                      <span className="text-gray-800 dark:text-gray-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full h-64 md:h-full">
              <iframe
                src={data.location.mapEmbedUrl}
                className="w-full h-full rounded"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <PromptConsultation />
      <Footer />
      {showDownloadPopup && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
          <DownloadBrochureForm onClose={() => setShowDownloadPopup(false)} />
        </div>
      )}
      {viewPayment && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
          <DownloadPaymentPlan onClose={() => setViewPayment(false)} />
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
