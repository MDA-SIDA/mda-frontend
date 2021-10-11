import React, {useEffect} from "react";
import Chart from "@common/Chart";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/atk";
import {groupBy} from "lodash";
import Loader from "@common/Loader";

import {getDatasets, sortLabels} from "./utils";

function ATK({
	fetchAll,
	atkKomunaVitiObligimi,
	atkSektoriObligimi,
	atkAktivitetiObligimi,
	isLoading,
	filters,
}) {
	useEffect(() => {
		fetchAll(filters);
	}, [fetchAll, filters]);

	const atkAktivitetiObligimiDataSets = getDatasets({
		filters,
		items: atkAktivitetiObligimi,
		singleItemLabel: "Te ardhurat bruto",
		property: "brutoteardhurat",
		filterBy: "aktiviteti",
	});

	const atkKomunaVitiObligimiDataSets = getDatasets({
		filters,
		items: atkKomunaVitiObligimi,
		singleItemLabel: "Te ardhurat bruto",
		property: "brutoteardhurat",
		filterBy: "viti",
	});

	const atkSektoriObligimiDataSets = getDatasets({
		filters,
		items: atkSektoriObligimi,
		singleItemLabel: "Te ardhurat bruto",
		property: "brutoteardhurat",
		filterBy: "sektori",
	});

	return (
		<>
			{isLoading && <Loader />}
			{!isLoading && (
				<>
					<Chart
						title="Te ardhurat bruto sipas aktiviteteve"
						type="bar"
						data={{
							labels: sortLabels(
								Object.keys(groupBy(atkAktivitetiObligimi, "aktiviteti")),
							),
							datasets: atkAktivitetiObligimiDataSets,
						}}
					/>
					<Chart
						title="Te ardhurat bruto sipas vitit"
						type="bar"
						data={{
							labels: sortLabels(Object.keys(groupBy(atkKomunaVitiObligimi, "viti"))),
							datasets: atkKomunaVitiObligimiDataSets,
						}}
					/>
					<Chart
						title="Te ardhurat bruto sipas sektorit"
						type="bar"
						data={{
							labels: sortLabels(Object.keys(groupBy(atkSektoriObligimi, "sektori"))),
							datasets: atkSektoriObligimiDataSets,
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
	atkVitiObligimi: state.app.industries.atk.atkVitiObligimi,
	atkKomunaVitiObligimi: state.app.industries.atk.atkKomunaVitiObligimi,
	atkSektoriObligimi: state.app.industries.atk.atkSektoriObligimi,
	atkAktivitetiObligimi: state.app.industries.atk.atkAktivitetiObligimi,
	isLoading: state.app.layout.index.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(ATK);
