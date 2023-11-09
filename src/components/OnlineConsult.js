import React, { Component } from 'react';
import NavBar from './Navbar';
import Footer from './Footer'


export class OnlineConsult extends Component {
     generateMeetLink() {
        const meetId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const meetUrl = `https://meet.google.com/gqd-sepm-wgb`;
        window.open(meetUrl, '_blank');
      }

    render() {
        return (
            <div>
            <NavBar/>
            <div className="doctor_banner">
          <img src="slider_1.jpg" width="100%" height="600px" alt="banner" />
          <div className="doctor_head">
            <h1>Need Online Consultation?</h1>
            <p><button className='login_btn' onClick={this.generateMeetLink}>Click here</button>
</p>
          </div>
        </div>
            </div>
        )
    }
}

export default OnlineConsult
