import React from 'react';
import Navbar from './Components/navbar';
import Cover from './Components/cover';
import Images from './Components/images';
import './App.scss';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Cover/>
      <Images/>
    </div>
  );
}

export default App;