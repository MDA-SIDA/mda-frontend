import React from "react";
import {components} from "react-select";
import "./index.scss";

const Option = ({isCountry, isSelected, value, label, isMulti, ...props}) => (
	<div>
		<components.Option {...props}>
			<div className="option">
				<label>{label}</label>
				{isMulti && <input type="checkbox" checked={isSelected} onChange={() => {}} />}
			</div>
		</components.Option>
	</div>
);

export default Option;
