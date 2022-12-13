import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Import css styling
import "./navbar.css";

// Import logo
import NavbarLogo from "./img/nea_hotel_logo.jpg";
import NavbarDarkLogo from "./img/nea_hotel_dark_logo.png";

// Import react icons
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

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
      <NavLink to="/">
        {window.scrollY >= 90 ? (
          <img className="logo" src={NavbarDarkLogo} alt="logo" />
        ) : (
          <img className="logo" src={NavbarLogo} alt="logo" />
        )}
      </NavLink>
      <input type="checkbox" id="check" />
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
      <button className="nav-btn" onClick={() => navigate("/booking")}>
        Book Now
      </button>
      <label for="check">
        <i className="humburgerMenu">
          <GiHamburgerMenu />
        </i>
        <i className="cancel">
          <MdClose />
        </i>
      </label>
    </nav>
  );
}
