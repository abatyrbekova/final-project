import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import Navbar from "./Components/navbar/navbar";
import Home from "./Pages/Home/home";
import Stay from "./Pages/Stay/stay";
import Activities from "./Pages/Activities/activities";
import Menu from "./Pages/EatAndDrink/menu";
import Contact from "./Pages/Contact/contact";
import Footer from "./Components/footer/footer";

import "./App.css";
import Booking from "./Pages/Booking/Booking";

import Register from "././Pages/Register/Register";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";

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
        <Route path="/register" element={<Register />} />
        <Route path="/shopping" element={<ShoppingCart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
