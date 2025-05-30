import "./App.css";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sell from "./pages/Sell";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import ProjectDetails from "./pages/ProjectDetails";
import { BuyProjects } from "./pages/Buy";
import AboutPage from "./pages/AboutPage";
import { RentProjects } from "./pages/Rent";
import { OffPlan } from "./pages/OffPlan";
import Contact from "./pages/Contact";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects/:key" element={<ProjectDetails />} />
        <Route path="/Sell" element={<Sell />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/buy" element={<BuyProjects />} />
        <Route path="/rent" element={<RentProjects />} />
        <Route path="/offPlan" element={<OffPlan />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Bottom Buttons */}
      <div className=" fixed bottom-0 left-0 w-full flex md:hidden">
        <div className="w-1/2 bg-[var(--primary-color)] text-white text-center py-3">
          <a
            href="tel:+1234567890"
            className="w-full flex items-center justify-center gap-2"
          >
            <FiPhone size={18} />
            Call Us
          </a>
        </div>
        <div className="w-1/2 bg-white text-green-500 text-center py-3 border-l border-white">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
