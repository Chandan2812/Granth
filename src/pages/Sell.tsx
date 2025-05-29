import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import ListProperty from "../components/listproperty";
import PromptConsultation from "../components/PromptConsultation";

const Sell = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway">
      <Navbar />

      {/* Hero Image with Overlay Text */}
      <section className="relative h-screen w-full">
        <img
          src="https://www.axcapital.ae/_ipx/s_1920x960/img/sell/sell-banner.webp" // Replace with your actual image path
          alt="Off Plan Hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/70 flex flex-col items-center justify-end py-5 text-center px-4 font-raleway font-thin">
          <h1 className="text-4xl md:text-6xl  text-white mb-4">
            Let’s sell your property profitably
          </h1>
          <p className="text-lg md:text-2xl text-white">
            Entire process is on us, from evaluation to a deal
          </p>
          <a href="/contact">
            <button className="border border-[var(--primary-color)] text-[var(--primary-color)] px-4 py-2 mt-2 font-light">
              CONTACT US
            </button>
          </a>
        </div>
      </section>

      {/* Our Work Principles Section */}
      <section className="w-[90%] mx-auto my-16 text-center font-raleway px-5 font-light dark:font-thin">
        <h2 className="text-3xl md:text-4xl  mb-10">OUR WORK PRINCIPLES</h2>

        <div className="grid gap-8 md:grid-cols-3 text-left">
          {/* Transparency */}
          <div className="bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-lg shadow-md">
            <h3 className="text-xl  mb-2">TRANSPARENCY</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our team will keep you informed at every stage of the deal. We
              adhere to agreements and discuss all proposals and changes openly.
            </p>
          </div>

          {/* Benefit */}
          <div className="bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-lg shadow-md">
            <h3 className="text-xl mb-2">BENEFIT</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Having successfully completed thousands of real estate deals in
              Dubai, we possess a keen understanding of the market, ensuring the
              best possible outcome for your business.
            </p>
          </div>

          {/* Rapidity */}
          <div className="bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-lg shadow-md">
            <h3 className="text-xl mb-2">RAPIDITY</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Leveraging the expertise and reputation of our real estate agents
              in Dubai, we can quickly find buyers for your property.
            </p>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="w-[90%] mx-auto my-16 text-center font-raleway px-5 font-light dark:font-thin">
        <h2 className="text-3xl md:text-4xl  mb-12">HOW IT WORKS</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-left">
          {/* Step 01 - Preparation */}
          <div className="bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-xl shadow-md">
            <div className="text-4xl font-semibold text-[var(--primary-color)] mb-4">
              01
            </div>
            <h3 className="text-xl mb-2">PREPARATION</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We meet either online or in our Dubai office, evaluate the
              property, and conclude an agreement.
            </p>
          </div>

          {/* Step 02 - Promotion */}
          <div className="bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-xl shadow-md">
            <div className="text-4xl font-semibold text-[var(--primary-color)] mb-4">
              02
            </div>
            <h3 className="text-xl mb-2">PROMOTION</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We capture photos and videos, launch contextual advertising and
              personalized email newsletters, and publish advertisements on
              public platforms.
            </p>
          </div>

          {/* Step 03 - Agreement */}
          <div className="bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-xl shadow-md">
            <div className="text-4xl font-semibold text-[var(--primary-color)] mb-4">
              03
            </div>
            <h3 className="text-xl mb-2">AGREEMENT</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We find a buyer and prepare documents, including the purchase and
              sale agreement, while resolving tax and registration issues.
            </p>
          </div>

          {/* Step 04 - Payment */}
          <div className="bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-xl shadow-md">
            <div className="text-4xl font-semibold text-[var(--primary-color)] mb-4">
              04
            </div>
            <h3 className="text-xl mb-2">PAYMENT</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Upon the successful completion of the transaction, you will
              receive the payment with the agency commission deducted.
            </p>
          </div>
        </div>
      </section>
      <ListProperty />
      <PromptConsultation />
      <Footer />
    </div>
  );
};

export default Sell;
