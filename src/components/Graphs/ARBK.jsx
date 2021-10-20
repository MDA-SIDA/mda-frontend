import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/arbk";
import Chart from "@common/Chart";
import PieChart from "@common/Chart/Pie";
import {groupBy} from "lodash";
import Loader from "@common/Loader";
import {useTranslation} from "react-i18next";
import {getDatasets, sortLabels, getStatusiBizneseveDataset, getGjiniaDataset} from "./utils";

function ARBK({
	fetchAll,
	arbkLlojiBiznesit,
	arbkViti,
	arbkSektori,
	arbkGjinia,
	arbkStatusi,
	arbkKomuna,
	filters,
	isLoading,
}) {
	useEffect(() => {
		fetchAll(filters);
	}, [fetchAll, filters]);

	const {t} = useTranslation();

	const arbkLlojiBiznesiDataSets = getDatasets({
		filters,
		items: arbkLlojiBiznesit,
		singleItemLabel: t("Numri i bizneseve"),
		property: "numribizneseve",
		filterBy: "llojibiznesit",
	});

	const arbkVitiDataSets = getDatasets({
		filters,
		items: arbkViti,
		singleItemLabel: t("Numri i bizneseve"),
		property: "numribizneseve",
		filterBy: "viti",
	});

	const arbkSektoriDataSets = getDatasets({
		filters,
		items: arbkSektori,
		singleItemLabel: t("Numri i bizneseve"),
		property: "numribizneseve",
		filterBy: "sektori",
	});

	const arbkKomunaDataSets = getDatasets({
		filters,
		items: arbkStatusi,
		singleItemLabel: t("Numri i bizneseve"),
		property: "numribizneseve",
		filterBy: "komunaemri",
	});

	const statusiBizneseveData = getStatusiBizneseveDataset({items: arbkStatusi, filters});
	const gjiniaData = getGjiniaDataset({items: arbkGjinia, filters});

	return (
		<>
			{isLoading && <Loader />}
			{!isLoading && (
				<>
					<Chart
						title="Numri i bizneseve sipas llojit"
						type="bar"
						data={{
							labels: sortLabels(
								Object.keys(groupBy(arbkLlojiBiznesit, "llojibiznesit")),
							),
							datasets: arbkLlojiBiznesiDataSets,
						}}
					/>
					<Chart
						title="Numri i bizneseve sipas vitit"
						type="line"
						data={{
							labels: sortLabels(Object.keys(groupBy(arbkViti, "viti"))),
							datasets: arbkVitiDataSets,
						}}
					/>
					<Chart
						title="Numri i bizneseve sipas sektoreve"
						type="bar"
						data={{
							labels: sortLabels(Object.keys(groupBy(arbkSektori, "sektori"))),
							datasets: arbkSektoriDataSets,
						}}
					/>
					<Chart
						title="Numri i bizneseve sipas komunave"
						type="bar"
						data={{
							labels: sortLabels(Object.keys(groupBy(arbkKomuna, "komunaemri"))),
							datasets: arbkKomunaDataSets,
						}}
					/>
					{gjiniaData?.map((item, index) => (
						<PieChart
							key={`${index} item=index`}
							title={`${t(`Numri i bizneseve sipas gjinise`)}${
								item.label ? `: ${t(item.label)}` : ""
							}`}
							data={{
								labels: ["F", "M"],
								datasets: [
									{
										label: item.label,
										data: [item.data?.totalfemra, item.data?.totalmeshkuj],
										backgroundColor: ["#00517D", "#FCCB11"],
									},
								],
							}}
						/>
					))}
					{statusiBizneseveData?.map((item, index) => (
						<PieChart
							key={`${index} item=index`}
							title={`${t(`Statusi i bizneseve`)}${
								item.label ? `: ${t(item.label)}` : ""
							}`}
							type="pie"
							data={{
								labels: ["Aktiv", "Shuar"],
								datasets: [
									{
										label: item.label,
										data: [item.data?.countaktiv, item.data?.countjoaktiv],
										backgroundColor: ["#00517D", "#FCCB11"],
									},
								],
							}}
						/>
					))}
				</>
			)}
		</>
	);
}

const mapDispatchToProps = {
	fetchAll: actions.fetchAll,
};
const mapStateToProps = (state) => ({
	arbkLlojiBiznesit: state.app.industries.arbk.arbkLlojiBiznesit,
	arbkViti: state.app.industries.arbk.arbkViti,
	arbkSektori: state.app.industries.arbk.arbkSektori,
	arbkGjinia: state.app.industries.arbk.arbkGjinia,
	arbkStatusi: state.app.industries.arbk.arbkStatusi,
	arbkKomuna: state.app.industries.arbk.arbkKomuna,
	isLoading: state.app.layout.index.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(ARBK);
