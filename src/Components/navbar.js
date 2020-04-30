import React, {Component} from 'react';
import Menu from './menu';

class Header extends Component{

    state = {
        MenuVisible: false,
        Search: false
    }

    showMenu = () => {
        this.setState({MenuVisible: !this.state.MenuVisible})
    }

    search = () => {
        //if (event.keyCode==13 && value!=="")
        this.setState({Search: !this.state.Search})
    }

    render(){
        const MenuVisible = this.state.MenuVisible;

        return(
            <nav className="navbar">
                <div className="navbar--1">
                    <button className="navbar--1__button" onClick={this.showMenu}>
                        <img className="navbar--1__button__bars" alt="bars" src="/Assets/bars.png"></img>
                    </button>
                    <Menu className={`navbar${MenuVisible?'__yes':''}`}/>
                    <img className="navbar--1__logo" alt="logo" src="/Assets/logo.png"></img>
                    <div className="navbar--1__container">
                        <input type="text" className="navbar--1__container__search" placeholder="Buscar"></input>
                        <button className="navbar--1__container__button" onClick={this.search}>
                            <img src="/Assets/search_icon.svg" className="navbar--1__container__button__img" alt="search"></img>
                        </button>
                    </div>
                </div>
                <div className="navbar--2">
                    <ul className="navbar--2__list">
                        <li className="navbar--2__list--item fecha"> Jueves 30 de Abril de 2020 </li>
                        <li className="navbar--2__list--item"><span className="navbar--2__list--item--color"> Dólar </span> BNA: <span>$63,75 / $68,75</span> Blue: <span>$108,00 / $118,00</span></li>
                        <li className="navbar--2__list--item"><a href="https://www.infobae.com/podcasts/" className="navbar--2__list--item--link">Podcasts Infobae</a></li>
                        <li className="navbar--2__list--item"><a href="https://www.infobae.com/newsletter/" className="navbar--2__list--item--link">Registrate al Newsletter</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;