import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';

export class AdminHeader extends Component {
    render() {
        return (
            <div >
                
                <nav>
          <ul className="Navigation-Bar">
            <Header />
            <Link to="/HospitalCRUD">
              <li className="navbar-items">Manage Hospitals</li>
            </Link>
            <Link to="/PharmacistCRUD">
              <li className="navbar-items">Manage Pharmacists</li>
            </Link>
           
            <Link>
            <li className="navbar-items">
              <button className="logout_btn"
                onClick={() => {
                  localStorage.clear();
                  location.replace("/");
                }}
              >
                Logout
              </button>
              </li>
            </Link>
          </ul>
        </nav>
            
          
            </div>
            
        )
    }
}

export default AdminHeader
