import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

function Register() {
  // get all users and find in these users the one who match the signed in email => in this case it will bring u the object of the singed in

  //let [users, setUsers] = useState([]);
  // console.log("🚀 ~ file: Register.js ~ line 9 ~ Register ~ users", users);
  let navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/create", data);
      navigate("/shopping");
      console.log("🚀 ~ handleSave ~ response", response.data);
    } catch (error) {
      console.log("Error registering", error.message);
    }
  };

  // useEffect(() => {
  //   axios.get("/api/users").then((result) => setUsers(result.data));
  // }, []);

  return (
    <div className="containerContact">
      <div className="contact-img">
        <h3>Please fill in your Personal Information</h3>
      </div>

      <form className="containerContact-form " onSubmit={handleSave}>
        <div class="contact-form">
          <label className="form-text" for="name">
            Name
          </label>

          <input
            className="form-text"
            placeholder="please enter your first name"
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          />
        </div>

        <div class="contact-form">
          <label className="form-text">last name</label>
          <input
            className="form-text"
            placeholder="please enter your last name"
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />
        </div>
        {/* <!-- email --> */}
        <div class="contact-form">
          <label className="form-text">Email</label>

          <input
            className="form-text"
            placeholder="please enter your email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        {/* Address */}

        <div class="contact-form">
          <label className="form-text">Address</label>
          <input
            className="form-text"
            placeholder="please enter your address"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </div>
        <button className="btn-submit">Continue</button>
      </form>
    </div>
  );
}

export default Register;
