import React, {useState} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import "./index.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Filters from "@components/Filters";
import Graphs from "@components/Graphs";
import SideDrawer from "@components/Sidedrawer";
import useWindowDimensions from "@utils/use_window_dimensions";

const Home = () => {
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
	const {width} = useWindowDimensions();

	const sideDrawerCloseHandler = () => {
		setSideDrawerIsVisible(false);
	};
	const sideDrawerToggleHandler = () => {
		setSideDrawerIsVisible(!sideDrawerIsVisible);
	};
	return (
		<div className="container">
			<Header />
			<button type="button" className="drawerButton" onClick={sideDrawerToggleHandler}>
				Filter
			</button>
			<div className="content">
				<div className="sideDrawerFilter">
					<SideDrawer left open={sideDrawerIsVisible} closed={sideDrawerCloseHandler}>
						{width < 500 && <Filters closeDrawer={sideDrawerCloseHandler} />}
					</SideDrawer>
				</div>
				<div className="mainFilters">
					{width >= 500 && <Filters closeDrawer={sideDrawerCloseHandler} />}
				</div>
				<Graphs />
			</div>
			<Footer />
		</div>
	);
};

export default connect(null, null)(withRouter(Home));
