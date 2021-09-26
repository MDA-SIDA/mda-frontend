import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/rruget";
import Chart from "@common/Chart";
import {groupBy} from "lodash";
import {getDatasets, sortLabels} from "./utils";

function RRUGET({
	filters,
	fetchRruget18,
	fetchRruget19,
	fetchRruget20,
	fetchRruget21,
	rruget18,
	rruget19,
	rruget20,
	rruget21,
}) {
	useEffect(() => {
		fetchRruget18(filters);
		fetchRruget19(filters);
		fetchRruget20(filters);
		fetchRruget21(filters);
	}, [filters]);

	const rruget18DataSets = getDatasets({
		filters,
		items: rruget18,
		singleItemLabel: "Gjatesia e segmenteve",
		property: "gjatesiasegmenteve",
		filterBy: "komunaemri",
	});

	const rruget19DataSets = getDatasets({
		filters,
		items: rruget19,
		singleItemLabel: "Gjatesia e segmenteve",
		property: "gjatesiasegmenteve",
		filterBy: "komunaemri",
	});

	const rruget20DataSets = getDatasets({
		filters,
		items: rruget20,
		singleItemLabel: "Gjatesia e segmenteve",
		property: "gjatesiasegmenteve",
		filterBy: "komunaemri",
	});

	const rruget21DataSets = getDatasets({
		filters,
		items: rruget21,
		singleItemLabel: "Gjatesia e segmenteve",
		property: "gjatesiasegmenteve",
		filterBy: "komunaemri",
	});

	return (
		<>
			<Chart
				title="Rruget - Gjatesia e segmenteve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(rruget18, "komunaemri"))),
					datasets: rruget18DataSets,
				}}
			/>
			<Chart
				title="Rruget - Gjatesia e segmenteve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(rruget19, "komunaemri"))),
					datasets: rruget19DataSets,
				}}
			/>
			{/* TODO: uncomment */}
			{/* <Chart
				title="Rruget - Gjatesia e segmenteve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(rruget20, "komunaemri"))),
					datasets: rruget20DataSets,
				}}
			/>
			<Chart
				title="Rruget - Gjatesia e segmenteve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(rruget21, "komunaemri"))),
					datasets: rruget21DataSets,
				}}
			/> */}
		</>
	);
}

const mapDispatchToProps = {
	fetchRruget18: actions.fetchRruget18,
	fetchRruget19: actions.fetchRruget19,
	fetchRruget20: actions.fetchRruget20,
	fetchRruget21: actions.fetchRruget21,
};
const mapStateToProps = (state) => ({
	rruget18: state.app.industries.rruget.rruget18,
	rruget19: state.app.industries.rruget.rruget19,
	rruget20: state.app.industries.rruget.rruget20,
	rruget21: state.app.industries.rruget.rruget21,
});

export default connect(mapStateToProps, mapDispatchToProps)(RRUGET);
