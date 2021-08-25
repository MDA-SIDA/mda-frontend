import Menu from "@components/Menu";
import React from "react";
import styles from "./index.module.scss";
import profile from "../../assets/img/picture.png";
import logout from "../../assets/img/svg/logout.svg";

function Sidebar({overrideStyle}) {
	return (
		<div className={`${styles.sidebar} ${overrideStyle}`}>
			<div className={styles.sidebar__profile}>
				<div className={styles.sidebar__profile__avatar}>
					<img src={profile} alt="" />
				</div>
				<div className={styles.sidebar__profile__info}>
					<span className={styles.sidebar__profile__info__name}>Driton Dalipi</span>
					<span className={styles.sidebar__profile__info__role}>Superadmin</span>
				</div>
			</div>
			<Menu />
			<div
				className={styles.sidebar__logout}
				onClick={() => {
					localStorage.clear();
					window.location.href = "/auth";
				}}
			>
				<img src={logout} alt="" />
				<div className={styles.sidebar__logout__name}>Logout</div>
			</div>
		</div>
	);
}

export default Sidebar;
