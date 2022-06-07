/** @jsxRuntime classic */
/** @jsx jsx */

import "./App.css";

import { Clock } from "./components/Clock";
import { SearchBar } from "./components/Search";
import { Settings } from "./components/Settings";
import { jsx } from "@emotion/react";

import { LocationSelection } from "./components/LocationSelection";
import { locations } from "./utils/LocationData";
import { MainContent } from "./components/MainContent";
import { WeatherProvider } from "./contexts/weather";

function App() {
  const gridContent = locations.map((location) => (
    <LocationSelection key={location} name={location}></LocationSelection>
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
