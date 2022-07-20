import { useState } from "react"; 
import './App.css';

export default function App() {

const [city, setCity] = useState("Warsaw")
const [cityInfo, setCityInfo] = useState({})

const Fetch = () => {
  fetch(`http://api.weatherapi.com/v1/forecast.json?key=5f120783051b409e82f14337220807&q=${city}&days=1&aqi=no&alerts=no`)
  .then(response => response.json())
  .then((data) => setCityInfo({
    name: data.location.name,
    country: data.location.country,
    current: data.current.temp_c
    }))
  };

return (
  
    <div className="App">
    <main>
      <h2>Simple Weather App</h2>
      <div className ="search">
        <p>Location</p>
        <div className ="search-container">
          <input  
            type ="text" 
            placeholder="Enter a city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            />
            <button onClick={Fetch}>Search</button>
        </div>
        <div className ="weather-box">
         <div className ="weather">{cityInfo.current}°C</div>
        </div>

        <div className ="location-container">
         <div className ="location">{cityInfo.country}{" "}{cityInfo.name}</div>
        </div>
     </div>
   </main>
  </div>
   
  )
}

