import React, {useState} from "react";
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
		// width: 220,
		fontSize: 13,
		zIndex: 100,
		color: "#005293",
		fontFamily: "Sweden Sans Book",
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
		fontFamily: "Sweden Sans Book",
		// width: 220,
		fontSize: 14,
		color: "#191919",
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
		color: "#191919",
		paddingTop: 0,
		padding: 0,
		height: "100%",
		"::-webkit-scrollbar": {
			width: 3,
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
		height: "auto",
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
	isMulti,
	closeMenuOnSelect,
	hideSelectedOptions,
	placeholder,
	isDisabled,
	isOptionDisabled,
	handleDisableOptionClick,
}) => {
	const [isOpenMenu, setisOpenMenu] = useState(true);
	return (
		<div className="select_wrapper">
			<ReactSelect
				isDisabled={isDisabled}
				value={value}
				options={options}
				isSearchable={true}
				isMulti={isMulti}
				closeMenuOnSelect={closeMenuOnSelect}
				hideSelectedOptions={hideSelectedOptions}
				components={{
					Placeholder: (props) => (
						<Placeholder {...props} label={placeholder} isOpenMenu={isOpenMenu} />
					),
					IndicatorSeparator: () => null,
					DropdownIndicator: () => null,
					Option: (props) => (
						<Option
							{...props}
							isMulti={isMulti}
							handleDisableOptionClick={handleDisableOptionClick}
						/>
					),
					ValueContainer: (props) => (
						<ValueContainer
							{...props}
							isOpenMenu={isOpenMenu}
							changeMenuIsOpen={(state) => setisOpenMenu(state)}
						/>
					),
				}}
				styles={styles}
				onChange={onChange}
				menuIsOpen={isOpenMenu}
				isOptionDisabled={isOptionDisabled}
			/>
		</div>
	);
};

export default Select;
