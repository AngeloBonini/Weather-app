/** @jsxRuntime classic */
/** @jsx jsx */
import { useContext, useEffect } from "react";
import { css } from "@emotion/react";
import { jsx } from "@emotion/react";
import { WeatherContext } from "../../../../contexts/weather";
import { getDailyLocationForecast } from "../../../../services/getLocationDailyForecast";
import { ADD_DAILY_FORECAST } from "../../../../contexts/weather/WeatherReducer";
import { DailyForecastPresenter } from "./DailyForecastPresenter";

export function DailyForecastWrapper() {
  const [state, dispatch] = useContext(WeatherContext);
  const { dailyLocationForecastMap, selectedLocation } = state;

  useEffect(() => {
    if (
      !dailyLocationForecastMap ||
      !dailyLocationForecastMap[selectedLocation]
    ) {
      const fetchWeather = async () => {
        const city = await getDailyLocationForecast(
          selectedLocation,
          process.env.REACT_APP_API_KEY
        );
        dispatch({ type: ADD_DAILY_FORECAST, payload: city });
      };

      fetchWeather().catch(() => console.log("error request data weather"));
    }
  }, [dailyLocationForecastMap, dispatch, selectedLocation]);

  return !dailyLocationForecastMap ||
    !dailyLocationForecastMap[selectedLocation] ? (
    <p
      className="white-text"
      css={css`
        font-size: 44px;
      `}
    >
      Loading...
    </p>
  ) : (
    <DailyForecastPresenter
      {...dailyLocationForecastMap[selectedLocation]}
    ></DailyForecastPresenter>
  );
}
