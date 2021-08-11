import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Select from "@common/Select";
import {actions} from "@sagas/filters";
import "./index.scss";
import PrimaryButton from "../PrimaryButton";
import CancelButton from "../CancelButton";

function Filters({vendbanimet, komunat, regjionet, industrite, fetch}) {
	useEffect(() => {
		fetch();
	}, [fetch]);

	const [selectedFilters, setSelectedFilter] = useState({
		vendbanimet: [],
		komunat: [],
		regjionet: [],
		industria: null,
	});

	return (
		<div className="fitlers_container">
			<Select
				value={selectedFilters?.industria}
				options={industrite}
				isSearchable
				closeMenuOnSelect={false}
				hideSelectedOptions={false}
				onChange={(value) => setSelectedFilter((state) => ({...state, industria: value}))}
				menuIsOpen={true}
				placeholder="Industria"
			/>
			<Select
				value={selectedFilters?.regjionet}
				options={regjionet}
				isSearchable
				isMulti
				closeMenuOnSelect={false}
				hideSelectedOptions={false}
				onChange={(value) => setSelectedFilter((state) => ({...state, regjionet: value}))}
				menuIsOpen={true}
				placeholder="Regjioni"
			/>
			<Select
				value={selectedFilters?.komunat}
				options={komunat}
				isSearchable
				isMulti
				closeMenuOnSelect={false}
				hideSelectedOptions={false}
				onChange={(value) => setSelectedFilter((state) => ({...state, komunat: value}))}
				menuIsOpen={true}
				placeholder="Komuna"
			/>
			<Select
				value={selectedFilters?.vendbanimet}
				options={vendbanimet}
				isSearchable
				isMulti
				closeMenuOnSelect={false}
				hideSelectedOptions={false}
				onChange={(value) => setSelectedFilter((state) => ({...state, vendbanimet: value}))}
				menuIsOpen={true}
				placeholder="Vendbanimi"
			/>
			<div className="buttons">
				<PrimaryButton name="Gjenero Statistikat" />
				<CancelButton name="Anulo" />
			</div>
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
