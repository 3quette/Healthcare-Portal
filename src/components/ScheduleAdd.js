import React, { Component } from "react";
import Axios from "axios";
import SimpleNavbar from "./SimpleNavbar";

export class ScheduleAdd extends Component {
  state = {
    created_date: new Date(),
    modified_date: new Date(),
    doctor_id: "",
    date_time: "",
    link: "",
    doctorList: [],
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let body = {
      created_date: new Date(),
      modified_date: new Date(),
      date_time: this.state.date_time,
      doctor_id: this.state.doctor_id,
      link: this.state.link,
    };

    Axios.post("http://[::1]:3000/schedules", body).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    alert("Schedule added successfully!");
    location.reload();
    return;
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user") ?? "false");
    if (!user) {
      window.open("/", "_self");
    }
    Axios.get("http://[::1]:3000/getDoctorForDisplay").then((res) => {
      console.log(res);
      this.setState({ doctorList: res.data });
      this.setState({ doctor_id: res.data[0].id });
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
                        <u> ADD NEW Schedule </u>
                      </p>
                    </div>
                  </center>
                  <div className="crud_input">
                    <select
                      value={this.state.doctorList}
                      onChange={(e) =>
                        this.setState({ doctor_id: e.target.value })
                      }
                    >
                      {this.state.doctorList.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="crud_input">
                    <input
                      placeholder="Date:YY-MM-DD"
                      type="text"
                      onChange={(e) =>
                        this.setState({ date_time: e.target.value })
                      }
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

export default ScheduleAdd;
