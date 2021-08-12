import React, {useState} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import "./index.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Filters from "@components/Filters";
import Graphs from "@components/Graphs";

const Home = () => {
	const [filters, setFilters] = useState(null);
	return (
		<div className="container">
			<Header />
			{/* test */}
			<div className="content">
				<Filters getFilters={(filters) => setFilters(filters)} />
				<Graphs filters={filters} />
			</div>
			<Footer />
		</div>
	);
};

export default connect(null, null)(withRouter(Home));
