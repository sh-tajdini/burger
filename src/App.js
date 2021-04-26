import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import BurgurBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from "./hoc/Layout/Layout";
import Checkout from "./containers/Checkout/Checkout";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />

            <Route path="/" exact component={BurgurBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
/////////
