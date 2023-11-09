import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';

export class SimpleNavbar extends Component {
    render() {
        return (
            <div >
                
                <nav>
          <ul className="Navigation-Bar">
            <Header />
           
            <Link>
            <li style={{ marginLeft: "60%" }} className="navbar-items">
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

export default SimpleNavbar
