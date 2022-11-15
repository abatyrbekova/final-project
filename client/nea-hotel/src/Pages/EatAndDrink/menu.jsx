import React, { useState, useEffect }  from "react";
import axios from "axios";
import "./menu.css";


export default function Menu() {
    const [menu, setMenu] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await  axios.get("/api/menu");
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    // Fetch data from server
    useEffect(() => {
        fetchData().then((data) => 
            setMenu(data));
        }, []);

    return (
        <div className="container">
            <div className="landing-img">
                <p>
                    EAT & DRINK
                    <br></br>
                    Experience our local gastronomy under the most breathtaking views
                </p>
            </div>
            
            <div className="cards">
                {menu && menu.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="card-img">
                            <a>
                                <img src={item.img} alt="food" />
                            </a>
                        </div>
                        <div className="card-text">
                            <div className="card-text-inner">
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                                <p>{item.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>;
        </div>
    );
}

