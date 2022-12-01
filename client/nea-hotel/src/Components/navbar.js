import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <div className="navbar-logo">
        <NavLink to="/">
          {/* <img
            className="logo"
            src={process.env.PUBLIC_URL + "/img/logo/Logo dark-bg.png"}
          /> */}
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li className="nav-link">
          <NavLink to="/stay">Stay</NavLink>
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
          onClick={() => navigate("booking")}
        >
          Booking
        </button>
      </div>
    </nav>
  );
}