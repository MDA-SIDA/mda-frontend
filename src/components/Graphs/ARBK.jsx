import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/arbk";
import Chart from "@common/Chart";
import {groupBy} from "lodash";
import {getDatasets, sortLabels} from "./utils";

function ARBK({
	fetchArbkLlojiBiznesit,
	fetchArbkViti,
	fetchArbkSektori,
	fetchArbkGjinia,
	fetchArbkStatusi,
	fetchArbkKomuna,
	arbkLlojiBiznesit,
	arbkViti,
	arbkSektori,
	arbkGjinia,
	arbkStatusi,
	arbkKomuna,
	filters,
}) {
	useEffect(() => {
		fetchArbkLlojiBiznesit(filters);
		fetchArbkViti(filters);
		fetchArbkSektori(filters);
		fetchArbkGjinia(filters);
		fetchArbkStatusi(filters);
		fetchArbkKomuna(filters);
	}, [
		fetchArbkLlojiBiznesit,
		fetchArbkViti,
		fetchArbkSektori,
		fetchArbkGjinia,
		fetchArbkStatusi,
		fetchArbkKomuna,
		filters,
	]);

	const arbkLlojiBiznesiDataSets = getDatasets({
		filters,
		items: arbkLlojiBiznesit,
		singleItemLabel: "Numri i bizneseve",
		property: "numribizneseve",
		filterBy: "llojibiznesit",
	});

	const arbkVitiDataSets = getDatasets({
		filters,
		items: arbkViti,
		singleItemLabel: "Numri i bizneseve",
		property: "numribizneseve",
		filterBy: "viti",
	});

	const arbkSektoriDataSets = getDatasets({
		filters,
		items: arbkSektori,
		singleItemLabel: "Numri i bizneseve",
		property: "numribizneseve",
		filterBy: "sektori",
	});

	const arbkGjiniaDataSets = getDatasets({
		filters,
		items: arbkGjinia,
		singleItemLabel: "Numri i bizneseve",
		property: "numribizneseve",
		filterBy: "gjinia",
	});

	const arbkStatusiDataSets = getDatasets({
		filters,
		items: arbkStatusi,
		singleItemLabel: "Numri i bizneseve",
		property: "numribizneseve",
		filterBy: "statusiibiznesit",
	});

	const arbkKomunaDataSets = getDatasets({
		filters,
		items: arbkStatusi,
		singleItemLabel: "Numri i bizneseve",
		property: "numribizneseve",
		filterBy: "komunaemri",
	});

	return (
		<>
			<Chart
				title="Numri i bizneseve sipas llojit"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(arbkLlojiBiznesit, "llojibiznesit"))),
					datasets: arbkLlojiBiznesiDataSets,
				}}
			/>
			<Chart
				title="Numri i bizneseve sipas vitit"
				type="line"
				data={{
					labels: sortLabels(Object.keys(groupBy(arbkViti, "viti"))),
					datasets: arbkVitiDataSets,
				}}
			/>
			<Chart
				title="Numri i bizneseve sipas sektoreve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(arbkSektori, "sektori"))),
					datasets: arbkSektoriDataSets,
				}}
			/>
			<Chart
				title="Numri i bizneseve sipas gjinise"
				type="pie"
				data={{
					labels: sortLabels(Object.keys(groupBy(arbkGjinia, "gjinia"))),
					datasets: arbkGjiniaDataSets,
				}}
			/>
			<Chart
				title="Numri i bizneseve sipas statusit"
				type="pie"
				data={{
					labels: sortLabels(Object.keys(groupBy(arbkStatusi, "statusiibiznesit"))),
					datasets: arbkStatusiDataSets,
				}}
			/>
			<Chart
				title="Numri i bizneseve sipas komunave"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(arbkKomuna, "komunaemri"))),
					datasets: arbkKomunaDataSets,
				}}
			/>
		</>
	);
}

const mapDispatchToProps = {
	fetchArbkLlojiBiznesit: actions.fetchArbkLlojiBiznesit,
	fetchArbkViti: actions.fetchArbkViti,
	fetchArbkSektori: actions.fetchArbkSektori,
	fetchArbkGjinia: actions.fetchArbkGjinia,
	fetchArbkStatusi: actions.fetchArbkStatusi,
	fetchArbkKomuna: actions.fetchArbkKomuna,
};
const mapStateToProps = (state) => ({
	arbkLlojiBiznesit: state.app.industries.arbk.arbkLlojiBiznesit,
	arbkViti: state.app.industries.arbk.arbkViti,
	arbkSektori: state.app.industries.arbk.arbkSektori,
	arbkGjinia: state.app.industries.arbk.arbkGjinia,
	arbkStatusi: state.app.industries.arbk.arbkStatusi,
	arbkKomuna: state.app.industries.arbk.arbkKomuna,
});

export default connect(mapStateToProps, mapDispatchToProps)(ARBK);
