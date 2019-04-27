import React, { Component } from "react";
import logo from "../logo.svg";

class Header extends Component {
    render() {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.title}</h1>
          {/* <div>{JSON.stringify(this.props.myObj)}</div>
          <div>{this.props.myArr[0]}</div>
          <div>{this.props.myFunc(10, 19)}</div> */}
          {/* <div>{this.props.myObj.b}</div> */}
        </header>
      );
    }
  }

  export default Header;