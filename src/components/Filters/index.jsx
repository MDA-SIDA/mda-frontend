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

	const removeVendbanimiFilter = [
		"UP",
		"DOGANA",
		"MPBZhR",
		"MF",
		"MASHT",
		"AKK",
		"ARBK",
	].includes(selectedFilters?.industria?.value);

	return (
		<div className="fitlers_container">
			<Select
				value={selectedIndustria}
				options={industrite?.map((industria) => ({
					value: industria.industriaemri,
					label: t(industria.industriaemri),
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
						options={regjionet?.map((regjioni) => {
							if (selectedFilters?.regjionet?.length >= 3) {
								const ids = selectedFilters.regjionet?.map((item) => item.value);
								if (!ids.includes(regjioni.regjioniid)) {
									return {
										value: regjioni.regjioniid,
										label: t(regjioni.regjioniemri),
										disable: true,
									};
								}
							}
							return {
								value: regjioni.regjioniid,
								label: t(regjioni.regjioniemri),
							};
						})}
						isSearchable
						isMulti
						closeMenuOnSelect={false}
						hideSelectedOptions={false}
						onChange={(value) => {
							if (error) setError(null);
							setSelectedRegjionet(value);
						}}
						placeholder={t("filters-region")}
						isOptionDisabled={(option) => option.disable}
						handleDisableOptionClick={() => setError(t("filters-info-message"))}
					/>
					{error && selectedFilters?.regjionet?.length >= 3 && (
						<div className="info">{t("filters-info-message")}</div>
					)}
					<Select
						value={selectedKomunat}
						options={komunat?.map((komuna) => {
							if (selectedFilters?.komunat?.length >= 3) {
								const ids = selectedFilters.komunat?.map((item) => item.value);
								if (!ids.includes(komuna.komunaid)) {
									return {
										value: komuna.komunaid,
										label: t(komuna.komunaemri),
										disable: true,
									};
								}
							}
							return {
								value: komuna.komunaid,
								label: t(komuna.komunaemri),
							};
						})}
						isSearchable
						isDisabled={isDisabled.komunat}
						isMulti
						closeMenuOnSelect={false}
						hideSelectedOptions={false}
						onChange={(value) => {
							if (error) setError(null);
							setSelectedKomunat(value);
						}}
						placeholder={t("filters-municipality")}
						isOptionDisabled={(option) => option.disable}
						handleDisableOptionClick={() => setError(t("filters-info-message"))}
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
						options={vendbanimet?.map((vendbanimi) => {
							if (selectedFilters?.vendbanimet?.length >= 3) {
								const ids = selectedFilters.vendbanimet?.map((item) => item.value);
								if (!ids.includes(vendbanimi.vendbanimiid)) {
									return {
										value: vendbanimi.vendbanimiid,
										label: vendbanimi.vendbanimiemri,
										disable: true,
									};
								}
							}
							return {
								value: vendbanimi.vendbanimiid,
								label: vendbanimi.vendbanimiemri,
							};
						})}
						isSearchable
						isMulti
						isDisabled={isDisabled.vendbanimet}
						closeMenuOnSelect={false}
						hideSelectedOptions={false}
						onChange={(value) => {
							if (error) setError(null);
							setSelectedVendbanimet(value);
						}}
						placeholder={t("filters-village")}
						isOptionDisabled={(option) => option.disable}
						handleDisableOptionClick={() => setError(t("filters-info-message"))}
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
