/** @jsxRuntime classic */
/** @jsx jsx */
import { useContext, useEffect } from "react";
import { jsx } from "@emotion/react";
import { WeatherContext } from "../../../../contexts/weather";
import { ADD_WEEKLY_FORECAST } from "../../../../contexts/weather/WeatherReducer";
import { getWeeklyLocationForecast } from "../../../../services/getWeeklyLocationForecast";
import { WeeklyForecastPresenter } from "./WeeklyForecastPresenter";

export function WeeklyForecastWrapper() {
  const [state, dispatch] = useContext(WeatherContext);
  const { weeklyForecastMap, dailyLocationForecastMap, selectedLocation } =
    state;

  useEffect(() => {
    if (!weeklyForecastMap && dailyLocationForecastMap[selectedLocation]) {
      const weeklyForecastParameters = {
        lat: dailyLocationForecastMap[selectedLocation].lat,
        lon: dailyLocationForecastMap[selectedLocation].lon,
      };
      const fetchWeekForecast = async () => {
        const week = await getWeeklyLocationForecast(
          weeklyForecastParameters,
          process.env.REACT_APP_API_KEY
        );
        dispatch({ type: ADD_WEEKLY_FORECAST, payload: week });
      };
      fetchWeekForecast().catch(() =>
        console.log("error requesting week data weather")
      );

      console.log(fetchWeekForecast);
    }
  }, [weeklyForecastMap, dispatch, selectedLocation, dailyLocationForecastMap]);

  return !weeklyForecastMap && dailyLocationForecastMap[selectedLocation] ? (
    <p className="white-text">Loading...</p>
  ) : (
    <WeeklyForecastPresenter {...weeklyForecastMap}></WeeklyForecastPresenter>
  );
}
