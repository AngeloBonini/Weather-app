/** @jsxRuntime classic */
/** @jsx jsx */

import "./App.css";
import { Clock } from "./components/clock/clock";
import { SearchBar } from "./components/search/search";
import { Settings } from "./components/settings/settings";
import { jsx } from "@emotion/react";
import { css, Global } from "@emotion/react";
import { Card } from "./components/card/card";
import { cities } from "./utils/citiesArray";
import { API } from "./services/forecastService";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([])
  // const [apiData, setApiData] = useState({});
  // const [getState, setGetState] = useState('tamilnadu');
  // const [state, setState] = useState('tamilnadu');
const  coords = {
  lat: -22.314459,
  lon: -49.058697
}
const apiUrl = `https://api.openweathermap.org/data/2.5/weather/?lat=22&lon=44&units=metric&APPID=6d542ef267595d5173c6ec1e93b039eb` 
useEffect(()=>{
   fetch(apiUrl)
      .then((res) => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
}, [apiUrl])

// const weather =  API.getCurrentWeather();

// console.log(weather);
  // const cardsArray = [18]
  const gridContent = cities.map((city)=>
  <Card name={city}>
  </Card>
  )
  return (
    <div className="App">
      <div className="App-header">
        <div className="clock-container">
          <Clock format12hr={true}></Clock>
        </div>
        <div className="Search-settings">
          <SearchBar></SearchBar>
          <Settings></Settings>
        </div>
      </div>
      <div className="main-content">
        <p
          css={css`
            opacity: 1;
            color: rgba(255, 255, 255, 1);
            font-size: 44px;
            font-weight: 500;
            font-style: normal;
            letter-spacing: 0px;
          `}
        >
          Pick a day to see the full forecast
        </p>
      </div>
      <div className="card-grid">
        {gridContent}
      </div>
    </div>
  );
}

export default App;
