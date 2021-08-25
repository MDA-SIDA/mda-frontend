import React from "react";
import declineIcon from "@assets/img/svg/decline";
import styles from "./index.module.scss";

function Alert({message, info, backgroundColor, iconColor}) {
	return (
		<div className={styles.alert_container} style={{backgroundColor}}>
			<div className={styles.alert_container__text}>
				<span>{message}</span>
				<span>{info}</span>
			</div>
			<div className={styles.alert_container__icon}>{declineIcon({color: iconColor})}</div>
		</div>
	);
}

export default Alert;
