import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/dogana";
import Chart from "@common/Chart";
import {groupBy} from "lodash";
import {getDatasets, sortLabels} from "./utils";

function DOGANA({
	filters,
	fetchDogana70,
	fetchDogana71,
	fetchDogana72,
	fetchDogana73,
	fetchDogana74,
	dogana70,
	dogana71,
	dogana72,
	dogana73,
	dogana74,
}) {
	useEffect(() => {
		fetchDogana70(filters);
		fetchDogana71(filters);
		fetchDogana72(filters);
		fetchDogana73(filters);
		fetchDogana74(filters);
	}, [filters]);

	const dogana70DataSets = getDatasets({
		filters,
		items: dogana70,
		singleItemLabel: "Customs Value",
		property: "customsValue",
		filterBy: "viti",
	});
	const dogana71DataSets = getDatasets({
		filters,
		items: dogana71,
		singleItemLabel: "Customs Value",
		property: "customsValue",
		filterBy: "viti",
	});
	const dogana72DataSets = getDatasets({
		filters,
		items: dogana72,
		singleItemLabel: "Customs Value",
		property: "customsValue",
		filterBy: "viti",
	});
	const dogana73DataSets = getDatasets({
		filters,
		items: dogana73,
		singleItemLabel: "Customs Value",
		property: "customsValue",
		filterBy: "viti",
	});
	const dogana74DataSets = getDatasets({
		filters,
		items: dogana74,
		singleItemLabel: "Customs Value",
		property: "customsValue",
		filterBy: "viti",
	});
	return (
		<>
			<Chart
				title="Customs Value / viti"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(dogana70, "viti"))),
					datasets: dogana70DataSets,
				}}
			/>
			<Chart
				title="Customs Value / viti, only regime IM4"
				type="line"
				data={{
					labels: sortLabels(Object.keys(groupBy(dogana71, "viti"))),
					datasets: dogana71DataSets,
				}}
			/>
			<Chart
				title="Customs Value / viti, only regime EX1"
				type="line"
				data={{
					labels: sortLabels(Object.keys(groupBy(dogana72, "viti"))),
					datasets: dogana72DataSets,
				}}
			/>
			<Chart
				title="Viti 2020 (top 15 importing countries), only regime IM4"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(dogana73, "viti"))),
					datasets: dogana73DataSets,
				}}
			/>
			<Chart
				title="Viti 2020 (top 15 importing countries), only regime EX1"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(dogana74, "viti"))),
					datasets: dogana74DataSets,
				}}
			/>
		</>
	);
}

const mapDispatchToProps = {
	fetchDogana70: actions.fetchDogana70,
	fetchDogana71: actions.fetchDogana71,
	fetchDogana72: actions.fetchDogana72,
	fetchDogana73: actions.fetchDogana73,
	fetchDogana74: actions.fetchDogana74,
};
const mapStateToProps = (state) => ({
	dogana70: state.app.industries.dogana.dogana70,
	dogana71: state.app.industries.dogana.dogana71,
	dogana72: state.app.industries.dogana.dogana72,
	dogana73: state.app.industries.dogana.dogana73,
	dogana74: state.app.industries.dogana.dogana74,
});

export default connect(mapStateToProps, mapDispatchToProps)(DOGANA);
