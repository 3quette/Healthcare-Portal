import React, { Component } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Slider from "./Slider";
import ScrollToTopButton from "./ScrollToTopButton";

export class Home extends Component {
  state = {
    showPharmacy: false,
    showDoctor: false,
    showOnlineConsult: false,
  };
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user") ?? "false");
    if (!user) {
      window.open("/", "_self");
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        
        <Slider/>
        <section class="home" id="home">
       <div class="image">
           <img src="vision.jpg" alt=""/>
       </div>

       <div class="content">
       <div class="hover-container">
        <h1> Our Vision </h1>
        <div class="hover-text">   <p><strong>"</strong>Our vision is to create a healthier world where individuals are equipped with the knowledge and resources to make informed healthcare decisions and lead fulfilling lives. We envision a future where access to reliable medical information, expert guidance, and supportive communities
               is readily available to empower individuals to take control of their health and well-being.<strong>"</strong>
               </p></div>
             </div>
       </div>

    </section>
        <div id="pages">
          <table>
            <tr className="home_imgs">
              <th>
                <div id="FirstSet">
                  <img
                    src="stethoscope.png"
                    width="200"
                    height="200"
                    alt="home"
                  />

                  <button
                    id="home_btn"
                    onClick={() => {
                      window.open("/DoctorList", "_self");
                      this.setState({ showDoctor: true });
                    }}
                  >
                    View Doctors
                  </button>
                </div>
              </th>

              <th>
                <div id="FirstSet">
                  <img
                    src="home_drugs.png"
                    width="200"
                    height="200"
                    alt="hhome"
                  />
                  <div id="FirstSet_txt">
                    <button
                      id="home_btn"
                      onClick={() => {
                        window.open("/MedicineList", "_self");
                        this.setState({ showPharmacy: true });
                      }}
                    >
                      Visit Pharmacy
                    </button>
                  </div>
                </div>
              </th>

              <th>
                <div id="FirstSet">
                  <img src="consulting.png" width="200" height="200" alt="home" />
                  <div id="FirstSet_txt">
                    <button
                      id="home_btn"
                      onClick={() => {
                        window.open("/OnlineConsultancy", "_self");
                        this.setState({ showOnlineConsult: true });
                      }}
                    >
                      Online Consultancy
                    </button>
                  </div>
                </div>
              </th>
            </tr>
          </table>
        </div>
        <ScrollToTopButton/>
        <Footer />
      </div>
    );
  }
}

export default Home;
