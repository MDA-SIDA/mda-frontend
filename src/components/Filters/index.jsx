import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Select from "@common/Select";
import {actions} from "@sagas/filters";
import "./index.scss";
import PrimaryButton from "../PrimaryButton";
import CancelButton from "../CancelButton";

const filtersInitialState = {
	vendbanimet: [],
	komunat: [],
	regjionet: [],
	industria: null,
};

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
	getFilters,
	closeDrawer,
	fetchRegjionet,
	fetchIndustrite,
	fetchKomunat,
	fetchVendbanimet,
}) {
	const [selectedFilters, setSelectedFilter] = useState(filtersInitialState);

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
			<Select
				value={selectedFilters?.industria}
				options={industrite?.map((industria) => ({
					value: industria.industriaEmri,
					label: industria.industriaEmri,
				}))}
				isSearchable
				isMulti={false}
				closeMenuOnSelect={false}
				onChange={(value) => setSelectedFilter((state) => ({...state, industria: value}))}
				placeholder="Industria"
			/>
			<Select
				value={selectedFilters?.regjionet}
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
					} else setSelectedFilter((state) => ({...state, regjionet: value}));
				}}
				placeholder="Regjioni"
			/>
			<Select
				value={selectedFilters?.komunat}
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
					} else setSelectedFilter((state) => ({...state, komunat: value}));
				}}
				placeholder="Komuna"
			/>
			{!removeVendbanimiFilter && (
				<Select
					value={selectedFilters?.vendbanimet}
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
						} else setSelectedFilter((state) => ({...state, vendbanimet: value}));
					}}
					placeholder="Vendbanimi"
				/>
			)}
			<div className="buttons">
				<PrimaryButton
					name="Gjenero Statistikat"
					onClick={() => {
						getFilters(selectedFilters);
						closeDrawer();
					}}
				/>
				<CancelButton
					name="Fshij"
					onClick={() => {
						setSelectedFilter(filtersInitialState);
						setIsDisabled(disabledInitialState);
						getFilters(filtersInitialState);
						closeDrawer();
					}}
				/>
			</div>
		</div>
	);
}

const mapDispatchToProps = {
	fetchIndustrite: actions.fetchIndustrite,
	fetchRegjionet: actions.fetchRegjionet,
	fetchKomunat: actions.fetchKomunat,
	fetchVendbanimet: actions.fetchVendbanimet,
};

const mapStateToProps = (state) => ({
	vendbanimet: state.app.filters.index.vendbanimet,
	komunat: state.app.filters.index.komunat,
	regjionet: state.app.filters.index.regjionet,
	industrite: state.app.filters.index.industrite,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
