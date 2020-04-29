import React, {Component} from 'react';
import logo from '../../public/Assets/logo.png';
import bars from '../../public/Assets/bars.png';

class Header extends Component{
    
    state ={
        MenuVisible: false
    }

    openAndCloseMenu = () => {
        this.setState({MenuVisible: !this.state.MenuVisible})
    }

    /*icon(){
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'grey' :'red',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }
    */

    render(){
        return(
            <header>
                <nav className="navbar">
                    <div className="icons">
                        <a onClick={this.openAndCloseMenu}><img className="bars" alt="bars" src={bars}></img></a>
                        <img className="logo" alt="logo" src={logo}></img>
                    </div>
                    <ul className="navbar_menu">
                        <li><a href="#">ARGENTINA</a></li>
                        <li><a href="#">AMÉRICA</a></li>
                        <li><a href="#" href="#">TENDENCIAS</a></li>
                        <li><a href="#">DEPORTES</a></li>
                        <li><a href="#">POLÍTICA</a></li>
                        <li><a href="#">SOCIEDAD</a></li>
                        <li><a href="#">TECNO</a></li>
                        <li><a href="#">TURISMO</a></li>
                        <li><a href="#">SALUD</a></li>
                        <li><a href="#">CULTURA</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;