import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import styles from "./index.module.scss";

const Backdrop = (props) =>
	props.show ? <div className={styles.Backdrop} onClick={props.clicked}></div> : null;

export default connect(null, null)(withRouter(Backdrop));
