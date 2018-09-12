import React from "react";
import ReactDOM from "react-dom";
import react, { Component } from "react";
import "./styles.css";

class Door extends React.Component {
  render() {
    return (
      <div className="door" style={{ backgroundColor: this.props.doorcolor }} />
    );
  }
}
export default Door;
