import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/auv";
import {groupBy} from "lodash";
import Chart from "@common/Chart";
import Loader from "@common/Loader";
import Card from "@common/Card";
import {getDatasets, sortLabels, areArraysEmpty} from "./utils";

function AUV({fetchAll, isLoading, auvRajoniKomuna, auvKategoria, auvKomunaNrKafsheve, filters}) {
	useEffect(() => {
		fetchAll(filters);
	}, [fetchAll, filters]);

	const auvRajoniKomunaDataSets = getDatasets({
		filters,
		items: auvRajoniKomuna,
		singleItemLabel: "Numri fermave",
		property: "numrifermave",
	});

	const auvKategoriaDeleDataSets = getDatasets({
		filters,
		items: auvKategoria,
		singleItemLabel: "Numri i fermave",
		property: "dele",
	});
	const auvKategoriaDerraDataSets = getDatasets({
		filters,
		items: auvKategoria,
		singleItemLabel: "Numri i fermave",
		property: "derra",
	});
	const auvKategoriaDhiDataSets = getDatasets({
		filters,
		items: auvKategoria,
		singleItemLabel: "Numri i fermave",
		property: "dhi",
	});
	const auvKategoriaGjedheDataSets = getDatasets({
		filters,
		items: auvKategoria,
		singleItemLabel: "Numri i fermave",
		property: "gjedhe",
	});
	const auvKategoriaKuajDataSets = getDatasets({
		filters,
		items: auvKategoria,
		singleItemLabel: "Numri i fermave",
		property: "kuaj",
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
							labels:
								auvRajoniKomunaDataSets.length === 1 &&
								areArraysEmpty({
									arrays: [
										filters.komunat,
										filters.vendbanimet,
										filters.regjionet,
									],
								})
									? sortLabels(
											Object.keys(groupBy(auvRajoniKomuna, "regjioniemri")),
									  )
									: sortLabels(auvRajoniKomunaDataSets.map((item) => item.label)),
							datasets: auvRajoniKomunaDataSets,
						}}
					/>
					<Chart
						title="Numri i kafsheve"
						type="bar"
						data={{
							labels:
								auvKomunaNrKafsheveDataSets.length === 1 &&
								areArraysEmpty({
									arrays: [
										filters.komunat,
										filters.vendbanimet,
										filters.regjionet,
									],
								})
									? sortLabels(
											Object.keys(
												groupBy(auvKomunaNrKafsheve, "regjioniemri"),
											),
									  )
									: sortLabels(
											auvKomunaNrKafsheveDataSets.map((item) => item.label),
									  ),
							datasets: auvKomunaNrKafsheveDataSets,
						}}
					/>
					{auvKategoria && (
						<div className="exclude">
							<Item title="Dele" items={auvKategoriaDeleDataSets} />
							<Item title="Derra" items={auvKategoriaDerraDataSets} />
							<Item title="Dhi" items={auvKategoriaDhiDataSets} />
							<Item title="Gjedhe" items={auvKategoriaGjedheDataSets} />
							<Item title="Kuaj" items={auvKategoriaKuajDataSets} />
						</div>
					)}
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

const Item = ({title, items}) => (
	<div className="exclude_item">
		<h1>{title}</h1>
		{items?.map((item, index) => (
			<Card
				style={{backgroundColor: item.backgroundColor}}
				number={new Intl.NumberFormat().format(Number(item.data[0]))}
				key={`${item.number} ${index}`}
			/>
		))}
	</div>
);
