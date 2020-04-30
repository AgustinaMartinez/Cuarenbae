import React, {Component} from 'react';

class Menu extends Component{

    render() {
        return( 
            <div className="container__menu">
                <button className="container__menu__button">
                    <img src="/Assets/close_icon.svg" className="container__menu__button__icon" alt="close menu"></img>
                </button>
                <ul className="container__menu__list">
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
            </div>
        )
    }
}

export default Menu;