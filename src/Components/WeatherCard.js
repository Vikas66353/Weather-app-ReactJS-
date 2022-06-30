const WeatherCard = ({ currentWeatherData }) => {
  return (
    <>

          <div className="current-details">
            <div className="current-temp">
              <h1>Bengaluru</h1>
              <h2>
                {currentWeatherData.main.temp}
                <sup>o</sup>
              </h2>
              <h2>{currentWeatherData.weather[0].main}</h2>
            </div>
            <div className="current-weather-details">
              <div>
                <span>Humidity</span>
                <span>{currentWeatherData.main.humidity}</span>
              </div>
              <div>
                <span>Wind</span>
                <span>
                  {currentWeatherData.wind.speed},{currentWeatherData.wind.deg}
                  <span>&#176;</span>{" "}
                </span>
              </div>
              <div>
                <span>Visibility</span>
                <span>{currentWeatherData.visibility}</span>
              </div>
              <div>
                <span>Max Temp.</span>
                <span>{currentWeatherData.main.temp_max}<sup>o</sup></span>
              </div>
              <div>
                <span>Min Temp.</span>
                <span>{currentWeatherData.main.temp_min}<sup>o</sup></span>
                
              </div>
              <div>
                <span>Pressure</span>
                <span>{currentWeatherData.main.pressure}</span>
              </div>
              <div>
                <span>Sunrise Time</span>
                <span>{currentWeatherData.sys.sunrise}</span>
              </div>
              <div>
                <span>Sunset Time</span>
                <span>{currentWeatherData.sys.sunset}</span>
              </div>
            </div>
          </div>
    </>
  );
};
export default WeatherCard;
