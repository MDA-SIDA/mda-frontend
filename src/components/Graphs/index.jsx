import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import "./index.scss";
import Chart from "@common/Chart";

const Graphs = () => (
	<div className="content_graphs">
		<div className="content_graphs__row">
			<Chart
				title="Numri i bizneseve nder vite"
				value={340}
				type="line"
				showYears
				data={{
					labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
					datasets: [
						{
							label: "Pageviews",
							data: [50, 30, 100, 150, 10],
							borderColor: "#005293",
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
							max: 200,
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
			<Chart
				title="Numri i bizneseve nder vite"
				value={340}
				type="bar"
				data={{
					labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
					datasets: [
						{
							label: "Pageviews",
							data: [50, 30, 100, 150, 10],
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
							max: 200,
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
			<Chart
				title="Gjinia"
				type="pie"
				className="gjinia"
				data={{
					labels: ["% Meshkuj", "% Femra"],
					datasets: [
						{
							label: "Dataset 1",
							data: ["77", "23"],
							backgroundColor: ["#005490", "#FCCB11"],
						},
					],
				}}
				options={{
					plugins: {
						legend: {
							display: true,
							position: "top",
						},
					},
				}}
			/>
		</div>
		<div className="content_graphs__row">
			<Chart
				title="Gjinia"
				type="pie"
				className="gjinia"
				data={{
					labels: ["% Meshkuj", "% Femra"],
					datasets: [
						{
							label: "Dataset 1",
							data: ["77", "23"],
							backgroundColor: ["#005490", "#FCCB11"],
						},
					],
				}}
				options={{
					plugins: {
						legend: {
							display: true,
							position: "top",
						},
					},
				}}
			/>
		</div>
		<div />
		<div />
	</div>
);

export default connect(null, null)(withRouter(Graphs));
