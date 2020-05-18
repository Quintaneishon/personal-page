import React from 'react';
import Left from '../Left';
import Right from '../Right';
import Cargando from '../Cargando';

import './Body.scss';

export default function Body(props){
    const {
        datos: { result, loading, error },
        mostrar
      } = props;

    return(
        <div className='body-edit' >
            {loading || !result ? (
                    <Cargando />
                ) : (
                    <div className='row' id='principal'>
                    <div className='col-1-of-3'>
                        <Left 
                            foto={result.data.foto} 
                            nombre={result.data.name }
                            profesion={result.data.profession}
                        />
                    </div>
                    <div className='col-2-of-3'>
                        <Right 
                            mostrar={mostrar}
                            datos={result.data}
                        />
                    </div>
                    </div>
                )
            }
        </div>
    )
}