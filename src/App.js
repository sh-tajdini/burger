import React, { Component } from "react";
import BurgurBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from "./hoc/Layout/Layout";
class App extends Component {
  state = {
    show: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: false });
    }, 5000);
  }
  render() {
    return (
      <div>
        <Layout>{this.state.show ? <BurgurBuilder /> : null}</Layout>
      </div>
    );
  }
}

export default App;
/////////
