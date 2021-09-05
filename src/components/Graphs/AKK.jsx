import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/akk";

function AKK({
	fetchKategoria,
	fetchPronesia,
	fetchKlasa,
	fetchLlojiNdertesesSiperfaqja,
	fetchLlojiNdertesesNumri,
	fetchTipiPronesNumri,
	kategoria,
	pronesia,
	klasa,
	llojiNdertesesSiperfaqja,
	llojiNdertesesNumri,
	tipiPronesNumri,
	filters,
}) {
	useEffect(() => {
		fetchKategoria();
		fetchPronesia();
		fetchKlasa();
		fetchLlojiNdertesesSiperfaqja();
		fetchLlojiNdertesesNumri();
		fetchTipiPronesNumri();
	}, [filters]);

	return <div>{/* Graphs here */}</div>;
}

const mapDispatchToProps = {
	fetchKategoria: actions.fetchKategoria,
	fetchPronesia: actions.fetchPronesia,
	fetchKlasa: actions.fetchKlasa,
	fetchLlojiNdertesesSiperfaqja: actions.fetchLlojiNdertesesSiperfaqja,
	fetchLlojiNdertesesNumri: actions.fetchLlojiNdertesesNumri,
	fetchTipiPronesNumri: actions.fetchTipiPronesNumri,
};
const mapStateToProps = (state) => ({
	kategoria: state.app.industries.akk.kategoria,
	pronesia: state.app.industries.akk.pronesia,
	klasa: state.app.industries.akk.klasa,
	llojiNdertesesSiperfaqja: state.app.industries.akk.llojiNdertesesSiperfaqja,
	llojiNdertesesNumri: state.app.industries.akk.llojiNdertesesNumri,
	tipiPronesNumri: state.app.industries.akk.tipiPronesNumri,
});

export default connect(mapStateToProps, mapDispatchToProps)(AKK);
