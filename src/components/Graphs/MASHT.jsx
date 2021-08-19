import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/masht";
import Chart from "@common/Chart";
import {getDatasets} from "./utils";

function MASHT({
	fetchGjiniaEntiteti,
	fetchNrNxenesveShkolla,
	gjiniaEntiteti,
	nrNxenesveShkolla,
	filters,
}) {
	useEffect(() => {
		fetchGjiniaEntiteti(filters);
		fetchNrNxenesveShkolla(filters);
	}, [fetchGjiniaEntiteti, fetchNrNxenesveShkolla, filters]);

	const nrNxenesveShkollaDataSets = getDatasets({
		filters,
		items: nrNxenesveShkolla,
		singleItemLabel: "Numri i nxenesve",
		property: "numrinxenesve",
	});

	return (
		<>
			<Chart
				title="Nr i studenteve te diplomuar"
				value={332}
				showYears
				type="bar"
				data={{
					labels: nrNxenesveShkolla?.map((item) => item.shkollaemri),
					datasets: nrNxenesveShkollaDataSets,
				}}
			/>
			<Chart
				title="Gjinia ne baze te entiteteve"
				type="bar"
				data={{
					labels: gjiniaEntiteti?.map((item) => item.entiteti),
					datasets: [
						{
							label: "Meshkuj",
							data: gjiniaEntiteti?.map((item) => item.meshkuj),
							backgroundColor: "#00517D",
						},
						{
							label: "Femra",
							data: gjiniaEntiteti?.map((item) => item.femra),
							backgroundColor: "#DDB40A",
						},
					],
				}}
			/>
		</>
	);
}

const mapDispatchToProps = {
	fetchGjiniaEntiteti: actions.fetchGjiniaEntiteti,
	fetchNrNxenesveShkolla: actions.fetchNrNxenesveShkolla,
};
const mapStateToProps = (state) => ({
	gjiniaEntiteti: state.app.industries.masht.gjiniaEntiteti,
	nrNxenesveShkolla: state.app.industries.masht.nrNxenesveShkolla,
});

export default connect(mapStateToProps, mapDispatchToProps)(MASHT);
