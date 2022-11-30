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
        <div className="containerMenu">
            <div className="tableIgloosView-img">
                {/* <div className="tableIglooView-img-h3">   
                </div> */}
                <h3>
                    Experience our local cuisine under the most breathtaking views
                </h3>
                


            </div>
            
            <div className="cardsMenu">
                {menu && menu.map((item, index) => (
                    <div className="cardMenu" key={index}>
                        <div className="card-menu-img">
                            <a>
                                <img src={item.images} alt="food" />
                            </a>
                        </div>
                        <div className="card-menu-text">
                            <div className="card-menu-text-inner">
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                                <h3>{item.time}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

