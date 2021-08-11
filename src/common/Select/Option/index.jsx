import React from "react";
import {components} from "react-select";
import "./index.scss";

const Option = ({isCountry, isSelected, value, label, isMulti, ...props}) => (
	<div>
		<components.Option {...props}>
			{isMulti && <input type="checkbox" checked={isSelected} onChange={() => {}} />}
			<label>{label}</label>
		</components.Option>
	</div>
);

export default Option;
