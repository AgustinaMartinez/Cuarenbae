import React from 'react';
import '../Styles/_menu.scss';

const menu = props => ( 
    <div className="menu">
        <button className="menu__button" onClick={props.hideMenu}>
            <img src="/Assets/close_icon.svg" className="menu__button__icon" alt="close menu"></img>
        </button>
        <ul className="menu__list">
            <li><a href="http://localhost:3000/">ARGENTINA</a></li>
            <li><a href="http://localhost:3000/">AMÉRICA</a></li>
            <li><a href="http://localhost:3000/">TENDENCIAS</a></li>
            <li><a href="http://localhost:3000/">DEPORTES</a></li>
            <li><a href="http://localhost:3000/">POLÍTICA</a></li>
            <li><a href="http://localhost:3000/">SOCIEDAD</a></li>
            <li><a href="http://localhost:3000/">TECNO</a></li>
            <li><a href="http://localhost:3000/">TURISMO</a></li>
            <li><a href="http://localhost:3000/">SALUD</a></li>
            <li><a href="http://localhost:3000/">CULTURA</a></li>
        </ul>
        <img className="menu__logo" alt="logo" src="/Assets/logo2.png"></img>
    </div>
);

export default menu;