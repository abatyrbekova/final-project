import React from "react";
import { useNavigate } from "react-router-dom";
import "./shoppingCart.css";

import { useContext } from "react";
import { Context } from "../../Components/context/searchContext";
import { useState } from "react";

function ShoppingCart() {
  let navigate = useNavigate();
  const { date } = useContext(Context);
  let [showPop, setShowPop] = useState(false);

  // calculate how many nights will be booked
  // To calculate the time difference of two dates
  let differenceInTime =
    date[0].endDate.getTime() - date[0].startDate.getTime();

  // To calculate the no. of days between two dates
  let differenceInDays = differenceInTime / (1000 * 3600 * 24);

  let calculateNights = differenceInDays;

  const { roomCart } = useContext(Context);
  console.log(
    "🚀 ~ file: ShoppingCart.js ~ line 13 ~ ShoppingCart ~ roomCart",
    roomCart
  );

  // display the status of booking
  const handelClick = () => {
    setShowPop(true);
    setTimeout(() => setShowPop(false), 3000);
    // navigate to search page after 3 seconds
    setTimeout(() => navigate("/booking"), 3000);
  };
  return (
    <>
      {showPop && (
        <div className="pop">
          <p>Your booking successfully done</p>
        </div>
      )}
      <div className="main-container-shopping">
        <div className="big-container-shopping">
          <div className="bContainer-shopping">
            <div className="s-Search">
              <h2>Your Booking Confirmation</h2>
              <p>Room Name: {roomCart.name}</p>
              <p>Check in: {String(date[0].startDate).slice(0, 11)}</p>
              <p>Check out: {String(date[0].endDate).slice(0, 11)}</p>
              <p>
                Total Price:{" "}
                {roomCart.price
                  ? `${roomCart.price * calculateNights} Euro`
                  : null}{" "}
              </p>
              <p>Total Nights: {calculateNights}</p>
              <div className="btns">
                <button onClick={() => navigate("/booking")}>Go back</button>
                <button className="btn-shopping" onClick={handelClick}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
