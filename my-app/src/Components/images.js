import React from 'react';
import buyMasks from '../../public/Assets/buy-masks';
import doctor from '../../public/Assets/doctor.jpg';
import kidPlaying from '../../public/Assets/kid-playing.jpg';
import mask from '../../public/Assets/mask.jpg';
import socialMedia from '../../public/Assets/social-media.jpg';
import work from '../../public/Assets/work.jpg';
import workout from '../../public/Assets/workout.jpg';
import zoom from '../../public/Assets/zoom.jpg';

function Images(){
    return(
      <div className="images">
          <div className="buy-masks"><img alt="buy-masks" src={buyMasks}/><p>Vendedores ambulantes pasan de vender juguetes y medias a vender barbijos y alcohol en gel.</p></div>
          <div className="doctor"><img alt="doctor" src={doctor}/><p>Vecinos de Nueva Córdoba salen a sus balcones a aplaudir a los profesionales de la salud.</p></div>
          <div className="kid-playing"><img alt="kid-playing" src={kidPlaying}/><p>Niños de España pueden salir a jugar y pasear por una hora con la supervisión de un solo adulto.</p></div>
          <div className="mask"><img alt="mask" src={mask}/><p>Te mostramos los moldes para hacer tus propios tapabocas: todos los tamaños y colores.</p></div>
          <div className="social-media"><img alt="social-media" src={socialMedia}/><p>Estudio revela que se multiplicó el uso del celular y las redes sociales durante la cuarentena.</p></div>
          <div className="work"><img alt="work" src={work}/><p>Tips para trabajar desde casa: las empresas buscan implementar el Work From Home.</p></div>
          <div className="workout"><img alt="workout" src={workout}/><p>Cómo seguir saludable: la actividad física se ha reducido en un 40% desde la pandemia.</p></div>
          <div className="zoom"><img alt="zoom" src={zoom}/><p>Las universidades y empresas buscan estar comunicados a través de la plataforma Zoom.</p></div>
      </div>
    )
}

export default Images;