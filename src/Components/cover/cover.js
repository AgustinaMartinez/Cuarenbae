import React, {useEffect, useState} from 'react';
import {getWeather} from '../../Services/weather-service';
import '../cover/_cover.scss';

const Cover = () => {
  const [weather, setWeather] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await getWeather();
            console.log(data);
            setWeather({
                id: data.weather.id,
                city: data.name,
                temperature: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                description: data.weather[0].description,
                humidity: data.main.humidity
            });
        };
        getData();
    }, []);

    return (
      <header className="header">
        <div className="header__container">
          <a className="header__container__link" href="https://www.lanacion.com.ar/comunidad/terapia-coronavirus-como-combatir-trampas-nuestra-mente-nid2354583"><h1 className="header__container__link__title"><span className="header__container__link__title--color">Covid-19. </span>Cómo combatir las trampas de nuestra mente en cuarentena</h1></a>
          <h5 className="header__container__subtitle">Cambios de ánimo y ansiedad, las consultas que predominan
                                                      en el diván online de los psicólogos ante el encierro.
          </h5>
          <p className="header__container__comment">Por María Ayuso</p>
        </div> 
        <video className="header__video" type="video/mp4" src="/Assets/cover_video.mp4" autoPlay loop></video>
        <div className="header__weather" key={weather.id}>
          <div className="header__weather__one">
              <h2 className="header__weather__one__title">{weather.city}</h2>
          </div>
          <div className="header__weather__two">
              <h2 className="header__weather__two__temp">{weather.temperature}°C</h2>
              <p className="header__weather__two__minMax"> MIN: {weather.tempMin}°C / MÁX: {weather.tempMax}°C </p>
          </div>
          <div className="header__weather__three">
              <p className="header__weather__three__description">{weather.description}</p>
              <p className="header__weather__three__humidity">Humedad del {weather.humidity}%</p>
          </div>
          <button className="header__weather__button">Conoce el clima de tu ciudad</button>
        </div>
      </header>
    )
};

export default Cover;