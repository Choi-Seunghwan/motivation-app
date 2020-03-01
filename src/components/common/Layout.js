import React from "react";
import "./layout.scss";

class Layout extends React.Component {
  render() {
    return <div className="Layout">{this.props.children}</div>;
  }
}

export default Layout;
