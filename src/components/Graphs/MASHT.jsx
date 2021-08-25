import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/masht";
import Chart from "@common/Chart";
import {groupBy} from "lodash";
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
		filterBy: "shkollaemri",
	});

	const gjiniaEntitetiFemraDataSets = getDatasets({
		filters,
		items: gjiniaEntiteti,
		singleItemLabel: "Numri i nxenesve femra ne baze te entiteteve",
		property: "femra",
		filterBy: "entiteti",
	});

	const gjiniaEntitetiMeshkujDataSets = getDatasets({
		filters,
		items: gjiniaEntiteti,
		singleItemLabel: "Numri i nxenesve meshkuj ne baze te entiteteve",
		property: "meshkuj",
		filterBy: "entiteti",
	});

	return (
		<>
			<Chart
				title="Nr i studenteve te diplomuar"
				type="bar"
				data={{
					labels: Object.keys(groupBy(nrNxenesveShkolla, "shkollaemri")),
					datasets: nrNxenesveShkollaDataSets,
				}}
			/>
			<Chart
				title="Numri i nxenesve femra ne baze te entiteteve"
				type="bar"
				data={{
					labels: Object.keys(groupBy(gjiniaEntiteti, "entiteti")),
					datasets: gjiniaEntitetiFemraDataSets,
				}}
			/>
			<Chart
				title="Numri i nxenesve meshkuj ne baze te entiteteve"
				type="bar"
				data={{
					labels: Object.keys(groupBy(gjiniaEntiteti, "entiteti")),
					datasets: gjiniaEntitetiMeshkujDataSets,
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
