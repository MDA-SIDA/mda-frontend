import React from "react";
import {components} from "react-select";
import Search from "@assets/img/svg/search.svg";

const ValueContainer = ({children, hasValue, getValue, ...props}) => (
	<components.ValueContainer {...props}>
		{!hasValue && <img src={Search} alt="" />}
		{children}
	</components.ValueContainer>
);

export default ValueContainer;
