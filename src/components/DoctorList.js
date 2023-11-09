import React, { Component } from "react";
import Axios from "axios";
import NavBar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";


export class DoctorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilterbyEmpty: false,
      showBooking: false,
      doctors: [],
      schedules: [],
      isOpen: false,
      doctorInfo: "",
      hospital_name: "",
      schedule_id: "",
      showComponent: false,
      date: new Date(),
      filterBy: "",
      hoverId:null
    };
  }
  handleFilter = () => {
    this.setState({ filterBy: this.state.searchTerm });
  };

  Reload = () => {
    window.location.reload();
  };

  handleSubmit = (event) => {
    const user = JSON.parse(localStorage.getItem("user"));
    Axios.patch("http://[::1]:3000/schedules/" + this.state.schedule_id, {
      user_id: user.id,
    }).then((res) => {
      console.log(res);
      setTimeout(() => {
        alert("Appointment Scheduled successfully!");
        location.reload();
      }, 10);
    });

    return;
  };
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user") ?? "false");
    if (!user) {
      window.open("/", "_self");
    }
    Axios.get("http://[::1]:3000/getDoctorForDisplay").then((res) => {
      console.log(res);
      this.setState({ doctors: res.data });
    });
  }
  getDoctorsSchedule(doctorId) {
    Axios.get("http://[::1]:3000/schedules/" + doctorId).then((res) => {
      console.log(res);
      this.setState({ schedules: res.data });
      setTimeout(() => {
        this.ondoctorClick(doctorId);
      }, 10);
    });
  }
  ondoctorClick(doctorid) {
    let doctorInfo = "";
    this.state.doctors.map((doctor) => {
      if (doctor.id === doctorid) {
        doctorInfo = (
          <div id="more_info">
            <button
              id="closebutton"
              onClick={() => {
                this.setState({ isOpen: false });
              }}
            >
              &times;
            </button>
            <div className="crud_head">
              <p>Full Information</p>
            </div>
            <div id="more_info_content">
              <div className="edit_input">
                <label>Name:</label>
                <input value={doctor.name} />
              </div>
              <div className="edit_input">
                <label>Hospital:</label>
                <input value={doctor.hospital_name} />
              </div>
              <div className="edit_input">
                <label>Speciality:</label>
                <input value={doctor.speciality} />
              </div>
              <div className="edit_input">
                <label>Fees:</label>
                <input value={doctor.fees} />
              </div>
            </div>
            <div className="edit_input">
              <label>Timings:</label>
              <br />
              <select
                value={this.state.schedule_id}
                onChange={(e) => {
                  console.log(e.target.value);
                  this.setState({ schedule_id: e.target.value });
                  setTimeout(() => {
                    this.ondoctorClick(doctorid);
                  }, 10);
                }}
              >
                {this.state.schedules.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
              {/* <input placeholder="Hospital_id" onChange={(e) => this.setState({ hospital_id: e.target.value })} /> */}
            </div>
            <button
              className="crud_btn"
              type="submit"
              onClick={this.handleSubmit}
            >
              Schedule Appointment
            </button>
          </div>
        );
      }
      return doctor;
    });

    this.setState({ isOpen: true, doctorInfo: doctorInfo });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="doctor_banner">
          <img src="banner.jpg" width="100%" height="500rem" alt="banner" />
          <div className="doctor_head">
            <h1>Our Doctors</h1>
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
                  placeholder="Search by Doctors Speciality"
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
              {this.state.doctors
                .filter(
                  (doctor) =>
                    doctor.speciality.includes(this.state.filterBy) ||
                    this.state.filterBy === ""
                )
                .map((doctor) => (
                  <button
  className="list_ul"
  onClick={() => {
    this.getDoctorsSchedule(doctor.id);
  }}
>
 <div className="button-wrapper">
  
  <img src="doctor.png" height="400px" alt="doctor_image"></img>
  <h1>Doctor {doctor.name}</h1>
  <h4>{doctor.speciality}</h4>
  <h2>{doctor.hospital_name}</h2>

  <p className="read-more">Read More</p>
</div>

</button>

                ))}
              {this.state.isOpen ? this.state.doctorInfo : ""}
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

export default DoctorList;
