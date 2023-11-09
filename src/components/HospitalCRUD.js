import React, { Component } from "react";
import HospitalEdit from "./HospitalEdit";
import HospitalDelete from "./HospitalDelete";
import Axios from "axios";
import Footer from "./Footer";
import AdminHeader from "./AdminHeader";
import ScrollToTopButton from "./ScrollToTopButton";

export class HospitalCRUD extends Component {
  state = {
    id: "",
    hospitals: [],
    isOpen: false,
    hospitalInfo: "",
    D: "",
    name: "",
    phone: "",
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
    Axios.get("http://[::1]:3000/hospitals").then((res) => {
      console.log(res);
      this.setState({ hospitals: res.data });
    });
  }
  UpdateState = (ID, NAME, PHONE) => {
    this.setState({
      id: ID,
      name: NAME,
      phone: PHONE,
      isOpen: true,
    });
  };
  UpdateDeleteState = (ID) => {
    this.setState({ id: ID });
  };

  render() {
    return (
      <div>
        <AdminHeader />
        <center>
          {" "}
          <div className="page_head">
            <p>HOSPITALS</p>
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
        <button
          className="add_btn"
          onClick={() => {
            window.open("/HospitalAdd", "_self");
            this.setState({ showHospital: true });
          }}
        >
          Add new Hospital
        </button>
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
                      this.UpdateDeleteState(hospital.id);
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
                          <h1>{hospital.name}</h1>
                        </li>
                        <li>
                          <button
                            className="admin_crud_btn"
                            onClick={() => {
                              this.UpdateState(
                                hospital.id,
                                hospital.name,
                                hospital.phone
                              );
                            }}
                          >
                            Edit
                          </button>
                          <HospitalDelete id={this.state.id} />
                        </li>
                      </li>
                    </div>{" "}
                  </button>
                ))}
              {this.state.isOpen ? this.state.hospitalInfo : ""}
            </ul>
            <HospitalEdit
              onClose={() => {
                this.setState({ isOpen: false });
              }}
              isOpen={this.state.isOpen}
              id={this.state.id}
              name={this.state.name}
              phone={this.state.phone}
         
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

export default HospitalCRUD;
