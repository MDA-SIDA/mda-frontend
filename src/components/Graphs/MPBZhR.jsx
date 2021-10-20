import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/mpbzhr";
import Chart from "@common/Chart";
import {groupBy} from "lodash";
import Card from "@common/Card";
import Loader from "@common/Loader";
import {useTranslation} from "react-i18next";
import {getDatasets, sortLabels} from "./utils";

function MPBZhR({
	filters,
	fetchAll,
	isLoading,
	mpbzhrMasaShumaPaguar,
	mpbzhrVitiHa,
	mpbzhrVitiKoshere,
	mpbzhrVitiKrere,
	mpbzhrVitiLiter,
	mpbzhrVitiPulavojse,
	mpbzhrVitiThelleza,

	mpbzhrViti2019Ha,
	mpbzhrViti2019Koshere,
	mpbzhrViti2019Krere,
	mpbzhrViti2019Liter,
	mpbzhrViti2019Pulavojse,
	mpbzhrViti2019Thelleza,

	mpbzhrViti2019HaF,
	mpbzhrViti2019KoshereF,
	mpbzhrViti2019KrereF,
	mpbzhrViti2019LiterF,
	mpbzhrViti2019PulavojseF,
	mpbzhrViti2019ThellezaF,

	mpbzhrViti2019HaM,
	mpbzhrViti2019KoshereM,
	mpbzhrViti2019KrereM,
	mpbzhrViti2019LiterM,
	mpbzhrViti2019PulavojseM,
	mpbzhrViti2019ThellezaM,
}) {
	useEffect(() => {
		fetchAll(filters);
	}, [fetchAll, filters]);

	const {t} = useTranslation();

	const mpbzhrMasaShumaPaguarDataSets = getDatasets({
		filters,
		items: mpbzhrMasaShumaPaguar,
		singleItemLabel: "Shuma",
		property: "shuma",
		filterBy: "masa",
	});

	const mpbzhrVitiHaDataSets = getDatasets({
		filters,
		items: mpbzhrVitiHa,
		singleItemLabel: "Numri",
		property: "ha",
		filterBy: "viti",
	});

	const mpbzhrVitiKoshereDataSets = getDatasets({
		filters,
		items: mpbzhrVitiKoshere,
		singleItemLabel: "Numri",
		property: "koshere",
		filterBy: "viti",
	});

	const mpbzhrVitiKrereDataSets = getDatasets({
		filters,
		items: mpbzhrVitiKrere,
		singleItemLabel: "Numri",
		property: "krere",
		filterBy: "viti",
	});

	const mpbzhrVitiLiterDataSets = getDatasets({
		filters,
		items: mpbzhrVitiLiter,
		singleItemLabel: "Numri",
		property: "liter",
		filterBy: "viti",
	});

	const mpbzhrVitiPulavojseDataSets = getDatasets({
		filters,
		items: mpbzhrVitiPulavojse,
		singleItemLabel: "Numri",
		property: "pulavojse",
		filterBy: "viti",
	});

	const mpbzhrVitiThellezaDataSets = getDatasets({
		filters,
		items: mpbzhrVitiThelleza,
		singleItemLabel: "Numri",
		property: "thelleza",
		filterBy: "viti",
	});

	// 2019
	const mpbzhrViti2019HaDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019Ha,
		singleItemLabel: "Numri",
		property: "ha",
		filterBy: "viti",
	});

	const mpbzhrViti2019KoshereDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019Koshere,
		singleItemLabel: "Numri",
		property: "koshere",
		filterBy: "viti",
	});

	const mpbzhrViti2019KrereDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019Krere,
		singleItemLabel: "Numri",
		property: "krere",
		filterBy: "viti",
	});

	const mpbzhrViti2019LiterDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019Liter,
		singleItemLabel: "Numri",
		property: "liter",
		filterBy: "viti",
	});

	const mpbzhrViti2019PulavojseDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019Pulavojse,
		singleItemLabel: "Numri",
		property: "pulavojse",
		filterBy: "viti",
	});

	const mpbzhrViti2019ThellezaDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019Thelleza,
		singleItemLabel: "Numri",
		property: "thelleza",
		filterBy: "viti",
	});

	// f
	const mpbzhrViti2019HaFDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019HaF,
		singleItemLabel: "Numri",
		property: "ha",
		filterBy: "viti",
	});

	const mpbzhrViti2019KoshereFDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019KoshereF,
		singleItemLabel: "Numri",
		property: "koshere",
		filterBy: "viti",
	});

	const mpbzhrViti2019KrereFDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019KrereF,
		singleItemLabel: "Numri",
		property: "krere",
		filterBy: "viti",
	});

	const mpbzhrViti2019LiterFDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019LiterF,
		singleItemLabel: "Numri",
		property: "liter",
		filterBy: "viti",
	});

	const mpbzhrViti2019PulavojseFDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019PulavojseF,
		singleItemLabel: "Numri",
		property: "pulavojse",
		filterBy: "viti",
	});

	const mpbzhrViti2019ThellezaFDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019ThellezaF,
		singleItemLabel: "Numri",
		property: "thelleza",
		filterBy: "viti",
	});

	// m
	const mpbzhrViti2019HaMDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019HaM,
		singleItemLabel: "Numri",
		property: "ha",
		filterBy: "viti",
	});

	const mpbzhrViti2019KoshereMDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019KoshereM,
		singleItemLabel: "Numri",
		property: "koshere",
		filterBy: "viti",
	});

	const mpbzhrViti2019KrereMDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019KrereM,
		singleItemLabel: "Numri",
		property: "krere",
		filterBy: "viti",
	});

	const mpbzhrViti2019LiterMDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019LiterM,
		singleItemLabel: "Numri",
		property: "liter",
		filterBy: "viti",
	});

	const mpbzhrViti2019PulavojseMDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019PulavojseM,
		singleItemLabel: "Numri",
		property: "pulavojse",
		filterBy: "viti",
	});

	const mpbzhrViti2019ThellezaMDataSets = getDatasets({
		filters,
		items: mpbzhrViti2019ThellezaM,
		singleItemLabel: "Numri",
		property: "thelleza",
		filterBy: "viti",
	});

	return (
		<>
			{isLoading && <Loader />}
			{!isLoading && (
				<>
					<Chart
						title="Shuma e paguar sipas mases"
						type="bar"
						data={{
							labels: sortLabels(Object.keys(groupBy(mpbzhrMasaShumaPaguar, "masa"))),
							datasets: mpbzhrMasaShumaPaguarDataSets,
						}}
					/>
					<Chart
						title="Ha"
						type="line"
						data={{
							labels: sortLabels(Object.keys(groupBy(mpbzhrVitiHa, "viti"))),
							datasets: mpbzhrVitiHaDataSets,
						}}
					/>
					<Chart
						title="Koshere"
						type="line"
						data={{
							labels: sortLabels(Object.keys(groupBy(mpbzhrVitiKoshere, "viti"))),
							datasets: mpbzhrVitiKoshereDataSets,
						}}
					/>
					<Chart
						title="Krere"
						type="line"
						data={{
							labels: sortLabels(Object.keys(groupBy(mpbzhrVitiKrere, "viti"))),
							datasets: mpbzhrVitiKrereDataSets,
						}}
					/>
					<Chart
						title="Liter"
						type="line"
						data={{
							labels: sortLabels(Object.keys(groupBy(mpbzhrVitiLiter, "viti"))),
							datasets: mpbzhrVitiLiterDataSets,
						}}
					/>
					<Chart
						title="Pulavojse"
						type="line"
						data={{
							labels: sortLabels(Object.keys(groupBy(mpbzhrVitiPulavojse, "viti"))),
							datasets: mpbzhrVitiPulavojseDataSets,
						}}
					/>
					<Chart
						title="Thelleza"
						type="line"
						data={{
							labels: sortLabels(Object.keys(groupBy(mpbzhrVitiThelleza, "viti"))),
							datasets: mpbzhrVitiThellezaDataSets,
						}}
					/>
					{mpbzhrViti2019Ha && (
						<div className="exclude">
							<Item title={`${t("Ha")} - 2019`} items={mpbzhrViti2019HaDataSets} />
							<Item
								title={`${t("Koshere")} - 2019`}
								items={mpbzhrViti2019KoshereDataSets}
							/>
							<Item
								title={`${t("Krere")} - 2019`}
								items={mpbzhrViti2019KrereDataSets}
							/>
							<Item
								title={`${t("Liter")} - 2019`}
								items={mpbzhrViti2019LiterDataSets}
							/>
							<Item
								title={`${t("Pulavojse")} - 2019`}
								items={mpbzhrViti2019PulavojseDataSets}
							/>
							<Item
								title={`${t("Thelleza")} - 2019`}
								items={mpbzhrViti2019ThellezaDataSets}
							/>
						</div>
					)}
					{mpbzhrViti2019HaF && (
						<div className="exclude">
							<Item
								title={`${t("Ha")} - 2019 - ${t("F")}`}
								items={mpbzhrViti2019HaFDataSets}
							/>
							<Item
								title={`${t("Koshere")} - 2019 - ${t("F")}`}
								items={mpbzhrViti2019KoshereFDataSets}
							/>
							<Item
								title={`${t("Krere")} - 2019 - ${t("F")}`}
								items={mpbzhrViti2019KrereFDataSets}
							/>
							<Item
								title={`${t("Liter")} - 2019 - ${t("F")}`}
								items={mpbzhrViti2019LiterFDataSets}
							/>
							<Item
								title={`${t("Pulavojse")} - 2019 - ${t("F")}`}
								items={mpbzhrViti2019PulavojseFDataSets}
							/>
							<Item
								title={`${t("Thelleza")} - 2019 - ${t("F")}`}
								items={mpbzhrViti2019ThellezaFDataSets}
							/>
						</div>
					)}
					{mpbzhrViti2019HaM && (
						<div className="exclude">
							<Item
								title={`${t("Ha")} - 2019 - ${t("M")}`}
								items={mpbzhrViti2019HaMDataSets}
							/>
							<Item
								title={`${t("Koshere")} - 2019 - ${t("M")}`}
								items={mpbzhrViti2019KoshereMDataSets}
							/>
							<Item
								title={`${t("Krere")} - 2019 - ${t("M")}`}
								items={mpbzhrViti2019KrereMDataSets}
							/>
							<Item
								title={`${t("Liter")} - 2019 - ${t("M")}`}
								items={mpbzhrViti2019LiterMDataSets}
							/>
							<Item
								title={`${t("Pulavojse")} - 2019 - ${t("M")}`}
								items={mpbzhrViti2019PulavojseMDataSets}
							/>
							<Item
								title={`${t("Thelleza")} - 2019 - ${t("M")}`}
								items={mpbzhrViti2019ThellezaMDataSets}
							/>
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
	mpbzhrMasaShumaPaguar: state.app.industries.mpbzhr.mpbzhrMasaShumaPaguar,
	mpbzhrVitiHa: state.app.industries.mpbzhr.mpbzhrVitiHa,
	mpbzhrVitiKoshere: state.app.industries.mpbzhr.mpbzhrVitiKoshere,
	mpbzhrVitiKrere: state.app.industries.mpbzhr.mpbzhrVitiKrere,
	mpbzhrVitiLiter: state.app.industries.mpbzhr.mpbzhrVitiLiter,
	mpbzhrVitiPulavojse: state.app.industries.mpbzhr.mpbzhrVitiPulavojse,
	mpbzhrVitiThelleza: state.app.industries.mpbzhr.mpbzhrVitiThelleza,

	mpbzhrViti2019Ha: state.app.industries.mpbzhr.mpbzhrViti2019Ha,
	mpbzhrViti2019Koshere: state.app.industries.mpbzhr.mpbzhrViti2019Koshere,
	mpbzhrViti2019Krere: state.app.industries.mpbzhr.mpbzhrViti2019Krere,
	mpbzhrViti2019Liter: state.app.industries.mpbzhr.mpbzhrViti2019Liter,
	mpbzhrViti2019Pulavojse: state.app.industries.mpbzhr.mpbzhrViti2019Pulavojse,
	mpbzhrViti2019Thelleza: state.app.industries.mpbzhr.mpbzhrViti2019Thelleza,

	mpbzhrViti2019HaF: state.app.industries.mpbzhr.mpbzhrViti2019HaF,
	mpbzhrViti2019KoshereF: state.app.industries.mpbzhr.mpbzhrViti2019KoshereF,
	mpbzhrViti2019KrereF: state.app.industries.mpbzhr.mpbzhrViti2019KrereF,
	mpbzhrViti2019LiterF: state.app.industries.mpbzhr.mpbzhrViti2019LiterF,
	mpbzhrViti2019PulavojseF: state.app.industries.mpbzhr.mpbzhrViti2019PulavojseF,
	mpbzhrViti2019ThellezaF: state.app.industries.mpbzhr.mpbzhrViti2019ThellezaF,

	mpbzhrViti2019HaM: state.app.industries.mpbzhr.mpbzhrViti2019HaM,
	mpbzhrViti2019KoshereM: state.app.industries.mpbzhr.mpbzhrViti2019KoshereM,
	mpbzhrViti2019KrereM: state.app.industries.mpbzhr.mpbzhrViti2019KrereM,
	mpbzhrViti2019LiterM: state.app.industries.mpbzhr.mpbzhrViti2019LiterM,
	mpbzhrViti2019PulavojseM: state.app.industries.mpbzhr.mpbzhrViti2019PulavojseM,
	mpbzhrViti2019ThellezaM: state.app.industries.mpbzhr.mpbzhrViti2019ThellezaM,
	isLoading: state.app.layout.index.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(MPBZhR);

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
