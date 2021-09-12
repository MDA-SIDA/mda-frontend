import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/mpbzhr";
import Chart from "@common/Chart";
import {groupBy} from "lodash";
import Card from "@common/Card";
import {getDatasets, sortLabels} from "./utils";

function MPBZhR({
	filters,
	fetchMpbzhrMasaShumaPaguar,
	fetchMpbzhrVitiHa,
	fetchMpbzhrVitiKoshere,
	fetchMpbzhrVitiKrere,
	fetchMpbzhrVitiLiter,
	fetchMpbzhrVitiPulavojse,
	fetchMpbzhrVitiThelleza,
	mpbzhrMasaShumaPaguar,
	mpbzhrVitiHa,
	mpbzhrVitiKoshere,
	mpbzhrVitiKrere,
	mpbzhrVitiLiter,
	mpbzhrVitiPulavojse,
	mpbzhrVitiThelleza,

	fetchMpbzhrViti2019Ha,
	fetchMpbzhrViti2019Koshere,
	fetchMpbzhrViti2019Krere,
	fetchMpbzhrViti2019Liter,
	fetchMpbzhrViti2019Pulavojse,
	fetchMpbzhrViti2019Thelleza,
	mpbzhrViti2019Ha,
	mpbzhrViti2019Koshere,
	mpbzhrViti2019Krere,
	mpbzhrViti2019Liter,
	mpbzhrViti2019Pulavojse,
	mpbzhrViti2019Thelleza,
}) {
	useEffect(() => {
		fetchMpbzhrMasaShumaPaguar(filters);
		fetchMpbzhrVitiHa(filters);
		fetchMpbzhrVitiKoshere(filters);
		fetchMpbzhrVitiKrere(filters);
		fetchMpbzhrVitiLiter(filters);
		fetchMpbzhrVitiPulavojse(filters);
		fetchMpbzhrVitiThelleza(filters);
	}, [filters]);

	useEffect(() => {
		fetchMpbzhrViti2019Ha(filters);
		fetchMpbzhrViti2019Koshere(filters);
		fetchMpbzhrViti2019Krere(filters);
		fetchMpbzhrViti2019Liter(filters);
		fetchMpbzhrViti2019Pulavojse(filters);
		fetchMpbzhrViti2019Thelleza(filters);
	}, [filters]);

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

	return (
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
					<div className="ha-2019">
						<h1>HA - 2019</h1>
						{mpbzhrViti2019HaDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="ha-2019">
						<h1>Koshere - 2019</h1>
						{mpbzhrViti2019KoshereDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="ha-2019">
						<h1>Krere - 2019</h1>
						{mpbzhrViti2019KrereDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="ha-2019">
						<h1>Liter - 2019</h1>
						{mpbzhrViti2019LiterDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="ha-2019">
						<h1>Pulavojse - 2019</h1>
						{mpbzhrViti2019PulavojseDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="ha-2019">
						<h1>Thelleza - 2019</h1>
						{mpbzhrViti2019ThellezaDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
				</div>
			)}
		</>
	);
}

const mapDispatchToProps = {
	fetchMpbzhrMasaShumaPaguar: actions.fetchMpbzhrMasaShumaPaguar,
	fetchMpbzhrVitiHa: actions.fetchMpbzhrVitiHa,
	fetchMpbzhrVitiKoshere: actions.fetchMpbzhrVitiKoshere,
	fetchMpbzhrVitiKrere: actions.fetchMpbzhrVitiKrere,
	fetchMpbzhrVitiLiter: actions.fetchMpbzhrVitiLiter,
	fetchMpbzhrVitiPulavojse: actions.fetchMpbzhrVitiPulavojse,
	fetchMpbzhrVitiThelleza: actions.fetchMpbzhrVitiThelleza,

	fetchMpbzhrViti2019Ha: actions.fetchMpbzhrViti2019Ha,
	fetchMpbzhrViti2019Koshere: actions.fetchMpbzhrViti2019Koshere,
	fetchMpbzhrViti2019Krere: actions.fetchMpbzhrViti2019Krere,
	fetchMpbzhrViti2019Liter: actions.fetchMpbzhrViti2019Liter,
	fetchMpbzhrViti2019Pulavojse: actions.fetchMpbzhrViti2019Pulavojse,
	fetchMpbzhrViti2019Thelleza: actions.fetchMpbzhrViti2019Thelleza,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(MPBZhR);
