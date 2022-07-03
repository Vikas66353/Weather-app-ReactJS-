import React, { useContext } from "react";
import {AppProvider} from './Weather'
import { FaRegWindowClose } from "react-icons/fa";

const ForecastModal=({closeModal,id})=>{
    const forecastData=useContext(AppProvider)
    return (
        <div className="forecastModalContainer">
            <div className="forecastModal">
            <nav>
                <h2>{forecastData[id].date}</h2>
                <button className="close" onClick={()=>closeModal()}><FaRegWindowClose className="close-icon"/></button>
            </nav>
            <div className="forecastModalContent">
            <div>
                <span>Max Temp.</span>
                <span>{forecastData[id].day.maxtemp_c}
                    <sup>o</sup></span>
              </div>
              <div>
                <span>Minimum Temp.</span>
                <span>
                {forecastData[id].day.mintemp_c}
                    <sup>o</sup>
                  <span>&#176;</span>{" "}
                </span>
              </div>
              <div>
                <span>Wind</span>
                <span>{forecastData[id].day.maxwind_kph}</span>
              </div>
              <div>
                <span>Humidity</span>
                <span>{forecastData[id].day.avghumidity}<sup>o</sup></span>
              </div>
              <div>
                <span>Weather</span>
                <span>{forecastData[id].day.condition.text}</span>
                
              </div>
              <div>
                <span>Sunrise Time</span>
                <span>{forecastData[id].astro.sunrise}</span>
              </div>
              <div>
                <span>Sunset Time</span>
                <span>{forecastData[id].astro.sunset}</span>
              </div>
            </div>
            </div>

        </div>
    )
}

export default ForecastModal;