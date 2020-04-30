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
      <video className="header__video" type="video/mp4" src="/Assets/cover_video.mp4" autoPlay loop>
        <p className="header__video__comment">Video ilustrativo</p>
      </video>
      <a href="https://www.clima.com/argentina/cordoba/cordoba" className="header__weather"><img className="header__weather--img" src="https://w.bookcdn.com/weather/picture/4_18277_1_4_4615e8_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=582&anc_id=8929" alt="weather"></img></a>
      <img className="header__ads" src="/Assets/ads.png" alt="advertisement"></img>
    </header>
  );
}

export default Cover;