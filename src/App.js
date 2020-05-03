import React, { Component } from 'react';
import Navbar from './Components/navbar';
import Menu from './Components/menu';
import Backdrop from './Components/backdrop';
import Cover from './Components/cover';
import Images from './Components/images';

class App extends Component {

  state = {
    MenuVisible: false,
    Search: false
  }

  showMenu = () => {
    this.setState((prevState) => {
      return {MenuVisible: !prevState.MenuVisible}
    });
  }

  render(){
    let menu;
    let backdrop;

    if(!this.state.MenuVisible === true){
      menu = <Menu/>;
      backdrop = <Backdrop/>;
    }

    return (
      <div>
        <Navbar showMenu={this.showMenu}/>
        {menu}
        {backdrop}
        <Cover/>
        <Images/>
      </div>
    );
  }  
}

export default App;