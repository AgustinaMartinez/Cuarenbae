import React from 'react';
import Header from './Components/header';
import Images from './Components/images';
import './App.scss';

function HelloWorld() {
  return (
    <div>25°C</div>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <div>Córdoba, 27 de abril del 2020 <HelloWorld/></div>
      <Images/>
    </div>
  );
}

export default App;