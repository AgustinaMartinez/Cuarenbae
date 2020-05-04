import React from 'react';
import '../Styles/_cover.scss';

const cover = () => (
  <header className="header">
    <div className="header__container">
      <a className="header__container__link" href="https://www.lanacion.com.ar/comunidad/terapia-coronavirus-como-combatir-trampas-nuestra-mente-nid2354583"><h1 className="header__container__link__title"><span className="header__container__link__title--color">Covid-19. </span>Cómo combatir las trampas de nuestra mente en cuarentena</h1></a>
      <h5 className="header__container__subtitle">Cambios de ánimo y ansiedad, las consultas que predominan
                                                  en el diván online de los psicólogos ante el encierro.
      </h5>
      <p className="header__container__comment">Por María Ayuso</p>
    </div> 
    <video className="header__video" type="video/mp4" src="/Assets/cover_video.mp4" autoPlay loop></video>
    <p className="header__comment">Video ilustrativo</p>
  </header>
);

export default cover;