import React, {useEffect} from "react";
import Chart from "@common/Chart";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/mf";
import {groupBy} from "lodash";
import Loader from "@common/Loader";
import {useTranslation} from "react-i18next";
import {getDatasets, sortLabels} from "./utils";

function MF({mf81, mf82, mf83, mf84, fetchAll, isLoading}) {
	const {t} = useTranslation();

	useEffect(() => {
		fetchAll();
	}, [fetchAll]);

	const mf81DataSets = getDatasets({
		items: mf81,
		singleItemLabel: t("Shpenzimet sipas programit"),
		property: "paga",
		filterBy: "organizata",
	});
	const mf82DataSets = getDatasets({
		items: mf82,
		singleItemLabel: t("Shpenzimet sipas programit"),
		property: "paga",
		filterBy: "organizata",
	});
	const mf83DataSets = getDatasets({
		items: mf83,
		singleItemLabel: t("Kapitalet"),
		property: "buxheti",
		filterBy: "organizata",
	});
	const mf84DataSets = getDatasets({
		items: mf84,
		singleItemLabel: t("Kapitalet"),
		property: "buxheti",
		filterBy: "organizata",
	});

	return (
		<>
			{isLoading && <Loader />}
			{!isLoading && (
				<>
					<Chart
						title="Shpenzimet sipas programit"
						type="bar"
						data={{
							labels: sortLabels(Object.keys(groupBy(mf81, "organizata"))),
							datasets: mf81DataSets,
						}}
					/>
					{/* TODO: uncomment */}
					{/* <Chart
				title="Shpenzimet sipas programeve"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mf82, "organizata"))),
					datasets: mf82DataSets,
				}}
			/> */}
					{/* <Chart
				title="Kapitalet Lokale"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(mf83, "organizata"))),
					datasets: mf83DataSets,
				}}
			/> */}
					<Chart
						title="Kapitale Qendrore"
						type="bar"
						data={{
							labels: sortLabels(Object.keys(groupBy(mf84, "organizata"))),
							datasets: mf84DataSets,
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
	mf81: state.app.industries.mf.mf81,
	mf82: state.app.industries.mf.mf82,
	mf83: state.app.industries.mf.mf83,
	mf84: state.app.industries.mf.mf84,
	isLoading: state.app.layout.index.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(MF);
