import React from 'react';
import './App.css';

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
