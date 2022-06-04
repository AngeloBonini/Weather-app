import dailyWeatherMapper from "./dailyWeatherMapper";

export async function getLocationWeather(location, key){
        const result = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`,
        ).then(response => response.json())

    const dailyWeatherReport = dailyWeatherMapper(result)
    return dailyWeatherReport;
};