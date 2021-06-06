import Alert from "@common/Alert";
import Sidebar from "@components/Sidebar";
import React from "react";
import styles from "./index.module.scss";

function Layout({children}) {
	return (
		<div className={styles.layout_container}>
			<Sidebar overrideStyle={styles.layout_container__sidebar} />
			<div className={styles.layout_container__main}>
				{children}
				{/* will be rendered conditionally */}
				<div className={styles.alert}>
					<Alert
						message="Well done!"
						info="Success Message"
						backgroundColor="#EAF8D2"
						iconColor="#198106"
					/>
				</div>
			</div>
		</div>
	);
}

export default Layout;
