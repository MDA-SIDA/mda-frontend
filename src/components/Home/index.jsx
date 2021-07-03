import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import "./index.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Filters from "@components/Filters";
import Graphs from "@components/Graphs";

const Home = () => (
	<div className="container">
		<Header />
		<div className="content">
			<Filters />
			<Graphs />
		</div>
		<Footer />
	</div>
);

export default connect(null, null)(withRouter(Home));
