import React from "react";
import ReactDOM from "react-dom";
import react, { Component } from "react";
import Door from "./Door";
import Roof from "./Roof";
import "./styles.css";

class House extends React.Component {
  render() {
    return (
      <div className="house">
        <Roof roofcolor={this.props.roofcolor} />
        <Door doorcolor={this.props.doorcolor} />
      </div>
    );
  }
}
export default House;
