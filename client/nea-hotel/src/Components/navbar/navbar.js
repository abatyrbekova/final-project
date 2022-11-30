import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";

import NavbarLogo from "./img/nea_hotel_logo.jpg";
import NavbarDarkLogo from "./img/nea_hotel_dark_logo.png";

export default function Navbar() {
  const navigate = useNavigate();

  const [isTransparent, setIsTransparent] = useState(true);

  const changeColor = () => {
    console.log("changeColor");
    if (window.scrollY >= 90) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <nav className={isTransparent ? "nav" : "nav nav-scrolled"}>
      <div className="navbar-logo">
        <NavLink to="/">
          { window.scrollY >= 90 ? <img className="logo" src={NavbarDarkLogo} /> : <img className="logo" src={NavbarLogo} />}
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li className="nav-link">
          <NavLink to="/stay">Accommodation</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/menu">Eat & Drink</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/activities">Activities</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="navbar__auth">
        <button
          className="btn btn--primary"
          onClick={() => navigate("/booking")}
        >
          Book Now
        </button>
      </div>
    </nav>
  );
}
