import React, { Component } from 'react';
import Footer from './Footer';
import NavBar from './Navbar';

export class Checkout extends Component {


    render() {
        return (
            <div>
            <NavBar/>
            <div className='doctor_banner'>
            <img src='banner.jpg' width="100%" height="500rem" alt='banner'/>
            <div className='doctor_head'>
          <h1>Checkout</h1>
          <p>Best medicines at your doorstep</p>
        </div>
            </div>

            <div class="form1">
                <form >
                  <label  id="name_label">Name</label>
                  <label  id="mail_label">City</label> 
                  <br/>
                  <input type="text" placeholder="Name" id="name_input"/>
                  <input  placeholder="city" id="email_input"/> <br/>
                  <label for="" id="msg_label">Compelete Address</label> <br/>
                  <input type="text" placeholder="complete address with street number..." id="msg_input"/> <br/>
                  <button className='login_btn'>CHECKOUT</button>
                  
                </form>
              </div>

          
        

 


              <Footer/>

            </div>
        )
    }
}

export default Checkout
