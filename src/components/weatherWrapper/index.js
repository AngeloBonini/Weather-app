/** @jsxRuntime classic */
/** @jsx jsx */
import { useContext, useEffect } from "react";
import { css } from "@emotion/react";
import { jsx } from "@emotion/react";
import { WeatherContext } from "../../contexts/weather";
import { getLocationWeather } from "../../services/getLocationWeather";
import { ADD_CITY } from "../../contexts/weather/weatherState";
import { OneDayForecast } from "../forecast/one-day-forecast";

export function WeatherWrapper() {
  const [state, dispatch] = useContext(WeatherContext);
  const { cityMap, selectedCity } = state;

  useEffect(() => {
    if (!cityMap || !cityMap[selectedCity]) {
      const fetchWeather = async () => {
        const city = await getLocationWeather(
          selectedCity,
          process.env.REACT_APP_API_KEY
        );
        dispatch({ type: ADD_CITY, payload: city });
      };

      fetchWeather().catch(() => console.log("error request data weather"));
    }
  }, [cityMap, dispatch, selectedCity]);

  return !cityMap || !cityMap[selectedCity] ? (
    <p
      className="white-text"
      css={css`
        font-size: 44px;
      `}
    >
      Loading...
    </p>
  ) : (
    <OneDayForecast {...cityMap[selectedCity]}></OneDayForecast>
  );
}
