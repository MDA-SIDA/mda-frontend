import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/arbk";
import Chart from "@common/Chart";
import {getDatasets} from "./utils";

function ARBK({
	fetchNrBizneseve,
	fetchNrBizneseveKomuna,
	fetchGjinia,
	fetchLlojiBiznesit,
	fetchLlojiBiznesitKomuna,
	fetchStatusiBizneseve,
	fetchSektoreBujqesi,
	nrBizneseve,
	nrBizneseveKomuna,
	gjinia,
	llojiBiznesit,
	llojiBiznesitKomuna,
	statusiBizneseve,
	sektoreBujqesi,
	filters,
}) {
	useEffect(() => {
		fetchNrBizneseve(filters);
		fetchNrBizneseveKomuna(filters);
		fetchGjinia(filters);
		fetchLlojiBiznesit(filters);
		fetchLlojiBiznesitKomuna(filters);
		fetchStatusiBizneseve(filters);
		fetchSektoreBujqesi(filters);
	}, [
		fetchNrBizneseve,
		fetchNrBizneseveKomuna,
		fetchGjinia,
		fetchLlojiBiznesit,
		fetchLlojiBiznesitKomuna,
		fetchStatusiBizneseve,
		fetchSektoreBujqesi,
		filters,
	]);

	const nrBizneseveDataSets = getDatasets({
		filters,
		items: nrBizneseve,
		singleItemLabel: "Numri i bizneseve",
		property: "nrbizneseve",
	});

	const sektoreBujqesiDataSets = getDatasets({
		filters,
		items: sektoreBujqesi,
		singleItemLabel: "Numri i sektoreve ne bujqesi",
		property: "nrpunetoreve",
	});

	return (
		<>
			<Chart
				title="Sektore Bujqesi"
				type="bar"
				data={{
					labels: sektoreBujqesi?.map((item) => item.sektori?.substring(0, 10)),
					datasets: sektoreBujqesiDataSets,
				}}
				options={{
					plugins: {
						tooltip: {
							enabled: true,
							callbacks: {
								// TODO:
								footer: (items) => `Numri i punetoreve: 5, madhesia: 4`,
							},
						},
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
					},
				}}
			/>
			<Chart
				title="Numri Bizneseve"
				type="bar"
				data={{
					labels: nrBizneseve?.map((item) => item.viti),
					datasets: nrBizneseveDataSets,
				}}
				options={{
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
					},
				}}
			/>
			{/* <Chart
				title="Llojet e bizneseve per komune"
				type="bar"
				data={{
					label: "Vitet",
					labels: llojiBiznesitKomuna?.map((item) => item.komunaemri),
					datasets: [
						{
							label: "Numri i bizneseve",
							data: llojiBiznesitKomuna?.map((item) => item.counter),
							backgroundColor: "#00517D",
						},
					],
				}}
				options={{
					plugins: {
						legend: {
							display: false,
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
							min: 10,
							// max: 200,
							grid: {
								display: true,
							},
							ticks: {
								stepSize: 50,
								color: "#7C9CBF",
								padding: 30,
								fontSize: 11,
								fontFamily: "Montserrat Medium",
							},
						},
					},
				}}
			/>

			<Chart
				title="Statusi i biznesit"
				type="bar"
				data={{
					labels: statusiBizneseve?.map((item) => item.komunaemri),
					datasets: [
						{
							label: "Aktiv",
							data: statusiBizneseve?.map((item) => item.countaktiv),
							backgroundColor: "#00517D",
						},
						{
							label: "Joaktiv",
							data: statusiBizneseve?.map((item) => item.countjoaktiv),
							backgroundColor: "#DDB40A",
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
							min: 10,
							// max: 200,
							grid: {
								display: true,
							},
							ticks: {
								stepSize: 50,
								color: "#7C9CBF",
								padding: 30,
								fontSize: 11,
								fontFamily: "Montserrat Medium",
							},
						},
					},
				}}
			/> */}
		</>
	);
}

const mapDispatchToProps = {
	fetchNrBizneseve: actions.fetchNrBizneseve,
	fetchNrBizneseveKomuna: actions.fetchNrBizneseveKomuna,
	fetchGjinia: actions.fetchGjinia,
	fetchLlojiBiznesit: actions.fetchLlojiBiznesit,
	fetchLlojiBiznesitKomuna: actions.fetchLlojiBiznesitKomuna,
	fetchStatusiBizneseve: actions.fetchStatusiBizneseve,
	fetchSektoreBujqesi: actions.fetchSektoreBujqesi,
};
const mapStateToProps = (state) => ({
	nrBizneseve: state.app.industries.arbk.nrBizneseve,
	nrBizneseveKomuna: state.app.industries.arbk.nrBizneseveKomuna,
	gjinia: state.app.industries.arbk.gjinia,
	llojiBiznesit: state.app.industries.arbk.llojiBiznesit,
	llojiBiznesitKomuna: state.app.industries.arbk.llojiBiznesitKomuna,
	statusiBizneseve: state.app.industries.arbk.statusiBizneseve,
	sektoreBujqesi: state.app.industries.arbk.sektoreBujqesi,
});

export default connect(mapStateToProps, mapDispatchToProps)(ARBK);
