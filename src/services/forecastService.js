import { apiKey, latLon } from "../utils/defaults";
import Axios from "axios";

// const api = Axios.create({
//     baseUrl: "https://api.openweathermap.org/data/2.5/weather" 
// })

// const getCurrentWeather = () =>
//   Axios.get(api, {
//     params: {
//       lat: latLon.lat,
//       lon: latLon.lon,
//       appid: apiKey,
//     },
//   }).then((res) => res.data);

// export const API = {
//   getCurrentWeather,
// };


// const  coords = {
//     lat: -22.314459,
//     lon: -49.058697
// }

// await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${coords.lat}&lon=${coords.lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
//       .then(res => res.json())
//       .then(result => {
//         setData(result)
//         console.log(result);
//       });
