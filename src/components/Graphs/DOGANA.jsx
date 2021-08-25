import React, {useEffect} from "react";
import {connect} from "react-redux";
import {areArraysEmpty} from "./utils";

function DOGANA({filters, changeIsEmpty}) {
	useEffect(() => {
		if (areArraysEmpty({arrays: []})) {
			changeIsEmpty(true);
		} else changeIsEmpty(false);
	}, [filters]);
	return <div></div>;
}

const mapDispatchToProps = {};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DOGANA);
