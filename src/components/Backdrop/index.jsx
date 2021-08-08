import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import styles from "./index.module.scss";


const Backdrop = () => <div className={styles.container}>
</div>;

export default connect(null, null)(withRouter(Backdrop));