import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import styles from "./index.module.scss";

const PrimaryButton = ({name, onClick}) => (
	<div className={styles.container__button}>
		<button type="submit" onClick={onClick}>
			{name}
		</button>
	</div>
);
export default connect(null, null)(withRouter(PrimaryButton));
