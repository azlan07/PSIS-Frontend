import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage"

const App = () => {
  return (
    <BrowserRouter>
      {/* Rute Utama */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      {/* Rute Utama */}
    </BrowserRouter>
  );
}

export default App;