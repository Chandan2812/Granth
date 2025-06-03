import AboutSection from "../components/AboutSection";
import BlogPreview from "../components/BlogPreview";
import { Exclusives } from "../components/Exclusives";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HoverCardSection from "../components/HoverCardSection";
import LeadPopupForm from "../components/LeadPopUp";
import LifeStyleSection from "../components/LifestyleSection";
import ListProperty from "../components/listproperty";
import Nav from "../components/Nav";
import PromptConsultation from "../components/PromptConsultation";
import ReviewSection from "../components/review";
import ScrollToTopButton from "../components/ScrollToTopButton";
import WhatWeDoSection from "../components/WhatWeDoSection";

function Landing() {
  return (
    <div>
      <Nav />
      <Hero />
      <AboutSection />
      <WhatWeDoSection />
      <Exclusives />
      <HoverCardSection />
      <ListProperty />
      <LifeStyleSection />

      <ReviewSection />

      <BlogPreview />
      <PromptConsultation />
      <Footer />
      <ScrollToTopButton />
      <LeadPopupForm />
    </div>
  );
}

export default Landing;
