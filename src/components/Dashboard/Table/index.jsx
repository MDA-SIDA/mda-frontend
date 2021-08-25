/* eslint-disable no-console */
import React, {useState, useEffect} from "react";
import Search from "@components/Search";
import DataGrid from "@common/DataTable/index";
import AddData from "@components/SecondaryButton/index";
import {useLocation} from "react-router-dom";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {actions} from "@sagas/arbk";
import {actions as uniActions} from "@sagas/universitetet";
import IndustryDrawer from "@components/Sidedrawer/IndustryDrawer";
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

	useEffect(() => {
		if (location.field === "arbk" && arbk?.length < 1) {
			fetch();
		} else if (location.field === "universitetiiprishtines" && uni?.length < 1) {
			fetchUni();
		}
	}, []);

	useEffect(() => {
		if (location.field === "arbk") {
			setTableData(arbk);
		} else if (location.field === "universitetiiprishtines") {
			setTableData(uni);
		}
	}, [arbk, uni]);

	return (
		<div className={styles.container}>
			<h1>{`Të dhënat > ${location.name}`}</h1>
			<div className={styles.container__table}>
				<div className={styles.container__table__header}>
					<IndustryDrawer
						open={sideDrawerIsVisible}
						closed={sideDrawerCloseHandler}
						industry={location.field}
					/>
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
	uni: state.app.universitetiiprishtines?.index?.universitetiiprishtines
		.map((o) => ({...o, tableData: {}}))
		.reverse(),
});

const mapDispatchToProps = {
	fetch: actions.fetch,
	fetchUni: uniActions.fetch,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Table));
