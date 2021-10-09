import React from "react";
import {components} from "react-select";
import "./index.scss";

const Option = ({
	isCountry,
	isSelected,
	value,
	label,
	handleDisableOptionClick,
	isMulti,
	...props
}) => (
	<div>
		<components.Option {...{isSelected: !isMulti && isSelected, ...props}}>
			<div
				className="option"
				onClick={() => {
					if (props.isDisabled) {
						handleDisableOptionClick();
					}
				}}
			>
				<label>{label}</label>
				{isMulti && <input type="checkbox" checked={isSelected} onChange={() => {}} />}
			</div>
		</components.Option>
	</div>
);
export default Option;
