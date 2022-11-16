import React, { useState, useEffect } from "react";
import axios from "axios";

import "./stay.css";

export default function Stay() {
  const [rooms, setRooms] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/rooms");
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // fetch data from server
  useEffect(() => {
    fetchData().then((data) => setRooms(data));
  }, []);

  return (
    <div className="container">
      {/* {console.log(rooms.length())} */}
      <div className="stay-img">
        <p>
          Magic Nights in a glass igloo
          <br></br>
          Under the Arctic Sky
        </p>

        {/* <img
          src="./img/rooms/igloo-interior-panoramic-view-autom-Sunset.jpg"
          alt="background-imGlass-age"
        /> */}
      </div>

      <div className="cards">
        {rooms &&
          rooms.map((item, index) => (
            // console.log(item.image);

            <div className="card" key={index}>
              <div className="card-img ">
                <a>
                  {/* <img src="/img/activity/activity1.jpg" alt="img" /> */}
                  <img src={item.Picture} alt="img" />
                </a>
              </div>
              <div className="card-text">
                <div className="card-text-inner">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <button className="btn-card">book now</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
