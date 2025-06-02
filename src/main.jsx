import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Videography from "./pages/Videography.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/photography-website/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Videography" element={<Videography />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
