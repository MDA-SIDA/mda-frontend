import React from "react";
import "./index.scss";
import ReactChart from "react-chartjs-2";
import useWindowDimensions from "@utils/use_window_dimensions";
import {useTranslation} from "react-i18next";
import {getTranslatedLabels} from "./helpers";

const Chart = ({type = "line", data, options, title, value, showYears, className}) => {
	const {width} = useWindowDimensions();
	const {t} = useTranslation();

	const isMobile = width < 500;
	const isIpad = width === 768;

	const desktopChart = () => (
		<div
			className="chart_container"
			style={{
				position: isMobile ? "relative" : "",
				// eslint-disable-next-line no-nested-ternary
				width: isMobile ? 500 : isIpad ? "100%" : "48.5%",
			}}
		>
			<div className="chart_title">
				<p style={{display: "flex"}}>
					{t(title)} {showYears && <span>2017-2021</span>}
				</p>
				<p className="value">{value}</p>
			</div>
			<ReactChart
				type={type}
				data={{
					...data,
					labels: getTranslatedLabels(data.labels, t),
					datasets: data.datasets?.map((item) => {
						if (item.label) {
							item.label = t(item.label);
						}
						return item;
					}),
				}}
				className={className}
				options={{
					maintainAspectRatio: false,
					responsive: true,
					scales: type !== "pie" && {
						x: {
							ticks: {
								color: "#7C9CBF",
								padding: isMobile ? 0 : 30,
								fontSize: 14,
								callback(value) {
									// eslint-disable-next-line react/no-this-in-sfc
									const label = this?.getLabelForValue(value);
									if (label?.length > 10) {
										return `${label?.substr(0, 10)}...`; // truncate
									}
									return label;
								},
							},
							grid: {
								display: false,
							},
							...options?.scales?.x,
						},
						y: {
							ticks: {
								padding: isMobile ? 0 : 30,
								display: !isMobile,
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
							mode: "nearest",
							intersect: false,
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

	const mobileChart = () => <div style={{overflowX: "scroll"}}>{desktopChart()}</div>;

	return data.datasets.length > 0 && (isMobile ? mobileChart() : desktopChart());
};

export default Chart;
