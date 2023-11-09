import React, { Component } from "react";
import MedicineEdit from "./MedicineEdit";
import MedicineDelete from "./MedicineDelete";
import Axios from "axios";
import Footer from "./Footer";
import SimpleNavbar from "./SimpleNavbar";
import ScrollToTopButton from "./ScrollToTopButton";

export class MedicineCRUD extends Component {
  state = {
    id: "",
    medicines: [],
    isOpen: false,
    medicineInfo: "",
    D: "",
    name: "",
    price: 0,
    quantity: 0,
    isFilterbyEmpty: false,
    filterBy: "",
  };
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
  UpdateState = (ID, NAME, PRICE, QUANTITY) => {
    this.setState({
      id: ID,
      name: NAME,
      price: PRICE,
      quantity: QUANTITY,
      isOpen: true,
    });
  };
  UpdateDeleteState = (ID) => {
    this.setState({ id: ID });
  };
  handleFileUpload = (event) => {
    const file = event.target.files[0];

    console.log(file);
  };

  render() {
    return (
      <div>
        <SimpleNavbar />
        <center>
          {" "}
          <div className="page_head">
            <p>MEDICINES</p>
          </div>
        </center>

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
        <button
          className="add_btn"
          onClick={() => {
            window.open("/MedicineAdd", "_self");
            this.setState({ showMedicine: true });
          }}
        >
          Add new Medicine
        </button>
        <button
          className="add_btn"
          onClick={() => {
            window.open("/Orders", "_self");
            this.setState({ showOrders: true });
          }}
        >
          View My Orders
        </button>
        <input type="file" accept=".csv" onChange={this.handleFileUpload} />
    
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
                  <button
                    className="list_ul"
                    onClick={() => {
                      this.UpdateDeleteState(medicine.id);
                    }}
                  >
                    <div>
                      <li>
                        <img
                          src="drugs.png"
                          height="400px"
                          alt="Medicine_image"
                        ></img>
                        <li className="list_h1">
                          <h1>{medicine.name}</h1>
                        </li>
                        <li className="list_h4">
                          <h4>Rs.{medicine.price}</h4>
                        </li>
                        <li className="list_h2">
                          <h2>QTY:{medicine.quantity}</h2>
                        </li>
                        <li>
                          <button
                            className="admin_crud_btn"
                            onClick={() => {
                              this.UpdateState(
                                medicine.id,
                                medicine.name,
                                medicine.quantity,
                                medicine.price
                              );
                            }}
                          >
                            Edit
                          </button>
                          <MedicineDelete id={this.state.id} />
                        </li>
                      </li>
                    </div>{" "}
                  </button>
                ))}
              {this.state.isOpen ? this.state.medicineInfo : ""}
            </ul>
            <MedicineEdit
              onClose={() => {
                this.setState({ isOpen: false });
              }}
              isOpen={this.state.isOpen}
              id={this.state.id}
              name={this.state.name}
              quantity={this.state.quantity}
              price={this.state.price}
            />
          </div>
        </div>
        </div>
        <ScrollToTopButton/>
        <Footer />
      </div>
    );
  }
}

export default MedicineCRUD;
