import React, {useState, useEffect} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import "./index.scss";
import excl from "../../assets/img/exclamation.svg";
import {setIndustry, showGraphInitialState} from "./utils";
import UP from "./UP";
import ATK from "./ATK";
import AKK from "./AKK";
import ARBK from "./ARBK";
import AUV from "./AUV";
import MAPL from "./MAPL";
import MASHT from "./MASHT";

const Graphs = ({filters}) => {
	const [isEmpty, setIsEmpty] = useState(false);
	const [showGraph, setShowGraph] = useState(showGraphInitialState);

	useEffect(() => {
		if (!filters?.industria) {
			setIsEmpty(true);
			setShowGraph(showGraphInitialState);
		} else setIsEmpty(false);
		setIndustry(filters, setShowGraph, showGraph);
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
				{showGraph.UP && <UP filters={filters} />}
				{showGraph.ATK && <ATK filters={filters} />}
				{showGraph.AKK && <AKK filters={filters} />}
				{showGraph.ARBK && <ARBK filters={filters} />}
				{showGraph.AUV && <AUV filters={filters} />}
				{showGraph.MAPL && <MAPL filters={filters} />}
				{showGraph.MASHT && <MASHT filters={filters} />}
			</div>
		</div>
	);
};

export default connect(null, null)(withRouter(Graphs));
