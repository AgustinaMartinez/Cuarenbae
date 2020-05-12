import React, {useState, useEffect} from 'react';
import './_weather-info.scss';

const WeatherInfo = () => {

    const [weather, setWeather] = useState([]);



    return (
        <div className="container2">
            <div className="container2__weather" key={weather.id}>
                <div className="container2__weather__one">
                    <h2 className="container2__weather__one__title">{weather.city}</h2>
                </div>
                <div className="container2__weather__two">
                    <h2 className="container2__weather__two__temp">{weather.temperature}°C</h2>
                    <p className="container2__weather__two__minMax"> MIN: {weather.tempMin}°C / MÁX: {weather.tempMax}°C </p>
                </div>
                <div className="container2__weather__three">
                    <p className="container2__weather__three__description">{weather.description}</p>
                    <p className="container2__weather__three__humidity">Humedad del {weather.humidity}%</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo;