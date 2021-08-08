import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import styles from "./index.module.scss";

const Table = ({ name, data }) => <div class={styles.container__table}>
  <div className={styles.container__table__header}>
    <p>{name}</p>
    <span>{data} të dhëna</span>
  </div>
  <a href="google.com" className={styles.container__table__footer}>
    See Details
  </a>
</div>;

export default connect(null, null)(withRouter(Table));