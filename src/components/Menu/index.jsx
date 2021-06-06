import React from "react";
import MenuItem from "@common/MenuItem";
import dashbordIcon from "@img/svg/dashboard.svg";
import styles from "./index.module.scss";

const items = [
	{
		name: "Dashboard",
		icon: dashbordIcon,
		path: "/dashboard",
	},
];

function Menu() {
	return (
		<div className={styles.menu_container}>
			<div className={styles.menu_container__title}>Menu</div>
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
