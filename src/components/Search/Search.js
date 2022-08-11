import { useState, useEffect } from "react"; 
import { FaSearch, FaWater, FaWind, FaTemperatureHigh} from 'react-icons/fa';
import "../Search/Search.css"
import  "../Search/Details.css"

export default function Search() {

  const APIkey = "5f120783051b409e82f14337220807"

  const [cityInfo, setCityInfo] = useState ( () => {
      const saveInfo = localStorage.getItem("cityInfo");
      const parsedInfo = JSON.parse(saveInfo);
    
    return parsedInfo || "";
})

        const [city, setCity] = useState ( () => {
            const saveCity = localStorage.getItem("city");
            const parsedCity = JSON.parse(saveCity);

          return parsedCity || "";
});


  const SearchApi = () => {
    fetch([`http://api.weatherapi.com/v1/forecast.json?key=
    ${APIkey}&q=${city}&days=1&aqi=no&alerts=no`])

    .then(response => 
      response.json())

          .then((data) => 
          setCityInfo({
            name: data.location.name,
            country: data.location.country,

            current: data.current.temp_c,
            current: data.current.feelslike_c,

            humidityinf: data.current.humidity,
            wind: data.current.wind_mph,
            condition: data.current.condition.text,

            img: data.current.condition.icon
    }))
  };


    useEffect(() => {
      window.localStorage.setItem
      ("city", JSON.stringify(city))
    });

        useEffect(() => {
          window.localStorage.setItem
          ("cityInfo", JSON.stringify(cityInfo))
        });


  return (
      <div className="Search">

        <h2>Simple Weather App</h2>
          <div className ="location-name">
            
          <div className ="search-container">
          <p>Location</p>
              <input  
                type ="text"
                name="city" 
                placeholder="Enter a city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            
              <button onClick={SearchApi}>
                <FaSearch />
              </button>
          </div>  
          
            <div className ="weather-container">
              <div className ="weather">{cityInfo.current}&deg;C</div>
            </div>

            <div className ="location-container">
              <div className ="location">{cityInfo.country}{" "}{cityInfo.name}</div>
            </div>
          </div>

          <div className="Details">
              <div className="condition">
                  <h1>{cityInfo.condition}</h1>
                  <img src={cityInfo.img} alt="icon"></img>
              </div>

              <div className="details-container">
                <div className="content"> 
                <FaTemperatureHigh /> 
                  <p>feels temp: {cityInfo.current}&deg;C</p>
                </div>

                <div className="content"> 
                <FaWater /> 
                  <p>humidity: {cityInfo.humidityinf}</p>
                </div>

                <div className="content"> 
                <FaWind /> 
                  <p>wind: {cityInfo.wind} mph</p>
                </div>
              </div>

            </div>
          </div>
    
    );
  }
