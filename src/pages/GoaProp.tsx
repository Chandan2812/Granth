import Footer from "../components/Footer";
import Navbar from "../components/Nav";

const AcasaLandingPage = () => {
  const imageUrls = [
    "https://www.samava.in/acasa/images/gallery-img1.jpg",
    "https://www.samava.in/acasa/images/gallery-img2.jpg",
    "https://www.samava.in/acasa/images/gallery-img3.jpg",
    "https://www.samava.in/acasa/images/gallery-img4.jpg",
    "https://www.samava.in/acasa/images/gallery-img5.jpg",
    "https://www.samava.in/acasa/images/gallery-img6.jpg",
    "https://www.samava.in/acasa/images/gallery-img6.jpg",
    "https://www.samava.in/acasa/images/gallery-img6.jpg",
  ];

  const planImages = [
    "https://www.samava.in/acasa/images/floor-plan1.jpg",
    "https://www.samava.in/acasa/images/floor-plan2.jpg",
    "https://www.samava.in/acasa/images/floor-plan3.jpg",
  ];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <div
        className="relative h-[80vh] bg-cover bg-center mt-24"
        style={{
          backgroundImage: `url('https://www.samava.in/acasa/images/header.png')`,
        }}
      >
        <div className="absolute inset-0 text-white bg-opacity-50 flex flex-col justify-center items-center  text-center">
          <h1 className="text-4xl md:text-6xl font-semibold">
            An epitome of elegance.
          </h1>
          <p className="mt-4 text-lg">
            Fully furnished, Bali-inspired villas for sale in Corjuem, Goa
          </p>
        </div>
      </div>
      <div className="font-sans  max-w-7xl mx-auto ">
        {/* Hero Section */}

        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 items-center">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Discover Balinese Living in the quietude of Goa
            </h2>
            <p className="mb-4 text-sm">
              This design philosophy of laid-back tropical charm and
              sophisticated elegance is reflected in every detail — from the
              open-plan living areas to the private landscaped gardens. Acasa
              offers a harmonious blend of Balinese architecture and Goan
              serenity.
            </p>
            <button className=" px-4 py-2 text-sm">Book a Site Visit</button>
          </div>
          <div>
            <img
              src="https://www.samava.in/acasa/images/about-img.png"
              alt="Intro"
              className="w-full rounded"
            />
          </div>
        </div>

        {/* Furnishing Section */}
        <div className=" p-8">
          <div className="mb-8">
            <img
              src="https://www.samava.in/acasa/images/banner.png"
              alt="Furnishing"
              className="w-full rounded"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">Designer Furnishings</h3>
          <ul className="text-sm mb-6">
            <li>Fully Furnished: Living, Dining & Bedrooms</li>
            <li>Modular Kitchen</li>
            <li>Designer Tiles for Bathrooms</li>
            <li>False Ceiling with Cove Lighting</li>
            <li>Architect's Furnishings</li>
          </ul>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Furnish ${index + 1}`}
                className="rounded"
              />
            ))}
          </div>
        </div>

        {/* Plans Section */}
        <div className="p-8">
          <h3 className="text-lg font-semibold mb-4">Plans</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {planImages.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Plan ${index + 1}`}
                className="rounded shadow-lg"
              />
            ))}
          </div>

          <div className="text-center mt-4">
            <button className=" px-4 py-2 text-sm">Request Catalogue</button>
          </div>
        </div>

        {/* Aerial View Section */}
        <div className="p-8">
          <img
            src="https://www.samava.in/acasa/images/banner2.png"
            alt="Aerial View"
            className="w-full rounded"
          />
        </div>

        {/* Model Villa Video */}
        <div className="p-8 text-center">
          <h3 className="text-lg font-semibold mb-4">Model Villa</h3>
          <div className="flex justify-center">
            <iframe
              className="w-full md:w-2/3 h-64 md:h-96"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Model Villa"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Features & Amenities */}
        <div className=" p-8">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Features & Amenities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              "Rental Management",
              "Housekeeping",
              "Reception and Front Desk",
              "24x7 Security and CCTV",
              "WiFi & Backup",
              "Single Car Park",
              "Landscaped Garden",
              "Common Swimming Pool",
              "Fitness Centre",
              "Meditation Pavilion",
              "Cafeteria",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="bg-yellow-400 p-2 rounded-full"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="p-8">
          <h3 className="text-lg font-semibold mb-2">
            Never feel far away. Where is Acasa?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-sm">
              <p className="mb-2">
                ACASA is in Corjuem North Goa in close proximity to Aldona,
                Mapusa, and other main attractions. It’s a peaceful and private
                neighborhood, close to schools, supermarkets, and beaches.
              </p>
              <h4 className="font-semibold mt-4">Beaches</h4>
              <ul className="mb-2">
                <li>Anjuna Beach - 13km</li>
                <li>Vagator Beach - 14km</li>
                <li>Morjim Beach - 18km</li>
                <li>Ashwem Beach - 20km</li>
              </ul>
              <h4 className="font-semibold mt-2">Utilities</h4>
              <ul>
                <li>Mapusa Market - 4.5km</li>
                <li>Thivim Railway Station - 6.5km</li>
                <li>Goa Airport - 33km</li>
              </ul>
            </div>
            <img
              src="https://www.samava.in/acasa/images/map-img.png"
              alt="Map"
              className="w-full rounded"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AcasaLandingPage;
