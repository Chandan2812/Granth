import "./App.css";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sell from "./pages/Sell";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import ProjectDetails from "./pages/ProjectDetails";
import { BuyProjects } from "./pages/Buy";
import AboutPage from "./pages/AboutPage";

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
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
