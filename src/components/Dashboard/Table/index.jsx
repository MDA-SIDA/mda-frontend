/* eslint-disable no-console */
import React, {useState, useEffect} from "react";
import Search from "@components/Search";
import DataGrid from "@common/DataTable/index";
import AddData from "@components/SecondaryButton/index";
import Sidedrawer from "@components/Sidedrawer";
import {useLocation} from "react-router-dom";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {actions} from "@sagas/arbk";
import {actions as uniActions} from "@sagas/universitetet";
import styles from "./index.module.scss";

const Table = (props) => {
	const location = useLocation();
	const {fetch, arbk, uni, fetchUni} = props;
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
	const [tableData, setTableData] = useState([]);

	const sideDrawerCloseHandler = () => {
		setSideDrawerIsVisible(false);
	};
	const sideDrawerToggleHandler = () => {
		setSideDrawerIsVisible(!sideDrawerIsVisible);
	};
	// eslint-disable-next-line no-console
	console.log("loc", location);
	// eslint-disable-next-line no-console
	useEffect(() => {
		if (location.field === "arbk") {
			fetch();
			console.log("useNo");
		} else {
			console.log("usee");
			fetchUni();
		}
	}, []);

	useEffect(() => {
		if (location.field === "arbk") {
			setTableData(arbk);
		} else {
			setTableData(uni);
		}
	}, [arbk, uni]);
	console.log(uni);

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

				<DataGrid columns={location.columns} tableData={tableData} />
			</div>
		</div>
	);
};
const mapStateToProps = (state) => ({
	arbk: state.app.arbk?.index?.arbk.map((o) => ({...o, tableData: {}})).reverse(),
	uni: state.app.uni?.index?.uni.map((o) => ({...o, tableData: {}})).reverse(),
});

const mapDispatchToProps = {
	fetch: actions.fetch,
	fetchUni: uniActions.fetch,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Table));
