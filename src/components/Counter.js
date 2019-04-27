import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0
  };

  componentWillUnmount() {
      console.log("unmounting...");
  }

  componentDidMount() {
    console.log("mounting...");
}

  incrementB = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementB = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    console.log("render function called");
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.incrementB}>increment</button>
        <button onClick={this.decrementB}>decrement</button>
      </div>
    );
  }
}
