import Table from "react-bootstrap/Table";
import React, { Component } from "react";
import Axios from "axios";
import Footer from "./Footer";
import NavBar from "./Navbar";
import ScrollToTopButton from "./ScrollToTopButton";

export class Cart extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user") ?? "false");
    if (!user) {
      window.open("/", "_self");
    }
    Axios.get("http://[::1]:3000/getOrdersByUserId/"+user.id).then((res) => {
      console.log("COMPONENT DID MOUNT");
      console.log(res);
      this.setState({ orders: res.data });
    });
  }

  removeFromCart(orderID) {
    Axios.delete(`http://[::1]:3000/orders/${orderID}`)
      .then((res) => {
        console.log("Order removed:", res);
        const updatedOrders = this.state.orders.filter(
          (order) => order.id !== orderID
        );
        this.setState({ orders: updatedOrders });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getTotalAmount() {
    return this.state.orders.reduce((total, order) => total + order.amount, 0);
  }

  render() {
    return (

      <div>
        <NavBar />
        <div className="doctor_banner">
          <img src="banner.jpg" width="100%" height="500rem" alt="banner" />
          <div className="doctor_head">
            <h1>Cart</h1>
            
          </div>
        </div>
        <div className="page_content">
          <div className="cart">
            <Table>
              <thead>
                <tr>
                  <th>Medicine</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.orders.map((order) => (
                  <tr className="list_ul" key={order.id}>
                    <td>{order.medicine_name}</td>
                    <td>{order.amount}</td>
                    <td>
                      <button
                        className="remove_btn"
                        onClick={() => this.removeFromCart(order.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <div className="cart_total">
            <table>
              <tbody>
                <tr>
                  <td>
                    <h2>Total:</h2>
                  </td>
                  <td>
                    <input placeholder={this.getTotalAmount()}></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            className="checkout_btn"
            onClick={() => window.open("./Checkout", "_self")}
          >
            Checkout
          </button>
        </div>
        <ScrollToTopButton/>
        <Footer />
      </div>
    );
  }
}

export default Cart;
