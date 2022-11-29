import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

function Register() {
  // get all users and find in these users the one who match the signed in email => in this case it will bring u the object of the singed in

  let [users, setUsers] = useState([]);
  // console.log("🚀 ~ file: Register.js ~ line 9 ~ Register ~ users", users);
  let navigate = useNavigate();

  const [data, setData] = useState({
    // userName: "",
    // email: "",
    // pass: "",
    //   name: "",

    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });
  let [signin, setSignin] = useState({
    email: "",
    password: "",
  });
  let [switching, setSwitching] = useState(1);
  // lets get the signed in object
  // let findUser = users.find((item) => item.email === signin.email);

  const handleSave = async () => {
    try {
      const response = await axios.post("/api/users/register", data);
      alert("The user is successfully registered !");
      console.log("🚀 ~ handleSave ~ response", response);
    } catch (error) {
      console.log("Error registering", error.message);
    }
  };

  let handleSubmitSignin = (e) => {
    e.preventDefault();
    if (users.some((singleUser) => singleUser.email === signin.email)) {
      navigate("/");
    } else {
      alert("This user is not exist !");
    }
    // await axios.post("/api/users/login", signin);
  };
  let handleChangeSignin = (e) => {
    setSignin({ ...signin, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios.get("/api/users").then((result) => setUsers(result.data));
  }, []);

  return (
    <div className="register">
      <div className="switching">
        <button onClick={() => setSwitching(1)}>Register</button>
        <button onClick={() => setSwitching(2)}>Sign in</button>
      </div>

      {switching === 1 && (
        <div className="form">
          <input
            placeholder="type your first name"
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          />
          <input
            placeholder="type your last name"
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />

          <input
            placeholder="type your username"
            value={data.userName}
            onChange={(e) => setData({ ...data, userName: e.target.value })}
          />

          <input
            placeholder="type your email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            placeholder="type your pass"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <button onClick={handleSave}>Register</button>
        </div>
      )}

      {switching === 2 && (
        <div className="form">
          <input
            onChange={handleChangeSignin}
            type="email"
            name="email"
            id=""
            placeholder="Email..."
            value={signin.email}
          />
          <input
            onChange={handleChangeSignin}
            type="password"
            name="password"
            id=""
            placeholder="password..."
            value={signin.password}
          />

          <button onClick={handleSubmitSignin}>Sign in</button>
        </div>
      )}
    </div>
  );
}

export default Register;
