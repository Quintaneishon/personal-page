import React from 'react';
import { IoLogoFacebook,IoIosMail,IoLogoGithub,IoLogoLinkedin } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";

import './Contacto.scss';

export default function Contacto(props){
    const {datos} = props;
    return(
        <div className='contacto'>
            <div className='row'>
                <div className='col-1-of-4'>
                    <Contact link={datos[0].url} color='#4267b2'><IoLogoFacebook /></Contact>
                </div>
                <div className='col-1-of-4'>
                    <Contact link={"mailto:"+datos[1].url} color='#d93025'><IoIosMail /></Contact>
                </div>
                <div className='col-1-of-4'>
                    <Contact link={datos[2].url} color='#24292e'><IoLogoGithub /></Contact>
                </div>
                <div className='col-1-of-4'>
                    <Contact link={datos[3].url} color='#0077b5'><IoLogoLinkedin /></Contact>
                </div>
            </div>
            <div className='row'>
                <div className='col-1-of-4'>
                    <Contact link={datos[4].url} color='#1db954'><FaSpotify /></Contact>
                </div>
            </div>
        </div>
    )
}

function Contact(props){
    const { link,color,children } = props;

    return(
        <a className='contact' style={{backgroundColor: color}} href={link} target="_blank">
            <div className='contact__icon'>{children}</div>
        </a>
    )
}