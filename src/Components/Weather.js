import React from "react";
import { useState, useEffect,useContext } from "react";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";

const AppProvider = React.createContext();

const currentURL =
  "https://api.openweathermap.org/data/2.5/weather?q=bengaluru&appid=47c54d65d5acfce756053187f746677b";
const forecastURL =
  "https://api.weatherapi.com/v1/forecast.json?key=19f3fcf03e554ecea42105200222906&q=bengaluru&days=6&aqi=no&alerts=no";


const Weather = () => {
  const [loading, setLoading] = useState(true);
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastWeatherData, setForecastWeatherData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      var foreData = await fetch(forecastURL, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }}).then((res) => {
        setLoading(false);
        return res.json();
      });
      var curData = await fetch(currentURL).then((res) => {
        setLoading(false);
        return res.json();
      });
      setCurrentWeatherData(curData);
      setForecastWeatherData(foreData.forecast.forecastday);
      console.log(forecastWeatherData[0].date)
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <AppProvider.Provider value={forecastWeatherData}>
       <h1>Weather Report</h1>
      <div className="container">
        <div className="weather-details">
          {currentWeatherData && (
            <WeatherCard currentWeatherData={currentWeatherData} />
          )}
          {forecastWeatherData && <Forecast forecastWeatherData={forecastWeatherData}/>}
          
        </div>
      </div>
    </AppProvider.Provider>
  );
};

export default Weather;

export {AppProvider}
