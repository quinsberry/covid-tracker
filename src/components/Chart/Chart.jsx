import React from 'react'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.scss'

const Chart = ({ dailyData, data, selectedCountry }) => {

  const lineChart = (
    dailyData.length ? (
      <Line data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [{
          data: dailyData.map(({ confirmed }) => confirmed),
          label: 'Confirmed',
          borderColor: 'rgba(255, 0, 0, .5)',
          backgroundColor: 'rgba(255, 0, 0, .1)',
          fill: true
        }, {
          data: dailyData.map(({ deaths }) => deaths),
          label: 'Deaths',
          borderColor: 'rgba(0, 0, 0, .6)',
          backgroundColor: 'rgba(0, 0, 0, .5)',
          fill: true
        }],
      }} />
    ) : (
        null
      )
  )

  const barChart = (
    data.confirmed ? (
      <Bar data={{
        labels: ['Confirmed', 'Recovered', 'Deaths'],
        datasets: [{
          label: 'People',
          backgroundColor: ['rgba(255,0,0, .5)', 'rgba(0,255,0, .5)', 'rgba(0, 0, 0, 0.7)'],
          data: [data.confirmed.value, data.recovered.value, data.deaths.value]
        }],
      }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${selectedCountry}` }
        }}
      />
    ) : (
        null
      )
  )

  return (
    <div className={styles.container}>
      {selectedCountry ? barChart : lineChart}
    </div>
  )
}

export default Chart
