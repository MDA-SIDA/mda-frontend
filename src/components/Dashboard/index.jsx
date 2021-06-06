import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import "./index.scss";

const Dashboard = () => <div>Dashboard</div>;

const mapStateToProps = (state) => ({
	data: state.app.home.index,
});
export default connect(mapStateToProps, null)(withRouter(Dashboard));
