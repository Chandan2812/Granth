import About from "../components/About";
import Exclusives from "../components/Exclusives";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LeadPopupForm from "../components/LeadPopUp";
import LifeStyleSection from "../components/LifestyleSection";
import ListProperty from "../components/listproperty";
import Nav from "../components/Nav";
import ReviewSection from "../components/review";
import ScrollToTopButton from "../components/ScrollToTopButton";
import WhatWeDoSection from "../components/WhatWeDoSection";

function Landing() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Exclusives />
      <WhatWeDoSection />
      <ListProperty />
      <ReviewSection />
      <LifeStyleSection />
      <Footer />
      <ScrollToTopButton />
      <LeadPopupForm />
    </div>
  );
}

export default Landing;
