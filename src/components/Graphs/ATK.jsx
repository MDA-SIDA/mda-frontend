import React, {useEffect} from "react";
import Chart from "@common/Chart";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/atk";

function ATK({
	fetchSektoreAktivitetet,
	fetchLlojiKompaniseMesatarjaPuntoreve,
	llojiKompaniseMesatarjaPuntoreve,
	sektoreAktivitetet,
	filters,
}) {
	useEffect(() => {
		fetchSektoreAktivitetet(filters);
		fetchLlojiKompaniseMesatarjaPuntoreve(filters);
	}, [fetchSektoreAktivitetet, fetchLlojiKompaniseMesatarjaPuntoreve, filters]);
	return (
		<>
			{/* TODO: set proper values to graph */}
			<Chart
				title="Nr. total i studenteve"
				value={12092}
				type="bar"
				data={{
					labels: sektoreAktivitetet?.map((item) => item.sektori),
					datasets: [
						{
							label: "Aktivitetet ne sektore",
							data: sektoreAktivitetet?.map((item) => item.countaktiviteti),
							backgroundColor: "#00517D",
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
			<Chart
				title="Nr. total i studenteve"
				value={12092}
				type="bar"
				data={{
					labels: llojiKompaniseMesatarjaPuntoreve?.map((item) => item.llojikompanis),
					datasets: [
						{
							label: "Aktivitetet ne sektore",
							data: llojiKompaniseMesatarjaPuntoreve?.map(
								(item) => item.mesatarjapunetoreve,
							),
							backgroundColor: "#00517D",
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
}

const mapDispatchToProps = {
	fetchSektoreAktivitetet: actions.fetchSektoreAktivitetet,
	fetchLlojiKompaniseMesatarjaPuntoreve: actions.fetchLlojiKompaniseMesatarjaPuntoreve,
};

const mapStateToProps = (state) => ({
	sektoreAktivitetet: state.app.industries.atk.sektoreAktivitetet,
	llojiKompaniseMesatarjaPuntoreve: state.app.industries.atk.llojiKompaniseMesatarjaPuntoreve,
});

export default connect(mapStateToProps, mapDispatchToProps)(ATK);
