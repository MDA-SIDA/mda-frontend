import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Select from "@common/Select";
import {actions} from "@sagas/filters";
import "./index.scss";

function Filters({vendbanimet, fetch}) {
	const [selectedVendbanimet, setSelectedVendbanimet] = useState([]);
	useEffect(() => {
		fetch();
	}, [fetch]);

	return (
		<div className="fitlers_container">
			<Select
				value="ARBK"
				options={[
					{value: "arbk", label: "ARBK"},
					{value: "facebook", label: "Facebook"},
					{value: "facebook", label: "Facebook"},
					{value: "facebook", label: "Facebook"},
				]}
				isSearchable
				isMulti
				closeMenuOnSelect={false}
				hideSelectedOptions={false}
				onChange={(value) => console.log(value)}
				menuIsOpen={true}
				placeholder="Kerko industrine"
			/>
			<Select
				value="ARBK"
				options={[
					{value: "arbk", label: "ARBK"},
					{value: "facebook", label: "Facebook"},
					{value: "facebook", label: "Facebook"},
					{value: "facebook", label: "Facebook"},
				]}
				isSearchable
				isMulti
				closeMenuOnSelect={false}
				hideSelectedOptions={false}
				onChange={(value) => console.log(value)}
				menuIsOpen={true}
				placeholder="Kerko regjionin"
			/>
			<Select
				value="ARBK"
				options={[
					{value: "arbk", label: "ARBK"},
					{value: "facebook", label: "Facebook"},
					{value: "facebook", label: "Facebook"},
					{value: "facebook", label: "Facebook"},
				]}
				isSearchable
				isMulti
				closeMenuOnSelect={false}
				hideSelectedOptions={false}
				onChange={(value) => console.log(value)}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
