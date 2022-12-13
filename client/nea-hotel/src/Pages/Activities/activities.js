import React, { useState, useEffect } from "react";
import axios from "axios";

import "./activities.css";

export default function Activites() {
  const [activities, setActivities] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/activities");
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // fetch data from server
  useEffect(() => {
    fetchData().then((data) => setActivities(data));
  }, []);

  return (
    <div className="activity-container">
      <div className="activity-landing-img">
        <h3>Active Holidays throughout the season</h3>
      </div>

      <div className="activity-cards">
        {activities &&
          activities.map((item, index) => (
            <div className="activity-card" key={index}>
              <div className="activity-card-img ">
                <a id="activity">
                  <img src={item.image} alt="img" />
                </a>
              </div>
              <div className="activity-card-text">
                <div className="activity-card-text-inner">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
