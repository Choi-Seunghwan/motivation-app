import React from "react";
import Layout from "components/common/Layout.js";
import Home from "pages/Home.js";
import "assets/common.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
