import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import Navbar from "./Components/navbar";
import Home from "./Pages/Home/home";
import Stay from "./Pages/Stay/stay";
import Activities from "./Pages/Activities/activities";
<<<<<<< HEAD
import About from "./Pages/About/about";
=======
import Menu from "./Pages/EatAndDrink/menu";
>>>>>>> Development
import Contact from "./Pages/Contact/contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stay" element={<Stay />} />
<<<<<<< HEAD
        <Route path="/about" element={<About />} />
=======
        <Route path="/menu" element={<Menu />} />
>>>>>>> Development
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
