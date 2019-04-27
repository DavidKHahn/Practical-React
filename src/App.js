import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Body = props => (
<div>
  <p className="App-intro">{props.text}</p>
  <p className="App-intro">{props.text2}</p>
  <p className="App-intro">{props.myFunc(1, 3)}</p>
</div>
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
        <h1 className="App-title">{this.props.title}</h1>
        <div>{JSON.stringify(this.props.myObj)}</div>
        <div>{this.props.myArr[0]}</div>
        <div>{this.props.myFunc(10, 19)}</div>
        {/* <div>{this.props.myObj.b}</div> */}
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
  add(a, b) {
    return a + b;
  }

  render() {
    // const add = (a, b) => a + b;
    return (
      <div className="App">
        <Header
          title={"Hello from Application"}
          num={5}
          myArr={[777, 2, 3]}
          myFunc={this.add}
          myObj={{
            a: 5,
            b: 6
          }}
        />
        <Body myFunc={this.add} text="i am cool" text2="i am cool2" />
      </div>
    );
  }
}

export default App;
