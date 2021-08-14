import React, {useEffect} from "react";
import {connect} from "react-redux";
import "./index.scss";
import Chart from "@common/Chart";
import {actions} from "@sagas/industries/up";

const UP = ({
	fetchDiplomuarBrendaVitit,
	fetchMeshkujFemra,
	fetchShtetesia,
	fetchFakultetetBrendaKomunave,
	filters,
	diplomuarBrendaVitit,
	meshkujFemra,
	shtetesia,
}) => {
	useEffect(() => {
		fetchFakultetetBrendaKomunave(filters);
		fetchMeshkujFemra(filters);
		fetchDiplomuarBrendaVitit(filters);
		fetchShtetesia(filters);
	}, [
		filters,
		fetchFakultetetBrendaKomunave,
		fetchMeshkujFemra,
		fetchDiplomuarBrendaVitit,
		fetchShtetesia,
	]);
	return (
		<>
			<Chart
				title="Nr i studenteve te diplomuar"
				value={332}
				showYears
				type="bar"
				data={{
					labels: diplomuarBrendaVitit?.map((item) => item.viti).reverse(),
					datasets: [
						{
							label: "Pageviews",
							data: diplomuarBrendaVitit?.map((item) => item.tediplomuar).reverse(),
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
			{shtetesia && (
				<Chart
					title="Nr. total i studenteve"
					type="doughnut"
					value={3515}
					className="gjinia"
					data={{
						// labels: ["99.9% Kosovar", "0.1% Shqiptar"],
						labels: shtetesia?.map((item) => item.shtetesia),
						datasets: [
							{
								label: "Dataset 1",
								// data: ["3513", "2"],
								data: shtetesia?.map((item) => item.studentcount),
								backgroundColor: ["#005490", "#FCCB11", "#046FBC"],
								borderWidth: 0,
							},
						],
					}}
					options={{
						plugins: {
							legend: {
								display: true,
								position: "top",
							},
						},
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
};

const mapStateToProps = (state) => ({
	diplomuarBrendaVitit: state.app.industries.up.diplomuarBrendaVitit,
	meshkujFemra: state.app.industries.up.meshkujFemra,
	shtetesia: state.app.industries.up.shtetesia,
	fakultetetBrendaKomunave: state.app.industries.up.fakultetetBrendaKomunave,
});

export default connect(mapStateToProps, mapDispatchToProps)(UP);
