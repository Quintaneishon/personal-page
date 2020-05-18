import React from 'react';

import './Hobbies.scss';

export default function Hobbies(props){
    const {datos} = props;

    const items = []

    for (let i = 0; i < datos.length-1 ; i=i+2) {
        items.push(
            <div className='row'>
                <div className="col-1-of-2">
                    <div className='hobbie-item' key={`hobbie-${i}`}>
                        <h3>{datos[i].name}</h3>
                        <img src={datos[i].foto}></img>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className='hobbie-item' key={`hobbie-${i+1}`}>
                        <h3>{datos[i+1].name}</h3>
                        <img src={datos[i+1].foto}></img>
                    </div>
                </div>
            </div>
        );
    }

    return(
        <div className='hobbies'>
            {items}
        </div>
    )
}