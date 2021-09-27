import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/akk";
import Chart from "@common/Chart";
import PieChart from "@common/Chart/Pie";
import {groupBy} from "lodash";
import {getDatasets, sortLabels, getTipiPronesDataset} from "./utils";
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

	const tipiPronesNumriData = getTipiPronesDataset({items: tipiPronesNumri, filters});

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
					labels: sortLabels(Object.keys(groupBy(pronesia, "pronesia")))?.map((label) =>
						label === "NULL" ? "N/A" : label,
					),
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
			{tipiPronesNumriData?.map((item, index) => (
				<PieChart
					key={`${index} item=index`}
					title={`Numri i ndertesave sipas tipit te prones${
						item.label ? `: ${item.label}` : ""
					}`}
					data={{
						labels: ["Shoqerore", "Private", "N/A"],
						datasets: [
							{
								label: item.label,
								data: [item.data?.shoqerore, item.data?.privat, item.data?.na],
								backgroundColor: ["#00517D", "#FCCB11", "#02BC77"],
							},
						],
					}}
				/>
			))}
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
