import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import { Button } from "bootstrap";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="Navigation-Bar">
            <Header />
            <Link to="/Home">
              <li className="navbar-items">Home</li>
            </Link>
            <Link to="/HospitalList">
              <li className="navbar-items">Hospitals</li>
            </Link>
            <Link to="/DoctorList">
              <li className="navbar-items">Doctors</li>
            </Link>
            <Link to="/MedicineList">
              <li className="navbar-items">Pharmacy</li>
            </Link>
            <Link to="/Appointments">
              <li className="navbar-items">My appointments</li>
            </Link>
            <Link to="/OnlineConsultancy">
              <li className="navbar-items">Online consultancy</li>
            </Link>
            <Link to="/Cart">
              <li className="navbar-items">My Cart</li>
            </Link>
            <Link >
            <li className="navbar-items">
              <button className="logout_btn"
                onClick={() => {
                  localStorage.clear();
                  location.replace("/");
                }}
              >
                Logout
              </button>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
