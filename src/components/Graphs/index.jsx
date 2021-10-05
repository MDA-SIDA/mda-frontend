import React from "react";
import {connect} from "react-redux";
import "./index.scss";
import {useTranslation} from "react-i18next";
import {isEqual} from "lodash";
import excl from "../../assets/img/exclamation.svg";
import UP from "./UP";
import ATK from "./ATK";
import AKK from "./AKK";
import ARBK from "./ARBK";
import AUV from "./AUV";
import MAPL from "./MAPL";
import MASHT from "./MASHT";
import MPBZhR from "./MPBZhR";
import DOGANA from "./DOGANA";
import RRUGET from "./RRUGET";
import MF from "./MF";

const Graphs = ({selectedFilters, isEmpty, showGraph}) => {
	const {t} = useTranslation();

	return (
		<div className="content_graphs">
			<div className="content_graphs_graph">
				{isEmpty && (
					<div className="no-data">
						<p>
							{t("empty")}{" "}
							<span>
								<img src={excl} alt=""></img>
							</span>
						</p>
					</div>
				)}
				{!isEmpty && showGraph === "UP" && <UP filters={selectedFilters} />}
				{!isEmpty && showGraph === "ATK" && <ATK filters={selectedFilters} />}
				{!isEmpty && showGraph === "AKK" && <AKK filters={selectedFilters} />}
				{!isEmpty && showGraph === "ARBK" && <ARBK filters={selectedFilters} />}
				{!isEmpty && showGraph === "AUV" && <AUV filters={selectedFilters} />}
				{!isEmpty && showGraph === "MAPL" && <MAPL filters={selectedFilters} />}
				{!isEmpty && showGraph === "MASHT" && <MASHT filters={selectedFilters} />}
				{!isEmpty && showGraph === "MF" && <MF filters={selectedFilters} />}
				{!isEmpty && showGraph === "RRUGET" && <RRUGET filters={selectedFilters} />}
				{!isEmpty && showGraph === "MPBZhR" && <MPBZhR filters={selectedFilters} />}
				{!isEmpty && showGraph === "DOGANA" && <DOGANA filters={selectedFilters} />}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	vendbanimet: state.app.filters.index.all.vendbanimet,
	komunat: state.app.filters.index.all.komunat,
	regjionet: state.app.filters.index.all.regjionet,
	industrite: state.app.filters.index.all.industrite,
	selectedFilters: state.app.filters.index.selected,
	isLoading: state.app.layout.index.loading,
});

function propsAreEqual(prev, next) {
	return (
		prev.isLoading === next.isLoading &&
		prev.isEmpty === next.isEmpty &&
		prev.showGraph === next.showGraph &&
		isEqual(prev.selectedFilters.industria, next.selectedFilters.industria) &&
		isEqual(prev.selectedFilters.regjionet, next.selectedFilters.regjionet) &&
		isEqual(prev.selectedFilters.komunat, next.selectedFilters.komunat) &&
		isEqual(prev.selectedFilters.vendbanimet, next.selectedFilters.vendbanimet) &&
		isEqual(prev.selectedFilters.vitet, next.selectedFilters.vitet) &&
		isEqual(prev.selectedFilters.regime, next.selectedFilters.regime)
	);
}

export default connect(mapStateToProps, null)(React.memo(Graphs, propsAreEqual));
