import React, {useEffect} from "react";
import {connect} from "react-redux";
import "./index.scss";
import Chart from "@common/Chart";
import {actions} from "@sagas/industries/up";
import {groupBy, isArray} from "lodash";
import {getDatasets, areFiltersEmpty} from "./utils";

const UP = ({
	fetchDiplomuarBrendaVitit,
	fetchMeshkujFemra,
	fetchShtetesia,
	fetchFakultetetBrendaKomunave,
	fetchNrUniverziteteveKomuna,
	filters,
	diplomuarBrendaVitit,
	meshkujFemra,
	shtetesia,
	nrUniverziteteveKomuna,
}) => {
	useEffect(() => {
		fetchFakultetetBrendaKomunave(filters);
		fetchMeshkujFemra(filters);
		fetchDiplomuarBrendaVitit(filters);
		fetchNrUniverziteteveKomuna(filters);
		fetchShtetesia(filters);
	}, [
		filters,
		fetchFakultetetBrendaKomunave,
		fetchMeshkujFemra,
		fetchDiplomuarBrendaVitit,
		fetchNrUniverziteteveKomuna,
		fetchShtetesia,
	]);

	// TODO: remove vendbanimi filter
	const diplomuarBrendaVititDataSets = getDatasets({
		filters,
		items: diplomuarBrendaVitit,
		singleItemLabel: "Numri i nxenesve",
		property: "tediplomuar",
	});

	// TODO: remove vendbanimi filter
	const shtetesiaDataSets = getDatasets({
		filters,
		items: shtetesia,
		singleItemLabel: "Shtetesia e studenteve",
		property: "studentcount",
		filterBy: "shtetesia",
	});

	const meshkujDataSets = getDatasets({
		filters,
		items: meshkujFemra,
		singleItemLabel: "Studentet Meshkuj",
		property: "meshkuj",
		filterBy: "viti",
	});

	const femraDataSets = getDatasets({
		filters,
		items: meshkujFemra,
		singleItemLabel: "Studentet Femra",
		property: "femra",
		filterBy: "viti",
	});

	const nrUniverziteteveKomunaDataSets = getDatasets({
		filters,
		items: nrUniverziteteveKomuna,
		singleItemLabel: "Numri i studenteve te komunave",
		property: "studentcount",
	});

	return (
		<>
			<Chart
				title="Numri i studenteve te diplomuar brenda vitit"
				type="bar"
				data={{
					labels: diplomuarBrendaVitit?.map((item) => item.komunaemri),
					datasets: diplomuarBrendaVititDataSets,
				}}
			/>
			<Chart
				title="Shtetesia e studenteve"
				type="bar"
				data={{
					labels: Object.keys(groupBy(shtetesia, "shtetesia")),
					datasets: shtetesiaDataSets,
				}}
			/>
			<Chart
				title="Numri i studenteve femra pergjate viteve"
				type="bar"
				data={{
					labels: Object.keys(groupBy(meshkujFemra, "viti")),
					datasets: femraDataSets,
				}}
			/>
			<Chart
				title="Numri i studenteve meshkuj pergjate viteve"
				type="bar"
				data={{
					labels: Object.keys(groupBy(meshkujFemra, "viti")),
					datasets: meshkujDataSets,
				}}
			/>
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
			)}
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
	fetchDiplomuarBrendaVitit: actions.fetchDiplomuarBrendaVitit,
	fetchMeshkujFemra: actions.fetchMeshkujFemra,
	fetchShtetesia: actions.fetchShtetesia,
	fetchFakultetetBrendaKomunave: actions.fetchFakultetetBrendaKomunave,
	fetchNrUniverziteteveKomuna: actions.fetchNrUniverziteteveKomuna,
};

const mapStateToProps = (state) => ({
	diplomuarBrendaVitit: state.app.industries.up.diplomuarBrendaVitit,
	meshkujFemra: state.app.industries.up.meshkujFemra,
	shtetesia: state.app.industries.up.shtetesia,
	fakultetetBrendaKomunave: state.app.industries.up.fakultetetBrendaKomunave,
	nrUniverziteteveKomuna: state.app.industries.up.nrUniverziteteveKomuna,
});

export default connect(mapStateToProps, mapDispatchToProps)(UP);
