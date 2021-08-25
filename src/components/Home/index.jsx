import React, {useState} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import "./index.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Filters from "@components/Filters";
import Graphs from "@components/Graphs";
import SideDrawer from "@components/Sidedrawer";

const Home = () => {
	const [filters, setFilters] = useState(null);
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

	const sideDrawerCloseHandler = () => {
		setSideDrawerIsVisible(false);
	};
	const sideDrawerToggleHandler = () => {
		setSideDrawerIsVisible(!sideDrawerIsVisible);
	};
	return (
		<div className="container">
			<Header  />
			<button type className='drawerButton' onClick={sideDrawerToggleHandler}>Filter</button>
			{/* test */}
			<div className="content">
				<div className="sideDrawerFilter">
					<SideDrawer left open={sideDrawerIsVisible} closed={sideDrawerCloseHandler}>
						<Filters getFilters={(filters) => setFilters(filters)}  closeDrawer={sideDrawerCloseHandler}/>
					</SideDrawer>
				</div>
				<div className="mainFilters">
					<Filters getFilters={(filters) => setFilters(filters)} />
				</div>
				<Graphs filters={filters} />
			</div>
			<Footer />
		</div>
	);
};

export default connect(null, null)(withRouter(Home));
