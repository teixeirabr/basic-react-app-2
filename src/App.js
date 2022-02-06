import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

class App extends Component {
  state = {
    cars: ["Audi", "BMW", "Ferrari", "Ford", "Tesla"],
  };

  render() {
    let displayCars = this.state.cars.map((e, i) => {
      return <h1 key={i}>{e}</h1>;
    });

    return <div className="App">{displayCars}</div>;
  }
}

export default App;
