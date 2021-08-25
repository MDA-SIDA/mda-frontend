import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/mapl";
import {areArraysEmpty} from "./utils";

function MAPL({
	fetchAktivitetiKomunes,
	fetchAktivitetiTreguesit,
	aktivitetiKomunes,
	aktivitetiTreguesit,
	filters,
	changeIsEmpty,
}) {
	useEffect(() => {
		fetchAktivitetiKomunes(filters);
		fetchAktivitetiTreguesit(filters);
		if (areArraysEmpty({arrays: [aktivitetiKomunes, aktivitetiTreguesit]})) {
			changeIsEmpty(true);
		} else changeIsEmpty(false);
	}, [fetchAktivitetiKomunes, fetchAktivitetiTreguesit, filters]);
	return <div></div>;
}

const mapDispatchToProps = {
	fetchAktivitetiKomunes: actions.fetchAktivitetiKomunes,
	fetchAktivitetiTreguesit: actions.fetchAktivitetiTreguesit,
};
const mapStateToProps = (state) => ({
	aktivitetiKomunes: state.app.industries.mapl.aktivitetiKomunes,
	aktivitetiTreguesit: state.app.industries.mapl.aktivitetiTreguesit,
});

export default connect(mapStateToProps, mapDispatchToProps)(MAPL);
