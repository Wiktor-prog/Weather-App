import {useState} from "react";
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"; 

export default function Details() {

const [city, setDetails] = useState(["Warszawa"])
const [detailsInfo, setDetailsInfo] = useState([])
const APIkey = "5f120783051b409e82f14337220807"

let navigate = useNavigate();

const DetailsApi = () => {
  fetch([`http://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${city}&days=1&aqi=no&alerts=no`])
  .then(response => response.json())
  .then((data) => setDetailsInfo({
    current: data.current.feelslike_c,
    humidityinf: data.current.humidity,
    wind: data.current.wind_mph,
    condition: data.current.condition.text,
    img: data.current.condition.icon
  }))
};

return (
  <div className="Details">
    <FontAwesomeIcon 
    className="icon" 
    icon={ faArrowLeftLong }
    onClick={() => {
    navigate ("/");
  }}/>

  <h2>Weather Details</h2>
      <button 
      className="details-btn"
      onChange={(event) => setDetails(event.target.value)} 
      onClick={DetailsApi}>more details
      </button>

      <input id="details-input"  
        type ="text" 
        placeholder="Search weather details in you city"
        value={city}
        onChange={(event) => setDetails(event.target.value)}
      />

      <div className="details-info">
        <div className="condition">
          <h1>{detailsInfo.condition}</h1>
          <img src={detailsInfo.img} alt="icon"></img>
        </div>
        <div className="details-container">
          <p>wind speed: {detailsInfo.wind} mph</p>
          <p>feels temp: {detailsInfo.current} °C</p>
          <p>humidity: {detailsInfo.humidityinf} </p>
        </div>
      </div>
    </div>
  )
}

