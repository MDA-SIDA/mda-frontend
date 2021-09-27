import React, {useEffect} from "react";
import Chart from "@common/Chart";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/atk";
import {groupBy} from "lodash";
import excl from "../../assets/img/exclamation.svg";
import {getDatasets} from "./utils";

function ATK({
	fetchAtkVitiObligimi,
	fetchAtkKomunaVitiObligimi,
	fetchAtkSektoriObligimi,
	fetchAtkAktivitetiObligimi,
	atkVitiObligimi,
	atkKomunaVitiObligimi,
	atkSektoriObligimi,
	atkAktivitetiObligimi,
	llojiKompaniseMesatarjaPuntoreve,
	sektoreAktivitetet,
	filters,
}) {
	useEffect(() => {
		fetchAtkVitiObligimi(filters);
		fetchAtkKomunaVitiObligimi(filters);
		fetchAtkSektoriObligimi(filters);
		fetchAtkAktivitetiObligimi(filters);
	}, [filters]);

	return (
		<>
			<div className="no-data">
				<p>
					Nuk ka asnje te dhene per t&apos;u shfaqur{" "}
					<span>
						<img src={excl} alt=""></img>
					</span>
				</p>
			</div>
		</>
	);
}

const mapDispatchToProps = {
	fetchAtkVitiObligimi: actions.fetchAtkVitiObligimi,
	fetchAtkKomunaVitiObligimi: actions.fetchAtkKomunaVitiObligimi,
	fetchAtkSektoriObligimi: actions.fetchAtkSektoriObligimi,
	fetchAtkAktivitetiObligimi: actions.fetchAtkAktivitetiObligimi,
};

const mapStateToProps = (state) => ({
	atkVitiObligimi: state.app.industries.atk.atkVitiObligimi,
	atkKomunaVitiObligimi: state.app.industries.atk.atkKomunaVitiObligimi,
	atkSektoriObligimi: state.app.industries.atk.atkSektoriObligimi,
	atkAktivitetiObligimi: state.app.industries.atk.atkAktivitetiObligimi,
});

export default connect(mapStateToProps, mapDispatchToProps)(ATK);
