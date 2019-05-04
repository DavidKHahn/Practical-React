import React, { Component } from "react";
import "./App.css";
// import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";
import MyForm from "./components/MyForm";
// import Header from "./components/Header";
import ValidationForm from "./components/ValidationForm";
import FetchRandomUser from "./components/FetchRandomUser";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <div className={this.state.visible ? "visible" : "hidden"}>
          <Counter />
        </div>
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          toggle counter
        </button>
        <MyForm />
        <ValidationForm />
        <FetchRandomUser />
      </div>
    );
  }
}

export default App;
