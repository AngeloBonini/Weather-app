import {} from 'date-fns'



function createUTC(unformattedTime, timezone){
  const time = new Date((unformattedTime * 1000) + (timezone * 1000));
  const currentHours = ("0" + time.getUTCHours()).slice(-2);
  const currentMinutes = ("0" + time.getUTCMinutes()).slice(-2);
  const formatted = currentHours + ":" + currentMinutes
  return formatted
}
export default function dailyWeatherMapper(responseObject) {
  const dailyWeather = {
    name: responseObject.name,
    temperature: responseObject.main.temp,
    feelsLike: responseObject.main.feels_like,
    humidity: responseObject.main.humidity,
    sunrise: createUTC(responseObject.sys.sunrise, responseObject.timezone),
    sunset: createUTC(responseObject.sys.sunset, responseObject.timezone),
    weatherPreview: responseObject.weather[0].main,
    weatherDescription: responseObject.weather[0].description,
      lat: responseObject.coord.lat,
      lon: responseObject.coord.lon
  };
  console.log(dailyWeather)
  return dailyWeather;
}

