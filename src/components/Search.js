import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; 

export default function Search() {

let navigate = useNavigate();
const APIkey = "5f120783051b409e82f14337220807"

const [cityInfo, setCityInfo] = useState("")
const [city, setCity] = useState ( () => {
const savedItem = localStorage.getItem("city");
const parsedItem = JSON.parse(savedItem);
  return parsedItem || "";
});


const SearchApi = () => {
  fetch([`http://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${city}&days=1&aqi=no&alerts=no`])
  .then(response => response.json())
  .then((data) => setCityInfo({
    name: data.location.name,
    country: data.location.country,
    current: data.current.temp_c,
  }))
};

useEffect(() => {
  localStorage.setItem("city", JSON.stringify(city))
})

return (
    <div className="Search">
      <h2>Simple Weather App</h2>
        <div className ="location-name">
          <p>Location</p>
        <div className ="search-container">
            <input  
              type ="text"
              name="city" 
              placeholder="Enter a city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />

            <button onClick={SearchApi}>Search</button>
            <button 
            onClick={() => {
              navigate ("/details");
            }}>more details
            </button>
        </div>  
         
        <div className ="weather-container">
          <div className ="weather">{cityInfo.current}°C</div>
        </div>
        <div className ="location-container">
          <div className ="location">{cityInfo.country}{" "}{cityInfo.name}</div>
        </div>
      </div>
    </div>
  )
}
