import React from "react";
import {components} from "react-select";
import caret from "../../../assets/img/caret.svg";
import "./index.scss";

const ValueContainer = ({children, hasValue, getValue, changeMenuIsOpen, isOpenMenu, ...props}) => (
	<components.ValueContainer {...props}>
		{/* {!hasValue && <img src={Search} alt="" />} */}
		<div className="label">
			{children}
			<img
				src={caret}
				alt="caret"
				onClick={() => changeMenuIsOpen(!isOpenMenu)}
				className={isOpenMenu ? "rotate" : undefined}
			/>
		</div>
		<hr className="hr" />
	</components.ValueContainer>
);

export default ValueContainer;
