import React from "react";
import "./style.css";

export default function Home() {
    return (
        <div>
            <video className="home-video" src={process.env.PUBLIC_URL + '/img/video/IGLUT2021VID.H264.mp4'} />


            {/* <img className="home-img" src="/img/rooms/room3.jpg" /> */}
        </div>
    );
}   