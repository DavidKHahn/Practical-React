import React, { Component } from "react";

export default class MyForm extends Component {
  state = {
    name: "",
    favoriteWord: "",
    isChecked: false,
    title: 'Mr.'
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleChangeFave = event => {
    this.setState({
      favoriteWord: event.target.value
    });
  };

  handleChangeCheck = event => {
    this.setState({
      isChecked: event.target.checked
    });
  };

  handleSelect = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleSubmit = () => {
      console.log(this.state);
  };

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleChange} />
        <textarea
          value={this.state.favoriteWord}
          onChange={this.handleChangeFave}
        />
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.handleChangeCheck}
        />
        <div>
          <select value={this.state.title} onChange={this.handleSelect} >
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
