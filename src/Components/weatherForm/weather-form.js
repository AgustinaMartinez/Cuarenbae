import React from 'react';
import {configApiWeather} from '../../Config/config';
import Input from '../input-pattern/input';
import Button from '../button-pattern/button';
import './_weather-form.scss';

const WeatherForm = props => {

    const getFetchData = async event => {

        event.preventDefault();

        const [city, country] = event.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        console.log(cityValue)
        console.log(countryValue)

        props.setButtonClicked(true);
            
        const res = await fetch(`${configApiWeather.url}?q=${cityValue}&${countryValue}&lang=${configApiWeather.lang}&units=${configApiWeather.units}&appid=${configApiWeather.api_key}`);
        const data = await res.json();

        props.setClimate(data)
    }

    return (
        <div className="container">
            <form className="container__form" onSubmit={getFetchData}>
                <Input name="city" placeholder="Escribe el nombre de tu ciudad"/>
                <Input name="country" placeholder="Escribe el nombre de tu país"/>
                <Button/>
            </form>
        </div>
    )
}

export default WeatherForm;