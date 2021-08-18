import React from "react";
import "./index.scss";
import ReactChart from "react-chartjs-2";

const Chart = ({type = "line", data, options, title, value, showYears, className}) => (
	<div className="chart_container">
		<div className="chart_title">
			<p style={{display: "flex"}}>
				{title} {showYears && <span>2017-2021</span>}
			</p>
			<p className="value">{value}</p>
		</div>
		<ReactChart
			type={type}
			data={data}
			className={className}
			options={{
				maintainAspectRatio: false,
				responsive: true,
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
						...options?.scales?.x,
					},
					y: {
						ticks: {
							padding: 30,
						},
						...options?.scales?.y,
					},
					...options?.scales,
				},
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

export default Chart;
