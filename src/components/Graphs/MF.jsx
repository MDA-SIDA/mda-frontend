import React, {useEffect} from "react";
import Chart from "@common/Chart";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/mf";
import {groupBy} from "lodash";
import {getDatasets, sortLabels} from "./utils";

function MF({fetchMF81, fetchMF82, fetchMF83, fetchMF84, mf81, mf82, mf83, mf84, filters}) {
	useEffect(() => {
		fetchMF81(filters);
		fetchMF82(filters);
		fetchMF83(filters);
		fetchMF84(filters);
	}, [filters]);

	const mf81DataSets = getDatasets({
		filters,
		items: mf81,
		singleItemLabel: "Shpenzimet sipas programeve",
		property: "paga",
		filterBy: "organizata",
	});
	const mf82DataSets = getDatasets({
		filters,
		items: mf82,
		singleItemLabel: "Shpenzimet sipas programeve",
		property: "paga",
		filterBy: "organizata",
	});
	const mf83DataSets = getDatasets({
		filters,
		items: mf83,
		singleItemLabel: "Kapitalet",
		property: "buxheti",
		filterBy: "organizata",
	});
	const mf84DataSets = getDatasets({
		filters,
		items: mf84,
		singleItemLabel: "Kapitalet",
		property: "buxheti",
		filterBy: "organizata",
	});

	return (
		<>
			<Chart
				title="Shpenzimet sipas programeve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mf81, "organizata"))),
					datasets: mf81DataSets,
				}}
			/>
			<Chart
				title="Shpenzimet sipas programeve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mf82, "organizata"))),
					datasets: mf82DataSets,
				}}
			/>
			<Chart
				title="Kapitalet Lokale"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mf83, "organizata"))),
					datasets: mf83DataSets,
				}}
			/>
			<Chart
				title="Kapitalet Qendrore"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mf84, "organizata"))),
					datasets: mf84DataSets,
				}}
			/>
		</>
	);
}

const mapDispatchToProps = {
	fetchMF81: actions.fetchMF81,
	fetchMF82: actions.fetchMF82,
	fetchMF83: actions.fetchMF83,
	fetchMF84: actions.fetchMF84,
};

const mapStateToProps = (state) => ({
	mf81: state.app.industries.mf.mf81,
	mf82: state.app.industries.mf.mf82,
	mf83: state.app.industries.mf.mf83,
	mf84: state.app.industries.mf.mf84,
});

export default connect(mapStateToProps, mapDispatchToProps)(MF);
