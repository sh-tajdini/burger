import React from "react";
import classes from "./DrawerToggle.css";

const drawerToggle = (props) => (
  <div className={classes.drawerToggle} onClick={props.clicked}>
    MENU
    <div></div>
    <div></div>
    <div></div>
  </div>
);
export default drawerToggle;
