import React, { Component } from "react";
import BurgurBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from "./hoc/Layout/Layout";
import Checkout from "./containers/Checkout/Checkout";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          {" "}
          <BurgurBuilder /> <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
/////////
