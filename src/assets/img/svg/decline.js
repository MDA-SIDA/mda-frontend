import React from "react";

/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
const declineIcon = ({color = "#000"}) => (
	<svg
		id="cancel_black_24dp"
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
	>
		<path id="Path_908" data-name="Path 908" d="M0,0H24V24H0Z" fill="none" opacity="0.87" />
		<path
			id="Path_909"
			data-name="Path 909"
			d="M12,2A10,10,0,1,0,22,12,9.991,9.991,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20ZM15.59,7,12,10.59,8.41,7,7,8.41,10.59,12,7,15.59,8.41,17,12,13.41,15.59,17,17,15.59,13.41,12,17,8.41Z"
			fill={color}
		/>
	</svg>
);

export default declineIcon;
