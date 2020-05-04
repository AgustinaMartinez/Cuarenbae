import React from 'react';
import '../Styles/_cover.scss';

const cover = () => (
  <header className="header">
    <div className="header__container">
      <h1 className="header__container__title"><span className="header__container__title--color">Covid-19. </span>Cómo combatir las trampas de nuestra mente en cuarentena</h1>
      <h5 className="header__container__subtitle">Cambios de ánimo y ansiedad, las consultas que predominan
                                                  en el diván online de los psicólogos ante el encierro.
      </h5>
      <p className="header__container__comment">María Ayuso</p>
    </div> 
    <video className="header__video" type="video/mp4" src="/Assets/cover_video.mp4" autoPlay loop></video>
    <p className="header__comment">Video ilustrativo</p>
  </header>
);

export default cover;