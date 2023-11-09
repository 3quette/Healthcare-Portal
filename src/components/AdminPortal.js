import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import Footer from './Footer';

export class AdminPortal extends Component {


    render() {
        return (
            <div>
            <AdminHeader/>
            <div className='doctor_banner'>
            <img src='slider_1.jpg' width="100%" height="500rem" alt='banner'/>
            <div className='admin_head'>
          <h1>Admin Portal</h1>
        </div>
            </div>
<div id='pages'>
<table>
            <tr>
              <th>
                
              </th>

              <th>
                <div id="FirstSet">
                  <img
                    src="dispensary.png"
                    width="280"
                    height="282"
                    alt="hhome"
                  />
                  <div id="FirstSet_txt">
                    <button
                      id="home_btn"
                      onClick={() => {
                        window.open("/HospitalCRUD", "_self");
                        this.setState({ showPharmacy: true });
                      }}
                    >
                      Manage Hospitals
                    </button>
                  </div>
                </div>
              </th>

              <th>
                <div id="FirstSet">
                  <img src="home_drugs.png" width="280" height="282" alt="home" />
                  <div id="FirstSet_txt">
                    <button
                      id="home_btn"
                      onClick={() => {
                        window.open("/PharmacistCRUD", "_self");
                        this.setState({ showOnlineConsult: true });
                      }}
                    >
                      Manage Pharmacists
                    </button>

                  </div>
                </div>
              </th>
            </tr>
          </table>
    </div>
  



  <Footer/>
            </div>
            
        )
    }
}

export default AdminPortal
