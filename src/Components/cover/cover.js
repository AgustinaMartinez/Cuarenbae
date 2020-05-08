import React from 'react';
import '../cover/_cover.scss';

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
    <a href="https://www.clima.com/argentina/cordoba/cordoba" className="header__weather"><img className="header__weather__img" src="https://w.bookcdn.com/weather/picture/4_18277_1_4_4615e8_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=582&anc_id=8929" alt="weather"></img></a>
  </header>
);

export default cover;