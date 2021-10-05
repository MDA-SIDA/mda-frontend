import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import "./index.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Filters from "@components/Filters";
import Graphs from "@components/Graphs";
import SideDrawer from "@components/Sidedrawer";
import useWindowDimensions from "@utils/use_window_dimensions";
import {isEqual} from "lodash";

const Home = ({selectedFilters}) => {
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
	const [isEmpty, setIsEmpty] = useState(true);
	const [showGraph, setShowGraph] = useState(null);
	const {width} = useWindowDimensions();

	const sideDrawerCloseHandler = () => {
		setSideDrawerIsVisible(false);
	};
	const sideDrawerToggleHandler = () => {
		setSideDrawerIsVisible(!sideDrawerIsVisible);
	};

	useEffect(() => {
		if (!selectedFilters?.industria?.value) {
			setIsEmpty(true);
		} else {
			setIsEmpty(false);
			setShowGraph(selectedFilters?.industria?.value);
		}
	}, [selectedFilters?.industria?.value]);

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
				<Graphs isEmpty={isEmpty} showGraph={showGraph} />
			</div>
			<Footer />
		</div>
	);
};

const mapStateToProps = (state) => ({
	selectedFilters: state.app.filters.index.selected,
});

export default connect(mapStateToProps, null)(React.memo(Home, propsAreEqual));

function propsAreEqual(prev, next) {
	return (
		isEqual(prev.selectedFilters.industria, next.selectedFilters.industria) &&
		isEqual(prev.selectedFilters.regjionet, next.selectedFilters.regjionet) &&
		isEqual(prev.selectedFilters.komunat, next.selectedFilters.komunat) &&
		isEqual(prev.selectedFilters.vendbanimet, next.selectedFilters.vendbanimet) &&
		isEqual(prev.selectedFilters.vitet, next.selectedFilters.vitet) &&
		isEqual(prev.selectedFilters.regime, next.selectedFilters.regime)
	);
}
