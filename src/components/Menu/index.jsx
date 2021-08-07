import React from "react";
import MenuItem from "@common/MenuItem";
import dashbordIcon from "@img/svg/homeUnclicked.svg";
import profileIcon from "@img/svg/profileUnclicked.svg";
import manageIcon from "@img/svg/manageUnclicked.svg";
import logoutIcon from "@img/svg/logout.svg";

import styles from "./index.module.scss";

const items = [
	{
		name: "Dashboard",
		icon: dashbordIcon,
		path: "/dashboard",
	},
	{
		name: "Profile",
		icon: profileIcon,
		path: "/profile",
	},
	{
		name: "Manage User",
		icon: manageIcon,
		path: "/manage-users",
	},
];

function Menu() {
	return (
		<div className={styles.menu_container}>
			<div className={styles.menu_container__list}>
				{items.map((item, index) => (
						<MenuItem
							key={`${item.name} ${index}`}
							name={item.name}
							icon={item.icon}
							path={item.path}
						/>
				))}
			</div>
		</div>
	);
}

export default Menu;
