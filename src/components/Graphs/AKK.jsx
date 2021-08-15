import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/akk";

function AKK({fetchNrNdertesave, nrNdertesave, filters = {filters}}) {
	useEffect(() => {
		fetchNrNdertesave(filters);
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
