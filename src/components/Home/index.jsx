import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import Logo from "@img/logo.png";
import "./index.scss";

const Home = () => (
	<div>
		<img alt="" src={Logo} />
	</div>
);

const mapStateToProps = (state) => ({
	data: state.app.home.index,
});
export default connect(mapStateToProps, null)(withRouter(Home));
