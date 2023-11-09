import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Axios from "axios";
import Footer from "./Footer";
import NavBar from "./Navbar";
import ScrollToTopButton from "./ScrollToTopButton";

export class Appointments extends Component {
  state = {
    id: "",
    users: [],
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
      this.setState({ users: res.data });
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

    Axios.get("http://[::1]:3000/getSchedulesByPatientId/" + user.id).then(
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
        <NavBar />
        <div className="doctor_banner">
          <img src="banner.jpg" width="100%" height="500rem" alt="banner" />
          <div className="doctor_head">
            <h1>My Appointments</h1>
            
          </div>
        </div>

     
        <div className="page_content">
        <div className="cart">
          <Table>
            <thead>
              <tr>
                <th>DOCTOR</th>
                <th>TIME</th>
              </tr>
            </thead>
            <tbody>
              {this.state.schedules &&
                this.state.schedules.map((schedule) => (
                  <tr className="list_ul">
                    <td>
                      {this.state.users.find(
                        (item) => item.id === schedule.doctor_id
                      )?.name ?? "-"}
                    </td>
                    <td>{schedule.date_time}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
</div>
     <ScrollToTopButton/>
      </div>
    );
  }
}

export default Appointments;
