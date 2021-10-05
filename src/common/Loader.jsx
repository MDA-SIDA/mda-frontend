import React from "react";
import ReactLoading from "react-loading";

const Loader = () => (
	<div
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "100%",
			height: "50vh",
		}}
	>
		<ReactLoading color="#005293" type="spin" height={150} width={150} />
	</div>
);

export default Loader;
