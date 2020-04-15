import React from 'react'
import { connect } from 'react-redux'

import { Cards, Chart, CountryPicker } from './components'
import { initializeApp, SelectCountry } from './redux/reducers/dataReducer'

import styles from './App.module.scss'
import virusImage from './assets/image.png'

const App = ({ data, dailyData, countries, selectedCountry, loading, initializeApp, SelectCountry }) => {

  React.useEffect(() => {
    initializeApp()
  }, [])


  return (
    <div className={styles.container}>
      <img className={styles.image} src={virusImage} alt="COVID-19" />
      <Cards data={data} loading={loading} />
      <CountryPicker countries={countries} SelectCountry={SelectCountry} />
      <Chart dailyData={dailyData} data={data} selectedCountry={selectedCountry} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.global.data,
    dailyData: state.global.dailyData,
    countries: state.global.countries,
    selectedCountry: state.global.selectedCountry,
    loading: state.global.loading
  }
}

export default connect(mapStateToProps, {
  initializeApp,
  SelectCountry
})(App)
