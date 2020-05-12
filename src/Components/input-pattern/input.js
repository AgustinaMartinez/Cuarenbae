import React from 'react';
import './_input.scss';

const Input = props => {

    return(
        <div className="container">
            <input className="container__input" type="text" name={props.name} placeholder={props.placeholder} autoFocus></input>
        </div>
    )
}

export default Input;