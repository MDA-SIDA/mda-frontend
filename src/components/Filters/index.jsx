import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Select from "@common/Select";
import {actions} from "@sagas/filters";
import "./index.scss";
import CancelButton from "../CancelButton";

const disabledInitialState = {
	vendbanimet: false,
	komunat: false,
	regjionet: false,
};

function Filters({
	vendbanimet,
	komunat,
	regjionet,
	industrite,
	closeDrawer,
	fetchRegjionet,
	fetchIndustrite,
	fetchKomunat,
	fetchVendbanimet,
	setSelectedIndustria,
	setSelectedRegjionet,
	setSelectedKomunat,
	setSelectedVendbanimet,
	selectedFilters,
}) {
	const {
		industria: selectedIndustria,
		regjionet: selectedRegjionet,
		komunat: selectedKomunat,
		vendbanimet: selectedVendbanimet,
	} = selectedFilters;

	const [isDisabled, setIsDisabled] = useState(disabledInitialState);

	useEffect(() => {
		fetchRegjionet();
		fetchIndustrite();
		fetchKomunat();
		fetchVendbanimet();
	}, [fetchRegjionet, fetchIndustrite, fetchKomunat, fetchVendbanimet]);

	const removeVendbanimiFilter = selectedFilters?.industria?.value === "UP";

	return (
		<div className="fitlers_container">
			<div className="buttons">
				<CancelButton
					name="Fshij filterat"
					onClick={() => {
						setSelectedIndustria(null);
						setSelectedRegjionet([]);
						setSelectedKomunat([]);
						setSelectedVendbanimet([]);
						setIsDisabled(disabledInitialState);
						closeDrawer();
					}}
				/>
			</div>
			<Select
				value={selectedIndustria}
				options={industrite?.map((industria) => ({
					value: industria.industriaEmri,
					label: industria.industriaEmri,
				}))}
				isSearchable
				isMulti={false}
				closeMenuOnSelect={false}
				onChange={(value) => setSelectedIndustria(value)}
				placeholder="Institucionet"
			/>
			<Select
				value={selectedRegjionet}
				options={regjionet?.map((regjioni) => ({
					value: regjioni.regjioniid,
					label: regjioni.regjioniemri,
				}))}
				isSearchable
				isMulti
				isDisabled={isDisabled.regjionet}
				closeMenuOnSelect={false}
				hideSelectedOptions={false}
				onChange={(value) => {
					if (selectedFilters?.regjionet?.length >= 3) {
						setIsDisabled((state) => ({...state, regjionet: true}));
					} else setSelectedRegjionet(value);
				}}
				placeholder="Regjioni"
			/>
			<Select
				value={selectedKomunat}
				options={komunat?.map((komuna) => ({
					value: komuna.komunaid,
					label: komuna.komunaemri,
				}))}
				isSearchable
				isDisabled={isDisabled.komunat}
				isMulti
				closeMenuOnSelect={false}
				hideSelectedOptions={false}
				onChange={(value) => {
					if (selectedFilters?.komunat?.length >= 3) {
						setIsDisabled((state) => ({...state, komunat: true}));
					} else setSelectedKomunat(value);
				}}
				placeholder="Komuna"
			/>
			{!removeVendbanimiFilter && (
				<Select
					value={selectedVendbanimet}
					options={vendbanimet?.map((vendbanimi) => ({
						value: vendbanimi.vendbanimiid,
						label: vendbanimi.vendbanimiemri,
					}))}
					isSearchable
					isMulti
					isDisabled={isDisabled.vendbanimet}
					closeMenuOnSelect={false}
					hideSelectedOptions={false}
					onChange={(value) => {
						if (selectedFilters?.vendbanimet?.length >= 3) {
							setIsDisabled((state) => ({...state, vendbanimet: true}));
						} else setSelectedVendbanimet(value);
					}}
					placeholder="Vendbanimi"
				/>
			)}
		</div>
	);
}

const mapDispatchToProps = {
	fetchIndustrite: actions.fetchIndustrite,
	fetchRegjionet: actions.fetchRegjionet,
	fetchKomunat: actions.fetchKomunat,
	fetchVendbanimet: actions.fetchVendbanimet,
	// selected
	setSelectedIndustria: actions.setSelectedIndustrite,
	setSelectedRegjionet: actions.setSelectedRegjionet,
	setSelectedKomunat: actions.setSelectedKomunat,
	setSelectedVendbanimet: actions.setSelectedVendbanimet,
};

const mapStateToProps = (state) => ({
	vendbanimet: state.app.filters.index.all.vendbanimet,
	komunat: state.app.filters.index.all.komunat,
	regjionet: state.app.filters.index.all.regjionet,
	industrite: state.app.filters.index.all.industrite,
	selectedFilters: state.app.filters.index.selected,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
