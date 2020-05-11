import {configApiWeather} from '../Config/config';
import weatherMock from '../Mock/weather.json';

    export const getFetchData = async () => {
        const data = await fetch(`${configApiWeather.url}?q=${configApiWeather.city},${configApiWeather.state},${configApiWeather.country}&lang=${configApiWeather.lang}&units=${configApiWeather.units}&appid=${configApiWeather.api_key}`);
        const climate = await data.json();
        return climate;
    }

    export const getWeather = () => {
        return process.env.WEATHER_MOCK === "true" ? weatherMock : getFetchData();
    }