import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import "./index.scss";

const Graphs = () => (
	<div className="content_graphs">
		<div className="content_graphs__row">
			<div>graph 1</div>
			<div>graph 2</div>
			<div>graph 3</div>
		</div>
		<div className="content_graphs__row">
			<div>graph 1</div>
			<div>graph 2</div>
			<div>graph 3</div>
		</div>
		<div className="content_graphs__row">
			<div>graph 1</div>
			<div>graph 2</div>
			<div>graph 3</div>
		</div>
	</div>
);

export default connect(null, null)(withRouter(Graphs));
