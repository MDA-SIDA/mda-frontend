import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import styles from "./index.module.scss";
import Search from "../Search/index"
import Table from "./Table/index"

const Profile = () => <div className={styles.container}>
<p>Profili</p>
</div>;

export default connect(null, null)(withRouter(Profile));
