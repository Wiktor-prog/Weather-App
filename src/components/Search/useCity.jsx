import { useState, useEffect } from 'react'

const CITY_KEY = "city"
const CITY_INFO_KEY = "cityInfo"

export const useCity = () => {
  const [city, setCity] = useState ( () => {
    const saveCity = localStorage.getItem(CITY_KEY);
    const parsedCity = JSON.parse(saveCity);
    return parsedCity || "";
  });
  
  useEffect(() => {
    window.localStorage.setItem(CITY_KEY, JSON.stringify(city))
  }, [city]);

  return [city, setCity]
}


export const useCityInfo = () =>  {
  const [cityInfo, setCityInfo] = useState ( () => {
    const saveInfo = localStorage.getItem(CITY_INFO_KEY);
    const parsedInfo = JSON.parse(saveInfo);
    return parsedInfo || "";
  })

  useEffect(() => {
    window.localStorage.setItem(CITY_INFO_KEY, JSON.stringify(cityInfo))
  }, [cityInfo])

  return [cityInfo, setCityInfo]
}