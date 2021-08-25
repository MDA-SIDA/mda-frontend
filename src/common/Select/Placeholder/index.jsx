import React from "react";
import {components} from "react-select";
import "./index.scss";

const Placeholder = ({label, isFocused, isOpenMenu}) =>
	components.Placeholder && (
		<>
			&nbsp;
			{(!isFocused || !isOpenMenu) && <span className="label">{label}</span>}
		</>
	);

export default Placeholder;
