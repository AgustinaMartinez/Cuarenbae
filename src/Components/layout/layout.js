import React, { useState, Fragment } from 'react';
import Navbar from '../navbar/navbar';
import Menu from '../menu/menu';
import Backdrop from '../backdrop/backdrop';
import Footer from '../footer/footer';

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

    return (
        <Fragment>
            <Navbar showMenu={showMenu}/>
            {menu && <Menu hideMenu={hideMenu}/>}
            {menu && <Backdrop/>}
            <Footer/>
            {props.children}
        </Fragment> 
    )
}

export default Layout;