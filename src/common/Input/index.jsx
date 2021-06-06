import React from "react";
import {Field} from "formik";
import styles from "./index.module.scss";

function Input({id, name, label, placeholder, touched, type = "text", error}) {
	return (
		<div className={styles.input_container}>
			<label htmlFor={name}>{label}</label>
			<Field id={id} name={name} placeholder={placeholder} type={type} />
			{touched && error && <div className={styles.input_container__error}>{error}</div>}
		</div>
	);
}

export default Input;
