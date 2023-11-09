import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Axios from "axios";
import Footer from "./Footer";
import AdminHeader from "./AdminHeader";
import SimpleNavbar from "./SimpleNavbar";

export class Orders extends Component {
  state = {
    id: "",
    orders: [],
    isOpen: false,
    hospitalInfo: "",
    D: "",
    name: "",
    hospital_id: "",
    speciality: "",
    fees: 0,
    qualification: "",
  };
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user") ?? "false");
    if (!user) {
      window.open("/", "_self");
    }

    Axios.get("http://[::1]:3000/getOrdersByPharmacistId/" + user.id).then((res) => {
      console.log(res);
      this.setState({ orders: res.data });
    });
  }
  UpdateState = (ID, NAME, HOSPITAL_ID, SPEC, FEES, QUALIF) => {
    this.setState({
      id: ID,
      name: NAME,
      hospital_id: HOSPITAL_ID,
      speciality: SPEC,
      fees: FEES,
      qualification: QUALIF,
      isOpen: true,
    });
  };
  UpdateDeleteState = (ID) => {
    this.setState({ id: ID });
  };

  render() {
    console.log(this.state.orders);
    return (
      <div>
        <SimpleNavbar />

        <center>
          {" "}
          <div className="page_head">
            <p>MY ORDERS</p>
          </div>
        </center>

        <div className="cart">
          <Table>
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Qty</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.state.orders &&
                this.state.orders.map((item) => (
                  <tr className="list_ul">
                    <td>
                      {item.medicine_name}
                    </td>
                    <td>
                      {item.quantity}
                    </td>
                    <td>
                      {item.amount}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Orders;
