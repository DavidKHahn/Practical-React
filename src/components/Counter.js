import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
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
