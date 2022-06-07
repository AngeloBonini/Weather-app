import dailyWeatherMapper from "./dailyWeatherMapper";

export async function getLocationWeather(location, key) {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`
  );
  const json = await result.json();
  const dailyWeatherReport = dailyWeatherMapper(json);
  return dailyWeatherReport;
}
