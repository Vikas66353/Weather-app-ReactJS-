const WeatherCard = ({currentWeatherData,forecastWeatherData,city }) => {
  return (
    <>

          <div className="current-details">
            <div className="current-temp">
              <h1>{city}</h1>
              <h2>
                {currentWeatherData.temp_c}
                <sup>o</sup>
              </h2>
              <h2>
              <img src={currentWeatherData.condition.icon} alt=""/>
                {currentWeatherData.condition.text}
              </h2>
            </div>
            <div className="current-weather-details">
              <div>
                <span>Humidity</span>
                <span>{currentWeatherData.humidity}</span>
              </div>
              <div>
                <span>Wind</span>
                <span>
                  {currentWeatherData.wind_degree}
                  <span>&#176;</span>
                </span>
              </div>
              <div>
                <span>Visibility</span>
                <span>{currentWeatherData.vis_km}</span>
              </div>
              <div>
                <span>Max Temp.</span>
                <span>{forecastWeatherData[0].day.maxtemp_c}<sup>o</sup></span>
              </div>
              <div>
                <span>Min Temp.</span>
                <span>{forecastWeatherData[0].day.mintemp_c}<sup>o</sup></span>
                
              </div>
              <div>
                <span>Pressure</span>
                <span>{currentWeatherData.pressure_mb}</span>
              </div>
              <div>
                <span>Sunrise Time</span>
                <span>{forecastWeatherData[0].astro.sunrise}</span>
              </div>
              <div>
                <span>Sunset Time</span>
                <span>{forecastWeatherData[0].astro.sunset}</span>
              </div>
            </div>
          </div>
    </>
  );
};
export default WeatherCard;
