import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import "./index.css";
import LPSitesAdvogados from "./pages/LPSitesAdvogados.jsx";
import LPSitesDentistas from "./pages/LPSitesDentistas.jsx";
import Contrato from "./pages/Contrato.jsx";
import Contrato15Dias from "./pages/Contrato15Dias.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/contrato" element={<Contrato />} />
      <Route path="sites/advogados" element={<LPSitesAdvogados />} />
      <Route path="sites/dentistas" element={<LPSitesDentistas />} />
    </Routes>
  </Router>
);
