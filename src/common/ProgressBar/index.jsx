/* eslint-disable react/button-has-type */
import React from "react";

const ProgressBar = (props) => {
	const {bgcolor, completed} = props;

	const containerStyles = {
		backgroundColor: "#e0e0de",
		borderRadius: 3,
		width: 150,
		height: 20,
	};

	const fillerStyles = {
		height: "100%",
		width: `${completed}%`,
		backgroundColor: bgcolor,
		borderRadius: "inherit",
		textAlign: "right",
		padding: 5,
	};

	const labelStyles = {
		padding: 5,
		textAlign: "center",
		color: "white",
		fontWeight: "bold",
	};

	return (
		<div style={containerStyles}>
			<div style={fillerStyles}>
				<span style={labelStyles}>{`${completed}%`}</span>
			</div>
		</div>
	);
};

export default ProgressBar;
