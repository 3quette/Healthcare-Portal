import React, { Component } from 'react'
import Axios from 'axios';

export class DoctorEdit extends Component {
    state = {
        name: "",
        speciality: "",
        hospital_id: "",
        qualification: "",
        fees: 0

    }
    handleSubmit = event => {
        event.preventDefault();
        let body = {
            "name": this.state.name,
            "speciality": this.state.speciality,
            "hospital_id": this.state.hospital_id,
            "fees": parseInt(this.state.fees),
            "qualification": this.state.qualification

        };

        Axios.patch(`http://[::1]:3000/users/${this.props.id}`, body)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        alert("Doctor updated successfully! ");
        location.reload();
        return;
    }
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps");
        console.log(nextProps);
        if (nextProps) {
            this.setState({ name: nextProps.name, speciality: nextProps.speciality, hospital_id: nextProps.hospital_id, fees: nextProps.fees, qualification: nextProps.qualification });
            console.log("name: " + this.state.name + "hospital_id: " + this.state.hospital_id + "speciality: " + this.state.speciality + "fees: " + this.state.fees + "qualification: " + this.state.qualification);
        }
    }

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
        const { onClose, isOpen } = this.props;
        console.log("isOpen: " + isOpen);
        const { name } = this.state;
        return (
            <div>
                {isOpen ? <form>
                    <div id='more_info'>
                        <button id='closebutton' style={{ marginLeft: '350px' }} onClick={onClose}>&times;</button>
                        <div className='crud_head'>
                            <p><u> UPDATE DATA </u></p>
                        </div>
                        <div className='edit_input'>
                            <label>Name:</label>
                            <input value={name} onChange={e => this.setState({ name: e.target.value })} />
                        </div>
                        <div className='edit_input'>
                            <label>Hospital:</label>
                            <select
                                value={this.state.hospital_id}
                                onChange={(e) => this.setState({ hospital_id: e.target.value })}
                            >
                                {this.state.hospitalList && this.state.hospitalList.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='edit_input'>
                            <label>Speciality:</label>
                            <input value={this.state.speciality} onChange={e => this.setState({ speciality: e.target.value })} />
                        </div>
                        <div className='edit_input'>
                            <label>Qualification:</label>
                            <input value={this.state.qualification} onChange={e => this.setState({ qualification: e.target.value })} />
                        </div>
                        <div className='edit_input'>
                            <label>Fees:</label>
                            <input value={this.state.fees} onChange={e => this.setState({ fees: e.target.value })} />
                        </div>
                        <button style={{ marginLeft: "30%" }} className='admin_crud_btn' type='submit' onClick={this.handleSubmit}>Update</button>
                    </div>
                </form> : ""}
            </div>
        )
    }
}

export default DoctorEdit