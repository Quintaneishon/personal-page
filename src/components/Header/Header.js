import React from 'react';
import { IoMdContact,IoIosSchool,IoIosBriefcase,IoIosThumbsUp,IoIosAlbums,IoMdFiling } from "react-icons/io";

import './Header.scss';

export default function Header(props){
    const {activo} = props;  

    return(
    <div className='header'>
        <Head nombre='biografia' activo={activo}><IoMdContact /></Head>
        <Head nombre='academica' activo={activo}><IoIosSchool /></Head>
        <Head nombre='laboral' activo={activo}><IoIosBriefcase /></Head>
        <Head nombre='intereses' activo={activo}><IoIosThumbsUp /></Head>
        <Head nombre='hobbies' activo={activo}><IoIosAlbums /></Head>
        <Head nombre='contacto' activo={activo}><IoMdFiling /></Head>
    </div>
    );
}

function Head(props){
    const { nombre,activo,children } = props;
    
    return(
        <div className='head'onClick={() => activo(nombre)}>
            <span className='head__nombre'>{nombre}</span>
            <div className='head__icon'>{children}</div>
        </div>
    )
}