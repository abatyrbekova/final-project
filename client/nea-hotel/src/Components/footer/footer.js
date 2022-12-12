import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

// Import css styling
import "./footer.css";

// Import logo
import FooterLogoLight from "./img/nea_hotel_light_logo.png";
import FooterLogoDark from "./img/nea_hotel_dark_logo.png";

// Import react icons
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

export default function Footer() {
  const [hotel, setHotel] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/hotel");
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch data from server
  useEffect(() => {
    fetchData().then((data) => {
      console.log(data);
      setHotel(data);
    });
  }, []);

  return (
    <div className="footer-container">
      <div>
        <NavLink to="/">
          <img
            className="footer-logo"
            src={FooterLogoLight}
            alt="logo"
            onMouseOver={(e) => (e.target.src = FooterLogoDark)}
            onMouseOut={(e) => (e.target.src = FooterLogoLight)}
          />
        </NavLink>
      </div>
      <ul className="footer-links">
        <li className="footer-nav-link">
          <a href="/">Home</a>
        </li>
        <li className="footer-nav-link">
          <a href="/stay">Accommodation</a>
        </li>
        <li className="footer-nav-link">
          <a href="/menu">Eat & Drink</a>
        </li>
        <li className="footer-nav-link">
          <a href="/activities">Activities</a>
        </li>
        <li className="footer-nav-link">
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="footer-contact-container">
        <h2>Contact us:</h2>
        <br></br>
        {hotel &&
          hotel.map((item, index) => (
            <div className="footer-contact" key={index}>
              <p>
                <b>{item.hotelName}</b>
              </p>
              <p>{item.location}</p>
              <p>{item.phone}</p>
              <p>{item.email}</p>
            </div>
          ))}
      </div>
      <div className="footer-sm">
        <p>
          <b>Other contact information:</b>
        </p>
        <ul className="footer-sm-links">
          <li className="footer-sm-link">
            <AiFillFacebook />
          </li>
          <li className="footer-sm-link">
            <FaTripadvisor />
          </li>
          <li className="footer-sm-link">
            <AiOutlineInstagram />
          </li>
        </ul>
      </div>
    </div>
  );
}
