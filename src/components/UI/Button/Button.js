import React from "react";
import classes from "./Button.css";

const button = (props) => (
  <button
    //using array of classes and add ' '  to change it to string again
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);
export default button;
