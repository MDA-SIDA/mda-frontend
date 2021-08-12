import React, {useState} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import DataGrid from "@common/DataTable/index";
import UsersDrawer from "@components/Sidedrawer/UsersDrawer/index";
import {Avatar} from "@material-ui/core";
import styles from "./index.module.scss";
import Search from "../Search/index";
import Add from "../SecondaryButton/index";

const ManageUsers = () => {
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

	const sideDrawerCloseHandler = () => {
		setSideDrawerIsVisible(false);
	};
	const sideDrawerToggleHandler = () => {
		setSideDrawerIsVisible(!sideDrawerIsVisible);
	};
	const columns = [
		{title: "Admin", field: "Admin"},
		{title: "ID", field: "ID", type: "numeric"},
		{title: "Name", field: "Name"},
		{title: "Email", field: "Email"},
		{title: "Role", field: "Role"},
		{title: "Date Joined", field: "Date", type: "date"},
	];
	const data = [
		{
			Admin: <Avatar size={10} round={true} />,
			ID: "77",
			Name: "John",
			Email: "john@gmail.com",
			Role: "Admin",
			Date: "12/12/2001",
		},
	];

	return (
		<div className={styles.container}>
			<h1>Menaxho Perdoruesit</h1>
			<div className={styles.container__table}>
				<div className={styles.container__table__header}>
					<Search />
					<Add name="Add New" drawerHandler={sideDrawerToggleHandler} />
					<UsersDrawer open={sideDrawerIsVisible} closed={sideDrawerCloseHandler} />
				</div>
				<DataGrid columns={columns} tableData={data} />
			</div>
		</div>
	);
};

export default connect(null, null)(withRouter(ManageUsers));
