import React from 'react';
import { IoIosAmericanFootball,IoLogoPython,IoLogoJavascript,IoIosBasketball,IoIosFootball,IoMdPizza,IoMdMusicalNotes } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import './Intereses.scss';

export default function Intereses(props){
    const { datos } = props;

    return(
        <div className='intereses'>
            <div className='intereses__row'>
                <div className='col-1-of-4'>
                    <Interes nombre={datos[0].name}><IoIosAmericanFootball /></Interes>
                </div>
                <div className='col-1-of-4'>
                    <Interes nombre={datos[1].name}><IoLogoPython /></Interes>
                </div>
                <div className='col-1-of-4'>
                    <Interes nombre={datos[2].name}><IoLogoJavascript /></Interes>
                </div>
                <div className='col-1-of-4'>
                    <Interes nombre={datos[3].name}><FaReact /></Interes>
                </div>
            </div>
            <div className='intereses__row'>
                <div className='col-1-of-4'>
                    <Interes nombre={datos[4].name}><IoIosBasketball /></Interes>
                </div>
                <div className='col-1-of-4'>
                    <Interes nombre={datos[5].name}><IoIosFootball /></Interes>
                </div>
                <div className='col-1-of-4'>
                    <Interes nombre={datos[6].name}><IoMdPizza /></Interes>
                </div>
                <div className='col-1-of-4'>
                    <Interes nombre={datos[7].name}><IoMdMusicalNotes /></Interes>
                </div>
            </div>
        </div>
    )
}

function Interes(props){
    const { nombre,children } = props;

    return (
        <div className='interes'>
            <h4>{nombre}</h4>
            <i>{children}</i>
        </div>
    )
}