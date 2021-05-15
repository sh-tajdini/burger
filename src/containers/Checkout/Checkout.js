import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

class Checkout extends Component {
  // state = {
  //   ingredients: null,
  //   price: 0,
  // };
  // //willl mount before render child copnent va props ha dastresi darad
  // componentWillMount() {
  //   // search for the params in the address bar
  //   const query = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   let price = 0;
  //   for (let param of query.entries()) {
  //     //['salad','1']
  //     //+ is trick to conevert to number
  //     if (param[0] === "price") {
  //       price = param[1];
  //     } else {
  //       ingredients[param[0]] = +param[1];
  //     }
  //   }
  //   this.setState({ ingredients: ingredients, totalPrice: price });
  // }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContiniuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    //if no ingredinets load go to burger builder and in there is a spinner that check if the ingredients load otr not
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      summary = (
        <div>
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContiniued={this.checkoutContiniuedHandler}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  }
}
const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
  };
};

//we dont need dispatch to props because we dont dispatch any thing just navigate from react router and redux

export default connect(mapStateToProps)(Checkout);
