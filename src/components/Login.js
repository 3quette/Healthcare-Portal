import React, { useState, useEffect } from "react";
import Axios from "axios";
import Home from "./Home";
import SignUp from "./SignUp";
import "./App.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showHome, setShowHome] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://[::1]:3000/users").then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      console.log(user.type);

      if (user.type === "doctor") {
        console.log("DAAC SAAB");
        navigate("/DoctorSchedule");
      } else if (user.type === "patient") {
        navigate("/Home");
      } else if (user.type === "admin") {
        navigate("/AdminPortal");
      } else if (user.type === "pharmacist") {
        navigate("/MedicineCRUD");
      } else if (user.type === "hospital_admin") {
         navigate("/DoctorCRUD");
       }
    } else {
      // navigate("/DoctorCRUD");
      alert("Invalid User Type.")
    }
  };

  return (
    <div>
      {showHome ? (
        <Home />
      ) : showSignUp ? (
        <SignUp />
      ) : (
        <div>
          <div className="login_img">
            <center>
              <img src="login.png" width="100%" alt="laptop" />
            </center>
          </div>

          <div className="login_container">
            <form id="login-form" onSubmit={handleSubmit}>
              <div className="login_head">
                <p>LOGIN</p>
              </div>

              <div className="login_input">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="login_input">
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="login_btn" value="Register" type="submit">
                CONTINUE
              </button>
              <button
                className="signup_btn"
                value="Register"
                type="button"
                onClick={() => {
                  console.log("DOGGG");
                  setShowSignUp(true);
                }}
              >
                Don't have an account? Sign up
              </button>
            </form>
            <button></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
