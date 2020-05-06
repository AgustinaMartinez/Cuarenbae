import React, { useState } from 'react';
import Navbar from './Components/navbar/navbar';
import Menu from './Components/menu/menu';
import Backdrop from './Components/backdrop/backdrop';
import Cover from './Components/cover/cover';
import Aside from './Components/aside/aside';
import SectionOne from './Components/section-one/section-one';
import Footer from './Components/footer/footer';

const App = () => {

  const [state, setState] = useState({
      MenuVisible: false,
      Search: false
  });

  const showMenu = () => {
    setState((prevState) => {
      return {MenuVisible: !prevState.MenuVisible}
    });
  }

  const hideMenu = () => {
    setState({MenuVisible: false});
  }

  return (
    <div>
      <Navbar showMenu={showMenu}/>
      {state.MenuVisible && <Menu hideMenu={hideMenu}/>}
      {state.MenuVisible && <Backdrop/>}
      <Cover/>
      <Aside/>
      <SectionOne/>
      <Footer/>
    </div>
  );
}

export default App;