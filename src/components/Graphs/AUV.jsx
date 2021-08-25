import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/auv";
import {areArraysEmpty} from "./utils";

function AUV({fetchNrFermaveKomuna, nrFermaveNeKomuna, filters, changeIsEmpty}) {
	useEffect(() => {
		fetchNrFermaveKomuna(filters);
		if (areArraysEmpty({arrays: [nrFermaveNeKomuna]})) {
			changeIsEmpty(true);
		} else changeIsEmpty(false);
	}, [fetchNrFermaveKomuna, filters]);
	return <div></div>;
}

const mapDispatchToProps = {
	fetchNrFermaveKomuna: actions.fetchNrFermaveKomuna,
};
const mapStateToProps = (state) => ({
	nrFermaveNeKomuna: state.app.industries.auv.nrFermaveNeKomuna,
});

export default connect(mapStateToProps, mapDispatchToProps)(AUV);
