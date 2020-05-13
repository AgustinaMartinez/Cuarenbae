import {configApiWeather} from '../Config/config';
import weatherMock from '../Mock/weather.json';

    export const getFetchData = async () => {
        const res = await fetch(`${configApiWeather.url}?q=${configApiWeather.city},${configApiWeather.state},${configApiWeather.country}&lang=${configApiWeather.lang}&units=${configApiWeather.units}&appid=${configApiWeather.api_key}`);
        const data = await res.json();
        return data;
    }

    export const getWeather = () => {
        console.log(process.env.REACT_APP_MOCK_WEATHER, "hola")
        return process.env.REACT_APP_MOCK_WEATHER === "true" ? weatherMock : getFetchData();
    }