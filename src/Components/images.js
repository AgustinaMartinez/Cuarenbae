import React from 'react';
import '../Styles/_images.scss';

const images = () => (
  <div className="images">
      <div className="images__buy-masks"><img alt="buy-masks" src="/Assets/buy-masks.jpg"/><p>Vendedores ambulantes pasan de vender juguetes y medias a vender barbijos y alcohol en gel.</p></div>
      <div className="images__doctor"><img alt="doctor" src="/Assets/doctor.jpg"/><p>Vecinos de Nueva Córdoba salen a sus balcones a aplaudir a los profesionales de la salud.</p></div>
      <div className="images__kid-playing"><img alt="kid-playing" src="/Assets/kid-playing.jpg"/><p>Niños de España pueden salir a jugar y pasear por una hora con la supervisión de un solo adulto.</p></div>
      <div className="images__mask"><img alt="mask" src="/Assets/mask.jpg"/><p>Te mostramos los moldes para hacer tus propios tapabocas: todos los tamaños y colores.</p></div>
      <div className="images__social-media"><img alt="social-media" src="/Assets/social-media.jpg"/><p>Estudio revela que se multiplicó el uso del celular y las redes sociales durante la cuarentena.</p></div>
      <div className="images__work"><img alt="work" src="/Assets/work.jpg"/><p>Tips para trabajar desde casa: las empresas buscan implementar el Work From Home.</p></div>
      <div className="images__workout"><img alt="workout" src="/Assets/workout.jpg"/><p>Cómo seguir saludable: la actividad física se ha reducido en un 40% desde la pandemia.</p></div>
      <div className="images__zoom"><img alt="zoom" src="/Assets/zoom.jpg"/><p>Las universidades y empresas buscan estar comunicados a través de la plataforma Zoom.</p></div>
  </div>
);

export default images;