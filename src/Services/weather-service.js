import {configApiWeather} from '../Config/config';
import weatherMock from '../Mock/weather.json';

    export const getFetchData = async url => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }

    export const getWeather = () => {
        console.log(process.env.WEATHER_MOCK, "hola")
        return process.env.WEATHER_MOCK === "true" ? getFetchData('../Mock/weather.json') : getFetchData(`${configApiWeather.url}?q=${configApiWeather.city},${configApiWeather.state},${configApiWeather.country}&lang=${configApiWeather.lang}&units=${configApiWeather.units}&appid=${configApiWeather.api_key}`);
    }