import React, {useEffect} from "react";
import {connect} from "react-redux";
import "./index.scss";
import Chart from "@common/Chart";
import {actions} from "@sagas/industries/up";
import {groupBy} from "lodash";
import {getDatasets} from "./utils";

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
		items: Object.values(groupBy(shtetesia, "shtetesia")).flat(),
		singleItemLabel: "Shtetesia e studenteve",
		property: "studentcount",
	});

	const meshkujDataSets = getDatasets({
		filters,
		items: Object.values(groupBy(meshkujFemra, "viti")).flat(),
		singleItemLabel: "Shtetesia e studenteve",
		property: "meshkuj",
		isMeshkujFemra: true,
		filterBy: "viti",
	});

	const femraDataSets = getDatasets({
		filters,
		items: meshkujFemra,
		singleItemLabel: "Shtetesia e studenteve",
		property: "femra",
		isMeshkujFemra: true,
		filterBy: "viti",
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
