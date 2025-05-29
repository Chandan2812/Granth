import "./App.css";
import AcasaLandingPage from "./pages/GoaProp";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sell from "./pages/Sell";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/goa" element={<AcasaLandingPage />} />
        <Route path="/Sell" element={<Sell />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
