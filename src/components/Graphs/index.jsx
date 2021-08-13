import React, {useState, useEffect} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import "./index.scss";
import excl from "../../assets/img/exclamation.svg";
import UP from "./UP";
import ATK from "./ATK";

const Graphs = ({filters}) => {
	const [isUp, setIsUp] = useState(false);
	const [isAtk, setIsAtk] = useState(false);
	const [isEmpty, setIsEmpty] = useState(false);
	useEffect(() => {
		if (!filters?.industria) {
			setIsEmpty(true);
		} else setIsEmpty(false);
		if (filters?.industria?.value === "UP") setIsUp(true);
		if (filters?.industria?.value === "ATK") setIsAtk(true);
	}, [filters]);
	return (
		<div className="content_graphs">
			<div className="content_graphs_graph">
				{isEmpty && (
					<div className="no-data">
						<p>
							Nuk ka asnje te dhene per t&apos;u shfaqur{" "}
							<span>
								<img src={excl} alt=""></img>
							</span>
						</p>
					</div>
				)}
				{isUp && <UP />}
				{isAtk && <ATK />}
			</div>
		</div>
	);
};

export default connect(null, null)(withRouter(Graphs));
