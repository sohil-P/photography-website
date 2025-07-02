import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Videography from "./pages/Videography.jsx";
import Photography from "./pages/Photography.jsx";
import Silver from "./pages/Silver.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/photography-website/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Videography" element={<Videography />} />
        <Route path="/Photography" element={<Photography />} />
        <Route path="/Silver" element={<Silver />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
