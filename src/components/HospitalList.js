import React, { Component } from "react";
import Axios from "axios";
import NavBar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

export class HospitalList extends Component {
  state = {
    hospitals: [],
    isOpen: false,
    showBooking: false,
    hospitalInfo: "",
    hospital_name: "",
    filterBy: "",
    isFilterbyEmpty: false,
  };
  handleFilter = () => {
    this.setState({ filterBy: this.state.searchTerm });
  };

  Reload = () => {
    window.location.reload();
  };
  handleSubmit = (event) => {
    alert("Hospital Scheduled successfully! ");
    location.reload();
    return;
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user") ?? "false");
    if (!user) {
      window.open("/", "_self");
    }
    Axios.get("http://[::1]:3000/hospitals").then((res) => {
      console.log(res);
      this.setState({ hospitals: res.data });
    });
  }

  render() {
    return (
      <div>
        <NavBar />

        <div className="doctor_banner">
          <img src="banner.jpg" width="100%" height="500rem" alt="banner" />
          <div className="doctor_head">
            <h1>View Hospitals</h1>
            <p>
              Our hospitals are distinguished models of health care service
              providers
              <br /> with a complete line of medical services
            </p>
          </div>
        </div>
        <div className="page_content">
        <div className="filter">
          <table>
            <tr>
              <td>
                <h2>Filter by</h2>{" "}
              </td>
              <td>
                <input
                  placeholder="Search by Hospital Name"
                  onChange={(event) =>
                    this.setState({ searchTerm: event.target.value })
                  }
                />
              </td>
              <td>
                <button className="search_btn" onClick={this.handleFilter}>
                  Search
                </button>
              </td>
              <td>
                <button className="search_btn" onClick={this.Reload}>
                  Refresh
                </button>
              </td>
            </tr>
          </table>
        </div>

        <div className="list_view">
          <div>
            <ul>
              {this.state.hospitals
                .filter(
                  (hospital) =>
                    hospital.name.includes(this.state.filterBy) ||
                    this.state.filterBy === ""
                )
                .map((hospital) => (
                  <button
                    className="list_ul"
                    onClick={() => {
                      localStorage.setItem("hospital_id", hospital.id);
                      window.open("DoctorView", "_self");
                    }}
                  >
                    <div>
                      <li>
                        <img
                          src="clinic.png"
                          height="400px"
                          alt="hospital_image"
                        ></img>
                        <li className="list_h1">
                          <h1> {hospital.name}</h1>
                        </li>
                      </li>
                    </div>{" "}
                  </button>
                ))}
              {this.state.isOpen ? this.state.hospitalInfo : ""}
            </ul>
          </div>
        </div>
        </div>
        <ScrollToTopButton/>
        
        <Footer />
      </div>
    );
  }
}

export default HospitalList;
