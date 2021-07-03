import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Select from "@common/Select";
import {actions} from "@sagas/filters";
import "./index.scss";

function Filters({vendbanimet, komunat, regjionet, industrite, fetch}) {
	const [selectedVendbanimet, setSelectedVendbanimet] = useState([]);
	const [selectedKomunat, setSelectedKomunat] = useState([]);
	const [selectedRegjionet, setSelectedRegjionet] = useState([]);
	const [selectedIndustries, setSelectedIndustries] = useState([]);
	useEffect(() => {
		fetch();
	}, [fetch]);

	return (
		<div className="fitlers_container">
			<Select
				value={selectedIndustries}
				options={industrite}
				isSearchable
				isMulti
				closeMenuOnSelect={false}
				hideSelectedOptions={false}
				onChange={(value) => setSelectedIndustries(value)}
				menuIsOpen={true}
				placeholder="Kerko industrine"
			/>
			<Select
				value={selectedRegjionet}
				options={regjionet}
				isSearchable
				isMulti
				closeMenuOnSelect={false}
				hideSelectedOptions={false}
				onChange={(value) => setSelectedRegjionet(value)}
				menuIsOpen={true}
				placeholder="Kerko regjionin"
			/>
			<Select
				value={selectedKomunat}
				options={komunat}
				isSearchable
				isMulti
				closeMenuOnSelect={false}
				hideSelectedOptions={false}
				onChange={(value) => setSelectedKomunat(value)}
				menuIsOpen={true}
				placeholder="Kerko komunen"
			/>
			<Select
				value={selectedVendbanimet}
				options={vendbanimet}
				isSearchable
				isMulti
				closeMenuOnSelect={false}
				hideSelectedOptions={false}
				onChange={(value) => setSelectedVendbanimet(value)}
				menuIsOpen={true}
				placeholder="Kerko vendbanimin"
			/>
		</div>
	);
}

const mapDispatchToProps = {
	fetch: actions.fetch,
};

const mapStateToProps = (state) => ({
	vendbanimet: state.app.filters.index.vendbanimet,
	komunat: state.app.filters.index.komunat,
	regjionet: state.app.filters.index.regjionet,
	industrite: state.app.filters.index.industrite,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
