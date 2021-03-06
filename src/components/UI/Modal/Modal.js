import React, { Component } from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Aux/Aux";
import Bakcdrop from "../Backdrop/Backdrop";
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      // spinner is a child and if we want to see spinner we must update this by chainging the children(spinner)
      nextProps.children !== this.props.children
    );
  }
  // componentWillUpdate() {
  //   console.log("[Modal] Will Update");
  // }

  render() {
    return (
      <Aux>
        <Bakcdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          //set visible or not
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
