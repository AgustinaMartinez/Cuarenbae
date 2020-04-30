import React from 'react';

const Cover = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__container__title"><span className="header__container__title--color">Covid-19. </span>Cómo combatir las trampas de nuestra mente en cuarentena</h1>
        <h5 className="header__container__subtitle">Cambios de ánimo y ansiedad, las consultas que predominan en el diván online de los psicólogos ante
          el encierro.
        </h5>
        <p className="header__container__comment">María Ayuso</p>
      </div> 
      <video className="header__video" src="https://d20x44kddxtp6m.cloudfront.net/wp-lanacionar/2020/04/29/5ea9dcefc9e77c0001f7ce9e/t_74ea791514be41f4a5c01237f7b56c34_name_LN___A_FONDO___TERAPIA_CUARENTENA_Apertura/file_1280x720-2000-v3_1.mp4"></video>
      <img className="header__ads" src="/Assets/ads.png" alt="advertisement"></img>
    </header>
  );
}

export default Cover;