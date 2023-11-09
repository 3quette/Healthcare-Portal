import React, { Component } from "react";
import Axios from "axios";
import NavBar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

export class MedicineList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicines: [],
      isFilterbyEmpty: false,
      showBooking: false,
      id: "",
      name: "",
      pharmacist_id: "",
      quantity: 0,
      price: 0,
      showComponent: false,
      date: new Date(),
      filterBy: "",
    };
    this.UpdateState = this.UpdateState.bind(this);
  }

  handleFilter = () => {
    this.setState({ filterBy: this.state.searchTerm });
  };

  Reload = () => {
    window.location.reload();
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user") ?? "false");
    if (!user) {
      window.open("/", "_self");
    }
    Axios.get("http://[::1]:3000/medicines").then((res) => {
      console.log(res);
      this.setState({ medicines: res.data });
    });
  }

  UpdateState(ID, NAME, PHARMACIST_ID, QTY, PRICE) {
    console.log("PASSING:" + ID, NAME, PHARMACIST_ID, QTY, PRICE);
    this.setState(
      {
        id: ID,
        name: NAME,
        pharmacist_id: PHARMACIST_ID,
        quantity: QTY,
        price: PRICE,
      },
      () => {
        console.log("HANDLE SUBMIT LAST");
        this.handleSubmit();
        console.log("STATE UPDATE FIRST");
        console.log(
          "STATE:",
          this.state.id,
          this.state.name,
          this.state.pharmacist_id,
          this.state.quantity,
          this.state.price
        );

        const confirmed = window.confirm(
          "Item added to cart, do you wish to see cart?"
        );
        if (confirmed) {
          window.open("./Cart", "_self");
        } else {
          // stay on this component
        }
      }
    );
  }

  handleSubmit = (event) => {
    const user = JSON.parse(localStorage.getItem("user") ?? "false");

    let body = {
      medicine_id: this.state.id,
      medicine_name: this.state.name,
      user_id: user.id,
      quantity: parseInt(1),
      amount: parseInt(this.state.price),
      date: this.state.date,
      status: true,
    };

    Axios.post("http://[::1]:3000/orders", body).then((res) => {
      console.log("CART ADD");
      console.log(res);
      console.log(res.data);
    });
    //window.open(`./Checkout`,'_self')
    alert("Added to Cart successfully! ");
    location.reload();
    return;
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="doctor_banner">
          <img src="slider_3.jpg" width="100%" height="500rem" alt="banner" />
          <div className="doctor_head">
            <h1>Pharmaceutical Service</h1>
            <p>Best medicines at your doorstep</p>
          </div>
        </div>

        <div className="page_content">
        <div className="filter">
          <table>
            <tr>
              <td>
                <h2>Filter by</h2>{" "}
              </td>
              <td>
                <input
                  placeholder="Search by Medicine Name"
                  onChange={(event) =>
                    this.setState({ searchTerm: event.target.value })
                  }
                />
              </td>
              <td>
                <button className="search_btn" onClick={this.handleFilter}>
                  Search
                </button>
              </td>
              <td>
                <button className="search_btn" onClick={this.Reload}>
                  Refresh
                </button>
              </td>
            </tr>
          </table>
        </div>

        <div className="list_view">
          <div>
            <ul>
              {this.state.medicines
                .filter(
                  (medicine) =>
                    medicine.name.includes(this.state.filterBy) ||
                    this.state.filterBy === ""
                )
                .map((medicine) => (
                  <button className="list_ul" key={medicine.id}>
                    <div>
                      <li>
                        <img
                          src="drugs.png"
                          height="400px"
                          alt="medicine_image"
                        ></img>
                      </li>
                      <li className="list_h1">
                        <h1>{medicine.name}</h1>
                      </li>
                      <li className="list_h4">
                        <h4>Rs. {medicine.price}</h4>
                      </li>
                      
                      <li>
                        <button
                          className="admin_crud_btn"
                          onClick={() => {
                            this.UpdateState(
                              medicine.id,
                              medicine.name,
                              medicine.pharmacist_id,
                              medicine.quantity,
                              medicine.price
                            );
                          }}
                        >
                          Add to Cart
                        </button>
                      </li>
                    </div>
                  </button>
                ))}
            </ul>
          </div>
        </div>
        </div>
        <ScrollToTopButton/>
        <Footer />
      </div>
    );
  }
}

export default MedicineList;
