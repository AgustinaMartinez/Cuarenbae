import React, {useState, useEffect}  from 'react';
import {Link} from 'react-router-dom';
import {getTime} from '../../Services/time-service';
import time from '../../Mock/time.json';
import '../navbar/_navbar.scss';

const Header = props => {

    const [time, setTime] = useState([]);

    const getTheTime = async () => {
        const data = await getTime();
        setTime({
            hour: data.formatted
        })
    } 

    useEffect(() => {  
        getTheTime();
    },[])
    
    return (
        <nav className="navbar">
        <div className="navbar__1">
            <button className="navbar__1__button" onClick={props.showMenu}>
                <img className="navbar__1__button__bars" alt="bars" src="/Assets/bars.png"></img>
            </button>
            <Link to="/"><img className="navbar__1__logo" alt="logo" src="/Assets/logo.png"></img></Link>
            <div className="navbar__1__container">
                <input type="text" className="navbar__1__container__search" placeholder="Buscar"></input>
                <button className="navbar__1__container__button">
                    <img src="/Assets/search_icon.svg" className="navbar__1__container__button__img" alt="search"></img>
                </button>
            </div>
        </div>
        <div className="navbar__2">
            <ul className="navbar__2__list">
                <li className="navbar__2__list__item fecha">{time.hour}</li>
                <li className="navbar__2__list__item"><span className="navbar--2__list__item--color"> Dólar </span> BNA: <span>$63,75 / $68,75</span> Blue: <span>$108,00 / $118,00</span></li>
                <Link to="/photos" className="navbar__2__list__item--link"><li className="navbar__2__list__item">Galería de imágenes</li></Link>
                <a href="https://www.infobae.com/newsletter/" className="navbar__2__list__item--link"><li className="navbar__2__list__item">Registrate al Newsletter</li></a>
            </ul>
        </div>
    </nav>
    )
};

export default Header;