import React, { Component } from 'react'
import Axios from 'axios';

export class PharmacistEdit extends Component {
    state={
        name:"",
        email:"",
        phone:""

  }
handleSubmit= event=>{
    event.preventDefault();
    let body ={
        "name": this.state.name,
        "email": this.state.email,
        "phone":this.state.phone
        
      };
    
      Axios.patch(`http://[::1]:3000/users/${this.props.id}`,body)
    .then(res=>{
        console.log(res);
        console.log(res.data);
    })
    alert("Pharmacist updated successfully!");
    location.reload();  
    return;
}
componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log(nextProps);
    if(nextProps){
    this.setState({name:nextProps.name, email:nextProps.email, phone:nextProps.phone});
    console.log("name: "+this.state.name+"email: "+this.state.email+"phone: "+this.state.phone);}
}


    render() {
        const { onClose, isOpen } = this.props;
        console.log("isOpen: "+isOpen);
        const {name} = this.state;
        return (
            <div>
             {isOpen ?   <form>
                <div id='more_info'>
                <button id='closebutton' style={{marginLeft:'350px'}}  onClick={onClose}>&times;</button>
                <div className='crud_head'>
              <p><u> UPDATE DATA </u></p> 
                </div>
                <div className='edit_input'>
                    <label>Name:</label>
                        <input value={name}  onChange={e=>this.setState({name:e.target.value})}/>
                    </div>
                    <div className='edit_input'>
                    <label>Email:</label>
                        <input value={this.state.email} onChange={e=>this.setState({email:e.target.value})}/>
                    </div>
                    <div className='edit_input'>
                    <label>Phone:</label>
                        <input value={this.state.phone} onChange={e=>this.setState({phone:e.target.value})}/>
                    </div>
                    <button style={{marginLeft:"30%"}} className='admin_crud_btn' type='submit' onClick={this.handleSubmit}>Update</button>
                    </div>
                </form>:""}
                </div>
        )
    }
}

export default PharmacistEdit