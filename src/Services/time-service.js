import {configApiTime} from '../Config/config';
import timeMock from '../Mock/time.json';

export const getFetchData = async () => {
    const res = await fetch(`${configApiTime.url}?by=${configApiTime.by}&zone=${configApiTime.zone}&format=${configApiTime.format}&key=${configApiTime.api_key}`);
    const data = await res.json();
    return data;
}

export const getTime = () => {
    console.log(process.env.TIME_MOCK, "holis")
    return process.env.TIME_MOCK === "true" ? timeMock : getFetchData();
}