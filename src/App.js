import React, { Component } from 'react';
import Navbar from './Components/navbar/navbar';
import Menu from './Components/menu/menu';
import Backdrop from './Components/backdrop/backdrop';
import Cover from './Components/cover/cover';
import Aside from './Components/aside/aside';
import SectionOne from './Components/section-one/section-one';
import Footer from './Components/footer/footer';

class App extends Component {

  state = {
    MenuVisible: false,
    Search: false
  };

  showMenu = () => {
    this.setState((prevState) => {
      return {MenuVisible: !prevState.MenuVisible}
    });
  }

  hideMenu = () => {
    this.setState({MenuVisible: false});
  }

  render(){
    return (
      <div>
        <Navbar showMenu={this.showMenu}/>
        {this.state.MenuVisible && <Menu hideMenu={this.hideMenu}/>}
        {this.state.MenuVisible && <Backdrop/>}
        <Cover/>
        <Aside/>
        <SectionOne/>
        <Footer/>
      </div>
    );
  }  
}

export default App;