import React, {useEffect} from "react";
import {connect} from "react-redux";
import "./index.scss";
import Chart from "@common/Chart";
import {actions} from "@sagas/industries";

const UP = ({
	fetchDiplomuarBrendaVitit,
	fetchMeshkujFemra,
	fetchShtetesia,
	fetchFakultetetBrendaKomunave,
	filters,
	diplomuarBrendaVitit,
	meshkujFemra,
	shtetesia,
	fakultetetBrendaKomunave,
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
		<div className="content_graphs">
			<div className="content_graphs__row">
				<Chart
					title="Numri i bizneseve nder vite"
					value={340}
					type="line"
					showYears
					data={{
						labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
						datasets: [
							{
								label: "Pageviews",
								data: [50, 30, 100, 150, 10],
								borderColor: "#005293",
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
								max: 200,
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
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	fetchDiplomuarBrendaVitit: actions.fetchDiplomuarBrendaVitit,
	fetchMeshkujFemra: actions.fetchMeshkujFemra,
	fetchShtetesia: actions.fetchShtetesia,
	fetchFakultetetBrendaKomunave: actions.fetchFakultetetBrendaKomunave,
};

const mapStateToProps = (state) => ({
	// UP
	diplomuarBrendaVitit: state.app.industries.index.diplomuarBrendaVitit,
	meshkujFemra: state.app.industries.index.meshkujFemra,
	shtetesia: state.app.industries.index.shtetesia,
	fakultetetBrendaKomunave: state.app.industries.index.fakultetetBrendaKomunave,
});

export default connect(mapStateToProps, mapDispatchToProps)(UP);
