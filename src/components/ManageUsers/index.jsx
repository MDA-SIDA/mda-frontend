import React, {useState, useEffect} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import DataGrid from "@common/DataTable/index";
import UsersDrawer from "@components/Sidedrawer/UsersDrawer/index";
import {actions} from "@sagas/admins";
import Add from "@common/SecondaryButton/index";
import styles from "./index.module.scss";
import Search from "../Search/index";

const ManageUsers = ({admins, fetch}) => {
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
	const [mode, setMode] = useState("create");
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch();
	}, []);

	const sideDrawerCloseHandler = () => {
		setSideDrawerIsVisible(false);
	};
	const sideDrawerToggleHandler = () => {
		setSideDrawerIsVisible(!sideDrawerIsVisible);
	};

	const columns = [
		// {title: "Admin", field: "Admin"},
		{title: "ID", field: "id", type: "numeric"},
		{title: "Name", field: "name"},
		{title: "Email", field: "email"},
		{title: "Role", field: "role"},
		{title: "Date Joined", field: "date", type: "date"},
	];

	const editAdmin = (rowData) => {
		setMode("edit");
		sideDrawerToggleHandler();
		setUser(rowData);
	};

	// eslint-disable-next-line no-console

	return (
		<div className={styles.container}>
			<h1>Menaxho Perdoruesit</h1>
			<div className={styles.container__table}>
				<div className={styles.container__table__header}>
					<Search />
					<Add name="Add New" drawerHandler={sideDrawerToggleHandler} />
					<UsersDrawer
						user={user}
						mode={mode}
						open={sideDrawerIsVisible}
						closed={() => {
							sideDrawerCloseHandler();
							setMode("create");
						}}
					/>
				</div>
				<DataGrid
					columns={columns}
					tableData={admins}
					// eslint-disable-next-line no-console
					onRowClickHandler={(event, rowData) => {
						// eslint-disable-next-line no-console

						editAdmin(rowData);
					}}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	admins: state.app.admins.index.admins.map((o) => ({...o, tableData: {}})).reverse(),
});

const mapDispatchToProps = {
	fetch: actions.fetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageUsers));
