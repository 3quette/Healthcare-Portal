import React, { Component } from "react";
import Axios from "axios";
// import AmbulanceAdd from './AmbulanceAdd';
import Navbar from "./Navbar";
import { AiOutlineDown } from 'react-icons/ai';
import AdminHeader from "./AdminHeader";
import SimpleNavbar from "./SimpleNavbar";

export class DoctorAdd extends Component {
  state = {
    name: "",
    password: "",
    email: "",
    phone: "",
    address: "",
    type: "doctor",
    created_date: new Date(),
    modified_date: new Date(),
    hospital_id: "",
    speciality: "",
    qualification: "",
    fees: 0,
    hospitalList: [],
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let body = {
      name: this.state.name,
      password: "Test1234",
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      type: this.state.type,
      created_date: new Date(),
      modified_date: new Date(),
      hospital_id: this.state.hospital_id,
      speciality: this.state.speciality,
      qualification: this.state.qualification,
      fees: parseInt(this.state.fees),
    };

    Axios.post("http://[::1]:3000/users", body).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    alert("Doctor added successfully!");
    location.reload();
    return;
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user") ?? "false");
    if (!user) {
      window.open("/", "_self");
    }
    Axios.get("http://[::1]:3000/getHospitalsForDropdown").then((res) => {
      console.log(res);
      this.setState({ hospitalList: res.data });
    });
  }

  render() {
    console.log("this.state.hospitalList");
    console.log(this.state);
    return (
      <div className="Addpage_content">
        <SimpleNavbar />

        <div className="doctorAdd">
          <table>
            <tr>
              <td>
                <form>
                  <center>
                    {" "}
                    <div className="crud_head">
                      <p>
                        <u> ADD NEW DOCTOR </u>
                      </p>
                    </div>
                  </center>
                  <div className="crud_input">
                    <input
                      placeholder="Name"
                      type="text"
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                  </div>
                 
                  <div className="crud_input">
                    <input
                      placeholder="Email"
                      type="email"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>
                  <div className="crud_input">
                    <input
                      placeholder="Phone"
                      onChange={(e) => this.setState({ phone: e.target.value })}
                    />
                  </div>
                  {/* <div className="crud_input">
                    <input placeholder="Address" onChange={(e) => this.setState({ address: e.target.value })} />
                  </div> */}
                  {/* <div className="crud_input">
                    <input placeholder="Type" onChange={(e) => this.setState({ type: e.target.value })} />
                  </div> */}

                                <div className="crud_input">
                <select
                  value={this.state.hospital_id}
                  onChange={(e) => this.setState({ hospital_id: e.target.value })}
                >
                  {this.state.hospitalList.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
                <AiOutlineDown className="down-arrow-icon" />
              </div>

                  <div className="crud_input">
                    <input
                      placeholder="Speciality"
                      onChange={(e) =>
                        this.setState({ speciality: e.target.value })
                      }
                    />
                  </div>
                  <div className="crud_input">
                    <input
                      placeholder="Qualification"
                      onChange={(e) =>
                        this.setState({ qualification: e.target.value })
                      }
                    />
                  </div>
                  <div className="crud_input">
                    <input
                      placeholder="Fees"
                      onChange={(e) => this.setState({ fees: e.target.value })}
                    />
                  </div>
                  <div class="form_action_button">
                    <input
                      type="submit"
                      value="Submit"
                      className="add_btn"
                      onClick={this.handleSubmit}
                    />
                    <input type="reset" value="Reset" className="add_btn" />
                  </div>
                </form>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default DoctorAdd;
