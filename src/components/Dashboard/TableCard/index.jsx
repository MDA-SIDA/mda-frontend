import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import styles from "./index.module.scss";
const tableCard = ({name, columns, goToDetails, field}) => (
	<div className={styles.container__table}>
		<div className={styles.container__table__header}>
			<p>{name}</p>
			<span>{name} të dhëna</span>
		</div>
		<Link
			to={{pathname: `/${name}`, columns, field, name}}
			className={styles.container__table__footer}
		>
			See Details
		</Link>
	</div>
);

export default connect(null, null)(withRouter(tableCard));
