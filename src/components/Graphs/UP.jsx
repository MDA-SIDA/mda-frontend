import React, {useEffect} from "react";
import {connect} from "react-redux";
import "./index.scss";
import Chart from "@common/Chart";
import {actions} from "@sagas/industries/up";
import {groupBy, isArray} from "lodash";
import {getDatasets, areFiltersEmpty} from "./utils";

const UP = ({
	fetchStatusi,
	fetchNiveli,
	fetchKombiNumriStudenteve,
	fetchGjinia,
	fetchFakultetiNumriStudenteve,
	fetchVitiDiplomimit,
	fetchKomunaNumriStudenteve,
	fetchDiplomuar,
	fetchFakultetiNotaMesatare,
	fetchKomunaNotaMesatare,
	fetchKombiNotaMesatare,
	statusi,
	niveli,
	kombiNumriStudenteve,
	gjinia,
	fakultetiNumriStudenteve,
	vitiDiplomimit,
	komunaNumriStudenteve,
	diplomuar,
	fakultetiNotaMesatare,
	komunaNotaMesatare,
	kombiNotaMesatare,
	filters,
}) => {
	useEffect(() => {
		fetchStatusi(filters);
		fetchNiveli(filters);
		fetchKombiNumriStudenteve(filters);
		fetchGjinia(filters);
		fetchFakultetiNumriStudenteve(filters);
		fetchVitiDiplomimit(filters);
		fetchKomunaNumriStudenteve(filters);
		fetchDiplomuar(filters);
		fetchFakultetiNotaMesatare(filters);
		fetchKomunaNotaMesatare(filters);
		fetchKombiNotaMesatare(filters);
	}, [filters]);
	// console.log("kombiNotaMesatare", kombiNotaMesatare);

	// console.log('statusi')

	const statusiDataSets = getDatasets({
		filters,
		items: statusi,
		singleItemLabel: "Numri i studenteve",
		property: "numristudenteve",
		filterBy: "statusi",
	});

	const niveliDataSets = getDatasets({
		filters,
		items: niveli,
		singleItemLabel: "Niveli i studimeve",
		property: "numristudenteve",
		filterBy: "niveli",
	});

	console.log(niveliDataSets);

	const kombiNumriStudenteveDataSets = getDatasets({
		filters,
		items: kombiNumriStudenteve,
		singleItemLabel: "Numri i studenteve",
		property: "numristudenteve",
		filterBy: "kombi",
	});

	const gjiniaDataSets = getDatasets({
		filters,
		items: gjinia,
		singleItemLabel: "Numri i studenteve",
		property: "numristudenteve",
		filterBy: "gjinia",
	});

	const fakultetiNumriStudenteveDataSets = getDatasets({
		filters,
		items: fakultetiNumriStudenteve,
		singleItemLabel: "Numri i studenteve",
		property: "numristudenteve",
		filterBy: "fakulteti",
	});

	const vitiDiplomimitDataSets = getDatasets({
		filters,
		items: vitiDiplomimit,
		singleItemLabel: "Numri i studenteve",
		property: "studentetediplomuar",
		filterBy: "vitidiplomimit",
	});

	const komunaNumriStudenteveDataSets = getDatasets({
		filters,
		items: komunaNumriStudenteve,
		singleItemLabel: "Numri i studenteve",
		property: "numristudenteve",
		filterBy: "regjioniemri",
	});

	const diplomuarDataSets = getDatasets({
		filters,
		items: diplomuar,
		singleItemLabel: "Numri i studenteve",
		property: "studentetediplomuar",
		filterBy: "komunaemri",
	});

	// todo: check again to show avg as it is
	const fakultetiNotaMesatareDataSets = getDatasets({
		filters,
		items: fakultetiNotaMesatare,
		singleItemLabel: "Numri i studenteve",
		property: "notamesatare",
		filterBy: "regjioniemri",
	});

	// todo: check again to show avg as it is, not working on server
	const komunaNotaMesatareDataSets = getDatasets({
		filters,
		items: komunaNotaMesatare,
		singleItemLabel: "Numri i studenteve",
		property: "notamesatare",
		filterBy: "regjioniemri",
	});

	const kombiNotaMesatareDataSets = getDatasets({
		filters,
		items: kombiNotaMesatare,
		singleItemLabel: "Numri i studenteve",
		property: "notamesatare",
		filterBy: "kombi",
	});

	// const nrUniverziteteveKomunaDataSets = getDatasets({
	// 	filters,
	// 	items: nrUniverziteteveKomuna,
	// 	singleItemLabel: "Numri i studenteve te komunave",
	// 	property: "studentcount",
	// });

	return (
		<>
			<Chart
				title="Numri i studenteve sipas statusit"
				type="bar"
				data={{
					labels: Object.keys(groupBy(statusi, "statusi")),
					datasets: statusiDataSets,
				}}
				options={{
					interaction: {
						intersect: false,
						mode: "index",
					},
					plugins: {
						tooltip: {
							callbacks: {
								footer,
							},
						},
					},
				}}
			/>
			<Chart
				title="Numri i studenteve sipas nivelit te studimeve"
				type="bar"
				data={{
					labels: Object.keys(groupBy(niveli, "niveli")),
					datasets: niveliDataSets,
				}}
				options={{
					interaction: {
						intersect: false,
						mode: "index",
					},
					plugins: {
						tooltip: {
							callbacks: {
								footer,
							},
						},
					},
				}}
			/>
			<Chart
				title="Numri i studenteve sipas kombit"
				type="bar"
				data={{
					labels: Object.keys(groupBy(kombiNumriStudenteve, "kombi")),
					datasets: kombiNumriStudenteveDataSets,
				}}
				options={{
					interaction: {
						intersect: false,
						mode: "index",
					},
					plugins: {
						tooltip: {
							callbacks: {
								footer: (tooltipItems) => footer(tooltipItems),
							},
						},
					},
				}}
			/>
			<Chart
				title="Numri i studenteve sipas gjinise"
				type="bar"
				data={{
					labels: Object.keys(groupBy(gjinia, "gjinia")),
					datasets: gjiniaDataSets,
				}}
				options={{
					interaction: {
						intersect: false,
						mode: "index",
					},
					plugins: {
						tooltip: {
							callbacks: {
								footer,
							},
						},
					},
				}}
			/>
			<Chart
				title="Numri i studenteve sipas fakulteteve"
				type="bar"
				data={{
					labels: Object.keys(groupBy(fakultetiNumriStudenteve, "fakulteti")),
					datasets: fakultetiNumriStudenteveDataSets,
				}}
				options={{
					interaction: {
						intersect: false,
						mode: "index",
					},
					plugins: {
						tooltip: {
							callbacks: {
								footer,
							},
						},
					},
				}}
			/>
			<Chart
				title="Numri i studenteve sipas vitit te diplomimit"
				type="line"
				data={{
					labels: Object.keys(groupBy(vitiDiplomimit, "vitidiplomimit")),
					datasets: vitiDiplomimitDataSets,
				}}
				options={{
					interaction: {
						intersect: false,
						mode: "index",
					},
					plugins: {
						tooltip: {
							callbacks: {
								footer,
							},
						},
					},
				}}
			/>
			<Chart
				title="Numri i studenteve sipas komunave"
				type="bar"
				data={{
					labels: Object.keys(groupBy(komunaNumriStudenteve, "regjioniemri")),
					datasets: komunaNumriStudenteveDataSets,
				}}
				options={{
					interaction: {
						intersect: false,
						mode: "index",
					},
					plugins: {
						tooltip: {
							callbacks: {
								footer,
							},
						},
					},
				}}
			/>
			{/* <Chart
				title="Numri i studenteve te diplomuar sipas komunave"
				type="pie"
				data={{
					labels: Object.keys(groupBy(diplomuar, "komunaemri")),
					datasets: diplomuarDataSets,
				}}
				options={{
					interaction: {
						intersect: false,
						mode: "index",
					},
					plugins: {
						tooltip: {
							callbacks: {
								footer,
							},
						},
					},
				}}
			/> */}
			<Chart
				title="Nota mesatare sipas komunave"
				type="bar"
				data={{
					labels: Object.keys(groupBy(fakultetiNotaMesatare, "regjioniemri")),
					datasets: fakultetiNotaMesatareDataSets,
				}}
			/>
			<Chart
				title="Nota mesatare sipas kombit"
				type="bar"
				data={{
					labels: Object.keys(groupBy(kombiNotaMesatare, "kombi")),
					datasets: kombiNotaMesatareDataSets,
				}}
			/>
			{/*
			{!areFiltersEmpty(filters) && (
				<Chart
					title="Numri i studenteve te komunave"
					type="bar"
					data={{
						labels: nrUniverziteteveKomunaDataSets.map((item) => item?.label),
						datasets: nrUniverziteteveKomunaDataSets.map((item) => {
							const data =
								isArray(item?.data) &&
								item?.data?.reduce((a, b) => Number(a) + Number(b), 0);
							item.data = [data];

							return item;
						}),
					}}
				/>
			)} */}
			{/* <Chart
				title="Numri i studenteve ne baze te gjinise pergjate viteve"
				type="bar"
				data={{
					labels: Object.keys(groupBy(meshkujFemra, "viti")),
					datasets: [...femraDataSets, ...meshkujDataSets],
				}}
				options={{
					scales: {
						y: {
							type: "linear",
							display: true,
							position: "left",
							title: {
								display: true,
								text: "Meshkuj",
							},
						},
						y1: {
							type: "linear",
							display: true,
							position: "right",
							title: {
								display: true,
								text: "Femra",
							},
							// grid line settings
							grid: {
								drawOnChartArea: false,
							},
						},
					},
				}}
			/> */}
		</>
	);
};

const mapDispatchToProps = {
	fetchStatusi: actions.fetchStatusi,
	fetchNiveli: actions.fetchNiveli,
	fetchKombiNumriStudenteve: actions.fetchKombiNumriStudenteve,
	fetchGjinia: actions.fetchGjinia,
	fetchFakultetiNumriStudenteve: actions.fetchFakultetiNumriStudenteve,
	fetchVitiDiplomimit: actions.fetchVitiDiplomimit,
	fetchKomunaNumriStudenteve: actions.fetchKomunaNumriStudenteve,
	fetchDiplomuar: actions.fetchDiplomuar,
	fetchFakultetiNotaMesatare: actions.fetchFakultetiNotaMesatare,
	fetchKomunaNotaMesatare: actions.fetchKomunaNotaMesatare,
	fetchKombiNotaMesatare: actions.fetchKombiNotaMesatare,
};

const mapStateToProps = (state) => ({
	statusi: state.app.industries.up.statusi,
	niveli: state.app.industries.up.niveli,
	kombiNumriStudenteve: state.app.industries.up.kombiNumriStudenteve,
	gjinia: state.app.industries.up.gjinia,
	fakultetiNumriStudenteve: state.app.industries.up.fakultetiNumriStudenteve,
	vitiDiplomimit: state.app.industries.up.vitiDiplomimit,
	komunaNumriStudenteve: state.app.industries.up.komunaNumriStudenteve,
	diplomuar: state.app.industries.up.diplomuar,
	fakultetiNotaMesatare: state.app.industries.up.fakultetiNotaMesatare,
	komunaNotaMesatare: state.app.industries.up.komunaNotaMesatare,
	kombiNotaMesatare: state.app.industries.up.kombiNotaMesatare,
});

export default connect(mapStateToProps, mapDispatchToProps)(UP);

// test purpose only
const footer = (tooltipItems) => {
	let sum = 0;

	tooltipItems.forEach(function (tooltipItem) {
		sum += tooltipItem.parsed.y;
	});
	// return `Sum: ${sum}`;
};
