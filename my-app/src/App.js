import React from 'react';
import Header from './Components/header';
import Images from './Components/images';
import './App.scss';


/*
function Section(){
  return (
    <section>
      <h1>Salidas recreativas: "Este podría ser el peor momento para aumentar la circulación de la gente", planteó el ministro de Salud porteño.</h1>
      <h5>Fernán Quirós aseguró que detectaron un aceleramiento de casos en la Ciudad de Buenos Aires y en virtud de ello decidieron descartar la posibilidad de que las personas salgan de sus casas a dar un paseo.</h5>
      
    </section>
  )
}
*/
/*

*/
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