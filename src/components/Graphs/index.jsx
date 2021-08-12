import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import './index.scss'
import Chart from '@common/Chart'
import excl from "../../assets/img/exclamation.svg"

const Graphs = () => (
  <div className="content_graphs">
    <div className="content_graphs_graph">
			<div className="no-data">
				<p>Nuk ka asnje te dhene per t'u shfaqur <span><img src={excl}></img></span></p>
			</div>
      {/* <div className="content_graphs__row"> */}
      {/* <Chart
        title="Nr i bizneseve nder vite"
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
      /> */}
      <Chart
        title="Nr i studenteve te diplomuar"
        value={332}
        showYears
        type="bar"
        data={{
          labels: ['2018', '2019', '2020', '2021'],
          datasets: [
            {
              label: 'Pageviews',
              data: [93, 14, 209, 16],
              backgroundColor: '#00517D',
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
                color: '#7C9CBF',
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
                color: '#7C9CBF',
                padding: 30,
                fontSize: 11,
                fontFamily: 'Montserrat Medium',
              },
            },
          },
        }}
      />
      {/* <Chart
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
              borderWidth: 0
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
      /> */}
      {/* </div> */}
      {/* <div className="content_graphs__row"> */}
      <Chart
        title="Nr. total i studenteve"
        type="doughnut"
        value={3515}
        className="gjinia"
        data={{
          labels: ['99.9% Kosovar', '0.1% Shqiptar'],
          datasets: [
            {
              label: 'Dataset 1',
              data: ['3513', '2'],
              backgroundColor: ['#005490', '#FCCB11'],
              borderWidth: 0,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
          },
        }}
      />
      <Chart
        title="Nr. total i studenteve"
        value={12092}
        type="bar"
        data={{
          labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
          datasets: [
            {
              label: 'Meshkuj',
              data: [50, 30, 100, 150, 10],
              backgroundColor: '#00517D',
            },
            {
              label: 'Femra',
              data: [19, 40, 32, 45, 150],
              backgroundColor: '#FCCB11',
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: true,
            },
          },
          scales: {
            x: {
              ticks: {
                color: '#7C9CBF',
                padding: 30,
                fontSize: 14,
              },
              grid: {
                display: false,
              },
            },
            y: {
              min: 0,
              max: 200,
              grid: {
                display: true,
              },
              ticks: {
                min: 0,
                max: 200,
                stepSize: 20,
                color: '#7C9CBF',
                padding: 30,
                fontSize: 10,
                fontFamily: 'Montserrat Medium',
              },
            },
          },
        }}
      />

      {/* </div> */}
      {/* <div /> */}
      {/* <div /> */}
    </div>
  </div>
)

export default connect(null, null)(withRouter(Graphs))
