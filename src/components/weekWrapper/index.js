/** @jsxRuntime classic */
/** @jsx jsx */
import { useContext, useEffect } from "react";
import { css } from "@emotion/react";
import { jsx } from "@emotion/react";
import { WeatherContext } from "../../contexts/weather";
import { UPDATE_WEEK_FORECAST } from "../../contexts/weather/weatherState";
import { weeklyForecastService } from "../../services/weeklyForecastService";
import { WeekForecast } from "../forecast/week-forecast";

export function WeekWrapper() {
  const [state, dispatch] = useContext(WeatherContext);
  const { weeklyForecast, cityMap, selectedCity } = state;

  // console.log(selectedCity)
  useEffect(() => {
    if (!weeklyForecast && cityMap[selectedCity]) {
      const weeklyForecastParameters = {
        lat: cityMap[selectedCity].lat,
        lon: cityMap[selectedCity].lon,
      };
      const fetchWeekForecast = async () => {
        const week = await weeklyForecastService(
          weeklyForecastParameters,
          process.env.REACT_APP_API_KEY
        );
        dispatch({ type: UPDATE_WEEK_FORECAST, payload: week });
      };
      fetchWeekForecast().catch(() =>
        console.log("error requesting week data weather")
      );

      console.log(fetchWeekForecast);
    }
  }, [weeklyForecast, dispatch, selectedCity, cityMap]);

  return !weeklyForecast && cityMap[selectedCity] ? (
    <p className="white-text">Loading...</p>
  ) : (
    <WeekForecast {...weeklyForecast}></WeekForecast>
  );
}
