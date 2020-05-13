import React from 'react';
import './_alert.scss';

const Alert = props => (

    <div className="alert">
        <p className="alert__p">Debe ingresar {props.p}</p>
        <img className="alert__icon" src="/Assets/alert_icon.svg" alt="alert icon"></img>
    </div>
);

export default Alert;