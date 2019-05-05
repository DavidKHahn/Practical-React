import React from "react";
import shortid from "shortid";

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
    this.props.onSubmit({
        id: shortid.generate(), 
        text: this.state.text,
        complete: false
    });
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
