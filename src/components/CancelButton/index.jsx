import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import styles from "./index.module.scss";

const Cancel = ({ name }) => {
  return (
    <div className={styles.container__button}>
      <button type="submit">{name}</button>
    </div>
  )
}
export default connect(null, null)(withRouter(Cancel));