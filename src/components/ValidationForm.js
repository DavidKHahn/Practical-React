import React from "react";

export default class ValidationForm extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    nameError: "Name is empty.",
    emailError: "Email is incorrect.",
    passwordError: "Invalid password."
  };

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          {this.state.nameError ? (
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.nameError}
            </div>
          ) : null}
        </div>
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div>{this.state.emailError}</div>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div>{this.state.passwordError}</div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
