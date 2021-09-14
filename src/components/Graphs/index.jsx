import React, {useState, useEffect} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import "./index.scss";
import excl from "../../assets/img/exclamation.svg";
import {setIndustry, showGraphInitialState} from "./utils";
import UP from "./UP";
import ATK from "./ATK";
import AKK from "./AKK";
import ARBK from "./ARBK";
import AUV from "./AUV";
import MAPL from "./MAPL";
import MASHT from "./MASHT";
import MPBZhR from "./MPBZhR";
import DOGANA from "./DOGANA";
import RRUGET from "./RRUGET";
import MF from "./MF";

const Graphs = ({selectedFilters}) => {
	const [isEmpty, setIsEmpty] = useState(false);
	const [showGraph, setShowGraph] = useState(showGraphInitialState);

	useEffect(() => {
		if (!selectedFilters?.industria?.value) {
			setIsEmpty(true);
			setShowGraph(showGraphInitialState);
		} else setIsEmpty(false);
		setIndustry(selectedFilters, setShowGraph, showGraph);
	}, [selectedFilters]);

	return (
		<div className="content_graphs">
			<div className="content_graphs_graph">
				{isEmpty && (
					<div className="no-data">
						<p>
							Nuk ka asnje te dhene per t&apos;u shfaqur{" "}
							<span>
								<img src={excl} alt=""></img>
							</span>
						</p>
					</div>
				)}
				{!isEmpty && showGraph.UP && (
					<UP filters={selectedFilters} changeIsEmpty={(state) => setIsEmpty(state)} />
				)}
				{!isEmpty && showGraph.ATK && (
					<ATK filters={selectedFilters} changeIsEmpty={(state) => setIsEmpty(state)} />
				)}
				{!isEmpty && showGraph.AKK && (
					<AKK filters={selectedFilters} changeIsEmpty={(state) => setIsEmpty(state)} />
				)}
				{!isEmpty && showGraph.ARBK && (
					<ARBK filters={selectedFilters} changeIsEmpty={(state) => setIsEmpty(state)} />
				)}
				{!isEmpty && showGraph.AUV && (
					<AUV filters={selectedFilters} changeIsEmpty={(state) => setIsEmpty(state)} />
				)}
				{!isEmpty && showGraph.MAPL && (
					<MAPL filters={selectedFilters} changeIsEmpty={(state) => setIsEmpty(state)} />
				)}
				{!isEmpty && showGraph.MASHT && (
					<MASHT filters={selectedFilters} changeIsEmpty={(state) => setIsEmpty(state)} />
				)}
				{!isEmpty && showGraph.MF && (
					<MF filters={selectedFilters} changeIsEmpty={(state) => setIsEmpty(state)} />
				)}
				{!isEmpty && showGraph.RRUGET && (
					<RRUGET
						filters={selectedFilters}
						changeIsEmpty={(state) => setIsEmpty(state)}
					/>
				)}
				{!isEmpty && showGraph.MPBZhR && (
					<MPBZhR
						filters={selectedFilters}
						changeIsEmpty={(state) => setIsEmpty(state)}
					/>
				)}
				{!isEmpty && showGraph.DOGANA && (
					<DOGANA
						filters={selectedFilters}
						changeIsEmpty={(state) => setIsEmpty(state)}
					/>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	vendbanimet: state.app.filters.index.all.vendbanimet,
	komunat: state.app.filters.index.all.komunat,
	regjionet: state.app.filters.index.all.regjionet,
	industrite: state.app.filters.index.all.industrite,
	selectedFilters: state.app.filters.index.selected,
});

export default connect(mapStateToProps, null)(withRouter(Graphs));
