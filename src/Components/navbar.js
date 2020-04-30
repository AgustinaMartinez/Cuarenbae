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
                <button className="navbar__button" onClick={this.showMenu}>
                    <img className="navbar__button__bars" alt="bars" src="/Assets/bars.png"></img>
                </button>
                <Menu className={`navbar${MenuVisible?'__yes':''}`}/>
                <img className="navbar__logo" alt="logo" src="/Assets/logo.png"></img>
                <div className="navbar__container">
                    <input type="text" className="navbar__container__search" placeholder="Buscar"></input>
                    <button className="navbar__container__button" onClick={this.search}>
                        <img src="/Assets/search_icon.svg" className="navbar__container__button__img" alt="search"></img>
                    </button>
                </div>
            </nav>
        )
    }
}

export default Header;