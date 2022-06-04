/** @jsxRuntime classic */
/** @jsx jsx */

import "./App.css";
import { Clock } from "./components/clock/clock";
import { SearchBar } from "./components/search/search";
import { Settings } from "./components/settings/settings";
import { jsx } from "@emotion/react";

import {  City } from "./components/city/city";
import { cities } from "./utils/citiesArray";
import { MainText} from "./components/mainText/mainText";
import { Forecast } from "./components/forecast/forecast";

function App() {

  let isWeatherLoaded = false;

  const loadingCard = () => {
    if(isWeatherLoaded){
      return <Forecast></Forecast>
    }else{
      return <MainText></MainText>
    }
  }
  const citySelected = (cityData)=>{
    console.log(cityData)
    isWeatherLoaded = cityData
    setData(cityData)
  }
  const gridContent = cities.map((avaliableCity)=>
  <City key={avaliableCity.toString()} name={avaliableCity} citySelected={citySelected} >
  </City>
  )
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="clock-container">
          <Clock format12hr={true}></Clock>
        </div>
        <div className="Search-settings">
          <SearchBar></SearchBar>
          <Settings></Settings>
        </div>
      </header>
      <main className="main-content">
        {loadingCard()}
      </main>
      <footer className="card-grid">
        {gridContent}
      </footer>
    </div>
  );
}

export default App;
