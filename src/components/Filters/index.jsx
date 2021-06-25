import React from "react";
import Select from "@common/Select";
import "./index.scss";

function Filters() {
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
				placeholder="Kerko vendbanimin"
			/>
		</div>
	);
}

export default Filters;
