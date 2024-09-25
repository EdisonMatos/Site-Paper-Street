import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import "./index.css";
import LPSitesAdvogados from "./pages/LPSitesAdvogados.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sitesparaadvogados" element={<LPSitesAdvogados />} />
    </Routes>
  </Router>
);
