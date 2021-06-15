import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import "./index.scss";
import Header from "@components/Header";

const Home = () => (
	<div className="container">
		<Header />
		<div></div>
		<footer></footer>
	</div>
);

const mapStateToProps = (state) => ({
	data: state.app.home.index,
});

export default connect(mapStateToProps, null)(withRouter(Home));
