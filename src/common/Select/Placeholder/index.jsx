import React from "react";
import {components} from "react-select";
import "./index.scss";

const Placeholder = ({label, isFocused}) =>
	components.Placeholder && (
		<>
			&nbsp;
			{!isFocused && <span className="label">{label}</span>}
		</>
	);

export default Placeholder;
