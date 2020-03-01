import React, { Component } from "react";
import "./display.scss";

class Display extends Component {
  render() {
    const { author, content } = this.props.data || {
      author: "author",
      content: "content"
    };
    return (
      <div className="Display">
        <p>{content}</p>
        <p>{author}</p>
      </div>
    );
  }
}

export default Display;
