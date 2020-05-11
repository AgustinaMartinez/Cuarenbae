import React from 'react';
import {} from '../layout/layout';


const Form = value => {

    return (
        <form className="form">
            <input className="form" type="text" name="city" placeholder="Escribe la ciudad"></input>
            <input className="form" type="text" name="país" placeholder="Escribe el país"></input>
        </form>
    )
}

export default Form;