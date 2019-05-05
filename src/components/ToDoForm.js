import React from "react";

export default class ToDoList extends React.Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChange = event => {
      event.preventDefault();
      // submit form
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          placeholder="todo..."
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
