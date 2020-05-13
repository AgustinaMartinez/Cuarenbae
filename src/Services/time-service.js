import {configApiTime} from '../Config/config';
import timeMock from '../Mock/time.json';

export const getFetchData = async () => {
    const res = await fetch(`${configApiTime.url}?by=${configApiTime.by}&zone=${configApiTime.zone}&format=${configApiTime.format}&key=${configApiTime.api_key}`);
    const data = await res.json();
    return data;
}

export const getTime = () => {
    console.log(process.env.REACT_APP_MOCK_TIME, "holis")
    return process.env.REACT_APP_MOCK_TIME === "true" ? timeMock : getFetchData();
}