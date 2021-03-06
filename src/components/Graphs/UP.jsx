import React, {useEffect} from "react";
import {connect} from "react-redux";
import "./index.scss";
import Chart from "@common/Chart";
import PieChart from "@common/Chart/Pie";
import {actions} from "@sagas/industries/up";
import {groupBy} from "lodash";
import Loader from "@common/Loader";
import {useTranslation} from "react-i18next";
import {getDatasets, getGjiniaDataset, sortLabels} from "./utils";

const UP = ({
	fetchAll,
	isLoading,
	statusi,
	niveli,
	kombiNumriStudenteve,
	gjinia,
	fakultetiNumriStudenteve,
	vitiDiplomimit,
	komunaNumriStudenteve,
	diplomuar,
	fakultetiNotaMesatare,
	komunaNotaMesatare,
	kombiNotaMesatare,
	filters,
}) => {
	const {t} = useTranslation();

	useEffect(() => {
		fetchAll(filters);
	}, [fetchAll, filters]);

	// DONE: except percentage
	const statusiDataSets = getDatasets({
		filters,
		items: statusi,
		singleItemLabel: t("Numri i studenteve"),
		property: "numristudenteve",
		filterBy: "statusi",
	});

	// DONE: except percentage
	const niveliDataSets = getDatasets({
		filters,
		items: niveli,
		singleItemLabel: t("Numri i studenteve"),
		property: "numristudenteve",
		filterBy: "niveli",
	});

	// DONE: except percentage
	const kombiNumriStudenteveDataSets = getDatasets({
		filters,
		items: kombiNumriStudenteve,
		singleItemLabel: t("Numri i studenteve"),
		property: "numristudenteve",
		filterBy: "kombi",
	});

	// DONE: except percentage
	const gjiniaDataSets = getDatasets({
		filters,
		items: gjinia,
		singleItemLabel: t("Numri i studenteve"),
		property: "numristudenteve",
		filterBy: "gjinia",
	});

	// DONE: except percentage
	const fakultetiNumriStudenteveDataSets = getDatasets({
		filters,
		items: fakultetiNumriStudenteve,
		singleItemLabel: t("Numri i studenteve"),
		property: "numristudenteve",
		filterBy: "fakulteti",
	});

	// DONE: except percentage
	const vitiDiplomimitDataSets = getDatasets({
		filters,
		items: vitiDiplomimit,
		singleItemLabel: t("Numri i studenteve"),
		property: "studentetediplomuar",
		filterBy: "vitidiplomimit",
	});

	// DONE: except percentage
	const komunaNumriStudenteveDataSets = getDatasets({
		filters,
		items: komunaNumriStudenteve,
		singleItemLabel: t("Numri i studenteve"),
		property: "numristudenteve",
		filterBy: "regjioniemri",
	});

	// TODO: custom chart
	const diplomuarDataSets = getDatasets({
		filters,
		items: diplomuar,
		singleItemLabel: t("Numri i studenteve"),
		property: "studentetediplomuar",
		filterBy: "komunaemri",
	});

	const fakultetiNotaMesatareDataSets = getDatasets({
		filters,
		items: fakultetiNotaMesatare,
		singleItemLabel: t("Nota mesatare"),
		property: "notamesatare",
		filterBy: "regjioniemri",
		getPercentage: true,
	});

	// backend error: column "fakulteti" does not exist
	const komunaNotaMesatareDataSets = getDatasets({
		filters,
		items: komunaNotaMesatare,
		singleItemLabel: t("Nota mesatare"),
		property: "numristudenteve",
		filterBy: "komunaemri",
		getPercentage: true,
	});

	const kombiNotaMesatareDataSets = getDatasets({
		filters,
		items: kombiNotaMesatare,
		singleItemLabel: t("Nota mesatare"),
		property: "notamesatare",
		filterBy: "kombi",
		getPercentage: true,
	});

	const gjiniaData = getGjiniaDataset({items: gjinia, filters, property: "numristudenteve"});

	return (
		<>
			{isLoading && <Loader />}
			{!isLoading && (
				<>
					<Chart
						title="Numri i studenteve sipas statusit"
						type="bar"
						data={{
							labels: sortLabels(Object.keys(groupBy(statusi, "statusi"))),
							datasets: statusiDataSets,
						}}
					/>
					<Chart
						title="Numri i studenteve sipas nivelit te studimeve"
						type="bar"
						data={{
							labels: sortLabels(Object.keys(groupBy(niveli, "niveli"))),
							datasets: niveliDataSets,
						}}
					/>
					<Chart
						title="Numri i studenteve sipas kombit"
						type="bar"
						data={{
							labels: sortLabels(Object.keys(groupBy(kombiNumriStudenteve, "kombi"))),
							datasets: kombiNumriStudenteveDataSets,
						}}
					/>
					<Chart
						title="Numri i studenteve sipas fakulteteve"
						type="bar"
						data={{
							labels: sortLabels(
								Object.keys(groupBy(fakultetiNumriStudenteve, "fakulteti")),
							),
							datasets: fakultetiNumriStudenteveDataSets,
						}}
					/>
					<Chart
						title="Numri i studenteve sipas vitit te diplomimit"
						type="line"
						data={{
							labels: sortLabels(
								Object.keys(groupBy(vitiDiplomimit, "vitidiplomimit")),
							),
							datasets: vitiDiplomimitDataSets,
						}}
					/>
					<Chart
						title="Numri i studenteve sipas komunave"
						type="bar"
						data={{
							labels: sortLabels(
								Object.keys(groupBy(komunaNumriStudenteve, "komunaemri")),
							),
							datasets: komunaNumriStudenteveDataSets,
						}}
					/>
					<Chart
						title="Numri i studenteve te diplomuar sipas komunave"
						type="bar"
						data={{
							labels: sortLabels(Object.keys(groupBy(diplomuar, "komunaemri"))),
							datasets: diplomuarDataSets,
						}}
					/>
					<Chart
						title="Nota mesatare sipas regjioneve"
						type="bar"
						data={{
							labels: sortLabels(
								Object.keys(groupBy(fakultetiNotaMesatare, "regjioniemri")),
							),
							datasets: fakultetiNotaMesatareDataSets,
						}}
					/>
					{/* TODO: check */}
					{/* <Chart
				title="Nota mesatare sipas komunave"
				type="bar"
				data={{
					labels: sortLabels(Object.keys(groupBy(komunaNotaMesatare, "komunaemri"))),
					datasets: komunaNotaMesatareDataSets,
				}}
			/> */}
					<Chart
						title="Nota mesatare sipas kombit"
						type="bar"
						data={{
							labels: sortLabels(Object.keys(groupBy(kombiNotaMesatare, "kombi"))),
							datasets: kombiNotaMesatareDataSets,
						}}
					/>
					{gjiniaData?.map((item, index) => (
						<PieChart
							key={`${index} item=index`}
							title={`${t("Numri i studenteve sipas gjinise")}${
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
				</>
			)}
		</>
	);
};

const mapDispatchToProps = {
	fetchAll: actions.fetchAll,
};

const mapStateToProps = (state) => ({
	statusi: state.app.industries.up.statusi,
	niveli: state.app.industries.up.niveli,
	kombiNumriStudenteve: state.app.industries.up.kombiNumriStudenteve,
	gjinia: state.app.industries.up.gjinia,
	fakultetiNumriStudenteve: state.app.industries.up.fakultetiNumriStudenteve,
	vitiDiplomimit: state.app.industries.up.vitiDiplomimit,
	komunaNumriStudenteve: state.app.industries.up.komunaNumriStudenteve,
	diplomuar: state.app.industries.up.diplomuar,
	fakultetiNotaMesatare: state.app.industries.up.fakultetiNotaMesatare,
	komunaNotaMesatare: state.app.industries.up.komunaNotaMesatare,
	kombiNotaMesatare: state.app.industries.up.kombiNotaMesatare,
	isLoading: state.app.layout.index.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(UP);
