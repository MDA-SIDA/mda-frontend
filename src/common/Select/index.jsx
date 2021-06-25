import React from "react";
import ReactSelect from "react-select";
import Placeholder from "@common/Select/Placeholder";
import Option from "@common/Select/Option";
import ValueContainer from "@common/Select/ValueContainer";
import "./index.scss";

const styles = {
	container: (base) => ({
		...base,
		height: "100%",
	}),
	control: (base) => ({
		...base,
		width: 220,
		fontSize: 13,
		zIndex: 100,
		color: "#005293",
		marginRight: 0,
		border: 0,
		boxShadow: 0,
		"&:hover": {
			border: 0,
		},
	}),
	menu: (base) => ({
		...base,
		zIndex: 100,
		width: 220,
		fontSize: 15,
		color: "#005293",
		marginTop: 0,
		marginBottom: 0,
		position: "",
		borderRadius: 0,
		boxShadow: "none",
		height: "70%",
		maxHeight: "90%",
	}),
	menuList: (base) => ({
		...base,
		maxHeight: 100,
		paddingBottom: 0,
		paddingTop: 0,
		padding: 0,
		height: "100%",
		"::-webkit-scrollbar": {
			width: 2,
		},
		"::-webkit-scrollbar-track": {
			background: "transparent",
		},
		"::-webkit-scrollbar-thumb": {
			background: "#005293",
		},
		"::-webkit-scrollbar-thumb:hover": {
			background: "#005293",
		},
	}),
	option: (base) => ({
		...base,
		color: "#191919",
		fontSize: 13,
		":active, :focus": {
			backgroundColor: "#F2F4FB",
		},
		backgroundColor: "inherit",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		paddingTop: 3,
		paddingBottom: 3,
	}),
	multiValue: (base) => ({
		...base,
		fontSize: 15,
		color: "#757998",
	}),
	valueContainer: (base) => ({
		...base,
		fontSize: 15,
		height: 30,
		maxHeight: 50,
		overflowY: "scroll",
		"::-webkit-scrollbar": {
			width: 2,
		},
		"::-webkit-scrollbar-track": {
			background: "transparent",
		},
		"::-webkit-scrollbar-thumb": {
			background: "#005293",
		},
		"::-webkit-scrollbar-thumb:hover": {
			background: "#005293",
		},
	}),
};

const Select = ({
	value,
	options,
	onChange,
	menuIsOpen,
	isMulti,
	closeMenuOnSelect,
	hideSelectedOptions,
	placeholder,
}) => (
	<div className="select_wrapper">
		<ReactSelect
			value={value}
			options={options}
			isSearchable={true}
			isMulti={isMulti}
			closeMenuOnSelect={closeMenuOnSelect}
			hideSelectedOptions={hideSelectedOptions}
			components={{
				Placeholder: (props) => <Placeholder {...props} label={placeholder} />,
				IndicatorSeparator: () => null,
				DropdownIndicator: () => null,
				Option,
				ValueContainer,
			}}
			styles={styles}
			onChange={onChange}
			menuIsOpen={menuIsOpen}
		/>
	</div>
);

export default Select;
