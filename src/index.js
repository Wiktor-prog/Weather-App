import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'

 const API_KEY = "5f120783051b409e82f14337220807"
 const BASE_URL = "http://api.weatherapi.com/v1"

const locationInfo = () => {
  return{
    name: 'LOCATION',
  }
}
const tempInfo = () => {
  return{
    name: 'TEMP',
  }
}

const WeaterInfo = (state,action) => {
  switch (action) {
    case "LOCATION":
      return state = API_KEY;
    case "TEMP": 
      return state = API_KEY;
  }
}

let store = createStore(WeaterInfo);
store.subscribe(() => console.log(store.getState()))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
