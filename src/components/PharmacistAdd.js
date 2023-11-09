import React, { Component } from 'react';
import Axios from 'axios';
// import AmbulanceAdd from './AmbulanceAdd';
import Navbar from './Navbar';

export class PharmacyAdd extends Component {
    state={
        name: "",
        password: "",
        email: "",
        phone: "",
        address: "",
        type: "pharmacist",
        created_date: new Date(),
        modified_date: new Date(),

        

    }
handleSubmit= event=>{
    event.preventDefault();
    let body ={
        name: this.state.name,
        password: "Test1234",
        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address,
        type: this.state.type,
        created_date: new Date(),
        modified_date: new Date(),
      };
    
    Axios.post('http://[::1]:3000/users',body)
    .then(res=>{
        console.log(res);
        console.log(res.data);
    })
  
    alert("Pharmacist added successfully!");
    location.reload();  
        return;
}


    render() {
        return (
            <div className="Addpage_content">
            <Navbar/>
            
            <div className="doctorAdd">
  <table>
    <tbody>
      <tr>
        <td>
          <form autoComplete="off">
            <center>
              <div className="crud_head">
                <p>
                  <u>ADD NEW PHARMACIST</u>
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
                placeholder="EMAIL"
                type="email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="crud_input">
              <input
                placeholder="PHONE"
                type="text"
                onChange={(e) => this.setState({ phone: e.target.value })}
              />
            </div>
            <div className="form_action_button">
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
    </tbody>
  </table>
</div>


            </div>
        )
    }
}

export default PharmacyAdd
