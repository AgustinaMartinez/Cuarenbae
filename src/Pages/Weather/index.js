import React, {useState} from 'react';
import Layout from '../../Components/layout/layout';
import WeatherForm from '../../Components/weatherForm/weather-form';
import WeatherInfo from '../../Components/weatherInfo/weather-info';
import Footer from '../../Components/footer/footer';
import './_weather-page.scss';

const WeatherPage = () => {

    const [climate, setClimate] = useState({});
    const [buttonClicked, setButtonClicked] = useState(false);

    return(
        <div className="page">
            <Layout/>
            <div className="page__container">
                <WeatherForm className="page__container__form" setClimate={setClimate} setButtonClicked={setButtonClicked}/>
                <img src="/Assets/right_arrow.svg" alt="rigth arrow"></img>
                <WeatherInfo className="page__container__info" climate={climate} buttonClicked={buttonClicked} setButtonClicked={setButtonClicked}/>
            </div>
            <Footer/>
        </div>
    )
}

export default WeatherPage;