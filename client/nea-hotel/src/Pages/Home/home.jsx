import React from "react";
import "./home.css";
import video from "./video/IGLUT2021VID.H264.mp4";

export default function Home() {
  return (
    <div className="containerHome">
      <div className="welcome-box">
        <video
          src={video}
          autoPlay={true}
          controls={true}
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
    </div>
  );
}
