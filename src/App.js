import React, { Component } from "react";
import "./App.css";
import { Body, Body2 } from './components/Body';
import Header from './components/Header';
import Counter from './components/Counter';

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
        <Body2 />
        <Body myFunc={this.add} text="i am cool" text2="i am cool2" />
        <Counter initialCount={0} />
        <Counter initialCount={100} />
      </div>
    );
  }
}

export default App;
