import React, {useEffect} from "react";
import {connect} from "react-redux";
import {actions} from "@sagas/industries/masht";
import Chart from "@common/Chart";

function MASHT({
	fetchGjiniaEntiteti,
	fetchNrNxenesveShkolla,
	gjiniaEntiteti,
	nrNxenesveShkolla,
	filters,
}) {
	useEffect(() => {
		fetchGjiniaEntiteti(filters);
		fetchNrNxenesveShkolla(filters);
	}, [fetchGjiniaEntiteti, fetchNrNxenesveShkolla, filters]);
	return (
		<>
			<Chart
				title="Nr i studenteve te diplomuar"
				value={332}
				showYears
				type="bar"
				data={{
					labels: nrNxenesveShkolla?.map((item) => item.shkollaemri),
					datasets: [
						{
							label: "Pageviews",
							data: nrNxenesveShkolla?.map((item) => item.numrinxenesve),
							backgroundColor: "#00517D",
						},
					],
				}}
				options={{
					plugins: {
						legend: {
							display: false,
						},
					},
					scales: {
						x: {
							ticks: {
								color: "#7C9CBF",
								padding: 30,
								fontSize: 14,
							},
							grid: {
								display: false,
							},
						},
						y: {
							min: 10,
							// max: 200,
							grid: {
								display: true,
							},
							ticks: {
								stepSize: 50,
								color: "#7C9CBF",
								padding: 30,
								fontSize: 11,
								fontFamily: "Montserrat Medium",
							},
						},
					},
				}}
			/>
		</>
	);
}

const mapDispatchToProps = {
	fetchGjiniaEntiteti: actions.fetchGjiniaEntiteti,
	fetchNrNxenesveShkolla: actions.fetchNrNxenesveShkolla,
};
const mapStateToProps = (state) => ({
	gjiniaEntiteti: state.app.industries.masht.gjiniaEntiteti,
	nrNxenesveShkolla: state.app.industries.masht.nrNxenesveShkolla,
});

export default connect(mapStateToProps, mapDispatchToProps)(MASHT);
