/** @jsxRuntime classic */
/** @jsx jsx */

import "./App.css";

import { Clock } from "./components/clock/clock";
import { SearchBar } from "./components/search/search";
import { Settings } from "./components/settings/settings";
import { jsx } from "@emotion/react";

import { City } from "./components/city/city";
import { cities } from "./utils/citiesArray";
import { MainContent } from "./components/mainContent/mainContent";
import { WeatherProvider } from "./contexts/weather";
import { BrowserRouter } from "react-router-dom";

function App() {
  const gridContent = cities.map((avaliableCity) => (
    <City key={avaliableCity.toString()} name={avaliableCity}></City>
  ));

  return (
    <div className="App">
      <WeatherProvider>
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
          <MainContent></MainContent>
        </main>
        <footer className="card-grid">{gridContent}</footer>
      </WeatherProvider>
    </div>
  );
}

export default App;
