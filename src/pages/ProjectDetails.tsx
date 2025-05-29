import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import { projectPageData } from "../data/PropertyData";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
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
            <h2 className="text-xl font-semibold mb-4">
              {data.about.sectionTitle}
            </h2>
            <p className="mb-4 text-sm">{data.about.description}</p>
            <button className="px-4 py-2 text-sm">{data.about.ctaText}</button>
          </div>
          <div>
            <img
              src={`${data.about.image}`}
              alt="Intro"
              className="w-full rounded"
            />
          </div>
        </div>

        {/* Designer Furnishings Section */}
        <div className="p-8">
          <div className="mb-8">
            <img
              src={`${data.designerFurnishings.FurnishingImg}`}
              alt="Furnishing"
              className="w-full rounded"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">
            {data.designerFurnishings.sectionTitle}
          </h3>
          <ul className="text-sm mb-6">
            {data.designerFurnishings.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.designerFurnishings.images.map((img, index) => (
              <img
                key={index}
                src={`${img}`}
                alt={`Furnish ${index + 1}`}
                className="rounded"
              />
            ))}
          </div>
        </div>

        {/* Plans Section */}
        <div className="p-8">
          <h3 className="text-lg font-semibold mb-4">
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
          <div className="text-center mt-4">
            <button className="px-4 py-2 text-sm">{data.plans.ctaText}</button>
          </div>
        </div>

        {/* Site Layout View Section */}
        <div className="p-8">
          <img
            src={`${data.siteView.image}`}
            alt="Site View"
            className="w-full rounded"
          />
        </div>

        {/* Model Villa Section */}
        <div className="p-8 text-center">
          <h3 className="text-lg font-semibold mb-4">
            {data.modelVilla.sectionTitle}
          </h3>
          <div className="flex justify-center">
            <iframe
              className="w-full md:w-2/3 h-64 md:h-96"
              src={data.modelVilla.videoUrl.replace("watch?v=", "embed/")}
              title="Model Villa"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Features & Amenities */}
        <div className="p-8">
          <h3 className="text-lg font-semibold mb-4 text-center">
            {data.featuresAndAmenities.sectionTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {data.featuresAndAmenities.features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="bg-yellow-400 p-2 rounded-full"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="p-8">
          <h3 className="text-lg font-semibold mb-2">{data.location.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-sm">
              <p className="mb-2">{data.location.description}</p>
              <h4 className="font-semibold mt-4">Beaches</h4>
              <ul className="mb-2 list-disc pl-5">
                {data.location.beachesNearby.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h4 className="font-semibold mt-2">Utilities</h4>
              <ul className="list-disc pl-5">
                {data.location.utilitiesNearby.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
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
      <Footer />
    </div>
  );
};

export default ProjectDetails;
