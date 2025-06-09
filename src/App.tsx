import "./App.css";
import Landing from "./pages/Landing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sell from "./pages/Sell";

import { BuyProjects } from "./pages/Buy";
import AboutPage from "./pages/AboutPage";
import { RentProjects } from "./pages/Rent";
import { OffPlan } from "./pages/OffPlan";
import Contact from "./pages/Contact";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Chatbot from "./components/Chatbot";
import NewsletterForm from "./pages/Newsletter";
import Emailer from "./pages/Emailer";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import NewsletterPage from "./pages/admin/AdminNewsletter";
import AdminSubscriber from "./pages/admin/AdminSubscriber";
import AdminEmailer from "./pages/admin/AdminEmailer";
import AdminLeads from "./pages/admin/AdminLeads";
import ChatbotHistory from "./pages/admin/Chatbot";
import ListProperty from "./pages/admin/ListProperty";
import BuyDetails from "./pages/BuyDetails";
import RentDetails from "./pages/RentDetails";
import OffPlansDetails from "./pages/OffPlanDetails";
import AdminBlog from "./pages/admin/AdminBlog";
import Blog2 from "./components/Blog";
import Blog2Details from "./components/BlogDetails";

function AppWrapper() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/projects/:id" element={<ProjectDetails />} /> */}
        <Route path="/Sell" element={<Sell />} />
        <Route path="/Blog" element={<Blog2 />} />
        <Route path="/blogs/:slug" element={<Blog2Details />} />
        <Route path="/buy" element={<BuyProjects />} />
        <Route path="/buy/:id" element={<BuyDetails />} />

        <Route path="/rent" element={<RentProjects />} />
        <Route path="/rent/:id" element={<RentDetails />} />
        <Route path="/offPlan" element={<OffPlan />} />
        <Route path="/offPlan/:id" element={<OffPlansDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="newsletter" element={<NewsletterPage />} />
          <Route path="emailer" element={<AdminEmailer />} />
          <Route path="subscriber" element={<AdminSubscriber />} />
          <Route path="leads" element={<AdminLeads />} />
          <Route path="chatbot" element={<ChatbotHistory />} />
          <Route path="property_listing" element={<ListProperty />} />
          <Route path="sendnewsletter" element={<NewsletterForm />} />
          <Route path="sendemailer" element={<Emailer />} />
          <Route path="blogs" element={<AdminBlog />} />
        </Route>
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
      {!isAdminRoute && <Chatbot />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
