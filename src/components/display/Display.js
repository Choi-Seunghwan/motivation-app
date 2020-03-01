import React, { Component } from "react";
import "./display.scss";

class Display extends Component {
  render() {
    return <span>{this.props.data}</span>;
  }
}

export default Display;