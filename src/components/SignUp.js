import React, { Component } from "react";
import Login from "./Login.js";
import Axios from "axios";
import "./App.css";

export class SignIn extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    type: "patient",
    showLogin: false,
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.name.length <= 0 ||
      this.state.email.length <= 0 ||
      this.state.password.length <= 0
    ) {
      alert("Please provide Valid Values.");
      return;
    }
    let body = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      type: this.state.type,
    };

    Axios.post("http://[::1]:3000/users", body).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    alert("Registered Successfully! Return to login page.");
    this.setState({ showLogin: true });
  };

  render() {
    return (
      <div>
        {this.state.showLogin ? (
          <Login />
        ) : (
          <div>
            <div className="signUp_color_half">
              <center>
                {" "}
                <img src="signup_laptop.png" width="50%" alt="laptop" />
              </center>
            </div>

            <div class="signup_container">
              <form id="signin-form">
                <center>
                  {" "}
                  <div className="signup_head">
                    <p>
                      <u> SIGNUP </u>
                    </p>
                  </div>
                </center>
                <div className="signup_input">
                  <input
                    type="name"
                    placeholder="name"
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </div>

                <div className="signup_input">
                  <input
                    type="email"
                    placeholder="email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>

                <div className="signup_input">
                  <input
                    type="password"
                    placeholder="password"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </div>

                <button
                  className="crud_btn"
                  value="Register"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SignIn;
