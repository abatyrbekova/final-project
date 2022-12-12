import React, { useState, useEffect } from "react";
import axios from "axios";

// Import css styling
import "./home.css";

// Import ImageGallery
import ImageGallery from "react-image-gallery";

// Import images
import img1 from "./img/lounge.jpg";
import img2 from "./img/barView.jpg";
import img3 from "./img/tableGlassRoof.jpg";
import img4 from "./img/winterHouse.jpg";
import img5 from "./img/topViewJacuzzi.jpg";
import img6 from "./img/bathroom.jpg";
import img7 from "./img/Glass-igloo-1.jpg";
import img8 from "./img/Glass-igloo-2.webp";
import img9 from "./img/Glass-igloo-3.jpg";
import img10 from "./img/Glass-igloo-4.jpg";
import img11 from "./img/Glass-igloo-5.jpg";
import img12 from "./img/iglooNightOutside.jpg";

// Import video
import video from "./video/IGLUT2021VID.H264.mp4";

export default function Home() {
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

  // Gallery images
  const images = [
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3,
    },
    {
      original: img4,
      thumbnail: img4,
    },
    {
      original: img5,
      thumbnail: img5,
    },
    {
      original: img6,
      thumbnail: img6,
    },
    {
      original: img7,
      thumbnail: img7,
    },
    {
      original: img8,
      thumbnail: img8,
    },
    {
      original: img9,
      thumbnail: img9,
    },
    {
      original: img10,
      thumbnail: img10,
    },
    {
      original: img11,
      thumbnail: img11,
    },
    {
      original: img12,
      thumbnail: img12,
    },
  ];

  return (
    <div className="containerHome">
      <div className="welcome-box">
        <video
          src={video}
          autoPlay={true}
          controls={false}
          muted={true}
          className="welcome-vid"
        />
        <div className="welcome-text">
          <h1>
            NEA Hotel
            <span>the first glass igloo hotel in Germany</span>
          </h1>
          <a href="http://localhost:3000/stay">
            <button className="learn-about-btn" type="button">
              Learn about the igloos
            </button>
          </a>
        </div>
      </div>
      <div className="about-container">
        {hotel &&
          hotel.map((item, index) => (
            <div className="about-info" key={index}>
              <p>{item.description}</p>
              <br></br>
              <p>{item.amenities}</p>
            </div>
          ))}
      </div>
      <ImageGallery items={images} />
      <div className="about-container">
        {hotel &&
          hotel.map((item, index) => (
            <div className="about-info" key={index}>
              <p>{item.priceRange}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
