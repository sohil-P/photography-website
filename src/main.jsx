import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Videography from "./pages/videography.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/videography" element={<Videography />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
