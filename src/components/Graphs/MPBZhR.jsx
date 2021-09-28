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

	fetchMpbzhrViti2019HaF,
	fetchMpbzhrViti2019KoshereF,
	fetchMpbzhrViti2019KrereF,
	fetchMpbzhrViti2019LiterF,
	fetchMpbzhrViti2019PulavojseF,
	fetchMpbzhrViti2019ThellezaF,
	mpbzhrViti2019HaF,
	mpbzhrViti2019KoshereF,
	mpbzhrViti2019KrereF,
	mpbzhrViti2019LiterF,
	mpbzhrViti2019PulavojseF,
	mpbzhrViti2019ThellezaF,

	fetchMpbzhrViti2019HaM,
	fetchMpbzhrViti2019KoshereM,
	fetchMpbzhrViti2019KrereM,
	fetchMpbzhrViti2019LiterM,
	fetchMpbzhrViti2019PulavojseM,
	fetchMpbzhrViti2019ThellezaM,
	mpbzhrViti2019HaM,
	mpbzhrViti2019KoshereM,
	mpbzhrViti2019KrereM,
	mpbzhrViti2019LiterM,
	mpbzhrViti2019PulavojseM,
	mpbzhrViti2019ThellezaM,
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

	useEffect(() => {
		fetchMpbzhrViti2019HaF(filters);
		fetchMpbzhrViti2019KoshereF(filters);
		fetchMpbzhrViti2019KrereF(filters);
		fetchMpbzhrViti2019LiterF(filters);
		fetchMpbzhrViti2019PulavojseF(filters);
		fetchMpbzhrViti2019ThellezaF(filters);
	}, [filters]);

	useEffect(() => {
		fetchMpbzhrViti2019HaM(filters);
		fetchMpbzhrViti2019KoshereM(filters);
		fetchMpbzhrViti2019KrereM(filters);
		fetchMpbzhrViti2019LiterM(filters);
		fetchMpbzhrViti2019PulavojseM(filters);
		fetchMpbzhrViti2019ThellezaM(filters);
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
					<div className="exclude_item">
						<h1>HA - 2019</h1>
						{mpbzhrViti2019HaDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="exclude_item">
						<h1>Koshere - 2019</h1>
						{mpbzhrViti2019KoshereDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="exclude_item">
						<h1>Krere - 2019</h1>
						{mpbzhrViti2019KrereDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="exclude_item">
						<h1>Liter - 2019</h1>
						{mpbzhrViti2019LiterDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="exclude_item">
						<h1>Pulavojse - 2019</h1>
						{mpbzhrViti2019PulavojseDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="exclude_item">
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
			{mpbzhrViti2019HaF && (
				<div className="exclude">
					<div className="exclude_item">
						<h1>HA - 2019 - F</h1>
						{mpbzhrViti2019HaFDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="exclude_item">
						<h1>Koshere - 2019 - F</h1>
						{mpbzhrViti2019KoshereFDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="exclude_item">
						<h1>Krere - 2019 - F</h1>
						{mpbzhrViti2019KrereFDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="exclude_item">
						<h1>Liter - 2019 - F</h1>
						{mpbzhrViti2019LiterFDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="exclude_item">
						<h1>Pulavojse - 2019 - F</h1>
						{mpbzhrViti2019PulavojseFDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="exclude_item">
						<h1>Thelleza - 2019 - F</h1>
						{mpbzhrViti2019ThellezaFDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
				</div>
			)}
			{mpbzhrViti2019HaM && (
				<div className="exclude">
					<div className="exclude_item">
						<h1>HA - 2019 - M</h1>
						{mpbzhrViti2019HaMDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="exclude_item">
						<h1>Koshere - 2019 - M</h1>
						{mpbzhrViti2019KoshereMDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="exclude_item">
						<h1>Krere - 2019 - M</h1>
						{mpbzhrViti2019KrereMDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="exclude_item">
						<h1>Liter - 2019 - M</h1>
						{mpbzhrViti2019LiterMDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="exclude_item">
						<h1>Pulavojse - 2019 - M</h1>
						{mpbzhrViti2019PulavojseMDataSets?.map((item, index) => (
							<Card
								style={{backgroundColor: item.backgroundColor}}
								number={new Intl.NumberFormat().format(Number(item.data[0]))}
								key={`${item.number} ${index}`}
							/>
						))}
					</div>
					<div className="exclude_item">
						<h1>Thelleza - 2019 - M</h1>
						{mpbzhrViti2019ThellezaMDataSets?.map((item, index) => (
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

	fetchMpbzhrViti2019HaF: actions.fetchMpbzhrViti2019HaF,
	fetchMpbzhrViti2019KoshereF: actions.fetchMpbzhrViti2019KoshereF,
	fetchMpbzhrViti2019KrereF: actions.fetchMpbzhrViti2019KrereF,
	fetchMpbzhrViti2019LiterF: actions.fetchMpbzhrViti2019LiterF,
	fetchMpbzhrViti2019PulavojseF: actions.fetchMpbzhrViti2019PulavojseF,
	fetchMpbzhrViti2019ThellezaF: actions.fetchMpbzhrViti2019ThellezaF,

	fetchMpbzhrViti2019HaM: actions.fetchMpbzhrViti2019HaM,
	fetchMpbzhrViti2019KoshereM: actions.fetchMpbzhrViti2019KoshereM,
	fetchMpbzhrViti2019KrereM: actions.fetchMpbzhrViti2019KrereM,
	fetchMpbzhrViti2019LiterM: actions.fetchMpbzhrViti2019LiterM,
	fetchMpbzhrViti2019PulavojseM: actions.fetchMpbzhrViti2019PulavojseM,
	fetchMpbzhrViti2019ThellezaM: actions.fetchMpbzhrViti2019ThellezaM,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(MPBZhR);
