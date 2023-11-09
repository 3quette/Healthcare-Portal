import React, { Component } from 'react'
import Axios from 'axios';

export class MedicineEdit extends Component {
    state={
        name:"",
        quantity:"",
        price:0

  }
handleSubmit= event=>{
    event.preventDefault();
    let body ={
        "name": this.state.name,
        "quantity": this.state.quantity,
        "price":parseInt(this.state.price)
        
      };
    
      Axios.patch(`http://[::1]:3000/medicines/${this.props.id}`,body)
    .then(res=>{
        console.log(res);
        console.log(res.data);
    })
    alert("Medicine updated successfully!");
    location.reload();
    return;
}
componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log(nextProps);
    if(nextProps){
    this.setState({name:nextProps.name, quantity:nextProps.quantity, price:nextProps.price});
    console.log("name: "+this.state.name+"quantity: "+this.state.quantity+"price: ");}
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
                    <label>Quantity:</label>
                        <input value={this.state.quantity} onChange={e=>this.setState({quantity:e.target.value})}/>
                    </div>
                    <div className='edit_input'>
                    <label>Price:</label>
                        <input value={this.state.price} onChange={e=>this.setState({price:e.target.value})}/>
                    </div>
                    <button style={{marginLeft:"30%"}} className='admin_crud_btn' type='submit' onClick={this.handleSubmit}>Update</button>
                    </div>
                </form>:""}
                </div>
        )
    }
}

export default MedicineEdit