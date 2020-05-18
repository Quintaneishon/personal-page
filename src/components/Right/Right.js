import React from 'react';
import Contacto from '../Contacto';
import Education from '../Education';
import Jobs from '../Jobs';
import Hobbies from '../Hobbies';
import Intereses from '../Intereses';

import './Right.scss';

export default function Right(props){
    const {mostrar,datos} = props;
    
    return(
        <div className='right'>
            {(() => {
                switch (mostrar) {
                case "biografia":   return datos.bio;
                case "contacto":   return <Contacto datos={datos.social} />;
                case "academica":   return <Education datos={datos.education} />;
                case "laboral":   return <Jobs datos={datos.experience} />;
                case "hobbies":   return <Hobbies datos={datos.hobbies} />;
                case "intereses":   return <Intereses datos={datos.intereses} />;
                default:      return "sdfsfdsf";
                }
            })()}
        </div>
    )
}