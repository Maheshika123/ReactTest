import React from "react";
import ReactDOM from "react-dom";
import react, { Component } from "react";

class Roof extends React.Component {
  render() {
    return (
      <div className="roof" style={{ backgroundColor: this.props.roofcolor }} />
    );
  }
}

export default Roof;
