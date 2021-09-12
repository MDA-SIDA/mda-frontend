import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/mpbzhr";
import Chart from "@common/Chart";
import {groupBy} from "lodash";
import {getDatasets, sortLabels} from "./utils";

function MPBZhR({
	filters,
	fetchMpbzhrMasaShumaPaguar,
	fetchMpbzhrVitiHa,
	fetchMpbzhrVitiKoshere,
	fetchMpbzhrVitiKrere,
	fetchMpbzhrVitiLiter,
	fetchMpbzhrVitiPulavojse,
	fetchMpbzhrVitiThelleza,
	mpbzhrMasaShumaPaguar,
	mpbzhrVitiHa,
	mpbzhrVitiKoshere,
	mpbzhrVitiKrere,
	mpbzhrVitiLiter,
	mpbzhrVitiPulavojse,
	mpbzhrVitiThelleza,
}) {
	useEffect(() => {
		fetchMpbzhrMasaShumaPaguar(filters);
		fetchMpbzhrVitiHa(filters);
		fetchMpbzhrVitiKoshere(filters);
		fetchMpbzhrVitiKrere(filters);
		fetchMpbzhrVitiLiter(filters);
		fetchMpbzhrVitiPulavojse(filters);
		fetchMpbzhrVitiThelleza(filters);
	}, [filters]);

	const mpbzhrMasaShumaPaguarDataSets = getDatasets({
		filters,
		items: mpbzhrMasaShumaPaguar,
		singleItemLabel: "Shuma",
		property: "shuma",
		filterBy: "masa",
	});

	const mpbzhrVitiHaDataSets = getDatasets({
		filters,
		items: mpbzhrVitiHa,
		singleItemLabel: "Numri",
		property: "ha",
		filterBy: "viti",
	});

	const mpbzhrVitiKoshereDataSets = getDatasets({
		filters,
		items: mpbzhrVitiKoshere,
		singleItemLabel: "Numri",
		property: "koshere",
		filterBy: "viti",
	});

	const mpbzhrVitiKrereDataSets = getDatasets({
		filters,
		items: mpbzhrVitiKrere,
		singleItemLabel: "Numri",
		property: "krere",
		filterBy: "viti",
	});

	const mpbzhrVitiLiterDataSets = getDatasets({
		filters,
		items: mpbzhrVitiLiter,
		singleItemLabel: "Numri",
		property: "liter",
		filterBy: "viti",
	});

	const mpbzhrVitiPulavojseDataSets = getDatasets({
		filters,
		items: mpbzhrVitiPulavojse,
		singleItemLabel: "Numri",
		property: "pulavojse",
		filterBy: "viti",
	});

	const mpbzhrVitiThellezaDataSets = getDatasets({
		filters,
		items: mpbzhrVitiThelleza,
		singleItemLabel: "Numri",
		property: "thelleza",
		filterBy: "viti",
	});

	return (
		<>
			<Chart
				title="Shuma e paguar sipas mases"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mpbzhrMasaShumaPaguar, "masa"))),
					datasets: mpbzhrMasaShumaPaguarDataSets,
				}}
			/>
			<Chart
				title="Ha"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mpbzhrVitiHa, "viti"))),
					datasets: mpbzhrVitiHaDataSets,
				}}
			/>
			<Chart
				title="Koshere"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mpbzhrVitiKoshere, "viti"))),
					datasets: mpbzhrVitiKoshereDataSets,
				}}
			/>
			<Chart
				title="Krere"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mpbzhrVitiKrere, "viti"))),
					datasets: mpbzhrVitiKrereDataSets,
				}}
			/>
			<Chart
				title="Liter"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mpbzhrVitiLiter, "viti"))),
					datasets: mpbzhrVitiLiterDataSets,
				}}
			/>
			<Chart
				title="Pulavojse"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mpbzhrVitiPulavojse, "viti"))),
					datasets: mpbzhrVitiPulavojseDataSets,
				}}
			/>
			<Chart
				title="Pulavojse"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mpbzhrVitiThelleza, "viti"))),
					datasets: mpbzhrVitiThellezaDataSets,
				}}
			/>
		</>
	);
}

const mapDispatchToProps = {
	fetchMpbzhrMasaShumaPaguar: actions.fetchMpbzhrMasaShumaPaguar,
	fetchMpbzhrVitiHa: actions.fetchMpbzhrVitiHa,
	fetchMpbzhrVitiKoshere: actions.fetchMpbzhrVitiKoshere,
	fetchMpbzhrVitiKrere: actions.fetchMpbzhrVitiKrere,
	fetchMpbzhrVitiLiter: actions.fetchMpbzhrVitiLiter,
	fetchMpbzhrVitiPulavojse: actions.fetchMpbzhrVitiPulavojse,
	fetchMpbzhrVitiThelleza: actions.fetchMpbzhrVitiThelleza,
};
const mapStateToProps = (state) => ({
	mpbzhrMasaShumaPaguar: state.app.industries.mpbzhr.mpbzhrMasaShumaPaguar,
	mpbzhrVitiHa: state.app.industries.mpbzhr.mpbzhrVitiHa,
	mpbzhrVitiKoshere: state.app.industries.mpbzhr.mpbzhrVitiKoshere,
	mpbzhrVitiKrere: state.app.industries.mpbzhr.mpbzhrVitiKrere,
	mpbzhrVitiLiter: state.app.industries.mpbzhr.mpbzhrVitiLiter,
	mpbzhrVitiPulavojse: state.app.industries.mpbzhr.mpbzhrVitiPulavojse,
	mpbzhrVitiThelleza: state.app.industries.mpbzhr.mpbzhrVitiThelleza,
});

export default connect(mapStateToProps, mapDispatchToProps)(MPBZhR);
