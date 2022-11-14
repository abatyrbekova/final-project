import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import Navbar from "./Components/navbar";
import Home from "./Pages/Home/home";
import Stay from "./Pages/Stay/stay";
import Activities from "./Pages/Activities/activities";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stay" element={<Stay />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
