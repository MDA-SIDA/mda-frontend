import Menu from "@components/Menu";
import React from "react";
import notificationsIcon from "@assets/img/svg/notifications.svg";
import styles from "./index.module.scss";

function Sidebar({overrideStyle}) {
	return (
		<div className={`${styles.sidebar} ${overrideStyle}`}>
			<div className={styles.sidebar__profile}>
				<div className={styles.sidebar__profile__avatar} />
				<div className={styles.sidebar__profile__info}>
					<span className={styles.sidebar__profile__info__name}>MDA</span>
					<span className={styles.sidebar__profile__info__company}>John Doe</span>
				</div>
			</div>
			<Menu />
		</div>
	);
}

export default Sidebar;
