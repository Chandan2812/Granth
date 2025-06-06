import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import mission from "../assets/mission1.png";
import vision from "../assets/vision.png";
import Stats from "../components/Stats";
import hero from "../assets/sell.jpg";
import about from "../assets/sumit-sourav-eSRtxPd9q1c-unsplash.jpg";

function AboutPage() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white ">
      <Navbar />

      <section className="relative h-screen w-full">
        <img src={hero} alt="About" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/70 flex flex-col items-center justify-center py-5 text-center px-4">
          <h1 className="text-3xl md:text-4xl text-white mb-4 font-thin">
            Welcome to Granth Dream Homes
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Where luxury meets legacy — delivering curated living experiences
            rooted in trust, quality, and vision.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold font-raleway">Who We Are</h2>
          <p className="text-lg font-light text-gray-600 dark:text-gray-300">
            Granth Dream Homes LLP isn't just a real estate company — we’re
            architects of aspiration. After achieving over{" "}
            <strong>5 Billion in sales</strong> with our parent firm, Mondus
            Properties in Dubai, we bring a world-class standard to Indian real
            estate. Now anchored in the heart of Goa, we blend international
            expertise with local insight to offer lifestyle-oriented investment
            opportunities.
          </p>
          <p className="text-lg font-light text-gray-600 dark:text-gray-300">
            Every project we craft embodies luxury, transparency, and
            customer-first thinking — because we believe buying a home should
            feel as good as living in it.
          </p>
        </div>

        {/* Image with dark overlay on dark mode */}
        <div className="relative rounded-lg shadow-lg w-full h-[400px] overflow-hidden">
          <img
            src={about}
            alt="Luxury Property Goa"
            className="w-full h-full object-cover"
          />
          {/* Overlay only visible in dark mode */}
          <div className="absolute inset-0 bg-black opacity-0 dark:opacity-50 transition-opacity duration-300"></div>
        </div>
      </section>

      <section className=" py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 font-raleway">Why Goa?</h2>
          <p className="max-w-4xl mx-auto text-lg font-light text-gray-700 dark:text-gray-300 mb-10">
            Goa isn’t just a location — it’s a lifestyle. With rising tourism,
            booming infrastructure, and a culture of laid-back luxury, it offers
            one of the most promising real estate markets in India. Whether
            you're investing or relocating, Goa guarantees a perfect blend of
            returns and refined living.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
            {[
              {
                title: "Booming Tourism Industry",
                desc: "A global tourist hotspot ensures high rental yields and consistent property demand year-round.",
              },
              {
                title: "Infrastructure Growth",
                desc: "From new highways to airports and tech hubs — Goa is evolving fast, increasing long-term value.",
              },
              {
                title: "Lifestyle + Returns",
                desc: "Invest not just in property, but in a lifestyle of beaches, culture, cuisine, and class-leading ROI.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto py-12 px-6 flex flex-col md:grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 order-1 md:order-none">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="text-lg font-light text-gray-600 dark:text-gray-300">
            Our mission is to deliver world-class living spaces built on a
            foundation of trust, transparency, and uncompromising quality. We
            are committed to turning dream homes into reality — for families,
            for investors, for everyone who seeks excellence.
          </p>
        </div>
        <img
          src={mission}
          alt="Mission"
          className="rounded-lg w-1/2 object-cover order-2 md:order-none"
        />
      </section>

      {/* Vision Section */}
      <section className="max-w-7xl mx-auto py-6 px-6 flex flex-col md:grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 order-1 md:order-2">
          <h2 className="text-3xl font-semibold">Our Vision</h2>
          <p className="text-lg font-light text-gray-600 dark:text-gray-300">
            Our vision is to be India’s most trusted real estate brand —
            delivering superior properties, industry-leading service, and
            sustainable developments that leave a lasting impact.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={vision}
            alt="Vision"
            className="rounded-lg w-1/2 object-cover order-2 md:order-1"
          />
        </div>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Journey</h2>
        <p className="text-lg font-light text-gray-700 dark:text-gray-300">
          At Granth Dream Homes, every project is a promise — a promise of
          unmatched quality, timeless design, and meaningful value. Discover
          your next chapter with us in Goa’s most iconic destinations.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;
