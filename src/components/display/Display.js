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
        <div className="Pannel">
          <p className="Content">{content}</p>
          <p className="Author">- {author}</p>
        </div>
      </div>
    );
  }
}

export default Display;
