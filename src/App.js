import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Body = () => (
  <p className="App-intro">
  To get started, edit
</p>
);

// const Body = () => {
//   return <p className="App-intro">To get started, edit</p>;
// };

// function Body() {
//   return (
//     <p className="App-intro">
//       To get started, edit
//     </p>
//   );
// }

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
