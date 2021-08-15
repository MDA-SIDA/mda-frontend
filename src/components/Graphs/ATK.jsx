import React, {useEffect} from "react";
import Chart from "@common/Chart";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/atk";

function ATK({
	fetchSektoreAktivitetet,
	fetchLlojiKompaniseMesatarjaPuntoreve,
	llojiKompaniseMesatarjaPuntoreve,
	sektoreAktivitetet,
}) {
	useEffect(() => {
		fetchSektoreAktivitetet();
		fetchLlojiKompaniseMesatarjaPuntoreve();
	}, [fetchSektoreAktivitetet, fetchLlojiKompaniseMesatarjaPuntoreve]);
	return (
		<>
			{/* TODO: set proper values to graph */}
			<Chart
				title="Nr. total i studenteve"
				value={12092}
				type="bar"
				data={{
					// labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
					labels: sektoreAktivitetet?.map((item) => item.sektori),
					datasets: [
						{
							label: "Meshkuj",
							// data: [50, 30, 100, 150, 10],
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
