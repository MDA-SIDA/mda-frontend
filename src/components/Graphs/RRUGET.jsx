import React from "react";
import {connect} from "react-redux";
import Chart from "@common/Chart";
import {groupBy} from "lodash";
import {useTranslation} from "react-i18next";
import Card from "@common/Card";
import {getDatasets, sortLabels, areArraysEmpty} from "./utils";

function RRUGET({filters, rruget18, rruget19, rruget20, rruget21}) {
	const {t} = useTranslation();

	const rruget18DataSets = getDatasets({
		filters,
		items: rruget18,
		singleItemLabel: t("Numri i segmenteve"),
		property: "gjatesiasegmenteve",
		filterBy: "komunaemri",
	});

	const rruget19DataSets = getDatasets({
		filters,
		items: rruget19,
		singleItemLabel: t("Gjatesia e segmenteve"),
		property: "gjatesiasegmenteve",
		filterBy: "komunaemri",
	});

	const rruget20DataSets = getDatasets({
		filters,
		items: rruget20,
		singleItemLabel: "Gjatesia e segmenteve",
		property: "gjatesiasegmenteve",
	});

	const rruget21DataSets = getDatasets({
		filters,
		items: rruget21,
		singleItemLabel: "Gjatesia e segmenteve",
		property: "gjatesiasegmenteve",
	});

	return (
		<>
			<Chart
				title="Rruget-Numri i segmenteve"
				type="bar"
				data={{
					labels:
						rruget18DataSets.length === 1 &&
						areArraysEmpty({
							arrays: [filters.komunat, filters.vendbanimet, filters.regjionet],
						})
							? sortLabels(Object.keys(groupBy(rruget18, "komunaemri")))
							: sortLabels(rruget18DataSets.map((item) => item.label)),
					datasets: rruget18DataSets,
				}}
			/>
			<Chart
				title="Rruget-Gjatesia e segmenteve"
				type="bar"
				data={{
					labels:
						rruget19DataSets.length === 1 &&
						areArraysEmpty({
							arrays: [filters.komunat, filters.vendbanimet, filters.regjionet],
						})
							? sortLabels(Object.keys(groupBy(rruget19, "komunaemri")))
							: sortLabels(rruget19DataSets.map((item) => item.label)),
					datasets: rruget19DataSets,
				}}
			/>
			{/* TODO: ask for approvment */}
			{/* <Item title={`${t("Gjatesia e segmenteve")}`} items={rruget20DataSets} />
			<Item title={`${t("Gjatesia e segmenteve")}`} items={rruget21DataSets} /> */}
		</>
	);
}

const mapDispatchToProps = {};
const mapStateToProps = (state) => ({
	rruget18: state.app.industries.rruget.rruget18,
	rruget19: state.app.industries.rruget.rruget19,
	rruget20: state.app.industries.rruget.rruget20,
	rruget21: state.app.industries.rruget.rruget21,
});

export default connect(mapStateToProps, mapDispatchToProps)(RRUGET);

const Item = ({title, items}) => (
	<div className="exclude_item">
		<h1>{title}</h1>
		{items?.map((item, index) => (
			<Card
				style={{backgroundColor: item?.backgroundColor}}
				number={new Intl.NumberFormat().format(Number(item?.data?.[0]))}
				key={`${item?.number} ${index}`}
			/>
		))}
	</div>
);
