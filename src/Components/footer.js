import React from 'react';
import '../Styles/_footer.scss';

const footer = () => (
    <footer className="footer">
        <div className="footer__bar">
            <div className="footer__bar__icons">
                <a href="http://localhost:3000/"><img className="footer__bar__icons__fb" src="/Assets/icon_facebook.svg" alt="facebook icon"></img></a>
                <a href="http://localhost:3000/"><img className="footer__bar__icons__tw" src="/Assets/icon_twitter.svg" alt="twitter icon"></img></a>
                <a href="https://www.linkedin.com/in/agustina-mart%C3%ADnez-4818bb150/"><img className="footer__bar__icons__lk" src="/Assets/icon_linkedin.svg" alt="linkedin icon"></img></a>
            </div>
            <a href="http://localhost:3000/"><img className="footer__bar__logo" src="/Assets/logo.png" alt="logo"></img></a>
            <a href="https://play.google.com/store"><img className="footer__bar__gp" src="/Assets/google_play.png" alt="google play"></img></a>
        </div>
        <div className="footer__end">
            <div className="footer__end__links">
                <a href="http://localhost:3000/">Mapa del sitio</a>
                <a href="http://localhost:3000/">Ayuda</a>
                <a href="http://localhost:3000/">Términos y condiciones</a>
                <a href="http://localhost:3000/">Suscribirse al diario impreso</a>
                <a href="http://localhost:3000/">Sorteos</a>
            </div>
            <p className="footer__end__comment">Copyright 2020 <span className="footer__end__comment--bold">Cuarenbae</span> | Todos los derechos reservados | Made by Agustina Martínez</p>
        </div>    
    </footer>
)

export default footer;