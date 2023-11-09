import React, { Component } from 'react';
import Axios from 'axios';

export class MedicineDelete extends Component {
    state={
        id:""
    }
handleSubmit= event=>{
    event.preventDefault();
    Axios.delete(`http://[::1]:3000/medicines/${this.props.id}`)
    .then(res=>{
        console.log(res.data);
    })
    console.log("deleted");
    alert("Doctor deleted successfully! ");
    location.reload();
        return;
}
componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log(nextProps);
    if(nextProps){
    this.setState({id:nextProps.id});
    console.log("id: "+this.state.id);}
}
    render() {
        return (
            <div>
                
                    <button type='submit' className='admin_crud_btn' onClick={this.handleSubmit}>delete</button>
               
                
            </div>
        )
    }
}

export default MedicineDelete
