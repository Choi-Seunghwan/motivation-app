import React, { Component } from "react";
import Display from "components/display/Display.js";
import { getRandomQuote } from "utils/api.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      quotesData: undefined
    };

    this.callRandomQuote();
    console.log("home constructor");
    console.log("loading...");
  }

  async callRandomQuote() {
    const data = await getRandomQuote();
    this.setState({
      quotesData: data,
      loading: false
    });
    console.log("data", data);
  }

  render() {
    console.log("home render");
    return (
      <div>
        <Display data={this.state.quotesData} />
      </div>
    );
  }
}

export default Home;
