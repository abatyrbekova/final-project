import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import Navbar from "./Components/navbar";
import Home from "./Pages/Home/home";
import Stay from "./Pages/Stay/stay";
import Activities from "./Pages/Activities/activities";
import Menu from "./Pages/EatAndDrink/menu";
import Contact from "./Pages/Contact/contact";

import "./App.css";
import Booking from "./Pages/Booking/Booking";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stay" element={<Stay />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;