import React, { Component } from "react";
import BurgurBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from "./components/Layout/Layout";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgurBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
/////////
