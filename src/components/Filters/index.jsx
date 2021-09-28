import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Select from "@common/Select";
import {actions} from "@sagas/filters";
import "./index.scss";
import CancelButton from "@common/CancelButton";
import {useTranslation} from "react-i18next";

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
	vitet,
	regime,
	closeDrawer,
	fetchRegjionet,
	fetchIndustrite,
	fetchKomunat,
	fetchVendbanimet,
	fetchRegime,
	fetchVitet,
	setSelectedIndustria,
	setSelectedRegjionet,
	setSelectedKomunat,
	setSelectedVendbanimet,
	selectedFilters,
	setSelectedVitet,
	setSelectedRegime,
}) {
	const {
		industria: selectedIndustria,
		regjionet: selectedRegjionet,
		komunat: selectedKomunat,
		vendbanimet: selectedVendbanimet,
		selectedVitet,
		selectedRegime,
	} = selectedFilters;

	const [isDisabled, setIsDisabled] = useState(disabledInitialState);
	const [error, setError] = useState(null);
	const {t} = useTranslation();

	const isDogana = selectedFilters?.industria?.value === "DOGANA";
	const isMF = selectedFilters?.industria?.value === "MF";

	useEffect(() => {
		fetchIndustrite();
		if (isDogana) {
			fetchVitet();
			fetchRegime();
		} else {
			fetchKomunat();
			fetchVendbanimet();
			fetchRegjionet();
		}
	}, [
		fetchRegjionet,
		fetchIndustrite,
		fetchKomunat,
		fetchVendbanimet,
		fetchVitet,
		fetchRegime,
		isDogana,
	]);

	const removeVendbanimiFilter = ["UP", "DOGANA", "MPBZhR", "MF"].includes(
		selectedFilters?.industria?.value,
	);

	return (
		<div className="fitlers_container">
			<Select
				value={selectedIndustria}
				options={industrite?.map((industria) => ({
					value: industria.industriaemri,
					label: industria.pershkrimi,
				}))}
				isSearchable
				isMulti={false}
				closeMenuOnSelect={false}
				onChange={(value) => setSelectedIndustria(value)}
				placeholder={t("filters-institutions")}
			/>
			{!isDogana && !isMF && (
				<>
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
								setError(t("filters-info-message"));
							} else {
								setError(null);
								setSelectedRegjionet(value);
							}
						}}
						placeholder={t("filters-region")}
					/>
					{error && selectedFilters?.regjionet?.length >= 3 && (
						<div className="info">{t("filters-info-message")}</div>
					)}
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
								setError(t("filters-info-message"));
							} else {
								setSelectedKomunat(value);
								setError(null);
							}
						}}
						placeholder={t("filters-municipality")}
					/>
					{error && selectedFilters?.komunat?.length >= 3 && (
						<div className="info">{t("filters-info-message")}</div>
					)}
				</>
			)}
			{!removeVendbanimiFilter && (
				<>
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
								setError(t("filters-info-message"));
							} else {
								setSelectedVendbanimet(value);
								setError(null);
							}
						}}
						placeholder={t("filters-village")}
					/>
					{error && selectedFilters?.vendbanimet?.length >= 3 && (
						<div className="info">{t("filters-info-message")}</div>
					)}
				</>
			)}
			{isDogana && (
				<>
					<Select
						value={selectedVitet}
						options={vitet}
						isSearchable
						isMulti
						closeMenuOnSelect={false}
						hideSelectedOptions={false}
						onChange={(value) => {
							setSelectedVitet(value);
						}}
						placeholder={t("filters-year")}
					/>
					<Select
						value={selectedRegime}
						options={regime?.map((regime) => ({
							value: regime?.regime,
							label: regime?.regime,
						}))}
						isSearchable
						isMulti
						closeMenuOnSelect={false}
						hideSelectedOptions={false}
						onChange={(value) => {
							setSelectedRegime(value);
						}}
						placeholder="Tariff code regime"
					/>
				</>
			)}
			<div className="buttons">
				<CancelButton
					name={t("filters-clear")}
					onClick={() => {
						setSelectedIndustria(null);
						setSelectedRegjionet([]);
						setSelectedKomunat([]);
						setSelectedVendbanimet([]);
						setSelectedVitet([]);
						setSelectedRegime([]);
						setIsDisabled(disabledInitialState);
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
	fetchVitet: actions.fetchVitet,
	fetchRegime: actions.fetchRegime,
	// selected
	setSelectedIndustria: actions.setSelectedIndustrite,
	setSelectedRegjionet: actions.setSelectedRegjionet,
	setSelectedKomunat: actions.setSelectedKomunat,
	setSelectedVendbanimet: actions.setSelectedVendbanimet,
	setSelectedVitet: actions.setSelectedVitet,
	setSelectedRegime: actions.setSelectedRegime,
};

const mapStateToProps = (state) => ({
	vendbanimet: state.app.filters.index.filtered.vendbanimet,
	komunat: state.app.filters.index.filtered.komunat,
	regjionet: state.app.filters.index.filtered.regjionet,
	industrite: state.app.filters.index.all.industrite,
	vitet: state.app.filters.index.all.vitet,
	regime: state.app.filters.index.all.regime,
	selectedFilters: state.app.filters.index.selected,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
