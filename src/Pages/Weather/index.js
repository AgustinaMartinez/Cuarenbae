import React from 'react';
import Layout from '../../Components/layout/layout';
import WeatherForm from '../../Components/weatherForm/weather-form';
import WeatherInfo from '../../Components/weatherInfo/weather-info';
import Footer from '../../Components/footer/footer';
import './_weather-page.scss';

const WeatherPage = () => {

    return(
        <div className="page">
            <Layout/>
            <div className="page__container">
                <WeatherForm className="page__container__form"/>
                <img src="/Assets/right_arrow.svg" alt="rigth arrow"></img>
                <WeatherInfo className="page__container__info"/>
            </div>
            <Footer/>
        </div>
    )
}

export default WeatherPage;