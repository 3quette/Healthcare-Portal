import React, { Component } from "react";
import PharmacistEdit from "./PharmacistEdit";
import PharmacistDelete from "./PharmacistDelete";
import Axios from "axios";
import Footer from "./Footer";
import AdminHeader from "./AdminHeader";
import ScrollToTopButton from "./ScrollToTopButton";

export class PharmacistCRUD extends Component {
  state = {
    id: "",
    name: "",
    phone:"",
    email:"",
    isOpen: false,
    filterBy: "",
    isFilterbyEmpty: false,
    pharmacists: []
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
    Axios.get("http://[::1]:3000/users").then((res) => {
      console.log(res);
      this.setState({ pharmacists: res.data.filter(item => item.type === 'pharmacist') });
    });
  }
  UpdateState = (ID, NAME, EMAIL, PHONE) => {
    this.setState({
      id: ID,
      name: NAME,
      email: EMAIL,
      phone: PHONE,
      isOpen: true,
    });
  };
  UpdateDeleteState = (ID) => {
    this.setState({ id: ID });
  };

  render() {
    return (
      <div>
        <AdminHeader />
        <center>
          {" "}
          <div className="page_head">
            <p>PHARMACISTS</p>
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
                  placeholder="Search by Pharmacist Name"
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
            window.open("/PharmacistAdd", "_self");
            this.setState({ showPharmacist: true });
          }}
        >
          Add new Pharmacist
        </button>
        <div className="list_view">
          <div>
            <ul>
              {this.state.pharmacists
                .filter(
                  (pharmacist) =>
                    pharmacist.name.includes(this.state.filterBy) ||
                    this.state.filterBy === ""
                )
                .map((pharmacist) => (
                  <button
                    className="list_ul"
                    onClick={() => {
                      this.UpdateDeleteState(pharmacist.id);
                    }}
                  >
                    <div>
                      <li>
                        <img
                          src="consultation.png"
                          height="400px"
                          alt="pharmacist_image"
                        ></img>
                        <li className="list_h1">
                          <h1>{pharmacist.name}</h1>
                        </li>
                        <li>
                          <button
                            className="admin_crud_btn"
                            onClick={() => {
                              this.UpdateState(
                                pharmacist.id,
                                pharmacist.name,
                                pharmacist.email,
                                pharmacist.phone
                              );
                            }}
                          >
                            Edit
                          </button>
                          <PharmacistDelete id={this.state.id} />
                        </li>
                      </li>
                    </div>{" "}
                  </button>
                ))}
              {this.state.isOpen ? this.state.PharmacistInfo : ""}
            </ul>
            <PharmacistEdit
              onClose={() => {
                this.setState({ isOpen: false });
              }}
              isOpen={this.state.isOpen}
              id={this.state.id}
              name={this.state.name}
              email={this.state.email}
              phone={this.state.phone}
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

export default PharmacistCRUD;
