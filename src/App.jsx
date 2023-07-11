import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from './components';
import LandingPage from "./pages/LandingPage"

const App = () => {
  return (
    <BrowserRouter>
      {/* Main Route */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      {/* Main Route */}

      {/* Login Route */}
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
      {/* Login Route */}
    </BrowserRouter>
  );
}

export default App;