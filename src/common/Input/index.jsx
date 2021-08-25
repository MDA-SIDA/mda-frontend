import React from "react";
import {Field} from "formik";
import "./index.scss";

function Input({
	id,
	name,
	label,
	placeholder,
	touched,
	type = "text",
	error,
	containerStyle,
	inputStyle,
	as = "input",
	value,
	withOnChange,
	onChange,
}) {
	return (
		<div className={`input_container ${containerStyle}`}>
			<label htmlFor={name}>{label}</label>
			{!withOnChange && (
				<Field
					id={id}
					name={name}
					placeholder={placeholder}
					type={type}
					className={inputStyle}
					as={as}
					value={value}
					autoComplete="off"
				/>
			)}
			{withOnChange && (
				<Field name={name}>
					{({field}) => (
						<input
							{...field}
							id={id}
							name={name}
							type={type}
							onChange={(value) => {
								// formik's onChange
								field.onChange(value);
								// our custom onChange
								onChange(value);
							}}
							className={inputStyle}
							placeholder={placeholder}
							value={value}
							autoComplete="off"
						/>
					)}
				</Field>
			)}
			{touched && error && <div className="input_container__error">{error}</div>}
		</div>
	);
}

export default Input;
