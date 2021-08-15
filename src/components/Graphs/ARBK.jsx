import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/arbk";

function ARBK({
	fetchNrBizneseve,
	fetchNrBizneseveKomuna,
	fetchGjinia,
	fetchLlojiBiznesit,
	fetchLlojiBiznesitKomuna,
	fetchStatusiBizneseve,
	fetchSektoreBujqesi,
	nrBizneseve,
	nrBizneseveKomuna,
	gjinia,
	llojiBiznesit,
	llojiBiznesitKomuna,
	statusiBizneseve,
	sektoreBujqesi,
}) {
	useEffect(() => {
		fetchNrBizneseve();
		fetchNrBizneseveKomuna();
		fetchGjinia();
		fetchLlojiBiznesit();
		fetchLlojiBiznesitKomuna();
		fetchStatusiBizneseve();
		fetchSektoreBujqesi();
	}, [
		fetchNrBizneseve,
		fetchNrBizneseveKomuna,
		fetchGjinia,
		fetchLlojiBiznesit,
		fetchLlojiBiznesitKomuna,
		fetchStatusiBizneseve,
		fetchSektoreBujqesi,
	]);
	return <div></div>;
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
