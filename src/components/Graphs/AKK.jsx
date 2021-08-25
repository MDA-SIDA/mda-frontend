import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/akk";
import {areArraysEmpty} from "./utils";

function AKK({fetchNrNdertesave, nrNdertesave, filters, changeIsEmpty}) {
	useEffect(() => {
		fetchNrNdertesave(filters);
		if (areArraysEmpty({arrays: [nrNdertesave]})) {
			changeIsEmpty(true);
		} else changeIsEmpty(false);
	}, [fetchNrNdertesave, filters]);

	return <div>{/* Graphs here */}</div>;
}

const mapDispatchToProps = {
	fetchNrNdertesave: actions.fetchNrNdertesave,
};
const mapStateToProps = (state) => ({
	nrNdertesave: state.app.industries.akk.nrNdertesave,
});

export default connect(mapStateToProps, mapDispatchToProps)(AKK);
