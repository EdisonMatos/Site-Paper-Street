import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HthPage from "./pages/HthPage.jsx";
import Index from "./pages/Index.jsx";
import "./index.css";
import LPTrabalhista from "./pages/LPTrabalhista.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sitesparaadvogados" element={<LPTrabalhista />} />
    </Routes>
  </Router>
);
