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
    <div className="container">
      {/* {console.log(activities.length())} */}
      <div className="landing-img">
        <h3>ACTIVE HOLIDAYS</h3>
        <h3>throughout the aurora borealis season</h3>

        {/* <img src="/img/landing.jpg" alt="background-image" /> */}
      </div>

      <div className="cards">
        {activities &&
          activities.map((item, index) => (
            // console.log(item.image);

            <div className="card" key={index}>
              <div className="card-img ">
                <a>
                  {/* <img src="/img/activity/activity1.jpg" alt="img" /> */}
                  <img src={item.image} alt="img" />
                </a>
              </div>
              <div className="card-text">
                <div className="card-text-inner">
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
