import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/masht";
import Chart from "@common/Chart";
import {groupBy} from "lodash";
import {getDatasets, sortLabels} from "./utils";

function MASHT({
	fetchMashtShkolla,
	fetchMashtGjinia,
	fetchMashtGjenerata,
	fetchMashtEtnia,
	fetchMashtRajoniKomuna,
	fetchMashtKlasa,
	fetchMashtQendraBurimoreDemtimi,
	fetchMashtQendraBurimoreGjenerata,
	fetchShkollaRajoniKomuna,
	fetchGjiniaEtniteti,
	fetchNrNxenesveShkolla,
	mashtShkolla,
	mashtGjinia,
	mashtGjenerata,
	mashtEtnia,
	mashtRajoniKomuna,
	mashtKlasa,
	mashtQendraBurimoreDemtimi,
	mashtQendraBurimoreGjenerata,
	shkollaRajoniKomuna,
	gjiniaEtniteti,
	nrNxenesveShkolla,
	filters,
}) {
	useEffect(() => {
		fetchMashtShkolla(filters);
		fetchMashtGjinia(filters);
		fetchMashtGjenerata(filters);
		fetchMashtEtnia(filters);
		fetchMashtRajoniKomuna(filters);
		fetchMashtKlasa(filters);
		fetchMashtQendraBurimoreDemtimi(filters);
		fetchMashtQendraBurimoreGjenerata(filters);
		fetchShkollaRajoniKomuna(filters);
		fetchGjiniaEtniteti(filters);
		fetchNrNxenesveShkolla(filters);
	}, [filters]);

	// DONE: except percentage, nrNxenesveShkolla

	const mashtShkollaDataSets = getDatasets({
		filters,
		items: mashtShkolla,
		singleItemLabel: "Numri i nxenesve",
		property: "numrinxenesve",
		filterBy: "shkolla",
	});

	const mashtGjiniaDataSets = getDatasets({
		filters,
		items: mashtGjinia,
		singleItemLabel: "Numri i nxenesve",
		property: "numrinxenesve",
		filterBy: "gjinia",
	});

	const mashtGjenerataDataSets = getDatasets({
		filters,
		items: mashtGjenerata,
		singleItemLabel: "Numri i nxenesve",
		property: "numrinxenesve",
		filterBy: "gjenerata",
	});

	const mashtEtniaDataSets = getDatasets({
		filters,
		items: mashtEtnia,
		singleItemLabel: "Numri i nxenesve",
		property: "numrinxenesve",
		filterBy: "entiteti",
	});

	const mashtRajoniKomunaDataSets = getDatasets({
		filters,
		items: mashtRajoniKomuna,
		singleItemLabel: "Numri i nxenesve",
		property: "numrinxenesve",
	});

	const mashtKlasaDataSets = getDatasets({
		filters,
		items: mashtKlasa,
		singleItemLabel: "Numri i nxenesve",
		property: "numrinxenesve",
		filterBy: "klasa",
	});

	const mashtQendraBurimoreDemtimiDataSets = getDatasets({
		filters,
		items: mashtQendraBurimoreDemtimi,
		singleItemLabel: "Numri i nxenesve",
		property: "numrinxenesve",
		filterBy: "demtimi",
	});

	const mashtQendraBurimoreGjenerataDataSets = getDatasets({
		filters,
		items: mashtQendraBurimoreGjenerata,
		singleItemLabel: "Numri i nxenesve",
		property: "numrinxenesve",
		filterBy: "gjenerata",
	});

	const shkollaRajoniKomunaDataSets = getDatasets({
		filters,
		items: shkollaRajoniKomuna,
		singleItemLabel: "Numri i shkollave",
		property: "countshkolla",
	});
	const gjiniaEntitetiFemraDataSets = getDatasets({
		filters,
		items: gjiniaEtniteti,
		singleItemLabel: "Numri i nxenesve femra ne baze te etniteteve",
		property: "femra",
		filterBy: "entiteti",
	});

	const gjiniaEntitetiMeshkujDataSets = getDatasets({
		filters,
		items: gjiniaEtniteti,
		singleItemLabel: "Numri i nxenesve meshkuj ne baze te etniteteve",
		property: "meshkuj",
		filterBy: "entiteti",
	});
	return (
		<>
			<Chart
				title="Numri i nxenesve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mashtShkolla, "shkolla"))),
					datasets: mashtShkollaDataSets,
				}}
			/>
			<Chart
				title="Numri i nxenesve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mashtGjinia, "gjinia"))),
					datasets: mashtGjiniaDataSets,
				}}
			/>
			<Chart
				title="Numri i nxenesve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mashtGjenerata, "gjenerata"))),
					datasets: mashtGjenerataDataSets,
				}}
			/>
			<Chart
				title="Numri i nxenesve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mashtEtnia, "entiteti"))),
					datasets: mashtEtniaDataSets,
				}}
			/>
			<Chart
				title="Numri i nxenesve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mashtRajoniKomuna, "komunaemri"))),
					datasets: mashtRajoniKomunaDataSets,
				}}
			/>
			<Chart
				title="Numri i nxenesve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mashtKlasa, "klasa"))),
					datasets: mashtKlasaDataSets,
				}}
			/>
			<Chart
				title="Numri i nxenesve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mashtQendraBurimoreDemtimi, "demtimi"))),
					datasets: mashtQendraBurimoreDemtimiDataSets,
				}}
			/>
			<Chart
				title="Numri i nxenesve"
				type="bar"
				data={{
					labels: sortLabels(
						Object.keys(groupBy(mashtQendraBurimoreGjenerata, "gjenerata")),
					),
					datasets: mashtQendraBurimoreGjenerataDataSets,
				}}
			/>
			<Chart
				title="Numri i nxenesve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(shkollaRajoniKomuna, "komunaemri"))),
					datasets: shkollaRajoniKomunaDataSets,
				}}
			/>
			<Chart
				title="Numri i nxenesve femra ne baze te etniteteve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(gjiniaEtniteti, "entiteti"))),
					datasets: gjiniaEntitetiFemraDataSets,
				}}
			/>
			<Chart
				title="Numri i nxenesve meshkuj ne baze te etniteteve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(gjiniaEtniteti, "entiteti"))),
					datasets: gjiniaEntitetiMeshkujDataSets,
				}}
			/>
		</>
	);
}

const mapDispatchToProps = {
	fetchMashtShkolla: actions.fetchMashtShkolla,
	fetchMashtGjinia: actions.fetchMashtGjinia,
	fetchMashtGjenerata: actions.fetchMashtGjenerata,
	fetchMashtEtnia: actions.fetchMashtEtnia,
	fetchMashtRajoniKomuna: actions.fetchMashtRajoniKomuna,
	fetchMashtKlasa: actions.fetchMashtKlasa,
	fetchMashtQendraBurimoreDemtimi: actions.fetchMashtQendraBurimoreDemtimi,
	fetchMashtQendraBurimoreGjenerata: actions.fetchMashtQendraBurimoreGjenerata,
	fetchShkollaRajoniKomuna: actions.fetchShkollaRajoniKomuna,
	fetchGjiniaEtniteti: actions.fetchGjiniaEtniteti,
	fetchNrNxenesveShkolla: actions.fetchNrNxenesveShkolla,
};
const mapStateToProps = (state) => ({
	mashtShkolla: state.app.industries.masht.mashtShkolla,
	mashtGjinia: state.app.industries.masht.mashtGjinia,
	mashtGjenerata: state.app.industries.masht.mashtGjenerata,
	mashtEtnia: state.app.industries.masht.mashtEtnia,
	mashtRajoniKomuna: state.app.industries.masht.mashtRajoniKomuna,
	mashtKlasa: state.app.industries.masht.mashtKlasa,
	mashtQendraBurimoreDemtimi: state.app.industries.masht.mashtQendraBurimoreDemtimi,
	mashtQendraBurimoreGjenerata: state.app.industries.masht.mashtQendraBurimoreGjenerata,
	shkollaRajoniKomuna: state.app.industries.masht.shkollaRajoniKomuna,
	gjiniaEtniteti: state.app.industries.masht.gjiniaEtniteti,
	nrNxenesveShkolla: state.app.industries.masht.nrNxenesveShkolla,
});

export default connect(mapStateToProps, mapDispatchToProps)(MASHT);
