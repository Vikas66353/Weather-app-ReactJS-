import React from "react";
import { useState} from "react";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";
import {FaSearch} from "react-icons/fa";

const AppProvider = React.createContext();

const Weather = () => {
  const [loading, setLoading] = useState(false);
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastWeatherData, setForecastWeatherData] = useState(null);
  const [search,setSearch]=useState(null);
  const [city,setCity]=useState(null);
  let foreApiKey="19f3fcf03e554ecea42105200222906";
  var foreData;
  
  const forecastURL ="https://api.weatherapi.com/v1/forecast.json?key=";

  async function fetchData() {
    setLoading(true);
    try{
      foreData = await fetch(forecastURL+foreApiKey+"&q="+search+"&days=6&aqi=no&alerts=no", {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }}).then((res) => {
        setLoading(false);
        return res.json();
      });
    }
    catch(error){
      console.log(error);
    }
    setCurrentWeatherData(foreData.current);
    setForecastWeatherData(foreData.forecast.forecastday);
  }

  const handleClick=()=>{
    fetchData();
    setCity(search.charAt(0).toUpperCase()+search.slice(1));
    setSearch("");
  }
  



  if (loading) {
    return (
      <div className="loading-container">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <AppProvider.Provider value={forecastWeatherData}>
    <div className="container">
       <nav className="main-nav">
       <h1>Weather Report</h1>
       </nav>
       <div className="search-container">
        <div className="search-bax">
        <input type="text" placeholder="enter city name" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={handleClick}><FaSearch className="search-icon"/></button>
        </div>
      </div>

      {city&&currentWeatherData&&<div>
      <div className="current-weather-container">
      {currentWeatherData && (
            <WeatherCard city={city} currentWeatherData={currentWeatherData} forecastWeatherData={forecastWeatherData}/>
          )}
      </div>
      <div className="forecast-weather-container">
      {forecastWeatherData && <Forecast forecastWeatherData={forecastWeatherData}/>}
      </div>
      </div>}
        </div>
    </AppProvider.Provider>
  );
};

export default Weather;

export {AppProvider}
