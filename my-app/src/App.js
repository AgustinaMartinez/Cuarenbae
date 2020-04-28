import React from 'react';
import './App.css';


function HelloWorld() {
  return (
    <div>25°C</div>
  );
}

function App() {
  return (
    <div>Córdoba, 27 de abril del 2020 <HelloWorld/></div>
  );
}


export default App;