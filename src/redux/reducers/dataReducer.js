import { fetchData, fetchDailyData, fetchCountries } from '../../api/api'

const DATA_FETCHED_SUCCESS = 'data/DATA_FETCHED_SUCCESS'
const DAILY_DATA_FETCHED_SUCCESS = 'data/DAILY_DATA_FETCHED_SUCCESS'
const COUNTRIES_FETCHED_SUCCESS = 'data/COUNTRIES_FETCHED_SUCCESS'
const COUNTRY_SELECTED = 'data/COUNTRY_SELECTED'
const LOADING_TOGGLE = 'data/LOADING_TOGGLE'


const initialState = {
  data: {},
  dailyData: [],
  countries: [],
  selectedCountry: '',
  loading: false
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FETCHED_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    case LOADING_TOGGLE:
      return {
        ...state,
        loading: !state.loading
      }
    case DAILY_DATA_FETCHED_SUCCESS:
      return {
        ...state,
        dailyData: action.data
      }
    case COUNTRIES_FETCHED_SUCCESS:
      return {
        ...state,
        countries: action.data
      }
    case COUNTRY_SELECTED:
      return {
        ...state,
        selectedCountry: action.data
      }
    default:
      return state

  }
}


const setData = (data) => {
  return {
    type: DATA_FETCHED_SUCCESS,
    data
  }
}

const setDailyData = (data) => {
  return {
    type: DAILY_DATA_FETCHED_SUCCESS,
    data
  }
}

const setCountries = (data) => {
  return {
    type: COUNTRIES_FETCHED_SUCCESS,
    data
  }
}

const setSelectedCountry = (data) => {
  return {
    type: COUNTRY_SELECTED,
    data
  }
}

const loadingToggle = () => {
  return {
    type: LOADING_TOGGLE
  }
}

export const fetchDataTC = (country) => {
  return async dispatch => {
    const data = await fetchData(country)
    dispatch(setData(data))
  }
}

export const fetchDailyDataTC = () => {
  return async dispatch => {
    const data = await fetchDailyData()
    dispatch(setDailyData(data))
  }
}

export const fetchCountriesTC = () => {
  return async dispatch => {
    const data = await fetchCountries()
    dispatch(setCountries(data))
  }
}

export const SelectCountry = (country) => {
  return async dispatch => {
    dispatch(fetchDataTC(country))
    dispatch(setSelectedCountry(country === 'global' ? '' : country))
  }
}

export const initializeApp = () => {
  return async dispatch => {
    dispatch(loadingToggle())
    dispatch(fetchDataTC())
    dispatch(fetchDailyDataTC())
    dispatch(fetchCountriesTC())
    dispatch(loadingToggle())
  }
}

export default dataReducer