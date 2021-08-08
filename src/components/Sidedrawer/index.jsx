import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import styles from "./index.module.scss";


const Sidedrawer = ({ children, showDrawer }) => {
  console.log(showDrawer, 'show')
  let sideDrawerClasses = "container";
  if (showDrawer) {
    sideDrawerClasses = "container open";
  }
  return (
    <div className={sideDrawerClasses}>
      {children}
    </div>
  )

}

export default connect(null, null)(withRouter(Sidedrawer));