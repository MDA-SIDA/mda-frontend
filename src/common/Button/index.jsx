/* eslint-disable react/button-has-type */
import React from "react";
import styles from "./index.module.scss";

const Button = ({text, disabled, type = "button", overrideStyle}) => (
	<div className={`${styles.button_container} ${overrideStyle} `}>
		<button disabled={disabled} type={type}>
			{text}
		</button>
	</div>
);

export default Button;
