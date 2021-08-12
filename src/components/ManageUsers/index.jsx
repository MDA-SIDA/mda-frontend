import React, {useState} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import DataGrid from "@common/DataTable/index";
import UsersDrawer from "@components/Sidedrawer/UsersDrawer/index";
import styles from "./index.module.scss";
import Search from "../Search/index";
import Add from "../SecondaryButton/index";

const ManageUsers = ({admins}) => {
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
	const [mode, setMode] = useState("create");
	const [user, setUser] = useState(null);
	// eslint-disable-next-line no-console

	const sideDrawerCloseHandler = () => {
		setSideDrawerIsVisible(false);
	};
	const sideDrawerToggleHandler = () => {
		setSideDrawerIsVisible(!sideDrawerIsVisible);
	};

	const columns = [
		// {title: "Admin", field: "Admin"},
		{title: "ID", field: "ID", type: "numeric"},
		{title: "Name", field: "Name"},
		{title: "Email", field: "Email"},
		{title: "Role", field: "Role"},
		{title: "Date Joined", field: "Date", type: "date"},
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

export default connect(mapStateToProps, null)(withRouter(ManageUsers));
