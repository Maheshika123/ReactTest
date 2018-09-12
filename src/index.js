import React from "react";
import ReactDOM from "react-dom";
import House from "./House";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      house: []
    };
    this.build = this.build.bind(this);
  }

  build() {
    let roofcolor = prompt("Roof color?");
    let doorcolor = prompt("Door color?");
    let House = this.state.house;

    House.push({ roofcolor, doorcolor });
    this.setState({ House: [...this.state.house, House] });
  }
  render() {
    let house = this.state.house;

    return (
      <div className="App">
        <button onClick={this.build}>Build a house</button>
        {house.map(house => (
          <House roofcolor={house.roofcolor} doorcolor={house.doorcolor} />
        ))}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
