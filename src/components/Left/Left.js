import React from 'react';

import './Left.scss';

export default function Left(props){
    const { foto,nombre,profesion} = props;

    return (
        <div className='left'>
            <div className='left__foto'>
                <img src={foto}></img>
            </div>
            <span className='left__nombre'><b>{nombre}</b></span>
            <span className='left__profesion'>{profesion}</span>
            <div className='left__botons'>
                <a href='CVAjitziQuintana.pdf' target="_blank" className='btn btn--primary'>Curriculum</a>
                <a href='PublicKeyAQR.der' className='btn btn--primary'>Llave publica</a>
            </div>
        </div>
    )
}