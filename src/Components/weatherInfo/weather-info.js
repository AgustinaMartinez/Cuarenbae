import React, {useState, useEffect}  from 'react';
import './_weather-info.scss';

const WeatherInfo = ({climate, buttonClicked, setButtonClicked}) => {

    const [theWeather, setTheWeather] = useState({
        id: '',
        city: '',
        temperature: '',
        tempMin: '',
        tempMax: '',
        description: '',
        humidity: ''
    });

    useEffect(() => {
        const getData = () => {
            setTheWeather({
                id: climate.id,
                city: climate.name,
                temperature: climate.main.temp,
                tempMin: climate.main.temp_min,
                tempMax: climate.main.temp_max,
                description: climate.weather[0].description,
                humidity: climate.main.humidity
            });

            setButtonClicked(false);
        }
        if(buttonClicked){
            getData();
        }
    }, [climate])

    return (
        <div className="container2">
            <div className="container2__weather" key={theWeather.id}>
                <div className="container2__weather__one">
                    <h2 className="container2__weather__one__title">{theWeather.city}</h2>
                </div>
                <div className="container2__weather__two">
                    <h2 className="container2__weather__two__temp">{theWeather.temperature}°C</h2>
                    <p className="container2__weather__two__minMax"> MIN: {theWeather.tempMin}°C / MÁX: {theWeather.tempMax}°C </p>
                </div>
                <div className="container2__weather__three">
                    <p className="container2__weather__three__description">{theWeather.description}</p>
                    <p className="container2__weather__three__humidity">Humedad del {theWeather.humidity}%</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo;