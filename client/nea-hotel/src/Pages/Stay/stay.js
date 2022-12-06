import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./stay.css";

export default function Stay() {
  const [rooms, setRooms] = useState([]);
  let navigate = useNavigate();

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/rooms");
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  let handleBook = () => {
    navigate("/booking");
  };

  // fetch data from server
  useEffect(() => {
    fetchData().then((data) => setRooms(data));
  }, []);

  return (
    <div className="stay-container">
      <div className="stay-img">
        <h3>Magic Nights under the sky</h3>
      </div>

      <div className="stay-cards">
        {rooms &&
          rooms.map((item, index) => (
            <div className="stay-card" key={index}>
              <div className="stay-card-img ">
                <a id="stay">
                  <img src={item.Picture} alt="img" />
                </a>
              </div>
              <div className="stay-card-text">
                <div className="stay-card-text-inner">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <button onClick={handleBook} className="btn-stay-card">
                    book now
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
