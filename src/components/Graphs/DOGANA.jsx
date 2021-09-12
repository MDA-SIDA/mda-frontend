import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/dogana";

function DOGANA({filters, fetchDogana70}) {
	useEffect(() => {
		fetchDogana70(filters);
	}, [filters]);
	return <div></div>;
}

const mapDispatchToProps = {
	fetchDogana70: actions.fetchDogana70,
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DOGANA);
