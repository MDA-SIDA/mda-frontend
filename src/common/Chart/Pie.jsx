import React from "react";
import "./index.scss";
import ReactChart from "react-chartjs-2";

const PieChart = ({data, options, title, className}) => (
	<div className="pie_chart_container">
		<div className="chart_title">
			<p style={{display: "flex", paddingBottom: 10}}>{title}</p>
		</div>
		<ReactChart
			type="pie"
			data={data}
			className={className}
			options={{
				maintainAspectRatio: false,
				responsive: true,
				layout: {
					...options?.layout,
				},
				plugins: {
					tooltip: {
						...options?.plugins?.tooltip,
					},
					legend: {
						position: "bottom",
						align: "center",
						display: true,
						...options?.plugins?.legend,
					},
				},
			}}
		/>
	</div>
);

export default PieChart;
