import React, {useState} from 'react';
import Navbar from '../navbar/navbar';
import Menu from '../menu/menu';
import Backdrop from '../backdrop/backdrop';

const Layout = (props) => {

    const [menu, setMenu] = useState(false);

    const showMenu = () => {
        setMenu((prevState) => {
        return {menu: !prevState.menu}
        });
    }

    const hideMenu = () => {
        setMenu(false);
    }

    return(
        <div className="layout">
            <Navbar className="layout__navbar" showMenu={showMenu}/>
            {menu && <Menu className="layout__menu" hideMenu={hideMenu}/>}
            {menu && <Backdrop className="layout__backdrop"/>}
            {props.children}
        </div>
    )
}

export default Layout;