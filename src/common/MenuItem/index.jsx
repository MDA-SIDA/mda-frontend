import React from "react";
import {Link} from "react-router-dom";
import styles from "./index.module.scss";

function MenuItem({icon, name, path}) {
	return (
		<Link to={path} style={{textDecoration: "none", color: "#2C2738"}}>
			<div className={styles.menu_item_container}>
				<div className={styles.menu_item_container__icon}>
					<img src={icon} alt={icon} />
				</div>
				<div className={styles.menu_item_container__name}>{name}</div>
			</div>
		</Link>
	);
}

export default MenuItem;
