import React, {useEffect} from "react";
import Chart from "@common/Chart";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/atk";
import {groupBy} from "lodash";
import {getDatasets} from "./utils";

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

	const sektoreAktivitetetDataSets = getDatasets({
		filters,
		items: sektoreAktivitetet,
		singleItemLabel: "Aktivitetet e sektoreve",
		property: "countaktiviteti",
		filterBy: "sektori",
	});

	const llojiKompaniseMesatarjaPuntoreveDataSets = getDatasets({
		filters,
		items: llojiKompaniseMesatarjaPuntoreve,
		singleItemLabel: "Aktivitetet e sektoreve",
		property: "mesatarjapunetoreve",
		filterBy: "llojikompanis",
	});

	return (
		<>
			<Chart
				title="Aktivitetet e sektoreve"
				type="bar"
				data={{
					labels: Object.values(groupBy(sektoreAktivitetet, "sektori")).map(
						(item) => item[0].pershkrimisektorit,
					),
					datasets: sektoreAktivitetetDataSets,
				}}
			/>
			<Chart
				title="Lloji i kompanise dhe mesatarja e puntoreve"
				type="bar"
				data={{
					labels: Object.keys(groupBy(llojiKompaniseMesatarjaPuntoreve, "llojikompanis")),
					datasets: llojiKompaniseMesatarjaPuntoreveDataSets,
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
