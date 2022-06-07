import * as React from "react"
import { weatherReducer, initialWeatherState } from "./weatherState"

export const WeatherContext = React.createContext({
  state: initialWeatherState,
  dispatch: () => null
})

export const WeatherProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(weatherReducer, initialWeatherState)

  return (
    <WeatherContext.Provider value={[ state, dispatch ]}>
    	{ children }
    </WeatherContext.Provider>
  )
}