import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/masht";

function MASHT({fetchGjiniaEntiteti, fetchNrNxenesveShkolla, gjiniaEntiteti, nrNxenesveShkolla}) {
	useEffect(() => {
		fetchGjiniaEntiteti();
		fetchNrNxenesveShkolla();
	}, [fetchGjiniaEntiteti, fetchNrNxenesveShkolla]);
	return <div></div>;
}

const mapDispatchToProps = {
	fetchGjiniaEntiteti: actions.fetchGjiniaEntiteti,
	fetchNrNxenesveShkolla: actions.fetchNrNxenesveShkolla,
};
const mapStateToProps = (state) => ({
	gjiniaEntiteti: state.app.industries.masht.gjiniaEntiteti,
	nrNxenesveShkolla: state.app.industries.masht.nrNxenesveShkolla,
});

export default connect(mapStateToProps, mapDispatchToProps)(MASHT);
