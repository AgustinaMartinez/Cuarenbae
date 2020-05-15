import React, {useState} from 'react';
import {configApiWeather} from '../../Config/config';
import Input from '../input-pattern/input';
import Button from '../button-pattern/button';

import './_weather-form.scss';

const WeatherForm = (props) => {

    const [cityAlert, setCityAlert] = useState(false);
    const [countryAlert, setCountryAlert] = useState(false);

    const handleCity = e => {
        setCityAlert(false);
    }

    const handleCountry = e => {
        setCountryAlert(false);
    }

    const getFetchData = async event => {

        event.preventDefault();

        const [city, country] = event.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        if(cityValue === ''){
            setCityAlert(true);
            return false;
        }

        if (countryValue === ''){
            setCountryAlert(true);
            return false;
        }

        try{
            props.setButtonClicked(true);
            
            const res = await fetch(`${configApiWeather.url}?q=${cityValue}&${countryValue}&lang=${configApiWeather.lang}&units=${configApiWeather.units}&appid=${configApiWeather.api_key}`);
            const data = await res.json();

            if(data.cod == 404){
                alert("No se encontró la ciudad o país, por favor intentá de nuevo :)");
                return;
            }

            props.setClimate(data);

        } catch (error){
            console.log(error);
            alert("Hubo un error para procesar tu solicitud, intentá nuevamente.");
        }
    }

    return (
        <div className="container">
            <form className="container__form" onSubmit={getFetchData}>
                <div className="container__form__inputOne">
                    <Input name="city"
                            placeholder="Escribe el nombre de tu ciudad"
                            type="text"
                            onChange={handleCity}
                            autoFocus
                            alert={cityAlert}
                            message="Debe ingresar una ciudad."
                        />
                </div>
                <div className="container__form__inputTwo">
                    <Input name="country"
                        placeholder="Escribe el nombre de tu país"
                        type="text"
                        onChange={handleCountry}
                        alert={countryAlert}
                        message="Debe ingresar un país."
                    />
                </div>
                <Button name="Conocer clima"/>
            </form>
        </div>
    )
}

export default WeatherForm;