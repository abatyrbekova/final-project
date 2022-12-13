import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

function Register() {
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

  return (
    <div className="r-containerContact">
      <div className="r-contact-img">
        <h3>Please fill in your Personal Information</h3>
      </div>

      <form className="r-containerContact-form " onSubmit={handleSave}>
        <div class="r-contact-form">
          <label className="r-form-text r-label" for="name">
            Name
          </label>

          <input
            className="r-form-text"
            placeholder="please enter your first name"
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          />
        </div>

        <div class="r-contact-form">
          <label className="r-form-text r-label">Last name</label>

          <input
            className="r-form-text"
            placeholder="please enter your last name"
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />
        </div>

        <div class="r-contact-form">
          <label className="r-form-text r-label">Email</label>

          <input
            className="r-form-text"
            placeholder="please enter your email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div class="r-contact-form">
          <label className="r-form-text r-label">Address</label>
          <input
            className="r-form-text"
            placeholder="please enter your address"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </div>
        <button className="r-btn-submit">Continue</button>
      </form>
    </div>
  );
}

export default Register;
