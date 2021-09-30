import React from "react";
import "./index.scss";

const Card = ({title, style, icon, number}) => (
	<div className="card" style={style}>
		{title && <h2>{title}</h2>}
		{icon && <img alt="" src={icon} />}
		<div className="description" style={{textAlign: "right"}}>
			<p
				className="number"
				style={{
					color: style.backgroundColor === "#FCCB11" ? "#000" : "#fff",
				}}
			>
				{number}
			</p>
		</div>
	</div>
);

export default Card;
