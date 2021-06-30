import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import "./index.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Filters from "@components/Filters";

const Home = () => (
	<div className="container">
		<Header />
		<div className="content">
			<Filters />
			<div className="content_graphs"></div>
		</div>
		<Footer />
	</div>
);

export default connect(null, null)(withRouter(Home));
