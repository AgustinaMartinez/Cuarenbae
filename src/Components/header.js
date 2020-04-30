import React, {Component} from 'react';
import Menu from './menu';

class Header extends Component{

    state = {
        MenuVisible: false
    }

    showMenu = () => {
        this.setState({MenuVisible: !this.state.MenuVisible})
    }

    render(){
        const MenuVisible = this.state.MenuVisible;
        return(
            <header>
                <nav className="navbar">
                    <button className="navbar__button" onClick={this.showMenu}>
                        <img className="navbar__button__bars" alt="bars" src="/Assets/bars.png"></img>
                    </button>
                    <Menu className={`navbar${MenuVisible?'__yes':''}`}/>
                    <img className="navbar__logo" alt="logo" src="/Assets/logo.png"></img>
                    <div className="navbar__container">
                        <input type="text" className="navbar__container__search" placeholder="Buscar"></input>
                        <img src="/Assets/search_icon.svg" className="navbar__container__img" alt="search"></img>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;