import React, { Component } from "react";

export default class MyForm extends Component {
  state = {
    name: "",
    favoriteWord: "",
    isChecked: false,
    title: 'Mr.'
  };

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
        [event.target.name]: isCheckbox 
        ? event.target.checkbox 
        : event.target.value
    });
  };

  handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        name="name"
        value={this.state.name} 
        onChange={this.handleChange} 
        />
        <textarea
        name="favoriteWord"
        value={this.state.favoriteWord}
        onChange={this.handleChange}
        />
        <input
        name="isChecked"
        type="checkbox"
        checked={this.state.isChecked}
        onChange={this.handleChange}
        />
        <div>
          <select
          name="title"
          value={this.state.title} 
          onChange={this.handleChange} 
          >
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
