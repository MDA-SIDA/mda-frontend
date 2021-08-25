import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/arbk";
import Chart from "@common/Chart";
import {groupBy} from "lodash";
import ProgressBar from "@common/ProgressBar";
import {
	getDatasets,
	getGjiniaDataset,
	getGjiniaMesatarja,
	getStatusiBizneseveDataset,
} from "./utils";

function ARBK({
	fetchNrBizneseve,
	fetchNrBizneseveKomuna,
	fetchGjinia,
	fetchLlojiBiznesit,
	fetchLlojiBiznesitKomuna,
	fetchStatusiBizneseve,
	fetchSektoreBujqesi,
	nrBizneseve,
	gjinia,
	llojiBiznesit,
	statusiBizneseve,
	sektoreBujqesi,
	filters,
}) {
	useEffect(() => {
		fetchNrBizneseve(filters);
		fetchNrBizneseveKomuna(filters);
		fetchGjinia(filters);
		fetchLlojiBiznesit(filters);
		fetchLlojiBiznesitKomuna(filters);
		fetchStatusiBizneseve(filters);
		fetchSektoreBujqesi(filters);
	}, [
		fetchNrBizneseve,
		fetchNrBizneseveKomuna,
		fetchGjinia,
		fetchLlojiBiznesit,
		fetchLlojiBiznesitKomuna,
		fetchStatusiBizneseve,
		fetchSektoreBujqesi,
		filters,
	]);

	const nrBizneseveDataSets = getDatasets({
		filters,
		items: nrBizneseve,
		singleItemLabel: "Numri i bizneseve",
		property: "nrbizneseve",
		filterBy: "viti",
	});

	const sektoreBujqesiDataSets = getDatasets({
		filters,
		items: sektoreBujqesi,
		singleItemLabel: "Numri i sektoreve ne bujqesi",
		property: "nrpunetoreve",
		filterBy: "sektori",
	});

	const llojiBiznesitDataSets = getDatasets({
		filters,
		items: llojiBiznesit,
		singleItemLabel: "Numri i llojit te biznesit",
		property: "counter",
		filterBy: "llojibiznesit",
	});

	const gjiniaData = getGjiniaDataset({items: gjinia, filters});
	const statusiBizneseveData = getStatusiBizneseveDataset({items: statusiBizneseve, filters});

	return (
		<>
			<Chart
				title="Sektore Bujqesi"
				type="bar"
				data={{
					labels: Object.keys(groupBy(sektoreBujqesi, "sektori")),
					datasets: sektoreBujqesiDataSets,
				}}
			/>
			<Chart
				title="Numri Bizneseve"
				type="line"
				data={{
					labels: Object.keys(groupBy(nrBizneseve, "viti")),
					datasets: nrBizneseveDataSets,
				}}
			/>
			{statusiBizneseveData?.map((item, index) => (
				<Chart
					key={`${index} item=index`}
					title={`Statusi i biznesit ${item.label}`}
					type="pie"
					data={{
						labels: ["Aktiv", "Jo aktiv"],
						datasets: [
							{
								label: item.label,
								data: [item.data?.countaktiv, item.data?.countjoaktiv],
								backgroundColor: ["#005293", "#BABABA"],
							},
						],
					}}
					options={{
						responsive: true,
						plugins: {
							legend: {
								position: "bottom",
							},
						},
					}}
				/>
			))}
			<Chart
				title="Lloji Biznesit"
				type="bar"
				data={{
					labels: Object.keys(groupBy(llojiBiznesit, "llojibiznesit")),
					datasets: llojiBiznesitDataSets,
				}}
			/>
			<div className="card_container">
				<div
					className="chart_title"
					style={{paddingLeft: 0, paddingTop: 5, paddingBottom: 10}}
				>
					Total pronarë
				</div>
				{gjiniaData?.map((item, index) => (
					<div className="card_item" key={`${index} item`}>
						<div className="card_item_femra">
							<ProgressBar
								bgcolor="#ddb40a"
								completed={getGjiniaMesatarja(
									item?.data?.totalfemra,
									item?.data?.maxfemra,
								)?.toFixed()}
							/>
						</div>
						<div className="card_item_place">{item?.label}</div>
						<div className="card_item_meshkuj">
							<ProgressBar
								bgcolor="#00517D"
								completed={getGjiniaMesatarja(
									item?.data?.totalmeshkuj,
									item?.data?.maxmeshkuj,
								)?.toFixed()}
							/>
						</div>
					</div>
				))}
				<div className="legend">
					<div className="legend_item">
						<div className="legend_item__icon" style={{backgroundColor: "#ddb40a"}} />
						<div className="legend_item__label">Femra</div>
					</div>
					<div className="legend_item">
						<div className="legend_item__icon" style={{backgroundColor: "#00517D"}} />
						<div className="legend_item__label">Meshkuj</div>
					</div>
				</div>
			</div>
		</>
	);
}

const mapDispatchToProps = {
	fetchNrBizneseve: actions.fetchNrBizneseve,
	fetchNrBizneseveKomuna: actions.fetchNrBizneseveKomuna,
	fetchGjinia: actions.fetchGjinia,
	fetchLlojiBiznesit: actions.fetchLlojiBiznesit,
	fetchLlojiBiznesitKomuna: actions.fetchLlojiBiznesitKomuna,
	fetchStatusiBizneseve: actions.fetchStatusiBizneseve,
	fetchSektoreBujqesi: actions.fetchSektoreBujqesi,
};
const mapStateToProps = (state) => ({
	nrBizneseve: state.app.industries.arbk.nrBizneseve,
	nrBizneseveKomuna: state.app.industries.arbk.nrBizneseveKomuna,
	gjinia: state.app.industries.arbk.gjinia,
	llojiBiznesit: state.app.industries.arbk.llojiBiznesit,
	llojiBiznesitKomuna: state.app.industries.arbk.llojiBiznesitKomuna,
	statusiBizneseve: state.app.industries.arbk.statusiBizneseve,
	sektoreBujqesi: state.app.industries.arbk.sektoreBujqesi,
});

export default connect(mapStateToProps, mapDispatchToProps)(ARBK);
