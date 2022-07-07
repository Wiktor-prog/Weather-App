import React from 'react';
import './App.css';

const api = {
  key: api.openweathermap.org/data/2.5/forecast?id=524901&appid:{'3a36dda54d7c05d1927b2e1d96a9b90e'}
}

function App() {
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
              />
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
