import { weeklyWeatherMapper } from "./weeklyWeatherMapper";

export async function weeklyForecastService(weekparameters, key) {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${weekparameters.lat}&lon=${weekparameters.lon}&exclude={minutely,hourly,alerts}&appid=${key}&units={metric}`
  );
  const responseJson = await result.json();
  const mappedResponse = weeklyWeatherMapper(responseJson);
  return mappedResponse;
}
