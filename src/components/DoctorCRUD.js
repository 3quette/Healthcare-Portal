import React, { Component } from "react";
import DoctorEdit from "./DoctorEdit";
import DoctorDelete from "./DoctorDelete";
import Axios from "axios";
import Footer from "./Footer";
import AdminHeader from "./AdminHeader";
import ScrollToTopButton from "./ScrollToTopButton";
import SimpleNavbar from "./SimpleNavbar";

export class DoctorCRUD extends Component {
  state = {
    id: "",
    doctors: [],
    isOpen: false,
    doctorInfo: "",
    hospital_name: "",
    D: "",
    name: "",
    hospital_id: "",
    speciality: "",
    fees: 0,
    qualification: "",
    filterBy: "",
    isFilterbyEmpty: false,
  };
  handleFilter = () => {
    this.setState({ filterBy: this.state.searchTerm });
  };

  Reload = () => {
    window.location.reload();
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
  UpdateState = (ID, NAME, HOSPITAL_ID, SPEC, FEES, QUALIF) => {
    this.setState({
      id: ID,
      name: NAME,
      hospital_id: HOSPITAL_ID,
      speciality: SPEC,
      fees: FEES,
      qualification: QUALIF,
      isOpen: true,
    });
  };
  UpdateDeleteState = (ID) => {
    this.setState({ id: ID });
  };

  render() {
    return (
      <div>
        <SimpleNavbar />
        <center>
          {" "}
          <div className="page_head">
            <p>DOCTORS</p>
          </div>
        </center>
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
        <button
          className="add_btn"
          onClick={() => {
            window.open("/DoctorAdd", "_self");
            this.setState({ showDoctor: true });
          }}
        >
          Add new Doctor
        </button>
        <button
          className="add_btn"
          onClick={() => {
            window.open("/AddSchedule", "_self");
            this.setState({ showDoctor: true });
          }}
        >
          Manage Schedule
        </button>
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
                      this.UpdateDeleteState(doctor.id);
                    }}
                  >
                    <div>
                      <li>
                        <img
                          src="doctor.png"
                          height="400px"
                          alt="doctor_image"
                        ></img>
                        <li className="list_h1">
                          <h1>Doctor {doctor.name}</h1>
                        </li>
                        <li className="list_h4">
                          <h4>{doctor.speciality}</h4>
                        </li>
                        <li className="list_h2">
                          <h2>{doctor.hospital_name}</h2>
                        </li>
                        <li>
                          <button
                            className="admin_crud_btn"
                            onClick={() => {
                              this.UpdateState(
                                doctor.id,
                                doctor.name,
                                doctor.hospital_id,
                                doctor.speciality,
                                doctor.fees,
                                doctor.qualification
                              );
                            }}
                          >
                            Edit
                          </button>
                          <DoctorDelete id={this.state.id} />
                        </li>
                      </li>
                    </div>{" "}
                  </button>
                ))}
              {this.state.isOpen ? this.state.doctorInfo : ""}
            </ul>
            <DoctorEdit
              onClose={() => {
                this.setState({ isOpen: false });
              }}
              isOpen={this.state.isOpen}
              id={this.state.id}
              name={this.state.name}
              speciality={this.state.speciality}
              hospital_id={this.state.hospital_id}
              fees={this.state.fees}
              qualification={this.state.qualification}
            />
          </div>
        </div>
        </div>
        <ScrollToTopButton/>
        <Footer />
      </div>
    );
  }
}

export default DoctorCRUD;
