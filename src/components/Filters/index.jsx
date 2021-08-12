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

function Filters({vendbanimet, komunat, regjionet, industrite, fetch}) {
	const [selectedFilters, setSelectedFilter] = useState(filtersInitialState);

	const [isDisabled, setIsDisabled] = useState(disabledInitialState);

	useEffect(() => {
		fetch();
	}, [fetch]);

	return (
		<div className="fitlers_container">
			<Select
				value={selectedFilters?.industria}
				options={industrite}
				isSearchable
				isMulti={false}
				closeMenuOnSelect={false}
				onChange={(value) => setSelectedFilter((state) => ({...state, industria: value}))}
				menuIsOpen={true}
				placeholder="Industria"
			/>
			<Select
				value={selectedFilters?.regjionet}
				options={regjionet}
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
				menuIsOpen={true}
				placeholder="Regjioni"
			/>
			<Select
				value={selectedFilters?.komunat}
				options={komunat}
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
				menuIsOpen={true}
				placeholder="Komuna"
			/>
			<Select
				value={selectedFilters?.vendbanimet}
				options={vendbanimet}
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
				menuIsOpen={true}
				placeholder="Vendbanimi"
			/>
			<div className="buttons">
				<PrimaryButton name="Gjenero" />
				<CancelButton
					name="Fshij"
					onClick={() => {
						setSelectedFilter(filtersInitialState);
						setIsDisabled(disabledInitialState);
					}}
				/>
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
