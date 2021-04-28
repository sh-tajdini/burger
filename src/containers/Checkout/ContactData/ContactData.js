import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };
  orderHandler = (event) => {
    //prevent from reloading the form
    event.preventDefault();
    // console.log(this.props.ingredients);

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Max Schwarzmuller",
        address: {
          street: "Teststreet 1",
          zipCode: "41351",
          Country: "Germany",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
    // alert("You continue");
  };
  render() {
    let form = (
      <form>
        <Input
          Inputtype="input"
          type="text"
          name="name"
          placeholder="Your name"
        />
        <Input
          Inputtype="input"
          type="email"
          name="email"
          placeholder="Your email"
        />
        <Input
          Inputtype="input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input
          Inputtype="input"
          type="text"
          name="postal"
          placeholder="Postal"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}
export default ContactData;
