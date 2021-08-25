import React from "react";
import styles from "./index.module.scss";
const index = (props) => (
	<div className={styles.DrawerToggle} onClick={props.drawerHandler}>
		<div></div>
		<div></div>
		<div></div>
	</div>
);

export default index;
