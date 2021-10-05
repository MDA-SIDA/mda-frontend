import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/auv";
import {groupBy} from "lodash";
import Chart from "@common/Chart";
import Loader from "@common/Loader";
import {getDatasets, sortLabels} from "./utils";

function AUV({fetchAll, isLoading, auvRajoniKomuna, auvKategoria, auvKomunaNrKafsheve, filters}) {
	useEffect(() => {
		fetchAll(filters);
	}, [fetchAll, filters]);

	const auvRajoniKomunaDataSets = getDatasets({
		filters,
		items: auvRajoniKomuna,
		singleItemLabel: "Numri fermave",
		property: "numrifermave",
		filterBy: "komunaemri",
	});

	// TODO
	const auvKategoriaDataSets = getDatasets({
		filters,
		items: auvKategoria,
		singleItemLabel: "Numri i fermave",
		property: "numrifermave",
		filterBy: "komunaemri",
	});

	const auvKomunaNrKafsheveDataSets = getDatasets({
		filters,
		items: auvKomunaNrKafsheve,
		singleItemLabel: "Numri i kafsheve",
		property: "numrikafsheve",
		filterBy: "komunaemri",
	});
	return (
		<>
			{isLoading && <Loader />}
			{!isLoading && (
				<>
					<Chart
						title="Numri i fermave"
						type="bar"
						data={{
							labels: sortLabels(Object.keys(groupBy(auvRajoniKomuna, "komunaemri"))),
							datasets: auvRajoniKomunaDataSets,
						}}
					/>
					<Chart
						title="Numri i kafsheve"
						type="bar"
						data={{
							labels: sortLabels(
								Object.keys(groupBy(auvKomunaNrKafsheve, "komunaemri")),
							),
							datasets: auvKomunaNrKafsheveDataSets,
						}}
					/>
				</>
			)}
		</>
	);
}

const mapDispatchToProps = {
	fetchAll: actions.fetchAll,
};
const mapStateToProps = (state) => ({
	auvRajoniKomuna: state.app.industries.auv.auvRajoniKomuna,
	auvKategoria: state.app.industries.auv.auvKategoria,
	auvKomunaNrKafsheve: state.app.industries.auv.auvKomunaNrKafsheve,
	isLoading: state.app.layout.index.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(AUV);
