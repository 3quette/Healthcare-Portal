import React, { Component } from 'react';
import Axios from 'axios';
// import AmbulanceAdd from './AmbulanceAdd';
import Navbar from './Navbar';
import AdminHeader from './AdminHeader';

export class HospitalAdd extends Component {
    state={
        name:"",
        phone:"",
        email:"",
        password:"",
        created_date: new Date(),
        modified_date: new Date(),
        hospitalList: [],


        

    }
handleSubmit= event=>{
    event.preventDefault();
    let body = {
        name: this.state.name,
        password: "Test1234",
        email: this.state.email,
        phone: this.state.phone,
        type: this.state.type,
        created_date: new Date(),
        modified_date: new Date(),
      };
    Axios.post('http://[::1]:3000/hospitals',body)
    .then(res=>{

        let bodyUser = {
            name: body.name + " Admin",
            password: "Test1234",
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            type: 'hospital_admin',
            created_date: new Date(),
            modified_date: new Date(),
            hospital_id: res.data.id,
          };
      
          Axios.post("http://[::1]:3000/users", bodyUser).then((res) => {
            console.log(res);
            console.log(res.data);
          });




        console.log(res);
        console.log(res.data);
    })
  
    alert("Hospital added successfully! ");
    location.reload();
        return;
}


    render() {
        return (
            <div className="Addpage_content">
            <AdminHeader/>
            
            <div className='doctorAdd'>
            
    <table>
        <tr>
            <td>
                <form autocomplete="off"  >
               <center> <div className='crud_head'>
              <p><u> ADD NEW HOSPITAL </u></p> 
                </div></center>
                    <div className='crud_input'>
                        <input placeholder='Name' type="text" onChange={e=>this.setState({name:e.target.value})}/>
                    </div>
                    <div className='crud_input'>
                        <input placeholder='EMAIL' type="email" onChange={e=>this.setState({email:e.target.value})}/>
                    </div>
                    <div className='crud_input'>
                        <input placeholder='PHONE' onChange={e=>this.setState({phone:e.target.value})}/>
                    </div>
                    <div class="form_action_button">
                        <input type="submit" value="Submit" className='add_btn' onClick={this.handleSubmit}/>
                        <input type="reset" value="Reset" className='add_btn'/>
                    </div>
                </form>
                
            </td>
        </tr>
    </table>
 
</div>

            </div>
        )
    }
}

export default HospitalAdd
