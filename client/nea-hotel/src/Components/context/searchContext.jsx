import React from "react";
import { createContext, useState } from "react";

const Context = createContext(null);

const ContextProvider = (props) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });

  const [roomCart, setRoomCart] = useState({});

  const [rooms, setRooms] = useState();

  return (
    <Context.Provider
      value={{
        date,
        setDate,
        options,
        setOptions,
        rooms,
        setRooms,
        roomCart,
        setRoomCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
