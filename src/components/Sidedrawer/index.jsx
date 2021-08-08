import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import styles from "./index.module.scss";


const Sidedrawer = ({children, props}) => <div className={styles.container}>
  <div class={styles.container__sidedrawer}>
    {children}
  </div>
</div>;

export default connect(null, null)(withRouter(Sidedrawer));