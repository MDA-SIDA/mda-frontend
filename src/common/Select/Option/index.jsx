import React from "react";
import {components} from "react-select";
import "./index.scss";

const Option = ({isCountry, isSelected, value, label, ...props}) => (
	<div>
		<components.Option {...props}>
			<input type="checkbox" checked={isSelected} onChange={() => {}} />
			<label>{label}</label>
		</components.Option>
	</div>
);

export default Option;
