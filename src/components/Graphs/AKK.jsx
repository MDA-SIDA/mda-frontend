import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/akk";
import Chart from "@common/Chart";
import {groupBy} from "lodash";
import {getDatasets, sortLabels} from "./utils";
import RRUGET from "./RRUGET";

function AKK({
	fetchKategoria,
	fetchPronesia,
	fetchKlasa,
	fetchLlojiNdertesesSiperfaqja,
	fetchLlojiNdertesesNumri,
	fetchTipiPronesNumri,
	kategoria,
	pronesia,
	klasa,
	llojiNdertesesSiperfaqja,
	llojiNdertesesNumri,
	tipiPronesNumri,
	filters,
}) {
	useEffect(() => {
		fetchKategoria(filters);
		fetchPronesia(filters);
		fetchKlasa(filters);
		fetchLlojiNdertesesSiperfaqja(filters);
		fetchLlojiNdertesesNumri(filters);
		fetchTipiPronesNumri(filters);
	}, [filters]);

	const kategoriaDataSets = getDatasets({
		filters,
		items: kategoria,
		singleItemLabel: "Siperfaqja",
		property: "siperfaqja",
		filterBy: "kategoria",
	});

	const pronesiaDataSets = getDatasets({
		filters,
		items: pronesia,
		singleItemLabel: "Siperfaqja",
		property: "siperfaqja",
		filterBy: "pronesia",
	});

	const klasaDataSets = getDatasets({
		filters,
		items: klasa,
		singleItemLabel: "Siperfaqja",
		property: "siperfaqja",
		filterBy: "klasa",
	});

	const llojiNdertesesSiperfaqjaDataSets = getDatasets({
		filters,
		items: llojiNdertesesSiperfaqja,
		singleItemLabel: "Siperfaqja",
		property: "siperfaqja",
		filterBy: "llojinderteses",
	});

	const llojiNdertesesNumriDataSets = getDatasets({
		filters,
		items: llojiNdertesesNumri,
		singleItemLabel: "Numri i ndertesave",
		property: "nrndertesave",
		filterBy: "llojinderteses",
	});

	const tipiPronesNumriDataSets = getDatasets({
		filters,
		items: tipiPronesNumri,
		singleItemLabel: "Siperfaqja",
		property: "siperfaqja",
		filterBy: "tipiprones",
	});

	return (
		<>
			<Chart
				title="Siperfaqja sipas kategorise"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(kategoria, "kategoria"))),
					datasets: kategoriaDataSets,
				}}
			/>
			<Chart
				title="Siperfaqja sipas pronesise"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(pronesia, "pronesia"))),
					datasets: pronesiaDataSets,
				}}
			/>
			<Chart
				title="Siperfaqja sipas klases"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(klasa, "klasa"))),
					datasets: klasaDataSets,
				}}
			/>
			<Chart
				title="Siperfaqja sipas llojit te nderteses"
				type="bar"
				data={{
					labels: sortLabels(
						Object.keys(groupBy(llojiNdertesesSiperfaqja, "llojinderteses")),
					),
					datasets: llojiNdertesesSiperfaqjaDataSets,
				}}
			/>
			<Chart
				title="Numri i ndertesave sipas llojit te nderteses"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(llojiNdertesesNumri, "llojinderteses"))),
					datasets: llojiNdertesesNumriDataSets,
				}}
			/>
			<Chart
				title="Numri i ndertesave sipas tipit te prones"
				type="pie"
				data={{
					labels: sortLabels(Object.keys(groupBy(tipiPronesNumri, "tipiprones")))?.map(
						(label) => (label === "NULL" ? "N/A" : label),
					),
					datasets: tipiPronesNumriDataSets,
				}}
			/>
			<RRUGET filters={filters} />
		</>
	);
}

const mapDispatchToProps = {
	fetchKategoria: actions.fetchKategoria,
	fetchPronesia: actions.fetchPronesia,
	fetchKlasa: actions.fetchKlasa,
	fetchLlojiNdertesesSiperfaqja: actions.fetchLlojiNdertesesSiperfaqja,
	fetchLlojiNdertesesNumri: actions.fetchLlojiNdertesesNumri,
	fetchTipiPronesNumri: actions.fetchTipiPronesNumri,
};
const mapStateToProps = (state) => ({
	kategoria: state.app.industries.akk.kategoria,
	pronesia: state.app.industries.akk.pronesia,
	klasa: state.app.industries.akk.klasa,
	llojiNdertesesSiperfaqja: state.app.industries.akk.llojiNdertesesSiperfaqja,
	llojiNdertesesNumri: state.app.industries.akk.llojiNdertesesNumri,
	tipiPronesNumri: state.app.industries.akk.tipiPronesNumri,
});

export default connect(mapStateToProps, mapDispatchToProps)(AKK);
