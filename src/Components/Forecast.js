import React from "react";
import { useState } from "react";
import ForecastModal from "./ForecastModal";

const Forecast = ({ forecastWeatherData }) => {
  const [forecastModal, setForecastModal] = useState(false);
  const [id, setId] = useState(0);
  const openModal = (index) => {
    setId(index);
    setForecastModal(true);
  };

  const closeModal = () => {
    setForecastModal(false);
  };
  return (
    <>
      <div className="forecast">
        {forecastWeatherData.map((weather, index) => {
          return (
            <div className="forecast-card" key={index}>
              <nav>
                <h2>{weather.date}</h2>
              </nav>
              <div className="forecast-card-content">
                <div>
                  <h2>
                    {weather.day.maxtemp_c}
                    <sup>o</sup>
                  </h2>
                  <h2>
                    {weather.day.mintemp_c}
                    <sup>o</sup>
                  </h2>
                  <h2>
                    <img
                      src={weather.day.condition.icon}
                      alt=""
                    />
                    {weather.day.condition.text}
                  </h2>
                </div>
                <button onClick={() => openModal(index)} className="btn">
                  more...
                </button>
              </div>
            </div>
          );
        })}
        {forecastModal && <ForecastModal closeModal={closeModal} id={id} />}
      </div>
    </>
  );
};

export default Forecast;
