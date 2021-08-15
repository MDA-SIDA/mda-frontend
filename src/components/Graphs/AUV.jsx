import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/auv";

function AUV({fetchNrFermaveKomuna, nrFermaveNeKomuna}) {
	useEffect(() => {
		fetchNrFermaveKomuna();
	}, [fetchNrFermaveKomuna]);
	return <div></div>;
}

const mapDispatchToProps = {
	fetchNrFermaveKomuna: actions.fetchNrFermaveKomuna,
};
const mapStateToProps = (state) => ({
	nrFermaveNeKomuna: state.app.industries.auv.nrFermaveNeKomuna,
});

export default connect(mapStateToProps, mapDispatchToProps)(AUV);
