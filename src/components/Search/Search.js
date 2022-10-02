import { useState, useEffect } from "react";
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaSearch, FaWater, FaWind, FaTemperatureHigh } from 'react-icons/fa';
import "../Search/Search.css"
import "../Search/Details.css"
import { getWeatherForCity } from "../../utils/api";
import { useCity, useCityInfo } from "./useCity";

const transformApiData = (apiData) => {
  return {
    name: apiData.location.name,
    country: apiData.location.country,
    current: apiData.current.temp_c,
    current: apiData.current.feelslike_c,
    humidityinf: apiData.current.humidity,
    wind: apiData.current.wind_mph,
    condition: apiData.current.condition.text,
    img: apiData.current.condition.icon
  }
}

export default function Search() {

  const [city, setCity] = useCity()
  const [cityInfo, setCityInfo] = useCityInfo()

  const getWeather = async () => {
    getWeatherForCity(city)
      .then(response => response.json())
      .then((data) => setCityInfo(transformApiData(data)))
  };

  const refresh = () => {
    getWeather()
  };

  return (
    <div className="Search">
      <button
        className="refresh-btn"
        onClick={refresh}>
        <FontAwesomeIcon
          icon={faRotateRight} />
      </button>

      <h2>Simple Weather App</h2>
      <div className="search-container">
        <input
          type="text"
          name="city"
          placeholder="Enter a city"
          value={city}
          onChange={(event) => setCity(event.target.value)} />

        <button onClick={getWeather}>
          <FaSearch />
        </button>
      </div>

      <div className="weather-container">
        <div className="weather">{cityInfo.current}&deg;C</div>
      </div>

      <div className="location-container">
        <div className="location">{cityInfo.country}{" "}{cityInfo.name}</div>
      </div>

      <div className="Details">
        <div className="condition">
          <h1>{cityInfo.condition}</h1>
          <img
            src={cityInfo.img}
            alt="icon"></img>
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
