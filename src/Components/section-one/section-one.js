import React from 'react';
import '../section-one/_section-one.scss';

const sectionOne = () => (
  <section className="articles">
    <h3 className="articles__title">Noticias</h3>
    <div className="articles__container">
      <div className="articles__container__buy-masks">
        <img alt="buy-masks" src="/Assets/buy-masks.jpg"/>
        <p><span>Crisis. </span>Vendedores ambulantes pasan de vender juguetes y medias a vender barbijos y alcohol en gel.</p>
      </div>
      <div className="articles__container__doctor">
        <img alt="doctor" src="/Assets/doctor.jpg"/>
        <p><span>Orgullo. </span>Vecinos de Nueva Córdoba salen a sus balcones a aplaudir a los profesionales de la salud.</p>
      </div>
      <div className="articles__container__kid-playing">
        <img alt="kid-playing" src="/Assets/kid-playing.jpg"/>
        <p><span>Dispersión. </span>Niños de España pueden salir a jugar y pasear por una hora con la supervisión de un solo adulto.</p>
      </div>
      <div className="articles__container__mask">
        <img alt="mask" src="/Assets/mask.jpg"/>
        <p><span>Ahorro. </span>Te mostramos los moldes para hacer tus propios tapabocas: todos los tamaños y colores.</p>
      </div>
      <div className="articles__container__social-media">
        <img alt="social-media" src="/Assets/social-media.jpg"/>
        <p><span>Social. </span>Estudio revela que se multiplicó el uso de las redes sociales durante la cuarentena.</p>
      </div>
      <div className="articles__container__work">
        <img alt="work" src="/Assets/work.jpg"/>
        <p><span>Trabajo. </span>Tips para trabajar desde casa: las empresas buscan implementar el Work From Home.</p>
      </div>
      <div className="articles__container__workout">
        <img alt="workout" src="/Assets/workout.jpg"/>
        <p><span>Salud. </span>Cómo seguir saludable: la actividad física se ha reducido en un 40% desde la pandemia.</p>
      </div>
      <div className="articles__container__zoom">
        <img alt="zoom" src="/Assets/zoom.jpg"/>
        <p><span>Educación. </span>Las universidades y empresas buscan estar comunicados a través de la plataforma Zoom.</p>
      </div>
      <div className="articles__container__closed-store">
        <img alt="buy-masks" src="/Assets/closed-store.jpg"/>
        <p><span>Economía. </span>Comerciantes preocupados por el cierre de sus locales durante la cuarentena.</p>
      </div>
    </div>
  </section>
);

export default sectionOne;