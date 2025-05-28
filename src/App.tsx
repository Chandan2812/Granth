import "./App.css";
import AcasaLandingPage from "./pages/GoaProp";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/goa" element={<AcasaLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
