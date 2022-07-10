import { initialState } from './store';
import React, {useEffect, useState } from 'react';
import './App.css';


function App() {
  const [city, setCity] = useState('')
  useEffect = () => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=5f120783051b409e82f14337220807&q=${city}&days=1&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => console.log(data))
  };

  return (
    <div className="App">
      <h2>Simple Weather App</h2>
      <main>
        <div className ="search">
          <p>Location</p>
          <div className ="search-container">
            <input  
              type ="text" 
              placeholder="Enter a city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              />
              <button onClick={useEffect}>Search</button>
          </div>

          <div className ="location-container">
            <div className ="location">Warsaw</div>
          </div>
          <div className ="weather-box">
            <div className ="weather">24°C</div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
