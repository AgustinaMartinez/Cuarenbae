import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {getWeather} from '../../Services/weather-service';
import weather from '../../Mock/weather.json';
import './_weather.scss';

const Weather = (props) => {
    
    const [weather, setWeather] = useState({});

    const getData = async () => {
        const data = await getWeather();
        console.log(data);
        setWeather({
            id: data.id,
            city: data.name,
            temperature: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            description: data.weather[0].description,
            humidity: data.main.humidity
        });
    }

    useEffect(() => { 
        getData();
    }, []);

    return (
        <div className="weather" key={weather.id}>
          <div className="weather__one">
              <h2 className="weather__one__title">{weather.city}</h2>
          </div>
          <div className="weather__two">
              <h2 className="weather__two__temp">{weather.temperature}°C</h2>
              <p className="weather__two__minMax"> MIN: {weather.tempMin}°C / MÁX: {weather.tempMax}°C </p>
          </div>
          <div className="weather__three">
              <p className="weather__three__description">{weather.description}</p>
              <p className="weather__three__humidity">Humedad del {weather.humidity}%</p>
          </div>
          <Link to="/weather"><button className="weather__button">Conoce el clima de tu ciudad</button></Link>
        </div>
    )
}

export default Weather;