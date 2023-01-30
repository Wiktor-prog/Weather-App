const API_KEY = "5f120783051b409e82f14337220807"
const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}`

export const getWeatherForCity = (city) => {
  return fetch(`${API_URL}&q=${city}&days=1&aqi=no&alerts=no`)
}