import React from 'react';
import Navbar from './Components/navbar';
import Cover from './Components/cover';
import Images from './Components/images';
import './App.scss';

const HelloWorld = () => {
  return (
    <div>25°C</div>
  );
}

const App = () => {
  return (
    <div>
      <Navbar/>
      <Cover/>
      <div>Córdoba, 27 de abril del 2020 <HelloWorld/></div>
      <Images/>
    </div>
  );
}

export default App;