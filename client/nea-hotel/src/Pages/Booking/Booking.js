import React, { useEffect } from "react";
//import { faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./booking.css";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
//import { useNavigate } from "react-router-dom";
//import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { SearchContext } from "../../context/SearchContext.js";

function Booking({ type }) {
  let navigate = useNavigate();

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });

  const [rooms, setRooms] = useState();

  //increase and decrease the number of adults , children ,room
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // get available rooms based on chosen date and the number of adults & children
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `/api/orders/find?startDate=${date[0].startDate
          .toISOString()
          .slice(0, 10)}&endDate=${date[0].endDate
          .toISOString()
          .slice(0, 10)}&adults=${options.adults}&children=${options.children}`
      );
      setRooms(data);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handelSearch = () => {
    fetchData();
    //console.log(rooms);
  };

  const handleRegister = () => {
    //console.log("The id of the booked room is ", id);
    navigate("/register");
  };

  const [RESET_SEARCH, setReset_Search] = useState(true);
  // console.log(rooms);

  return (
    <div className="main-container-booking">
      {RESET_SEARCH ? (
        <div className="big-container">
          <div className="bContainer">
            <h1 className="bTitle">Book a room</h1>

            <div className="bSearch">
              <div className="bSearchItem">
                {/*  <FontAwesomeIcon icon={faCalendarDays} className="bIcon" /> */}
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="bSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="bSearchItem adults-children">
                {" "}
                {/*<FontAwesomeIcon icon={faPerson} className="bIcon" /> */}
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="bSearchText"
                >{`${options.adults} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adults</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adults <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adults", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adults}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adults", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handelSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="r-cards new">
            {rooms &&
              rooms.map((item, index) => (
                <div className="r-card" key={item._id}>
                  <div className="r-card-img ">
                    <a>
                      <img src={item.Picture} alt="img" />
                    </a>
                  </div>
                  <div className="r-card-text">
                    <div className="r-card-text-inner">
                      <h2>{item.name}</h2>
                      <p>
                        <b className="bold-text">Description: </b>
                        {item.description}
                      </p>
                      <p>
                        <b className="bold-text">Amenities: </b>
                        {item.amenities}
                      </p>
                      {/* <p>{item.description}</p> */}
                      <p>
                        <b className="bold-text">Adults:</b> {item.adults}
                      </p>
                      <p>
                        <b className="bold-text">Children: </b>
                        {item.children}
                      </p>
                      <p>
                        <b className="bold-text">Price: </b>
                        {item.price}
                      </p>
                      <button className="btn-r-card" onClick={handleRegister}>
                        book now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="big-container">
          <p>put hier the reserved room</p>
        </div>
      )}
    </div>
  );
}

export default Booking;
