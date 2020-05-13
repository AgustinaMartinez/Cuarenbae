import React from 'react';
import Alert from '../alert/alert';

import './_input.scss';

const Input = props => {

    return(
        <div className="container">
            <input className="container__input" 
                type={props.type} 
                name={props.name} 
                placeholder={props.placeholder} 
                autoFocus={props.autoFocus}
                onChange={props.onChange}
            />
            {props.alert && <Alert p={props.message}/>}
        </div>
    )
}

export default Input;