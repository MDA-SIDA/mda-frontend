import React from "react";
import {components} from "react-select";

const Placeholder = ({label, isFocused}) =>
	components.Placeholder && (
		<>
			&nbsp;
			{!isFocused && <span className="label">{label}</span>}
		</>
	);

export default Placeholder;
