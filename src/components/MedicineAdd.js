import React, { Component } from 'react';
import Axios from 'axios';
// import AmbulanceAdd from './AmbulanceAdd';
import SimpleNavbar from './SimpleNavbar';

export class MedicineAdd extends Component {
    state={
        name:"",
        quantity:"",
        price:0,
        pharmacist_id:""

        

    }
handleSubmit= event=>{
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("user") ?? "false");

    let body ={
        "name": this.state.name,
        "quantity": this.state.quantity,
        "price": parseInt(this.state.price),
        "pharmacist_id":user.id,
      };
    
    Axios.post('http://[::1]:3000/medicines',body)
    .then(res=>{
        console.log(res);
        console.log(res.data);
    })
  
    alert("Medicine added successfully!");
    location.reload();
        return;
}


    render() {
        return (
            <div className="Addpage_content">
            <SimpleNavbar/>
            
            <div className='doctorAdd'>
            
    <table>
        <tr>
            <td>
                <form autocomplete="off"  >
               <center> <div className='crud_head'>
              <p><u> ADD NEW MEDICINE </u></p> 
                </div></center>
                    <div className='crud_input'>
                        <input placeholder='Name' type="text" onChange={e=>this.setState({name:e.target.value})}/>
                    </div>
                    {/* <div className='crud_input'>
                        <input placeholder='ID' type="text" onChange={e=>this.setState({pharmacist_id:e.target.value})}/>
                    </div> */}
                    <div className='crud_input'>
                        <input placeholder='Quantity' onChange={e=>this.setState({quantity:e.target.value})}/>
                    </div>
                    <div className='crud_input'>
                        <input placeholder='Price' onChange={e=>this.setState({price:e.target.value})}/>
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

export default MedicineAdd
