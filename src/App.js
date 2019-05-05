import React, { Component } from "react";
import "./App.css";
// import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";
import MyForm from "./components/MyForm";
// import Header from "./components/Header";
import ValidationForm from "./components/ValidationForm";
import FetchRandomUser from "./components/FetchRandomUser";
import ToDoList from "./components/ToDoList";

class App extends Component {
  state = {
    count: 0,
    visible: true
  };

  decrementB = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  incrementB = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="App">
        <div className={this.state.visible ? "visible" : "hidden"}>
          <Counter
            count={this.state.count}
            decrement={this.decrementB}
            increment={this.incrementB}
          />
          <Counter
            count={this.state.count}
            decrement={this.decrementB}
            increment={this.incrementB}
          />
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
        <ToDoList />
      </div>
    );
  }
}

export default App;
