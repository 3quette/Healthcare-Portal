import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Axios from "axios";
import Footer from "./Footer";
import AdminHeader from "./AdminHeader";
import SimpleNavbar from "./SimpleNavbar";

export class DoctorSchedule extends Component {
  state = {
    id: "",
    hospitals: [],
    isOpen: false,
    hospitalInfo: "",
    D: "",
    name: "",
    hospital_id: "",
    speciality: "",
    fees: 0,
    qualification: "",
  };
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user") ?? "false");
    if (!user) {
      window.open("/", "_self");
    }
    this.getUsersSchedule();

    Axios.get("http://[::1]:3000/users").then((res) => {
      console.log(res);
      this.setState({ hospitals: res.data });
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
  getUsersSchedule() {
    const user = JSON.parse(localStorage.getItem("user"));

    Axios.get("http://[::1]:3000/getSchedulesByDoctorId/" + user.id).then(
      (res) => {
        console.log(res);
        this.setState({ schedules: res.data });
      }
    );
  }

  render() {
    console.log(this.state.schedules);
    return (
      <div>
        <SimpleNavbar />

        <center>
          {" "}
          <div className="page_head">
            <p>MY APPOINTMENTS</p>
          </div>
        </center>

        <div className="cart">
          <Table>
            <thead>
              <tr>
                {/* <th>DOCTOR</th> */}
                <th>TIME</th>
              </tr>
            </thead>
            <tbody>
              {this.state.schedules &&
                this.state.schedules.map((schedule) => (
                  <tr className="list_ul">
                    {/* <td>
          {schedule.doctor_id}
        </td> */}
                    <td>{schedule.date_time}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default DoctorSchedule;
