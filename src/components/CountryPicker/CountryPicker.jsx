import React from 'react'

import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.scss'

const CountryPicker = ({ countries, SelectCountry }) => {
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => SelectCountry(e.target.value)}>
        <option value="global">Global</option>
        {countries.map((country, index) => <option key={index} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
