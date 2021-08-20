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

	// TODO: disable vendbanimi filter
	const diplomuarBrendaVititDataSets = getDatasets({
		filters,
		items: diplomuarBrendaVitit,
		singleItemLabel: "Numri i nxenesve",
		property: "tediplomuar",
	});

	const shtetesiaDataSets = getDatasets({
		filters,
		items: shtetesia,
		singleItemLabel: "Numri i nxenesve",
		property: "studentcount",
	});

	console.log("shtetesia", groupBy(shtetesia, "shtetesia"));
	console.log(shtetesia);
	console.log("shtetesia", shtetesiaDataSets);

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
			{shtetesia && (
				<Chart
					title="Nr. total i studenteve"
					type="pie"
					value={3515}
					className="gjinia"
					data={{
						// labels: ["99.9% Kosovar", "0.1% Shqiptar"],
						labels: Object.keys(groupBy(shtetesia, "shtetesia")),
						datasets: shtetesiaDataSets,
					}}
				/>
			)}
			<Chart
				title="Nr. total i studenteve"
				value={12092}
				type="bar"
				data={{
					// labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
					labels: meshkujFemra?.map((item) => item.viti),
					datasets: [
						{
							label: "Meshkuj",
							// data: [50, 30, 100, 150, 10],
							data: meshkujFemra?.map((item) => item.meshkuj),
							backgroundColor: "#00517D",
						},
						{
							label: "Femra",
							// data: [19, 40, 32, 45, 150],
							data: meshkujFemra?.map((item) => item.femra),
							backgroundColor: "#FCCB11",
						},
					],
				}}
				options={{
					plugins: {
						legend: {
							display: true,
						},
					},
					scales: {
						x: {
							ticks: {
								color: "#7C9CBF",
								padding: 30,
								fontSize: 14,
							},
							grid: {
								display: false,
							},
						},
						y: {
							min: 0,
							grid: {
								display: true,
							},
							ticks: {
								min: 0,
								stepSize: 20,
								color: "#7C9CBF",
								padding: 30,
								fontSize: 10,
								fontFamily: "Montserrat Medium",
							},
						},
					},
				}}
			/>
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
