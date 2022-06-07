export function weeklyWeatherMapper(responseObject) {
  const weekForecast = responseObject.daily.map((day) => {
    const data = {
      max: day.temp.max,
      min: day.temp.min,
      dayOfTheWeek: day.dt,
      weather: day.weather[0].main,
      weatherDescription: day.weather[0].description,
    };
    return data;
  });
  weekForecast.pop();
  return weekForecast;
}
