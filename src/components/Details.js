import {useState} from "react";
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"; 

function Details() {

const [city, setDetails] = useState("warsaw")
const [detailsInfo, setDetailsInfo] = useState({})
let navigate = useNavigate();

const DetailsApi = () => {
  fetch(`http://api.weatherapi.com/v1/forecast.json?key=5f120783051b409e82f14337220807&q=${city}&days=1&aqi=no&alerts=no`)
  .then(response => response.json())
  .then((data) => setDetailsInfo({
    current: data.current.feelslike_c,
    humidityinf: data.current.humidity,
    wind: data.current.wind_mph ,
    condition: data.current.condition.text,
  
  }))
};

return (
<div className="Details">
  <FontAwesomeIcon 
  className="icon" 
  icon={ faArrowLeftLong }
  onClick={() => {
  navigate ("/");
}}
  />

  <h2>Details</h2>
    <button 
    className="details-btn"
    value={city}
    onChange={(event) => setDetails(event.target.value)} 
    onClick={DetailsApi}>more details
    </button>

  <div className="details-info">
    <p>wind speed: {detailsInfo.wind} mph</p>
    <p>feels temp: {detailsInfo.current} °C</p>
    <p>humidity: {detailsInfo.humidityinf} </p>
  </div>
</div>
)}

export default Details
