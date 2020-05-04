import React, { Component } from 'react';
import Navbar from './Components/navbar';
import Menu from './Components/menu';
import Backdrop from './Components/backdrop';
import Cover from './Components/cover';
import Aside from './Components/aside';
import SectionOne from './Components/section-one';

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

  hideMenu = () => {
    this.setState({MenuVisible: false})
  }

  render(){
    let menu;
    let backdrop;

    if(this.state.MenuVisible === true){
      menu = <Menu hideMenu={this.hideMenu}/>;
      backdrop = <Backdrop/>;
    }

    return (
      <div>
        <Navbar showMenu={this.showMenu}/>
        {menu}
        {backdrop}
        <Cover/>
        <Aside/>
        <SectionOne/>
      </div>
    );
  }  
}

export default App;