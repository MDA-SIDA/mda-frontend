import React, {useState} from "react";
import Search from "@components/Search";
import DataGrid from "@common/DataTable/index";
import AddData from "@components/SecondaryButton/index";
import Sidedrawer from "@components/Sidedrawer";
import Input from "@common/Input";
import {useLocation} from "react-router-dom";
import styles from "./index.module.scss";

const Table = () => {
	const location = useLocation();
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

	const sideDrawerCloseHandler = () => {
		setSideDrawerIsVisible(false);
	};
	const sideDrawerToggleHandler = () => {
		setSideDrawerIsVisible(!sideDrawerIsVisible);
	};
	// eslint-disable-next-line no-console

	return (
		<div className={styles.container}>
			<h1>Të dhënat</h1>
			<div className={styles.container__table}>
				<div className={styles.container__table__header}>
					<Sidedrawer open={sideDrawerIsVisible} closed={sideDrawerCloseHandler}>
						<p>Test</p>
					</Sidedrawer>
					<Search />
					<AddData drawerHandler={sideDrawerToggleHandler} name="Shto të dhëna" />
				</div>

				<DataGrid columns={location.data} />
			</div>
		</div>
	);
};

export default Table;
