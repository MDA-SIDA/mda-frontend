import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import styles from "./index.module.scss";

import searchIcon from "../../assets/img/svg/search.svg";

const Search = () => (
	<div className={styles.container}>
		<div className={styles.container__search}>
			<input type="text" name="" placeholder="Search"></input>
			<img src={searchIcon} alt="" />
		</div>
	</div>
);

export default connect(null, null)(withRouter(Search));
