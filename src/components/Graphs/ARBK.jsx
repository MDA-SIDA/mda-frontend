import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/arbk";
import Chart from "@common/Chart";

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

	return (
		<>
			<Chart
				title="Sektore Bujqesi"
				type="bar"
				data={{
					labels: sektoreBujqesi?.map((item) => item.sektori),
					datasets: [
						{
							label: "Numri i punetoreve",
							data: sektoreBujqesi?.map((item) => item.nrpunetoreve),
							backgroundColor: "#00517D",
						},
						{
							label: "Pageviews",
							data: sektoreBujqesi?.map((item) => item.madhesia),
							backgroundColor: "#000",
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
				title="Numri Bizneseve"
				type="bar"
				data={{
					labels: nrBizneseve?.map((item) => item.viti),
					datasets: [
						{
							label: "Numri i bizneseve",
							data: nrBizneseve?.map((item) => item.nrbizneseve),
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
